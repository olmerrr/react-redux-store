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
        const {gamestoreService,
                gamesLoaded,
                gamesRequested,
                gamesError
            } = this.props;
        gamesRequested();
        gamestoreService.getGames()
            .then((data) => gamesLoaded(data))
            .catch((err) => gamesError(err));
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
const mapDispatchToProps =  {
    gamesLoaded,
    gamesRequested,
    gamesError
};

export default compose(
    withGamestoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(GameList);
