import React from 'react';
import { connect } from 'react-redux';
import Scores from '../components/Scores';
import Actions from '../actions/actions';

function mapStateToProps(state) {
    return {
        scores: state.game.scores,
        firebase: state.game.firebase
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadScores: (obj) => {
            dispatch(Actions.loadScores(obj));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scores);
