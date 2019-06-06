/**
 * Collection of utils
 */

import deepEqual from './deepEqual';
import OperationTuple3 from './operationTuple3';
import run from './benchmark';

export default {
    ...deepEqual,
    ...OperationTuple3,
    ...run
}