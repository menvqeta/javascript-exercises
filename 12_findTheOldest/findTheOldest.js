const findTheOldest = function(people) {
    people.sort(
        function(a, b) {
            return getAge(b) - getAge(a);
            
        }
    );
    return people[0];
};

function getAge(person) {
    let currentYear = new Date().getFullYear();
    if ('yearOfDeath' in person) {
        currentYear = person['yearOfDeath'];
    }
    let age = currentYear - person['yearOfBirth'];
    return age;
}

// Do not edit below this line
module.exports = findTheOldest;


