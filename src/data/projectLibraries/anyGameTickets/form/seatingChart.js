const code = `import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { line } from 'd3-shape';

class SeatingChart extends Component {
  state = {
    chart: this.props.chart,
    sections: [],
    drawing: {
      points: [],
      drawingLine: undefined,
      dragLine: undefined,
    },
  }

  componentDidMount() {
    const { chart, size } = this.props;
    if (!chart) { return; }
    this.renderChart(chart, size);
  }

  componentWillReceiveProps(nextProps) {
    const { chart, size, listen } = nextProps;
    if (!listen) {
      this.setState((state) => {
        state.drawing.dragLine = undefined;
        return state;
      });
    }
    if (!chart) { return; }
    this.renderChart(chart, size);
  }

  scaleX = scaleLinear()
    .domain([0, this.state.chart.size.width])
    .range([0, this.props.size]);

  scaleY = scaleLinear()
    .domain([0, this.state.chart.size.height])
    .range([0, this.props.size]);

  handleSectionClick = (i) => {
    const { clickSection } = this.props;
    if (clickSection) {
      clickSection(i);
    }
  };

  coords = (evt) => {
    const e = evt.target;
    const dim = e.getBoundingClientRect();
    const x = Math.round((evt.clientX - dim.left) * 100) / 100;
    const y = Math.round((evt.clientY - dim.top) * 100) / 100;
    return { x, y };
  }

  click = (evt) => {
    const { x, y } = this.coords(evt);
    const lineConstructor = line()
      .x(d => d.x)
      .y(d => d.y);
    this.setState((state) => {
      state.drawing.points.push({ x, y });
      state.drawing.dragLine = undefined;
      state.drawing.drawingLine = lineConstructor(state.drawing.points);
      return state;
    });
    this.props.createPoint({
      x: Math.round((this.scaleX.invert(x)) * 100) / 100,
      y: Math.round((this.scaleY.invert(y)) * 100) / 100,
    });
  }

  drag = (evt) => {
    const { points } = this.state.drawing;
    if (points.length > 0) {
      const lineConstructor = line()
        .x(d => d.x)
        .y(d => d.y);
      const lastPoint = points[points.length - 1];
      const cursor = this.coords(evt);
      const dragLine = lineConstructor([lastPoint, cursor]);
      this.setState((state) => {
        state.drawing.dragLine = dragLine;
        return state;
      });
    }
  }

  renderChart = (chart, size) => {
    const sections = [];
    this.scaleY.range([0, size]);
    this.scaleX.range([0, size]);
    const lineConstructor = line()
      .x(d => this.scaleX(d.x))
      .y(d => this.scaleY(d.y));
    for (let j = 0; j < chart.sections.length; j += 1) {
      const section = chart.sections[j];
      const data = lineConstructor(section.coords);
      const text = {
        name: section.name,
        x: this.scaleX(section.centroid.x),
        y: this.scaleY(section.centroid.y),
      };
      sections.push({ data, index: j, text });
    }
    this.setState({
      sections,
      chart,
    });
  }

  render() {
    const { sections, drawing: { points, drawingLine, dragLine } } = this.state;
    const { listen, size } = this.props;
    const fontSize = \`\${size / 50}px\`;
    return (
      <div
        className="seating-chart"
      >
        <svg
          height={size}
          width={size}
          className="chart"
        >
          <image
            xlinkHref="/public/images/teams/usc-trojans-football/seatingChart/la-memorial-coliseum.jpg"
            height={size}
            width={size}
          />
          {sections.map(section => (
            <g>
              <path
                d={section.data}
                fill="#ffffff"
              />
              <path
                onClick={() => { this.handleSectionClick(section.index); }}
                d={section.data}
                stroke="rgb(14, 90, 138)"
                fill="rgba(14, 90, 138, 0.13)"
              />
              <text
                fontSize={fontSize}
                textAnchor="middle"
                alignmentBaseline="middle"
                x={section.text.x}
                y={section.text.y}
              >{section.text.name}
              </text>
            </g>
        ))}
          {drawingLine &&
          <path
            d={drawingLine}
            stroke="rgb(28, 138, 14)"
            fill="rgba(28, 138, 14, 0.23)"
          />
        }
          {dragLine &&
          <path
            d={dragLine}
            stroke="rgb(0, 87, 0)"
          />
        }
          {points.map(point => (
            <circle cx={point.x} cy={point.y} r={size / 150} />
        ))}
          {listen && <rect
            x="0"
            y="0"
            fill="transparent"
            width={size}
            height={size}
            onMouseDown={this.click}
            onMouseMove={this.drag}
          />}
        </svg>
      </div>
    );
  }
}


export default SeatingChart;
`;

const links = [];

export default {
  code,
  links,
};
