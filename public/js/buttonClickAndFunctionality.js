var array = [];
var newTask = {};
// var hereIsTheWholeProblemArrayStart = ["name", "zone", "department", "room", "unitNumber", "probelm", "serverity", "note"];
var useThisArrayForSwitchCaseRoom = [];
var eastZoneOptionsArray = ["Bathroom", "LobbyOrReception", "PersonalOffice", "cubicleArea", "Breakroom", "OfficeArea"];
var westZoneOptionsArray = ["Bathroom", "LobbyOrReception", "PersonalOffice", "cubicleArea", "ConferenceRoom", "OfficeArea"];
var useThisArrayForSwitchCaseOptions = [];

//ENTER USERNAME AND PASSWORD TO ACCESS ADMIN PAGE
$('body').on('click', 'li#nav-item-admin', function () {
    $('<input>').attr({
        type: 'text',
        id: "username",
        placeholder: "Username"
    }).appendTo(".navbar-nav");
    $('<input>').attr({
        type: 'password',
        id: "password",
        placeholder: "Password"
    }).appendTo(".navbar-nav");

    submitUsernameAndPassword();
});

function submitUsernameAndPassword() {
    if ($("#password").val() !== null) {

        $(".navbar-nav").keypress(function (e) {
            var key = e.which;
            if (key === 13) {
                if ($("#username").val() === "admin" && $("#password").val() === "password") {
                    location.replace("admin");
                }
                else {
                    alert("The username or password you entered is incorrect.  Please try again");
                }
                return false;
            }
        });
    }
};

var createNameFormAndClickEvent = () => {
    $("<form>").attr({
        id: "nameForm"
    }).appendTo("#everything-container")
    $("<label>Please enter your fullname</label>").attr({
        for: "nameGroupExampleInput"
    }).appendTo("#nameForm");
    $('<input>').attr({
        type: 'text',
        id: "problemName",
        class: "",
        placeholder: "FullName"
    }).appendTo("#nameForm");
    $("<button>Confirm Your Name</button>").attr({
        id: "submitName",
        type: "button",
        class: "btn btn-secondary text-center"
    }).appendTo("#nameForm");
    $("#submitName").on("click", function () {
        newTask["name"] = ($("#problemName").val());
        buttonContainerDivForLoopCreater();
        // $("#zoneSummary").append($("#problemNotes").val());
        // hereIsTheWholeProblemArrayStart.splice(0, 1, $("#problemName").val());
        // console.log(hereIsTheWholeProblemArrayStart);
        $("#nameForm").hide();
        $("#zoneDrop").show();
        // $("#nameForm").replaceWith($("#zoneDrop"));
        var zoneArray = ["eastZone", "westZone"]
        for (var h = 0; h < zoneArray.length; h++) {
            createButton(zoneArray[h], "#zoneDrop")
        }
        firstClick()
    });
    //ALLOWS ENTER KEYPRESS TO SUBMIT NAME
    $("input#problemName").keypress(function (e) {
        var key = e.which;
        if (key == 13) {
            $("#submitName").click();
            return false;
        }
    });
}

var firstClick = () => $("input[type='button']").click(function () {
    newTask["zone"] = ($(this).val());
    $("#notesForm").empty();
    switch (this.id) {
        case 'eastzone':
            zoneButtonClickFunction('East Zone');
            break;
        case 'westzone':
            zoneButtonClickFunction('West Zone');
            break;
    }
})

var zoneButtonClickFunction = (value) => {
    $("#zoneSummary").text(value + " > ");
    // hereIsTheWholeProblemArrayStart.splice(1, 1, value);
    // console.log(hereIsTheWholeProblemArrayStart)
    $("#roomDrop").empty();
    $("#problemDrop").empty();
    $("#severityDrop").empty();
    $("#notesForm").empty();
    $("#roomDrop").show();
    // $("#zoneDrop").replaceWith($("#roomDrop"));
    // if (value === 'East Zone') {
    //     for (var i = 0; i < eastZoneOptionsArray.length; i++) {
    //         createButton(eastZoneOptionsArray[i]);
    //         useThisArrayForSwitchCaseRoom.push(eastZoneOptionsArray[i]);
    //     }
    // } else if (value === 'West Zone') {
    //     for (var j = 0; j < westZoneOptionsArray.length; j++) {
    //         createButton(westZoneOptionsArray[j]);
    //         useThisArrayForSwitchCaseRoom.push(westZoneOptionsArray[j]);
    //     }
    // }
    if (value === 'East Zone') {
        useThisArrayForSwitchCaseRoom = []
        for (var i = 0; i < eastZoneOptionsArray.length; i++) {
            createButton(eastZoneOptionsArray[i]);
            useThisArrayForSwitchCaseRoom.push(eastZoneOptionsArray[i]);
            console.log(useThisArrayForSwitchCaseRoom)
        }
    } else if (value === 'West Zone') {
        useThisArrayForSwitchCaseRoom = []
        for (var j = 0; j < westZoneOptionsArray.length; j++) {
            createButton(westZoneOptionsArray[j]);
            useThisArrayForSwitchCaseRoom.push(westZoneOptionsArray[j]);
            console.log(useThisArrayForSwitchCaseRoom)
        }
    }
    $("input[type='button']").click(function () {
        newTask["room"] = ($(this).val());
        for (var z = 0; z < useThisArrayForSwitchCaseRoom.length; z++) {
            switch (this.id) {
                case useThisArrayForSwitchCaseRoom[z].toLowerCase():
                    if (useThisArrayForSwitchCaseRoom[z] === "Bathroom") {
                        array = ["Plumbing", "Electrical"]
                    } else if (useThisArrayForSwitchCaseRoom[z] === "PersonalOffice") {
                        array = ["HVAC", "Electrical", "Technical", "Logins", "Equipment"]
                    } else if (useThisArrayForSwitchCaseRoom[z] === "cubicleArea") {
                        array = ["HVAC", "Electrical", "Technical", "Logins", "Equipment"]
                    } else if (useThisArrayForSwitchCaseRoom[z] === "LobbyOrReception") {
                        array = ["HVAC", "Electrical", "Technical", "Logins", "Equipment"]
                    } else if (useThisArrayForSwitchCaseRoom[z] === "Breakroom") {
                        array = ["HVAC", "Plumbing", "Electrical", "Equipment"]
                    } else if (useThisArrayForSwitchCaseRoom[z] === "OfficeArea") {
                        array = ["HVAC", "Electrical", "Technical", "Equipment"]
                    } else if (useThisArrayForSwitchCaseRoom[z] === "ConferenceRoom") {
                        array = ["HVAC", "Electrical", "Technical", "Equipment"]
                    } else {
                        console.log("there is a problem here")
                    }
                    roomButtonClickFunction(useThisArrayForSwitchCaseRoom[z], useThisArrayForSwitchCaseRoom, array);
                    break;
            }
        }
        // console.log(useThisArrayForSwitchCaseRoom)
        //     useThisArrayForSwitchCaseRoom = []
        //     console.log(useThisArrayForSwitchCaseRoom)
    });
}

// var zoneButtonClickFunction = (value) => {
//     $("#zoneSummary").text(value + " > ");
//     console.log(value)
//     newTask["zone"] = (value);
//     console.log(newTask);
//     // hereIsTheWholeProblemArrayStart.splice(1, 1, value);
//     // console.log(hereIsTheWholeProblemArrayStart)
//     $("#roomDrop").empty();
//     $("#problemDrop").empty();
//     $("#severityDrop").empty();
//     $("#notesForm").empty();
//     $("#roomDrop").show();
//     // $("#zoneDrop").replaceWith($("#roomDrop"));
//     if (value === 'East Zone') {
//         for (var i = 0; i < eastZoneOptionsArray.length; i++) {
//             createButton(eastZoneOptionsArray[i]);
//             useThisArrayForSwitchCaseRoom.push(eastZoneOptionsArray[i]);
//         }
//     } else if (value === 'West Zone') {
//         for (var j = 0; j < westZoneOptionsArray.length; j++) {
//             createButton(westZoneOptionsArray[j]);
//             useThisArrayForSwitchCaseRoom.push(westZoneOptionsArray[j]);
//         }
//     }
//     $("input[type='button']").click(function () {
//         for (var z = 0; z < useThisArrayForSwitchCaseRoom.length; z++) {
//             switch (this.id) {
//                 case useThisArrayForSwitchCaseRoom[z].toLowerCase():
//                     if (useThisArrayForSwitchCaseRoom[z] === "Bathroom") {
//                         array = ["Plumbing", "Electrical"]
//                     } else if (useThisArrayForSwitchCaseRoom[z] === "PersonalOffice") {
//                         array = ["HVAC", "Electrical", "Technical", "Logins", "Equipment"]
//                     } else if (useThisArrayForSwitchCaseRoom[z] === "cubicleArea") {
//                         array = ["HVAC", "Electrical", "Technical", "Logins", "Equipment"]
//                     } else if (useThisArrayForSwitchCaseRoom[z] === "LobbyOrReception") {
//                         array = ["HVAC", "Electrical", "Technical", "Logins", "Equipment"]
//                     } else if (useThisArrayForSwitchCaseRoom[z] === "Breakroom") {
//                         array = ["HVAC", "Plumbing", "Electrical", "Equipment"]
//                     } else if (useThisArrayForSwitchCaseRoom[z] === "OfficeArea") {
//                         array = ["HVAC", "Electrical", "Technical", "Equipment"]
//                     } else if (useThisArrayForSwitchCaseRoom[z] === "ConferenceRoom") {
//                         array = ["HVAC", "Electrical", "Technical", "Equipment"]
//                     } else {
//                         console.log("there is a problem here")
//                     }
//                     roomButtonClickFunction(useThisArrayForSwitchCaseRoom[z], useThisArrayForSwitchCaseRoom, array);
//                     break;
//             }
//         }
//     });
// }

var roomButtonClickFunction = (value, array, secondArray) => {
    $("#zoneSummary").append(value + " > ");
    // hereIsTheWholeProblemArrayStart.splice(2, 1, value);
    // console.log(hereIsTheWholeProblemArrayStart)
    $("#problemDrop").empty();
    $("#severityDrop").empty();
    $("#notesForm").empty();
    $("#problemDrop").show();
    // $("#roomDrop").replaceWith($("#problemDrop"));
    for (var y = 0; y < array.length; y++) {
        if (value === array[y]) {
            for (k = 0; k < secondArray.length; k++) {
                createButton(secondArray[k], "#problemDrop");
                useThisArrayForSwitchCaseOptions.push(secondArray[k]);
            }
        }
    }
    $("input[type='button']").click(function () {
        newTask["problem"] = ($(this).val());
        for (var x = 0; x < useThisArrayForSwitchCaseOptions.length; x++) {
            switch (this.id) {
                case useThisArrayForSwitchCaseOptions[x].toLowerCase():
                    if (useThisArrayForSwitchCaseOptions[x].toLowerCase()) {
                        problemsButtonClickFunction(useThisArrayForSwitchCaseOptions[x])
                    }
                    break;
            }
        }
    }
    );
}

var problemsButtonClickFunction = (value) => {
    $("#zoneSummary").append(value + " > ");
    // hereIsTheWholeProblemArrayStart.splice(4, 1, value);
    // console.log(hereIsTheWholeProblemArrayStart)
    $("#severityDrop").empty();
    $("#note").empty();
    $("#severityDrop").show();
    $("#notesForm").empty();
    // $("#problemDrop").replaceWith($("#severityDrop"));
    createSeverityDropDownMenu()
    $("input[type='button']").click(function () {
        severityDropDownButtonClickFunction(this.id);
    });;
}

var severityDropDownButtonClickFunction = (num) => {
    $("#zoneSummary").append(num + " > ");
    newTask["severity"] = parseInt(num);
    // hereIsTheWholeProblemArrayStart.splice(5, 1, id);
    // console.log(hereIsTheWholeProblemArrayStart)
    $("#note").empty();
    $("#notesForm").empty();
    $("#notes").show();
    // $("#severityDrop").hide();
    createNoteFormAndClickEvent();
}

var createNoteFormAndClickEvent = () => {
    $("<form>").attr({
        id: "notesForm"
    }).appendTo("#everything-container")
    $("<label>Please Specify Problem (i.e. The sink is leaking. Max=150</label>").attr({
        for: "formGroupExampleInput"
    }).appendTo("#notesForm");
    $('<input>').attr({
        type: 'text',
        id: "problemNotes",
        class: "form-control text-center",
        placeholder: "Example input"
    }).appendTo("#notesForm");
    $("<button>Submit Notes</button>").attr({
        id: "submitNotes",
        type: "button",
        class: "btn btn-secondary text-center"
    }).appendTo("#notesForm");
    $("#submitNotes").on("click", function () {
        $("#zoneSummary").append($("#problemNotes").val());
        newTask["note"] = ($("#problemNotes").val());
        post();
        // hereIsTheWholeProblemArrayStart.splice(6, 1, $("#problemNotes").val());
        // console.log(hereIsTheWholeProblemArrayStart);
        $("#notesForm").hide();
        $("#zoneDrop").hide();
        $("#roomDrop").hide();
        $("#problemDrop").hide();
        $("#severityDrop").hide();
        // createNewTaskButton();
    });
    //ALLOWS ENTER KEYPRESS TO SUBMIT NOTES
    $("input#problemNotes").keypress(function (e) {
        var key = e.which;
        if (key == 13) {
            $("#submitNotes").click();
            return false;
        }
    });
}

// var createNewTaskButton = function () {
//     var numberOfButtonsInContainer1 = document.querySelectorAll('#container1 div');
//     var numberOfButtonsInContainer2 = document.querySelectorAll('#container2 div');
//     var totalNumberOfButtons = parseInt(numberOfButtonsInContainer1.length + numberOfButtonsInContainer2.length);
//     var newTask = $("#zoneSummary").text();
//     $("<div>" + newTask + "</div>").attr({
//         itemid: " + totalNumberOfButtons + 1,
//         class: "btn btn-danger box-item ui-draggable ui-draggable-handle"
//     }).appendTo("#container1")    
// }

var post = () => {
    event.preventDefault();
    $.post("/api/tasks/", newTask)
        .then(
                getTasks()
        );
};

var getTasks = () => {
    $.get("/api/tasks/", function (data) {
        $("#container2").empty();
        $("#container1").empty();
        for (var i = 0; i < data.length; i++) {
            if (data[i].completed === true) {
                $("<div>" + data[i].id + " - " + data[i].name + " - " + data[i].zone + " > " + data[i].room + " > " + data[i].problem + " > " + data[i].note + " > " + data[i].severity + " > " + "</div>").attr({
                    itemid: data[i].id,
                    class: "btn btn-danger box-item",
                }).appendTo("#container2")
            } else {
                $("<div>" + data[i].id + " > " + data[i].name + " > " + data[i].zone + " > " + data[i].room + " > " + data[i].problem + " > " + data[i].note + " > " + data[i].severity + " > " + moment(data[i].createdAt).format("MM-DD-YY, hh:mm a") + "</div>").attr({
                    itemid: data[i].id,
                    class: "btn btn-danger box-item",
                }).appendTo("#container1")
            }
            if (page === "admin") {
                droppableFunctionality();
            }
        }
    })
}

var droppableFunctionality = () => {
    $(document).ready(function () {
        $('.box-item').draggable({
            cursor: 'move',
            helper: "clone"
        });
        $("#container1").droppable({
            drop: function (event, ui) {
                var id = $(event.originalEvent.toElement).attr("itemid");
                $('.box-item').each(function () {
                    if ($(this).attr("itemid") === id) {
                        $(this).appendTo("#container1");

                        var newStatus = {
                            id: id,
                            completed: false
                        };

                        $.ajax("/api/tasks/" + id, {
                            type: "PUT",
                            data: newStatus
                        })
                            .then(getTasks)
                    }
                });
            }
        });
        $("#container2").droppable({
            drop: function (event, ui) {
                var id = $(event.originalEvent.toElement).attr("itemid");
                $('.box-item').each(function () {
                    if ($(this).attr("itemid") === id) {
                        $(this).appendTo("#container2");

                        var newStatus = {
                            id: id,
                            completed: true
                        };

                        $.ajax("/api/tasks/" + id, {
                            type: "PUT",
                            data: newStatus
                        })
                            .then(getTasks)
                    }
                });
            }
        });
    });
};