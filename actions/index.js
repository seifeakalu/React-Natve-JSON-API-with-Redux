import {  API, FETCH_POST_DETAILS } from "./types";

export function fetchPostDetail() {
  return apiAction({
    url: "https://jsonplaceholder.typicode.com/posts",
    onSuccess: setPostDetails,
    onFailure: () => console.log("Error occured loading posts"),
    label: FETCH_POST_DETAILS
  });
}

function fetchPostDetail(data) {
  return {
    type: SET_POST_DETAILS,
    payload: data
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}
