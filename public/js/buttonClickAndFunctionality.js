var array = [];
var newTask = {};
var hereIsTheWholeProblemArrayStart = ["zone", "department", "room", "probelm", "severity"];
var useThisArrayForSwitchCaseZone = [];
var useThisArrayForSwitchCaseDepartment = [];
var eastZoneOptionsArray = ["Purchasing", "Accounting", "Other Rooms"];
var westZoneOptionsArray = ["Sales", "Billing", "Other Rooms"]
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
        for: "nameGroupExampleInput",
        id: "errorName"
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
        if ($("#problemName").val().trim() === "") {
            $("#errorName").text("Please enter your Name")
            $("<style>#errorName {color : red ; font-weight: bold ; text-decoration: underline ; font-style: italic; }</style>").appendTo("#errorName")
        } else {
            newTask["name"] = ($("#problemName").val());
            buttonContainerDivForLoopCreater();
            $("#zoneDrop").empty();
            $("#nameForm").hide();
            $("#zoneDrop").show();
            var zoneArray = ["East Zone", "West Zone"]
            for (var h = 0; h < zoneArray.length; h++) {
                createButton(zoneArray[h], "#zoneDrop")
            }
            firstClick()
        }
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
    $("#note").empty();
    $("#notesForm").empty();
    switch (this.id) {
        case 'east zone':
            zoneButtonClickFunction('East Zone');
            break;
        case 'west zone':
            zoneButtonClickFunction('West Zone');
            break;
    }
})

var zoneButtonClickFunction = (value) => {
    newTask["zone"] = (value);
    hereIsTheWholeProblemArrayStart.splice(0, 1, value);
    hereIsTheWholeProblemArrayStart.splice(1, 1, "department");
    hereIsTheWholeProblemArrayStart.splice(2, 1, "room");
    hereIsTheWholeProblemArrayStart.splice(3, 1, "probelm");
    hereIsTheWholeProblemArrayStart.splice(4, 1, "severity");
    $("#zoneSummary").text(hereIsTheWholeProblemArrayStart.join(" - "));
    $("#roomDrop").empty();
    $("#departmentDrop").empty();
    $("#problemDrop").empty();
    $("#severityDrop").empty();
    $("#note").empty();
    $("#notesForm").empty();
    $("#roomDrop").show();
    if (value === 'East Zone') {
        useThisArrayForSwitchCaseZone = []
        for (var i = 0; i < eastZoneOptionsArray.length; i++) {
            createButton(eastZoneOptionsArray[i], "#departmentDrop");
            useThisArrayForSwitchCaseZone.push(eastZoneOptionsArray[i]);
        }
    } else if (value === 'West Zone') {
        useThisArrayForSwitchCaseZone = []
        for (var j = 0; j < westZoneOptionsArray.length; j++) {
            createButton(westZoneOptionsArray[j], "#departmentDrop");
            useThisArrayForSwitchCaseZone.push(westZoneOptionsArray[j]);
        }
    }
    $("input[type='button']").click(function () {
        for (var z = 0; z < useThisArrayForSwitchCaseZone.length; z++) {
            switch (this.id) {
                case useThisArrayForSwitchCaseZone[z].toLowerCase():
                    if (useThisArrayForSwitchCaseZone[z] === "Purchasing" || useThisArrayForSwitchCaseZone[z] === "Accounting" || useThisArrayForSwitchCaseZone[z] === "Sales" || useThisArrayForSwitchCaseZone[z] === "Billing") {
                        console.log("here")
                        array = ["Bathroom", "Personal Office", "Cubicle Area"]
                    } else if (useThisArrayForSwitchCaseZone[z] === "Other Rooms" && value === "East Zone") {
                        array = ["Conference Room", "Lobby or Reception"]
                    } else if (useThisArrayForSwitchCaseZone[z] === "Other Rooms" && value === "West Zone") {
                        array = ["Office Area", "Conference Room"]
                    } else {
                        console.log("there is a problem here")
                    }
                    departmentButtonClickFunction(useThisArrayForSwitchCaseZone[z], useThisArrayForSwitchCaseZone, array);;
                    break;
            }
        }
    });
}

var departmentButtonClickFunction = (value, array, secondArray) => {
    notesBoolean = false
    newTask["department"] = (value);
    hereIsTheWholeProblemArrayStart.splice(1, 1, value);
    hereIsTheWholeProblemArrayStart.splice(2, 1, "room");
    hereIsTheWholeProblemArrayStart.splice(3, 1, "probelm");
    hereIsTheWholeProblemArrayStart.splice(4, 1, "severity");
    $("#zoneSummary").text(hereIsTheWholeProblemArrayStart.join(" - "));
    $("#roomDrop").empty();
    $("#problemDrop").empty();
    $("#severityDrop").empty();
    $("#notesForm").empty();
    $("#roomDrop").show(); useThisArrayForSwitchCaseDepartment = []
    for (var y = 0; y < array.length; y++) {
        if (value === array[y]) {
            for (k = 0; k < secondArray.length; k++) {
                createButton(secondArray[k], "#roomDrop");
                useThisArrayForSwitchCaseDepartment.push(secondArray[k]);
            }
        }
    }
    $("input[type='button']").click(function () {
        for (var z = 0; z < useThisArrayForSwitchCaseDepartment.length; z++) {
            switch (this.id) {
                case useThisArrayForSwitchCaseDepartment[z].toLowerCase():
                    if (useThisArrayForSwitchCaseDepartment[z] === "Bathroom") {
                        array = ["Plumbing", "Electrical"]
                    } else if (useThisArrayForSwitchCaseDepartment[z] === "Personal Office") {
                        array = ["HVAC", "Electrical", "Technical", "Logins", "Equipment"]
                    } else if (useThisArrayForSwitchCaseDepartment[z] === "Cubicle Area") {
                        array = ["HVAC", "Electrical", "Technical", "Logins", "Equipment"]
                    } else if (useThisArrayForSwitchCaseDepartment[z] === "Lobby or Reception") {
                        array = ["HVAC", "Electrical", "Technical", "Logins", "Equipment"]
                    } else if (useThisArrayForSwitchCaseDepartment[z] === "Breakroom") {
                        array = ["HVAC", "Plumbing", "Electrical", "Equipment"]
                    } else if (useThisArrayForSwitchCaseDepartment[z] === "Office Area") {
                        array = ["HVAC", "Electrical", "Technical", "Equipment"]
                    } else if (useThisArrayForSwitchCaseDepartment[z] === "Conference Room") {
                        array = ["HVAC", "Electrical", "Technical", "Equipment"]
                    } else {
                        console.log("there is a problem here")
                    }
                    roomButtonClickFunction(useThisArrayForSwitchCaseDepartment[z], useThisArrayForSwitchCaseDepartment, array);
                    break;
            }
        }
    });
}

var roomButtonClickFunction = (value, array, secondArray) => {
    newTask["room"] = (value);
    hereIsTheWholeProblemArrayStart.splice(2, 1, value);
    hereIsTheWholeProblemArrayStart.splice(3, 1, "probelm");
    hereIsTheWholeProblemArrayStart.splice(4, 1, "severity");
    $("#zoneSummary").text((hereIsTheWholeProblemArrayStart.join(" - ")));
    $("#problemDrop").empty();
    $("#severityDrop").empty();
    $("#notesForm").empty();
    $("#problemDrop").show();
    useThisArrayForSwitchCaseOptions = []
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
    });
}

var problemsButtonClickFunction = (value) => {
    newTask["problem"] = (value);
    hereIsTheWholeProblemArrayStart.splice(3, 1, value);
    hereIsTheWholeProblemArrayStart.splice(4, 1, "severity");
    $("#zoneSummary").text((hereIsTheWholeProblemArrayStart.join(" - ")));
    $("#severityDrop").empty();
    $("#note").empty();
    $("#severityDrop").show();
    $("#notesForm").empty();
    createSeverityDropDownMenu()
    $(".severity-button").click(function () {
        severityDropDownButtonClickFunction(this.id);
    });
}

var severityDropDownButtonClickFunction = (num) => {
    newTask["severity"] = parseInt(num);
    hereIsTheWholeProblemArrayStart.splice(4, 1, num);
    $("#zoneSummary").text((hereIsTheWholeProblemArrayStart.join(" - ")));
    $("#note").empty();
    $("#notesForm").empty();
    $("#note").show();
    createNoteFormAndClickEvent();
}

var createNoteFormAndClickEvent = () => {
    $("<form>").attr({
        id: "notesForm"
    }).appendTo("#note")
    $("<label>Please Specify Problem (i.e. The sink is leaking. Max=250)</label>").attr({
        for: "formGroupExampleInput",
        id: "errorNote"
    }).appendTo("#notesForm");
    $('<input>').attr({
        type: 'text',
        id: "problemNotes",
        class: "form-control text-left",
        placeholder: "Example input"
    }).appendTo("#notesForm");
    $("<button>Submit Notes</button>").attr({
        id: "submitNotes",
        type: "button",
        class: "btn btn-secondary text-center"
    }).appendTo("#notesForm");
    $("#submitNotes").on("click", function () {
        if ($("#problemNotes").val().trim() === "") {
            $("#errorNote".text("Please write a short note on your problem."))
            $("<style>#errorNote {color:red ; font-weight: bold ; text-decoration: underline ; font-style: italic} </style>").appendTo("#errorNote")
        } else {
            newTask["note"] = ($("#problemNotes").val());
            post();
            location.reload(true);
        }

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

var createNewTaskButton = function () {
    var numberOfButtonsInContainer1 = document.querySelectorAll('#container1 div');
    var numberOfButtonsInContainer2 = document.querySelectorAll('#container2 div');
    var totalNumberOfButtons = parseInt(numberOfButtonsInContainer1.length + numberOfButtonsInContainer2.length);
    var newTask = $("#zoneSummary").text();
    $("<div>" + newTask + "</div>").attr({
        itemid: "itm-" + totalNumberOfButtons + 1,
        class: "btn btn-danger box-item ui-draggable ui-draggable-handle"
    }).appendTo("#container1")
}

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
                $("<div>" + data[i].name + " > " + data[i].zone + " > " + data[i].department + " > " + data[i].room + " > " + data[i].problem + " > " + data[i].note + " > " + data[i].severity + " > " + moment(data[i].updatedAt).format("MM-DD-YY, hh:mm a") + "</div>").attr({
                    itemid: data[i].id,
                    class: "btn btn-success box-item",
                }).appendTo("#container2")
            } else {
                $("<div>" + data[i].name + " > " + data[i].zone + " > " + data[i].department + " > " + data[i].room + " > " + data[i].problem + " > " + data[i].note + " > " + data[i].severity + " > " + moment(data[i].createdAt).format("MM-DD-YY, hh:mm a") + "</div>").attr({
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