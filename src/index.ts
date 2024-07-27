const characters = ":#><`$|{[]}@.,;!^+&/()=?_%-* ~abcdefghijklmnopqrstwyzuvxUABCDEFGHIJKLMNOQPRSTWXVYZ1234567890'"

const cipher = (text: string, key: string) =>{
  let last = ""
  let i = 0;
  for(const character of text.split("")){
    if(i >= key.length){
      i = 0;
    }
    if(characters.indexOf(character) + character.indexOf(key.split[i]) + 1 >= characters.length){
      last = last + characters[characters.indexOf(character) + characters.indexOf(key.split[i]) - characters.length]
    } else{
      last = last + characters[characters.indexOf(character) + characters.indexOf(key.split[i])]
    }
  }
  return last;
}

const decipher = (text: string, key: string) =>{
  let last = ""
  let i = 0;
  for(const character of text.split("")){
    if(i >= key.length){
      i = 0;
    }
    if(characters.indexOf(character) - character.indexOf(key.split[i]) + 1 < 0){
      last = last + characters[characters.indexOf(character) - characters.indexOf(key.split[i]) + characters.length]
    } else{
      last = last + characters[characters.indexOf(character) - characters.indexOf(key.split[i])]
    }
  }
  return last;
}


console.log(cipher("hello world!", "alper"))
console.log(decipher("gdkkn*tnqkc;", "alper"))