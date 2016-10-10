import React, {Component} from 'react';
import {AsyncStorage, View, Slider, Text, StyleSheet, TextInput} from 'react-native';
import NavigationBar from 'react-native-navbar';

class Options extends Component {
    constructor(props){
        super(props);
        this.tempSize = this.props.size;
        this.tempSNum = this.props.startPipe;
        this.tempENum = this.props.endPipe;
        this.tempNam = this.props.name;
        this.storeOptions = this.storeOptions.bind(this);
    }
    async storeOptions () {
        let obj = {
            size: this.props.size,
            startPipe: this.props.startPipe,
            endPipe: this.props.endPipe,
            name: this.props.name
        };
        try {
            await AsyncStorage.setItem('options',JSON.stringify(obj));
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        const leftButtonConfig = {
            title: 'Save/Back',
            handler: () => {
                this.storeOptions();
                this.props.navigator.pop();
            },
        };
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', }}>
                <NavigationBar
                    title={{ title: 'Options screen', }}
                    leftButton={leftButtonConfig}/>
                    <View style={[styles.container]}>
                        <View style={styles.sliderContainer}>
                            <Text style={styles.text}>The size of the grid to generate (from 5 to 10): {this.props.size}</Text>
                            <Slider
                                value={this.tempSize}
                                minimumValue={5}
                                maximumValue={10}
                                step={1}
                                onValueChange={(value)=>{this.props.change1(value)}}
                            />

                        </View>
                        <View style={styles.sliderContainer}>
                            <Text style={styles.text}>The amount of starting pipes (from 1 to 3): {this.props.startPipe}</Text>
                            <Slider
                                value={this.tempSNum}
                                minimumValue={1}
                                maximumValue={3}
                                step={1}
                                onValueChange={(value)=>{this.props.change2(value)}}
                            />
                        </View>
                        <View style={styles.sliderContainer}>
                            <Text style={styles.text}>The amount of ending pipes (from 1 to 3): {this.props.endPipe}</Text>
                            <Slider
                                value={this.tempENum}
                                minimumValue={1}
                                maximumValue={3}
                                step={1}
                                onValueChange={(value)=>{this.props.change3(value)}}
                            />
                        </View>
                        <View style={styles.sliderContainer}>
                            <Text style={styles.text}>Enter your name:</Text>
                            <TextInput
                                style={styles.text}
                                onChangeText={(text)=> this.props.change4(text)}
                                value={this.props.name}
                            />
                        </View>
                    </View>
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

var customStyles = StyleSheet.create({
  track: {
    height: 14,
    borderRadius: 2,
    backgroundColor: 'white',
    borderColor: '#9a9a9a',
    borderWidth: 1,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 2,
    backgroundColor: '#eaeaea',
    borderColor: '#9a9a9a',
    borderWidth: 1,
  }
});
export default Options;
