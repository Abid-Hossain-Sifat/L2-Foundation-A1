//--------- Problem 01 ---------//

function describeValue(value){
    let type = typeof value;

    let check;
    if (value){
        check = "truthy"
    } else {
        check = "falsy"
    };

    return type + " | " + check;
}


//--------- Problem 02 ---------//

function getDayType(day){
    let lowerCaseDay = day.toLowerCase();

    switch(lowerCaseDay){
        //weekend
        case "friday":
            case "saturday":

            return "Weekend";


        //Working Day
        case "sunday":
            case "monday":
                case "tuesday":
                    case "wednesday":
                        case "thursday":

                        return "Working Day";

        default:
            return "Invalid Day"
    };
};

