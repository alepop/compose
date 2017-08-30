# compose

A reusable library implementing function composition.

### npm
```bash
npm install @alepop/compose
```

# usage
```javascript
const compose = require('@alepop/compose');

const fn = compose(
  (val) => val * val,
  (val) => val + val
);

fn(1) // 4
```
