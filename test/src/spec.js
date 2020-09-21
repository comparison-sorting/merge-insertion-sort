// eslint-disable-next-line ava/use-test
import ava from 'ava';

import * as spec from '@aureooms/js-in-situ-sort-spec';

import {swap} from '@aureooms/js-array';
import {binarysearch} from '@aureooms/js-search';
import {fordjohnson} from '../../src';

const fj = fordjohnson(binarysearch);
const sort = (compare, a, i, j) => fj(compare, swap, a, i, j);

spec.test(ava, [['fordjohnson', sort]]);
