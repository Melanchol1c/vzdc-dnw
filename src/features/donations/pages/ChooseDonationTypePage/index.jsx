import React from 'react';
import {useHistory} from 'react-router-dom';
import { Div, PanelHeader, PanelHeaderBack, SimpleCell } from '@vkontakte/vkui';

import style from './index.module.css';
import globalStyles from '../../../../styles/index.module.css';
import { Icon24ChevronRight, Icon28TargetOutline, Icon36CalendarOutline } from '@vkontakte/icons';

/**
 * @returns
 */
export default function ChooseDonationTypePage() {
  const history = useHistory();

  return (
    <>
      <PanelHeader
        left={<PanelHeaderBack onClick={() => history.goBack()} />}
        separator={false}
      >Тип сбора</PanelHeader>
      <Div className={`${globalStyles.centeredContainer} ${globalStyles.fullHeightContainer}`}>
        <Div>
          <SimpleCell 
            after={<Icon24ChevronRight fill='#B8C1CC' />}
            before={
              <Icon28TargetOutline
                height={27} 
                width={27} 
              />
            }
            className={style.cell}
            description='Когда есть определенная цель'
            onClick={() => history.push('/create-donation/target')} 
            style={{ marginBottom: 12 }}
          >
            Целевой сбор
          </SimpleCell>
          <SimpleCell 
            after={<Icon24ChevronRight fill='#B8C1CC' />}
            before={
              <Icon36CalendarOutline 
                height={27} 
                width={27} 
              />
            }
            className={style.cell}
            description='Если помощь нужна ежемесячно'
            onClick={() => history.push('/create-donation/regular')} 
          >
            Регулярный сбор
          </SimpleCell>
        </Div>
      </Div>
    </>
  );
}
