function methodDecorator(target:any, methodName:string, descriptor: PropertyDescriptor){
    let cachedData: string[] = [];
    let lastUpdated: Date | null = null;
    let originalMethod = descriptor.value;

    descriptor.value = function(){
        let currMoment = new Date()
        if(!lastUpdated || (currMoment.getTime() - lastUpdated?.getTime()) > 5000){
            const data = originalMethod.call(this);
            cachedData = data.slice();
            lastUpdated = new Date;
            return data;
        } else {
            console.log("Returned from cache")
            return cachedData;
        }
    }

    return descriptor
}

class MockWeatherDataService {

    private weatherData: string[] = [

        'Sunny 8° to 20°',

        'Partially Cloudy 7° to 19°',

        'Sunny 5° to 18°'

    ];


    addWeatherData(data: string) { this.weatherData.push(data); }
    @methodDecorator
    getWeatherData() { return this.weatherData; }

}

let service = new MockWeatherDataService();

console.log(service.getWeatherData())

console.log(service.getWeatherData())

service.addWeatherData('Partially Cloudy 5° to 11°');

console.log(service.getWeatherData())


//7 seconds later

setTimeout(() => console.log(service.getWeatherData()), 7000)