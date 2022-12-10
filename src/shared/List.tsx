import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

import { ListBulletColorsEnum } from './ListBulletColorsEnum';

import css from './List.module.scss';

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  bulletColor: ListBulletColorsEnum;
  content: Array<React.ReactNode>;
}

export const List =  (props: ListProps) => {
  return (
    <ul className={cn(css.list, css[props.bulletColor], props.className)}>
      {props.content.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </ul>
  );
};
