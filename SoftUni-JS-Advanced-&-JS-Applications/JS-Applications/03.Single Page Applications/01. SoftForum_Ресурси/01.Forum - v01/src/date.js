export function getDate() {
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const milliSeconds = currentDate.getMilliseconds();

    const fullDate = `${year}-${checkDate(month)}-${checkDate(date)}T${checkDate(hour)}:${checkDate(minutes)}:${checkDate(seconds)}.${checkMilliSeconds(milliSeconds)}Z`;

    return fullDate;

    function checkDate(date) {
        return date < 10 ? `0${date}` : date;
    }

    function checkMilliSeconds(date) {
        return date.toString().padStart(3, 0);
    }
}