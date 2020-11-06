import React, {Component} from "react";
import GameListItem from "../game-list-item";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import  './game-list.css';
import {withGamestoreService} from "../hoc/with-gamestore-service";
import {fetchGames} from "../../actions";
import {compose} from "../../utils/index";
import Spinner from '../spinner';
import ErrorIndicator from './../error-indicator/index';

const GameList = ({games}) => {
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
class GameListContainer extends Component{
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
        return <GameList games={games}/>
    }
};


const mapStateToProps = ({games, loading, error}) =>{
    return{
        games,
        loading,
        error
    };
}
const mapDispatchToProps = (dispatch, {gamestoreService}) => {
    return {
        fetchGames: fetchGames(gamestoreService,dispatch)
        }
    }

export default compose(
    withGamestoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(GameListContainer);
