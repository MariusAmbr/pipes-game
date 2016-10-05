import React, {Component,PropTypes,StyleSheet,Image,Text,View,Linking,TouchableHighlight,AlertIOS} from 'react-native';
import CustomScreen from './Screen';
import Pipe from '../classes/Pipe';

let image1 = require('../res/1.png');
let image2 = require('../res/2.png');
let image3 = require('../res/3.png');
let image4 = require('../res/4.png');
let image5 = require('../res/5.png');

class Counter extends Component {
    constructor(props){
        super(props);
        this.generateGrid = this.generateGrid.bind(this);
        this.drawGrid = this.drawGrid.bind(this);
    }

    boop() {
        console.log("boop");
    }

    generateGrid(sizex,sizey){
        let array2d = [];
        for(x = 0; x < sizex; x++){
            var innerArray = [];
            for(y = 0; y < sizey; y++){
                var pipe = new Pipe(x,y,Math.floor((Math.random()*4)),Math.floor((Math.random()*3)));
                innerArray.push(pipe);
            }
            array2d.push(innerArray);
        }
        this.props.createGrid(array2d);
    }
    componentWillMount(){
        this.generateGrid(5,5);
    }
    drawGrid(sizex, sizey){
        let array2d = [];
        for(x = 0; x < sizex; x++){
            var innerArray = [];
            for(y = 0; y < sizey; y++){
                let sprite;
                switch(this.props.pipes[x][y].spriteNum){
                    case 0:
                        sprite = image1; break;
                    case 1:
                        sprite = image2; break;
                    case 2:
                        sprite = image3; break;
                    case 3:
                        sprite = image4; break;
                    case 4:
                        sprite = image5; break;
                }
                innerArray.push(
                    <View key={y+'xy'+x}>
                        <TouchableHighlight onPress={this.boop}>
                            <Image
                                style={styles.img}
                                source={sprite}
                             />
                         </TouchableHighlight>
                    </View>
                );
            }
            array2d.push(
                <View key={x} style={styles.container}>
                    {innerArray}
                </View>
            );
        }
        return array2d;
    }
    render() {
        console.log(this.props);
        let localGrid = [];// = this.drawGrid(5,5);
        if(this.props.pipes.length != 0){
            localGrid = this.drawGrid(5,5);
        }
        var { navigator } = this.props;
        return (
            <View >
                {localGrid}
                <Text style={styles.text}>Counter:times</Text>
                <TouchableHighlight onPress={() => navigator.push({component: CustomScreen})}>
                    <Text style={styles.text}>Increment async</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

Counter.propTypes = {
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    img: {
        height: 50,
        width:50,
    }
});

export default Counter;
