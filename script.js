let count = 0;
$(".catimg").hide();
$(".Ocicat").hide();
$(".Singapura").hide();
$(".Maine").hide();
$(".Siamese").hide();
$(".Cry").hide();
$(".Crytwo").hide();

$(".submit").click(function() {
    $(".catimg").show();
    let age = $(".age-input").val();
    let month = $(".month-input").val();
    let personality = $(".personality-input").val();
    let listAge = "<li class='age-button'>" + " I am " + age + " years of age." + "</li>";
    $(".given-list").append(listAge);

    let listMonth = "<li class='month-button'>" + " I was born on the month of " + month + "." + "</li>";
    $(".given-list").append(listMonth);


    let listPersonality = "<li class='personality-button'>" + " I am more of a " + personality + "." + "</li>";
    $(".given-list").append(listPersonality);
    alert("Purrfect!");

    $("input").val();
    let countS = (count += 1);
    $("#timestaken").text("You took this quiz " + countS + " times already!");


   
    if (personality === "Introvert" || "introvert" && age <= 18) {
        console.log("BlepA");
        $(".kitimg").hide();
        $(".Ocicat").show();
        $(".message").text("You are a Ocicat");
        $("p").hide();
        $("input").hide();
        $(".submit").hide();

    } else if (personality === "Introvert" || "introvert" && age > 18) {
        console.log("BlepA");
        $(".kitimg").hide();
        $(".Maine").show();
        $(".message").text("You are a Maine Coon");
        $("p").hide();
        $("input").hide();
        $(".submit").hide();

    } else if (personality === "Extrovert" || "extrovert" && age <= 18) {
        console.log("BlepA");
        $(".kitimg").hide();
        $(".Siamese").show();
        $(".message").text("You are a Siamese");
        $("p").hide();
        $("input").hide();
        $(".submit").hide();
    } else if (personality === "Extrovert" || "extrovert" && age > 18) {
        console.log("BlepA");
        $(".kitimg").hide();
        $(".Singapura").show();
        $(".message").text("You are a Singapura");
        $("p").hide();
        $("input").hide();
        $(".submit").hide();
    } else {
        $(".kitimg").hide();
        $(".Cry").show();
        $(".message").text("Seems like you broke the system.");
        $("p").hide();
        $("input").hide();
        $(".given-list").hide();
        $("h3").hide();

    }
    if (personality ===
        "" || age === "" || month === "") {
        $(".message").text("Hey, seems like you're missing something...");
        $(".Crytwo").show();
        $(".Ocicat").hide();
        $(".given-list").hide();
        $("h3").hide();
        $(".submit").show();


    }



});


$(".reset").click(function() {
    $(".catimg").hide();
    $(".Ocicat").hide();
    $(".Singapura").hide();
    $(".Maine").hide();
    $(".Siamese").hide();
    $(".Cry").hide();
    $(".Crytwo").hide();

    $(".month-input").val("");
    $(".message").text("");
    $(".age-input").val("");
    $(".personality-input").val("");
    $(".kitimg").show();

    
});