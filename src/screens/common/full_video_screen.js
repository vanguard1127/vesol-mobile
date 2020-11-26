
// Dependencies
import React, { Component} from 'react';
import { connect } from "react-redux";

// Native Components
import { View,ScrollView, TextInput,Text, Image,FlatList, Dimensions } from 'react-native';
import YoutubePlayer from "react-native-yt-player";

// Custom Components
import {
  CustomText, CenterContent, Container, Content, Screen, TouchableView, LineSeperator,
  CustomScrollView, CustomImage
} from '../../components/core_components';

// Sub Screens/ BottomSheets
import MapView, { AnimatedRegion, Marker, Polyline , PROVIDER_GOOGLE  }  from 'react-native-maps';

// StyleSheet
import Styles from '../../assets/styles/style.js'
import Icon from '../../assets/icons/icon.js'


// Data
import * as Actions from '../../redux/actions'; //Redux actions

var component_context;

class FullVideoScreen extends Component {

  constructor(props){

    super(props);
    this.state = {
      chat_enabled: true,
      room_data: this.props.route.params.room_data
    }

    component_context = this;

    this.mapRef = null;
  }


  componentDidMount() {

  }

  relatedVideoItem(item, index){
    return(
      <TouchableView
      style={{marginBottom:5, backgroundColor:'#fff', padding:10, flexDirection:'row'}}
      onPress={()=>this.props.navigation.navigate('FullVideoScreen')}
      >
        <CustomImage
          source={require('../../assets/icons/trending_thumbnail.png')}
          imageHeight= {87}
          imageWidth= {154}
          imageResizeMode='contain'
        />
        <View style={{marginLeft:5, justifyContent:'space-between'}}>
          <View style={{marginBottom:5, flexDirection:'row'}}>
            <CustomText bold>15 Things You Didn’t Know About Elon Musk </CustomText>
          </View>
          <View style={{marginBottom:5}}>
            <CustomText>1.2 M views</CustomText>
          </View>
        </View>
      </TouchableView>
    )
  }


  render(){
    return(
      <Content>
        <Container>
          <Screen>
            {
              component_context.state.room_data['room_video_id'] ?

            <View>
              <YoutubePlayer
                loop
                videoId={this.state.room_data['room_video_id']}
                autoPlay
                onFullScreen={()=>console.log("onFullScreen")}
                onStart={() => console.log("onStart")}
                onEnd={() => console.log("onEnd")}
              />
              <View style={{
                paddingVertical:14, paddingHorizontal:16, backgroundColor:'#fff',
                borderBottomWidth:1, borderColor:'#C2E1DD'
              }}>
                <CustomText bold>{this.state.room_data['room_title']}</CustomText>
              </View>
              <View style={{
                paddingVertical:14, paddingHorizontal:16, backgroundColor:'#fff',
                flexDirection:'row', justifyContent:'space-between',
                borderBottomWidth:1, borderColor:'#C2E1DD'
              }}>
                <View style={{flexDirection:'row'}}>
                  <View style={{marginRight:10}}>
                    <CustomImage
                      source={require('../../assets/icons/user.png')}
                      imageHeight= {40}
                      imageWidth= {40}
                      imageResizeMode='contain'
                      style={{borderRadius:15}}
                    />
                  </View>
                  <View style={{marginRight:10, justifyContent:'center'}}>
                    <CustomText h3 bold>{this.props.User['user_data']['user_name']}</CustomText>
                  </View>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
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
              </View>
              <View style={{paddingVertical:14, paddingHorizontal:16, backgroundColor:'#fff', flexDirection:'row'}}>
                <TouchableView style={{justifyContent:'center', alignItems:'center', marginRight:10}}
                onPress={()=>this.props.navigation.goBack()}
                >
                  <Icon
                    name='back'
                    width={14}
                    height={14}
                  />
                </TouchableView>
                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                  <TouchableView style={{marginRight:10, justifyContent:'center', flex:0.5}}
                    onPress={()=>this.setState({chat_enabled:true})}
                  >
                    <CustomText
                    h3
                    bold
                    center>Chat</CustomText>
                  </TouchableView>
                  <TouchableView style={{marginRight:10, flex:0.5}}
                  onPress={()=>this.setState({chat_enabled:false})}
                  >
                    <CustomText
                    h3
                    bold
                    center>Video</CustomText>
                  </TouchableView>
                </View>
              </View>
                {
                  this.state.chat_enabled ?
                  <CustomScrollView>
                    <View style={{backgroundColor:'#C2E1DD70', borderRadius:15, borderBottomLeftRadius:0, padding:10, marginBottom:10}}>
                      <CustomText h3>Hello John, what are you going to do this weekend?</CustomText>
                    </View>
                    <View style={{backgroundColor:'#C2E1DD70', borderRadius:15, borderBottomLeftRadius:0, padding:10, marginBottom:10}}>
                      <CustomText h3>Hello John, what are you going to do this weekend?</CustomText>
                    </View>
                    <View style={{backgroundColor:'#C2E1DD70', borderRadius:15, borderBottomLeftRadius:0, padding:10, marginBottom:10}}>
                      <CustomText h3>Hello John, what are you going to do this weekend?</CustomText>
                    </View>
                    <View style={{backgroundColor:'#00796B', borderRadius:15, borderBottomRightRadius:0, padding:10 , marginBottom:10}}>
                      <CustomText h3 invert>Nothing planned, and you?</CustomText>
                    </View>
                    <View style={{backgroundColor:'#C2E1DD70', borderRadius:15, borderBottomLeftRadius:0, padding:10, marginBottom:10}}>
                      <CustomText h3>Hello John, what are you going to do this weekend?</CustomText>
                    </View>
                    <View style={{backgroundColor:'#00796B', borderRadius:15, borderBottomRightRadius:0, padding:10, marginBottom:10}}>
                      <CustomText h3 invert>Nothing planned, and you?</CustomText>
                    </View>
                    <View style={{backgroundColor:'#C2E1DD70', borderRadius:15, borderBottomLeftRadius:0, padding:10, marginBottom:10}}>
                      <CustomText h3>Hello John, what are you going to do this weekend?</CustomText>
                    </View>
                    <View style={{backgroundColor:'#00796B', borderRadius:15, borderBottomRightRadius:0, padding:10, marginBottom:10}}>
                      <CustomText h3 invert>Nothing planned, and you?</CustomText>
                    </View>
                  </CustomScrollView>

                  :
                    <CustomScrollView >
                      <FlatList
                        data={[1,1,2,2,2,2,2,2]}
                        renderItem={({item, index})=>this.relatedVideoItem(item, index)}

                      />
                    </CustomScrollView>
                }

            </View>
            :
            <View>
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
                    <CustomText label>Search Videos</CustomText>
                  </View>
                </TouchableView>
              </View>
              <CustomScrollView nopadding>

                <FlatList
                  data={[1,1,2,2,2,2,2,2]}
                  renderItem={({item, index})=>this.relatedVideoItem(item, index)}

                />
              </CustomScrollView>
            </View>

          }
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

export default connect(mapStateToProps, mapDispatchToProps)(FullVideoScreen);
