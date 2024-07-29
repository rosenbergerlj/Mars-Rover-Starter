const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // TEST 7
  test("constructor sets position and default values for mode and generatorWatts", function () {
    let position = 98382;
    let rover = new Rover(98382);
    expect(rover.position).toBe(position);
  });

  // TEST 8
  test("response returned by receiveMessage contains the name of the message", function() {
    let message = new Message ('Test message with two commands');
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response).toBe(message)
  });

  // TEST 9
});
