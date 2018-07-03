/**
 * @module CSV
 */

import parse from 'csv-parse/lib/sync';
import stringify from 'csv-stringify/lib/sync';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

@RpsModule("csv")
export default class RPSCsv {

  @rpsAction({verbName:'parseCsvToData'})
  async parseCsvToData (ctx:RpsContext,opts:Object, data:any) : Promise<any>{
    return parse(data,opts);
  }

  @rpsAction({verbName:'parseDataToCsv'})
  async parseDataToCsv (ctx:RpsContext,opts:Object, data:any) : Promise<any>{
    return stringify(data,opts);
  }
}
