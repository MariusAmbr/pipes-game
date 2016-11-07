import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import NavigationBar from 'react-native-navbar';
import * as firebase from 'firebase';

export default class CustomScreen extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        var ref = this.props.firebase.database().ref('players');
        ref.once("value").then(function(snapshot){
            let smth = snapshot.val();
            console.log(smth);
            this.props.loadScores(smth);
        }.bind(this));
    }
    render() {
        const leftButtonConfig = {
            title: 'Cancel',
            handler: () => this.props.navigator.pop(),
        };
        console.log(this.props.scores);
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', }}>
                <NavigationBar
                    title={{ title: 'Scores', }}
                    leftButton={leftButtonConfig}/>
                <ScrollView>

                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    slider: {

    },
    sliderContainer: {
        width: 300,
        marginBottom: 15
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    },
    text: {
        fontSize: 20,
    },
    buttons: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        borderRadius: 25,
        height: 50,
        width: 100,
        margin: 10
    },
    page: {
        flexDirection: 'column'
    },
    gridBox:{
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: 'black',
        backgroundColor: '#fff'
    }

});
