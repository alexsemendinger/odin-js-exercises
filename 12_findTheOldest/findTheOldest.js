const findTheOldest = function(people) {
    const thisYear = new Date().getFullYear()
    const getAge = (person) => {
        let finalYear = ('yearOfDeath' in person) ? person.yearOfDeath : thisYear;
        console.log(`person ${person.name} is ${finalYear - person.yearOfBirth}`)
        return finalYear - person.yearOfBirth;
    }
    for (const person of people) {
        person.age = getAge(person);
    }
    return people.sort( (a, b) => b.age - a.age )[0]
};

// Do not edit below this line
module.exports = findTheOldest;
