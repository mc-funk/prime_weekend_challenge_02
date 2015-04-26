
var i;
var j;
var groupSet;
var groupAdjustor = 1;
var topNum = 10;
var cohort = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne",
    "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve",
    "Terry", "Tracy", "Vince", "Brian", "Chelsea"];

$(document).ready(function () {
    for (i = 2; i < topNum + 1; i++) {
        $(".buttonField").append("<div class='numberButton' id='number" + i + "'>" + i + "</div>");
        }

    $(".buttonField").on("click", ".numberButton", function() {
        console.log($(this) + "button click worked");
        for (i = 2; i < topNum + 2; i++) {
            //ID string search from http://stackoverflow.com/a/640991/4318362
            if ($(this).attr('id').indexOf(i) != -1) {
                console.log("Holy shit this actually worked for " + i);
                makeTeams(cohort, i);
                console.log("Group array: ", groupSet)
            }
        }
    });

    function makeTeams(array, numTeams) {
        groupSet = [];
        $(".groupField").empty();
        array = shuffleArray(array);
        for (i = 0; i < numTeams; i++) {
            groupSet.push([]);
            $(".groupField").append("<div class='groupBox' id='group" + i + "'></div>");
            $('#group' + i).append("<div class='groupTitle'>Group " + (i + 1) + "</div>");
        }
        for (i = 0; i < array.length; i++) {
            cohortIndex = i % numTeams;
            groupSet[cohortIndex].push(array[i]);
        }
        for (i = 0; i < groupSet.length; i++) {
            for (j = 0; j < groupSet[i].length; j++) {
                $('#group' + i).append("<p>" + groupSet[i][j] + "</p>");
            }
        }
    }

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

});