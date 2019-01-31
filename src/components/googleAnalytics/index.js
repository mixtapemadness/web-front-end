import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Route } from 'react-router-dom';
import window from 'global/window';
import { GA_TRACKING_CODE } from '../../constants';

class GoogleAnalytics extends Component {
  componentDidMount() {
    ReactGA.initialize(GA_TRACKING_CODE);
    const {
      location: { pathname, search },
    } = this.props;
    this.logPageChange(pathname, search);
  }

  componentDidUpdate({ location: prevLocation }) {
    const {
      location: { pathname, search },
    } = this.props;
    const isDifferentPathname = pathname !== prevLocation.pathname;
    const isDifferentSearch = search !== prevLocation.search;
    if (isDifferentPathname || isDifferentSearch) {
      this.logPageChange(pathname, search);
    }
  }

  logPageChange(pathname, search = '') {
    const page = pathname + search;
    const { location } = window;
    const { options } = this.props;
    ReactGA.set({
      page,
      location: `${location.origin}${page}`,
      options,
    });
    ReactGA.pageview(page);
  }

  render() {
    return null;
  }
}

const RouteTracker = () => <Route component={GoogleAnalytics} />;

export default {
  GoogleAnalytics,
  RouteTracker,
};
