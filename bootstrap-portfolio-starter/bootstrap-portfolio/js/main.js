function calculatorWorkPrice(event){
    event.preventDefault();

    let price;

    let selectedHours = parseInt(document.getElementById("hours").value);
    console.log(selectedHours);
    
    let selectedWorkType = document.getElementById("worktype").value;

    let backEndPrice = document.getElementById("backend").innerText;
    backEndPrice = parseFloat(backEndPrice);
    console.log(backEndPrice);

    let frontEndPrice = document.getElementById("frontend").innerText;
    frontEndPrice = parseFloat(frontEndPrice);
    console.log(frontEndPrice);

    let projectAnalysisPrice = document.getElementById("projectanalysis").innerText;
    projectAnalysisPrice = parseFloat(projectAnalysisPrice);
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

    document.getElementById("price").innerHTML = price.toFixed(2);
}
