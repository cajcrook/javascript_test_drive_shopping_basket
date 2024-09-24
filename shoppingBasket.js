const Candy = require('./candy');

// class ShoppingBasket {
//     constructor(arrayOfCandy = []) {
//         this.candies = arrayOfCandy
//     }
class ShoppingBasket {
    constructor() {
        this.candies = [];
    }


    addItem(candy) {
        this.candies.push(candy); 
    }


    getTotalPrice() {
        let sum = 0;
        // console.log(sum);
        this.candies.forEach((candy) => {
            // console.log(Candy)
            // console.log(candy.price); // Debugging output
            sum += candy.getPrice(); // Make sure this returns a number
        });
        // console.log(`Total sum: ${sum}`); // Debugging output
        return sum;
    }

    getCandies() {
        return this.candies; 
    }

};

module.exports = ShoppingBasket