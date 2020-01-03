import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ReplayIcon from '@material-ui/icons/Replay';
import PauseIcon from '@material-ui/icons/Pause';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import red from '@material-ui/core/colors/red';

const Controls = React.memo(function Controls(props) {
    
        return (
            <List>
                <ListItem button key={"Start"} onClick={props.toggleSort}>
                    <ListItemIcon>{ props.finishedSorting ? <ReplayIcon style={{color: yellow[800]}} /> : props.isSorting ? <PauseIcon style={{color: red[500]}}/> : <PlayArrowIcon style={{color: green[500]}} />} </ListItemIcon>
                </ListItem>
                    <ListItem button key={"Up"} onClick={props.goBackOneInstruction} >
                    <ListItemIcon><KeyboardArrowUpIcon/></ListItemIcon>
                </ListItem>
                    <ListItem button key={"Down"} onClick={props.nextInstruction}>
                    <ListItemIcon><KeyboardArrowDownIcon/></ListItemIcon>
                </ListItem>
            </List>
        );
    });

export default Controls