'use-strict'

// Dependencies
import {StyleSheet, StatusBar, Dimensions, Platform} from 'react-native';

// Resources
import Themes from '../assets/light';


module.exports = StyleSheet.create({
  p:{
  fontSize: Themes.dimensions.PARAGRAPH,
  lineHeight: 20,
  color: Themes.colors.TC_PRIMARY,

},
p_disabledText:{
  color: Themes.colors.DISABLED,
},
p_primaryText:{
  color: Themes.colors.FC_PRIMARY,
},
p_fc_secondaryText:{
  color: Themes.colors.FC_SECONDARY
},
p_tc_secondaryText:{
  color: Themes.colors.TC_SECONDARY
},
extraLargeText:{
  fontSize:Themes.dimensions.XL,
  lineHeight:50,
  color:Themes.colors.TC_PRIMARY,

},
largeText:{
  fontSize:Themes.dimensions.LARGE,
  lineHeight:22,
  color:Themes.colors.TC_PRIMARY,

},
h1:{
  fontSize: Themes.dimensions.H1,
  lineHeight:30
},
h2:{
  fontSize: Themes.dimensions.H2,
  lineHeight:26
},
h3:{
  fontSize: Themes.dimensions.H3,
  lineHeight:24
},
h4:{
  fontSize: Themes.dimensions.H4,
  lineHeight:24
},
primary:{
  color: Themes.colors.TC_PRIMARY
},
secondary:{
  color: Themes.colors.FC_PRIMARY
},
h3Secondary:{

  color: Themes.colors.TC_SECONDARY,

},
h4Text:{
  color: Themes.colors.TC_PRIMARY,
  fontSize: Themes.dimensions.H4,
  lineHeight:20,

},
h5Text:{
  color: Themes.colors.TC_PRIMARY,
  fontSize: Themes.dimensions.H5,
  lineHeight:18,

},
lText:{
  color: Themes.colors.TC_PRIMARY,
  fontSize: Themes.dimensions.LARGE,
  lineHeight:24,

},
mText:{
  color: Themes.colors.TC_PRIMARY,
  fontSize:Themes.dimensions.MEDIUM,
  lineHeight:20,

},
mTextFCPrimary:{
  color: Themes.colors.FC_PRIMARY,

},
mTextBCPrimary:{
  color: Themes.colors.BC_PRIMARY,
},
label_text:{
  color:Themes.colors.TC_DISABLED,
  fontSize:Themes.dimensions.LABEL,
  lineHeight:18,

},
sub_text:{
  color:Themes.colors.TC_SECONDARY,
  fontSize:Themes.dimensions.PARAGRAPH,
  lineHeight:20,

},
centerText: {
  textAlign: 'center',
},
invertText: {
  color:Themes.colors.BC_PRIMARY
},
label: {
  color:Themes.colors.TC_DISABLED
},
italicText: {
  fontStyle:'italic'
},
dangerText: {
  color: '#FF423C'
},
lightText:{
  color: '#A19EAF'
},
boldText:{
  fontWeight: '700'
},
labelTextBCPrimary:{
  color:Themes.colors.BC_PRIMARY,

  fontSize:Themes.dimensions.SMALL,
  lineHeight:14
},
ctaPrimary:{
  backgroundColor:Themes.colors.FC_PRIMARY,
  flex:1,
  borderRadius: 8,
  flexDirection: 'row',
  paddingTop: 12,
  paddingBottom:12,
  paddingLeft:32,
  paddingRight:32,
  justifyContent:'center',
  alignItems: 'center'
},
ctaDisabled:{
  backgroundColor:Themes.colors.DISABLED,
  borderRadius: 8,
  flexDirection: 'row',
  paddingTop: 12,
  paddingBottom:12,
  paddingLeft:32,
  paddingRight:32,
  justifyContent:'center',
  alignItems: 'center'
},
smallCtaPrimary:{
  backgroundColor:Themes.colors.FC_PRIMARY,
  borderRadius: 8,
  width: 136,
  height: 44,
  paddingHorizontal: 16,
  paddingVertical:12,
  justifyContent:'center',
  alignItems: 'center',
  color:'#7954FA'
},
smallCtaLight:{
  backgroundColor:Themes.colors.BC_SECONDARY,
  borderRadius: 8,
  width: 136,
  height: 44,
  paddingTop: 12,
  paddingBottom:12,
  paddingLeft:16,
  paddingRight:16,
  justifyContent:'center',
  alignItems: 'center'
},
smallCtaLightUnpressed:{
  backgroundColor:'#F5F5FA',
  borderRadius: 8,
  width: 136,
  height: 44,
  paddingHorizontal: 16,
  paddingVertical:12,
  justifyContent:'center',
  alignItems: 'center'
},
smallCtaLightPressed:{
  backgroundColor:Themes.colors.FC_PRIMARY,
  color:Themes.colors.BC_PRIMARY,
  borderRadius: 8,
  width: 136,
  height: 44,
  paddingHorizontal: 16,
  paddingVertical:12,
  justifyContent:'center',
  alignItems: 'center'
},
smallCtaColor:{
  backgroundColor:Themes.colors.FC_PRIMARY,
  borderRadius: 8,
  width: 136,
  height: 44,
  paddingTop: 12,
  paddingBottom:12,
  paddingLeft:16,
  paddingRight:16,
  justifyContent:'center',
  alignItems: 'center'
},
linkCtaPrimary:{
  color:Themes.colors.FC_PRIMARY,
  maxWidth: 130,
  paddingTop:4,
  paddingBottom:4,
  paddingLeft:12,
  paddingRight:12
},
  linkCtaDisabled:{
    color:Themes.colors.DISABLED,
    maxWidth: 130,
    paddingTop:4,
    paddingBottom:4,
    paddingLeft:12,
    paddingRight:12
  },
  circleCta:{
    backgroundColor:'#FCEBEA',
    width: 36,
    height:36,
    borderRadius:36/2,
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom:8,
    paddingLeft:10,
    paddingRight:10,
    justifyContent:'center',
    alignItems: 'center'
  },
  circleCtaDisabled:{
    backgroundColor:Themes.colors.DISABLED,
    width: 36,
    height:36,
    borderRadius:18,
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom:8,
    paddingLeft:10,
    paddingRight:10,
    justifyContent:'center',
    alignItems: 'center'
  },
  radioButtonChecked:{
    borderRadius: 10,
    width: 20,
    height: 20,
    borderWidth:7,
    borderColor: '#7954FA',
    justifyContent:'center',
    alignItems: 'center',

  },
  radioButtonUnChecked:{
    borderRadius: 10,
    width: 20,
    height: 20,
    borderWidth: 2,
    backgroundColor: '#ffffff',
  },
  checkBoxChecked:{
    width: 20,
    height: 20,
    borderWidth: 2,
    justifyContent:'center',
    alignItems:'center',
    borderColor: '#7954FA',
    backgroundColor: '#7954FA',
  },
  checkBoxUnChecked:{

    width: 20,
    height: 20,
    borderWidth:2,
    borderColor: '#000000',
    backgroundColor: '#ffffff',
    borderRadius:5
  },
  smallCircle:{
    borderRadius:3,
    backgroundColor:'#FFFFFF',
  },

  fitToParentRadio:{
    flex:1,
    flexDirection:'row',
  },
  mainWrapper:{
    paddingLeft:16,
    paddingTop:16,
    justifyContent:'center',
  },

  mainWrapperChekBox:{
    paddingLeft:16,
    paddingTop:16,
    justifyContent:'center',


  },
radioButtonListWrapperWithBorder:{
  flex:1,
  flexDirection:'row',
  padding:16,

  borderBottomColor:'#F1F4F6',
  justifyContent:'space-between',
  borderBottomWidth:1,
  alignItems: 'center',
},

radioButtonListWrapper:{
  alignItems: 'center',
  justifyContent:'space-between',
  flex:1,
  padding:16,
  flexDirection:'row',
},
radioButtonIconParent:{
  width:22
},
radioButtonLabelParent:{
  flex:1
},
radioButtonTypeListIcon:{
  justifyContent:'center',
  alignItems:'center',
  width:16
},
textWithSeparator:{
  flex:1,
  marginTop:16,
  marginBottom:16,
  // marginLeft:16,
  // marginLeft:52,
  maxWidth:292,
  height:20,
  flexDirection:'row',
  justifyContent:'space-between',
},
fitToParentCheckBox:{
  flex:1,
  flexDirection:'row',
},
checkBoxMainWrapper:{
  flexDirection:'row',
  borderRadius:12,
},
//CheckBoxWithSeperator
checkBoxMainWrapperSeperator:{
  backgroundColor:'#FFFFFF',
  flexDirection:'row',
  paddingTop:16,
},
//CheckBoxWithSeperator
checkBoxWithTextWrapperSeperator:{
  flex:1,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',

},
//CheckBoxWithSeperator
checkBoxtextWrapperSeperator:{
  flex:1,
  marginRight:19
},
//CheckBoxWithSeperator
mTextWrapperSeperator:{
  flex:1
},
//CheckBoxWithSeperator
pTextWrapperSeperator:{
  flex:1
},
checkBoxWithTextWrapper:{
  flex:1,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
},
checkBoxInnerWrapper:{
  marginRight:16
},
checkBox:{
  width:20,
  height:20,
  //borderColor:Themes.colors.TC_PRIMARY,
  borderWidth:1
},
checkBoxtextWrapper:{
  flex:1,
  marginRight:19
},
textParentWrapper:{

},

chevronIcon:{
  width:20,
  justifyContent:'center'
},
checkBoxWithIconWrapper:{
  flex:1,
  flexDirection:'row'
},
checkBoxImageMainWrapper:{
  flex:1,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:12,
  borderWidth:1,
  borderColor:'black',
},
checkBoxImage:{
  width:20,
  height:20,
  borderRadius:8,
  marginLeft:28,
  marginTop:28,
  marginBottom:28
},
imageBox:{
  width:44,
  height:44,
  borderRadius:8,
  marginTop:16,
  marginBottom:16,
  marginLeft:16,
  marginRight:16
},
checkBoxImageTextWrapper:{
  flex:1,
  marginTop:16,
  marginBottom:16,
  justifyContent:'center'
},
actionBar:{
  height:52,
  justifyContent:'center',
  backgroundColor:'#000000'
},
bottomSheetActionBar:{
  height:56,
  justifyContent:'center',
  borderBottomWidth:1,
  borderTopRightRadius:10,
  borderTopLeftRadius:10,
  borderBottomColor:'#C6C6C6',
  backgroundColor:'#fff'
},
actionWrapper:{
  paddingLeft:16,
  paddingRight:16,
  alignItems:'center',
  flexDirection:'row',
  justifyContent:'space-between'
},
iconTextWrapper:{
  flex:1,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center'
},
actionBarText:{
  position:'absolute',
  left:0,
  right:0,
  paddingLeft:90,
  paddingRight:90,
  height:26,
  flexDirection:'row',
  justifyContent:'center'
},
actionBarIconLeftContent:{
  marginRight:8
},
actionBarIconRightContent:{
  marginLeft:8
},
containerWrapper:{
  backgroundColor:'#FFF4E0',
  height:500,
},
containerDefault:{
  height:134,
  backgroundColor:Themes.colors.BC_PRIMARY,
  borderWidth:1,
  borderColor:Themes.colors.BC_PRIMARY,
  marginBottom:10,
  marginTop:13,
  marginBottom:13,
  marginLeft:11,
  marginRight:11,
  padding:16
},
containerShadow:{
    borderRadius: 8,
    height:78,
    shadowColor: '#F5F5FA',
    shadowOffset: {
    	width: 0,
    	height: 4,
    },
    shadowOpacity: 1,
    backgroundColor:Themes.colors.BC_PRIMARY,
    padding:16
},
containerBackground:{
  height:134,
  backgroundColor:Themes.colors.BC_SECONDARY,
  paddingVertical:16
},
actionBarWrapper:{
  flex:1,
  flexDirection:'row',
  justifyContent:'center'
},
iconWrapper:{
  justifyContent:'center',
  marginTop:17,
  marginBottom:17,
  marginLeft:16,
  marginRight:16
},
primaryTag:{

  borderRadius:2,
  backgroundColor:'#F6F6F6',
  color:'#FFFFFF',
  paddingTop:2,
  paddingBottom:2,
  paddingLeft:2,
  paddingRight:2
},
primaryTagBorder:{
  borderRadius:2,
  borderColor:Themes.colors.TC_PRIMARY,
  borderWidth:1,
  paddingTop:2,
  paddingBottom:2,
  paddingLeft:2,
  paddingRight:2
},
primaryTagBackground:{
  flex:1,
  borderRadius:2,
  color:Themes.colors.BC_PRIMARY,
  paddingTop:2,
  paddingBottom:2,
  paddingLeft:2,
  paddingRight:2
},
searchBarWrapper:{
  flexDirection:'row',
  marginTop:13,
  marginBottom:13,
  marginLeft:11,
  marginRight:12,
  borderRadius:12,
  backgroundColor:'#FFFFFF'
},
focusedSearchBarWrapper:{
  flexDirection:'row',
  marginTop:13,
  marginBottom:13,
  marginLeft:11,
  marginRight:12,
  borderColor:'#7954FA',
  borderWidth:1,
  borderRadius:12,
  backgroundColor:'#FFFFFF'
},
searchIconWrapper:{
  justifyContent:'center',
  marginTop:17,
  marginBottom:17,
  marginLeft: 16,
  marginRight:16
},
textAreaWrapper:{
  minHeight:165,
  maxHeight:165,
  padding:16,
  paddingTop:16,
  textAlignVertical: "top"
},
textInputWrapper:{
  minHeight:20,
  maxHeight:20,
  padding:0,

},
iconMainWrapper:{
  width:52,
  height:52,
  justifyContent:'center',
  marginLeft:22
},
cancelIconWrapper:{
  backgroundColor:'#F1F4F6',
  width: 24,
  height:24,
  borderRadius:12,
  flexDirection: 'row',
  paddingTop: 7,
  paddingBottom:7,
  paddingLeft:7,
  paddingRight:7,
  justifyContent:'center',
  alignItems: 'center'
},
inputFieldWrapper:{
  flexDirection:'row',
  alignItems:'center',
  padding:16
},

primaryCTA:{
  backgroundColor:'#fff',
  position:'absolute',
  bottom:0,
  left:0,
  right:0,
  padding:16
},

inputForm:{
  backgroundColor:'#ffffff'
},
mTextWrapper:{
  flex:1,
  justifyContent:'center'
},
pTextWrapper:{
  flex:1,
  justifyContent:'center',
},
inputField:{
  flex:1,
  marginLeft:16
},
customInputFieldIcon:{
  width:24,
  justifyContent:"center",
  alignItems:'center'
},
clickableInputFieldIcon:{
  width:24,
  justifyContent:"center",
  alignItems:'center',
},
//styling for app components



//App components styling

notificationWrapper:{
  paddingTop:16,
  paddingBottom:16,
  paddingLeft:16,
  paddingRight:94,
  backgroundColor:'#FCF0CF'
},
notificationPtextWrapper:{
  flex:1,
  marginBottom:8,
  justifyContent:'center'
},
notificationMtextWrapper:{
  flex:1,
  flexDirection:'row',
  marginBottom:8
},
notificationMtextLeftWrapper:{
  marginRight:8,
  width:56
},
notificationMtextRightWrapper:{
  width:56
},
quickLinkWrapper:{
  alignSelf: 'flex-start',
  borderRadius:8,
  marginBottom:10,
  paddingTop:8,
  paddingBottom:8,
  paddingLeft:8,
  paddingRight:8,
  backgroundColor:'#FFFFFF',
  shadowColor: '#F5F5FA',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 1,
},

//COMPLEX COMPONENTS

cardWrapper:{
  paddingTop:16,
  paddingBottom:16,
  paddingLeft:24,
  paddingRight:24,
  borderRadius:8,
  backgroundColor:'#FFFFFF',
  shadowColor: '#F5F5FA',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 1
},
cardInnerWrapper:{
  alignItems:'center'
},
h4CardTextWrapper:{
  marginBottom:8,
  justifyContent:'center'
},
extraLargeCardText:{
  marginBottom:8,
}
,
increaseIconWithText:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between'
},
increaseIcon:{
  marginRight:8
},

//COMPLEX COMPONENTS

cardIconWrapper:{
  flexDirection:'row',
  borderColor:Themes.colors.BC_PRIMARY,
  borderRadius:8,
  borderWidth:1,
  paddingTop:16,
  paddingLeft:16,
  paddingBottom:16,
  paddingRight:16,
  alignItems:'center',
  shadowColor: '#F5F5FA',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 1,
  backgroundColor:'#FFFFFF',
},
iconWrapper:{
  backgroundColor:'#F5F5FA',
  width: 46,
  height:46,
  borderRadius:8,
  flexDirection: 'row',
  paddingTop: 13,
  paddingBottom:13,
  paddingLeft:13,
  paddingRight:13,
  justifyContent:'center',
  alignItems:'center'
},
cardIconCircle:{
  width: 20,
  height:20,
  borderRadius:10,
  borderColor:'#7954FA',
  flexDirection: 'row',
  paddingTop: 8,
  paddingBottom:8,
  paddingLeft:10,
  paddingRight:10,
  justifyContent:'center',
  alignItems: 'center',
},
cardIconMtextWrapper:{
  flex:1,
  marginLeft:16,
  marginRight:16
},
cardChevronIcon:{
  width:29,
  justifyContent:'center'
},
cardSubTextWrapper:{
  flexDirection:'row',
  borderRadius:8,
  borderWidth:1,
  paddingTop:16,
  paddingLeft:16,
  paddingBottom:16,
  paddingRight:16,
  alignItems:'center',
  shadowColor: '#F5F5FA',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 1,
  backgroundColor:'#FFFFFF',
},
cardTextWrapper:{
  flex:1,
  marginLeft:16,
  marginRight:16
},
cardMtextWrapper:{
  flex:1,
  marginBottom:4
},
cardPtextWrapper:{
  flex:1
},
cardlabel_textWrapper:{
  flexDirection:'row',
  marginRight:8
},

customCradFitScreenWrapper:{
  flexDirection:'row',
  borderRadius:8,
  borderColor:'#FFFFFF',
  borderWidth:1,
  paddingTop:16,
  paddingLeft:16,
  paddingBottom:16,
  paddingRight:16,
  alignItems:'center',
  shadowColor: '#F5F5FA',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 1,
  backgroundColor:'#FFFFFF',
},
cardWithSliderWrapper:{

},
checkBoxSeperatorWrapper:{
  flexDirection:'row',
  //padding:16,
  alignItems:'center',
  justifyContent:'center'
},
checkboxLeftText:{
  flex:1
},
checkBoxSeperator:{
  width:1,
  height:52,
  marginRight:16,
  backgroundColor:'#F1F4F6'
},
checkBoxCircleWrapper:{
  flex:1
},
checkboxRightText:{

},
tagWrapper:{
  maxWidth:200,
  padding:2
},

inputLabel:{
  width:120,
  marginRight:26
},

inputContent:{
  flexDirection:'row',
  flex:1
},

inputContentText:{
  maxWidth:125,
  justifyContent:'center',
  marginLeft:4
},

inputContentIcon:{
  width:11
},

cPr:{
  flexDirection:'row',
  alignItems:'center'
},

centerContent:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#fff'
},

content: {
  flex:1,
  backgroundColor:'#fff'
},

screen: {
  flex:1,
  backgroundColor: '#F5F5FA'
},

customScrollView: {
  paddingTop: 24,
  paddingLeft:15,
  paddingRight:15,
  paddingBottom:90
},

keyboardAvoidingView: {
  flex: 1
},

safeAreaView: {
  flex:1
}

});
