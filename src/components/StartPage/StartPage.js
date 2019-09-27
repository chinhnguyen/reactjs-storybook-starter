import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import {
  Box,
  makeStyles,
  Card,
  CardContent,
  Typography,
  Grid,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundImage: 'url(/start-background.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: '100% 100%',
    width: '100%',
    height: '100%'
  },
  card: {
    padding: theme.spacing(2),
    backgroundColor: 'rgba(255, 255, 255, 0.65)'
  },
  image: {
    width: 120,
    height: 120,
    margin: theme.spacing(2)
  },
  title: {
    margin: theme.spacing(2)
  },
  汉语会话: {
    fontFamily: 'Adobe Kaiti Std',
    margin: theme.spacing(2)
  },
  start: {
    width: '80%',
    height: 52,
    margin: theme.spacing(2)
  }
}));

export default function StartPage() {
  const classes = useStyles();

  return useObserver(() => (
    <Grid
      container
      className={classes.main}
      alignItems="center"
      justify="center"
    >
      <Card className={classes.card}>
        <CardContent>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <img className={classes.image} src="/start-logo.png"></img>
            <Typography variant="h4" className={classes.title} gutterBottom>
              CONVERSATIONAL CHINESE
            </Typography>
            <Typography className={classes.汉语会话} variant="h2" gutterBottom>
              汉语会话
            </Typography>
            <Button
              className={classes.start}
              variant="contained"
              color="primary"
            >
              Start
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  ));
}
