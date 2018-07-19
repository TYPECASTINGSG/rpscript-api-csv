import parse from 'csv-parse/lib/sync';
import stringify from 'csv-stringify/lib/sync';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

/** Module for parsing CSV file
 * @see {@link https://www.npmjs.com/package/figlet|CSV}
 * @namespace CSV
 * @example
 * rps install csv
*/
@RpsModule("csv")
export default class RPSCsv {

/**
 * @function convert-csv-to-data
 * @memberof CSV
 * 
 * 
 * 
*/
  @rpsAction({verbName:'convert-csv-string-to-data'})
  async parseCsvToData (ctx:RpsContext,opts:Object, data:any) : Promise<any>{
    return parse(data,opts);
  }

    /**
 * @function covert-data-to-csv-string
 * @memberof CSV
 * 
 * 
*/
  @rpsAction({verbName:'convert-data-to-csv-string'})
  async parseDataToCsv (ctx:RpsContext,opts:Object, data:any) : Promise<any>{
    return stringify(data,opts);
  }
}
