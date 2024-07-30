# react-if-else
> If else logic component for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-if-else
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-if-else/dist/style.css";

  // or use sass
  @import "~@jswork/react-if-else/dist/style.scss";
  ```
2. import js
  ```js
  import Ife from '@jswork/react-if-else';
  import '@jswork/react-if-else/dist/style.scss';
  import { useState } from 'react';

  function App() {
    const [v1, setV1] = useState(false);
    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">
          Build Time: {BUILD_TIME}
        </div>
        <div className="y-5">
          <Ife value={v1}>
            <button className="btn btn-sm btn-primary">Yes</button>
          </Ife>
          <Ife value={!v1}>
            <button className="btn btn-sm btn-secondary">No-----:(</button>
          </Ife>
          <div className="bg-slate-200 p-2">
            <Ife value={v1}>
              <span className="bg-green-500 text-white rounded">Yes</span>
              <span className="bg-red-500 text-white rounded">No</span>
            </Ife>
          </div>
        </div>
        <button className="btn btn-primary mt-2" onClick={() => setV1(!v1)}>Toggle</button>
      </div>
    );
  }

  export default App;
  ```

## preview
- https://afeiship.github.io/react-if-else/

## license
Code released under [the MIT license](https://github.com/afeiship/react-if-else/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-if-else
[version-url]: https://npmjs.org/package/@jswork/react-if-else

[license-image]: https://img.shields.io/npm/l/@jswork/react-if-else
[license-url]: https://github.com/afeiship/react-if-else/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-if-else
[size-url]: https://github.com/afeiship/react-if-else/blob/master/dist/react-if-else.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-if-else
[download-url]: https://www.npmjs.com/package/@jswork/react-if-else
