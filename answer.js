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


//--------- Problem 03 ---------//

function validateUsername(username){
    if(username.length < 4){
        return "Too Short";
    };
    if(username.includes(" ")){
        return "No Space Allowed";
    };
    if(username.toLowerCase().includes("admin")){
        return "Reserved Word";
    }
    return "Available"
};


//--------- Problem 04 ---------//

function getCngFare(distance, isNight = false, waitingMinutes = 0){
    let fare = 50;
    fare = fare + waitingMinutes *2;
    
    if (distance >2){
        fare = fare + (distance - 2) * 15;
    };

    if (isNight){
        fare =fare + fare *0.20;
    };

    return fare;
};

//--------- Problem 05 ---------//

const getChaseVerdict = (target, scored, ballsLeft) => {

    let runsNeed = target - scored ;
    let requiredRunPerOver = (runsNeed / ballsLeft) * 6;
    let result;

    if (runsNeed <=0){
        return "Won";
    };

    if (ballsLeft <= 0){
        return "Lost";
    }

    if (requiredRunPerOver <= 6){
        result = "Comfortable";
    } else if (requiredRunPerOver <=12){
        result = "Tough";
    } else {
        result = "Almost Impossible";
    };

    return "Need " + runsNeed + " runs in " + ballsLeft + " balls | " + result;
};




//--------- END ---------//