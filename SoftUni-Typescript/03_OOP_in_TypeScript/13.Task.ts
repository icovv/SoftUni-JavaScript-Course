class Product{
    protected static _productCount:number = 0;
    readonly id:number;
    
    private _name!:string;
    private _price!: number;

    constructor(name:string,price:number){
        this._name = name;
        this._price = price;
        this.id = ++Product._productCount;

    }

    get name():string{
        return this._name
    }

    set name(string:string){
        if(string.length >= 1){
            this._name = string;
        }
    }

    get price():number{
        return this._price;
    }

    set price(newPrice:number){
        if(newPrice > 0){
            this._price = newPrice;
        }
    }

    getDetails():string{
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`
    }

    public static get productCount(): number {
        return Product._productCount;
    }
}

class Inventory {
  private products: Product[] = [];

  public addProduct(product: Product): void {
    this.products.push(product);
  }

  public listProducts(): string {
    const details = this.products.map(p => p.getDetails()).join('\n');
    return details + `\nTotal products created: ${Product.productCount}`;
  }
}

const inventory = new Inventory();

const product1 = new Product("Laptop", 1200);

const product2 = new Product("Phone", 800);


inventory.addProduct(product1);

inventory.addProduct(product2);

console.log(inventory.listProducts());


