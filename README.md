Range
=====

A Javascript library to get the range of a given number and it also enables the easier grouping of the numbers.
Range Separator is optional, default separator is "-"

**Note: This code is Work in progress**

###Logarithmic Range:
It provides a range in this pattern  
```
0-10
10-100
100-1000
1000-10000
10000-100000 .....
```
```
logarithmicRange(YourNumber, Separator);

range.logarithmicRange(10)--> 10-100
range.logarithmicRange(10,",")--> 10,100
range.logarithmicRange(121)--> 100-1000
```
###Custom Step Range:
It provides a range in this custom pattern based on your input steps  
If the step value is 25, then pattern is
```
0-25
25-50
50-75
75-100
100-125 ....
```
```
customRange(InputStepSize, YourNumber, Separator);

range.customRange(25,10)--> 0-25
range.customRange(25,10,",")--> 0,25
range.customRange(121)--> 100-125
```


