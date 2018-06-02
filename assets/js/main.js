var typed = new Typed('#intro', {
    strings: ["Find Friends...", "Find Partners...", "Find Bro's...", "Find Mates...", "Find Love...", "Find Family...", "Friend Finder."],
    typeSpeed: 30,
    backSpeed: 50,
    smartBackspace: true
});

$(".again").hide();
$(".matchInfo").hide();
$("#destText").hide();
$(".container").hide();
$(".container").fadeIn(3000);

$("#exploreSurv").on("click", function (event) {
    event.preventDefault();

    var scoreArr = [
        $("#answer1").val(), $("#answer2").val(), $("#answer3").val(), $("#answer4").val(), $("#answer5").val(),
        $("#answer6").val(), $("#answer7").val(), $("#answer8").val(), $("#answer9").val(), $("#answer10").val()
    ];

    var newFriend = {
        name: $("#friendName").val().trim(),
        photo: $("#friendUrl").val().trim(),
        score: scoreArr
    };


    $(".surveyCont").fadeOut();
    setTimeout(function () {
        $("#destText").fadeIn("slow");
    }, 1200);
    setInterval(function () {
        $("#destText").fadeOut("slow");
        setTimeout(function () {
            $(".matchInfo").fadeIn("slow");
            $(".again").fadeIn("slow");
        }, 1000);
    }, 3000);

    var currentURL = window.location.origin;
    // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
    $.ajax({ url: currentURL + "/api/friends", method: "GET" })
        .then(function (friendsData) {
            $("#matchName").text(friendsData[0].name);
            $(".matchInfo").append("<img class='matchPic'src=" + friendsData[0].photo + "alt='match photo'>")
        });

    $.post("/api/friends", newFriend,
        function (data) {

            $("#friendName").val("");
            $("#friendUrl").val("");
            $("#answer1").val("1");
            $("#answer2").val("1");
            $("#answer3").val("1");
            $("#answer4").val("1");
            $("#answer5").val("1");
            $("#answer6").val("1");
            $("#answer7").val("1");
            $("#answer8").val("1");
            $("#answer9").val("1");
            $("#answer10").val("1");


        });
});
