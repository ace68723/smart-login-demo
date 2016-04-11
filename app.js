'use strict';
const express         = require('express');
const bodyParser      = require('body-parser');
const cors            = require('cors');
const ApiConstants    = require('./ApiConstants');
const smartApp        = express();

const ifLogin          = require('./Interface/ifLogin');

const API_LOGIN = ApiConstants.API_LOGIN;
const ERROR_P = ApiConstants.ERROR_P
const FAIL = ApiConstants.FAIL

smartApp.use(cors());
smartApp.use(bodyParser.json());
smartApp.listen(3000, function() {
    console.log("smartJwt listening on 3000")
})


smartApp.get('/helloworld', function(req, res) {
    res.status(200).send('helloworld')
})

smartApp.post(API_LOGIN, function(req, res) {
    const user = req.body;
    if(!user.username || !user.password){
      const result = FAIL;
      const message = ERROR_P;
      const response = {result,message};
      res.status(200).send(response);
    }else{
      ifLogin.doLogin(user)
        .then(result =>{
            console.log(result)
            res.status(200).send('helloworld')
        })
        .catch(error =>{
            const result = FAIL;
            const message = ERROR_P;
            const response = {result,message};
            res.status(200).send(response)
        })
    }


})
