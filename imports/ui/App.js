import React from 'react';

import TitleBar from './TitleBar.js';
import AddPlayer from './AddPlayer.js';
import PlayerList from './PlayerList.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} subtitle='Made by Eliya'/>
        <div className="wrapper">
          <PlayerList players={this.props.players}/>
          <AddPlayer/>
        </div>
      </div>
    );
  }
}
App.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired
};
