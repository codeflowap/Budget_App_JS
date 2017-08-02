var budgetController = (function() {
    
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
    };
    
    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            
            // create new ID
            if(data.allItems[type].length > 0) {
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            // create new item  based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);                
            }
            
            // Push it into our data structure
            data.allItems[type].push(newItem);
            return newItem;
        },
        
        // Return the new element
        testing: function() {
            console.log(data);
        }
    };
    
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
        
        var input, newItem; 
        
        // 1. Get the field input data
        input = UIController.getInput();
        console.log(input);
        
        // 2. Add the item to the budget controller
        newItem = budgetController.addItem(input.type, input.description, input.value);
        
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
    
    
})(budgetController, UIController);


Controller.init();























