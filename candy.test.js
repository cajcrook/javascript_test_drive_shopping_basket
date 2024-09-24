const Candy = require('./candy');


describe('candy no details', () => {
    it('candy is constructed WITHOUT name (text) and price (float)', () => {
        expect(new Candy('','')).toEqual({name:'', price: ''});
    });
    
    describe('candy construct', () => {
        it('candy is constructed with name (text) and price (float)', () => {
            expect(new Candy('Snickers', 1.5)).toEqual({name:'Snickers', price: 1.5});
        });

    describe('getName', () => {
        it('getName returns the name of the candy', () => {
            let candy = new Candy ('Snickers', 1.5);
            expect(candy.getName()).toEqual('Snickers')
        });
    });

    describe('getName', () => {
        it('getName is empty', () => {
            let candy = new Candy ('', 1.5);
            expect(candy.getName()).toEqual('')
        })
    })

    describe('getPrice', () => {
        it('getPrice returns price of the candy', () => {
            let candy = new Candy ('Snickers', 1.5);
            expect(candy.getPrice()).toEqual(1.5)
        })
    })

    describe('getPrice', () => {
        it('getPrice is empty', () => {
            let candy = new Candy ('Snickers', '');
            expect(candy.getPrice()).toEqual('')
        })
    })

    });
}); 

