Important
==========

Works only with react-native version < 0.56

Stylenames
===========

A simple JavaScript utility for conditionally joining react native styles together.

Install with [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/):

npm:
```sh
npm install rn-stylenames --save
```

Yarn:
```sh
yarn add rn-stylenames
```

## Usage

The `stylenames` function takes any number of arguments which can be a number, plain object or array.
The argument `51` is short for `{ 51: true }`.
If the value associated with a given key is falsy, that key won't be included in the output.
If the given key is not style object id, it will be passed as common key:value pair.
If the given value is array, it will be recursively walked through.

```js
stylenames(51, 52); // => [51, 52]
stylenames(51, { 52: true }); // => [51, 52]
stylenames(51, { 52: false, fontSize: 18 }); // => [51, {fontSize: 18}]
stylenames(51, [{ 52: false, fontSize: 18 }]); // => [51, {fontSize: 18}]
```

### Usage with React Native

```js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import stylenames from 'react-native-stylenames';

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        lineHeight: 20,
    },

    activeText: {
        color: 'blue'
    }
});

const Screen = (props) => {
    const textStyles = stylenames(styles.text, {[styles.activeText]: props.isActive});

    return (
        <View>
            <Text style={textStyles}>Hello World!</Text>
        </View>
    );
}

```

## License

[MIT](LICENSE). Copyright (c) 2018 Anton Bebnev.
