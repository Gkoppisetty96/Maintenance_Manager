$(window).on("load", function () {
    console.log("hiding area and notes");
    $("#notes").hide();
});

var newTask = {};

//STARTS WING DROPDOWN MENU & REPLACES WITH AREA DROPDOWN MENU
$("#eastWing").on("click", function () {
    newTask["zone"] = ($(this).val());
    console.log(newTask);
    $("#wing").text("East Wing / ");
    $("#areaDrop").show();
    $("#wingDrop").replaceWith($("#areaDrop"));
    area();

})
$("#westWing").on("click", function () {
    newTask["zone"] = ($(this).val());
    console.log(newTask);
    $("#wing").text("West Wing / ");
    $("#areaDrop").show();
    $("#wingDrop").replaceWith($("#areaDrop"));
    area();
})

//FINISHES AREA AND STARTS THE ISSUE DROPDOWN MENU
function area() {
    $("#bathroom").on("click", function () {
        newTask["unitNumber"] = ($(this).val());
        console.log(newTask);
        $("#wing").append("Bathroom / ");
        $("#issueDrop").show();
        $("#areaDrop").replaceWith($("#issueDrop"));
        issue();
    })
    $("#personalOffice").on("click", function () {
        newTask["unitNumber"] = ($(this).val());
        console.log(newTask);
        $("#wing").append("Personal Office / ");
        $("#issueDrop").show();
        $("#areaDrop").replaceWith($("#issueDrop"));
        issue();
    })
    $("#cubicleArea").on("click", function () {
        newTask["unitNumber"] = ($(this).val());
        console.log(newTask);
        $("#wing").append("Cubicle Area / ");
        $("#issueDrop").show();
        $("#areaDrop").replaceWith($("#issueDrop"));
        issue();
    })
    $("#lobbyOrReception").on("click", function () {
        newTask["unitNumber"] = ($(this).val());
        console.log(newTask);
        $("#wing").append("Lobby or Reception / ");
        $("#issueDrop").show();
        $("#areaDrop").replaceWith($("#issueDrop"));
        issue();
    })
}

//FINISHES ISSUE AND BEGINS THE NOTES INPUT FIELD
function issue() {
    $("#HVAC").on("click", function () {
        newTask["problem"] = ($(this).val());
        console.log(newTask);
        $("#wing").append("HVAC / ");
        $("#severityDrop").show();
        $("#issueDrop").replaceWith($("#severityDrop"));
        severity();
    })
    $("#plumbing").on("click", function () {
        newTask["problem"] = ($(this).val());
        console.log(newTask);
        $("#wing").append("Plumbing / ");
        $("#severityDrop").show();
        $("#issueDrop").replaceWith($("#severityDrop"));
        severity();
    })
    $("#electrical").on("click", function () {
        newTask["problem"] = ($(this).val());
        console.log(newTask);
        $("#wing").append("Electrical / ");
        $("#severityDrop").show();
        $("#issueDrop").replaceWith($("#severityDrop"));
        severity();
    });
};

function severity() {
    $(".dropdown-item").on("click", function () {
        console.log("dropdown working");
        newTask["severity"] = parseInt(($(this).val()));
        console.log(newTask);
        $("#wing").append("Severity Level: " + ($(".dropdown-item").val()) + " / ");
        $("#notes").show();
        $("#severityDrop").hide();
        notes();
    })
}

//SUBMITS NOTES AND CREATES ISSUE notes DROPDWON
function notes() {
    $("#submitNotes").on("click", function () {
        console.log("button for note");
        newTask["note"] = ($("#issueNotes").val());
        console.log(newTask);
        $("#wing").append($("#issueNotes").val());
        $("#notes").hide();
    })

};

$("#finalSubmit").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    console.log("button for post", newTask);
    event.preventDefault();

    // Send the POST request.
    $.post("/api/tasks/", newTask)
      .then(
      function(data) {
        console.log("added a task" + data);
        // Reload the page to get the updated list
        // location.reload();
      }
    );
  });