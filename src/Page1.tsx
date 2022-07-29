import React from 'react';

import { List } from './List';
import { ListBulletColorsEnum } from './ListBulletColorsEnum';
import css from './Page1.module.scss'

export const bannerListItems: Array<string> = [
  'anothertextanothertext',
  'anothertextanothertext',
  'anothertextanothertext',
];

export default () => {
  return (
    <>
      <List
        bulletColor={ListBulletColorsEnum.PRIMARY}
        content={bannerListItems}
        className={css.list}
      />

      <button>Кнопка</button>
    </>
  );
};
