
let allVehicle =[];


addVehicle = () => {
    let type = document.getElementById("type").value
    let make = document.getElementById("make").value
    let model= document.getElementById("model").value
    let regNumber= document.getElementById("regNumber").value
    let condition = document.getElementById("condition").value

    
        allVehicle.push({
            type: type,
            make: make,
            model: model,
            regNumber: regNumber,
            condition : condition

         })

    
    
    console.log(allVehicle)
    document.getElementById("vehicleForm").reset();
}