/**
 * Collect and export all utils
 */

import deepEqual from './deepEqual';
import OperationTuple3 from './operationTuple3';

export default {
    ...deepEqual,
    ...OperationTuple3
}