// Code your solution here

//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// findMatching()
//       1) returns all drivers that match the passed in name
//       2) returns matching drivers if case does not match but letters do
//       3) returns an empty array if there is no match


// 
function findMatching(something, somethingElse1) {
  return something.filter(
    (isMatch) => isMatch.toUpperCase() === somethingElse1.toUpperCase()
  );
}

// fuzzyMatch()
//       4) returns a driver if beginning provided letters match
//       5) does not return drivers if only middle or ending letters match

function fuzzyMatch(something, someString) {
    return something.filter (
        (isMatch) => isMatch.toUpperCase().indexOf(
            someString.toUpperCase()) === 0
    );
 };

// matchName()
//       7) accesses the data structure to check if name matches

function matchName(something, someName) {
    return something.filter (
      record => record.name === someName);
};
