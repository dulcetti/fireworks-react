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
    transform: scaleY(0);
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
    animation: 0.75s ease-in-out 0s 2 alternate both ${increaseX},
      0.75s ease-in-out 1.05s 0 ${fadeOut};
    height: 4px;
    margin-left: -23px;
    width: 50px;
  }

  &:before {
    animation: 0.5s ease-in-out 0.5s 2 alternate both ${increaseY}, 1s ease-in-out 1.3s 0 ${fadeOut};
    height: 50px;
    margin-top: -23px;
    width: 4px;
  }
`;

const moveTop = keyframes`
  from {
    margin-top: -3px;
    opacity: 1;
  }

  to {
    margin-top: -25px;
    opacity: 0;
  }
`;

const moveLeft = keyframes`
  from {
    margin-left: -3px;
    opacity: 1;
  }

  to {
    margin-left: -25px;
    opacity: 0;
  }
`;

const moveBottom = keyframes`
  from {
    margin-bottom: -3px;
    opacity: 1;
  }

  to {
    margin-bottom: -25px;
    opacity: 0;
  }
`;

const moveRight = keyframes`
  from {
    margin-right: -3px;
    opacity: 1;
  }

  to {
    margin-right: -25px;
    opacity: 0;
  }
`;

export const Dots = styled.div`
  &:after,
  &:before {
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 4px;
    content: '';
    display: block;
    height: 4px;
    opacity: 0;
    position: absolute;
    width: 4px;
  }

  &.bottom {
    &:after,
    &:before {
      bottom: 50%;
      margin: 0px -3px -3px 0;
      right: 50%;
    }

    &:after {
      animation: 0.75s ease-in-out 1s 1 normal both ${moveRight};
    }

    &:before {
      animation: 0.75s ease-in-out 1s 1 normal both ${moveBottom};
    }
  }

  &.top {
    &:after,
    &:before {
      left: 50%;
      margin: -3px 0 0 -3px;
      top: 50%;
    }

    &:after {
      animation: 0.75s ease-in-out 1s 1 normal both ${moveLeft};
    }

    &:before {
      animation: 0.75s ease-in-out 1s 1 normal both ${moveTop};
    }
  }
`;
