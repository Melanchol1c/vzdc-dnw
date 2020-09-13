import { Icon24Gallery } from '@vkontakte/icons';
import { File } from '@vkontakte/vkui';
import React from 'react';

import styles from './index.module.css';

/**
 * @param props
 */
export default function ImageLoader() {
  return (
    <File
      before={<Icon24Gallery className={styles.galleryIcon} />}
      className={styles.uploader}
      controlSize="xl"
      mode="secondary"
    >
      Загрузить обложку
    </File>
  );
}
