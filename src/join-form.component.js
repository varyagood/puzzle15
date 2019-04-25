import M from 'materialize-css';
import React, { Component } from 'react';
import './join-form.component.css';

export default class JoinForm extends Component {

    constructor(props) {
        console.log('JoinForm.constructor >', { props });
        super(props);

        this.state = {
            nickName: null,
            boardSize: 4,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleIntInputChange = this.handleIntInputChange.bind(this);
    }

    componentDidMount() {
        console.log('JoinForm.componentDidMount >', this);
        M.updateTextFields();
        M.FormSelect.init(document.querySelectorAll('select'));
    }

    render() {
        console.log('JoinForm.render >', this);

        return (
            <div className="JoinForm row">
                <div className="col l6 m8 s12 offset-l3 offset-m2">
                    <div className="card">
                        <div className="card-content">
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <span className="card-title">Welcome Puzzle 15</span>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="nickName-field" type="text" name="nickName" required onChange={this.handleInputChange} />
                                        <label htmlFor="nickName-field">Nickname</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <select id="boardSize-field" name="boardSize" onChange={this.handleIntInputChange} defaultValue="4">
                                            <option value="3">3x3</option>
                                            <option value="4">4x4</option>
                                            <option value="5">5x5</option>
                                        </select>
                                        <label htmlFor="boardSize-field">Board size</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <button className='waves-effect waves-light btn red'>
                                            <i className="material-icons left">chat</i>Shuffle Puzzle
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleInputChange(e) {
        console.log('JoinForm.handleInputChange >', this, { e });

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleIntInputChange(e) {
        console.log('JoinForm.handleIntInputChange >', this, { e });

        this.setState({
            [e.target.name]: parseInt(e.target.value, 10)
        });
    }

    handleSubmit(e) {
        console.log('JoinForm.handleSubmit >', this, { e });
        e.preventDefault();
        this.props.onJoin(this.state);
    }
}
