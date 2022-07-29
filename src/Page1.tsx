import React from 'react';

import { List } from './List';
import { ListBulletColorsEnum } from './ListBulletColorsEnum';

export const bannerListItems: Array<string> = [
  'anothertextanothertext',
  'anothertextanothertext',
  'anothertextanothertext',
];

export default () => {
  return (
    <List
      bulletColor={ListBulletColorsEnum.PRIMARY}
      content={bannerListItems}
    />
  );
};
