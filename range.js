(function(window, undefined) {
'use strict';
  var range;
  range= {
    logarithmicRange: function (num,sep){
       var digits = this.getDigits(num);
       var sep = sep?sep: "-";

       return (Math.pow(10,digits-1) +''+ sep +''+ Math.pow(10,digits));
    },
    naturalRange: function (num, sep){

    },
    customRange: function (step, num, sep) {
      var div = parseInt(num/step);

      return (step*div +''+ sep +''+ step*(div+1));
    },
    getDigits : function(num){
      //get the digits, ~~ results in Math.floor but faster
      var digits = ~~(Math.log(num) / Math.LN10 + 1);
      return digits;
    }
   };
  
    // export to global namespace
    window.range = range;
 })(window);
