function midrange (num1, num2, num3){
  min=Math.min(num1, num2, num3);
  max=Math.max(num1, num2, num3);
  mid=(max+min)/2;
  return mid;
}

midrange(3, 9, 1);