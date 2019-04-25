import M from 'materialize-css';
import React, { Component, Fragment } from 'react';

export default class Header extends Component {
    constructor(props) {
        console.log('Header.constructor >', { props });
        super(props);
    }

    componentDidMount() {
        console.log('Header.componentDidMount >', this);
        M.Sidenav.init(document.querySelectorAll('.sidenav'));
    }

    render() {
        console.log('Header.render >', this);

        return (
            <Fragment>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo center">Puzzle 15</a>
                        <a href="#!" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#!">Hello, {this.props.nickName}!</a></li>
                            <li><a href="#!">Moves: {this.props.moves}</a></li>
                            <li><a href="#!" onClick={this.props.onShuffle}><i className="material-icons">refresh</i></a></li>
                            <li><a href="#!"><i className="material-icons">help</i></a></li>
                            <li><a href="#!" onClick={this.props.onLeave}><i className="material-icons">logout</i></a></li>
                        </ul>
                    </div>
                </nav>

                <ul id="nav-mobile" className="sidenav">
                    <li><a href="#!">Hello, {this.props.nickName}!</a></li>
                    <li><a href="#!">Moves: {this.props.moves}</a></li>
                    <li><a href="#!" onClick={this.props.onShuffle}><i className="material-icons">refresh</i>Shuffle</a></li>
                    <li><a href="#!"><i className="material-icons">help</i>Help</a></li>
                    <li><a href="#!" onClick={this.props.onLeave}><i className="material-icons">logout</i>Exit</a></li>
                </ul>
            </Fragment>
        );
    }
}
