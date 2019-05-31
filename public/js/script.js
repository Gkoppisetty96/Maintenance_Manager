$(window).on("load", function () {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log(path)
    htmlBaseDivsCreater();
    getTasks();
    if (page === "index" || path === "/") {
        console.log(path)
        $("#newTask").on("click", function () {
            $("#nameForm").empty();
            createNameFormAndClickEvent();
        })
    }
});