import * as c from 'chai';
import m from 'mocha';

import RPSCsv from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('CSV', () => {

  m.it('should display date correctly', async function () {
    let csv = new RPSCsv;

    let output = await csv.parseCSV(new RpsContext,{},"h1,h2,h3\n1,2,3\n4,5,6\n");

    c.expect(output).to.be.deep.equals( [[ 'h1', 'h2', 'h3' ], [ '1', '2', '3' ], [ '4', '5', '6' ] ]);

    let outputStr = await csv.dataToCSV(new RpsContext,{},output);

    c.expect(outputStr).to.be.equals("h1,h2,h3\n1,2,3\n4,5,6\n");

  }).timeout(0);

})
