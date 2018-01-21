import React from 'react';
import nba from 'nba';

import { AutoComplete, Input, Icon } from 'antd';

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    };

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] :
                nba.searchPlayers(value).map(player => player.fullName),
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
            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        );
    }
}