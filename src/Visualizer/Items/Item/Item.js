import React from 'react';
import styles from "./styles";
import { withStyles } from '@material-ui/core/styles';



const Item = React.memo((props) => (
    <div className={props.classes.item}></div>
  ));

export default withStyles(styles)(Item);