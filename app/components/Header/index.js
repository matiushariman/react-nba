/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import colors from 'utils/styles/colors';
import { NBA_LOGO } from 'utils/assets/url';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  colorPrimary: {
    backgroundColor: colors.primary,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar
        classes={{ colorPrimary: classes.colorPrimary }}
        position="static"
        color="primary"
      >
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <img src={NBA_LOGO} alt="logo" height="30" width="80" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
