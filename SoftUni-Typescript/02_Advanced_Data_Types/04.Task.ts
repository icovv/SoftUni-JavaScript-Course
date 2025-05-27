type code200 ={  code: 200, text: 'OK'};

type code201 = { code: 201, text: 'Created'};

type code301 = { code: 301, text: 'Moved Permanently'};

type code400 = { code: 400, text: 'Bad Request', printChars?: number};

type code404 = { code: 404, text: 'Not Found', printChars?: number};

type code500 = { code: 500, text: 'Internal Server Error', printChars?: number};



function httpCodes(httpResponse: code200 | code201 | code301 | code400 | code404 | code500):void{
 if("printChars" in httpResponse){
    console.log(httpResponse.text.slice(0,httpResponse.printChars))
 } else{
    console.log(httpResponse.text);
 }
}

httpCodes({ code: 200, text: 'OK'});
httpCodes({ code: 201, text: 'Created'});
httpCodes({ code: 400, text: 'Bad Request', printChars: 4});
httpCodes({ code: 404, text: 'Not Found'});
httpCodes({ code: 404, text: 'Not Found', printChars: 3});
httpCodes({ code: 500, text: 'Internal Server Error', printChars: 1});