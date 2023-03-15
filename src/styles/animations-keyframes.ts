import { keyframes } from 'styled-components';

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const FadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const SlideUpAndFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SlideRightAndFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const SlideDownAndFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SlideLeftAndFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Rotate360 = keyframes`
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const ScaleUpFunky = keyframes`
  from {
    transform: scale(0.4);
  }
  78% {
    transform: scale(1.3);
  }
  to{
    transform: scale(1);
  }
`;

export const ScaleUp = keyframes`
  from {
    transform: scale(0.4);
  }
  to{
    transform: scale(1);
  }
`;

export const ScaleDown = keyframes`
  from {
    transform: scale(1);
  }
  to{
    transform: scale(0.4);
  }
`;
