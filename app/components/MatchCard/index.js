/**
 *
 * MatchCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import TeamField from './TeamField';

function MatchCard() {
  return (
    <Card>
      <CardContent>
        <TeamField />
        <TeamField />
      </CardContent>
      <CardActions>
        <Button size="small">Game Detail</Button>
      </CardActions>
    </Card>
  );
}

MatchCard.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default MatchCard;
