
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
import Icon from '../../assets/icons/icon.js'

// Data
import * as Actions from '../../redux/actions'; //Redux actions

var component_context;

class UpdateNameScreen extends Component {

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
      actionBarTitle: "Change Name",
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
              <CustomText h3 bold center>Update Name</CustomText>
            </View>

          </View>
          <Screen>
            <View style={{padding:20}}>
              <CustomText p  primary>
                Full name
              </CustomText>
              <View style={{marginTop:10, marginBottom:20}}>
                <TextInput
                  style={{
                    borderRadius:8,
                    borderWidth:1,
                    borderColor:'#ccc',
                    padding:10
                  }}

                  value='Brij'

                  placeholder= 'Full Name'
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateNameScreen);
