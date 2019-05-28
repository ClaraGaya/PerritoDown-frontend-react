const format = {
    compare:(date) => {
        const today = new Date();
        return Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) ) /(1000 * 60 * 60 * 24));
    },
    dateTimeCal: (ts) => {
        const date = ts.toDate();

        const diff = format.compare(date);
        var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday"];

        switch(diff) {
            case 0:
                return 'Today at ' + date.toLocaleTimeString();
            case -1:
                return 'Yesterday at ' + date.toLocaleTimeString();
            case -2:
                return '2 days ago at ' + date.toLocaleTimeString();
            case -3:
                return '3 days ago at ' + date.toLocaleTimeString();
            case -4:
            case -5:
            case -6:
                return 'Last ' + weekday[date.getDay()] + ' at ' + date.toLocaleTimeString();
            default: 
                return ts.toDate().toLocaleString();
        }
        
    }
}
export default format;