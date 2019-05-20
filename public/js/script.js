
$(window).on("load", function () {
    console.log("hiding area and notes");
    $("#notes").hide();
});

//STARTS WING DROPDOWN MENU & REPLACES WITH AREA DROPDOWN MENU
$("#eastWing").on("click", function () {
    $("#wing").text("East Wing / ");
    $("#areaDrop").show();
    $("#wingDrop").replaceWith($("#areaDrop"));
    area();
})
$("#westWing").on("click", function () {
    $("#wing").text("West Wing / ");
    $("#areaDrop").show();
    $("#wingDrop").replaceWith($("#areaDrop"));
    area();
})

//FINISHES AREA AND STARTS THE ISSUE DROPDOWN MENU
function area() {
    $("#bathroom").on("click", function () {
        $("#wing").append("Bathroom / ");
        $("#issueDrop").show();
        $("#areaDrop").replaceWith($("#issueDrop"));
        issue();
    })
    $("#personalOffice").on("click", function () {
        $("#wing").append("Personal Office / ");
        $("#issueDrop").show();
        $("#areaDrop").replaceWith($("#issueDrop"));
        issue();
    })
    $("#cubicleArea").on("click", function () {
        $("#wing").append("Cubicle Area / ");
        $("#issueDrop").show();
        $("#areaDrop").replaceWith($("#issueDrop"));
        issue();
    })
    $("#lobbyOrReception").on("click", function () {
        $("#wing").append("Lobby or Reception / ");
        $("#issueDrop").show();
        $("#areaDrop").replaceWith($("#issueDrop"));
        issue();
    })
}

//FINISHES ISSUE AND BEGINS THE NOTES INPUT FIELD
function issue() {
    $("#HVAC").on("click", function () {
        $("#wing").append("HVAC / ");
        $("#notes").show();
        $("#issueDrop").replaceWith($("#submitNotes"));
        notes();
    })
    $("#plumbing").on("click", function () {
        $("#wing").append("Plumbing / ");
        $("#notes").show();
        $("#issueDrop").replaceWith($("#submitNotes"));
        notes();
    })
    $("#electrical").on("click", function () {
        $("#wing").append("Electrical / ");
        $("#notes").show();
        $("#issueDrop").replaceWith($("#submitNotes"));
        notes();
    });
};

//SUBMITS NOTES AND CREATES ISSUE notes DROPDWON
function notes() {
    $("#submitNotes").on("click", function () {
    $("#wing").append(($("#issueNotes").val()) + " / " );
    $("#notes").hide();  
    $("#issueDrop").replaceWith($("#severityDrop"));
    severity();
})
};

    function severity(){
        console.log("submitted notes");
        $(".dropdown-menu").on("click", function (){
        $("#wing").append($(".dropdown-item").val())
        })
    }

//NEW TASK OBJECT GATHERING DATA FROM EACH SELECTED OPTION
var newTask = {
    wing: [
        parseInt($("#eastWing").val()),
        parseInt($("#westWing").val())
    ],
    area: [
        parseInt($("#bathroom").val()),
        parseInt($("#office").val()),
        parseInt($("#lobby").val())
    ],
    issue: [
        parseInt($("#HVAC").val()),
        parseInt($("#plumbing").val()),
        parseInt($("#electrical").val())
    ],
    notes: [
        $("#issueNotes").val()
    ]
};