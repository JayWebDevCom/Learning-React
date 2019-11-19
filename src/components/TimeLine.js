import React, {Component} from 'react';
import d3 from 'd3';

const Canvas = ({children}) =>
    <svg height={'200'} width={'500'}>
        {children}
    </svg>;

const TimelineDot = ({position, txt}) =>
    <g transform={`translate(${position}, 0)`}>
        <circle cy={160} r={5} style={{fill: 'blue'}}/>
        <text y={115} x={-95} transform={"rotate(-45)"} style={{fontSize: '10px'}}>
            {txt}
        </text>
    </g>;

export class Timeline extends Component {

    constructor(props) {
        let data = props.data || [];
        const times = d3.extent(data.map(d => d.year));
        const range = [50, 450];
        super(props);
        this.scale = d3.time.scale().domain(times).range(range);
        this.state = {data, times, range}
    }

    render() {
        const {data} = this.state;
        const {scale} = this;
        return (
            <div className={'timeline'}>
                <h1>{this.props.name} Timeline</h1>
                <Canvas>
                    {data.map((d, i) =>
                        <TimelineDot key={i} position={scale(d.year)} txt={`${d.year} = ${d.event}`}/>
                    )}
                </Canvas>
            </div>
        )
    }
}
