async function fetchData(){



    try{
        
        const foodName = await translateFood()
        const foodQuantity = document.getElementById("foodQuantity").value

        const response = await fetch("https://api.edamam.com/api/nutrition-data?app_id=ebf2bcdc&app_key=6d59a21eb26b81aea1c91e651c0f54a0&nutrition-type=cooking&ingr=" + foodName + " " + foodQuantity + "g")



        if(!response.ok){

            throw new Error("Could not fetch resource")

        }



        const data = await response.json()
        console.log(data)
        let tempData = {
            name: foodName,
            calories: data.calories ?? 0,
            fat: {
                quantity: data.totalNutrients.FAT?.quantity ?? 0,
                unit: data.totalNutrients.FAT?.unit ?? ''
            },
            saturatedFat: {
                quantity: data.totalNutrients.FASAT?.quantity ?? 0,
                unit: data.totalNutrients.FASAT?.unit ?? ''
            },
            carbohydrates: {
                quantity: data.totalNutrients.CHOCDF?.quantity ?? 0,
                unit: data.totalNutrients.CHOCDF?.unit ?? ''
            },
            fiber: {
                quantity: data.totalNutrients.FIBTG?.quantity ?? 0,
                unit: data.totalNutrients.FIBTG?.unit ?? ''
            },
            sugar: {
                quantity: data.totalNutrients.SUGAR?.quantity ?? 0,
                unit: data.totalNutrients.SUGAR?.unit ?? ''
            },
            protein: {
                quantity: data.totalNutrients.PROCNT?.quantity ?? 0,
                unit: data.totalNutrients.PROCNT?.unit ?? ''
            },
            cholesterol: {
                quantity: data.totalNutrients.CHOLE?.quantity ?? 0,
                unit: data.totalNutrients.CHOLE?.unit ?? ''
            },
            sodium: {
                quantity: data.totalNutrients.NA?.quantity ?? 0,
                unit: data.totalNutrients.NA?.unit ?? ''
            },
            calcium: {
                quantity: data.totalNutrients.CA?.quantity ?? 0,
                unit: data.totalNutrients.CA?.unit ?? ''
            },
            iron: {
                quantity: data.totalNutrients.FE?.quantity ?? 0,
                unit: data.totalNutrients.FE?.unit ?? ''
            }
        }
        document.getElementById("calories").innerHTML = tempData.calories + " calorias"
        document.getElementById("fat").innerHTML = tempData.fat.quantity + tempData.fat.unit + " de gordura"
        document.getElementById("satFat").innerHTML = tempData.saturatedFat.quantity + tempData.saturatedFat.unit + " de gordura saturada"
        document.getElementById("fiber").innerHTML = tempData.fiber.quantity + tempData.fiber.unit + " de fibra"
        document.getElementById("sugar").innerHTML = tempData.sugar.quantity + tempData.sugar.unit + " de açucar"
        document.getElementById("protein").innerHTML = tempData.protein.quantity + tempData.protein.unit + " de proteina"
        document.getElementById("cholesterol").innerHTML = tempData.cholesterol.quantity + tempData.cholesterol.unit + " de colesterol"
        document.getElementById("sodium").innerHTML = tempData.sodium.quantity + tempData.sodium.unit + " de sódio"
        document.getElementById("calcium").innerHTML = tempData.calcium.quantity + tempData.calcium.unit + " de calcio"
        document.getElementById("iron").innerHTML = tempData.iron.quantity + tempData.iron.unit + " de ferro"
        return(tempData)
    }

    catch(error){

        console.error(error);

    }


}
async function translateFood(){
    const foodDictionary = {
        "maçã": "apple",
        "banana": "banana",
        "laranja": "orange",
        "morango": "strawberry",
        "pão": "bread",
        "carne": "meat",
        "peixe": "fish",
        "frango": "chicken",
        "leite": "milk",
        "ovo": "egg",
        "arroz": "rice",
        "feijão": "beans",
        "batata": "potato",
        "tomate": "tomato",
        "cenoura": "carrot",
        "queijo": "cheese",
        "manteiga": "butter",
        "café": "coffee",
    }
    const foodName = document.getElementById("foodName").value.toLowerCase()
    const foodNameTranslated = foodDictionary[foodName.toLowerCase()]
    return foodNameTranslated
}
let totalCalories = 0
let totalFat = 0
let totalProtein = 0
let totalCarbs = 0
async function saveData() {
    try {
        let tempData = await fetchData()
        
        if (tempData && tempData.calories && tempData.fat && tempData.protein && tempData.carbohydrates) {
            totalCalories += tempData.calories
            totalFat += tempData.fat.quantity
            totalProtein += tempData.protein.quantity
            totalCarbs += tempData.carbohydrates.quantity

            console.log(`Total Calories: ${totalCalories}`)
            console.log(`Total Fat: ${totalFat}`)
            console.log(`Total Protein: ${totalProtein}`)
            console.log(`Total Carbohydrates: ${totalCarbs}`)
        }
    } catch (error) {
        console.error(error)
    }
}