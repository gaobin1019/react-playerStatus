import React from 'react';
import nba from 'nba';
import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';
import { court, shots } from 'd3-shotchart';

window.d3_hexbin = { hexbin : hexbin};

export class ShotChart extends React.Component {
    draw = (threshold) => {
        nba.stats.shots({
            PlayerID: this.props.playerId,
        }).then((response) => {
            const final_shots = response.shot_Chart_Detail.map(shot => ({
                x: (shot.locX + 250) / 10, //match nba location with d3-shotchart location x, y
                y: (shot.locY + 50) / 10,
                action_type: shot.actionType,
                shot_distance: shot.shotDistance,
                shot_made_flag: shot.shotMadeFlag,
            }));

            const courtSelection = d3.select('#shot-chart');
            courtSelection.html('');
            const chart_court = court().width(500);
            const chart_shots = shots().shotRenderThreshold(threshold).displayToolTips(true).displayType(this.props.chartType);
            courtSelection.call(chart_court);
            courtSelection.datum(final_shots).call(chart_shots);
        });
    };

    componentDidMount() {
        this.draw(this.props.count);
    }

    componentDidUpdate() {
        this.draw(this.props.count);
    }

    render() {
        return (
            <div id="shot-chart"></div>
        );
    }
}
