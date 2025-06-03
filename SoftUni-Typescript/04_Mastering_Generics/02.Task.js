var CountedSet = /** @class */ (function () {
    function CountedSet() {
        this.items = new Map();
    }
    CountedSet.prototype.add = function (item) {
        var currentCount = this.items.get(item);
        if (currentCount) {
            this.items.set(item, currentCount + 1);
        }
        else {
            this.items.set(item, 1);
        }
    };
    CountedSet.prototype.remove = function (item) {
        var currentCount = this.items.get(item);
        if (currentCount) {
            this.items.set(item, currentCount - 1);
        }
    };
    CountedSet.prototype.contains = function (item) {
        var currentCount = this.items.get(item);
        return currentCount !== undefined && currentCount > 0;
    };
    CountedSet.prototype.getNumberOfCopies = function (item) {
        var _a;
        return (_a = this.items.get(item)) !== null && _a !== void 0 ? _a : 0;
    };
    return CountedSet;
}());
var countedSet = new CountedSet();
countedSet.add('test');
countedSet.add('test');
console.log(countedSet.contains('test'));
console.log(countedSet.getNumberOfCopies('test'));
countedSet.remove('test');
countedSet.remove('test');
countedSet.remove('test');
console.log(countedSet.getNumberOfCopies('test'));
console.log(countedSet.contains('test'));
