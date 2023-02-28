let result= 0;
let var1, var2 = 0;
let operation = "";

//Starts display on 0
let resultContainer = document.querySelector("#result");
resultContainer.innerHTML = result;

//All DOM elements required
let operationKeys = document.querySelectorAll(".operation");
let equalsKey = document.querySelector("[data-value='equals']");
let numberKeys = document.querySelectorAll("[data-number]");//[data-number*=''])
let clearKey = document.querySelector("#clear button");
let toFloatingKey = document.querySelector("[data-value='.']");


//Adds events listeners
[].forEach.call(operationKeys, function(operationKey){
    operationKey.addEventListener("click", function(){
        console.log(operation);
       let getDataAttr = operationKey.getAttribute("data-operation"); 
       
       operation = getOperation(getDataAttr);
       console.log(operation);
    })
});

[].forEach.call(numberKeys, function(numberKey){
    //something here to assign var
    
});

equalsKey.addEventListener("click", function(){
    calculate(); //
});

clearKey.addEventListener("click", clear);

toFloatingKey.addEventListener("click", function(){
    let toFloatingVal = resultContainer.innerHTML;
    
    convertToFloating(toFloatingVal);
});


//Functions
function getOperation(type){
    operation = type;

    return operation;
}


function calculate(){
    console.log(operation, "calculate");
    switch(operation) {
        case 'sum':
            result = var1 + var2;
            break
        case 'rest':
            result = var1 - var2;
            break
        case 'multiply':
            result = var1 * var2;
            break
        case 'division':
            result = var1 / var2;
            break
        default:
            return 
    }
    //Should call function to display result
}

function convertToFloating(value){
    let newFloating = parseFloat(value);
    newFloating = newFloating.toFixed(2); //2 decimals after point

    console.log(newFloating);
    updateDisplay(newFloating)
}

function updateDisplay(valueToDisplay){
    resultContainer.innerHTML = valueToDisplay;
}

function clear(){
    var1, var2, result = 0;
    operation = "";
    updateDisplay(result);
}