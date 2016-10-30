import React, {Component} from 'react';
import {StyleSheet,Image,Text,View,Linking,Animated,Easing,TouchableHighlight,AlertIOS} from 'react-native';
import Pipe from '../classes/Pipe';

class PipeNode extends Component {
    constructor(props){
        super(props);
        this.boop = this.boop.bind(this);
    }
    boop() {
        this.rotate();
    }
    componentWillMount(){

    }
    rotate() {
        if(!this.props.pipe.filled){
            this.rotation.setValue(this.props.pipe.rotation);
            let rotateValue = this.props.pipe.rotation + 90;
            Animated.timing(
                this.rotation,
                {
                    toValue: rotateValue,
                    duration: 500
                }
            ).start(()=>{
                this.props.rotate(this.props.pipe.x,this.props.pipe.y);
            });
        }
    }
    render(){
        this.rotation = new Animated.Value(this.props.pipe.rotation);
        const spin = this.rotation.interpolate({
            inputRange: [0,360],
            outputRange: ['0deg', '360deg']
        });
        let sprite;
        let sz = this.props.siz;
        let img = {
            height: sz,
            width: sz
        }
        switch(this.props.pipe.spriteNum){
            case 0:{
                if(this.props.pipe.filled){
                    sprite = this.props.images.img1_2;
                } else {
                    sprite = this.props.images.img1;
                }
                break;
            }
            case 1:{
                if(this.props.pipe.filled){
                    sprite = this.props.images.img2_2;
                } else {
                    sprite = this.props.images.img2;
                }
                break;
            }
            case 2:{
                if(this.props.pipe.filled){
                    sprite = this.props.images.img3_2;
                } else {
                    sprite = this.props.images.img3;
                }
                break;
            }
            case 3:{
                if(this.props.pipe.filled){
                    sprite = this.props.images.img4_2;
                } else {
                    sprite = this.props.images.img4;
                }
                break;
            }
            case 4:{
                if(this.props.pipe.filled){
                    sprite = this.props.images.img5_2;
                } else {
                    sprite = this.props.images.img5;
                }
                break;
            }
        }
        return(
            <View>
                <TouchableHighlight onPress={this.boop}>
                    <Animated.Image
                        style={[
                            img,
                            {transform: [{rotate: spin}]}
                        ]}
                        source={sprite}
                     />
                 </TouchableHighlight>
            </View>
        );
    }
}

export default PipeNode;
