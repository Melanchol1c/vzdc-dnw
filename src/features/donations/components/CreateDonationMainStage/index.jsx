import React from 'react';
import { Button, FormLayout, Input, PanelHeader, PanelHeaderBack, SelectMimicry, Textarea } from '@vkontakte/vkui';
import ImageLoader from '../ImageLoader';

import {CreateDonationStages} from '../../../../constants';
import { useHistory } from 'react-router-dom';

/**
 * @param props
 */
export default function CreateDonationMainStage(props) {
  const {handleChangeStage} = props;
  const history = useHistory();

  return (
    <>
      <PanelHeader
        left={<PanelHeaderBack onClick={() => history.goBack()} />}
        separator={false}
      >
        Целевой сбор
      </PanelHeader>
      <FormLayout>
        <ImageLoader />

        <Input
          placeholder="Название сбора"
          top="Название сбора"
          type="text"
        />
        <Input
          placeholder="Сколько нужно собрать?"
          top="Сумма, ₽"
          type="text"
        />
        <Input
          placeholder="Например, лечение человека"
          top="Цель"
          type="text"
        />
        <Textarea
          placeholder="На что пойдут деньги и как они кому-то помогут?"
          top="Описание"
        />
        <SelectMimicry top="Выберите страну">Счёт VK Pay · 1234</SelectMimicry>

        <Button
          onClick={() => handleChangeStage(CreateDonationStages.ADDITIONAL_STAGE)}
          size="xl"
        >
          Далее
        </Button>
      </FormLayout>
    </>
  );
}
