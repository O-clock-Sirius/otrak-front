/* eslint-disable react/prefer-stateless-function */

// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Local imports
import Filter from 'src/components/Homepage/Filter';
import SearchResult from 'src/components/Homepage/SearchResult';
import Aired from 'src/components/Homepage/Aired';
import Next from 'src/components/Homepage/Next';

// Material UI Components
import { Box } from '@material-ui/core';

// Material UI custom Components
import {
  HomepageScreenPicture,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

// CSS Local Styling
import './homepage.scss';
// Image
import homeBackgroundImage from './images/background-home-transp50.jpg';

function scroolToTop() {
  window.scrollTo(0, 0);
}


class Homepage extends React.Component {
  componentDidMount() {
    // On load, get the last trendings
    // if the user is logged and has followings shows,
    // Get the next episodes to watch
    const { getTrending, getNext } = this.props;
    getTrending();
    getNext();
    scroolToTop();
  }

  render() {
    const {
      // Search handlers
      searchInputValue,
      storeSearchInputResult,
      // Shows infos
      trendingList,
      getDetailShow,
      nextList,
      // Filters
      sortBy,
      snackOn,
    } = this.props;
    return (
      <div id="HomePage-container">

        <HomepageScreenPicture image={homeBackgroundImage}>

          <div className="fond-img-home">

            {/* Search + Drawer filter */}
            <Filter sortBy={sortBy} />

            {snackOn === true && (
              // <Snackbar
              //   anchorOriginTopCenter
              //   key="top,center"
              //   open
              //   autoHideDuration={5}
              //   ContentProps={{
              //     'aria-describedby': 'message-id',
              //   }}
              //   message={<span id="message-id">I love snacks</span>}
              //   style={{ backgroundColor: '#25e4b4', color: '#fff' }}
              // />
              <Box className="alert-success" id="myelement">
                Changes saved !
              </Box>
            )}

            {(storeSearchInputResult.length > 0) === true && (

              <SearchResult
                storeSearchInputResult={storeSearchInputResult}
                searchInputValue={searchInputValue}
                getDetailShow={getDetailShow}
              />
            )}

            {/* Next to Watch */}
            {(nextList.length > 0) === true && (
              <Next
                nextList={nextList}
                getDetailShow={getDetailShow}
              />
            )}

            {/* Just Aired */}
            <Aired
              trendingList={trendingList}
              getDetailShow={getDetailShow}
            />
          </div>
        </HomepageScreenPicture>
      </div>
    );
  }
}

Homepage.propTypes = {
  // Search
  storeSearchInputResult: PropTypes.array,
  searchInputValue: PropTypes.string.isRequired,
  // Trending
  getTrending: PropTypes.func.isRequired,
  trendingList: PropTypes.array.isRequired,
  // Next
  getNext: PropTypes.func.isRequired,
  nextList: PropTypes.array.isRequired,
  // Show details
  getDetailShow: PropTypes.func.isRequired,
  // Sort By
  sortBy: PropTypes.func.isRequired,
  // Alert
  snackOn: PropTypes.bool,
};

Homepage.defaultProps = {
  storeSearchInputResult: [],
  snackOn: false,
};

export default Homepage;
