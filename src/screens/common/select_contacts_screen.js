
// Dependencies
import React, { Component} from 'react';
import { connect } from "react-redux";

// Native Components
import { View,ScrollView, TextInput,Text, Image,FlatList } from 'react-native';

// Custom Components
import {
  CustomText, CenterContent, Container, Content, Screen, TouchableView, LineSeperator,AbsoluteCTA,
  CustomScrollView, CustomImage
} from '../../components/core_components';

// Sub Screens/ BottomSheets
import MapView, { AnimatedRegion, Marker, Polyline , PROVIDER_GOOGLE  }  from 'react-native-maps';

// StyleSheet
import Styles from '../../assets/styles/style.js'
import Icon from '../../assets/icons/icon.js'
import GoogleSilverMap from '../../resources/google_map_silver.json'

import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';

// Data
import * as Actions from '../../redux/actions'; //Redux actions

var component_context;

class SelectContactsScreen extends Component {

  constructor(props){

    super(props);
    this.state = {
      contacts:[],
      invited_contacts_list:[]
    }

    component_context = this;
    this.mapRef = null;
  }


  componentDidMount() {

    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.',
        'buttonPositive': 'Please accept bare mortal'
      }
    ).then(() => {
      Contacts.getAll((err, contacts) => {
        if (err === 'denied'){
          console.log(err);
        } else {
          this.setState({contacts: contacts})
        }
      })
    });

  }

  inviteContact(contact){
    let invites = component_context.state.invited_contacts_list;

    invites.push(contact)

    this.setState({invited_contacts_list: invites})
  }

  contactListView(contact){

    let is_active = this.state.invited_contacts_list.includes(contact['phoneNumbers'][0]['number'])

    return(
      <TouchableView
        onPress={()=>component_context.inviteContact(contact['phoneNumbers'][0]['number'])}
        style={{flexDirection:'row', padding:10,
        backgroundColor: is_active ? '#ccc': '#fff',
        marginBottom:5,
        alignItems:'center'
      }}>
      <View style={{marginRight:10}}>
        <CustomImage
          source={require('../../assets/icons/user.png')}
          imageHeight= {30}
          imageWidth= {30}
          imageResizeMode='contain'
          style={{borderRadius:15}}
        />
      </View>
        <CustomText h3>{contact.givenName+' '+contact.familyName}</CustomText>
      </TouchableView>
    )
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
            <TouchableView style={{backgroundColor:'#eee', borderRadius:10,
            borderWidth:1, borderColor:'#ccc', flexDirection:'row', flex:1,
            padding:10
              }}>
              <View style={{justifyContent:'center', alignItems:'center', marginRight:10}}>
                <Icon
                  name='search'
                  width={14}
                  height={14}
                />
              </View>
              <View style={{flex:1, justifyContent:'center'}}>
                <CustomText label>Search Friends</CustomText>
              </View>
            </TouchableView>
          </View>
          <Screen>
            <FlatList
              extraData={this.state.invited_contacts_list}
              data={this.state.contacts}
              renderItem={({item, index})=>this.contactListView(item, index)}
            />
          </Screen>
          <AbsoluteCTA
            buttonText='Invite & Start'
            onPress={()=>{
              this.props.navigation.replace('FullVideoScreen',
              {
                room_data: {

                  invited_contacts_list: component_context.state.invited_contacts_list,
                  ...component_context.props.route.params.room_data
                }
              }
            )
            }}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectContactsScreen);
