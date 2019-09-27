import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { Grid, Container, CircularProgress } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { NotFoundBoundary, useLoadingRoute } from 'react-navi';
import { red, grey } from '@material-ui/core/colors';
import { NavigationProvider } from '../../stores/NavigationStore';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: grey
  }
});

const useStyles = makeStyles(theme => ({}));

export default function App({ children }) {
  const isLoadingRoute = useLoadingRoute();

  return (
    <ThemeProvider theme={theme}>
      <NavigationProvider>
        <NotFoundBoundary render={renderNotFound}>
          <LoadingIndicator isLoading={isLoadingRoute}>
            {children}
          </LoadingIndicator>
        </NotFoundBoundary>
      </NavigationProvider>
    </ThemeProvider>
  );
}

function renderNotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
    </div>
  );
}

function LoadingIndicator({ isLoading, children }) {
  const classes = useStyles();

  if (isLoading) {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.loadingContainer}
      >
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  }

  return children;
}
