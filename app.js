var i;
var j;
var k;
var groupSet;
var topNum = 10;
var cohort = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne",
    "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve",
    "Terry", "Tracy", "Vince", "Brian", "Chelsea"];
var pplSelected;
/* groupAdjustor = {
 }*/

$(document).ready(function () {
    $(".selectorField").on("click", ".selector", function() {
        pplSelected = false;
        //adjust selected classes
        $(this).siblings().removeClass("chosenSelector");
        $(this).addClass("chosenSelector");
        //clear any existing groups/number selection
        $("#groupsHeader").hide();
        $(".groupField").empty();
        $(".buttonField").children().removeClass("chosenNumber");
        //Check button id, adjust groupAdjustor accordingly (1 for groups, calculate # groups from # people otherwise)
        if ($(this).attr('id').indexOf("numPpl") != -1) {
            pplSelected = true;
            console.log("People has been selected");
        }
    });

    $(".buttonField").on("mouseenter", ".numberButton", function(){
            //console.log("the mousenter is working at all");
            $(this).addClass("numberHover");
            /*$(this).animate({
                boxShadow:'2px 3px #27496d',
                backgroundColor:''}, "slow");*/
        });
    $('.buttonField').on("mouseleave", ".numberButton", function(){
            //console.log("the mouseleave is working at all");
            $(this).removeClass("numberHover");
            //$(this).animate({boxShadow:'2px 3px #27496d', marginRight:'10px'}, "slow");
        });
    $(".selectorField").on("mouseenter", ".selector", function(){
        //console.log("the selector mousenter is working at all");
        $(this).addClass("selectorHover");
    });
    $(".selectorField").on("mouseleave", ".selector", function(){
        //console.log("the selector mouseleave is working at all");
        $(this).removeClass("selectorHover");
    });

    for (i = 2; i < topNum + 1; i++) {
        $(".buttonField").append("<div class='numberButton' id='number" + i + "'>" + i + "</div>");
    }

    $(".buttonField").on("click", ".numberButton", function() {

        for (k = 2; k < topNum + 2; k++) {
            //ID string search from http://stackoverflow.com/a/640991/4318362
            if ($(this).attr('id').indexOf(k) != -1) {
                $(this).siblings().removeClass("chosenNumber");
                $(this).addClass("chosenNumber");
                if (pplSelected) {
                    numGroups = Math.ceil(cohort.length / k);
                    console.log("numGroups adjusted")
                } else {
                    numGroups = k;
                }
                console.log("Number of groups: " + numGroups);
                makeTeams(cohort, numGroups);
                console.log("Group array: ", groupSet);
            }
        }
    });

    function makeTeams(array, numTeams) {
        groupSet = [];
        $(".groupField").empty();
        $('#groupsHeader').hide();
        array = shuffleArray(array);
        for (i = 0; i < numTeams; i++) {
            groupSet.push([]);
            $(".groupField").append("<div style='display: none' class='groupBox' id='group" + i + "'></div>");
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
            $("#groupsHeader").slideDown(300);
            $('#group' + i).slideDown(300);
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
});