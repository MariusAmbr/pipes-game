import React, {Component} from 'react';
import { StyleSheet,Text,View,Navigator,TouchableHighlight } from 'react-native';
import Main from '../containers/Main';
import Game from '../containers/Game';

class Root extends Component {

    renderScene(route, navigator) {
        const Component = route.component;
        return (
            <Component navigator={navigator} route={route} />
        )
    }

    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                initialRoute={{ component: Main }}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default Root;
