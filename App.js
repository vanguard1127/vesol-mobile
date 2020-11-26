import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux'; //Redux support
import { showMessage, hideMessage } from "react-native-flash-message";
import Utils from './src/common/utils';

//Local Libs
import RootNavigator from './src/navigation/root_navigator';

//Data
import * as Actions from "./src/redux/actions";

import CONST from './src/common/const'; //Redux actions

require('./src/common/functions');

// to prevent three finger crash
console.reportErrorsAsExceptions = false;

// disable yellow box
console.disableYellowBox = true;


var component_context;

class App extends Component {

  constructor(props){

    super(props);
    this.state = {
      loading: true,
      is_loggedin: false
    }

    component_context = this;
  }

  // Manage screen loading state
  updateAppLoadProgress(status){
    component_context.setState({loading: status});
  }

  componentDidMount(){

    // Load data from aync storage
    this.dataLoader();

  }

  // On global state update, change local states
  componentDidUpdate(nextProps){
    if(this.props.User !== nextProps.User) {
      component_context.setState({is_loggedin: !Utils.isNullOrUndefined(this.props.User.user_data)})
    }
  }

  // Load local data in memory
  dataLoader(){
    this.authKeyLoader(); // Load auth key from local storage (Redux)
  }

  // Load auth key from local storage
  authKeyLoader(){

    component_context.props.loadAuthKey(
      function(error, data){

        // If fail make user logout
        if(error || Utils.isNullOrUndefined(data)){
          return component_context.setUserLoggedout();
        }

        // If success get user data
        return component_context.getLoggedInUserData(
          data,
          function(status){
            component_context.setState({loading: status})
          }
        )

      }
    );

  };

  // Logout user (Flush Data)
  setUserLoggedout(){

    component_context.props.flushUserData(); // Remove user data in local storage + memory
    component_context.setState({loading: false, is_loggedin:false}); // reset loader

  }

  // Handle global errors
  onError(errors){

    let global_error_messages = [];
    let local_error_messages = [];


    // Check if errors has any global error
    errors.map(
      function(error){
        if(GLOBAL_ERRORS.indexOf(error.code) !== -1 ){
          global_error_messages.push(error.message); // Add global errors in global errors
        }else{
          local_error_messages.push(error.message) // Add local errors in local errors
        }
      }
    );

    //handle global errors
    if(global_error_messages.length > 0){

      // Show message in UI
      showMessage({
       message: global_error_messages.join(),
       type: "danger",
     })

    }

    return local_error_messages;
  }

  /********************************************************************
  Handle Error

  @param {Array} local_errors Errors

  @return nothing
  *********************************************************************/
  showErrors(local_errors){

    //Show success in UI
    showMessage(
      {
        message: local_errors.join(),
        type: "danger"
      }
    )

  }

  /********************************************************************
  Get Data Self Failure

  @param {Array} err Errors

  @return nothing
  ********************************************************************/
  getLoggedInUserDataFailed(err){

    var local_errors = component_context.onError(err);

    if(local_errors){
      component_context.setUserLoggedout();
    }

  }

  /********************************************************************
  Get Data Self Success

  @param {Set} data Data

  @return nothing
  ********************************************************************/
  getLoggedInUserDataSuccess(user_data){

    // Everything good, lets save user data in memory for a while
    component_context.props.updateUserData(
      user_data,
      component_context.props.User.auth
    );

  }

  /********************************************************************
  Get loggedIn User Data

  @param {Function} cb from child components
    * @param {Boolean} loading - carries loading state

  @return nothing
  ********************************************************************/
  getLoggedInUserData(auth_token, progress_cb){

    global.Functions.handleAPI(
      CONST['USER_DATA'],
      'GET',
      {},
      function(response){
        component_context.props.updateUserData(response['user_data'], response['user_data']['auth_token'])
      },
      function(error_message){
        alert(error_message);
      },
      progress_cb,
      auth_token
    );

  }

  render(){

    return(

      <View style={{flex: 1}}>
        <RootNavigator
          isLoggedIn={ this.state.is_loggedin }
        />
      </View>

    )

  }

}

function mapStateToProps(state){
  return {
    User: state.UserDataReducer
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateUserData: (user_data, auth) => dispatch({type: Actions.UPDATE_USER_DATA, payload: {user_data: user_data, auth: auth}}),
  loadAuthKey: (callback) => dispatch({type: Actions.LOAD_AUTH_KEY, payload: {cb: callback}}),
  flushUserData: () => dispatch({type: Actions.FLUSH_USER_DATA, payload: {}})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
