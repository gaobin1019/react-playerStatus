import React from "react";
import { ShotChart } from "./ShotChart";
import { CountSlider } from "./CountSlider";

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
                <ShotChart count={this.state.count} playerId={this.props.playerId} />
                <div className='filters'>
                    <CountSlider
                        count={this.state.count}
                        changeCount={this.changeCount}
                    />
                </div>
            </div>
        );
    }
}