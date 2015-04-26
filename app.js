
var i;
var groupSet;
var groupArray;
var cohort = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne",
    "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve",
    "Terry", "Tracy", "Vince", "Brian", "Chelsea"];

function makeTeams(array, numTeams) {
    groupSet = [];
    groupArray = [];
    array = shuffleArray(array);
    for (i = 0; i < numTeams; i++) {
        groupSet.push([]);
    }
    for (i = 0; i < array.length; i++) {
        cohortIndex = i % numTeams;
        groupSet[cohortIndex].push(array[i]);
    }
    return groupSet;
}
console.log(makeTeams(cohort, 4));
console.log(makeTeams(cohort, 5));
console.log(makeTeams(cohort, 6));


//shuffleArray function: implementation of Fisher-Yates shuffle algorithm
//Found at: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
//Gets a random index number adjusting for length + 1, then switches a randomly selected array[j]
//into the current array[i] position and the current array[i] into the place formerly held by the
// randomly found array[j].
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//random integer function provided by Scott Bromander
function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}
