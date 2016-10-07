import React, {Component,PropTypes,StyleSheet,Image,Text,View,Linking,Animated,Easing,TouchableHighlight,AlertIOS} from 'react-native';
import Pipe from '../classes/Pipe';

let image1 = require('../res/1.png');
let image2 = require('../res/2.png');
let image3 = require('../res/3.png');
let image4 = require('../res/4.png');
let image5 = require('../res/5.png');

const styles = StyleSheet.create({
    img: {
        height: 50,
        width:50,
    }
});

class PipeNode extends Component {
    constructor(props){
        super(props);
        this.rotation = new Animated.Value(0);
        this.boop = this.boop.bind(this);
    }
    boop() {
        console.log("boop");
        this.rotate();
    }
    rotate() {
        this.rotation.setValue(0);
        Animated.timing(
            this.rotation,
            {
                toValue: 1,
                duration: 500,
                easing: Easing.linear
            }
        ).start();
    }
    render(){
        const spin = this.rotation.interpolate({
            inputRange: [0,1],
            outputRange: ['0deg', '90deg']
        });
        let sprite;
        switch(this.props.pipe.spriteNum){
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
        return(
            <View>
                <TouchableHighlight onPress={this.boop}>
                    <Animated.Image
                        style={[
                            styles.img,
                            {
                                transform: [
                                    {rotate: spin}
                                ]
                            }
                        ]}
                        source={sprite}
                     />
                 </TouchableHighlight>
            </View>
        );
    }
}

PipeNode.propTypes = {
};

export default PipeNode;
