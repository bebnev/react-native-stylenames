import { isPlainObject } from './utils';

export default function stylenames(...styles) {
  const parsedStyles = [];

  styles.filter(v => !!v).forEach((styleItem) => {
    if (typeof styleItem === 'number') {
      parsedStyles.push(styleItem);
    } else if (Array.isArray(styleItem) && styleItem.length) {
      parsedStyles.push(...stylenames(...styleItem));
    } else if (isPlainObject(styleItem)) {
      Object.keys(styleItem).forEach((key) => {
        const styleName = Number(key);
        if (Number.isNaN(styleName)) {
          parsedStyles.push({ [key]: styleItem[key] });
        } else if (styleItem[key]) {
          parsedStyles.push(styleName);
        }
      });
    }
  });

  return parsedStyles;
}

