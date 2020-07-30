document.addEventListener('DOMContentLoaded', function () {
    const apiKey = "&apiKey=b159b41ff9234e75bdc4a617a3838577";
    //const apiKey = "&apiKey=23073b038fc94f08905f8a9a9475ad67";
    var queryUrl = "https://api.spoonacular.com/recipes/complexSearch?query=apple,sugar,dessert&addRecipeInformation=true&number=6" + apiKey;
    bulmaCarousel.attach('#slider', {
        slidesToScroll: 1,
        slidesToShow: 4,
        infinite: false,
    });
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (response) {
            createRecipe(response);
            createCards(response);
        })
});

$(".submit").on("click", function () {
    event.preventDefault()

    var ingredient = $("#ingredient").val() + ",";
    var ingredientTwo = $("#ingredientTwo").val() + ",";
    var ingredientThree = $("#ingredientThree").val();
    const apiKey = "&apiKey=b159b41ff9234e75bdc4a617a3838577";
    var queryUrl = "https://api.spoonacular.com/recipes/complexSearch?query=" + ingredient + ingredientTwo + ingredientThree + "&addRecipeInformation=true&number=6" + apiKey;
    console.log(queryUrl)
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);

            clearForm(response);
            createRecipe(response);
            createCards(response);
        })
});

function clearForm() {
    //$(".recipeCard").empty();
    $(".title").empty();
    $(".mainLink").empty();
    $(".mainImage").empty();

    $("#stepList").empty();
    $("#ingredientList").empty();
    $("#cardOne").empty();
    $("#cardTwo").empty();
    $("#cardThree").empty();
    $("#cardFour").empty();
    $("#cardFive").empty();
    $("#titleOne").empty();
    $("#titleTwo").empty();
    $("#titleThree").empty();
    $("#titleFour").empty();
    $("#titleFive").empty();
}


function createRecipe(response) {
    var image = $("<img>").addClass("mainImage").attr("src", "https://spoonacular.com/recipeImages/" + response.results[0].id + "-312x231.jpg")
    var title = $("<h1>").addClass("title").text(response.results[0].title)
    var sourceUrl = $("<a>").addClass("mainLink").text(response.results[0].sourceUrl)
    $(".recipeCard").prepend(image)
    $(".recipeCard").prepend(sourceUrl)
    $(".recipeCard").prepend(title)
    console.log(response)
    var ingredientsList = []
    response.results[0].analyzedInstructions[0].steps.filter(function (step) {
        ingredientsList = ingredientsList.concat(step.ingredients)

    })
    for (let i = 0; i < response.results[0].analyzedInstructions[0].steps.length; i++) {
        var step1 = $("<li>").text(response.results[0].analyzedInstructions[0].steps[i].step)
        $("#stepList").append(step1)
    }

    for (let i = 0; i < response.results[0].analyzedInstructions[0].steps[0].ingredients.length; i++) {
        var ingredient1 = $("<li>").text(response.results[0].analyzedInstructions[0].steps[0].ingredients[i].name)
        $("#ingredientList").append(ingredient1)


    }
}


function createCards(response) {


    for (let i = 0; i < response.results.length; i++) {

        var ingredientsList = []
        response.results[i].analyzedInstructions[0].steps.filter(function (step) {
            ingredientsList = ingredientsList.concat(step.ingredients)
        })

        var stepList = []
        response.results[i].analyzedInstructions[0].steps.filter(function (steps) {
            stepList = stepList.concat(steps)
        })
        
        var cards = {
            title: response.results[i].title,
            imageId: response.results[i].id,
            sourceUrl: response.results[i].sourceUrl,
            stepList: stepList,
            ingredientsList: ingredientsList
        }
        var cardArray = []
            cardArray = cardArray.
        console.log(cardArray)
        
    }

    //for (let i=0; i< cardArray.length; i++){


    //}
}





/*
var cardOne = $("<img>").attr("src", "https://spoonacular.com/recipeImages/" + response.results[1].id + "-312x231.jpg")
var titleOne = $("<h4>").addClass("title").text(response.results[1].title)
var cardTwo = $("<img>").attr("src", "https://spoonacular.com/recipeImages/" + response.results[2].id + "-312x231.jpg")
var titleTwo = $("<h4>").addClass("title").text(response.results[2].title)
var cardThree = $("<img>").attr("src", "https://spoonacular.com/recipeImages/" + response.results[3].id + "-312x231.jpg")
var titleThree = $("<h4>").addClass("title").text(response.results[3].title)
var cardFour = $("<img>").attr("src", "https://spoonacular.com/recipeImages/" + response.results[4].id + "-312x231.jpg")
var titleFour = $("<h4>").addClass("title").text(response.results[4].title)
var cardFive = $("<img>").attr("src", "https://spoonacular.com/recipeImages/" + response.results[5].id + "-312x231.jpg")
var titleFive = $("<h4>").addClass("title").text(response.results[5].title)
$("#cardOne").append(cardOne)
$("#titleOne").append(titleOne)
$("#cardTwo").append(cardTwo)
$("#titleTwo").append(titleTwo)
$("#cardThree").append(cardThree)
$("#titleThree").append(titleThree)
$("#cardFour").append(cardFour)
$("#titleFour").append(titleFour)
$("#cardFive").append(cardFive)
$("#titleFive").append(titleFive)
*/
