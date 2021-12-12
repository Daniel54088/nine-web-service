import { FETCH_POST_FROM_URL } from "../constants";

export const fetchPostFromUrl = (url) => ({
  type: FETCH_POST_FROM_URL,
  apiEndpoint: "/api/post",
  payload: url,
  dataType: "url",
});

export const fetchPostFromJson = (jsonFormat) => ({
  type: FETCH_POST_FROM_URL,
  apiEndpoint: "/api/post",
  payload: jsonFormat,
  dataType: "json",
});



