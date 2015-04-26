
var i;
var groupSet;
var numNums = 5;
var cohort = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne",
    "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve",
    "Terry", "Tracy", "Vince", "Brian", "Chelsea"];

$(document).ready(function () {
    for (i = 2; i < numNums + 2; i++) {
        $(".buttonField").append("<div class='numberButton' id='number" + i + "'>" + i + "</div>");
        $(".groupField").append("<div class='groupBox' id='group" + i + "'></div>");
        }
    });

    $(".buttonField").on("click", ".numberButton", function() {
        console.log($(this) + "button click worked");
        for (i = 2; i < numNums + 2; i++) {
            if ($(this).attr('id').indexOf(i) != -1) {
                console.log("Holy shit this actually worked for " + i);
                makeTeams(cohort, i);
            }
        }


    /* if($('#mytable td:last-child').attr('id').indexOf('d') != -1) {
     alert('found!');
     }*/
function makeTeams(array, numTeams) {
    groupSet = [];
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