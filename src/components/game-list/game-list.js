import React, {Component} from "react";
import GameListItem from "../game-list-item";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import  './game-list.css';
import {withGamestoreService} from "../hoc/with-gamestore-service";
import {gamesLoaded, gamesRequested, gamesError} from "../../actions";
import {compose} from "../../utils/index";
import Spinner from '../spinner';
import ErrorIndicator from './../error-indicator/index';

class GameList extends Component{
    componentDidMount() {
        this.props.fetchGames();
    }

    render() {
        const {games, loading, error} = this.props;
        if(loading){
            return <Spinner/>
        };
        if(error){
            return <ErrorIndicator/>
        }
        return (
            <ul className="game-list">
                {
                    games.map((game)=> {
                        return (
                            <li key={game.id}>
                            <GameListItem game = {game}/>
                        </li>
                        );
                    })
                }
            </ul>
        )
    }
};
const mapStateToProps = ({games, loading, error}) =>{
    return{
        games,
        loading,
        error
    };
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const {gamestoreService} = ownProps;
    return {
        fetchGames: () => {
        dispatch(gamesRequested());
        gamestoreService.getGames()
            .then((data) => dispatch(gamesLoaded(data)))
            .catch((err) => dispatch(gamesError(err)));
        }
    }
};

export default compose(
    withGamestoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(GameList);
