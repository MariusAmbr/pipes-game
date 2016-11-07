import React, {Component} from 'react';
import {AsyncStorage,StyleSheet,Image,Text,View,Linking,TouchableHighlight,AlertIOS,Dimensions} from 'react-native';
import Game from '../containers/Game.js';
import CustomScreen from '../components/Screen.js';
import Options from '../containers/Options.js';
import Scores from '../containers/Scores.js';
import * as firebase from 'firebase';

class Main extends Component {
    constructor(props){
        super(props);
        this.handleGameClick = this.handleGameClick.bind(this);
        this.handleOptionsClick = this.handleOptionsClick.bind(this);
        this.loadOptions = this.loadOptions.bind(this);
        this.handleScoresClick = this.handleScoresClick.bind(this);
    }
    async loadOptions(){
        //default
        let newData = {
            size: 5,
            startPipe: 1,
            endPipe: 1,
            name: ''
        };
        try {
            const value = await AsyncStorage.getItem('options');
            if (value !== null){
                newData = JSON.parse(value);
            }
        } catch(error){
            console.log(error);
        }
        this.props.load(newData);
    }
    componentWillMount(){
        if(Object.keys(this.props.firebase).length == 0){
            var config = {
              apiKey: "AIzaSyDSHj_tVn3ZuxgflEAfEjhlZ3LAe-VjFBk",
              authDomain: "pipesgame-7ab9a.firebaseapp.com",
              databaseURL: "https://pipesgame-7ab9a.firebaseio.com",
              storageBucket: "pipesgame-7ab9a.appspot.com",
              messagingSenderId: "114520296119"
            };
            let firebaseApp = firebase.initializeApp(config);
            this.props.loadFirebase(firebaseApp);
        }
        this.loadOptions();
    }
    handleGameClick(){
        this.props.navigator.push({component: Game});
    }
    handleOptionsClick(){
        this.props.navigator.push({component: Options});
    }
    handleScoresClick(){
        this.props.navigator.push({component: Scores});
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Pipes</Text>
                <TouchableHighlight style={styles.button} onPress={this.handleGameClick}><Text style={styles.text}>Play</Text></TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={this.handleOptionsClick}><Text style={styles.text}>Options</Text></TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={this.handleScoresClick}><Text style={styles.text}>Scores</Text></TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
    title: {
        fontSize: 50,
        textAlign: 'center',
        marginBottom: 20,

    },
    button: {
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        borderRadius: 25,
        height: 50,
        width: 150,
        marginBottom: 20
    }
});

export default Main;
