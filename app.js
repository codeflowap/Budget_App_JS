var budgetcontroller = (function() {
    
    
})(); 




var UIController = (function() {
    
    // To avoid calling class names in querySelector
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    
    return {
        getInput: function() {
            return {
            type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
            description: document.querySelector(DOMstrings.inputDescription).value, 
            value: document.querySelector(DOMstrings.inputValue).value         
            };

            
        },
        
        // (function() {}) method makes everything private. Here, we expose DOMstrings as public
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
    
})();



// GLOBAL APP CONTROLLER
var Controller = (function(budgetctrl, UICtrl) {
    
    // We have DOMstrings to call classes. But it is private for UICtrl. We need another private var for Controller.
    var DOM = UICtrl.getDOMstrings();
    
    var ctrlAddItem = function() {
        
        // 1. Get the field input data
        var input = UIController.getInput();
        console.log(input);
        
        // 2. Add the item to the budget controller
        
        
        // 3. Add th enew item to UI to
        
        
        // 4. Calculate thebudget
        
        
        // 5. Display the budget
        
    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
    // Key press even listener on the global web page on the document
    document.addEventListener('keypress', function(event) {
        
       if (event.keyCode === 13) {
           
           ctrlAddItem();
           
       } 
        
    })
    
})(budgetcontroller, UIController);




























