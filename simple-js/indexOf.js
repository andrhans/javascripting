function indexOfIgnoreCase(string1, string2) {
  string1=string1.toLowerCase();
  string2=string2.toLowerCase();
  n1=string1.indexOf(string2);
  return n1;
}

indexOfIgnoreCase('bit', 'it');
indexOfIgnoreCase('bit', 'IT');