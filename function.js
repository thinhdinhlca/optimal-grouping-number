
window.function = function (spg, total) {

 spg = spg.value ?? "";
 total = total.value ?? "";
  
 const threshold = spg/2;
  
 var res = spg;
 
 for (var i = spg; i > 0; i--) {
   var leftovers = Math.ceil(total/i)*i-total;
   if (leftovers < threshold) {
     res = i;
     break;
   }
 }
 
 return res;
}
