describe('The question list', ()=>{
	beforeEach( () => {
			console.log("Before each !");
		});
	beforeAll( () => {
		console.log("Before all !");
	});
	afterAll( () => {
		console.log("after all !");
	});
	afterEach( () => {
		console.log("after each !");
	});
	it('should display a list of items', ()=>{
		expect(40 + 2).toEqual(42);
	})
	it.skip('should display anoterh one', ()=>{
		expect(40 + 2).toEqual(43);
	})
})