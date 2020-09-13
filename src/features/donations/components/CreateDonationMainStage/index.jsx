import React from 'react';
import { Button, File, FormLayout, Input, PanelHeader, PanelHeaderBack, SelectMimicry, Textarea } from '@vkontakte/vkui';
import { Icon24Gallery } from '@vkontakte/icons';

import styles from './index.module.css';

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
        Основное
      </PanelHeader>
      <FormLayout>
        <File
          before={<Icon24Gallery className={styles.galleryIcon} />}
          className={styles.uploader}
          controlSize="xl"
          mode="secondary"
        >
        Открыть галерею
        </File>

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
