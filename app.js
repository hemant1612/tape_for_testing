var test = require('tape');

//checks for values 
var myf = require('./myf');

//checks for callback
var cb = require('./callback')


var checkInput = require('./checkForWrongInput');


test('myf', function(t){
    t.equal(myf('hemant'),'hemant :)' , 'checks if working or not')
// Will throw an error 
// t.equal(myf('look pa'), 'look pa:)' ,'should not work fine here') 
    t.end()
})



//function to test callback
test('callback test ', function(t){
    t.plan(3)
    cb.checkForCallback(3, function(){
    t.pass('callback called')
    })
})


//function to test input values given as arguments

test('check for values' , function(t){
//gives number of tests to pass in this case we have 2 so it will take 2 as input argument    
    t.plan(3)
    //assert
    t.equal(checkInput('Hemant'),'Hi Hemant')
    //throw error
    t.throws(checkInput.bind('null','zzzombie'))
    t.throws(checkInput.bind('null' , 'NEW ZOMBIE'))
})