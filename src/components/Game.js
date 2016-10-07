import React, {Component,PropTypes,StyleSheet,Image,Text,View,Linking,TouchableHighlight,AlertIOS} from 'react-native';
import CustomScreen from './Screen';
import Pipe from '../classes/Pipe';
import PipeNode from './PipeNode';


class Game extends Component {
    constructor(props){
        super(props);
        this.generateGrid = this.generateGrid.bind(this);
        this.drawGrid = this.drawGrid.bind(this);
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
                innerArray.push(
                    <View key={y+'xy'+x}>
                        <PipeNode pipe={this.props.pipes[x][y]}/>
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
            </View>
        );
    }
}

Game.propTypes = {
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

export default Game;
