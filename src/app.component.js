import 'materialize-css/dist/css/materialize.min.css';
import React, { Component, Fragment } from 'react';
import './app.component.css';
import Header from './header.component';
import JoinForm from './join-form.component';
import Board from './board.component';
import Game from './game';
import WinModal from './win-modal.component';

export default class App extends Component {
  constructor(props) {
    console.log('App.constructor >', { props });
    super(props);

    this.state = {
      joined: false,
    }

    this.handleJoin = this.handleJoin.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
  }

  render() {
    console.log('App.render >', this);

    if (!this.state.joined) {
      return (
        <JoinForm onJoin={this.handleJoin} />
      );
    } else {
      return (
        <Fragment>
          <Header
            nickName={this.state.nickName}
            moves={this.state.moves}
            onShuffle={this.handleShuffle}
            onLeave={this.handleLeave} />
          <Board game={this.state.game} onMove={this.handleMove} />
          {this.state.game.isWin() && <WinModal nickName={this.state.nickName} moves={this.state.moves} onTryAgain={this.handleShuffle} />}
        </Fragment>
      );
    }
  }

  handleJoin(options) {
    console.log('App.handleJoin', this, { options });

    this.setState({
      joined: true,
      nickName: options.nickName,
      game: new Game(options.boardSize),
      moves: 0,
    });
  }

  handleLeave() {
    console.log('App.handleLeave >', this);

    this.setState({
      joined: false,
    });
  }

  handleMove(pos) {
    console.log('App.handleMove >', this, { pos });

    this.setState({
      game: this.state.game.move(pos),
      moves: this.state.moves + 1,
    });
  }

  handleShuffle() {
    console.log('App.handleShuffle >', this);

    this.setState({
      game: new Game(this.state.game.size),
      moves: 0,
    });
  }
}
