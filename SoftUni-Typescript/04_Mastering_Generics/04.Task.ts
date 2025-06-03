export{}
type InputParamType<T> = T extends number ? number : string;

function conditionalNumber <T>(input: InputParamType<T>): void{
    if (typeof input == "number"){
        console.log(input.toFixed(2))
    } else{
        console.log(input)
    }
}

// conditionalNumber<boolean>(30);

// conditionalNumber<number>('test');

conditionalNumber<number>(20.3555);

conditionalNumber<string>('wow');

conditionalNumber<boolean>('a string')