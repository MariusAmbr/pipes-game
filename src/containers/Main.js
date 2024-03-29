import React from 'react';
import { connect } from 'react-redux';
import Main from '../components/Main';
import Actions from '../actions/actions';

function mapStateToProps(state) {
    return {
        firebase: state.game.firebase
    };
}

function mapDispatchToProps(dispatch) {
    return {
        load: (obj) => {
            dispatch(Actions.loadOptions(obj));
        },
        loadFirebase: (fire) => {
            dispatch(Actions.loadFirebase(fire));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
