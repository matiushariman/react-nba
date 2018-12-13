/**
 *
 * TeamField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Text from 'components/Text';
import { BASKETBALL_ICON } from 'utils/assets/url';

import { GridContainer } from './Atoms';

function TeamField(props) {
  const { logo, name, score } = props;

  return (
    <GridContainer container alignItems="center">
      <Grid item xs={2}>
        <img src={logo} alt={name} height="35" width="35" />
      </Grid>
      <Grid item xs={8}>
        <Text fontWeight="bold">{name}</Text>
      </Grid>
      <Grid item xs={2}>
        {score}
      </Grid>
    </GridContainer>
  );
}

TeamField.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
  score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TeamField.defaultProps = {
  name: 'N/A',
  logo: BASKETBALL_ICON,
  score: '-',
};

export default TeamField;
