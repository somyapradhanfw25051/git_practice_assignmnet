//Print Prime Numbers from 1 to given limit

console.log(" 1 is independant number");
for(let i=2;i<=10;i++){
  let num = i;
  let count=0;
  for(let j=2; j<=num;j++){
    if(num%j==0){
    count++;
  }
}
if(count==1){
  console.log(i,"is a prime number");
}
else{
  console.log(i,"not a prime number");
}
}