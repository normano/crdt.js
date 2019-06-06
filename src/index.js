/**
 * export all CmRDTs
 */

import {GCounter, CmRDTSet, GSet, TwoPSet, ORSet, LWWSet, PNCounter} from './cmrdt';
// import {} from './cvrdt';

const CRDTs = {
  ...GCounter,
  ...CmRDTSet,
  ...GSet,
  ...TwoPSet,
  ...ORSet,
  ...LWWSet,
  ...PNCounter,
}

export default CRDTs;