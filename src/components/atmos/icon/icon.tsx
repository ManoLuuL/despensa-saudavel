import { forwardRef } from 'react';
import { IconProps } from './types';
import { Container } from './styles';

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ name, size, elementAttributes, className, style, id, ...props }, ref) => {
    return (
      <Container
        id={id}
        className={className}
        style={style}
        size={size}
        translate="no"
        {...elementAttributes}
        {...props}
        ref={ref}>
        {name}
      </Container>
    );
  }
);
