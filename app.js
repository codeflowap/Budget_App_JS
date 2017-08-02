var budgetcontroller = (function() {
    
    
})(); 




var UIController = (function() {
    
    // To avoid calling class names in querySelector
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value'
    };
    
    return {
        getInput: function() {
            return {
            type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
            description: document.querySelector(DOMstrings.inputDescription).value, 
            value: document.querySelector(DOMstrings.inputValue).value         
            };

            
        }
    }
    
})();



// GLOBAL APP CONTROLLER
var Controller = (function(budgetctrl, UICtrl) {
    
    var ctrlAddItem = function() {
        
        // 1. Get the field input data
        var input = UIController.getInput();
        console.log(input);
        
        // 2. Add the item to the budget controller
        
        
        // 3. Add th enew item to UI to
        
        
        // 4. Calculate thebudget
        
        
        // 5. Display the budget
        
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    // Key press even listener on the global web page on the document
    document.addEventListener('keypress', function(event) {
        
       if (event.keyCode === 13) {
           
           ctrlAddItem();
           
       } 
        
    })
    
})(budgetcontroller, UIController);




























