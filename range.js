  (function(window, undefined) {
  'use strict';
    var range;
     range= {
      logarithmicScale: function (num,sep){
         var digits = this.getDigits(num);
         var sep = sep?sep: "-";

         return (Math.pow(10,digits-1) +''+ sep +''+ Math.pow(10,digits));
      },
      naturalSteps: function (num, sep){

      },
      getDigits : function(num){
        //get the digits, similar to Math.floor
        var digits = ~~(Math.log(num) / Math.LN10 + 1);
        return digits;
      }

     };
    
      // export to global namespace
      window.range = range;
   })(window);
