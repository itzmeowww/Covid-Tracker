import React from 'react';
import { Card , CardContent, Typography , Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Cards = ({data:{confirmed,deaths,lastUpdate,recovered}}) =>{
    if(!confirmed)
    return 'Loading....';
    return(
        <div className = {styles.container2}>
            <Grid container justify = "center">
                <Grid item component = {Card} xs = {12} md = {3} className = {styles.infected} style = {{margin:'20px', padding:'20px'}}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant = "h5">
                            <CountUp start = {0} end = {confirmed.value} duration = {2.5} separator = "," />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs = {12} md = {3} className = {styles.recovered}  style = {{margin:'20px' , padding:'20px'}}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant = "h5"><CountUp start = {0} end = {recovered.value} duration = {2} separator = "," /></Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Number of recoveries COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs = {12} md = {3} className = {styles.deaths}  style = {{margin:'20px' , padding:'20px'}}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant = "h5"><CountUp start = {0} end = {deaths.value} duration = {2} separator = "," /></Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}
export default Cards;