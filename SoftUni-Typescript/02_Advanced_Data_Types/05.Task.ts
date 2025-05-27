

type train = { number: 1, train: () => void} & ({hallway: "A", pass?:"Guest"} | {hallway: "C"});

type dine = { number: 2, dine: () => void} & ({hallway: "A", pass?:"Guest"} | {hallway: "C"});

type sleep = { number: 3, sleep: () => void, hallway: "A" | "C"};

type simplified = train | dine | sleep


function visitFloor(floor:simplified

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

case 1: floor.train(); return;

case 2: floor.dine(); return;

case 3: floor.sleep(); return;

}

}

//should have 0 issues

visitFloor({ train() { }, number: 1, hallway: 'A', pass: 'Guest' });

visitFloor({ dine() { }, number: 2, hallway: 'A' });

visitFloor({ sleep() { }, number: 3, hallway: 'C' });

visitFloor({ train() { }, number: 1, hallway: 'C' });

visitFloor({ train() { }, number: 1, hallway: 'A' });

visitFloor({ dine() { }, number: 2, hallway: 'A', pass: 'Guest' });

visitFloor({ sleep() { }, number: 3, hallway: 'A' }); visitFloor({ dine() { }, number: 2, hallway: 'C' });




// should fail
