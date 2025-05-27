function visitFloor(floor
// { number: 1, hallway: 'A', train:() => void, pass: 'Guest' } |
// { number: 1, hallway: 'C', train:() => void } |
// { number: 1, hallway: 'A', train:() => void } |
// { number: 2, hallway: 'A', dine: () => void, } |
// { number: 2, hallway: 'A', dine: () => void, pass: 'Guest' } |
// { number: 2, hallway: 'C', dine: () => void, } |
// { number: 3, hallway: 'C', sleep:() => void} |
// { number: 3, hallway: 'A', sleep:() => void } |
) {
    switch (floor.number) {
        case 1:
            floor.train();
            return;
        case 2:
            floor.dine();
            return;
        case 3:
            floor.sleep();
            return;
    }
}
//should have 0 issues
visitFloor({ train: function () { }, number: 1, hallway: 'A', pass: 'Guest' });
visitFloor({ dine: function () { }, number: 2, hallway: 'A' });
visitFloor({ sleep: function () { }, number: 3, hallway: 'C' });
visitFloor({ train: function () { }, number: 1, hallway: 'C' });
visitFloor({ train: function () { }, number: 1, hallway: 'A' });
visitFloor({ dine: function () { }, number: 2, hallway: 'A', pass: 'Guest' });
visitFloor({ sleep: function () { }, number: 3, hallway: 'A' });
visitFloor({ dine: function () { }, number: 2, hallway: 'C' });
// should fail
