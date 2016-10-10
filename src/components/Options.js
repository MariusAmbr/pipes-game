import React, {Component,View,SliderIOS} from 'react-native';
import NavigationBar from 'react-native-navbar';

class Options extends Component {
    constructor(props){
        super(props);
        this.tempSize = this.props.size;
        this.tempSNum = this.props.startPipe;
        this.tempENum = this.props.endPipe;
        this.tempNam = this.props.name;
    }



    render() {
        const leftButtonConfig = {
            title: 'Cancel',
            handler: () => this.props.navigator.pop(),
        };
        return (
            <View style={{ flex: 1, backgroundColor: '#9999CC', }}>
                <NavigationBar
                    title={{ title: 'Options screen', }}
                    leftButton={leftButtonConfig}/>
                    <View style={[{marginTop:200}]}>
                        <SliderIOS value={1} style={[{width:300}]}/>
                    </View>
            </View>
        );
    }
}

export default Options;
