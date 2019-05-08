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
            date: moment(date.toString()).format('MMMM Do YYYY --- h:mm')

        })
        console.log("A date has been picked: ", date);
        this.hideDateTimePicker();
    };

    componentDidMount() {
        console.log('-----------');

    }
    render() {
        var { height, width } = Dimensions.get('window');
        return (
            <View style={styles.container}>

                <View style={styles.txt}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', width: width, height: 50 }}>
                        <Icon name='times' size={30} color='orange' style={{ width: 39, height: 40, margin: 10 }}></Icon>
                        <Text style={{ color: 'orange', fontSize: 18, padding: 18, marginLeft: 70 }}>Offer ride</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: width, height: 50, backgroundColor: '#fff', marginTop: 60 }}>
                        <Icon name='dot-circle' size={25} color='orange' style={{ width: 39, height: 40, padding: 12 }}></Icon>
                        <TextInput style={{ marginLeft: 10 }}
                            placeholder="  Pick - up location"
                        />
                    </View>

                    <View style={{ flexDirection: 'row', width: width, height: 50, backgroundColor: '#fff', marginTop: 0.5 }}>
                        <Icon name='map-marker-alt' size={25} color='orange' style={{ width: 39, height: 40, padding: 12 }}></Icon>
                        <TextInput
                            placeholder="  Drop - off location"
                        />
                    </View>

                </View>

                <View style={styles.roue}>
                    <Text style={{ color: 'orange', fontSize: 18, margin: 10, marginTop: 80 }}>Router options</Text>

                    <View style={{ flexDirection: 'column', height: 60, backgroundColor: '#fff' }}>
                        <Text style={{ color: 'gray', margin: 10, margin: 10 }}>Detour pissibility</Text>
                        <Text style={{ color: 'black', fontSize: 18, margin: 10, marginTop: -5 }}>Max. 5 min.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', height: 60, backgroundColor: '#fff', marginTop: 0.5 }}>
                        <Text style={{ color: 'black', fontSize: 18, margin: 10, marginTop: 20 }}>Allow partial route bookings</Text>
                    </View>
                </View>

                <View style={styles.depa}>
                    <Text style={{ color: 'orange', fontSize: 18, margin: 10, marginTop: 20 }}>Departure</Text>
                    <TouchableOpacity style={{ flexDirection: 'column', width: width, backgroundColor: '#fff', height: 70 }}>
                        <Text style={{ color: 'gray', marginLeft: 50, margin: 10 }}>Select date and time</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', }} onPress={this.showDateTimePicker} >

                            <Icon name='calendar-alt' size={25} color='orange' style={{
                                width: 38,
                                height: 33, margin: 10, marginTop: -15
                            }}></Icon>
                            <Text style={{ color: '#000', fontSize: 15,marginLeft:-10  }}>{this.state.date}</Text>

                            <DateTimePicker mode='datetime'
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this.handleDatePicked}
                                onCancel={this.hideDateTimePicker}
                            />

                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>

                <View style={styles.btn}>
                    <TouchableOpacity style={{ width: width, height: 50, backgroundColor: '#fccf1d', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{fontWeight: 'bold',fontSize:20}}>Next</Text>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: "#f2f2f2",

        flexDirection: 'column'
    },
    txt: {
        flex: 20,

    },

    roue: {
        flex: 30
        ,

    },
    depa: {
        flex: 20,

    },
    btn: {
        flex: 20,
marginTop:20,
        color: 'white', fontSize: 20


    }
});
