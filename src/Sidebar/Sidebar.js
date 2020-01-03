import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import Controls from './Controls/Controls';
import ExampleWrapper from './VirtualizedList/VirtualizedList';

const drawerWidth = 380;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    
  },
  hide: {
    display: 'none',
  },
  drawer: {
    height: 'auto',
    flexShrink: 0,
    zIndex:  1,
    width: drawerWidth,
    whiteSpace: 'nowrap',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  drawerOpen: {
    top: 300,
    height: 'auto',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  transition: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    top: 300,
    height: 'auto',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(4) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  content: {
    padding: theme.spacing(3),
  },
}));

export default React.memo(function Sidebar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const toggle = () => {
    if(open){
      setOpen(false);
    } else {
      setOpen(true);
    }
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
          <div className={classes.toolbar}>
          <IconButton onClick={toggle}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          </div>
        <Divider />
        {open ? (
          <Grid
          className={clsx(classes.transition)}
          container
          direction="row">

            <Grid item>
            <Controls 
            nextInstruction={props.nextInstruction}
            toggleSort={props.toggleSort}
            isSorting={props.isSorting}
            finishedSorting={props.finishedSorting}
            goBackOneInstruction={props.goBackOneInstruction}/>
            
            </Grid>

            <Grid item>
            <Divider orientation="vertical" />
            </Grid>

            <Grid 
            
            item>
              <ExampleWrapper
              
              instructions={props.instructions}
              instruction={props.instruction}
              goToInstruction={props.goToInstruction}/>
            </Grid>
          </Grid>
        ) : (
          <Controls 
          nextInstruction={props.nextInstruction}
          toggleSort={props.toggleSort}
          isSorting={props.isSorting}
          finishedSorting={props.finishedSorting}
          goBackOneInstruction={props.goBackOneInstruction}/>
        )}
        
      </Drawer>
    </div>
  );
          });
          