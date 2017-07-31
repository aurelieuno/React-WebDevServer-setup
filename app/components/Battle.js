import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const PlayerUI = (props) => (
    <div>
    <div className="column">
    <img
    className="avatar"
    src={props.avatar}
    alt={`Avatar for ${props.username}`}
    />
    <h2 className="username">@{props.username}</h2>
    </div>
    <button
    className="reset"
    onClick={props.handleClick.bind(null,props.id)}>
{/* onClick={props.handleClick(props.id)}
    Warning: setState(...): Cannot update during an existing state transition
    (such as within `render` or another component's constructor).
    Render methods should be a pure function of props and state;
    constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`.*/}

    Reset
    </button>
    </div>
    )

PlayerUI.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : ""
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        console.log(target)//<input type="text" name="player1" id="" value=""/>

        this.setState({
            username : value
    })

}

    handleSubmit(event) {
        /*event = Proxy {dispatchConfig: Object, _targetInst: ReactDOMComponent, isDefaultPrevented: function, isPropagationStopped: function, _dispatchListeners: function…}*/
        event.preventDefault();
        this.props.handleSubmit(this.props.id, this.state.username);
    }

    render () {
        return (
     <div>
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header">
          {this.props.label}
          </label>
          <input
            name="player1"
            placeholder="github username..."
            type="text"
            value={this.state.username}
            onChange={this.handleChange} />
             <br />
             <button
             className="button"
             type="submit"
             disabled={!this.state.username}>
             Submit
             </button>
       </form>
     </div>
            )
    }
}

Player.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}


class Battle extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            player1name: "",
            player2name: "",
            player1img: null,
            player2img:null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    /*ComponentDidMount() {
        this.handleSubmit();
    }*/

    handleSubmit(id, username) {
    this.setState(function () {
      var newState = {};
      newState[`${id}name`] = username;
      newState[`${id}img`] = 'https://github.com/' + username + '.png?size=200';
      return newState;
    });
  }

    handleClick(id) {
      this.setState(function () {
        var newState = {};
        newState[`${id}name`] = "";
        newState[`${id}img`] = null;
        return newState;
      });
      }

    render () {
        const player1name=this.state.player1name;
        const player2name=this.state.player2name;
        const player1img=this.state.player1img;
        const player2img=this.state.player2img;
        const pathname = this.props.match.url;

        return (
    <div>

    <div className = "row">
    {!player1name &&
    <Player id="player1" label="Player One" handleSubmit={this.handleSubmit} />}

    {player1img &&
    <PlayerUI id="player1" avatar={this.state.player1img} username ={this.state.player1name} handleClick={this.handleClick}/>}

    {!player2name &&
    <Player id="player2" label="Player Two" handleSubmit={this.handleSubmit} />}

    {player2img &&
    <PlayerUI id="player2" avatar={this.state.player2img} username ={this.state.player2name} handleClick={this.handleClick}/>}
    </div>

    {player1img && player2img &&
    <Link
    className="button"
    to={{
        pathname: `${pathname}/results`,
        search: `?player1=${player1name}&player2=${player2name}`
    }}>
    Battle
    </Link>}

    </div>
    )
    }
}

module.exports = Battle;


