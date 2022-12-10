import React from 'react';
import { ListBulletColorsEnum } from './shared/ListBulletColorsEnum';
import { List } from './shared/List';

export const bannerListItems: Array<string> = [
  'texttext',
  'texttext',
  'texttext',
];

export default () => {
  return (
    <List
      bulletColor={ListBulletColorsEnum.PRIMARY}
      content={bannerListItems}
    />
  );
};
