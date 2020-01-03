import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles({
  root: {
    width: 250,    
  },
  input: {
    width: 42,
    color: green[500]
  },
  slider: {
    color: green[500]
  }
});

export default React.memo(function InputSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.default);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    props.setValue(newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 180) {
      setValue(180);
    }
  };

  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom>
        {props.text}
      </Typography>
      <Grid container spacing={1} >
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            className={classes.slider}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 20,
              min: 0,
              max: 180,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
});