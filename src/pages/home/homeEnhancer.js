import { compose, withStateHandlers, lifecycle } from 'recompose';
import { withMainSlider } from 'hocs';
import window from 'global/window';

export default compose(
  withStateHandlers(
    () => ({
      width: window.innerWidth,
    }),
    {
      updateWidth: () => () => ({ width: window.innerWidth }),
    },
  ),
  lifecycle({
    componentDidMount() {
      window.addEventListener('resize', this.props.updateWidth);
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWidth);
    },
  }),
  withMainSlider,
);
