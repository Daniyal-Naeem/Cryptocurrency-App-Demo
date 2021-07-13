
export const GET_USERS = 'GET_USERS';
const API_URL = 'https://mocki.io/v1/48419bdb-1d76-45a1-89cb-3ac3fcc7f6ca';
export const getUsers  = () => {
  try {
      return async dispatch => {
          const result = await fetch(API_URL, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              },
          });
          const json = await result.json();
          if (json) {
              dispatch({
                  type: GET_USERS,
                  payload: json
              });
          } else {
              console.log('Unable to fetch!');
          }
      }
  } catch (error) {
      console.log(error);
  }
}