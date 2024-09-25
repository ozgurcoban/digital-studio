'use client';

import { motion, MotionProps } from 'framer-motion';
import { Button, ButtonProps } from './button';
// import useDialog from '@/hooks/useDialog';
import ContactForm from '../form/ContactForm';

const MotionButton = motion.create(Button);

const transition = { type: 'spring', stiffness: 400, damping: 10 };

interface AnimatedButtonProps extends Omit<MotionProps, 'onAnimationStart'> {
  children: React.ReactNode;
  size?: 'default' | 'icon' | 'lg' | 'sm';
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined;

  disabled?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  size = 'default',
  type,
  variant = 'default',
  disabled,
  onClick,
  ...props
}) => {
  console.log(type);
  // const setDialog = useDialog((state) => state.setDialog);

  // const openModal = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   setDialog({
  //     isOpen: true,
  //     onClose: () => setDialog({ isOpen: false }),
  //     title: 'Kontakta mig',
  //     description: 'Fyll i formuläret nedan så återkommer jag inom kort.',
  //     children: <ContactForm />,
  //   });
  // };

  return (
    <MotionButton
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={transition}
      onClick={onClick}
      type={type}
      variant={variant}
      disabled={disabled}
      {...props}
    >
      {children}
    </MotionButton>
  );
};
