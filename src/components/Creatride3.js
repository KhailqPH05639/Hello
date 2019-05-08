import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, Dimensions, TouchableOpacity, AppRegistry, Picker, Item } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from "react-native-modal-datetime-picker";


export default class Creatride3 extends React.Component {

    static navigationOptions = {
        header: null,

    }

    constructor(props) {
        super(props);
        this.state = {
            language: ''

        };
    }


    render() {
        var { height, width } = Dimensions.get('window');
        return (

            <View style={styles.container}>
                {/* <View style={styles.txttitle}>
                    <Text style={{ justifyContent: 'flex-start', fontSize: 20, color: "black", fontWeight: 'bold', marginTop: 10, marginLeft: -190 }}>Route </Text>
                    <Text style={{ justifyContent: 'flex-start', marginLeft: -190 }}> And find a driver near you </Text>

                </View> */}

                <View style={{ width: 400, height: 80, backgroundColor: '#fccf1d', borderRadius: 5, flexDirection: 'column', padding: 20, alignItems: 'center', marginTop: 20 }}>

                    <Text style={{ color: 'black', fontWeight: 'bold', alignContent: 'center', fontSize: 15 }}>Step: 3</Text>
                    <Text style={{ fontWeight: 'normal', alignContent: 'center' }}>Price</Text>
                </View>
                
                   
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 400, backgroundColor: '#fff', marginTop: 60, borderRadius: 2, height: 280 }}> 
                
                <View style={{flexDirection:'row',marginLeft:-60,marginTop:-10}}> 
                   <Text style={{color:'black'}}>Price</Text>
                   <Icon name='dollar-sign' size={23} color='#000' style={{
                                    width: 38,
                                    height: 38,backgroundColor:'#cdcbd1', padding: 5,marginLeft:180,marginTop:-10,marginRight:0.5
                                }}></Icon>
                                <TextInput style={{width:60,height:38,borderColor:'#000',borderRadius:2,backgroundColor:'#cdcbd1',marginTop:-10}} keyboardType="number"></TextInput>
                </View>

                <View style={{flexDirection:'row',marginLeft:-60,marginTop:-100}}> 
                   <Text style={{color:'black'}}>Service free</Text>
                   <Icon name='dollar-sign' size={23} color='#000' style={{
                                    width: 20,
                                    height: 30, padding: 5,marginLeft:180,marginTop:-10,marginRight:0.5
                                }}></Icon>
                                <Text style={{width:60,height:38,marginTop:-10}}></Text>
                </View>
                
                
                 </View>

                <View style={styles.button}  >
                    <Text style={styles.txt} onPress={() => { console.log('--pppp') }} >Submit</Text>
                </View>



            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    txttitle: {
        justifyContent: 'flex-start'


    },
    toup: {
        flexDirection: 'row'
        , marginTop: 20,
        justifyContent: 'center',
    },
    viewtxtinput: {
        marginBottom: 140,
        marginTop: 50,
    },
    cssinput: {

        width: 340,
        marginTop: 20,
        // backgroundColor: "#30616161",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#000",

        borderWidth: 1,

        borderRadius: 2,

    },
    imgtxt: {
        width: 38,
        height: 40,
        backgroundColor: "#fff",

    },
    txtinput: {
        // borderRadius: 5,
        width: 290,
        height: 40,
        // backgroundColor: '#FFF',
        color: 'black',
    },
    button: {
        backgroundColor: "#fccf1d",
        width: 100,
        height: 50,
        marginTop:130,
        flexDirection: "row",
        borderColor: "#f7c603",
        borderWidth: 0.5,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        

    },
    txt: {
        color: "white",
        fontSize: 17,
        fontWeight: 'bold'

    }
});
