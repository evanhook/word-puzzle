$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    let sentence = $("input#sentence").val();

    let vowels = ["a", "e", "i", "o", "u"];

    // let newVowels = vowels.toString();
    // console.log(newVowels);

    vowels.forEach(function(){
      sentence = sentence.replace(/([aeiou])/g, "-");
      console.log(sentence);
      $("#result").text(sentence);
      $("#formOne").fadeOut();
    })
  })
})

// function hasVowels(string){
//   let word = string.toLowerCase()
//   if(/[aeiouy]/.test(word)){
//        return true
//     } else {
//        return false
