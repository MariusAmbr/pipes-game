import React from 'react';
import { connect } from 'react-redux';
import Game from '../components/Game';
import Actions from '../actions/actions';

function mapStateToProps(state) {

    return {
        pipes: state.game.pipes,
        size: state.game.size,
        startPipe: state.game.startPipe,
        endPipe: state.game.endPipe,
        name: state.game.name,
        score: state.game.score,
        lost: state.game.lost,
        won: state.game.won,
        firebase: state.game.firebase
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createGrid: (grid) => {
            dispatch(Actions.createGrid(grid));
        },
        rotateNode: (x,y) => {
            dispatch(Actions.rotateNode(x,y));
        },
        spread: () => {
            dispatch(Actions.spreadWater());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
