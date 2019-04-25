import React, { Component } from 'react';
import './board.component.css';

export default class Board extends Component {

    constructor(props) {
        console.log('Board.constructor', { props });
        super(props);
    }

    render() {
        console.log('Board.render > ', this);

        const game = this.props.game;
        const size = game.size;
        const stones = [];

        for (let pos = 0; pos < size * size; pos++) {
            const stone = game.stone(pos);

            if (stone === 0) {
                continue
            }

            const [cursor, onClick] = game.canMove(pos) ? ["pointer", () => this.props.onMove(pos)] : ["not-allowed", null];
            const x = game.posX(pos);
            const y = game.posY(pos);

            stones.push(
                <g style={{ cursor }} onClick={onClick} key={stone}>
                    <use xlinkHref="#stone" x={`${x}24`} y={`${y}24`} />
                    <text className="stoneNumber" x={`${x}70`} y={`${y}90`}>{stone}</text>
                </g>
            );
        }

        return (
            <div className="row center">
                <svg className="board center-align" width={`${size * 125}px`} height={`${size * 125}px`} viewBox={`0,0, ${size}60,${size}60`}>
                    <defs>
                        <linearGradient className="lgg" id="lgg">
                            <stop className="stop0" offset="0" />
                            <stop className="stop1" offset="1" />
                        </linearGradient>
                        <linearGradient id="lg1" xlinkHref="#lgg" gradientUnits="userSpaceOnUse" x1="127" y1="59" x2="92" y2="139" />
                        <symbol className="stone" id="stone">
                            <polygon className="poligon1" points="95,1 107,14 107,107 95,95" />
                            <polygon className="poligon2" points="1,95 95,95 107,107 14,107" />
                            <rect className="rect" x="1" y="1" width="94" height="94" />
                        </symbol>
                    </defs>

                    {/* Draw the areas of the box, wich are covered partially by the stones. */}
                    <g className="boxLeftTop">
                        <polygon className="backwood" points={`10,10 10,${size}30 ${size}30,${size}30 ${size}30,10`} />
                        <polygon className="topinner" points={`10,10 ${size}30,10 ${size}30,40 10,40`} />
                        <polygon className="leftinner" points={`10,10 40,40 40,${size}30 10,${size}30`} />
                    </g>

                    {/* Draw stones */}
                    <g className="stones">
                        {stones}
                    </g>

                    {/* Draw the areas of the box, wich cover partially the stones. */}
                    <g className="boxRightBottom" >
                        <polygon className="rightoutside" points={`${size}30,10 ${size}50,30  ${size}50,${size}50 ${size}30,${size}30`} />
                        <polygon className="bottomoutside" points={`10,${size}30 ${size}30,${size}30 ${size}50,${size}50 30,${size}50`} />
                        <path className="boxtopside" d={`M 10,10 L ${size}30,10 L ${size}30,${size}30 L 10,${size}30 z M 20,20 L 20,${size}20 L ${size}20,${size}20 L ${size}20,20 z`} />
                    </g>
                </svg >
            </div>
        );
    }
}
