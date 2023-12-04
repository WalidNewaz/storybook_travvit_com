import React from 'react';
import { Dialog } from '@headlessui/react';

const HEADING_CLASSES = `
  mt-2 text-base
  font-semibold leading-6
  text-gray-900
`;

/**
 * The heading for the dialog.
 * @param heading
 * @returns
 */
const Heading: React.FC<{ heading: string }> = ({ heading }) => (
  <Dialog.Title as="h3" className={HEADING_CLASSES}>
    {heading}
  </Dialog.Title>
);

export default Heading;
