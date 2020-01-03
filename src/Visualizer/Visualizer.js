import React from 'react';
import Item from './Items/Item/Item';
import Grid from '@material-ui/core/Grid';
import grey from "@material-ui/core/colors/grey";
import cyan from '@material-ui/core/colors/cyan';
import lightGreen from '@material-ui/core/colors/lightGreen';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';


const Visualizer = (props) => (
    <Grid
                    className={props.classes.root}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={4}
                    >
                    
                    {
                    props.array.map((val, index) => {
                        let color = grey[500];
                        if (index === props.pointerA) {
                            color = cyan["A200"];
                        } else if (index === props.pointerB) {
                            color = lightGreen["A400"];
                        }
                        return (
                            
                            
                            <Item
                            key={index}
                            height={val}
                            width={10}
                            color={color}/>
                            
                        );
                    })
                }
                </Grid>  
);


export default withStyles(styles)(Visualizer);