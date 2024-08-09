const Message = require('./message.js');
const Command = require('./command.js');



class Rover {
   constructor(position) {
      this.position = position;
      this.mode = 'Normal';
      this.generatorWatts = 110;
   }
   receiveMessage(message) {
      console.log("Message received:", message);
      let response = {
         message: message.name,
         results: []
      };
      console.log("Initial response object:", response);

      for (let i = 0; i < message.commands.length; i++) {
         let command = message.commands[i];
         console.log("Processing command:", command);
         let result = { completed: true };

         if (command.commandType === 'STATUS_CHECK') {
            result.roverStatus = {
               position: this.position,
               mode: this.mode,
               generatorWatts: this.generatorWatts
            };
         } else if (command.commandType === 'MODE_CHANGE') {
            this.mode = command.value;
            }
            response.results.push(result);
            console.log("Updated response:", response);
        }
      return response;
 }
}


let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);    // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);

// console.log(response);

module.exports = Rover;