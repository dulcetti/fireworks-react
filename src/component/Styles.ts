import styled, { keyframes } from 'styled-components';

const increaseX = keyframes`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
`;

const increaseY = keyframes`
  from {
    transform: scaleY(.1);
  }

  to {
    transform: scaleY(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Fireworks = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  height: 50px;
  left: 50%;
  position: absolute;
  top: 50%;
  width: 50px;

  &:after,
  &:before {
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 4px;
    content: '';
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
  }

  &:after {
    animation: 1s ease-in-out 0s 2 alternate both ${increaseX}, 1s ease-in-out 1.3s 0 ${fadeOut};
    height: 4px;
    margin-left: -23px;
    width: 50px;
  }

  &:before {
    animation: 0.75s ease-in-out 0.65s 2 alternate both ${increaseY},
      1s ease-in-out 1.3s 0 ${fadeOut};
    height: 50px;
    margin-top: -23px;
    width: 4px;
  }
`;

const moveTop = keyframes`
  from {
    margin-top: -5px;
  }

  to {
    margin-top: -23px;
  }
`;

const moveLeft = keyframes`
  from {
    margin-top: -5px;
  }

  to {
    margin-left: -23px;
  }
`;

const moveBottom = keyframes`
  from {
    margin-bottom: -5px;
  }

  to {
    margin-bottom: -23px;
  }
`;

const moveRight = keyframes`
  from {
    margin-bottom: -5px;
  }

  to {
    margin-right: -23px;
  }
`;

export const Dots = styled.div`
  &:after,
  &:before {
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 5px;
    content: '';
    display: block;
    height: 5px;
    position: absolute;
    width: 5px;
  }

  &.bottom {
    &:after,
    &:before {
      right: 50%;
      bottom: 50%;
    }

    &:after {
      animation-delay: 0.65s;
      animation-direction: alternate;
      animation-duration: 0.75s;
      animation-fill-mode: both;
      animation-iteration-count: 2;
      animation-name: ${moveRight};
      animation-timing-function: ease-in-out;
    }

    &:before {
      animation-delay: 0.65s;
      animation-direction: alternate;
      animation-duration: 0.75s;
      animation-fill-mode: both;
      animation-iteration-count: 2;
      animation-name: ${moveBottom};
      animation-timing-function: ease-in-out;
    }
  }

  &.top {
    &:after,
    &:before {
      left: 50%;
      top: 50%;
    }

    &:after {
      animation-delay: 0.65s;
      animation-direction: alternate;
      animation-duration: 0.75s;
      animation-fill-mode: both;
      animation-iteration-count: 2;
      animation-name: ${moveLeft};
      animation-timing-function: ease-in-out;
    }

    &:before {
      animation-delay: 0.65s;
      animation-direction: alternate;
      animation-duration: 0.75s;
      animation-fill-mode: both;
      animation-iteration-count: 2;
      animation-name: ${moveTop};
      animation-timing-function: ease-in-out;
    }
  }
`;
