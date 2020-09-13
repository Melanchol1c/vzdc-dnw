import React from 'react';
import { Button, FormLayout, PanelHeader, PanelHeaderBack, Radio, SelectMimicry } from '@vkontakte/vkui';

import {CreateDonationStages} from '../../../../constants';

/**
 * @param props
 */
export default function CreateDonationAdditionalStage(props) {
  const {handleChangeStage} = props;

  return (
    <>
      <PanelHeader
        left={<PanelHeaderBack onClick={() => handleChangeStage(CreateDonationStages.MAIN_STAGE)} />}
        separator={false}
      >
        Дополнительно
      </PanelHeader>
      <FormLayout>
        <SelectMimicry top="Автор">Матвей Правосудов</SelectMimicry>
        <Radio
          defaultChecked
          name="radio"
          top="Сбор завершается"
          value="1"
        >
        Когда соберём сумму
        </Radio>
        <Radio
          name="radio"
          value="2"
        >
        В определённую дату
        </Radio>
        <SelectMimicry top="Дата">20 сентября</SelectMimicry>

        <Button
          onClick={() => handleChangeStage(CreateDonationStages.ADDITIONAL_STAGE)}
          size="xl"
        >
          Создать сбор
        </Button>
      </FormLayout>
    </>
  );
}
