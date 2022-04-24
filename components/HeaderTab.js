import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'react-native'

export default function HeaderTab() {
    return (
      <View style={{flexDirection: "row", alignSelf: "center"}}>
        <HeaderButton text="Placement"/>
        <HeaderButton text="Contests"/>
        {/* <text>Header Tabs</text>
        <text>Header Tabs</text> */}
      </View> 
    );
}

const HeaderButton = (props) =>
{
  return(
    <TouchableOpacity 
      style={{backgroundColor: "black",
      paddingVertical: 6,
      paddingHorizontal:16,
    }}>

      <Text style={{
        color:"white"
      }}>{props.text}</Text>
    </TouchableOpacity>
  );    
};