import { filterPayload } from "../../src/util/apiTools";
import correctDataFormat from '../mock-data/correctFormat.json';


describe("Post filter function testing", () => {

    test("Should return correct format", () => {

        const result = filterPayload(correctDataFormat); 

        result.forEach(element => {
            expect(element.drm).toBe(true);
            expect(element.episodeCount).toBeGreaterThan(0);
        });

    })

})
