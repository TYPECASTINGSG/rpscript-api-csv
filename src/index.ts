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
 * @function csv-to-data
 * @memberof CSV
 * @param {string} csvString csv content to be parsed
 * @example
 * csv-to-data --columns=true read-file "input.csv"
 * 
 * 
 * @summary csv-to-data :: String → String
 * 
 * @description
 * For the list of parsing options:
 * @see {@link http://csv.adaltas.com/parse/}
*/
  @rpsAction({verbName:'csv-to-data'})
  async parseCsvToData (ctx:RpsContext,opts:Object, csvString?:string) : Promise<any>{
    if(csvString)
      return parse(csvString,opts);
    else
      return function(csvString){return parse(csvString,opts);}
  }

/**
 * @function data-to-csv
 * @memberof CSV
 * @param {string} data csv content to be parsed
 * @example
 * write-file "result.csv" data-to-csv $processedResult
 * 
 * @summary data-to-csv :: String → String
 * 
 * @description
 * For the list of parsing options:
 * @see {@link http://csv.adaltas.com/stringify/}
 * 
*/
  @rpsAction({verbName:'data-to-csv'})
  async parseDataToCsv (ctx:RpsContext,opts:Object, data?:any) : Promise<any>{
    if(data)
      return stringify(data,opts);
    else
      return function(data){return stringify(data,opts);}
  }
}
