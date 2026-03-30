async function getInfo(file){
    let res = await fetch(file);
    let data = await res.json();
    let mealName = data.meals[0].strMeal; //data.(first element of data array).(meal name)
    console.log(data.meals[0].strMeal);
}

getInfo("https://www.themealdb.com/api/json/v1/1/random.php");
