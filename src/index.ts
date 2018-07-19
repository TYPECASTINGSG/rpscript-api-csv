import parse from 'csv-parse/lib/sync';
import stringify from 'csv-stringify/lib/sync';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

/** Module for parsing CSV file
 * @see {@link https://www.npmjs.com/package/csv|CSV}
 * @namespace CSV
 * @example
 * rps install csv
*/
@RpsModule("csv")
export default class RPSCsv {

/**
 * @function convert-csv-to-data
 * @memberof CSV
 * @param {string} csvString csv content to be parsed
 * @description
 * For the list of parsing options:
 * 
 * @see {@link http://csv.adaltas.com/parse/}
*/
  @rpsAction({verbName:'convert-csv-string-to-data'})
  async parseCsvToData (ctx:RpsContext,opts:Object, content:string) : Promise<any>{
    return parse(content,opts);
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
