import React from 'react';
import { PROFILE_PIC_URL_PREFIX, TEAM_PIC_URL_PREFIX } from "../constants";

export class Profile extends React.Component {
    render() {
        const {
            teamAbbreviation,
            teamCity,
            teamName,
            playerName,
            height,
            weight,
            pts, reb, ast, pie,
        } = this.props.playerInfo;

        return (
            <div className='profile'>
                <img className='playerLogo' src={`${PROFILE_PIC_URL_PREFIX}/${this.props.playerId}.png`} alt="playerImg" />
                <img className='teamLogo' src={`${TEAM_PIC_URL_PREFIX}/${teamAbbreviation}_logo.svg`} alt='teamImg'/>
            </div>
        );
    }
}