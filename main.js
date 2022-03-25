// Masala : N ta elementdan tashkil topgan mukammal sonlarni ekranga chiqaruvchi dastur tuzing. Mukammal sonlar o'zidan tashqari bo'luvchilari yigindisiga teng bolgan sonlar 6=1+2+3; 28=1+2+4+7+14;


let N= 8;
const a=[];
for(i=0; i<N; i++){
  if(i%1==0 && i%i==0){
    let b= 2**(i-1)*(2**i-1);
    a.push(b);
    
  }
}
console.log(a);