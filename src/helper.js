export const stringDateToDate = (stringDate) => {
    let tempStringDate, day, month, year;
    tempStringDate = stringDate;
    //get day
    year = tempStringDate.substring(0, tempStringDate.indexOf("-"));

    //remove day from tempDate
    tempStringDate = tempStringDate.substring((tempStringDate.indexOf("-") + 1), tempStringDate.length)
    //get month
    month = tempStringDate.substring(0, tempStringDate.indexOf("-"));

    //remove month from tempDate
    tempStringDate = tempStringDate.substring((tempStringDate.indexOf("-") + 1), tempStringDate.length)

    //get year
    day = tempStringDate.substring(0,tempStringDate.indexOf('T'));

    return new Date(year,Number.parseInt(month)-1,day);//in the month decrease in one because in the Date the index of the month beginning from 0.

}

export const daysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];