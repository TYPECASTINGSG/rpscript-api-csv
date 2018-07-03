/**
 * @module CSV
 */

import parse from 'csv-parse/lib/sync';
import stringify from 'csv-stringify/lib/sync';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

@RpsModule("csv")
export default class RPSCsv {

  @rpsAction({verbName:'parseCSV'})
  async parseCSV (ctx:RpsContext,opts:Object, data:any) : Promise<any>{
    return parse(data,opts);
  }

  @rpsAction({verbName:'parseCSV'})
  async dataToCSV (ctx:RpsContext,opts:Object, data:any) : Promise<any>{
    return stringify(data,opts);
  }
}
