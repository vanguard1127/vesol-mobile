
// Dependencies
import React, { Component} from 'react';
import { connect } from "react-redux";
import RBSheet from "react-native-raw-bottom-sheet";

// Native Components
import { View,ScrollView, TextInput,Text, Image, FlatList, Dimensions } from 'react-native';

// Custom Components
import {
  CustomText, CenterContent, Container, Content, Screen, TouchableView, LineSeperator,
  CustomScrollView, CustomImage, AbsoluteCTA
} from '../../components/core_components';

// Sub Screens/ BottomSheets
import MapView, { AnimatedRegion, Marker, Polyline , PROVIDER_GOOGLE  }  from 'react-native-maps';

// StyleSheet
import Styles from '../../assets/styles/style.js'
import Icon from '../../assets/icons/icon.js'
import GoogleSilverMap from '../../resources/google_map_silver.json'

// Data
import * as Actions from '../../redux/actions'; //Redux actions
import CONST from '../../common/const';

var component_context;

class ConsoleScreen extends Component {

  constructor(props){

    super(props);
    this.state = {
      trending_rooms: [],
      private_rooms: [],

      room_title:'',
      room_type:1,

    }


    component_context = this;
    this.mapRef = null;
  }

  componentDidMount() {
    this.getTrendingRooms(
      function(status){
        console.log('trending rooms loading')
      }
    )
    this.getPrivateRooms(
      function(status){
        console.log('private rooms loading')
      }
    )
  }

  getTrendingRooms(progress_cb){
    global.Functions.handleAPI(
      CONST['TRENDING_ROOM'],
      'GET',
      {},
      function(response){

        component_context.setState({trending_rooms: response['rooms']})

      },
      function(error_message){
        alert(error_message)
      },
      progress_cb,
      this.props.User['user_data']['auth_token']
    );
  }

  getPrivateRooms(progress_cb){
    global.Functions.handleAPI(
      CONST['PRIVATE_ROOM'],
      'GET',
      {},
      function(response){

        component_context.setState({private_rooms: response['rooms']})

      },
      function(error_message){
        alert(error_message)
      },
      progress_cb,
      this.props.User['user_data']['auth_token']
    );
  }

  // createRoom(progress_cb){
  //   global.Functions.handleAPI(
  //     CONST['CREATE_ROOM'],
  //     'POST',
  //     {
  //       room_title:
  //       room_type:
  //     },
  //     function(response){
  //
  //       component_context.setState({private_rooms: response['rooms']})
  //
  //     },
  //     function(error_message){
  //       alert(error_message)
  //     },
  //     progress_cb,
  //     this.props.User['user_data']['auth_token']
  //   );
  // }

  trendingViewItem(item){
    return(
      <TouchableView
        style={{marginTop:5, marginRight:5}}
        onPress={()=>this.props.navigation.navigate('FullVideoScreen', {room_data: item})}
      >
        <CustomImage
          source={{uri: "https://img.youtube.com/vi/"+item['room_video_id']+"/0.jpg"}} imageHeight= {68}
          imageWidth= {120}
          imageResizeMode='cover'
        />
      </TouchableView>
    )
  }

  privateViewItem(item){
    return(
      <TouchableView style={{
          marginTop:5,
          height:(Dimensions.get('window').width-32)* 9/20,
          width: (Dimensions.get('window').width-32),
          marginBottom:5, borderRadius:15, padding:12, backgroundColor:'red'
        }}
        onPress={()=>this.props.navigation.navigate('FullVideoScreen', {room_data: item})}
        >
          <CustomImage
            source={{uri: "https://img.youtube.com/vi/"+item['room_video_id']+"/0.jpg"}}
            imageResizeMode='cover'
            blurRadius={4}
            style={{position:'absolute', borderRadius:15, top:0, left:0, right:0, bottom:0}}
          />
          <View style={{marginBottom:10, flexDirection:'row'}}>
            <View style={{flex:1}}>
              <CustomText invert h3 bold>{item['room_title']}</CustomText>
            </View>
            <TouchableView style={{marginLeft:5}}>
              <CustomImage
                source={require('../../assets/icons/user.png')}
                imageHeight= {36}
                imageWidth= {36}
                imageResizeMode='contain'
              />
            </TouchableView>
          </View>
          <View style={{marginBottom:10}}>
            <CustomText invert p>40 mins ago</CustomText>
          </View>
          <View style={{marginBottom:10, flexDirection:'row'}}>
            <CustomImage
              source={require('../../assets/icons/user.png')}
              imageHeight= {30}
              imageWidth= {30}
              imageResizeMode='contain'

              style={{borderRadius:15, marginRight:10}}
            />
            <CustomImage
              source={require('../../assets/icons/user.png')}
              imageHeight= {30}
              imageWidth= {30}
              imageResizeMode='contain'
              style={{borderRadius:15}}
            />
          </View>

      </TouchableView>
    )
  }

  render(){
    return(
      <Content>
        <Container>
          <Screen>
            <View style={{paddingHorizontal:16, paddingVertical:5, backgroundColor:'#fff', flexDirection:'row'}}
            >
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
                  <CustomText numberOfLines={1} label>Search Public Rooms e.g Bob’s Room</CustomText>
                </View>

              </TouchableView>
              <TouchableView style={{marginLeft:5}}
                onPress={()=>this.props.navigation.navigate('UserProfileScreen')}
              >
                <CustomImage
                  source={require('../../assets/icons/user.png')}
                  imageHeight= {46}
                  imageWidth= {46}
                  imageResizeMode='contain'
                />
              </TouchableView>
            </View>
            <CustomScrollView>
            <View style={{marginTop:5}}>
              <CustomText h2 bold>Trending Rooms</CustomText>
              <FlatList
                data={this.state.trending_rooms}
                horizontal
                renderItem={({item, index})=>this.trendingViewItem(item, index)}
              />
            </View>
            <View style={{marginTop:16}}>
              <CustomText h2 bold>Rooms</CustomText>
              <FlatList
                data={this.state.private_rooms}
                renderItem={({item, index})=>this.privateViewItem(item, index)}
              />
            </View>

            </CustomScrollView>
          </Screen>
        </Container>
        <TouchableView
          style={{
            position:'absolute', bottom:-51, height:100, width:100, backgroundColor:'#fff',
            alignItems:'center', alignSelf:'center', paddingTop:15,
           borderRadius:50
         }}
        onPress={() => this.RBSheet.open()}
       >
        <Icon
          name='plus'
          width={28}
          height={28}
          fill='#00796B'
        />
       </TouchableView>
        <RBSheet
         ref={ref => {
           this.RBSheet = ref;
         }}
         closeOnPressMask = {false}

         openDuration={250}
         >
         <View style={{padding:10}}>

             <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <CustomText h3 bold>Start a Broadcast</CustomText>
              <TouchableView style={{justifyContent:'center'}}
              onPress={() => this.RBSheet.close()}
              >
                <Icon
                  name='cross'
                  width={11}
                  height={11}
                />
               </TouchableView>
             </View>

             <View style={{marginTop:20, marginBottom:20}}>
               <TextInput
                 style={{
                   borderBottomWidth:1,
                   borderColor:'#ccc',
                   paddingVertical:10
                 }}
                 value={this.state.room_title}
                 onChangeText={(value)=>this.setState({room_title:value})}
                 placeholder= 'Bob’s Room'
               />
             </View>

             <View style={{flexDirection:'row', padding:10}}>

               <TouchableView
                 onPress={()=>this.setState({room_type:1})}
                 style={{
                   borderRadius:4,
                   backgroundColor: this.state.room_type === 1 ? '#00796B' : '#cccccc',
                   paddingHorizontal:20, paddingVertical:6, marginRight:10}}>
                 <CustomText invert>Public</CustomText>
               </TouchableView>

               <TouchableView
                 onPress={()=>this.setState({room_type:2})}
                 style={{
                   borderRadius:4,
                   backgroundColor: this.state.room_type === 2 ? '#00796B' : '#cccccc',
                   paddingHorizontal:20, paddingVertical:6, marginRight:10}}>
                 <CustomText invert>Private</CustomText>
               </TouchableView>

             </View>
          </View>
          <AbsoluteCTA
            buttonText='NEXT'
            onPress={()=>{
              this.RBSheet.close()
              this.props.navigation.navigate(
                'SelectContactsScreen',
                {
                  room_data: {
                    room_title: this.state.room_title,
                    room_type: this.state.room_type
                  }
                }
              )
            }}
          />
       </RBSheet>
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

export default connect(mapStateToProps, mapDispatchToProps)(ConsoleScreen);
