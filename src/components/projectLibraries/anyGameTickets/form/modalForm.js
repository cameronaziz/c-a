import seatingChart from './seatingChart';
import editSection from './editSection';

const code = `import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

import { Button } from '../../../../Material';
import { exportChart } from '../utils';
import SeatingChart from '../../../../SeatingChart';
import EditSection from './EditSection';

class ModalForm extends Component {
  state = {
    bigChart: false,
    listen: false,
    section: undefined,
    seatingChart: JSON.parse(JSON.stringify(this.props.seatingChart)),
  }

  clickSection = (sectionIndex) => {
    const section = this.state.seatingChart.sections[sectionIndex];
    this.setState({
      section,
    });
  }

  addSection = () => {
    this.setState({
      section: {
        coords: [],
      },
      listen: true,
    });
  }

  doneDrawing = () => {
    this.setState({
      listen: false,
    });
  }

  exportChart = () => {
    exportChart(this.state.seatingChart);
  }

  updateChart = (section) => {
    this.setState((state) => {
      state.seatingChart.sections[state.sectionIndex] = section;
      return state;
    });
  }

  createPoint = (point) => {
    this.setState((state) => {
      state.section.coords.push(point);
      return state;
    });
  }

  toggleChartSize = () => {
    const { bigChart } = this.state;
    this.setState({
      bigChart: !bigChart,
    });
  }

  render() {
    const { vw, vh } = this.props;
    const {
      seatingChart, section, listen, bigChart,
    } = this.state;
    const size = Math.min(vw, vh) * (bigChart ? 0.8 : 0.4);
    return (
      <div
        tabIndex="-1"
        style={{
          width: \`\${vw * 0.8}px\`,
          height: \`\${vh * 0.8}px\`,
          margin: \`\${vh * 0.1}px auto\`,
        backgroundColor: '#fff',
        padding: '20px',
        overflow: 'hidden',
      }}
      >
        <Grid container spacing={24}>
          <Grid item xs={12} md={bigChart ? 12 : 5}>
            <Button
              onClick={this.toggleChartSize}
            >{bigChart ? 'Less Chart' : 'More Chart'}
            </Button>

            {listen
            ? <Button
              color="primary"
              onClick={this.doneDrawing}
            >Done Drawing
            </Button>
            : <Button onClick={this.exportChart}>Export SVG</Button>}
            {seatingChart &&
              <SeatingChart
                listen={listen}
                createPoint={this.createPoint}
                clickSection={this.clickSection}
                size={size}
                chart={seatingChart}
              />}
          </Grid>
          <Grid item xs={12} md={7}>
            {section ? <EditSection updateChart={this.updateChart} section={section} size={size} />
          : <Button onClick={this.addSection}>Add Section</Button> }
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ModalForm;`;

const links = [
  {
    line: 6,
    code: seatingChart,
  },
  {
    line: 7,
    code: editSection,
  },
];

export default {
  code,
  links,
  libraries: ['react'],
};
