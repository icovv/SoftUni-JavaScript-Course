var Product = /** @class */ (function () {
    function Product(name, price) {
        this._name = name;
        this._price = price;
        this.id = ++Product._productCount;
    }
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (string) {
            if (string.length >= 1) {
                this._name = string;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (newPrice) {
            if (newPrice > 0) {
                this._price = newPrice;
            }
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getDetails = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: $").concat(this.price);
    };
    Object.defineProperty(Product, "productCount", {
        get: function () {
            return Product._productCount;
        },
        enumerable: false,
        configurable: true
    });
    Product._productCount = 0;
    return Product;
}());
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.products = [];
    }
    Inventory.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Inventory.prototype.listProducts = function () {
        var details = this.products.map(function (p) { return p.getDetails(); }).join('\n');
        return details + "\nTotal products created: ".concat(Product.productCount);
    };
    return Inventory;
}());
var inventory = new Inventory();
var product1 = new Product("Laptop", 1200);
var product2 = new Product("Phone", 800);
inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(inventory.listProducts());
