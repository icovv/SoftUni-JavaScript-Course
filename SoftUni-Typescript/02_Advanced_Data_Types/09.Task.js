var CustomerOrder = /** @class */ (function () {
    function CustomerOrder(dishName, price, isVegan, orderId, quantity) {
        this.orderStatus = "Pending";
        this.dishName = dishName;
        this.price = price;
        this.isVegan = isVegan;
        this.orderId = orderId;
        this.quantity = quantity;
    }
    CustomerOrder.prototype.getDishInfo = function () {
        return "".concat(this.dishName, " - Price: $").concat(this.price, ", Vegan: ").concat(this.isVegan ? 'Yes' : 'No');
    };
    CustomerOrder.prototype.getOrderSummary = function () {
        return "Order ID: ".concat(this.orderId, " - Dish: ").concat(this.dishName, ", Quantity: ").concat(this.quantity, ", Total Price: $").concat(this.price * this.quantity, ", Status: ").concat(this.orderStatus);
    };
    CustomerOrder.prototype.updateOrderStatus = function () {
        if (this.orderStatus === "Pending") {
            this.orderStatus = "Shipped";
        }
        else if (this.orderStatus === "Shipped") {
            this.orderStatus = "Delivered";
        }
    };
    CustomerOrder.prototype.getOrderStatus = function () {
        return "Order Status: ".concat(this.orderStatus);
    };
    return CustomerOrder;
}());
var order = {
    dishName: 'Cheese Burger',
    price: 12,
    isVegan: false,
    orderId: 101,
    quantity: 2,
    discount: 10,
    deliveryAddress: '456 Burger Lane, Food City',
    orderStatus: 'Pending',
    getDishInfo: function () {
        return "".concat(this.dishName, " - Price: $").concat(this.price, ", Vegan: ").concat(this.isVegan ?
            'Yes' : 'No');
    },
    getOrderSummary: function () {
        return "Order ID: ".concat(this.orderId, " - Dish: ").concat(this.dishName, ", Quantity:").concat(this.quantity, ", Total Price: $").concat(this.price * this.quantity);
    },
    updateOrderStatus: function () {
        if (this.orderStatus === "Pending") {
            this.orderStatus = "Shipped";
        }
        else if (this.orderStatus === "Shipped") {
            this.orderStatus = "Delivered";
        }
    },
    getOrderStatus: function () {
        return "Order Status: ".concat(this.orderStatus);
    },
    getFinalPrice: function () {
        var totalPrice = this.price * this.quantity;
        var finalPrice = totalPrice - (totalPrice * (this.discount / 100));
        return "Final Price after ".concat(this.discount, "% discount: $").concat(finalPrice);
    }
};
console.log(order.getDishInfo());
console.log(order.getOrderSummary());
console.log(order.getFinalPrice());
console.log(order.getOrderStatus());
order.updateOrderStatus();
console.log(order.getOrderStatus());
