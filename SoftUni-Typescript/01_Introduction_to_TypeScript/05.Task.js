function summarizePerson(id, firstName, lastName, age, middleName, hobbies, workInfo) {
    var secondEl = middleName ? "".concat(firstName, " ").concat(middleName, " ").concat(lastName) : "".concat(firstName, " ").concat(lastName);
    var fourthEl = hobbies ? hobbies.join(', ') : '-';
    var fifthEl = workInfo ? workInfo.join(' -> ') : "-";
    return [id, secondEl, age, fourthEl, fifthEl];
}
console.log(summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]));
console.log(summarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']));
console.log(summarizePerson(21, 'Joseph', 'Angler', 28));
console.log(summarizePerson(21, 'Joseph', 'Angler', 28));
console.log(summarizePerson(21, 'Kristine', 'Neva', 23, ''));
