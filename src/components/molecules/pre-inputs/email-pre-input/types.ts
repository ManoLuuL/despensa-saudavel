import { TextInputProps } from '../../inputs/text-input/types';

type OmittedProps = {
  placeholder: unknown;
};

type EmailInputProps<Controller> = Omit<
  TextInputProps<Controller>,
  keyof OmittedProps
>;

export type EmailPreInputProps<Controller = null> =
  EmailInputProps<Controller> & {
    name?: string;
  };
