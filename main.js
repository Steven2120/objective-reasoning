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
    hardest.reduce(function (sol, obj) {
        if (obj.averageScore < sol.averageScore) {
            return obj.name;
        } else {
            return sol.name;
        } 
    })
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