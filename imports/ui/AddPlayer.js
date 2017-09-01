import React from 'react';
import {Players} from './../../imports/api/players';


export default class AddPlayer extends React.Component {
    
    handleSubmit(e) {
        //Get player name to add from the form below
        let playerName = e.target.playerName.value;
        //prevents page refresh when hit submit button
        e.preventDefault();
    
        if(playerName) {
            e.target.playerName.value = '';
            //Insert new player from form
            Players.insert({
                name: playerName,
                score: 0 //this.props.score
            });
        } else {
            alert('Enter Player name');
        }
    }
    render() {
        return (
        <div className="item">
            <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                <input className="form__input" type="text" name="playerName" placeholder="Player Name" />
                <button className="button">Add Player</button>
            </form>
        </div>
        );
    }
};