import {useReducer, useState} from 'react';
import {loadingReducer} from '../loadingReducer';

const initialState = {
   isLoading: true,
};

export const useHttpGetRequest = (URL, inputValue) => {
   const [jsonUsers, setJsonUsers] = useState([]);
   const [state, dispatch] = useReducer(loadingReducer, initialState);

   let userId = '1725461635072493';
   let password = '8dcf9428b06daedebae1f70ca5406fdf';
   let token = btoa(userId + ':' + password);

   function pressEnter(e) {
      if (e.key === 'Enter') {
         if (inputValue !== '') {
            dispatch({type: 'LOADING'});
            fetch(URL, {
               credentials: 'include',
               headers: {
                  Authorization: 'Basic ' + token,
               },
            })
               .then((response) => response.json())
               .then((json) => {
                  dispatch({type: 'FINISHED'});
                  setJsonUsers(json.payload);
                  // console.log(jsonUsers);
               });
         }
      }
   }
   return {pressEnter, isLoading: state.isLoading};
};
