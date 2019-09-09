import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Typography,
  Toolbar,
} from '@material-ui/core';

import {
  FooterAppBar,
  FooterButton,
  FooterIcon,
} from 'src/styles/materialUi/materialUiStyles/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import LogFormsModal from 'src/containers/LogForms';

import './Footer.scss';

class Footer extends React.Component {
  handleButtonClick = (event) => {
    event.preventDefault();
    const viewName = 'Sign up';
    const { handleOpen } = this.props;
    handleOpen(viewName);
  }

  render() {
    const { open, viewModal } = this.props;
    return (
      <div id="Footer">
        <FooterAppBar position="static">
          <Toolbar>

            <Grid container>
              <Grid item lg={1} md={1} xs={1}>
                {/* Logo */}
                <img src="src/styles/assets/images/logos/logo-owl.png" alt="O’Track logo" id="FooterLogo" />
              </Grid>

              <Grid item lg={4} md={3} xs={3}>
                <Typography variant="h6">
                  All your favorites shows
                </Typography>
                <Typography variant="subtitle2" color="secondary">
                  Made with &hearts; by The DreamTeam &copy; 2019
                </Typography>
              </Grid>

              <Grid item lg={5} md={7} xs={7}>
                {/* Central buttons */}
                <FooterButton variant="outlined" color="inherit" onClick={this.handleButtonClick}>
                  REGISTER NOW !
                </FooterButton>
                {open === true && <LogFormsModal viewModal={viewModal} />}

                <FooterButton color="inherit">TEAM</FooterButton>
                <FooterButton color="inherit">LEGAL</FooterButton>
                <FooterButton color="inherit">CONTACT</FooterButton>

              </Grid>
              <Grid item lg={2} md={1} xs={1}>
                {/* GitHub icon  */}
                <FooterIcon>
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </FooterIcon>
              </Grid>
            </Grid>
          </Toolbar>
        </FooterAppBar>
      </div>
    );
  }
}

Footer.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func,
  viewModal: PropTypes.string,
};

Footer.defaultProps = {
  open: false,
  handleOpen: () => {},
  viewModal: '',
};

export default Footer;
