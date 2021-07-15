
export const GET_USERS = 'GET_USERS';
const API_URL = 'https://mocki.io/v1/8b297ef1-d9c5-4d29-9589-c067604b6118';
export const getUsers  = async () => {
  try {
          const result = await fetch(API_URL, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              },
            });
            return result.json()
        } catch (error) {
      console.log('requests->user', error);
      return Promise.reject(error)
  }
}