async function fetchData(){



    try{



        const foodName = document.getElementById("foodName").value.toLowerCase()
        const foodQuantity = document.getElementById("foodQuantity").value

        const response = await fetch("https://api.edamam.com/api/nutrition-data?app_id=ebf2bcdc&app_key=6d59a21eb26b81aea1c91e651c0f54a0&nutrition-type=cooking&ingr=" + foodName + " " + foodQuantity + "g")



        if(!response.ok){

            throw new Error("Could not fetch resource")

        }



        const data = await response.json()
        console.log(data)
        let tempData = {
            name: foodName,
            calories: data.calories,
            fat:{
                quantity: data.totalNutrients.FAT.quantity,
                unit: data.totalNutrients.FAT.unit,
            },
            saturatedFat:{
                quantity: data.totalNutrients.FASAT.quantity,
                unit: data.totalNutrients.FASAT.unit,
            },
            carbohydrates:{
                quantity: data.totalNutrients.CHOCDF.quantity,
                unit: data.totalNutrients.CHOCDF.unit,
            },
            fiber:{
                quantity: data.totalNutrients.FIBTG.quantity,
                unit: data.totalNutrients.FIBTG.unit,
            },
            sugar:{
                quantity: data.totalNutrients.SUGAR.quantity,
                unit: data.totalNutrients.SUGAR.unit,
            },
            protein:{
                quantity: data.totalNutrients.PROCNT.quantity,
                unit: data.totalNutrients.PROCNT.unit,
            },
            cholesterol:{
                quantity: data.totalNutrients.CHOLE.quantity,
                unit: data.totalNutrients.CHOLE.unit,
            },
            sodium:{
                quantity: data.totalNutrients.NA.quantity,
                unit: data.totalNutrients.NA.unit,
            },
            calcium:{
                quantity: data.totalNutrients.CA.quantity,
                unit: data.totalNutrients.CA.unit,
            },
            iron:{
                quantity: data.totalNutrients.FE.quantity,
                unit: data.totalNutrients.FE.unit,
            }
        }
        document.getElementById("calories").innerHTML = tempData.calories + " calories"
        document.getElementById("fat").innerHTML = tempData.fat.quantity + tempData.fat.unit + " of fat"
        document.getElementById("satFat").innerHTML = tempData.saturatedFat.quantity + tempData.saturatedFat.unit + " of saturated fat"
        document.getElementById("fiber").innerHTML = tempData.fiber.quantity + tempData.fiber.unit + " of fiber"
        document.getElementById("sugar").innerHTML = tempData.sugar.quantity + tempData.sugar.unit + " of sugar"
        document.getElementById("protein").innerHTML = tempData.protein.quantity + tempData.protein.unit + " of protein"
        document.getElementById("cholesterol").innerHTML = tempData.cholesterol.quantity + tempData.cholesterol.unit + " of cholesterol"
        document.getElementById("sodium").innerHTML = tempData.sodium.quantity + tempData.sodium.unit + " of sodium"
        document.getElementById("calcium").innerHTML = tempData.calcium.quantity + tempData.calcium.unit + " of calcium"
        document.getElementById("iron").innerHTML = tempData.iron.quantity + tempData.iron.unit + " of iron"

    }

    catch(error){

        console.error(error);

    }

}
