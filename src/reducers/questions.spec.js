import { questions } from "./questions";

describe("The questiosn reducer", ()=> {
	it("should not modify state for unrecognized action", ()=> {
		console.log("testing questions");
		const state = ["foo", "bar"];
		const stateClone = ["foo", "bar"];
		const newState = questions(state, {type: "UNRECOGNIZED_ACTION"});

	//expect(state).toEqual(stateClone);
	expect(state).toBe(stateClone);
	})
})