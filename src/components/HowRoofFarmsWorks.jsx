import React from 'react'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Grid from '@material-ui/core/Grid';
import '../css files/HowRoofFarmsWorks.css'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    arrow: {color:'rgb(255, 174, 0)', 
            fontSize: '18px'},
    subtitle: {fontSize: '18px',
                fontWeight: 'bold'},
    howtext: {lineHeight: '22px'}
});

function HowRoofFarmsWorks(){
    const classes = useStyles();

    return(
        <div>
            <Grid container>   
                <Grid item lg={6} id='rf-text'>
                    <h1 id='rf-title'>HOW ROOF FARMS WORKS</h1>
                    <ul id="ul-rooffarm">
                        <li>
                            <span className={classes.subtitle}><DoubleArrowIcon className={classes.arrow}/> Infrastructure</span><br/>
                            <span className={classes.howtext}>Roofs are designed, first and foremost, to protect the buildings below them. Before you put plants on your rooftop, make sure you’re working with a solid roof and that you have permission from the building’s owner, as well as preventing structural damage, evaluating the structure, waterproofing and weight</span>
                        </li><br/>
                        <li>
                            <span className={classes.subtitle}><DoubleArrowIcon className={classes.arrow}/> Location</span><br/>
                            <span className={classes.howtext}>Rooftops are full of funky microclimates. Shadow projections, hot spots, damp zones, and wind all affect which plants will thrive in your new garden. Make a practice of observing how weather events like rainstorms and heat waves affect your roof. Access to water is an important factor to consider, particularly if you’re growing vegetables.</span>
                        </li><br/>
                        <li>
                            <span className={classes.subtitle}><DoubleArrowIcon className={classes.arrow}/> What do you want to grow?</span><br/>
                            <span className={classes.howtext}>You’ll want to choose a growing system based on your plant interests, climate, microclimate, local code, and budget. For example, a commercial grower in a four-season climate with an interest in growing year-round might start with a greenhouse system. Small-scale residential gardeners might want to go with a lower-budget, temporary container garden.</span>
                        </li><br/>
                        <li>
                            <span className={classes.subtitle}><DoubleArrowIcon className={classes.arrow}/> Time to start growing</span><br/>
                            <span className={classes.howtext}>Now you can start to flip through seed catalogues and select crops with the untrammeled optimism particular to gardeners before they’ve faced their first crop failure. All plants will try to grow their roots, stems, and leaves. Because of that, edible leaf crops are a good go-to for starter gardens. Selecting plants with edible flowers and seeds are a good workaround. Herbs suit this parameter particularly well, as their flowers and seeds are often delicious. </span>
                        </li>
                    </ul>
                </Grid>
                <Grid item lg={6} id="rf-image">
                </Grid>
            </Grid>
        </div>
    )
}

export default HowRoofFarmsWorks