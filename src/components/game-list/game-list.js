import React, {Component} from "react";
import GameListItem from "../game-list-item";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import  './game-list.css';
import {withGamestoreService} from "../hoc/with-gamestore-service";
import {gamesLoaded} from "../../actions";
import {compose} from "../../utils/index";
import Spinner from '../spinner';

class GameList extends Component{
    componentDidMount() {
        const {gamestoreService,gamesLoaded} = this.props;
        gamestoreService.getGames()
            .then((data) => gamesLoaded(data));

    }

    render() {
        const {games, loading} = this.props;
        if(loading){
            return <Spinner/>
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
const mapStateToProps = ({games, loading}) =>{
    return{
        games,
        loading
    };
}
const mapDispatchToProps =  {gamesLoaded};

export default compose(
    withGamestoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(GameList);
