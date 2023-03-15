import styled from 'styled-components';
import * as Tooltip from '@radix-ui/react-tooltip';
import {
  SlideDownAndFadeIn,
  SlideLeftAndFadeIn,
  SlideRightAndFadeIn,
  SlideUpAndFadeIn
} from '../../../styles';

export const Root = styled(Tooltip.Root)``;
export const Provider = styled(Tooltip.Provider)``;
export const Portal = styled(Tooltip.Portal)``;
export const Arrow = styled(Tooltip.Arrow)`
  fill: ${p => p.theme.surface.content};
`;

export const Content = styled(Tooltip.Content)`
  z-index: 9999;
  border-radius: ${p => p.theme.borderRadii.normal};
  padding: 8px 13px;
  font-size: ${p => p.theme.fontSizes.normal};
  line-height: 1;

  color: ${p => p.theme.surface.text};
  background-color: ${p => p.theme.surface.content};

  box-shadow: ${p => p.theme.boxShadows.normal};

  animation-duration: 400ms;
  transition: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state='delayed-open'][data-side='top'] {
    animation-name: ${SlideDownAndFadeIn};
  }

  &[data-state='delayed-open'][data-side='right'] {
    animation-name: ${SlideLeftAndFadeIn};
  }

  &[data-state='delayed-open'][data-side='bottom'] {
    animation-name: ${SlideUpAndFadeIn};
  }

  &[data-state='delayed-open'][data-side='left'] {
    animation-name: ${SlideRightAndFadeIn};
  }
`;
