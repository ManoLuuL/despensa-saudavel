import { FC } from 'react';
import { StepperProps } from './types';
import { Container } from './styles';
import { Steps } from 'primereact/steps';

export const Stepper: FC<StepperProps> = props => {
  const { id, currentStep, steps, className, style, elementAttributes } = props;

  return (
    <Container>
      <Steps
        id={id}
        style={style}
        className={className}
        model={steps.map(step => ({ label: step }))}
        readOnly={true}
        activeIndex={currentStep}
        {...elementAttributes}
      />
    </Container>
  );
};
