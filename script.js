$("button").click(function() {
    let username = $("input").val();
    if (username === "") {
        $("h1").text("Please enter your name ");
    } else {
        $("h1").text("Sup " + username);

    }
});
