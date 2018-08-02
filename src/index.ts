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
 * @example
 * convert-csv-to-data read-file "input.csv" --columns=true
 * 
 * 
 * @summary convert-csv-to-data :: String -> String
 * 
 * @description
 * For the list of parsing options:
 * @see {@link http://csv.adaltas.com/parse/}
*/
  @rpsAction({verbName:'convert-csv-to-data'})
  async parseCsvToData (ctx:RpsContext,opts:Object, csvString?:string) : Promise<any>{
    if(csvString)
      return parse(csvString,opts);
    else
      return function(csvString){return parse(csvString,opts);}
  }

/**
 * @function covert-data-to-csv
 * @memberof CSV
 * @param {string} data csv content to be parsed
 * @example
 * write-file "result.csv" convert-data-to-csv $processedResult
 * 
 * @summary convert-data-to-csv :: String -> String
 * 
 * @description
 * For the list of parsing options:
 * @see {@link http://csv.adaltas.com/stringify/}
 * 
*/
  @rpsAction({verbName:'convert-data-to-csv'})
  async parseDataToCsv (ctx:RpsContext,opts:Object, data?:any) : Promise<any>{
    if(data)
      return stringify(data,opts);
    else
      return function(data){return stringify(data,opts);}
  }
}
