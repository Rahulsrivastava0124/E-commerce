//Received body data and call LoginAPI method 
export const LoginAPI = (data) => {
  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((json) => {
      localStorage.setItem("Token", JSON.stringify(json));
     
    });
    
    return "true";
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