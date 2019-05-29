// This code will only run in the firebase server and not in the browser
const functions = require('firebase-functions');
const admin = require('firebase-admin');
// Initialize the app and pass it functions config
// to be able to use the admin sdk to interact with different firebase services
// like the auth service and the firestore service
admin.initializeApp(functions.config().firebase);


// request this function to be run on a http request 
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello you!");
});

const createNotification = notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
}

// This function will trigger when a new project is been created using firestore service
exports.routineCreated = functions.firestore
.document('routines/{routine}')
.onCreate(doc => {
    const routine = doc.data();
    const notification = {
        content: 'Added a new project',
        user: `${routine.authorFirstName} ${routine.authorLastName}`,
        uid: routine.authorId,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);
});


// This function will trigger when a user has been created using the auth service
exports.userJoined = functions.auth.user()
.onCreate(user => {
    return admin.firestore().collection('users')
    .doc(user.uid).get().then(doc => {
        const newUser = doc.data();
        const notification = {
            content: 'Joined the party!',
            user: `${newUser.firstName} ${newUser.lastName}`,
            uid: user.uid,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification); 
    })
})