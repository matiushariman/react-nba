/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import MatchCard from 'components/MatchCard';

import { GridItem } from './Atoms';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Grid container>
        <GridItem item xs={12} md={4}>
          <MatchCard />
        </GridItem>
        <GridItem item xs={12} md={4}>
          <MatchCard />
        </GridItem>
        <GridItem item xs={12} md={4}>
          <MatchCard />
        </GridItem>
        <GridItem item xs={12} md={4}>
          <MatchCard />
        </GridItem>
      </Grid>
    );
  }
}
