function firstWord(string1) {
  s1=string1.indexOf(' ');
  return string1.substr(0, s1);
}

firstWord('see and stop');