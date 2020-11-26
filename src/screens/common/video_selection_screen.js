
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

class VideoSelectionScreen extends Component {

  constructor(props){

    super(props);
    this.state = {
      video_list: []
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
      onPress={()=>this.props.navigation.navigate('VideoSelectionScreen')}
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoSelectionScreen);
