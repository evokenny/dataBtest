import base64 from "react-native-base64";
import merge from 'lodash/merge'
import { configureRefreshFetch, fetchJSON } from 'refresh-fetch'


const url = "https://testnewstab.machinable.io";

class API {
  
  tokens = false;
  accessToken = false;

  //questo funziona

   request(path, method, body) {
     //metto le opzioni in caso una richiesta non volessi il body come in list news

     let options = {
       method: method,

       headers: this.returnAccessHeader(),
     };
     if (body) {
       options.body = JSON.stringify(body);
     }
     return fetch(url + path, options).then((response) => {
       console.log(response);

       return response.json();
     });
   }

  // prova
  // request(path, method, body) {
  //   //metto le opzioni in caso una richiesta non volessi il body come in list news

  //   let options = {
  //     method: method,

  //     headers: this.returnAccessHeader(),
  //   };
  //   if (body) {
  //     options.body = JSON.stringify(body);
  //   }
  //   return fetch(url + path, options).then((response) => {
  //     if (response.status === 401) {
  //       console.log("scaduto merda");
  //       this.refreshMytoken();
  //       let newOptions = {
  //         method: method,

  //         headers: this.returnAccessHeader(),
  //       };
  //       return fetch(url + path, newOptions).then((refReponse) => {
  //         console.log("opla skippato il problema");
  //         return refReponse.json();
  //       });
  //     }
  //    else return response.json();
  //   });
  // }

  requestLogin(username, password) {
    const basicHash = base64.encode(username + ":" + password);
    return fetch(url + "/sessions/", {
      method: "POST",
      headers: {
        Authorization: "Basic " + basicHash,
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => {
        this.tokens = response;
        console.log("questo e il token");
        console.log(this.tokens);
        return response;
      });
  }

  authorizationToken() {
    return fetch(url + "/api/TestNews", {
      method: "POST",
      headers: {
        Authorization: "bearer" + this.tokens.access_token,
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => {
        this.accesstoken = response;
        return response;
      });
  }
  refreshToken() {
    return fetch(url + "/sessions/refresh", {
      method: "POST",
      headers: {
        Authorization: "bearer" + this.tokens.refresh_token,
      },
    }).then((response) => {
      console.log(response);
      return response.json();
    });
  }

  returnAccessHeader() {
    if (this.tokens) {
      return {
        "Content-Type": "application/json",
        Authorization: "bearer " + this.tokens.access_token,
      };
    }

    return { "Content-Type": "application/json" };
  }

  returnRefreshHeader() {
    if (this.tokens) {
      return {
        "Content-Type": "application/json",
        Authorization: "bearer " + this.tokens.refresh_token,
      };
    }
    return { "Content-Type": "application/json" };
  }
  refreshMytoken (){
    this.tokens = this.tokens.access_token
  }
}

export default new API(); // esporto direttamente l'istanza alla classe, in modo che non devo crearne una nuova su ogni schermo
