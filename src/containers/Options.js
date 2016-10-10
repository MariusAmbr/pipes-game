import React from 'react';
import { connect } from 'react-redux';
import Options from '../components/Options';
import Actions from '../actions/actions';

function mapStateToProps(state) {
    return {
        size: state.game.size,
        startPipe: state.game.startPipe,
        endPipe: state.game.endPipe,
        name: state.game.name
    };
}

function mapDispatchToProps(dispatch) {
    return {
        change1: (a) => {
            dispatch(Actions.changeTemp1(a));
        },
        change2: (a) => {
            dispatch(Actions.changeTemp2(a));
        },
        change3: (a) => {
            dispatch(Actions.changeTemp3(a));
        },
        change4: (a) => {
            dispatch(Actions.changeTemp4(a));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);
