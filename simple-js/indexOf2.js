function secondIndexOf(string1, string2) {
  n1=string1.indexOf(string2);
  n1=string1.indexOf(string2, n1+1);
  return n1;
}

secondIndexOf('White Rabbit', 'it');