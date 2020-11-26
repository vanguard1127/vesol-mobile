
// Dependencies
import React, { Component} from 'react';
import { connect } from "react-redux";
import { showMessage, hideMessage } from "react-native-flash-message";


// Native Components
import { View,TextInput } from 'react-native';

// Custom ComponentsActio
import {
  CustomText, CustomInputField, LineSeperator, SelectUI, CustomScrollView,
  Container, Content, InputForm, PrimaryCTA, Screen,CustomImage, TouchableView
} from '../../components/core_components';

// StyleSheet
import Styles from '../../assets/styles/style.js'

// Data
import * as Actions from '../../redux/actions'; //Redux actions


class ForgotPasswordScreen extends Component {

  constructor(props){

    super(props);

  }

  /********************************************************************
  Action bar intitialization function

  @return {Set} action_bar_data
  *********************************************************************/
  createActionBarData(){

    return {
      actionBarTitle: "Religo Console",
      actionBarLeftIcons: [],
      actionBarRightIcons: [],
      actionBarLeftText: null,
      actionBarRightText: null
    }
  }

  render(){

    return(
      <Content>
        <View style={{flex:1,backgroundColor:'#fff'}}>
          <View style={{height:300, paddingTop:40, backgroundColor:'black', alignItems:'center'}}>
            <CustomImage
              source={require('../../assets/icons/logo.png')}
              imageHeight= {200}
              imageWidth= {200}
              imageResizeMode='contain'
            />
          </View>
          <View style={{
            position:'absolute',
            top:220,
            left:20,
            right:20,
            backgroundColor:'#ffffff',
            padding:20,
            borderRadius:8,
            shadowColor: "#000",
            shadowOffset: {
            	width: 0,
            	height: 1,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
            <CustomText p  center primary>
              Enter your registered number
            </CustomText>
            <View style={{marginTop:20, marginBottom:20}}>
              <TextInput
                style={{
                  borderRadius:8,
                  borderWidth:1,
                  borderColor:'#ccc',
                  padding:10
                }}
                keyboardType = 'phone-pad'
                placeholder= 'Phone number'
                maxLength={10}
              />
            </View>
            
            <View style={{marginBottom:20}}>
              <TouchableView style={{
                backgroundColor:'#000',
                borderRadius:8,
                padding:12
              }}>
                <CustomText h4 invert center bold>RESET PASWORD</CustomText>
              </TouchableView>
            </View>
          </View>
        </View>
      </Content>
    );
  }
}

function mapStateToProps(state){
  return {
    User: state.UserDataReducer
  }
}

const mapDispatchToProps = (dispatch) => ({

  updateUserData: (user_data, auth) => dispatch({type: Actions.UPDATE_USER_DATA, payload: {user_data: user_data, auth: auth}})

});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen);
