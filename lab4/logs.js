/**
 * Created by ziberman on 1/17/17.
 */

let warn = (msg)=>{

    console.log('Warning: ', msg);

};

let info = (msg)=>{

    console.log('Info: ', msg);

};

let error = (msg)=>{

    console.log('Error: ', msg);

};

exports.warn = warn;

exports.info = info;

exports.error = error;

