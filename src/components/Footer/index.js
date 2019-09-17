import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import Material UI components
import {
  Grid,
  Typography,
  Toolbar,
  Link,
} from '@material-ui/core';

// import custom Material UI components
import {
  FooterAppBar,
  FooterButton,
  FooterIcon,
} from 'src/styles/materialUi/materialUiStyles/Footer';

// Material UI Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

const Footer = ({ handleOpen, isLogged, emptySearchResults }) => (
  <div id="Footer">
    <FooterAppBar position="static">
      <Toolbar>

        <Grid container justify="center">
          <Grid item xl={2} lg={1} md={2} sm={2} xs={4}>
            <Grid container justify="center">
              {/* Logo */}
              <NavLink exact to="/search">
                <img src="src/styles/assets/images/logos/logo-owl.png" alt="O’Track logo" id="FooterLogo" />
              </NavLink>
            </Grid>
          </Grid>

          <Grid item xl={4} lg={4} md={4} sm={4} xs={8}>
            <Typography variant="h6">
              All your favorites shows
            </Typography>
            <Typography variant="subtitle2" color="secondary">
              Made with &hearts; by The DreamTeam &copy; 2019
            </Typography>
          </Grid>

          <Grid item xl={5} lg={5} md={4} sm={4} xs={10}>
            <Grid
              container
              justify="center"
              alignItems="center"
            >
              {/* Central buttons */}
              {isLogged === true ? (
                <NavLink exact to="/dashboard" color="inherit" onClick={() => emptySearchResults()}>
                  <FooterButton variant="outlined" color="inherit">
                      Dashboard
                  </FooterButton>
                </NavLink>
              ) : (
                <FooterButton variant="outlined" color="inherit" onClick={() => handleOpen('up')}>
                  REGISTER NOW !
                </FooterButton>
              )}

              <NavLink exact to="/team" onClick={() => emptySearchResults()}>
                <FooterButton color="inherit">TEAM</FooterButton>
              </NavLink>

              <NavLink exact to="/legal" onClick={() => emptySearchResults()}>
                <FooterButton color="inherit">LEGAL</FooterButton>
              </NavLink>

              <NavLink exact to="/contact" onClick={() => emptySearchResults()}>
                <FooterButton color="inherit">CONTACT</FooterButton>
              </NavLink>

            </Grid>
          </Grid>
          <Grid item xl={1} lg={2} md={2} sm={2} xs={2}>
            {/* GitHub icon  */}
            <Link href="https://www.youtube.com/watch?v=MKrpadhcC8g">
              <FooterIcon>
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </FooterIcon>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </FooterAppBar>
  </div>
);

Footer.propTypes = {
  handleOpen: PropTypes.func,
  isLogged: PropTypes.bool.isRequired,
  emptySearchResults: PropTypes.func,
};

Footer.defaultProps = {
  handleOpen: () => { },
  emptySearchResults: () => { },
};

export default Footer;
