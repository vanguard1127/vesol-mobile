
// Dependencies
import React, { Component} from 'react';
import { connect } from "react-redux";

// Native Components
import { View,ScrollView } from 'react-native';

// Custom Components
import {
  CustomText, CenterContent, Container, Content, Screen
} from '../../components/core_components';


// StyleSheet
import Styles from '../../assets/styles/style.js'

// Data
import * as Actions from '../../redux/actions'; //Redux actions

var component_context;

class UpdatePasswordScreen extends Component {

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
      actionBarTitle: "Change Password",
      actionBarLeftIcons: [
        {
          iconName: "back_chevron",
          iconHeight: 24,
          iconWidth: 24,
          iconColor: "#bc9137",
          onPress: ()=> this.props.navigation.openDrawer()
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePasswordScreen);
