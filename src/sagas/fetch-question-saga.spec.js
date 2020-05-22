import { handleFetchQuestion } from './fetch-question-saga';
import fetch from 'isomorphic-fetch';

describe("Fetch questions saga", () => {
	beforeAll(() => {
		fetch.__setValue([{question_id:42}]);
	})
	it("should fetch the questions", async () => {
		const gen = handleFetchQuestion({question_id:42});
		const { value } = await gen.next();
		// create this expect to write the expected answer from the real API:
		expect(value).toEqual([{question_id: 42}]);
		// create this expect to write the expected url sent ??
		expect(fetch).toHaveBeenCalledWith(`/api/questions/42`);
	});
});