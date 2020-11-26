
// Dependencies
import React, { Component} from 'react';
import { connect } from "react-redux";

// Native Components
import { View,ScrollView } from 'react-native';

// Custom Components
import {
  CustomText, CenterContent, Container, Content, Screen, TouchableView, CustomImage
} from '../../components/core_components';


// StyleSheet
import Styles from '../../assets/styles/style.js'
import Icon from '../../assets/icons/icon.js'

// Data
import * as Actions from '../../redux/actions'; //Redux actions

var component_context;

class UserProfileScreen extends Component {

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
      actionBarTitle: "My Profile",
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
        <Container>
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
                <CustomText h3 bold center>Manage Profile</CustomText>
              </View>

          </View>
          <Screen>
            <TouchableView style={{marginLeft:5, backgroundColor:'#fff', alignItems:'center', paddingVertical:20, marginTop:2}}
              onPress={()=>this.props.navigation.navigate('UserProfileScreen')}
            >

            </TouchableView>
            <TouchableView
            onPress={()=>this.props.navigation.navigate('UpdateNameScreen')}
            style={{flexDirection:'row', justifyContent:'space-between', padding:15, backgroundColor:'#fff', marginBottom:2, marginTop:2}}>
              <View>
                <CustomText p>User Name</CustomText>
                <CustomText p bold>{this.props.User['user_data']['user_name']}</CustomText>
              </View>
              <View style={{justifyContent:'center', alignItems:'center'}} >
                <CustomText label bold >Change</CustomText>
              </View>
            </TouchableView>
            <TouchableView
            onPress={()=>this.props.navigation.navigate('UpdatePhoneScreen')}
            style={{flexDirection:'row', justifyContent:'space-between', padding:15, backgroundColor:'#fff', marginBottom:2}}>
              <View>
                <CustomText p>Phone number</CustomText>
                <CustomText p bold>{this.props.User['user_data']['phone_number']}</CustomText>
              </View>
              <View style={{justifyContent:'center', alignItems:'center'}} >
                <CustomText label bold>Change</CustomText>
              </View>
            </TouchableView>
            <TouchableView
            onPress={()=>this.props.navigation.navigate('UpdateEmailScreen')}
            style={{flexDirection:'row', justifyContent:'space-between', padding:15, backgroundColor:'#fff', marginBottom:2}}>
              <View>
                <CustomText p>Mange Notifications</CustomText>
                <CustomText p bold>All Active</CustomText>
              </View>
              <View style={{justifyContent:'center', alignItems:'center'}} >
                <CustomText label bold>Change</CustomText>
              </View>
            </TouchableView>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen);
