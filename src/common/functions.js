// Info: Contains Extended-Utility functions
'use strict';

// Node JS builtin URL parser Library (Private scope)
import Axios from 'axios'

import CONST from './const';

// Common constants module (Global scope)
global.CONST = require('./const');

// Basic Custom Utility Module (Global scope)
global.Utils = require('./utils');

///////////////////////////Private Functions START//////////////////////////////


global.Functions = { // Private functions accessible by other modules

    /********************************************************************

    @param {String} apiMethod - Method of http call | GET, POST, PUT, DELETE etc
    @param {Map} apiParams - Api parameters | {"param_key": "param_value"}
    @param {String} apiEndPoint - Api Endpoint string | "user/login"
    @param {function} [successCallback] - callback function which will be executed if api hit successful | console.log('successful login :)'); | NULL
    @param {function} [errorCallback] - callback function which will be executed if api hit failed| console.log('Login failed :('); | NULL
    @param {function} [progressCallback] - callback function which will be executed everytime handleAPI executed | console.log(apiCalls + 1); | NULL


    @callback {String} httpResponseCode - http response code returned from http request
    @callback {Map} httpResponseBody - a function which will be executed if api hit failed

   *********************************************************************/

    handleAPI: function(
      apiEndPoint,
      apiMethod,
      apiParams,
      successCallback,
      errorCallback,
      progressCallback,
      authToken
    ){

      console.log('apiEndPoint',apiEndPoint)
      console.log('apiParams',apiParams)
      var headers = {};

      if(authToken){
        headers['authorization'] = 'JWT '+authToken;
      }

      console.log('headers',headers)

      progressCallback(true);

      Axios({

        method: apiMethod,
        url: CONST['API_URL'] + apiEndPoint , // Api URL
        data: (apiMethod === 'POST')? apiParams : undefined, // API post parameters,
        params:(apiMethod === 'get')? apiParams : undefined, //API get params
        headers: headers
      }).then(function (response) { // On Success
        console.log(response);
          if(response['data']['success']){
            successCallback(response['data']);
          }else{
            errorCallback(response['data']['message']);
          }
      })
      .catch(function (error) { // On Failure
        console.log(error);
          errorCallback(error);
      })
      .then(function () { // Always
          progressCallback(false);
      });

    }

};


///////////////////////////Private Functions END//////////////////////////////



//////////////////////////Protected Functions START/////////////////////////////
   //None
///////////////////////////Protected Functions END//////////////////////////////
