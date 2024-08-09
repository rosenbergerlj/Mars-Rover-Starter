const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // TEST 7
  test("constructor sets position and default values for mode and generatorWatts", function () {
    let rover = new Rover(2000);
    expect(rover.position).toEqual(2000);
  });

  // TEST 8
  test("response returned by receiveMessage contains the name of the message", function() {
    let message = new Message('Test message with two commands');
    let rover = new Rover(2000);
    let response = rover.receiveMessage(message).message;
    expect(response).toBe(message.name)
  });

  // TEST 9
  test("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(2000);
    let response = rover.receiveMessage(message);
    expect(response.results.length).toEqual(2);
  });

  // TEST 10
  // test("responds correctly to the status check command", function(){
  // //   let commands = [new Command('STATUS_CHECK')];
  // //   let message = new Message('Test message with one command', commands);
  // //   let rover = new Rover(98382);
  // //   let response = rover.receiveMessage(message);
  // //   let roverStatus = {
  // //     position: rover.position,
  // //     mode: rover.mode,
  // //     generatorWatts: rover.generatorWatts
  // //   };
  // //   expect(response.results[0].roverStatus).toEqual(roverStatus);
  // // })
});
