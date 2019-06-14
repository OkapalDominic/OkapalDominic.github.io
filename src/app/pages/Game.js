import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import ReactDom from 'react-dom';

import Container from '../components/Container';
import Link from '../components/Link';
import Section from '../components/Section';
import { Heading, Subheading, Text } from '../components/Typography';

// Import images
import img1920x1080 from '../../images/about/1920x1080.jpg';
import img1600x900 from '../../images/about/1600x900.jpg';
import img1280x800 from '../../images/about/1280x800.jpg';
import img768x1024 from '../../images/about/768x1024.jpg';
import img480x800 from '../../images/about/480x800.jpg';

// Wall color
const wallColor = '#662412';
//

const vwOrvh = () => {
    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if(w > h) {
        return 'vh';
    }
    return 'vw';
}

export const Wall = styled.div.attrs(
    props => ({
        style: {
            top: (props.top + 'px'),
            left: (props.left + 'px')
        }
    })
)`
    position: absolute;
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
    background-color: ${props => props.color};
`

export const Board = styled.div`
    position: relative;
    height: ${props => props.height + 'px'};
    width: ${props => props.width + 'px'};
    background-color: rgba(102, 51, 51, 0.42);
`

export const PlayerSprite = styled.div.attrs(
    props => ({
        style: {
            top: (props.top + 'px'),
            left: (props.left + 'px')
        }
    })
)`
    height: ${props => props.height + 'px'};
    width: ${props => props.width + 'px'};
    opacity: ${props => props.opacity};
    background-image: linear-gradient(to right, #777, #777 45%, #3333aa 65%, #3333aa);
    position: absolute;
    cursor: pointer;
    user-select: none;
    z-index: 999;
    border-radius: 50%;
`

export const Exit = styled.div`
    height: ${props => props.height + 'px'};
    width: ${props => props.width + 'px'};
    background-image: radial-gradient(#00ff00, #6a9f55);
    position: absolute;
    top: ${props => props.top + 'px'};
    left: ${props => props.left + 'px'};
    border-radius: 50%;
    border: 3px solid ${wallColor};
`

class Player extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PlayerSprite
                top={this.props.position.y}
                left={this.props.position.x}
                width={this.props.size.width}
                height={this.props.size.height}
                opacity={this.props.opacity}
                onMouseDown={this.props.handleMouseDown}
                onMouseUp={this.props.handleMouseUp}
            >
            </PlayerSprite>
        );
    }
}

function createWalls(obj, color, maxSize) {
    let wallWidth = .04 * maxSize;
    let borderWidth = .01 * maxSize;
    // Border Left wall
    obj.state.walls.push({
        width: borderWidth,
        height: maxSize,
        color: color,
        top: 0,
        left: 0
    });
    // Border right wall
    obj.state.walls.push({
        width: borderWidth,
        height: maxSize,
        color: color,
        top: 0,
        left: maxSize - borderWidth
    });
    // Border top wall
    obj.state.walls.push({
        width: maxSize,
        height: borderWidth,
        color: color,
        top: 0,
        left: 0
    });
    // Border bottom wall
    obj.state.walls.push({
        width: maxSize,
        height: borderWidth,
        color: color,
        top: maxSize - borderWidth,
        left: 0
    });
    // Vertical left-most wall
    obj.state.walls.push({
        width: wallWidth,
        height: .75 * maxSize,
        color: color,
        top: borderWidth,
        left: .08 * maxSize
    });
    // Vertical middle wall, move up and down
    obj.state.walls.push({
        width: wallWidth,
        height: .6 * maxSize,
        color: color,
        top: .18 * maxSize,
        left: .35 * maxSize
    });
    // Vertical right-most wall
    obj.state.walls.push({
        width: wallWidth,
        height: .75 * maxSize,
        color: color,
        top: .1 * maxSize,
        left: .65 * maxSize
    });
    // Horizontal cross in middle
    obj.state.walls.push({
        width: .35 * maxSize,
        height: wallWidth,
        color: color,
        top: .4 * maxSize,
        left: .21 * maxSize
    });
    // Horizontal top on right, move left to right
    obj.state.walls.push({
        width: .2 * maxSize,
        height: wallWidth,
        color: color,
        top: .1 * maxSize,
        left: .65 * maxSize + wallWidth,
        direction: 'horizontal',
        speed: 1,
        start: .65 * maxSize + wallWidth,
        stop: maxSize - borderWidth - (.2 * maxSize)
    });
    // Horizontal top middle on right, move left to right
    obj.state.walls.push({
        width: .2 * maxSize,
        height: wallWidth,
        color: color,
        top: .4 * maxSize,
        left: .7 * maxSize + wallWidth,
        direction: 'horizontal',
        speed: 1.1,
        start: .65 * maxSize + wallWidth,
        stop: maxSize - borderWidth - (.2 * maxSize)
    });
    // Horizontal bottom middle on right, move left to right
    obj.state.walls.push({
        width: .2 * maxSize,
        height: wallWidth,
        color: color,
        top: .6 * maxSize,
        left: maxSize - borderWidth - (.2 * maxSize),
        direction: 'horizontal',
        speed: -1.3,
        start: .65 * maxSize + wallWidth,
        stop: maxSize - borderWidth - (.2 * maxSize)
    });
    // Horizontal bottom on right, move left to right
    obj.state.walls.push({
        width: .25 * maxSize,
        height: wallWidth,
        color: color,
        top: .85 * maxSize,
        left: .65 * maxSize,
        direction: 'horizontal',
        speed: 1.8,
        start: .65 * maxSize,
        stop: maxSize - borderWidth - (.25 * maxSize)
    });
    // Horizontal bottom
    obj.state.walls.push({
        width: wallWidth,
        height: wallWidth,
        color: '#5566ff',
        top: 40,
        left: 40
    });
}

function playerHitWall(walls, player) {
    var hit = false;
    var playerRight = player.x + player.width;
    var playerBottom = player.y + player.height;
    for (let wall of walls) {
        let wallRight = wall.left + wall.width;
        let wallBottom = wall.top + wall.height;
        if (
            playerRight > wall.left &&
            player.x < wallRight &&
            playerBottom > wall.top &&
            player.y < wallBottom
        ) {
            hit = true;
            break;
        }
    }
    return hit;
}

function playerHitExit(exit, player) {
    let playerRight = player.x + player.width;
    let playerBottom = player.y + player.height;
    let exitRight = exit.x + exit.width;
    let exitBottom = exit.y + exit.height;
    return playerRight > exit.x && player.x < exitRight && playerBottom > exit.y && player.y < exitBottom;
}

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.initializeGame();
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        ReactModal.setAppElement('body');
        this.initializeGame();
        window.addEventListener("resize", 
        () => {
            this.initializeGame();
        });
    }

    moveWalls() {
        var speed = [1, 1, 1, 2];
        let wallWidth = .01 * this.boardSize;
        var dist = [
            {
                start: .01 * this.boardSize,
                stop: this.boardSize - this.state.walls[6].height - wallWidth
            },
            {
                start: this.boardSize - this.state.walls[9].width - wallWidth,
                stop: .07 * this.boardSize
            },
            {
                start: this.boardSize - this.state.walls[10].width - wallWidth,
                stop: .7 * this.boardSize
            },
            {
                start: this.boardSize - this.state.walls[12].width - wallWidth,
                stop: .6 * this.boardSize
            }
        ]
        setInterval(() => {
            let tmp = Object.assign({}, this.state);
            tmp.walls[6].top += speed[0];
            tmp.walls[9].left += speed[1];
            tmp.walls[10].left += speed[2];
            tmp.walls[12].left += speed[3];
            if (tmp.walls[6].top < dist[0].start || tmp.walls[6].top > dist[0].stop) {
                speed[0] *= -1;
            }
            if (tmp.walls[9].left < dist[1].start || tmp.walls[9].left > dist[1].stop) {
                speed[1] *= -1;
            }
            if (tmp.walls[10].left < dist[2].start || tmp.walls[10].left > dist[2].stop) {
                speed[2] *= -1;
            }
            if (tmp.walls[12].left < dist[3].start || tmp.walls[12].left > dist[3].stop) {
                speed[3] *= -1;
            }
            this.setState({ tmp });
        }, 10);
    }

    checkCollisions() {
        setInterval(() => {
            let p = {
                x: this.state.player.position.x,
                y: this.state.player.position.y,
                width: this.state.player.size.width,
                height: this.state.player.size.height
            };

            if (playerHitWall(this.state.walls, p)) {
                let tmp = Object.assign({}, this.state);
                tmp.player.position = tmp.player.startPos;
                tmp.player.dragging = false;
                tmp.player.losses += 1;
                this.setState({ tmp });
            }
            if (playerHitExit(this.state.exit, p)) {
                this.handleOpenModal();
            }
        }, 10);
    }

    initializeGame() {
        this.boardSize = this.calculateBoardSize(.9);
        let startPos = { x: .018 * this.boardSize, y: .02 * this.boardSize };
        this.state = {
            walls: Array(),
            player: {
                startPos: startPos,
                position: startPos,
                clickPos: startPos,
                dragging: false,
                size: { width: .028 * this.boardSize, height: .038 * this.boardSize },
                opacity: 1,
                wins: 0,
                losses: 0
            },
            exit: {
                x: .02 * this.boardSize,
                y: 0.94 * this.boardSize,
                width: .03 * this.boardSize,
                height: .03 * this.boardSize
            },
            modal: {
                show: false
            }
        };
        createWalls(this, wallColor, this.boardSize);
        //this.moveWalls();
        this.checkCollisions();
    }

    updatePositions() {

    }

    calculateBoardSize(percentOfWindow) {
        if(vwOrvh() === 'vh') {
            return percentOfWindow * Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        }
        return percentOfWindow * Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    handleMouseMove(e) {
        if (this.state.player.dragging) {
            let tmp = Object.assign({}, this.state);
            tmp.player.position = {
                x: e.pageX - this.state.player.clickPos.x,
                y: e.pageY - this.state.player.clickPos.y
            };
            this.setState({ tmp });
        }
    }

    handleMouseDown(e) {
        let tmp = Object.assign({}, this.state);
        tmp.player.clickPos = {
            x: e.pageX - this.state.player.position.x,
            y: e.pageY - this.state.player.position.y
        };
        tmp.player.dragging = true;
        this.setState({ tmp });
    }

    handleMouseUp(e) {
        let tmp = Object.assign({}, this.state);
        tmp.player.dragging = false;
        this.setState({ tmp });
    }

    handleOpenModal() {
        let tmp = Object.assign({}, this.state);
        tmp.modal.show = true;
        tmp.player.opacity = 0;
        tmp.player.position = tmp.player.startPos;
        tmp.player.dragging = false;
        tmp.player.wins += 1;
        this.setState({ tmp });
    }

    handleCloseModal() {
        let tmp = Object.assign({}, this.state);
        tmp.modal.show = false;
        for (let wall of tmp.walls) {
            wall.color = wallColor;
        }
        tmp.player.position = tmp.player.startPos;
        tmp.player.dragging = false;
        tmp.player.opacity = 1;
        this.setState({ tmp });
    }

    render() {
        return (
            <Section fullHeight centered_hv images={[img1920x1080, img1600x900, img1280x800, img768x1024, img480x800]} overlay="rgba(255, 255, 0, 0.13)">
                <Heading>
                    Simple drag game.
                </Heading>
                <Text centered>
                    Drag the piece in the top left to the exit in the bottom left.  If you touch a wall you'll have to start over.<br />
                    Wins: {this.state.player.wins}  ---   Losses: {this.state.player.losses}
                </Text>
                <Board
                    id="board"
                    height={this.boardSize}
                    width={this.boardSize}
                    onMouseMove={this.handleMouseMove}
                >
                    <Player
                        position={this.state.player.position}
                        size={this.state.player.size}
                        opacity={this.state.player.opacity}
                        handleMouseDown={this.handleMouseDown}
                        handleMouseUp={this.handleMouseUp}
                    ></Player>
                    <Exit
                        top={this.state.exit.y}
                        left={this.state.exit.x}
                        width={this.state.exit.width}
                        height={this.state.exit.height}
                    ></Exit>
                    {this.state.walls.map((item, index) => (
                        <Wall key={index}
                            top={item.top}
                            left={item.left}
                            width={item.width}
                            height={item.height}
                            color={item.color}></Wall>
                    ))}
                </Board>
                <ReactModal
                    isOpen={this.state.modal.show}
                    contentLabel="You Won!!!"
                    style={{
                        content: {
                            width: "50em",
                            height: "5em",
                            marginLeft: "auto",
                            marginRight: "auto"
                        }
                    }}
                >
                    <h1>YOU WON!!!</h1>
                    <button onClick={this.handleCloseModal}>Play again</button>
                </ReactModal>
            </Section>
        )
    }
}