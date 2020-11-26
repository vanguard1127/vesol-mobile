// Info: React-Native Components for Customer App - Android/iOS (Mobile)
// Description: This file has all core components accessible only to the app-components.js file
'use-strict'

///////////////////////////Public Functions START//////////////////////////////

// Dependencies
import React, {Component, Fragment} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  StyleSheet,
  Alert,
  FlatList,
  Image,
  Animated,
  ScrollView,
  Easing,
  TextInput,
  Dimensions,
  Platform,
  PanResponder,
  TimePickerAndroid,
  DatePickerIOS,
  SafeAreaView,
  KeyboardAvoidingView,
  StatusBar,
  ActivityIndicator
} from 'react-native';

// Resources
import Styles from './style.js';
import Icon from './assets/icon';


export class CustomText extends Component{

  render(){

    return(

        <Text
          style={[
            (this.props.p) ? Styles.p : null,
            (this.props.h1) ? Styles.h1 : null,
            (this.props.h2) ? Styles.h2 : null,
            (this.props.h3) ? Styles.h3 : null,
            (this.props.h4) ? Styles.h4 : null,
            (this.props.primary) ? Styles.primary : null,
            (this.props.secondary) ? Styles.secondary : null,
            (this.props.label) ? Styles.label : null,
            (this.props.center) ? Styles.centerText : null,
            (this.props.invert) ? Styles.invertText : null,
            (this.props.danger) ? Styles.dangerText : null,
            (this.props.italic) ? Styles.italicText : null,
            (this.props.light) ? Styles.lightText : null,
            (this.props.bold) ? Styles.boldText : null
          ]}
          numberOfLines={this.props.numberOfLines}
          ellipsizeMode='tail'
        >
          {this.props.children}
        </Text>

    )

  }
}


export const Content = (props) => {

  return(
    <View style={Styles.content}>
      {props.children}
    </View>
  )

}

export const Screen = (props) => {

  return(
    <View style={Styles.screen}>
      {props.children}
    </View>
  )

}

export const CustomScrollView = (props) => {

  return(
    <ScrollView
      contentContainerStyle={props.nopadding ? null : Styles.customScrollView}
    >
      {props.children}
    </ScrollView>
  )

}

export class AbsoluteCTA extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: false
    }
  }

  handlePress(){
    var component_context = this;
    this.props.onPress(
      function(loading){
        component_context.setState({loading: loading});
      }
    );

  }


  render(){
    return(
      <TouchableView style={{
        backgroundColor:'#00796B',
        padding:12,
        bottom:0,
        alignItems:'center',
        justifyContent:'center'
      }}
      onPress={()=>this.handlePress()}
      >
        {
          this.state.loading ?
            <ActivityIndicator size="small" color="#ffffff" />
          :
            <CustomText h4 invert center bold>{this.props.buttonText}</CustomText>
        }
      </TouchableView>
      )
  }

}


export const TouchableView = (props) => {

  return(
    <TouchableOpacity activeOpacity={0.5} {...props}>
      {props.children}
    </TouchableOpacity>
  )

}


export const InputForm = (props) => {

  return(
    <View style={Styles.inputForm}>
      {props.children}
    </View>
  )

}


export const PrimaryCTA = (props) => {

  return(
    <View style={Styles.primaryCTA}>
      <Cta {...props} />
    </View>
  )

}


export const ActionBar = (props) => {

  return(
    <View style={Styles.actionBar}>
      <View style={Styles.actionWrapper}>

        {/* Action bar title */}
        <View style={Styles.actionBarText}>
          <CustomText numberOfLines = {1} h3 bold secondary>{props.actionBarData.actionBarTitle}</CustomText>
        </View>

        <CPR>
          {/* Action bar left icon */}
          {
            props.actionBarData.actionBarLeftIcons.map(
              function(icon_data){
                return(
                  <TouchableView style={Styles.actionBarIconLeftContent} onPress={() => icon_data.onPress()}>
                    <Icon
                      name={icon_data.iconName}
                      width={icon_data.iconWidth}
                      height={icon_data.iconHeight}
                      fill={icon_data.iconColor}
                    />
                  </TouchableView>
                )
              }
            )
          }


          {/* Action bar left text */}

          {
            props.actionBarData.actionBarLeftText?
              <TouchableView style={Styles.actionBarIconLeftContent} onPress={props.actionBarData.actionBarLeftText.onPress}>
                <CustomText numberOfLines = {1} p>{props.actionBarData.actionBarLeftText.text}</CustomText>
              </TouchableView>
            :
              null
          }
        </CPR>

        <CPR>

          {/* Action bar right text */}

          {
            props.actionBarData.actionBarRightText?
              <TouchableView style={Styles.actionBarIconRightContent} onPress={props.actionBarData.actionBarRightText.onPress}>
                <CustomText numberOfLines = {1} p>{props.actionBarData.actionBarRightText.text}</CustomText>
              </TouchableView>
            :
              null
          }

          {/* Action bar right icon */}
          {
            props.actionBarData.actionBarRightIcons.map(
              function(icon_data){
                return(
                  <TouchableView style={Styles.actionBarIconRightContent} onPress={() => icon_data.onPress()}>
                    <Icon
                      name={icon_data.iconName}
                      width={icon_data.iconWidth}
                      height={icon_data.iconHeight}
                      fill={icon_data.iconColor}
                    />
                  </TouchableView>
                )
              }
            )
          }


        </CPR>

      </View>
    </View>
  )

}


export const CustomKeyboardAvoidingView  = (props) => {

  return(
    <KeyboardAvoidingView style={Styles.keyboardAvoidingView}
      behavior={Platform.OS==='ios' ? 'padding' : null}
      enabled>
      {props.children}
    </KeyboardAvoidingView>
  )

}


export const Container  = (props) => {

  return(
    <Fragment>
      <SafeAreaView style={Styles.safeAreaView} >
        <CustomKeyboardAvoidingView>
          <StatusBar/>
          {props.children}
        </CustomKeyboardAvoidingView>
      </SafeAreaView>
    </Fragment>
  );

}


/********************************************************************
  Custom cta Component

  @param {String} type - type defines which type of cta UI to be displayed
  @param {String} text - string to be printed on UI

  @return Component

  @callback - onPress function will execute on press of cta
*********************************************************************/

export class Cta extends Component{

  constructor(props){
    super(props);

    this.state = {
      loading: false
    }
  }

  handlePress(){
    var component_context = this;
    this.props.onPress(
      function(loading){
        component_context.setState({loading: loading});
      }
    );

  }

  render(){
    return(
        <TouchableView
          style={
            (this.props.type==="primary") ?
              Styles.ctaPrimary
            :
            (this.props.type==="smallCtaPrimary") ?
              Styles.smallCtaPrimary
            :
            (this.props.type==="disabled") ?
              Styles.ctaDisabled
            :
              Styles.smallCtaLight
          }
          activeOpacity={
            (this.props.type==="disabled") ?
            1
            :
            0.8
          }
          onPress={
            (this.props.type!=="disabled" && !this.state.loading) ?
              ()=>this.handlePress()
            :
              ()=>{}
          }
        >
        {
          this.state.loading ?
            <ActivityIndicator size="small" color="#ffffff" />
          :
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CustomText mText m_text_bc_primary >
                {this.props.ctaText}
              </CustomText>

              <View style={{marginLeft: 5}}>
                <Icon
                  name="LongTailRightArrow"
                  width={20}
                  height={20}
                  fill="#ffffff"
                />
              </View>
            </View>
        }



        </TouchableView>
    )
  }
}


/********************************************************************
@param {String} imageSource - image source to be provided
@param {Map} imageSource - image url must be provided with in uri map keyExtractor
@param {String} imageResize - possible values(cover, containe, stretch, repeat, center)

@return Costume Image Component

*********************************************************************/

export class CustomImage extends Component{

  render(){
    console.log('CustomImage', this.props.source)
    return(
      <Image
        {...this.props}
        source={this.props.source}
        resizeMode={this.props.imageResizeMode}
        style={[{width: this.props.imageWidth, height: this.props.imageHeight, backgroundColor:this.props.imageBackgoundColor}, this.props.style]}
      />
    )
  }
}



export const CPR = (props) => {

  return(
    <View style = {Styles.cPr}>
      {props.children}
    </View>
  )
}



export const CenterContent = (props) => {

  return(
    <View style = {Styles.centerContent}>
      {props.children}
    </View>
  )
}


var dash = [];
export class LineSeperator extends Component{

  constructor(props){
    super(props);

    this.state={
      initialRender:false,
      width:null
    }
  }

  measure(event){
    this.state.width = event.nativeEvent.layout.width;
    this.setState({initialRender: false});
    this.dash();
  }

  dash(){

  const length = this.state.width

  const n = Math.ceil(length / (2 + 2))

  for (let i = 0; i < n; i++) {

    dash.push(
    <View key={ i } style={{ flexDirection: 'row' }}>
      <View style={{
          backgroundColor: 'black',
          width: 2,
          height: 1,
        }}
      />

    <View style={{
        backgroundColor: 'white',
        width: 2,
        height: 1,
      }}
    />
    </View>
    )

}
}
  render(){

  return(

        (this.props.type === "solid") ?

            <View style={{ backgroundColor: '#ddd', height: 1, width: '100%' }} />

        :
          (this.props.type === "solid-right") ?

              <View style={{ backgroundColor: '#ddd', height: 1, width: '100%', marginLeft:16 }} />

        :

          ( (this.state.initialRender) ?

            <View
              style={{backgroundColor: 'yellow'}}
              onLayout={(event) => this.measure(event)}
            />

        :

          <View style={{ flexDirection: 'row' }}>
            {this.dash()}
          </View>

      )
    );
  }

}


export class CustomInputField extends Component{
  render(){

    return(

      <View style={Styles.inputFieldWrapper}>
        <View style={Styles.inputLabel}>
          <CustomText numberOfLines={1} p>{this.props.inputTextOnLeft}</CustomText>
        </View>
        <View style={Styles.pTextWrapper}>
          <TextInput
            placeholder={this.props.placeholder}
            placeholderTextColor={this.props.placeholderTextColor}
            numberOfLines={1}
            maxLength = {this.props.maxLength}
            style={Styles.textInputWrapper}
            onChangeText={(value) => this.props.onChangeText(value)}
            value={this.props.inputValue}
            keyboardType={this.props.keyboardType}
          />
        </View>

          {
            (this.props.type==="percentageIcon") ?
            <View style={Styles.customInputFieldIcon}>
              <Icon
                name={this.props.inputFieldIcon}
                width={12}
                height={12}
                fill="#8A898A"
              />
            </View>
              :
              (this.props.type==="clickableInputFieldIcon") ?
              <View style={Styles.customInputFieldIcon}>
                <TouchableView onPress={this.props.onInputIconPress}>
                  <Icon
                    name={this.props.inputFieldIconRight}
                    width={11}
                    height={20}
                    fill="#8A898A"
                  />
                </TouchableView>
              </View>
              :
              (this.props.type==="linkCtaOnRight") ?
                <View style={{marginLeft:12, maxWidth:120}}>
                  <CustomText numberOfLines={1} p>{this.props.textRight}</CustomText>
                </View>
              :
                null
          }
      </View>

    )
  }
}
