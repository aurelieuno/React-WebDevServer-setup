import React from "react";
import queryString from 'query-string';
import api from "../utils/api2";
import _ from "lodash"
/*import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';*/

const PlayerUI = (props) => (
    <div>
    <div className="column">
    <img
    className="avatar"
    src={props.state.avatar_url}
    alt={`Avatar for ${props.state.login}`}
    />
    <h2 className="username">@{props.state.login}</h2>
    <ul>
    {_.map(props.state,(el,key) =>
        <li key={el}>
         {key} : {el}
        </li>
        )}
    </ul>
    </div>
    </div>
    )

class Results extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
        this.data = queryString.parse(this.props.location.search)
        }

  render() {

    api.fetchPlayer(this.data)
   .then(res => this.setState(res))

    const player1 = this.state.player1;
    const player2 = this.state.player2;

    return (
    <div>
    <div className = "row">
    {player1 &&
    <PlayerUI id="player1" state={this.state.player1} />}

    {player2 &&
    <PlayerUI id="player2" state={this.state.player2} />}
    </div>

    </div>
    )
  }
}

module.exports = Results;

