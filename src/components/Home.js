import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, Dimensions, TouchableOpacity, AppRegistry, Picker, Item,Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment'

export default class Home extends React.Component {

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
                {/* <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}>
                    <Image style={{
                        flex: 1,
                        flexDirection: 'column',
                        width: null,
                        height: null,
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                    }}
                        source={require('../images/anhnen.jpg')}
                    >
                    </Image>
                </View> */}
                <View style={{ marginBottom: Platform.OS === 'ios' ? 125 : 20, height: 100, backgroundColor: '#f9f4f0', paddingLeft: 1, width: width, }}>

                    <Text style={{ marginTop: Platform.OS === 'ios' ? 10 : 15, fontSize: 50, color: "black", fontWeight: 'bold', padding: 10 }}>Car<Text style={{ color: '#ffe060' }}>P</Text>ool </Text>

                </View>
                <View style={styles.txttitle}>
                    <Text style={{ fontSize: 20, color: "#bf9906", fontWeight: 'bold', marginTop: 50 }}>Ridesharing is fun, cheap </Text>
                    <Text style={styles.txttitle}> and flexible transportation
                              </Text>
                    <Text style={styles.txttitle}> </Text>
                    {/* <Image style={{ width: 100, height: 100, marginTop: 30, }} source={require('../assets/people.png')}></Image> */}
                </View>

                <View style={styles.viewtxtinput}>
                    <View style={styles.cssinput}>
                        {/* <Image style={styles.imgtxt} source={require('../images/location1.png')} /> */}
                        <Icon name='dot-circle' size={25} color='orange' style={{ width: 38, height: 40, backgroundColor: '#fff', padding: 5, borderColor: "gray", borderWidth: 0.4 }}></Icon>
                        <TextInput style={styles.txtinput}
                            //    onChangeText={(email) => this.setState({ email })}
                            placeholder="  Where are you leaving from?"
                        />

                    </View>


                    <View style={styles.cssinput}>
                        {/* <Image style={styles.imgtxt} source={require('../images/location.png')} /> */}
                        <Icon name='map-marker-alt' size={25} color='orange' style={{
                            width: 38,
                            height: 40, backgroundColor: '#fff', padding: 5, borderColor: "gray", borderWidth: 0.4
                        }}></Icon>
                        <TextInput style={styles.txtinput}
                            placeholder="  Where are you going?"
                        //   multiline={true}
                        // onChangeText={(password) => this.setState({ password })}
                        //   secureTextEntry
                        />

                    </View>
                    <View style={styles.cssinput}>
                        <TouchableOpacity style={{ flexDirection: 'row', borderColor: "gray", borderWidth: 0.4, width: Platform.OS === 'ios' ? 380 : 360, marginLeft:Platform.OS === 'ios' ? 0 : 30,height: 40, backgroundColor: '#fff'}} onPress={this.showDateTimePicker} >
                            <Icon name='calendar-alt' size={22} color='orange' style={{
                                width: 38,
                                height: 33, backgroundColor: '#fff', padding: 5,
                            }}></Icon>
                            <Text style={{ color: '#000', fontSize: 15, padding: 5,marginLeft:Platform.OS === 'ios' ? 6 : 18, marginTop:5 }}>{this.state.date}</Text>

                            <DateTimePicker mode='datetime'
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this.handleDatePicked}
                                onCancel={this.hideDateTimePicker}
                            />

                        </TouchableOpacity>



                        {/* <TouchableOpacity style={{ flexDirection: 'row' }} >

                            <Icon name='clock' size={23} color='orange' style={{
                                width: 38,
                                height: 38, backgroundColor: '#fff', padding: 5
                            }}></Icon>

                            <Picker

                                mode={'dropdown'}
                                itemStyle={{ backgroundColor: 'white' }}
                                selectedValue={this.state.language}
                                style={{ height: 38, width: 103, backgroundColor: 'white', marginLeft: -5 }}
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
                        >Search rides</Text>
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "gray",
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

        alignItems: 'center',
        color: "#bf9906",
        fontWeight: 'bold',
        fontSize: 20,


    },
    toup: {
        
        flexDirection: 'row'
        , marginTop: 20, 
        marginLeft:20
        
    },
    viewtxtinput: {
        
        marginBottom: 140,
        marginTop: 30,
        
    },
    cssinput: {
        
        height: 40,
        width: Platform.OS === 'ios' ? 340 : 340,
        marginTop: 20,
        backgroundColor: "#30616161",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "gray",
        borderWidth: 0.4,
        borderRadius: 5,

    },
    imgtxt: {
        width: 38,
        height: 40,
        backgroundColor: "#fff",
        

    },
    txtinput: {
        width: Platform.OS === 'ios' ? 340 : 340,
        height: 40,
        backgroundColor: '#FFF',
        color: 'black',
        borderColor: "gray",
        borderWidth: 0.4,
    },
    button: {
        backgroundColor: "#fccf1d",
        width: Platform.OS === 'ios' ? 340 : 250,
        height: 40,
        marginTop: 20,
       

        borderColor: "#f7c603",
        borderWidth: 0.5,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        alignContent: 'center',

    },
    txt: {
        color: "black",
        fontSize: 17,
        fontWeight: 'bold'

    }
});
