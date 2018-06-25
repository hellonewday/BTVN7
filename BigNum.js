// Cho 1 mang - tim so lon nhat
var arr=[2,3,5,7,4,15];
var bigNum=0;
for(var i=1;i<arr.length;i++){
      if(arr[i]>bigNum){
          arr[i]=bigNum;
      }
}
   console.log(bigNum);