import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
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
      settings, children, title, subTitle, cta,
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
            <div className="slider__cta">{cta}</div>
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
  settings: {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    rows: 3,
    slidesPerRow: 2,
    slidesToScroll: 3,
    slidesToShowResponsive: 2,
    slidesToScrollResponsive: 2,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1154,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 751,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          slidesPerRow: 1,
        },
      },
    ],
  },
  cta: null,
};

SliderComponent.propTypes = {
  title: PropTypes.any,
  subTitle: PropTypes.string,
  settings: PropTypes.object,
  cta: PropTypes.any,
};

export default SliderComponent;
