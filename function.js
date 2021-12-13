
window.function = function (spg, total) {

 spg = spg.value ?? "";
 total = total.value ?? "";
  
 let threshold = spg/2;
  
 for (let i = spg; i > 0; i--) {
   let leftovers = Math.ceil(total/spg)*spg-total;
   if (leftovers < threshold) {
     return i;
     break;
   }
 }
}
