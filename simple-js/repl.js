function normalize(string){
  newstr=string.replace('-', '/');
  str=newstr.replace('-', '/');
  return str;
}

normalize('20-05-2017');