/* eslint operator-linebreak: 0 */

import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import Prev from 'resources/assets/svg/prev.svg'
import Next from 'resources/assets/svg/next.svg'

const Img = styled.img`
  display: block;
  cursor: pointer;
  z-index: 1;
  height: 30px;
  position: absolute;
  margin-top: 20px;
  ${p => p.right && `right: ${p.right}px`};
`

const PrevArrow = (
  { onClick }, // eslint-disable-line
) => <Img right={15} src={Prev} onClick={onClick} />

const NextArrow = (
  { onClick }, // eslint-disable-line
) => <Img right={-1} src={Next} onClick={onClick} />

const Container = styled.div`
  min-height: 543px;
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    /* max-width: 1100px; */
    margin: auto;
    margin-top: 64.2px;
    display: flex;
    overflow: hidden;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    max-height: 950px !important;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;

    content: '';
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }
  /* .slick-slide > div{
    display:flex;f
    flex-direction:column;
  } */
  [dir='rtl'] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: transparent;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 1;
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.25;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;

    opacity: 0.75;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev {
    left: -25px;
  }
  [dir='rtl'] .slick-prev {
    right: -25px;
    left: auto;
  }
  .slick-prev:before {
    content: '←';
  }
  [dir='rtl'] .slick-prev:before {
    content: '→';
  }

  .slick-next {
    right: -25px;
  }
  [dir='rtl'] .slick-next {
    right: auto;
    left: -25px;
  }
  .slick-next:before {
    content: '→';
  }
  [dir='rtl'] .slick-next:before {
    content: '←';
  }

  /* Dots */
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    position: absolute;
    bottom: -25px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
  }
  .slick-dots li {
    position: relative;

    display: inline-block;

    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;

    cursor: pointer;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 20px;
    height: 20px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-family: 'slick';
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '•';
    text-align: center;

    opacity: 0.25;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: black;
  }
`

const Override = styled.div`
  .slick-slider {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: auto;
    max-width: 1200px;
    @media screen and (max-width: 1154px) {
      width: 1000px;
    }

    @media screen and (max-width: 1050px) {
      width: 700px;
    }

    @media screen and (max-width: 751px) {
      width: 400px;
    }

    @media screen and (max-width: 500px) {
      width: 350px;
    }
  }

  .slick-slide {
    display: flex !important;
    @media screen and (max-width: 1154px) {
      justify-content: center;
    }
  }

  .slick-initialized .slick-slide {
    max-width: 1200px !important;
  }
  .slick-current ~ .slick-slide {
    justify-content: center;
  }

  .slick-current ~ .slick-slide ~ .slick-slide {
    justify-content: flex-end;
  }

  .slick-current {
    justify-content: flex-start !important;
    > div {
      width: 100%;
    }
  }
`

const SliderComponent = ({ children, settings }) => {
  const innerSettings = {
    dots: settings.dots,
    infinite: settings.infinite,
    slidesToShow: settings.slidesToShow,
    slidesToScroll: settings.slidesToScroll,
    rows: settings.rows,
    centerMode: true,
    slidesPerRow: settings.slidesPerRow,
    centerPadding: settings.centerPadding,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [...settings.responsive],
  }

  return (
    <Container>
      <Override>
        {innerSettings &&
          children && <Slider {...innerSettings}>{children}</Slider>}
      </Override>
    </Container>
  )
}

export default SliderComponent
