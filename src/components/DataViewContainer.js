import React from "react";
import { ShotChart } from "./ShotChart";
import { CountSlider } from "./CountSlider";
import _ from 'lodash';
import { Radio, Row, Col } from 'antd';
const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        count: 1,
        chartType: 'hexbin',
    };

    changeCount = (value) => {
        this.setState({
            count: value,
        });
    };

    onChartTypeChange = (e) => {
        this.setState({
            chartType: e.target.value,
        });
    };

    render() {
        return (
            <div className='data-view'>
                <ShotChart
                    count={this.state.count}
                    playerId={this.props.playerInfo.playerId}
                    chartType={this.state.chartType}
                />
                <div className='filters'>
                    {
                        this.state.chartType === 'hexbin' ?
                            <CountSlider
                                count={this.state.count}
                                changeCount={_.debounce(this.changeCount, 500)}
                            />
                            :
                            null
                    }

                    <Row className="chartTypeRow">
                        <Col span={12} offset={3}>
                            <RadioGroup
                                onChange={this.onChartTypeChange}
                                value={this.state.chartType}
                            >
                                <Radio value='hexbin'>Hexbin</Radio>
                                <Radio value='scatter'>Scatter</Radio>
                            </RadioGroup>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}