import React from "react";
import { ShotChart } from "./ShotChart";
import { CountSlider } from "./CountSlider";
import _ from 'lodash';

export class DataViewContainer extends React.Component {
    state = {
        count: 2,
    };

    changeCount = (value) => {
        this.setState({
            count: value,
        });
    };

    render() {
        return (
            <div className='data-view'>
                <ShotChart count={this.state.count} playerId={this.props.playerInfo.playerId} />
                <div className='filters'>
                    <CountSlider
                        count={this.state.count}
                        changeCount={_.debounce(this.changeCount, 500)}
                    />
                </div>
            </div>
        );
    }
}