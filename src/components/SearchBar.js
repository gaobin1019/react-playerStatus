import React from 'react';
import nba from 'nba';
import { AutoComplete, Input, Icon } from 'antd';
import {PROFILE_PIC_URL_PREFIX} from "../constants";

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    };

    handleSearch = (value) => {
        console.log(value);
        this.setState({
            dataSource: !value ? [] :
                nba.searchPlayers(value).map(player => (
                    <AutoComplete.Option
                        key={player.playerId}
                        text={player.fullName}
                        className="playerOption"
                    >
                        <img
                            src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`}
                            alt="playerImg"
                            className="playerOptionImage"
                        />
                        <span className='playerOptionName'>{player.fullName}</span>
                    </AutoComplete.Option>
                )),
        });
    };

    onSelect = (value) => {
        console.log('onSelect', value);
        this.props.loadPlayerInfo(value);
    };


    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                className='search-bar'
                size='large'
                dataSource={dataSource}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search player"
                optionLabelProp="text"
            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        );
    }
}