import React, { useState } from 'react';

import {CreateDonationStages} from '../../../../constants';
import CreateDonationAdditionalStage from '../../components/CreateDonationAdditionalStage';
import CreateDonationMainStage from '../../components/CreateDonationMainStage';

/**
 * Create donation page component.
 *
 * @returns {React.FC}
 */
export default function CreateDonationPage() {
  const [stage, setStage] = useState(CreateDonationStages.MAIN_STAGE);

  /**
   * Render stage component.
   * 
   * @returns {React.FC}
   */
  function renderStage() {
    if (stage === CreateDonationStages.MAIN_STAGE) {
      return <CreateDonationMainStage handleChangeStage={setStage} />;
    } else if (stage === CreateDonationStages.ADDITIONAL_STAGE) {
      return <CreateDonationAdditionalStage handleChangeStage={setStage} />;
    } else {
      return null;
    }
  }

  return renderStage();
}
