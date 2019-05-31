$(window).on("load", function () {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    htmlBaseDivsCreater();
    getTasks();
    if (page === "index") {
        $("#newTask").on("click", function () {
            $("#nameForm").empty();
            createNameFormAndClickEvent();
        })
    }
});