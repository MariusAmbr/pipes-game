import React, {Component,PropTypes,StyleSheet,Image,Text,View,Linking,TouchableHighlight,AlertIOS} from 'react-native';
import CustomScreen from './Screen';
import Pipe from '../classes/Pipe';

class Counter extends Component {

    boop() {
        console.log("boop");
    }

    generateGrid(sizex,sizey){
        let array2d = [];
        for(x = 0; x < sizex; x++){
            var innerArray = [];
            for(y = 0; y < sizey; y++){
                //var pipe = new Pipe();
                //console.log(pipe);
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
    render() {
        console.log(this.props.pipes);
        var { navigator } = this.props;
        return (
            <View >
                <View style={styles.container}>
                    <TouchableHighlight onPress={this.boop}>
                        <Image
                            style={styles.img}
                            source={require('../res/1.png')}
                         />
                     </TouchableHighlight>
                     <TouchableHighlight onPress={this.boop}>
                         <Image
                             style={styles.img}
                             source={require('../res/2.png')}
                          />
                     </TouchableHighlight>
                     <TouchableHighlight onPress={this.boop}>
                         <Image
                             style={styles.img}
                             source={require('../res/3.png')}
                          />
                     </TouchableHighlight>
                </View>
                <View style={styles.container}>
                    <TouchableHighlight onPress={this.boop}>
                        <Image
                            style={[styles.img, {transform: [{rotate: '270deg'}]}]}
                            source={require('../res/4.png')}
                         />
                     </TouchableHighlight>
                     <TouchableHighlight onPress={this.boop}>
                         <Image
                             style={[styles.img, {transform: [{rotate: '270deg'}]}]}
                             source={require('../res/5.png')}
                          />
                     </TouchableHighlight>
                     <TouchableHighlight onPress={this.boop}>
                         <Image
                             style={styles.img}
                             source={require('../res/1.png')}
                          />
                     </TouchableHighlight>
                </View>
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
