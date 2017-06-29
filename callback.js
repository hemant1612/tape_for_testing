module.exports = {
    checkForCallback : function(n , func){
       let number = parseInt(n);
        while(n--) func.call(this);
    },
    
    func : function(){
      return "Yeah ! values are equal";
     }
    
}