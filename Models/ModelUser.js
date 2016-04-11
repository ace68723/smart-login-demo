'use strict';
const ModelDatabase = require('./ModelDatabase');

const ModelUser = {
    login(io_user){
      return new Promise((resolve, reject) => {
        console.log(io_user)
        ModelDatabase.findUser(io_user.username)
          .then(ModelDatabase.getPassword)
          .then(doEverything)
          // .then(loginResult)
          // .then(ModelAuth.crateToken)
          // .then(loginSuccess)

      })
    }
}

const doEverything = (password)={
  const token = loginResult(res)
  loginSuccess(token)
}

const loginResult = (res) =>{
        console.log(res)
        if(res.result == FAIL){
            throw ERROR_PASSWORD
         }else{
            let la_data = [
              [TOKEN, res.token],
              [UID, res.uid]
            ]
            return la_data
         }
}
const loginSuccess = (token){

}

module.exports = ModelUser;
