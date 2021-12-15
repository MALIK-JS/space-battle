class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }

  //ALL ACTIONS TO DO WITH ATTACKING GO HERE ie checking conditions on accuracy, reducing health

  /////////////// MAIN PLAYER ATTACK INSTRUCTIONS //////////////////
  youAttack(obj) {
    if (0.5 < this.accuracy) {
      obj.hull -= this.firepower;
      console.log(`Hit ${obj.name}! Their hull is ${obj.hull}`);
    } else console.log(`${this.name} YOU missed. YOUR SHOT WASN'T ACCURATE`);
  }

  // // mainShip hull has to be greater than 0 and accuracy greater than random number? in order to attack
  // if (this.hull > 0 && Math.random() < this.accuracy){
  //   console.log(`${this.name} is firing. Stand by.`);
  //   // alienShip.hull -= mainShip.firepower;
  //     ship.hull -= this.firepower;
  //     console.log(`Hit ${ship.name}! Their hull is ${ship.hull} out of 6.`)
  //     }
  // else {
  //   if (this.hull < 0){
  //   console.log(`${this.name} get killet! GAME OVER`);
  //   return}
  //     // console.log(`${this.name} is firing... we missed. Recalibrate our sensors, we'll get them next time.`);
  //     }
  // if (ship.hull <= 0){
  //    console.log(`${ship.name} was destroyed`);
  //     }

  getKilled(obj) {
    if (obj.hull < 1) {
      return true;
    } else return false;
  }

  /////////////// ALIENs ATTACK INSTRUCTIONS //////////////////
  // alienAttack(mainShip) {
  //   // alienShip hull has to be greater than 0 and accuracy greater than random number? in order to attack
  //   if (this.hull > 0 && Math.random() < this.accuracy) {
  //     console.log(`${this.name} is firing. Stand by.`);
  //     // alienShip.hull -= mainShip.firepower;
  //     mainShip.hull -= this.firepower;
  //     console.log(
  //       `${mainShip.name} have been hit! Our hull status is ${mainShip.hull} out of 20.`
  //     );
  //   } else {
  //     console.log(
  //       `${this.name} is firing... they missed! Phew that was close one.`
  //     );
  //   }
  //   if (mainShip.hull <= 0) {
  //     console.log(`${mainShip.name} was destroyed. Game Over.`);
  //   }
  // }
}

//Creating mainShip object
const mainShip = new Ship("USS HelloWorld", 20, 5, 0.7);

//Creating an array of alienShips object
let alienShip = [];
for (let i = 0; i < 6; i++) {
  let alienName = `Alien-${i}`;
  let alienHull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
  let alienFirepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
  let alienAccuracy = (Math.floor(Math.random() * 3) + 6) / 10; //3 represents the range, 6 is the starting point, /10 converts to decimal
  alienShip[i] = new Ship(alienName, 3, 6, 0.4);
}

/*STARTING GAME CONDITIONS*/

//ACTION PERTAINING TO GAME LOGIC GO HERE i.e checking for health -> attack -> remove alienShip out of array -> prompt user
function startGame() {
  const i = 0;
  while (alienShip.length >= 1) {
    console.log(`YOU'RE ABOUT TO ATTACK AN ALIEN ${alienShip[i].name}`);
    mainShip.youAttack(alienShip[i]);
    if (alienShip[i].getKilled(alienShip[i])) {
      console.log(`NICE shot. THE ALIEN ${alienShip[i].name} GET KILLED`);
      alienShip.shift();
      // console.log(
      //   "GETKILLED FNCT ",
      //   alienShip[i].getKilled(alienShip[i]),
      //   alienShip[i].hull
      // );
    } else {
      console.log(
        `ALIEN ${alienShip[i].name} SURVIVED AND IT'S ABOUT TO ATTACK YOU`
      );
      alienShip[i].youAttack(mainShip);
      if (mainShip.getKilled(mainShip)) {
        console.log("YOU GET KILLED GAME OVER");
        return;
      }
    }

    // // for (let i = 0; i < alienShip.length; i++){ <----- doesnt nothing, why?
    // //Check if both mainShip and alienShip have health
    // if (mainShip.hull > 0 && alienShip[i].hull > 0) {
    //   // console.log(`${mainShip} is about to attack.`)
    //   //if true, mainShip will attack alienShip[i]
    //   mainShip.youAttack(alienShip[i]);
    // }
    // //Check if mainShip health is less than or equal to 0
    // if (mainShip.hull <= 0) {
    //   //if true, print 'GAME OVER'
    //   return console.log("GAME OVER");
    // }
    // //Check if alienShip health is less than or equal to 0
    // if (alienShip[i].hull <= 0) {
    //   // remove alienShip from array//
    //   alienShip.shift();
    //   mainShip.youAttack(alienShip[i]);
    //   // prompt user to continue (aka loop again) or retreat (aka 'GAME OVER COWARD')
    //   // let z = prompt("Do you want to continute: y/ n")
    //   // if ()
    // }
    // //Check if alienShip health is greater than 0
    // if (alienShip[i].hull > 0) {
    //   // if true, alienShip[i] will attack mainShip
    //   alienShip[i].alienAttack(mainShip);
    // }
  }
  // console.log(alienShip.length);
  console.log(
    "All alien ships have been destroyed. Eearth is safe, great work."
  );
  return;
}
startGame();

/////////////// TESTING AREA ///////////////
// mainShip.youAttack(alienShip[0]);
//  alienShip[0].alienAttack(mainShip)
//  alienShip[0].attack(mainShip)  //<-- ReferenceError: i is not defined   //<-- ideal be alienShip[i].attack()  <--- (mainShip)?

//print an single array of alienShip objects
// console.log(alienShip)

//for of loop //
// for (let armada of alienShip){
//   console.log(armada);
// }
