:person_fencing: [@aureooms/js-merge-insertion-sort](https://aureooms.github.io/js-merge-insertion-sort)
==

<img src="http://www.explainxkcd.com//wiki/images/b/bc/ineffective_sorts.png" width="864">

[Ford-Johnson algorithm](https://en.wikipedia.org/wiki/Merge-insertion_sort) for JavaScript.
See [docs](https://aureooms.github.io/js-merge-insertion-sort).
Parent is [@aureooms/js-sort](https://github.com/aureooms/js-sort).

```js
import { fordjohnson } from "@aureooms/js-merge-insertion-sort" ;
import { binarysearch } from "@aureooms/js-search" ;
import { swap } from "@aureooms/js-array" ;
const fj = fordjohnson( binarysearch ) ;
const sort = (compare, a, i, j) => fj(compare, swap, a, i, j) ;
```

[![License](https://img.shields.io/github/license/aureooms/js-merge-insertion-sort.svg)](https://raw.githubusercontent.com/aureooms/js-merge-insertion-sort/master/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-merge-insertion-sort.svg)](https://www.npmjs.org/package/@aureooms/js-merge-insertion-sort)
[![Build](https://img.shields.io/travis/aureooms/js-merge-insertion-sort/master.svg)](https://travis-ci.org/aureooms/js-merge-insertion-sort/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-merge-insertion-sort.svg)](https://david-dm.org/aureooms/js-merge-insertion-sort)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-merge-insertion-sort.svg)](https://david-dm.org/aureooms/js-merge-insertion-sort?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-merge-insertion-sort.svg)](https://github.com/aureooms/js-merge-insertion-sort/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-merge-insertion-sort.svg)](https://www.npmjs.org/package/@aureooms/js-merge-insertion-sort)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-merge-insertion-sort.svg)](https://codeclimate.com/github/aureooms/js-merge-insertion-sort/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-merge-insertion-sort.svg)](https://codeclimate.com/github/aureooms/js-merge-insertion-sort/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-merge-insertion-sort/master.svg)](https://codecov.io/gh/aureooms/js-merge-insertion-sort)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-merge-insertion-sort.svg)](https://codeclimate.com/github/aureooms/js-merge-insertion-sort/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-merge-insertion-sort//badge.svg)](https://aureooms.github.io/js-merge-insertion-sort//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-merge-insertion-sort)](https://bundlephobia.com/result?p=@aureooms/js-merge-insertion-sort)
