import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import NavigationBar from 'react-native-navbar';
import * as firebase from 'firebase';

export default class CustomScreen extends Component {
    constructor(props){
        super(props);
        this.genList = this.genList.bind(this);
    }
    componentWillMount(){
        var ref = this.props.firebase.database().ref('players');
        ref.once("value").then(function(snapshot){
            let smth = snapshot.val();
            console.log(smth);
            this.props.loadScores(smth);
        }.bind(this));
    }
    genList(){
        let List = [];
        for(let i in this.props.scores){
            List.push(this.genRow(this.props.scores[i]));
        }
        let firstRow = this.genRow({name:'name', 5:5, 6:6, 7:7, 8:8, 9:9, 10:10});
        return (
            <View style={styles.container}>
                {firstRow}
                {List}
            </View>
        )
    }
    genRow(obj){
        return (
            <View key={obj['name']} style={styles.listRow}>
                <Text style={styles.name}>{(obj['name']||"null")}</Text>
                <Text style={styles.number}>{(obj[5]||"-")}</Text>
                <Text style={styles.number}>{(obj[6]||"-")}</Text>
                <Text style={styles.number}>{(obj[7]||"-")}</Text>
                <Text style={styles.number}>{(obj[8]||"-")}</Text>
                <Text style={styles.number}>{(obj[9]||"-")}</Text>
                <Text style={styles.number}>{(obj[10]||"-")}</Text>
            </View>
        )
    }

    render() {
        const leftButtonConfig = {
            title: 'Cancel',
            handler: () => this.props.navigator.pop(),
        };
        let list = this.genList();
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', }}>
                <NavigationBar
                    title={{ title: 'Scores', }}
                    leftButton={leftButtonConfig}/>
                <ScrollView >
                    {list}
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
        alignItems:'center',
    },
    listRow: {
        flexDirection: 'row'
    },
    text: {
        fontSize: 20,
    },
    name: {
        width: 80,
    },
    number:{
        width: 40
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
