import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, Dimensions, TouchableOpacity, AppRegistry, Picker, Item } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from "react-native-modal-datetime-picker";


export default class Creatride2 extends React.Component {

    static navigationOptions = {
        header: null,

    }

    constructor(props) {
        super(props);
        this.state = {
            selected: "mit",

        };
    }


    render() {
        var { height, width } = Dimensions.get('window');
        return (

            <View style={styles.container}>
                <Picker selectedValue={this.state.selected}
                onValueChange={(value)=>this.setState({selected:value})}>
                
                <Item value={"cammm"} label={"sss"}/>
                <Item value={"cddammm"} label={"sss1"}/>
                <Item value={"cambbmm"} label={"ss2s"}/>
                <Item value={"cammm"} label={"sss3"}/>
                <Item value={"cammm"} label={"sss4"}/>
                <Item value={"cddammm"} label={"ss5s"}/>
                <Item value={"cambbmm"} label={"sss6"}/>
                <Item value={"cammm"} label={"sss67"}/>
                </Picker>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop:50,
        color:'black'
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
        width: 80,
        height: 40,
        marginTop: -25,
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
