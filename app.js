var budgetcontroller = (function() {
    
    var x = 23;
    
    var add = function(a) {
        return x + a;
    }
    
    return {
        publicTest: function(b) {
            console.log(add(b));
        }
    }
})(); 


var UIController = (function() {
    
    
})();


var Controller = (function(budgetctrl, UICtrl) {
    
    
    
})(budgetcontroller, UIController);


