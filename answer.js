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
