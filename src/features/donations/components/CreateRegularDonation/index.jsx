import React from 'react';
import { Button, FormLayout, Input, PanelHeader, PanelHeaderBack, SelectMimicry, Textarea } from '@vkontakte/vkui';
import { useHistory } from 'react-router-dom';
import { Icon24Gallery } from '@vkontakte/icons';
import ImageLoader from '../ImageLoader';

/**
 *
 */
export default function CreateRegularDonation() {
  const history = useHistory();

  return (
    <>
      <PanelHeader
        left={<PanelHeaderBack onClick={() => history.goBack()} />}
        separator={false}
      >
      Регулярный сбор
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
        <SelectMimicry top="Автор">Матвей Правосудов</SelectMimicry>

        <Button size="xl">
          Создать сбор
        </Button>
      </FormLayout>
    </>
  );
}
