import React from 'react';

/** Components */
import { Button } from '../../Button/Button';

/** Types */
import type { clickHandler } from '../../../types';

const JoinBtn: React.FC<{ joinHandler?: clickHandler }> = ({ joinHandler }) =>
  joinHandler && <Button label="Join" size="small" onClick={joinHandler} />;

export default JoinBtn;
