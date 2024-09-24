const ShoppingBasket = require('./shoppingBasket');
const Candy = require('./candy');



describe('shoppingbasket construct', () => {
    it('shopping basket creates a list of candies', () => {
        let basket = new ShoppingBasket();
        let candy = new Candy('Snickers', 1.5);
        basket.addItem(candy);
        expect(basket.candies).toEqual([candy])
    });


    describe('getTotalPrice', () => {
        it('getTotalPrice returns total price of all candies', () => {
            let basket = new ShoppingBasket();
            
            let candy1 = new Candy('Snickers', 1.5)
            let candy2 = new Candy('Mars', 2.0);
            let candy3 = new Candy('Bounty', 1.0);

            basket.addItem(candy1);
            basket.addItem(candy2);
            basket.addItem(candy3);

            expect(basket.getTotalPrice()).toEqual(4.5); 
        });
    });

    describe('getCandies', () => {
        it('getCandies should return an array of candies in the basket', () => {
            let basket = new ShoppingBasket();
            
            let candy1 = new Candy('Snickers', 1.5)
            let candy2 = new Candy('Mars', 2.0);
            let candy3 = new Candy('Bounty', 1.0);

            basket.addItem(candy1);
            basket.addItem(candy2);
            basket.addItem(candy3);

            expect(basket.getCandies()).toEqual([
                {name: 'Snickers', price: 1.5},
                {name: 'Mars', price: 2.0},
                {name: 'Bounty', price: 1.0}]
             );
        });
    });
});
