const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = tutorials.map(tutorial => tutorial.split(" ").map(
   word => word[0].toUpperCase() + word.slice(1)
).join(' ')

)


// function titleCase(str) {
//   let titled = tutorials.toLowerCase().split(' ').map(function(elem) {
//     return elem[0].toUpperCase()+ elem.slice(1);
//     });return titled.join(' '); }
    const titleCased = tutorials.map(str) => { tutorials.toLowerCase().split(' ')
      return str[0].toUpperCase() + str.silce(1);
      return tutorials.joine(' ')
    }
>>>>>>> 689320d4cfa449c396f94e7b4f0c448bd6cd10ac
