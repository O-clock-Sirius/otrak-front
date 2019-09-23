// import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {
} from '@material-ui/core';

// Material UI custom Components
import {
  IndexScreenPicture,
  IndexContainer,
  IndexButtonReturn,
} from 'src/styles/materialUi/materialUiStyles/Show';

// Local imports
import HeadScreen from 'src/components/Show/HeadScreen';
import ResumeShow from 'src/components/Show/ResumeShow';
import Casting from 'src/components/Show/Casting';
import Loader from 'src/components/Loader';

import './show.scss';

// Icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const Show = ({
  showDetail,
  startFollowingShow,
  // eslint-disable-next-line react/prop-types
  userInfos,
  isLogged,
  handleOpen,
}) => (
  <>
    <IndexScreenPicture image={showDetail.poster}>

      <div className="fond-img">

        <IndexContainer maxWidth="md">

          <NavLink exact to="/search">
            <IndexButtonReturn color="secondary"><ArrowBackIcon />Return</IndexButtonReturn>
          </NavLink>

          {Object.keys(showDetail).length !== 0 ? (
            <>
              <HeadScreen
                showDetail={showDetail}
                startFollowingShow={startFollowingShow}
                userInfos={userInfos}
                isLogged={isLogged}
                handleOpen={handleOpen}
              />
              <ResumeShow showDetail={showDetail} />
              <Casting showDetail={showDetail} />
            </>
          ) : (
            <Loader />
          )}
        </IndexContainer>
      </div>
    </IndexScreenPicture>
  </>
);

Show.propTypes = {
  showDetail: PropTypes.object.isRequired,
  startFollowingShow: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default Show;
