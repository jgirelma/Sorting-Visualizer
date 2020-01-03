import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles";
import Slider from "./Slider/Slider";
import Menu from "./Menu/Menu";

import Button from '@material-ui/core/Button';

const Nav = React.memo(function Nav(props) {

    const {classes} = props;
    return (
      <nav>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Sorting Visualzier
            </Typography>
            <Button variant="contained" onClick={props.sort}>Start Sort</Button>
            <Menu 
            updateMethod={(m) => {props.sortMethodSelector(m)}}/>
            <Slider 
            text="Size of Array"
            setValue={props.setSize}
            default={30}/>
          </Toolbar>
          
        </AppBar>
      </nav>
      
    );
  });




export default withStyles(styles)(Nav);
