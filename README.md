<div align="center">
 
   <h1>AdelysAlberto Logger</h1>
 
[![Build Status](https://travis-ci.org/AdelysAlberto/logger.svg?branch=master)](https://travis-ci.org/AdelysAlberto/logger)
[![PR Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/AdelysAlberto/logger/blob/master/CONTRIBUTING.md)

</div>

<hr />

> A multi channel logger written in TypeScript.

## Features

- Colored console logging to stdout or stderr,
- Configurable log message layout/patterns
- Different log levels for different log categories (make some parts of your app log as DEBUG, others only ERRORS, etc.)

Please refer to the [documentation](https://AdelysAlberto.github.io/logger/) for more details.

## Installation

```bash
npm install -g typescript
npm install @adalbeca/logger
```

## Quick start

Minimalist version:

```typescript
import Log from "@adalbeca/logger";

$Log.error("Some Error");
```

Will be produce the following log output:

```
  ERROR {"level":0,"id":"997f27e8-ac1c-46c0-bd52-edc79e110019","time":"5/31/2021, 2:15:50 PM","logger":"/src/index.ts -> ()","message: Not found files"}
```

## License

The MIT License (MIT)

Copyright (c) 2016 - 2018 Romain Lenzotti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
