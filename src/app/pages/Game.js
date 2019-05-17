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

export const Wall = styled.div`
    position: absolute;
    top: ${props => props.top + 'px'};
    left: ${props => props.left + 'px'};
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
    background-color: ${props => props.color};
`

export const Board = styled.div`
    position: relative;
    height: ${props => props.height + 'px'};
    width: ${props => props.width + 'px'};
    background-color: #6633336a;
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

function createWalls(obj, color) {
    obj.state.walls.push({
        width: 8,
        height: 500,
        color: color,
        top: 0,
        left: 0
    });
    obj.state.walls.push({
        width: 8,
        height: 500,
        color: color,
        top: 0,
        left: 500
    });
    obj.state.walls.push({
        width: 500,
        height: 8,
        color: color,
        top: 0,
        left: 0
    });
    obj.state.walls.push({
        width: 500,
        height: 8,
        color: color,
        top: 492,
        left: 0
    });
    obj.state.walls.push({
        width: 300,
        height: 40,
        color: color,
        top: 400,
        left: 0
    });
    obj.state.walls.push({
        width: 130,
        height: 40,
        color: color,
        top: 180,
        left: 130
    });
    obj.state.walls.push({
        width: 40,
        height: 320,
        color: color,
        top: 50,
        left: 175
    });
    obj.state.walls.push({
        width: 40,
        height: 350,
        color: color,
        top: 0,
        left: 50
    });
    obj.state.walls.push({
        width: 40,
        height: 350,
        color: color,
        top: 50,
        left: 300
    });
    obj.state.walls.push({
        width: 100,
        height: 40,
        color: color,
        top: 50,
        left: 340
    });
    obj.state.walls.push({
        width: 100,
        height: 40,
        color: color,
        top: 150,
        left: 400
    });
    obj.state.walls.push({
        width: 100,
        height: 40,
        color: color,
        top: 250,
        left: 340
    });
    obj.state.walls.push({
        width: 100,
        height: 40,
        color: color,
        top: 400,
        left: 400
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
        this.state = {
            walls: Array(),
            player: {
                startPos: { x: 20, y: 10 },
                position: { x: 20, y: 10 },
                clickPos: { x: 10, y: 10 },
                dragging: false,
                size: { width: 15, height: 30 },
                opacity: 1
            },
            exit: {
                x: 15,
                y: 450,
                width: 30,
                height: 30
            },
            modal: {
                show: false
            },
            wins: 0,
            losses: 0
        };
        createWalls(this, wallColor);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

        var speed = [1,1,1,2];
        setInterval(() => {
            let tmp = Object.assign({}, this.state);
            tmp.walls[6].top += speed[0];
            tmp.walls[9].left += speed[1];
            tmp.walls[10].left += speed[2];
            tmp.walls[12].left += speed[3];
            if(tmp.walls[6].top < 0 || tmp.walls[6].top > 180) {
                speed[0] *= -1;
            }
            if(tmp.walls[9].left < 340 || tmp.walls[9].left > 400) {
                speed[1] *= -1;
            }
            if(tmp.walls[10].left < 340 || tmp.walls[10].left > 400) {
                speed[2] *= -1;
            }
            if(tmp.walls[12].left < 300 || tmp.walls[12].left > 400) {
                speed[3] *= -1;
            }
            this.setState({ tmp });
        }, 10);
    }

    componentDidMount() {
        ReactModal.setAppElement('body');
    }

    handleMouseMove(e) {
        if (this.state.player.dragging) {
            let tmp = Object.assign({}, this.state);
            tmp.player.position = {
                x: e.pageX - this.state.player.clickPos.x,
                y: e.pageY - this.state.player.clickPos.y
            };
            this.setState({ tmp });
            let p = { x: this.state.player.position.x, y: this.state.player.position.y, width: this.state.player.size.width, height: this.state.player.size.height };

            if (playerHitWall(this.state.walls, p)) {
                tmp = Object.assign({}, this.state);
                tmp.player.position = tmp.player.startPos;
                tmp.player.dragging = false;
                tmp.losses += 1;
                this.setState({ tmp });
            }
            if (playerHitExit(this.state.exit, p)) {
                this.handleOpenModal();
            }
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
        tmp.wins += 1;
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
        const winLoss = `Wins: ${this.state.wins}  ---   Losses: ${this.state.losses}`;
        return (
            <Section fullHeight centered_hv images={[img1920x1080, img1600x900, img1280x800, img768x1024, img480x800]} overlay="#ffff0022">
                <Heading>
                    Simple drag game.
                </Heading>
                <Text>
                    Drag the piece in the top left to the exit in the bottom left.  If you touch a wall you'll have to start over.
                </Text>
                <Board
                    id="board"
                    height="500"
                    width="500"
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
                            width: "500px",
                            height: "200px",
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