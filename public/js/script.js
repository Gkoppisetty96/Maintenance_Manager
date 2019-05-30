$(window).on("load", function () {
// $(document).ready(function () {
    console.log("window is ready");
    var path = window.location.pathname;
    var page = path.split("/").pop();
    // console.log(page);
    htmlBaseDivsCreater();
    getTasks();
    if (page === "index") {
        $("#newTask").on("click", function () {
            createNameFormAndClickEvent();
        })
    }
});