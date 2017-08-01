var budgetcontroller = (function() {
    
    
})(); 




var UIController = (function() {
    
    
})();



// GLOBAL APP CONTROLLER
var Controller = (function(budgetctrl, UICtrl) {
    
    var ctrlAddItem = function() {
        
        // 1. Get the field input data
        
        
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




























