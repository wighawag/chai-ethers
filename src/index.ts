import './types';
import {supportBigNumber} from './matchers/bigNumber';
import {supportReverted} from './matchers/reverted';
import {supportRevertedWith} from './matchers/revertedWith';
import {supportEmit} from './matchers/emit';
import {supportProperAddress} from './matchers/properAddress';
import {supportProperPrivateKey} from './matchers/properPrivateKey';
import {supportProperHex} from './matchers/properHex';
import {supportChangeTokenBalance} from './matchers/changeTokenBalance';
import {supportChangeTokenBalances} from './matchers/changeTokenBalances';

export function chaiEthers(chai: Chai.ChaiStatic, utils: Chai.ChaiUtils) {
  supportBigNumber(chai.Assertion, utils);
  supportReverted(chai.Assertion);
  supportRevertedWith(chai.Assertion);
  supportEmit(chai.Assertion);
  supportProperAddress(chai.Assertion);
  supportProperPrivateKey(chai.Assertion);
  supportProperHex(chai.Assertion);
  supportChangeTokenBalance(chai.Assertion);
  supportChangeTokenBalances(chai.Assertion);
}
