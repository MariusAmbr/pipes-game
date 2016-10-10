import React, {Component} from 'react';
import {StyleSheet,Image,Text,View,Linking,TouchableHighlight,AlertIOS,Dimensions} from 'react-native';
import Game from '../containers/Game.js';
import CustomScreen from '../components/Screen.js';
import Options from '../containers/Options.js';

class Main extends Component {
    constructor(props){
        super(props);
        this.handleGameClick = this.handleGameClick.bind(this);
        this.handleOptionsClick = this.handleOptionsClick.bind(this);
    }
    handleGameClick(){
        this.props.navigator.push({component: Game});
    }
    handleOptionsClick(){
        this.props.navigator.push({component: Options});
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Pipes</Text>
                <TouchableHighlight style={styles.button} onPress={this.handleGameClick}><Text style={styles.text}>Play</Text></TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={this.handleOptionsClick}><Text style={styles.text}>Options</Text></TouchableHighlight>
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
