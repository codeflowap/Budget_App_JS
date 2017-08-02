var budgetcontroller = (function() {
    
    // function constructor, we use capital letter at the beginning
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
     var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }
    
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
    
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        
        // Making EnterKey available to add data
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13) { 
                ctrlAddItem();
            }
        });  
    };
    
    // We have DOMstrings to call classes. But it is private for UICtrl. We need another private var for Controller.
    var ctrlAddItem = function() {
        
        // 1. Get the field input data
        var input = UIController.getInput();
        console.log(input);
        
        // 2. Add the item to the budget controller
        
        
        // 3. Add th enew item to UI to
        
        
        // 4. Calculate thebudget
        
        
        // 5. Display the budget
        
    };

    // making setupEventLisneter public to other finctions
    return {
        init: function() {
            console.log('App has started');
            setupEventListeners();
        }
    }
    
    
})(budgetcontroller, UIController);


Controller.init();























