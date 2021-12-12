import {
  FETCH_POST_FROM_URL,
  FETCH_POST_FROM_URL_SUCCESS,
  FETCH_POST_FROM_URL_FAIL
} from "../constants";

var beautify = require("json-beautify");

const initialState = {
  postFetching: false,
  filteredPostResponse: ''
};

const post = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_FROM_URL:
      return {
        ...state,
        postFetching: true
      };
    case FETCH_POST_FROM_URL_SUCCESS:

      let filteredPostResponseToString = beautify(action.data, null, 2, 80);

      return {
        ...state,
        postFetching: false,
        filteredPostResponse: filteredPostResponseToString
      };

    case FETCH_POST_FROM_URL_FAIL:
        let errorMessageToString = beautify(action.response, null, 2, 80);
      return {
        ...state,
        postFetching: false,
        filteredPostResponse: errorMessageToString
      };
    default:
      return state;
  }
};

export default post;
