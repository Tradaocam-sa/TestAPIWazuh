// import { fetchApi } from "./fetchAPI.js";

// let header = new Headers({
//   'Authorization': 'Basic ' +btoa('api-user:vJp-psHKLmQNXmS3_j7e')
// });

fetch("https://chouette.doclai.com/security/user/authenticate", {
  mode: 'no-cors',
  method: "POST",
  headers: {
            'Authorization': 'Basic ' + btoa('api-user:vJp-psHKLmQNXmS3_j7e')
  }
  
})
.then(res => res.json())
.then(data => {
    console.log(data);
})