/* eslint operator-linebreak: 0 */
/* eslint no-return-assign: 0 */

import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import './_Slider.scss';
import IconButton from '../IconButton';

class SliderComponent extends Component {
  constructor() {
    super();
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  prev() {
    this.slider.slickPrev();
  }

  render() {
    const {
      settings, children, title, subTitle,
    } = this.props;

    const innerSettings = {
      dots: settings.dots,
      infinite: settings.infinite,
      slidesToShow: settings.slidesToShow,
      slidesToScroll: settings.slidesToScroll,
      rows: settings.rows,
      centerMode: true,
      slidesPerRow: settings.slidesPerRow,
      centerPadding: settings.centerPadding,
      responsive: [...settings.responsive],
    };
    return (
      <section className="slider">
        <div className="slider__header">
          <header className="slider__header-text">
            <h3 className="slider__title">{title}</h3>
            <p className="slider__subtitle">{subTitle}</p>
          </header>
          <div className="slider__nav-wrapper">
            <IconButton className="slider__nav slider__nav--prev" iconClassName="fas fa-chevron-left" onClick={this.prev} />
            <IconButton className="slider__nav slider__nav--next" iconClassName="fas fa-chevron-right" onClick={this.next} />
          </div>
        </div>
        {children && (
          <Slider
            ref={slider => {
              this.slider = slider;
            }}
            {...innerSettings}
          >
            {children}
          </Slider>
        )}
      </section>
    );
  }
}

SliderComponent.defaultProps = {
  title: '',
  subTitle: '',
  settings: {},
};

SliderComponent.propTypes = {
  title: PropTypes.any,
  subTitle: PropTypes.string,
  settings: PropTypes.object,
};

export default SliderComponent;
