let discountCode = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];


function calculatorWorkPrice(event){
    event.preventDefault();

    let price;

    let selectedHours = parseInt(document.getElementById("hours").value);
    console.log(selectedHours);
    
    let selectedWorkType = document.getElementById("worktype").value;

    let backEndPrice = document.getElementById("backend").innerText;
    console.log(backEndPrice);

    let frontEndPrice = document.getElementById("frontend").innerText;
    console.log(frontEndPrice);

    let projectAnalysisPrice = document.getElementById("projectanalysis").innerText;
    console.log(projectAnalysisPrice);

    switch(selectedWorkType){
        case "backend":
            price = backEndPrice * selectedHours;
            break;
        case "frontend":
            price = frontEndPrice * selectedHours;
            break;
        case "projectanalysis":
            price = projectAnalysisPrice * selectedHours;
            break;
    } 
    
    
    let userDiscountCode = document.getElementById("discountcode").value;

    let discountCodeExist = discountCode.includes(userDiscountCode);

    if(discountCodeExist){
        price = price * 0.75;
        discountCode = removeElementFromArray(discountCode, userDiscountCode);

        console.log(discountCode);

        document.getElementById("applieddiscount").innerHTML = "Il codice sconto del 25% è stato applicato!";
    } else if (userDiscountCode != "") {
        document.getElementById("discountcode").classList.add("text-danger");
        document.getElementById("applieddiscount").innerHTML = "Il codice sconto non è valido!";
    } else {
        document.getElementById("applieddiscount").innerHTML = "";
    }

    document.getElementById("price").innerHTML = price.toFixed(2);
}

function removeElementFromArray(array, elementToRemove){

    const index = array.indexOf(elementToRemove);

    array.splice(index, 1);

    return array;
}
