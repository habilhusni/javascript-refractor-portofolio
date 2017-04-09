'use strict'

$(document).ready(function() {
  
  let handling = (id, callback) => {
    $(id).on('click', callback);
  }

  let callAppend = (clasz, append) => {  
    return function() {
      console.log("WAT");
      $(clasz).append(append);
    }
  }

  let callEach = (clasz) => {
    return function() {
      $(clasz).each(function(k, die) {
        let value = Math.floor((Math.random()*6)+1)
        $(die).text(value)
      })
    }
  }

  let addDice = () => {
    handling('#roller button.add', callAppend('.dice', '<div class="die">0</div>'))
  }

  let rollDice = () => {
    handling('#roller button.roll', callEach('.die'))
  }

  let dice = {
    add: addDice(),
    roll: rollDice()
  }

  dice.add;
  dice.roll;

})