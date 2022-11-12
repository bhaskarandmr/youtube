import React from 'react'
import { Grid, Typography, Switch } from '@material-ui/core'

const DarkMode = ({onChange}) => {
    return (
        <Grid alignItems="center" justify="center" container spacing={2}>
            <Typography></Typography>
            <Switch onChange={onChange} color="primary"></Switch>
        </Grid>
    )
}

export default DarkMode;
