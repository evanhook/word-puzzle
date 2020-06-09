$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    let sentence = $("input#sentence").val();

    let vowels = ["a", "e", "i", "o", "u"];

    vowels.forEach(function(vowel){
      let newString = sentence.replace(vowel, "-");
      console.log(newString);
    })


  })
})