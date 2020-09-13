import React from 'react';
import { Div, Button, Text, PanelHeader } from '@vkontakte/vkui';
import {useHistory} from 'react-router-dom';

import style from './index.module.css';
import globalStyles from '../../../../styles/index.module.css';

/**
 * @returns
 */
export default function DonationsListPage() {
  const history = useHistory();
  
  return (
    <>
      <PanelHeader separator={false}>Пожертвования</PanelHeader>
      <Div className={`${globalStyles.centeredContainer} ${globalStyles.fullHeightContainer}`}>
        <Div className={style.text_contrainer}>
          <Text>У вас пока нет сборов.</Text>
          <Text>Начни доброе дело.</Text>
          <Button
            className={style.create_button}
            onClick={() => history.push('/choose-donation-type')}
            size='l'
          >
            Создать сбор
          </Button>
        </Div>
      </Div>
    </>
  );
}
