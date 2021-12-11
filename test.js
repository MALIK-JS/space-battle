class Ship {
    constructor (name, hull, firepower, accuracy) {
      this.name = name
      this.hull = hull
      this.firepower = firepower
      this.accuracy = accuracy
    }
    greet() {
      console.log("This is a test")
    }
    attack() {
      // pseudocode 
      // mainShip/enemyShip 
      return this.hull - this.firepower
    }
  }
  
  
  
   let alienShip = [];
        function ship() {
          for (let i = 0; i < 7; i++) {
            // let test = 0
          const alienShip[i] = new Ship (6, 4, .8);
        } 
        console.log(alienShip[i])
          }
          console.log(ship())
       