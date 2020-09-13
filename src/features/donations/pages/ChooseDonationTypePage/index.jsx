import React from 'react';
import { Div, SimpleCell } from '@vkontakte/vkui';
import Icon24ChevronRight from '@vkontakte/icons/dist/24/chevron_right';
import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon36CalendarOutline from '@vkontakte/icons/dist/36/calendar_outline';
import style from './index.module.css';

/**
 * @returns
 */
export default function index() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
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
        >
          Регульярный сбор
        </SimpleCell>
      </Div>
    </div>
  );
}
