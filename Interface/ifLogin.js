'use strict';

const ModelUser = require ('../Models/ModelUser')

const ifLogin = {
    doLogin(io_user){
      return new Promise((resolve, reject) => {
        ModelUser.login()
          .then(result =>{
              resolve('success');
          })
          .catch(error =>{
              reject('fail');
          })
      })
    }
}

module.exports = ifLogin;
