import React, {Component,PropTypes,StyleSheet,Text,View,Navigator,TouchableHighlight} from 'react-native';
import Counter from '../containers/Counter'

class Root extends Component {

    renderScene(route, navigator) {
        console.log('RENDER SCENEs', route);
        const Component = route.component;
        return (
            <Component navigator={navigator} route={route} {...this.props} />
        )
    }

    render() {
        var { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                initialRoute={{ name: 'Counter', component: Counter }}/>
        );
        /*return (
            <View>
                <Counter />
            </View>
        );*/
    }
}

Root.propTypes = {
};

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
