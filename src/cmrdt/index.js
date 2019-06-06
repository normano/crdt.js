/**
 * export all CmRDTs
 */

import GCounter from './g-counter';
import CmRDTSet from './cmrdt-set';
import GSet from './g-set';
import TwoPSet from './2p-set';
import ORSet from './or-set';
import LWWSet from './lww-set';
import PNCounter from './pn-counter';

export default {
  ...GCounter,
  ...CmRDTSet,
  ...GSet,
  ...TwoPSet,
  ...ORSet,
  ...LWWSet,
  ...PNCounter,
}
