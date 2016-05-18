'use strict';
var month = ['January', 'February', 'March','April','May','June','July','August','September','October',
              'November','December'];
var timestamp ={
    unix : null,
    natural :null
}
function isunixstamp(str){     //whether a string is a unix stamp,all[0-9]
    var arr = str.split('');//whether a string is a unix stamp
    for(var i = 0; i < arr.length; i++)
    {
        if(!(arr[i]>='0' && arr[i]<='9') )
        return false;
    }
    return true;
}
function  isnatural(str){      //whether container a month string
    for(var i = 0; i< 12;i++)
        if (str.indexOf(month[i])!== -1)
            return true;
    return false;
}
function convert(str){               //convert string 
    if (isunixstamp(str)){           //   unix stamp
    var second = parseInt(str,10);
    var date = new Date(second*1000);
    var year = date.getFullYear();
    var m = month[date.getMonth()];
    var day = date.getDate();
    timestamp["unix"]= second;
    timestamp["natural"] =  m +' '+day+', '+year ;
    return timestamp;
    }
    
    if(isnatural(str))      {                // contain [a-z] 
            var arr = str.split(' ');
            var mon = arr[0];
            for(var j = 0 ;j<12;j++){
                if(month[j]===mon)
                break;
            }
            var day = parseInt(arr[1],10);
            var year = parseInt(arr[2],10);
            var date = new Date(year,j,day);
             timestamp["unix"]= date/1000;
             timestamp["natural"] =  mon +' '+day+', '+year ;
             return timestamp;
    }
    
    else return timestamp;
}
module.exports = function(str){

    return (convert(str));     //return json object timestamp
  
}