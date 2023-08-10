//Received body data and call LoginAPI method
export const LoginAPI = async (data) => {
  const CallData = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resdata = await CallData.json();
  console.log(resdata);
  return {
    data: resdata,
    state: true,
    username: data.username,
  };
};

//Received body data and call SignUpAPI method
export const SignUpAPI = (data) => {
  fetch("https://fakestoreapi.com/users", {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((json) => {
      if (!json || json === null) {
        alert("Error");
      } else {
        console.log(json);
        localStorage.setItem("ID", json.id);
        localStorage.setItem("Data", JSON.stringify(data));
      }
    });
};


// receive All user data 

export const GetUsers = async () => {
  const GetData = await fetch('https://fakestoreapi.com/users');
  const ResGetData = await GetData.json();

  return GetData;
}