'use-strict'

import * as Actions from './actions'

import AppStorage from '../../local_storage/app_storage';
import * as STORAGE_KEYS from '../../local_storage/storage_keys';

// intitialization
let INIT_STATE = {
  user_data: null,
  auth: null
}

const UserDataReducer = (state = INIT_STATE, action) => {

  // update/add  user data in memory
  if(action.type === Actions.UPDATE_USER_DATA){

    state = {
      user_data: action.payload.user_data,
      auth: action.payload.auth
    }

    console.log(state);
    
    AppStorage.saveDataInLocalStorage(
      STORAGE_KEYS.AUTH_KEY,
      action.payload.auth,
      function(err){

        if(err){
          return console.log('Auth key not saved in app storage');
        }

        return console.log('Auth key saved in app storage');

      }
    )

  }

  // delete user data from memory
  if(action.type === Actions.FLUSH_USER_DATA){

    state = {
      user_data: null,
      auth: null
    }

    AppStorage.clearDataFromLocalStorage(
      STORAGE_KEYS.AUTH_KEY,
      action.payload.auth,
      function(err){

        if(err){
          return console.log('Auth key can not be deleted successfully');
        }

        return console.log('Auth key deleted successfully');

      }
    )

  }

  // load auth key from storage
  if(action.type === Actions.LOAD_AUTH_KEY){

    AppStorage.getDataFromLocalStorage(
      STORAGE_KEYS.AUTH_KEY,
      function(err, data){

        // If error execute callback with
        if(err){
          return action.payload.cb(true, null) // true in case of error
        }

        state['auth'] = data;
        action.payload.cb(false, data); // false in case of data found in storage

      }

    )

  }

	return state;
}


export default UserDataReducer;
