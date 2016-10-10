import React, {Component} from 'react';
import { StyleSheet,Image,Text,View,Linking,TouchableHighlight,AlertIOS,Dimensions } from 'react-native';

import CustomScreen from './Screen';
import Pipe from '../classes/Pipe';
import PipeNode from './PipeNode';
import { generateGrid } from '../functions/functions';


class Game extends Component {
    constructor(props){
        super(props);
        this.drawGrid = this.drawGrid.bind(this);
        this.generate = this.generate.bind(this);
        let image1 = require('../res/1.png');
        let image2 = require('../res/2.png');
        let image3 = require('../res/3.png');
        let image4 = require('../res/4.png');
        let image5 = require('../res/5.png');
        this.images = {
            img1: image1,
            img2: image2,
            img3: image3,
            img4: image4,
            img5: image5
        }
    }

    componentWillMount(){
        if(this.props.pipes.length===0)
            this.generate();
    }

    drawGrid(dimensions){
        let size = this.props.pipes.length;
        let siz;
        if(dimensions.height>dimensions.width){
            siz = dimensions.width/size;
        } else {
            siz = dimensions.height/size;
        }
        let array2d = [];
        for(x = 0; x < size; x++){
            var innerArray = [];
            for(y = 0; y < size; y++){
                innerArray.push(
                    <View key={y+'xy'+x}>
                        <PipeNode
                            pipe={this.props.pipes[x][y]}
                            rotate={this.props.rotateNode}
                            images={this.images}
                            siz={siz}
                            />
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
    generate(){
        this.props.createGrid(generateGrid(this.props.size,this.props.startPipe,this.props.endPipe));
    }
    render() {
        let dim = Dimensions.get('window');
        let localGrid = [];// = this.drawGrid(5,5);
        if(this.props.pipes.length != 0){
            localGrid = this.drawGrid(dim);
        }
        var { navigator } = this.props;
        let styl = {};
        if(dim.height>dim.width){
            //styl= {marginTop:(dim.height-dim.width)/2};
        } else {
            //styl= {marginLeft:(dim.width-dim.height)/2,width:dim.height};
        }
        return (
            <View style={styles.page}>
                <View style={styles.buttons}>
                    <TouchableHighlight onPress={this.generate} style={[{flex:1},styles.button]}><Text style={styles.text}>Regenerate</Text></TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.navigator.pop()}style={[{flex:1},styles.button]}><Text style={styles.text}>Back to Menu</Text></TouchableHighlight>
                </View>
                <View style={[styl,styles.gridBox]}>
                    {localGrid}
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
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

export default Game;
