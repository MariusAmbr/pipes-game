import React from 'react';
import { connect } from 'react-redux';
import Game from '../components/Game';
import Actions from '../actions/actions';

function mapStateToProps(state) {
    return {
        pipes: state.game.pipes,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createGrid: (grid) => {
            dispatch(Actions.createGrid(grid));
        },
        rotateNode: (x,y) => {
            dispatch(Actions.rotateNode(x,y));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
