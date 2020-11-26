// Info: Contains utility functions
'use strict';

import { StyleSheet } from 'react-native';


///////////////////////////Private Functions START//////////////////////////////

let Utils = {

    /********************************************************************
    Copy of Util Functions from Node JS util lib
    Link: https://github.com/isaacs/core-util-is/blob/master/lib/util.js
    *********************************************************************/
    isNull: function(arg){
        return arg === null;
    },

    isNullOrUndefined: function(arg){
        return arg == null;
    },

    isUndefined: function(arg){
        return arg === void 0;
    },

    isBoolean: function(arg){
        return typeof arg === 'boolean';
    },

    isNumber: function(arg){
        return typeof arg === 'number';
    },

    isString: function(arg){
        return typeof arg === 'string';
    },

    /********************************************************************
    Basic Util Functions
    *********************************************************************/
    isEmptyObject: function(obj) {
        return Object.keys(obj).length === 0;
    },


    /********************************************************************
    Null function - For optional callback functions

    None

    @return None
    *********************************************************************/
    nullFunc: function(){},


    /********************************************************************
    Check if All chracters in string are of valid charset and string has
    minimum and maximum length

    @param {String} str - The variable to be checked
    @param {Number} [min_length] - (Optional) Minimum required length this string must have
    @param {Number} [max_length] - (Optional) Maximum length this string can have

    @return {Boolean} - true on success
    @return {Boolean} - false if validation fails

    Note: Always check this function output against identic (===) FALSE to
    avoid mismatches with text 'false' or '0' or empty strings
    *********************************************************************/
    validateString: function(str, min_length, max_length) {

        // Null/Empty-String Allowed (Only if minimum length is specified)
        if( !Utils.isNullOrUndefined(min_length) && // sent in param
            min_length === 0     &&
            ( str === null || str === ``)
        ){
            return true;
        }
        // Check if string type
        if( typeof str !== 'string' ){
            return false;
        }


        // Check Min and Max length limit
        var len = str.length; //Store var length

            // Check Min Length (Only if specified)
            if( !Utils.isNullOrUndefined(min_length) && len < min_length ){
                return false; // Less then minimum required length
            }


            // Check Max Length (Only if specified)
            if( !Utils.isNullOrUndefined(max_length) && len > max_length ){
                return false; // More then maximum allowed length
            }


        // Reach here means all validations passed
        return true; // Validation successful

    },
    /********************************************************************
        Round a Decimal number to specified number of digits after decimal

        @param {Number} num - Number to be rounded off
        @param {Number} digits_after_decimal - Number of digits after decimal

        @return {Number} - Rounded off number
        *********************************************************************/
    round: function(num, digits_after_decimal){

        // If null or undefined, return value as-it-is
        if(Utils.isNullOrUndefined(num)) return num;


        // Calculate multiplier
        var multiplier = 1;
        var i;
        for(i = 0; i < digits_after_decimal; i++){
            multiplier = multiplier*10;
        }

        // Return
        return Math.round(num * multiplier) / multiplier;

    },


}

module.exports = Utils;





////////////////////////////Private Functions END///////////////////////////////
