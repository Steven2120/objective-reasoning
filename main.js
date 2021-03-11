// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(user) {
    if (user.userRole === "ADMIN") {
        return true;
    } else {
        return false;
    }
}

function getEmail(user) {
    return user.firstName.concat(".", user.lastName, "@codeimmersives.com").toLowerCase();
}

function getPlaylistLength(list) {
    return list.songs.length;
}

function getHardestHomework(hardest) {
    //define variables to act as placeholders for lowest scores and the name of that hw with the lowest score
    let lowestScore = 999999999;
    let nameOfHardestHw = "";
    //loops through array of objects and if score is lower than lowestScore it will store score each iteration of loop in lowestScore variable and will also push the name of it to nameOfHardestHw.
    for (const item of hardest) {
        if (item.averageScore < lowestScore) {
            lowestScore = item.averageScore;
            nameOfHardestHw = item.name;
        }
    }
    //returns the name of the hardest hw
    return nameOfHardestHw;
}

function createPhonebook(name, number) {
    //defines variable to an empty object that will store solution
    let final = {};
    //loops through both name and number arrays with forEach method and inserts name as keys and number as values
    name.forEach((name, i) => final[name] = number[i])
    //returns object
    return final;
}


// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};