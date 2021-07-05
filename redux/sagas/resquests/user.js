

export const requestGetUser = async () => {
    try {
      const response = await fetch("https://my-json-server.typicode.com/atothey/demo/user");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };