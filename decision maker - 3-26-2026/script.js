async function getInfo(file) {
    let res = await fetch(file);
    data = await res.json();

    //meal name, meal image, meal instructions
    let mealName = data.meals[0].strMeal; //data.(first element of data array).(meal name)
    let mealImg = data.meals[0].strMealThumb; //data.(first element of data array).(meal image)
    let mealInstructions = data.meals[0].strInstructions; //data.(first element of data array).(meal instructions)

    //result container
    let grid = document.querySelector(".result-container");
    if (grid) {
        grid.innerHTML = `
            <h2>${mealName}</h2>
            <img style="width: 200px; height: 200px;" src="${mealImg}" alt="Meal Image">
            <p>${mealInstructions}</p>
        `
    }
}

function boxClick() {
    for (let i = 1; i < 10; i++) {
        let box = document.querySelector(`.box${i}`);
        box.addEventListener("click", function () {
            getInfo("https://www.themealdb.com/api/json/v1/1/random.php");
            let grid = document.querySelector(".result-container");
            grid.style.display = "grid";
        });
    }
};

boxClick();