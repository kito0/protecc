# Protecc

Pwotecc youw expwess bwackend wif dis :3.

- [Howw to Usee :o](#use)
- [License xP](#license)

<a name="use"></a>

## Howw to Usee

```bash
npm i protecc
```

```javascript
const express = require('express');
const { protecc, limit } = require('protecc');

const app = express();

app.use(express());

/* put thwis befowe woutes */
protecc(app);

/* if uusing something othew than MongoDB, usee this inswtead :3 */
protecc(app, 0);

/* limit([app], [number of seconds], [maximum]) */
limit(app, 60, 10);
```

<a name="license"></a>

## License

[MIT](https://github.com/kito0/protecc/blob/master/LICENSE) © [kito0](https://github.com/kito0)
