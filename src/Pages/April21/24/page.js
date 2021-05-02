import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import background from './Media/card24.jpg'
const useStyles = makeStyles({

    hero: {
        backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
        url(${background})`,
        color: 'red',
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "1.5rem",
        padding: ' 0 4rem',
        lineSpace: '1.52rem'

    }
});
export default function Page() {
    const classes = useStyles();
    return (
        <div className={classes.hero}>
            {/* <img src={background} alt=""/> */}
            Covering a small area within the Yarra Ranges National Park, about a 10 minute drive from the town of Warburton, the forest of exotic pines was planted by the Board of Works in about 1930, meaning the trees are nearing a century of growth.
            <br />
            <br />The Californian Redwoods (Sequoia sempervirens), the tallest tree species in the world, have here grown to about 50m, though in their native forests in North America with a few more centuries under their belt they can reach heights of 115 metres.
            <br />
            <br />One of the most interesting things about a visit is seeing how the introduced species have impacted the landscape. Native eucalypt species, cleared to make way for the plantings, still surround the forest and soften the edges - allowing light and other species to thrive.
            <br />
            <br /> This walk takes you through the pine forest, down to the banks of Cement Creek, up to a clearing and then back around the edges of the pine forest to the entry and car park area.
            <br />
            <br />source: https://walkingmaps.com.au/walk/3983

        </div>
    )
}
