// declare a fake value to feed our spy function
let __value = 42;

// create a "spy" function that doesn't do anything,
// but mimic the value it should return in the real function
const isomorphicFetch = jest.fn(() => __value) ;

// define an API to set this value:
isomorphicFetch.__setValue = v => __value = v;

// export this mock :
export default isomorphicFetch;