import React from 'react';
import { Button } from '../../Button/Button';

/**
 * This is the actions for the dialog.
 * @param params
 * @returns
 */
const Actions: React.FC<{
  proceedButtonText?: string;
  onProceed: () => void;
  dismissButtonText?: string;
  onDismiss: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cancelButtonRef: React.MutableRefObject<null>;
}> = ({
  proceedButtonText,
  onProceed,
  dismissButtonText,
  onDismiss,
  setOpen,
  cancelButtonRef,
}) => (
  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
    <Button
      onClick={() => {
        setOpen(false);
        onProceed();
      }}
      label={proceedButtonText as string}
      primary
      className="ml-3"
      size="small"
    />
    <Button
      onClick={() => {
        setOpen(false);
        onDismiss();
      }}
      label={dismissButtonText as string}
      className="ml-3"
      size="small"
      ref={cancelButtonRef}
    />
  </div>
);

export default Actions;
