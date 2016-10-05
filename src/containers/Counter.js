import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import Actions from '../actions/actions';

function mapStateToProps(state) {
    return {
        pipes: state.game.pipes,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createGrid: (grid) => {
            dispatch(Actions.createGrid(grid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
