class CountedSet {
    items = new Map();
    add(item) {
        let currentCount = this.items.get(item);
        if (currentCount) {
            this.items.set(item, currentCount + 1);
        }
        else {
            this.items.set(item, 1);
        }
    }
    remove(item) {
        let currentCount = this.items.get(item);
        if (currentCount) {
            this.items.set(item, currentCount - 1);
        }
    }
    contains(item) {
        let currentCount = this.items.get(item);
        return currentCount !== undefined && currentCount > 0;
    }
    getNumberOfCopies(item) {
        return this.items.get(item) ?? 0;
    }
}
let countedSet = new CountedSet();
countedSet.add('test');
countedSet.add('test');
console.log(countedSet.contains('test'));
console.log(countedSet.getNumberOfCopies('test'));
countedSet.remove('test');
countedSet.remove('test');
countedSet.remove('test');
console.log(countedSet.getNumberOfCopies('test'));
console.log(countedSet.contains('test'));
export {};
//# sourceMappingURL=02.Task.js.map