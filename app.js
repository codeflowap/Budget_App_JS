var budgetcontroller = (function() {
    
    var x = 23;
    
    var add = function(a) {
        return x + a;
    }
    
    return {
        var publicTest: function(b) {
            return add(b);
        }
    }
})(); 


var UIController = (function() {
    
    
})();


var Controller = (function(budgetctrl, UICtrl) {
    
    var z = budgetctrl.publicTest(6);
    
    return {
        anotherPublic: function() {
            console.log(z);
        }
    }
    
})(budgetcontroller, UIController);


