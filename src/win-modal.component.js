import M from 'materialize-css';
import React, { Component } from 'react';

export default class WinModal extends Component {
    constructor(props) {
        console.log('WinModal.constructor >', { props });
        super(props);
    }

    componentDidMount() {
        console.log('WinModal.componentDidUpdate >', this);
        M.Modal.init(document.querySelectorAll('.win-modal'), { dismissible: false });
        M.Modal.getInstance(document.querySelector('.win-modal')).open();
    }

    componentWillUnmount() {
        console.log('WinModal.componentWillUnmount >', this);
        M.Modal.getInstance(document.querySelector('.win-modal')).destroy();
    }

    render() {
        console.log('WinModal.render >', this);

        return (
            <div id="win-modal" className="win-modal modal">
                <div className="modal-content">
                    <h4>Congratulations, {this.props.nickName}!</h4>
                    <p>You solved the puzze in {this.props.moves} moves!</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={this.props.onTryAgain}>Try Again</a>
                </div>
            </div>
        );
    }
}
