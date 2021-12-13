
window.function = function (spg, total) {

 spg = spg.value ?? "";
 total = total.value ?? "";
  
 const threshold = spg/2;
  
 for (var i = spg; i > 0; i--) {
   var leftovers = Math.ceil(total/spg)*spg-total;
   if (leftovers < threshold) {
     return i;
     break;
   }
  else {
   continue;
  }
 }
}
