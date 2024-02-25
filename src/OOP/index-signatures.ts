// const robot = {}
// robot.hasHead = true; // TS doesn't allow

class Robot {
  [bodyParts: string]: boolean;
}

let robot1 = new Robot();
console.log(robot1);
robot1.hasHands = true;
console.log(robot1);

// ------------------------------------------------------------
let robot2 = new Robot();
robot2.hasLegs = true;
console.log(robot2);
