import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, Dimensions, TouchableOpacity, AppRegistry, Picker, Item } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment'

export default class Creatride1 extends React.Component {

    static navigationOptions = {
        header: null,

    }

    constructor(props) {
        super(props);
        this.state = {
            //   email: "",
            //   password: "",
            isDateTimePickerVisible: false,
            date: moment(new Date().toString()).format('MMMM Do YYYY --- h:mm '),
            language: ''



        };
    }
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        this.setState({
            date:  moment(date.toString()).format('MMMM Do YYYY --- h:mm')
            
        })
        console.log("A date has been picked: ", date);
        this.hideDateTimePicker();
    };

    componentDidMount() {
        console.log('-----------');

    }


    //   _onLogin(){
    //         const {email,password} = this.state;

    //         if(email.trim() == "" || password.trim() == ""){
    //               Alert.alert("Email and Password cannot be blank");
    //               return
    //         }

    //         if(email.trim() == "Admin" || password.trim() == "Admin"){

    //               this.props.navigation.navigate("Flaslist");

    //         }
    //   }


    render() {
        var { height, width } = Dimensions.get('window');
        return (
            <View style={styles.container}>

                <View style={styles.txttitle}>
                    <Text style={{ justifyContent: 'flex-start', fontSize: 20, color: "black", fontWeight: 'bold', marginTop: 95, marginLeft: -190 }}>Route </Text>
                    <Text style={{ justifyContent: 'flex-start', marginLeft: -190 }}> And find a driver near you </Text>

                </View>

                <View style={{ width: 400, height: 80, backgroundColor: '#fccf1d', borderRadius: 5, flexDirection: 'column', padding: 20, alignItems: 'center',marginTop:8  }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', alignContent: 'center',fontSize:15}}>Step: 1</Text>
                    <Text style={{ fontWeight: 'normal', alignContent: 'center' }}>Routes</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 400, backgroundColor: 'white', marginTop: 20, borderRadius: 2,}}>
                    <View style={styles.viewtxtinput}>
                        <Text style={{ color: '#000', marginTop: -15, marginLeft: 15 }}>Pick - Up</Text>
                        <View style={styles.cssinput}>

                            <Icon name='dot-circle' size={25} color='orange' style={{ width: 39, height: 40, padding: 5 }}></Icon>
                            <TextInput style={styles.txtinput}

                                placeholder="  Enter private address, airport, hotel,.."
                            />

                        </View>
                        <Text style={{ marginTop: 10 }}>Favourites: <Text style={{ color: '#fccf1d' }}>Cầu Giấy</Text></Text>
                        <Text style={{ color: '#000', marginTop: 15, marginLeft: 15 }}>Destination</Text>
                        <View style={styles.cssinput}>

                            <Icon name='map-marker-alt' size={25} color='orange' style={{
                                width: 39,
                                height: 40, padding: 5
                            }}></Icon>
                            <TextInput style={styles.txtinput}
                                placeholder="  End the destination"

                            />

                        </View>
                        <Text style={{ marginTop: 10 }}>Favourites: <Text style={{ color: '#fccf1d' }}>Lê Duẩn</Text></Text>
                        <Text style={{ color: '#000', marginTop: 15, marginLeft: 15 }}>Depart date</Text>
                        <View style={styles.toup}>
                            <TouchableOpacity style={{ flexDirection: 'row', marginRight: -3, marginLeft: -5,  borderWidth: 1, width: 340, height: 40 }} onPress={this.showDateTimePicker} >
                                <Icon name='calendar-alt' size={22} color='orange' style={{
                                    width: 38,
                                    height: 33, padding: 5
                                }}></Icon>
                                <Text style={{ color: '#000', fontSize: 15, padding: 5 }}>{this.state.date}</Text>

                                <DateTimePicker mode='datetime'
                                    isVisible={this.state.isDateTimePickerVisible}
                                    onConfirm={this.handleDatePicked}
                                    onCancel={this.hideDateTimePicker}
                                />

                            </TouchableOpacity>



                            {/* <TouchableOpacity style={{ flexDirection: 'row', borderColor: '#000',borderRadius:2,borderWidth: 1 }} >

                                <Icon name='clock' size={23} color='orange' style={{
                                    width: 58,
                                    height: 38, backgroundColor: '#fff', padding: 5
                                }}></Icon>

                                <Picker

                                    mode={'dropdown'}
                                    itemStyle={{ backgroundColor: 'white' }}
                                    selectedValue={this.state.language}
                                    style={{ height: 38, width: 110, marginLeft: -5 }}
                                    onValueChange={(itemValue, itemIndex) => {
                                        console.log(itemValue)
                                        console.log("-----------abd-----------")
                                        this.setState({ language: itemValue })
                                    }
                                    }>

                                    <Item label="01:00" value="23" />
                                    <Item label="02:00" value="22" />
                                    <Item label="03:00" value="21" />
                                    <Item label="04:00" value="20" />
                                    <Item label="05:00" value="19" />
                                    <Item label="06:00" value="18" />
                                    <Item label="07:00" value="17" />
                                    <Item label="08:00" value="16" />
                                    <Item label="09:00" value="15" />
                                    <Item label="10:00" value="14:" />
                                    <Item label="11:00" value="13" />
                                    <Item label="12:00" value="12" />
                                    <Item label="13:00" value="11" />
                                    <Item label="14:00" value="10" />
                                    <Item label="15:00" value="9" />
                                    <Item label="16:00" value="8" />
                                    <Item label="17:00" value="7" />
                                    <Item label="18:00" value="6:" />
                                    <Item label="19:00" value="5" />
                                    <Item label="20:00" value="4" />
                                    <Item label="21:00" value="3" />
                                    <Item label="22:00" value="2:" />
                                    <Item label="23:00" value="1" />
                                    <Item label="00:00" value="0" />
                                </Picker>
                            </TouchableOpacity> */}

                        </View>


                        <View style={styles.button}
                        >
                            <Text style={styles.txt}
                                onPress={() => { console.log('--pppp') }}
                            >Next</Text>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    //   txttitleicon: {
    //       color:'#fff',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //   },
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

        borderWidth:1,

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
        marginTop: 40,
        flexDirection: "row",
        borderColor: "#f7c603",
        borderWidth: 0.5,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: 120

    },
    txt: {
        color: "white",
        fontSize: 17,
        fontWeight: 'bold'

    }
});
