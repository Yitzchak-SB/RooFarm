import React from 'react'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import EcoIcon from '@material-ui/icons/Eco';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import '../css files/RoofFarmsBenefits.css'
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    icons: {marginTop: '50px', 
            marginLeft: '140px',
            fontSize: '60px',
            color: 'rgb(65, 148, 93)'},
    texts: {padding: '20px'}
});


function RoofFarmsBenefits(){
    const classes = useStyles();

    return(
        <div id='benefits-wrapper'>
            <h1 id="benefits-title">WHAT ARE THE ROOF FARM BENEFITS</h1>
            <Grid container>
                <Grid item lg={3}>
                    <EmojiObjectsIcon className={classes.icons} id='first-icon'/>
                    <p className={classes.texts}>Enhance the urban landscape (and human well-being). Rooftop farms literally make cities greener. Studies have found that exposure to nature provides an array of psychological benefits.</p>
                </Grid>
                <Grid item lg={3}>
                    <EcoIcon className={classes.icons} id='second-icon'/>
                    <p className={classes.texts}>Make cities more eco-friendly. Bare roofs in cities absorb and then radiate heat. This increases energy usage and contributes to the poor air quality that often plagues big cities. </p>
                </Grid>
                <Grid item lg={3}>
                    <LocalShippingIcon className={classes.icons} id='third-icon'/>
                    <p className={classes.texts}>Reduce of carbon emissions and so environmental impact of food transportation. Allows for produce to be picked at just the right time</p>
                </Grid>
                <Grid item lg={3}>
                    <AssignmentTurnedInIcon className={classes.icons} id='fourth-icon'/>
                    <p className={classes.texts}>Increase the availability of real, healthy food. A completely organic form of farming. This means it often has no pesticides or insecticides.</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default RoofFarmsBenefits