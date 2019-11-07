import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = {
    Paper:{
        padding:20, marginTop:10, marginBottom:10
    }
}

export default props =>
<Grid container>
<Grid item sm>
    <LeftPane styles={styles}/>
</Grid>
<Grid item sm>
    <RightPane styles={styles}/>
</Grid>
</Grid>