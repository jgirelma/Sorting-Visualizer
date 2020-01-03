import React, { PureComponent, memo } from 'react';
import { FixedSizeList as List, areEqual } from 'react-window';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import styles from "./Styles";

class ExampleWrapper extends PureComponent {

  constructor() {
    super();
    this.state = {
      ref: React.createRef(),
    }
  }

  componentDidMount() {
    this.state.ref.current.scrollToItem(this.props.instruction, "start");
  }

  componentDidUpdate() {
    this.state.ref.current.scrollToItem(this.props.instruction, "start");
  }

  render() {
    return (
      <List
        ref={this.state.ref}
        height={350}
        itemCount={this.props.instructions.length}
        itemData={{items:this.props.instructions, instruction: this.props.instruction}}
        itemSize={48}
        width={290}
        
      >
        {this.Row}
      </List>
    );
  }

  goToInstruction = (event, index) => {
    this.props.goToInstruction(index);
  }

// If list items are expensive to render,
// Consider using PureComponent to avoid unnecessary re-renders.
// https://reactjs.org/docs/react-api.html#reactpurecomponent
   Row = memo(({ data, index, style }) => {
  // Data passed to List as "itemData" is available as props.data
    const instruction = data["instruction"]
    const item = data["items"][index]

    return (
      <Paper>
        <div style={style} onClick={event => this.goToInstruction(event,index)} className={index === instruction ? this.props.classes.selected : this.props.classes.root}>
          {item}
        </div>
      </Paper>
    );
  }, areEqual);
}
export default withStyles(styles)(ExampleWrapper);