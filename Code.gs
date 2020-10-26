function STOCKC(symbol){
    Logger.log("Yes, this was logged");
   symbol = encodeURI(symbol);
    var api_key = 'some_api_key';
    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol="+symbol+"&apikey="+api_key;
    var responseUrl = UrlFetchApp.fetch(url);
    var response = responseUrl.getContentText();
 
    var stockdata = JSON.parse(response);
    Logger.log(stockdata);
    var closepricear = new Array();
   // var closepriceard = new Array();
    //var keys = new Array();
    if(Object.keys(stockdata).length > 1){
  var help = Object.keys(stockdata)[1];
   	for(var i = 0; i < Object.keys(stockdata[help]).length; i++){
      var helpVal = Object.keys(stockdata[help])[i];
      var open = Object.keys(stockdata[help][helpVal])[0];
      var close = Object.keys(stockdata[help][helpVal])[3];
      var low = Object.keys(stockdata[help][helpVal])[2];
      var volume = Object.keys(stockdata[help][helpVal])[4];
      var high = Object.keys(stockdata[help][helpVal])[1];
      var date = Object.keys(stockdata[help]);
     Logger.log("Yes, this was logged");
      
     closepricear.push([stockdata[help][helpVal][close]]);
     
 
    
    
    
    
  }

//Logger.log(closepricear);
//Logger.log(closepricear);
return closepricear;
//console.log(closepricear);
//return closepriceard;
}


}

function STOCKD(symbol){

   symbol = encodeURI(symbol);
    var api_key = "some api key";
    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol="+symbol+"&apikey="+api_key;
    var responseUrl = UrlFetchApp.fetch(url);
    var response = responseUrl.getContentText();
 
    var stockdata = JSON.parse(response);
    var closepricear = new Array();
   // var closepriceard = new Array();
    //var keys = new Array();
    if(Object.keys(stockdata).length > 1){
  var help = Object.keys(stockdata)[1];
   	for(var i = 0; i < Object.keys(stockdata[help]).length; i++){
      var helpVal = Object.keys(stockdata[help])[i];
      var open = Object.keys(stockdata[help][helpVal])[0];
      var close = Object.keys(stockdata[help][helpVal])[3];
      var low = Object.keys(stockdata[help][helpVal])[2];
      var volume = Object.keys(stockdata[help][helpVal])[4];
      var high = Object.keys(stockdata[help][helpVal])[1];
      var date = Object.keys(stockdata[help])[i];
      
     closepricear.push(date);
     
 
    
    
    
    
  }

//Logger.log(closepricear);
JSON.stringify(closepricear);
Logger.log(closepricear);
return closepricear;
//console.log(closepricear);
//return closepriceard;
}


}

