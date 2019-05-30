$(window).on("load", function () {
// $(document).ready(function () {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    // console.log(page);
    htmlBaseDivsCreater();
    if (page === "index.html") {
        $("#newTask").on("click", function () {
            createNameFormAndClickEvent();
        })
    }
});