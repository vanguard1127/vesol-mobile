
// Dependencies
import React, { Component} from 'react';
import { connect } from "react-redux";

// Native Components
import { View,ScrollView, TextInput } from 'react-native';

// Custom Components
import {
  CustomText, CenterContent, Container, Content, Screen, TouchableView
} from '../../components/core_components';


// StyleSheet
import Styles from '../../assets/styles/style.js'

// Data
import * as Actions from '../../redux/actions'; //Redux actions

var component_context;

class UpdateEmailScreen extends Component {

  constructor(props){

    super(props);
    this.state = {
    }
    component_context = this;
  }


  componentDidMount() {

  }
  /********************************************************************
  Action bar intitialization function

  @return {Set} action_bar_data
  *********************************************************************/
  createActionBarData(){

    return {
      actionBarTitle: "Change Email",
      actionBarLeftIcons: [
        {
          iconName: "back_chevron",
          iconHeight: 24,
          iconWidth: 24,
          iconColor: "#bc9137",
          onPress: ()=> this.props.navigation.goBack()
        }
      ],
      actionBarRightIcons: [],
      actionBarLeftText: null,
      actionBarRightText: null
    }
  }


  render(){
    return(
      <Content>
        <Container actionBarData = {this.createActionBarData()}>
          <Screen>
            <View style={{padding:20}}>
              <CustomText p  primary>
                Email
              </CustomText>
              <View style={{marginTop:10, marginBottom:20}}>
                <TextInput
                  style={{
                    borderRadius:8,
                    borderWidth:1,
                    borderColor:'#ccc',
                    padding:10
                  }}
                  maxLength={256}
                  value='brijesh@gmail.com'

                  placeholder= 'Email'
                />
              </View>
              <View style={{marginBottom:20}}>
                <TouchableView style={{
                  backgroundColor:'#000',
                  borderRadius:8,
                  padding:12
                }}
                onPress={()=> this.props.navigation.goBack()}
                >
                  <CustomText h4 invert center bold>SAVE</CustomText>
                </TouchableView>
              </View>
            </View>
          </Screen>
        </Container>
      </Content>
    );
  }
}

function mapStateToProps(state){
  return {
    User: state.UserDataReducer,
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateUserData: (user_data, auth) => dispatch({type: Actions.UPDATE_USER_DATA, payload: {customer_data: user_data, auth: auth}})
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEmailScreen);
