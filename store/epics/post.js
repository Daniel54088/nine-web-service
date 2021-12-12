import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import {
  FETCH_POST_FROM_URL,
  FETCH_POST_FROM_URL_SUCCESS,
  FETCH_POST_FROM_URL_FAIL
} from "../constants";

import { toast } from "react-toastify";
const toastId = "createAudience";

const post = (action$, state$) =>
  action$.pipe(
    ofType(FETCH_POST_FROM_URL),
    switchMap(action => {

      toastId = toast('Processing the json....', {
        id: toastId,
        autoClose: false,
        position: 'top-center',
        style: { textAlign: 'center' },
        closeButton: false, // Remove the closeButton
      });

      return ajax({
        url: `${action.apiEndpoint}`,
        headers: {
          "Content-Type": "application/json"
        },
        body: action.dataType === 'url' 
            ?JSON.stringify({ url: action.payload, dataType:action.dataType })
            :JSON.stringify({ jsonString: action.payload, dataType:action.dataType  }) ,
        responseType: "json",
        crossDomain: true,
        method: "POST"
      }).pipe(
        map(response => {

          toast.update(toastId, {
            id: toastId,
            render: 'Data result returned',
            autoClose: 3000,
            hideProgressBar: true,
            progress: undefined,
            style: {
              backgroundColor: 'rgb(237, 247, 237)',
              color: 'rgb(30, 70, 32)',
              textAlign: 'center',
            },
            closeButton: true, // The closeButton defined on ToastContainer will be used
          });

          return {
            type: FETCH_POST_FROM_URL_SUCCESS,
            data: response.response
          };
        }),
        catchError(error =>{

          toast.update(toastId, {
            id: toastId,
            render: error.response.error,
            autoClose: 4000,
            hideProgressBar: true,
            progress: undefined,
            style: {
              backgroundColor: 'rgb(253, 236, 234)',
              color: 'rgb(97, 26, 21)',
              textAlign: 'center',
            },
            closeButton: null, // The closeButton defined on ToastContainer will be used
          });

          return of({
            type: FETCH_POST_FROM_URL_FAIL,
            response: error.response
          })

        }

        )
      );
    })
  );

export default post;
