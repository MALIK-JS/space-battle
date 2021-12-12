class Ship {
    constructor (name, hull, firepower, accuracy) {
      this.name = name
      this.hull = hull
      this.firepower = firepower
      this.accuracy = accuracy
    }
    attack() {
      // pseudocode 
      // Loop attack alienShip until its hull is 0 
      while (alienShip.hull > 0) {
        // mainShip hull has to be greater than 0 in order to attack
        if (mainShip.hull > 0){
        alienShip.hull -= mainShip.firepower;
        console.log(`Alien ship hull is ${alienShip.hull} out of 6.`);     
        }
        else if (alienShip.hull === 0){
            console.log("Ship is destroyed");
          }
        // if () 
        this.hull -= alienShip.firepower;
        // console.log(this.hull)
      }
    }
      }
    //   // If mainShip dies
    //   if (mainShip.hull = 0) {
    //     console.log("Game Over");
    //     break;
    //     //Ask if they want to try again?
    //   }
    //     // If enemeyShip dies prompt user if they want to go to next alienShip in the array or retreat //
    //     //goes above
    //     if (alienShip.hull = 0) {
    //       console.log(`${alienShip[i]} was destroyed!`);
    //       prompt user -> next alienShip[i] or retreat
    //       if (retreat) {
    //         console.log("Why stop when your ahead, oh well gg");
    //         break?
    //       }
    //     }

  
const mainShip = new Ship ('USS HelloWorld', 20, 5, .7);
const alienShip = new Ship ("Alien1", 6, 4, .8) //hardcoded values, how to make them between num1 - numb2 /
// console.log(mainShip)
mainShip.attack()
console.log(`Hull health is ${mainShip.hull} out of 20.`)







// Creating an array of (enemyShip) Objects
// for (let key in mainShip) {
//   console.log(key);
// }
// mainShip.attack(alienShip) 


// let alienShip = [];
  //       function create() { 
  //         for (let i = 0; i < 7; i++) {
  //           // let test = 0
  //         alienShip[i] = new Ship (6, 4, .8);
  //       } 
  //         return alienShip;
  //         }
        
  //      console.log(alienShip.create())