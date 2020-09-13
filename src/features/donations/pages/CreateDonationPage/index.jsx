import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import {CreateDonationStages, DonationTypes} from '../../../../constants';
import {CreateDonationAdditionalStage, CreateDonationMainStage, CreateRegularDonation} from '../../components';

/**
 * Create donation page component.
 *
 * @returns {React.FC}
 */
export default function CreateDonationPage() {
  const {type} = useParams();
  const [stage, setStage] = useState(CreateDonationStages.MAIN_STAGE);

  /**
   * Render stage component.
   * 
   * @returns {React.FC}
   */
  function renderTargetStage() {
    if (stage === CreateDonationStages.MAIN_STAGE) {
      return <CreateDonationMainStage handleChangeStage={setStage} />;
    } else if (stage === CreateDonationStages.ADDITIONAL_STAGE) {
      return <CreateDonationAdditionalStage handleChangeStage={setStage} />;
    } else {
      return null;
    }
  }

 
  if (type === DonationTypes.TARGET) {
    return renderTargetStage();
  }

  if (type === DonationTypes.REGULAR) {
    return <CreateRegularDonation />;
  }
}
