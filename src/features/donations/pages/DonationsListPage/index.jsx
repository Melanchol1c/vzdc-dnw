import React from 'react';
import { Div, Button, Text } from '@vkontakte/vkui';
import style from './index.module.css';

/**
 * @returns
 */
export default function DonationsListPage() {
  return (
    <div className={style.container}>
      <Div className={style.text_contrainer}>
        <Text>У вас пока нет сборов.</Text>
        <Text>Начни доброе дело.</Text>
        <Button
          className={style.create_button}
          size='l' 
        >Создать сбор</Button>
      </Div>
    </div>
  );
}
