'use client';

import { AnimatedButton } from './ui/Buttons';
import useDialog from '@/hooks/useDialog';
import ContactForm from './ContactForm';
import React from 'react';
import Link from 'next/link';

type ContactButtonProps = {
  className?: string;
};

export const ContactButton: React.FC<ContactButtonProps> = ({ className }) => {
  const setDialog = useDialog((state) => state.setDialog);

  const openModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setDialog({
      isOpen: true,
      onClose: () => setDialog({ isOpen: false }),
      title: 'Kontakta oss',
      description: (
        <>
          Fyll i formuläret nedan så återkommer vi inom kort.{' '}
          <Link
            onClick={(e) => {
              setDialog({ isOpen: false });
            }}
            href="/villkor"
            className="underline"
          >
            Vi sparar inga uppgifter i marknadsföringssyfte och vi delar ej dem
            heller.
          </Link>
        </>
      ),
      children: <ContactForm />,
    });
  };

  return (
    <AnimatedButton className={className} onClick={openModal}>
      KONTAKTA OSS
    </AnimatedButton>
  );
};
