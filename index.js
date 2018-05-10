import { isPlainObject } from './utils';

export default function stylenames(...styles) {
  return styles.filter(v => !!v).reduce((parsedStyles, styleItem) => {
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

    return parsedStyles;
  }, []);
}

