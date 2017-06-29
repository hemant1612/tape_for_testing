/* First the understand the working of try catch with the help of a code 
 * Define a greet function which throws error if 'zombie' passed as an argument
 
    function greet(name){
     if ( /[zZ](ombie|OMBIE)/.test(name))
      throw new Error('NO ! greet to zombies')
     else 
      return `Hi ${name}`
    }

  * Catch the error using a try catch block
  
        try {
        greet('zombie') } 
        catch(err){ 
        console.log('error')
        }
        finally{
        console.log('I hate zombies bssshhhh')
        }

  *NOTE: This can be better accomplised as below:
  
  */


module.exports = function(name){
    if ( /[zZ](ombie|OMBIE)/.test(name))
      throw new Error('NO ! greet to zombies')
     else 
      return `Hi ${name}`;
    }
    



