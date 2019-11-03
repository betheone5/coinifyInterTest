'use strict';
const db = require("../models");
var counts =  [];

/**
 * Retrieve all currencies
 * Retrieve all currencies
 *
 * returns List
 **/
exports.getCurrencies = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    Currency.findAll().then(curr => {
      console.log("testtt");
      console.log(curr);

      examples[0] = curr;
      if (Object.keys(examples).length > 0) {
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        resolve();
    }
});
  });
}


/**
 * Retrieve user
 * Retrieve user
 *
 * returns user
 **/
exports.getUser = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
//     examples['application/json'] = {
//   "balance" : 6,
//   "name" : "name",
//   "id" : 0
// };
    User.findOne({where: {name:"Rakesh"}}).then( uuser => {
      
      console.log("test");
      console.log(uuser);

      examples[0] = uuser;

      if (Object.keys(examples).length > 0) {
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        resolve();
      }
    } );
    

  });
}


/**
 * Withdraw amount
 * withdraw amount
 *
 * amount Integer amount to withdraw
 * returns withdraw
 **/
exports.withdrawAmount = function(amount) {
  return new Promise(function(resolve, reject) {
    var realAmount = amount
    ;
    
    //Find the least combination
    //var pcounts = findLeast(amount);
    counts= [];

    Currency.findAll().then(curr => {

      var notes = new Array(1000, 500, 200, 100, 50, 20, 10, 5, 2, 1);
      var noteCounter = Array(10).fill(0);
      
      // count notes using Greedy approach
      var i = 0;
      curr.forEach(element => {
  
        //console.log(element.value)
        if (amount >= element.value) {
          noteCounter[i] = Math.floor(amount / element.value);
          //console.log("\t"+noteCounter[i]);
          let item = {};
          item["count"] = noteCounter[i];
          item["id"] = element.id;
          item["value"] = element.value;
          counts.push(item);
          amount = amount - noteCounter[i] * element.value;
          //console.log("\t"+amount);
        }
        i++;
      });
      if(counts != null){
        
        User.findOne({where: {name:"Rakesh"}}).then( uuser => {
          console.log(amount);
          var newamount = uuser.balance - realAmount;
          console.log(newamount);
          if (uuser) {
              User.update(
                { balance: newamount  },
                { where:{ id: 1 }}                
                )
                .then(function(rowsUpdated) {
                  console.log(rowsUpdated)
                })
                .catch(error => {
                  console.log(error);
                })
          } else {
            resolve();
          }
        } );
        resolve(counts);
      }
    //Substract the total amount from user balance
    SubstractFromUserBalance();

    //Also update the banks total supply and withdrawn
    UpdateBankTotalSupply();
  });
});
}

function findLeast(amount) {
  console.log("in find least " + amount);

  Currency.findAll().then(curr => {

    var notes = new Array(1000, 500, 200, 100, 50, 20, 10, 5, 2, 1);
    var noteCounter = Array(10).fill(0);
    
    // count notes using Greedy approach
    var i = 0;
    curr.forEach(element => {

      //console.log(element.value)
      if (amount >= element.value) {
        noteCounter[i] = Math.floor(amount / element.value);
        //console.log("\t"+noteCounter[i]);
        let item = {};
        item["count"] = noteCounter[i];
        item["id"] = element.id;
        item["value"] = element.value;
        counts.push(item);
        amount = amount - noteCounter[i] * element.value;
        //console.log("\t"+amount);
      }
      i++;
    });

    // Print notes 
    // console.log("Currency Count ->");
    // var i = 0;
    // counts.forEach(element => {
    //   if (element != null) {
    //     console.log(element.value +": "+ element.count);
    //   }
    //   i++
    // });


    // var notes = new Array(1000, 500, 200, 100, 50, 20, 10, 5, 2, 1);
    // var noteCounter = Array(10).fill(0);
  
    // // count notes using Greedy approach
    // var i = 0;
    // notes.forEach(element => {
    //   if (amount >= element) {
    //     noteCounter[i] = Math.floor(amount / element);
    //     console.log("\t"+noteCounter[i]);
    //     amount = amount - noteCounter[i] * element;
    //     console.log("\t"+amount);
    //   }
    //   i++;
    // });
  
    // // Print notes 
    // console.log("Currency Count ->");
    // var i = 0;
    // noteCounter.forEach(element => {
    //   //console.log(element);
    //   if (element != 0) {
    //     console.log(notes[i] +": "+ element);
    //   }
    //   i++
    // });
  });


}


function SubstractFromUserBalance(){
  console.log("in SubstractFromUserBalance");
}

function UpdateBankTotalSupply(){
  console.log("in UpdateBankTotalSupply");
}