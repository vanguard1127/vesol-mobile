
// Dependencies
import React, { Component} from 'react';
import { connect } from "react-redux";
import { showMessage, hideMessage } from "react-native-flash-message";
import auth from  '@react-native-firebase/auth';


// Native Components
import { View,TextInput, Dimensions } from 'react-native';

// Custom ComponentsActio
import {
  CustomText, CustomInputField, LineSeperator, SelectUI, CustomScrollView,
  Container, Content, InputForm, AbsoluteCTA, Screen,CustomImage, TouchableView
} from '../../components/core_components';

// StyleSheet
import Styles from '../../assets/styles/style.js'

// Data
import * as Actions from '../../redux/actions'; //Redux actions
import CONST from '../../common/const'; //Redux actions

require('../../common/functions');

var component_context;

class LoginScreen extends Component {

  constructor(props){

    super(props);

    this.state = {
      phone: ''
    }



    component_context = this;
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

  validatePhoneNumber = () => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
    return regexp.test('+91'+component_context.state.phone)
  }

  handleSendCode = (progress_cb) => {

    if(!component_context.validatePhoneNumber()){
      return alert('Invalid Phone Number')
    }

    global.Functions.handleAPI(
      CONST['GENERATE_SIGNIN'],
      'POST',
      {
        phone_number: component_context.state.phone,
        phone_country_code: '91'
      },
      function(response){

        component_context.props.navigation.navigate('CodeVerificationScreen', {user_data: response['user_data']});

      },
      function(error_message){
        alert(error_message);
      },
      progress_cb
    );

  }




  render(){

    return(
      <Content>
        <Container>
        <CustomScrollView >
          <CustomImage
            source={require('../../assets/icons/login-screen-image.png')}
            imageHeight= {Dimensions.get('window').width - 15}
            imageWidth= {Dimensions.get('window').width -15}
            imageResizeMode='contain'
          />
          <View style={{marginTop:20, marginBottom:20}}>
            <CustomText h2 bold  primary>
              Enter Phone number
            </CustomText>
          </View>
          <View style={{marginBottom:20}}>
            <CustomText p  primary>
              We'll send you a SMS verification code
            </CustomText>
          </View>
          <View style={{marginBottom:20}}>
            <TextInput
              style={{
                borderBottomWidth:1,
                borderColor:'#ccc',
                paddingVertical:10
              }}
              value={component_context.state.phone}
              onChangeText={(value)=>component_context.setState({phone:value})}
              keyboardType = 'phone-pad'
              placeholder= 'Phone number'
              maxLength={10}
            />
          </View>
        </CustomScrollView>
        <AbsoluteCTA
          buttonText='SEND CODE'
          onPress={(progress_cb)=>component_context.handleSendCode(progress_cb)}
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
