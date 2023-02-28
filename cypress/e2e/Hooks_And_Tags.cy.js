// There are Four Types of Hooks
// (1)before        [Will execute only once before starting all the tests]
// (2)after         [Will execute only once after completion of all "it" blocks in your describer]  
// (3)beforeEach    [Will be executed multiple times before each and every it block]
// (4)afterEach     [Will be executed multiple times before each and every it block]
describe('Hooks_And_Tags', () => {

    before(() => {
        console.log('****  Launch APP  ****')
    })

    after(() => {
        console.log('****  Close APP  ****')
    })

    beforeEach(() => {
        console.log('****  Login  ****')
    })

    afterEach(() => {
        console.log('****  Logout  ****')
    })

    it('Search', () => {
        console.log('****  Search  ****')
    })

    it('Advanced_Search', () => {
        console.log('****  Advanced_Search  ****')
    })

    it('Listing_Products', () => {
        console.log('****  Listing_Products  ****')
    })


})