import React from 'react';


import css from './Page1.module.scss'
import { List } from './shared/List';
import { ListBulletColorsEnum } from './shared/ListBulletColorsEnum';

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
