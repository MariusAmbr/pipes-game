import React, {Component} from 'react';
import { StyleSheet,Image,Text,View,Linking,TouchableHighlight,AlertIOS,Dimensions } from 'react-native';

import CustomScreen from './Screen';
import Pipe from '../classes/Pipe';
import PipeNode from './PipeNode';
import { generateGrid, loadImages } from '../functions/functions';


class Game extends Component {
    constructor(props){
        super(props);
        this.interval;
        this.images = loadImages();
        this.nameref;
        this.score;
        this.drawGrid = this.drawGrid.bind(this);
        this.generate = this.generate.bind(this);
        this.regenerate = this.regenerate.bind(this);
        this.checkScores = this.checkScores.bind(this);
        this.writeScores = this.writeScores.bind(this);
    }
    checkScores(){
        let ref = this.props.firebase.database().ref('players');
        ref.once("value").then(function(snapshot){
            let smth = snapshot.val();
            let found = smth[this.props.name];
            if(found)
                this.writeScores(found);
            else
                this.writeScores({});
        }.bind(this));
    }
    writeScores(prevData){
        if(!this.props.once||this.props.score==0){
            let size = this.props.size;
            let ref = this.props.firebase.database().ref('players/'+this.props.name);
            let data = {...prevData};
            if(data['name']==undefined){
                data['name']=this.props.name;
            }
            if(data[this.props.size]!=undefined){
                if(data[this.props.size] < this.props.score){
                    data[this.props.size]=this.props.score;
                    ref.set(data);
                }
            }else{
                data[this.props.size]=this.props.score;
                ref.set(data);
            }
            this.props.toggle();
        }
    }
    componentWillMount(){
        if(this.props.pipes.length===0)
            this.generate();
    }
    componentDidMount(){
        this.interval = setInterval(()=>{
            this.props.spread();
            if(this.props.lost){
                clearInterval(this.interval);
            }
        },5000);
    }
    componentWillUnmount(){
        if(this.interval){
            clearInterval(this.interval);
        }
    }
    drawGrid(size, dimensions){
        //let size = 5;
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
    regenerate(){
        this.generate();
        if(this.interval){
            clearInterval(this.interval);
        }
        this.interval = setInterval(()=>{
            this.props.spread();
        },5000);
    }
    render() {
        let dim = Dimensions.get('window');
        let state = [];
        if(this.props.lost||this.props.won){
            let text = '';
            if(this.props.won){
                text = 'Win';
                this.checkScores();
            }else if(this.props.lost){
                text = 'Lose';
            }
            state = (
                <View style={[styles.overlay,{width:dim.width, height:dim.width+4},styles.loseContainer]}>
                    <Text style={[styles.title,{opacity:1}]}>You {text}</Text>
                </View>
            );
        }

        let localGrid = [];// = this.drawGrid(5,5);
        if(this.props.pipes.length!=0){
            let size = this.props.pipes.length;
            localGrid = this.drawGrid(size,dim);
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
                    <TouchableHighlight onPress={this.regenerate} style={[{flex:1},styles.button]}><Text style={styles.text}>Regenerate</Text></TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.navigator.pop()}style={[{flex:1},styles.button]}><Text style={styles.text}>Back to Menu</Text></TouchableHighlight>
                </View>
                <View style={[styl,styles.gridBox]}>
                    {localGrid}
                </View>
                {state}
                <View><Text style={styles.text}>{this.props.score}</Text></View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    overlay:{
        position: 'absolute',
        backgroundColor: 'black',
        opacity: 0.7,
        top:100,
        left:0
    },
    loseContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 60,
        textAlign: 'center',
        marginBottom: 20,
        color: '#fff'
    },

});

export default Game;
