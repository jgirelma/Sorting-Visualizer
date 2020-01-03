import React from 'react';
import Item from './Item/Item';
import grey from "@material-ui/core/colors/grey";
import cyan from '@material-ui/core/colors/cyan';
import lightGreen from '@material-ui/core/colors/lightGreen';
import Grid from '@material-ui/core/Grid';



function Items(props) {

        return (
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-end"
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
    }


export default Items;