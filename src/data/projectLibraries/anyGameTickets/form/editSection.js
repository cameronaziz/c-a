const code = `import React, { Component, Fragment } from 'react';
import { FormControl, InputLabel, Input, Table, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core';
import { Button } from '../../../../Material';

class EditSection extends Component {
  state = {
    updatePending: false,
    previewed: false,
    addCoord: false,
    editingCoordIndex: undefined,
    coordinatesVisible: false,
  }

  toggleCoordinates = () => {
    const { coordinatesVisible } = this.state;
    this.setState({
      coordinatesVisible: !coordinatesVisible,
    });
  }

  editCoord = (editingCoordIndex) => {
    const currentEditCoord = this.state.section.coords[editingCoordIndex];
    this.setState({
      currentEditCoord: {
        x: currentEditCoord.x,
        y: currentEditCoord.y,
      },
      editingCoordIndex,
    });
  }

  addCoord = () => {
    this.setState({
      currentEditCoord: {
        x: '',
        y: '',
      },
      addCoord: true,
      editingCoordKey: undefined,
      editingCoordIndex: undefined,
    });
  }

  updateField = (targetField, value) => {
    this.setState((state) => {
      state.section[targetField] = value;
      return state;
    });
  }

  updateCoord = (targetField, value) => {
    this.setState((state) => {
      state.currentEditCoord[targetField] = parseFloat(value) || state.currentEditCoord[targetField];
      return state;
    });
  }

  writeCoord = (index) => {
    this.setState((state) => {
      if (typeof index !== 'undefined') {
        state.section.coords[index] = state.currentEditCoord;
      } else {
        state.section.coords.push(state.currentEditCoord);
      }
      state.currentEditCoord = {
        x: '',
        y: '',
      };
      state.editingCoordIndex = undefined;
      state.updatePending = true;
      state.previewed = false;
      return state;
    });
  }

  update = () => {
    this.props.updateChart(this.state.section);
  }

  render() {
    const {
      coordinatesVisible, editingCoordIndex, addCoord, currentEditCoord, updatePending, previewed,
    } = this.state;
    const { size, section } = this.props;
    const height = \`\${size * 1.3}px\`;
    return (
      <div >
        <FormControl style={{ display: 'block' }} >
          <InputLabel>Sectoin Name</InputLabel>
          <Input
            value={section.name || ''}
            onChange={(event) => { this.updateField('name', event.target.value); }}
          />
        </FormControl>
        {updatePending &&
        <Button style={{ display: 'inline-block' }} onClick={this.update}>
          {previewed ? 'Save' : 'Preview'}
        </Button>}
        <Button onClick={this.toggleCoordinates}>
        Coordinates
        </Button>
        {coordinatesVisible &&
        <div style={{ overflow: 'auto', height, position: 'relative' }} >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>X</TableCell>
                <TableCell>Y</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {section.coords && section.coords.map((n, i) => (
                <TableRow key={i}>
                  <TableCell style={{ padding: '4px 10px' }}>
                    {editingCoordIndex === i
                    ? <Input
                      value={currentEditCoord.x}
                      onChange={(event) => { this.updateCoord('x', event.target.value); }}
                    />
                : <span>{n.x}</span>
                }
                  </TableCell>
                  <TableCell style={{ padding: '4px 10px' }} >
                    {editingCoordIndex === i
                    ? <Input
                      value={currentEditCoord.y}
                      onChange={(event) => { this.updateCoord('y', event.target.value); }}
                    />
                : <span>{n.y}</span>
                }
                  </TableCell>
                  <TableCell style={{ padding: '4px 10px' }} >
                    {editingCoordIndex === i
                    ? <Button color="primary" onClick={() => { this.writeCoord(i); }}>Save</Button>
                    : <Button onClick={() => { this.editCoord(i); }}>Edit</Button>}
                  </TableCell>
                </TableRow>
            ))}
              <TableRow>
                {/* {addCoord &&
                <Fragment>
                  <TableCell style={{ padding: '4px 10px' }} >
                    <Input
                      value={currentEditCoord.x}
                      onChange={(event) => { this.updateCoord('x', event.target.value); }}
                    />
                  </TableCell>TextTrackCue
                  <TableCell style={{ padding: '4px 10px' }} >
                    <Input
                      value={currentEditCoord.x}
                      onChange={(event) => { this.updateCoord('y', event.target.value); }}
                    />
                  </TableCell>
                  <TableCell style={{ padding: '4px 10px' }} >
                    <Button onClick={() => { this.writeCoord(); }}>
                      Save
                    </Button>
                  </TableCell>
                </Fragment>
          } */}
              </TableRow>
            </TableBody>
          </Table>
          <Button onClick={this.addCoord}>
              Add Coordinate
          </Button>
        </div>}
      </div>
    );
  }
}

export default EditSection;`;

const links = [];

export default {
  code,
  links,
};
