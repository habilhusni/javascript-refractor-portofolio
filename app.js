'use strict'

$(document).ready(function() {
//method handling, callAppend, callEach
//   let handling = (id, callback) => {
//     $(id).on('click', callback);
//   }
//   let callAppend = (clasz, append) => {
//     return function() {
//       console.log("WAT");
//       $(clasz).append(append);
//     }
//   }
//   let callEach = (clasz) => {
//     return function() {
//       $(clasz).each(function(k, die) {
//         let value = Math.floor((Math.random()*6)+1)
//         $(die).text(value)
//       })
//     }
//   }
//
// //view
//   let addDice = () => {
//     handling('#roller button.add', callAppend('.dice', '<div class="die">0</div>'))
//   }
//   let rollDice = () => {
//     handling('#roller button.roll', callEach('.die'))
//   }

//object
  // let dice = {
  //   add: addDice(),
  //   roll: rollDice()
  // }

  // dice.add;
  // dice.roll;

class Controller {
  static callEach() {
    $('.die').each((k, die)=> { $(die).text(Model.randomize())} )
  }
  static logger() {
    console.log('WAT')
  }
}

class View {
  static addButton() {
    $('#roller button.add').on('click', ()=> {
      View.callAppend()
    })
  }

  static rollButton() {
    $('#roller button.roll').on('click', ()=> {
      Controller.callEach()
    })
  }

  static callAppend() {
    Controller.logger()
      $('.dice').append('<div class="die">0</div>')
    }
}

class Model {
  static randomize() {
    return Math.floor((Math.random()*6)+1)
  }
}

  View.addButton()
  View.rollButton()

})
