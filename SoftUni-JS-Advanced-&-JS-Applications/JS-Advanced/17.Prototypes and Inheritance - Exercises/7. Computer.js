function createComputerHierarchy(){ 
    class Different{
        constructor(manufacturer){
            if (new.target === Different) {
                throw new Error;
            }

            this.manufacturer = manufacturer;
        }
    }
    class Keyboard extends Different{
        constructor(manufacturer,responseTime){
            super(manufacturer)
            this.responseTime = responseTime;
        }
    }
    class Monitor extends Different{
        constructor(manufacturer,width,height){
            super(manufacturer)
            this.width = width;
            this.height = height;
            debugger
        }
    }
    class Battery extends Different{
        constructor(manufacturer,expectedLife){
            super(manufacturer)
            this.expectedLife = expectedLife;
        }
    }
    class Computer extends Different{
        constructor(manufacturer,processorSpeed,ram,hardDiskSpace){
            if(new.target === Computer){
                throw new Error
            }
            super(manufacturer)
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    class Laptop extends Computer{
        constructor(manufacturer,processorSpeed,ram,hardDiskSpace,weight,color,battery){
            super(manufacturer,processorSpeed,ram,hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
            debugger
        }
        get battery(){
            return this._battery
        }
        set battery(value){
            if (!(value instanceof Battery)) {
                throw new TypeError;
            }

            this._battery = value;
        }
    }
    class Desktop extends Computer{
        constructor(manufacturer,processorSpeed,ram,hardDiskSpace,keyboard,monitor){
            super(manufacturer,processorSpeed,ram,hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
        get keyboard(){
            return this._keyboard;
        }
        set keyboard(value){
            if(!(value instanceof Keyboard)){
                throw new TypeError
            }
            this._keyboard = value;
        }
        get monitor(){
            return this._monitor;
        }
        set monitor(value){
            if(!(value instanceof Monitor)){
                throw new TypeError
            }
            this._monitor = value;
        }
    }
    return {
        Keyboard,
        Monitor,
        Battery,
        Computer,
        Laptop,
        Desktop
    }
}
let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;
let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);
let desktop = new Desktop("JAR Computers",3.3,8,1,keyboard,monitor);