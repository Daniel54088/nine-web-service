import { checkUrl, isJson } from "./middleware";
import axios from "axios";
import { filterPayload, isValidJSONString } from "../../util/apiTools";

export default async function handler(req, res) {
  try {
    if (req.body.dataType === "url") {
      const jsonUrl = req.body.url;
      const checkResult = await checkUrl(jsonUrl);

      // Validate the url is correct
      if (checkResult.status !== 200) {
        return res
          .status(checkResult.status)
          .json({ error: checkResult.message });
      }

      // Validate json url response is correct
      const jsonResponse = await axios.get(jsonUrl);
      const dataPayload = jsonResponse.data;

      if (jsonResponse.status !== 200) {
        return res
          .status(400)
          .json({ error: "Could not decode request: JSON parsing failed" });
      }

      if (dataPayload.payload === undefined) {
        return res.status(200).json({ response: [] });
      }

      // Start filtering
      const returnFilteredContent = filterPayload(dataPayload);

      // Return the expected data format
      let returnData = {
        response: []
      };

      returnData.response = returnFilteredContent.map(item => {
        return {
          image: item.image.showImage,
          slug: item.slug,
          title: item.title
        };
      });

      return res.status(200).json(returnData);
      
    } else { // json format

      if (isValidJSONString(req.body.jsonString)) {

        const jsonObject = JSON.parse(req.body.jsonString);

        // Check json structure is what we expected.
        if (jsonObject.payload === undefined) {
          return res.status(200).json({ response: [] });
        }

        // Start filtering
        const returnFilteredContent = filterPayload(jsonObject);

        // Return the expected data format
        let returnData = {
          response: []
        };

        returnData.response = returnFilteredContent.map(item => {
          return {
            image: item.image.showImage,
            slug: item.slug,
            title: item.title
          };
        });

        return res.status(200).json(returnData);
      } else {
        return res
          .status(400)
          .json({ error: "Could not decode request: JSON parsing failed" });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
