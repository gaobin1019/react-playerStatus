import React from "react";
import { ShotChart } from "./ShotChart";
import { CountSlider } from "./CountSlider";
import _ from 'lodash';
import { Radio, Row, Col, Switch } from 'antd';
const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        count: 1,
        chartType: 'hexbin',
        showTooltip: true,
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

    onTooltipChange = (checked) => {
        this.setState({
            showTooltip: checked,
        });
    };

    render() {
        return (
            <div className='data-view'>
                <ShotChart
                    count={this.state.count}
                    playerId={this.props.playerInfo.playerId}
                    chartType={this.state.chartType}
                    showTooltip={this.state.showTooltip}
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
                        <Col span={8}>
                            <span>
                                Display tooltips:{' '}
                                <Switch
                                    checkedChildren="On"
                                    unCheckedChildren="Off"
                                    defaultChecked
                                    onChange={this.onTooltipChange}
                                />
                            </span>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}