import React from "react";
import nba from "nba";
import { Profile } from "./Profile";
import { DataViewContainer } from "./DataViewContainer";
import { SearchBar } from "./SearchBar";

export class Main extends React.Component {
    state = {
        playerInfo: {},
    };

    componentDidMount() {
        this.loadPlayerInfo(201567);
    }

    loadPlayerInfo = (id) => {
        nba.stats.playerInfo({
            PlayerID: id
        }).then((info) => {
            const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            console.log(playerInfo);
            this.setState({
                playerInfo: playerInfo,
            });
        }, (err) => {
            console.log('loading player info error : ' + err.responseText);
        }).catch((err) => {
            console.log(err);
        });
    };

    render() {
        return (
            this.state.playerInfo ?
                <div className="main">
                    <SearchBar loadPlayerInfo={this.loadPlayerInfo}/>
                    <div className='player'>
                        <Profile playerInfo={this.state.playerInfo} />
                        <DataViewContainer playerInfo={this.state.playerInfo}/>
                    </div>
                </div>
                :
                null
        );
    }
}