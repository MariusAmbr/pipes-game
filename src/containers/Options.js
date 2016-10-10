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
        save: (s,sn,en,nam) => {
            dispatch(Actions.saveOptions(s,sn,en,nam));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);
