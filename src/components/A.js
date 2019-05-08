import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  Image, Text, View, TextInput,
  Dimensions
} from 'react-native';

export default class A extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
      <ScrollView
        maximumZoomScale={3}
        minimumZoomScale={0.2}
        keyboardDismissMode='on-drag'
      >
        
        <Text
          style={{
            fontSize: 20,
            padding: 15,
            color: 'red',
            textAlign: 'center',
            backgroundColor: 'green'
          }}
        >
        </Text>
        <TextInput
          style={{ padding: 10, margin: 10, borderWidth: 1 }}
          placeholder='Enter text'>
        </TextInput>
        <TextInput
          style={{ padding: 10, margin: 10, borderWidth: 1 }}
          placeholder='Enter text'>
        </TextInput>
        <View style={{ backgroundColor: 'yellow', height: 50 }}>
          <Text
            style={{
              fontSize: 20,
              padding: 15,
              color: 'red',
              textAlign: 'center',
            }}
          >
            Text inside a View
            </Text>
        </View>
     
        <Text
          style={{
            fontSize: 20,
            padding: 15,
            color: 'red',
            textAlign: 'center',
            backgroundColor: 'green'
          }}
        >
        </Text>
        <TextInput
          style={{ padding: 10, margin: 10, borderWidth: 1 }}
          placeholder='Enter text'>
        </TextInput>
        <TextInput
          style={{ padding: 10, margin: 10, borderWidth: 1 }}
          placeholder='Enter text'>
        </TextInput>
        <View style={{ backgroundColor: 'yellow', height: 50 }}>
          <Text
            style={{
              fontSize: 20,
              padding: 15,
              color: 'red',
              textAlign: 'center',
            }}
          >
            Text inside a View
            </Text>
        </View>
       
        <Text
          style={{
            fontSize: 20,
            padding: 15,
            color: 'red',
            textAlign: 'center',
            backgroundColor: 'green'
          }}
        >
        </Text>
        <TextInput
          style={{ padding: 10, margin: 10, borderWidth: 1 }}
          placeholder='Enter text'>
        </TextInput>
        <TextInput
          style={{ padding: 10, margin: 10, borderWidth: 1 }}
          placeholder='Enter text'>
        </TextInput>
        <View style={{ backgroundColor: 'yellow', height: 50 }}>
          <Text
            style={{
              fontSize: 20,
              padding: 15,
              color: 'red',
              textAlign: 'center',
            }}
          >
            Text inside a View
            </Text>
        </View>
        
        <Text
          style={{
            fontSize: 20,
            padding: 15,
            color: 'red',
            textAlign: 'center',
            backgroundColor: 'green'
          }}
        >
        </Text>
        <TextInput
          style={{ padding: 10, margin: 10, borderWidth: 1 }}
          placeholder='Enter text'>
        </TextInput>
        <TextInput
          style={{ padding: 10, margin: 10, borderWidth: 1 }}
          placeholder='Password' >
        </TextInput>
        <View style={{ backgroundColor: 'yellow', height: 50 }}>
          <Text
            style={{
              fontSize: 20,
              padding: 15,
              color: 'red',
              textAlign: 'center',
            }}
          >
            Text inside a View
            </Text>
        </View>
      
        <Text
          style={{
            fontSize: 20,
            padding: 15,
            color: 'red',
            textAlign: 'center',
            backgroundColor: 'green'
          }}
        >
        </Text>
        <TextInput
          style={{ padding: 10, margin: 10, borderWidth: 1 }}
          placeholder='Enter text'>
        </TextInput>
        <TextInput
          style={{ padding: 10, margin: 10, borderWidth: 1 }}
          placeholder='Enter text'>
        </TextInput>
        <View style={{ backgroundColor: 'yellow', height: 50 }}>
          <Text
            style={{
              fontSize: 20,
              padding: 15,
              color: 'red',
              textAlign: 'center',
            }}
          >
            Text inside a View
            </Text>
        </View>
      
        <Text
          style={{
            fontSize: 20,
            padding: 15,
            color: 'red',
            textAlign: 'center',
            backgroundColor: 'green'
          }}
        >
        </Text>
        <TextInput
          style={{ padding: 10, margin: 10, borderWidth: 1 }}
          placeholder='Enter text'>
        </TextInput>
        <TextInput
          style={{ padding: 10, margin: 10, borderWidth: 1 }}
          placeholder='Enter text'>
        </TextInput>
        <View style={{ backgroundColor: 'yellow', height: 50 }}>
          <Text
            style={{
              fontSize: 20,
              padding: 15,
              color: 'red',
              textAlign: 'center',
            }}
          >
            Text inside a View
            </Text>
        </View>
      
     
        <Text
          style={{
            fontSize: 20,
            padding: 15,
            color: 'red',
            textAlign: 'center',
            backgroundColor: 'green'
          }}
        >
        </Text>
        <TextInput
          style={{ padding: 10, margin: 10, borderWidth: 1 }}
          placeholder='Enter text'>
        </TextInput>
        <TextInput
          style={{ padding: 10, margin: 10, borderWidth: 1 }}
          placeholder='Enter text'>
        </TextInput>
        <View style={{ backgroundColor: 'yellow', height: 50 }}>
          <Text
            style={{
              fontSize: 20,
              padding: 15,
              color: 'red',
              textAlign: 'center',
            }}
          >
            Text inside a View
            </Text>
        </View>
  
      </ScrollView>);
  }
}