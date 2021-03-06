import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiAsPromised);
chai.use(sinonChai);
chai.use(chaiEnzyme());
