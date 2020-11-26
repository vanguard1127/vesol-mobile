
// Dependencies
import React, { Component} from 'react';
import { connect } from "react-redux";
import { showMessage, hideMessage } from "react-native-flash-message";


// Native Components
import { View,TextInput, Dimensions } from 'react-native';


// Custom ComponentsActio
import {
  CustomText, CustomInputField, LineSeperator, SelectUI, CustomScrollView,
  Container, Content, InputForm, AbsoluteCTA, Screen,CustomImage, TouchableView
} from '../../components/core_components';

// StyleSheet
import Styles from '../../assets/styles/style.js'

import Icon from '../../assets/icons/icon.js'
import CONST from '../../common/const';

// Data
import * as Actions from '../../redux/actions'; //Redux actions

var component_context;

class CodeVerificationScreen extends Component {

  constructor(props){

    super(props);
    this.state= {
      verification_code: '',
      user_name: '',
      user_data: this.props.route.params.user_data
    }

    component_context= this;
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


  verifyCodeForRegister(progress_cb){

    global.Functions.handleAPI(
      CONST['VERIFY_REGISTER'],
      'POST',
      {
        phone_number: component_context.state.user_data['phone_number'],
        phone_country_code: component_context.state.user_data['phone_country_code'],
        user_name: component_context.state.user_name,
        phone_verification_code: component_context.state.verification_code
      },
      function(response){

        component_context.props.updateUserData(response['user_data'], response['user_data']['auth_token']);

      },
      function(error_message){
        alert(error_message)
      },
      progress_cb
    );

  }


  verifyCodeForLogin(progress_cb){

    global.Functions.handleAPI(
      CONST['VERIFY_LOGIN'],
      'POST',
      {
        phone_number: component_context.state.user_data['phone_number'],
        phone_country_code: component_context.state.user_data['phone_country_code'],
        phone_verification_code: component_context.state.verification_code
      },
      function(response){

        component_context.props.updateUserData(response['user_data'], response['user_data']['auth_token']);

      },
      function(error_message){
        alert(error_message)
      },
      progress_cb
    );

  }


  validateCode(){
    var regexp = /\b\d{4}\b/
    return regexp.test(component_context.state.verification_code)
  }

  verifyCode(progress_cb){

    if(!component_context.validateCode(component_context.state.verification_code)){
      return alert('Invalid Phone Number')
    }

    if(component_context.state.user_data['id']){
      return component_context.verifyCodeForLogin(progress_cb);
    }

    if(component_context.state.user_name.length < 2){
      return alert('Invalid User Name')
    }

    return component_context.verifyCodeForRegister(progress_cb);

  }


  render(){

    return(
      <Content>
        <Container actionBarData = {this.createActionBarData()}>
        <View style={{paddingHorizontal:16, paddingVertical:5, backgroundColor:'#fff', flexDirection:'row'}}
        >

          <TouchableView
            onPress={()=>this.props.navigation.goBack()}
            style={{justifyContent:'center', alignItems:'center', marginRight:10}}>
              <Icon
                name='back'
                width={14}
                height={14}
              />
            </TouchableView>
            <View style={{flex:1, justifyContent:'center'}}>
              <CustomText h3 bold center>Signin</CustomText>
            </View>

        </View>
        <CustomScrollView >
          {
            !component_context.state.user_data['id'] ?
            <View>
              <View style={{marginTop:20}}>
                <CustomText p  primary>
                  Enter your name
                </CustomText>
              </View>
              <View style={{marginBottom:20}}>
                <TextInput
                  style={{
                    borderBottomWidth:1,
                    borderColor:'#ccc',
                    paddingVertical:10
                  }}
                  placeholder= 'Name'
                  value={component_context.state.user_name}
                  onChangeText={(value)=>component_context.setState({user_name:value})}
                />
              </View>
            </View>
            :
            <View style={{marginTop:20, marginBottom:20}}>
              <CustomText h3  primary>
                {'Welcome Back, '}
                <CustomText h3  bold primary>
                  {component_context.state.user_data['user_name']}
                </CustomText>
              </CustomText>
            </View>
          }
          <View style={{marginBottom:10}}>
            <CustomText p  primary>
            Verify by 4 digit OTP sent on your phone
            </CustomText>
          </View>
          <View style={{marginBottom:20}}>
            <TextInput
              style={{
                borderBottomWidth:1,
                borderColor:'#ccc',
                paddingVertical:10
              }}
              keyboardType = 'phone-pad'
              placeholder= '4 Digit OTP'
              maxLength={4}
              value={component_context.state.verification_code}
              onChangeText={(value)=>component_context.setState({verification_code:value})}
            />
          </View>

        </CustomScrollView>
        <AbsoluteCTA
          buttonText='VERIFY'
          onPress={
            (progress_cb)=>component_context.verifyCode(progress_cb)
          }
        />
        </Container>

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

export default connect(mapStateToProps, mapDispatchToProps)(CodeVerificationScreen);
