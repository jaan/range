Range
=====

A Javascript library to get the range of a given number and enables easier grouping of the numbers.

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
range.logarithmicRange(10)--> 10-100
range.logarithmicRange(10,",")--> 10,100
range.logarithmicRange(121)--> 100-1000
```
###Custom Step Range:
It provides a range in this custom pattern based on your steps  
If the step value is 25, then pattern is
```
0-25
25-50
50-75
75-100
100-125 ....
```
```
range.customRange(25,10)--> 0-25
range.customRange(25,10,",")--> 0,25
range.customRange(121)--> 100-125
```


