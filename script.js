const numberInput=document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const romanNumerals=[
  {number:1000,roman:"M"},{number:900,roman:"CM"}, {number:500,roman:"D"}, {number:400,roman:"CD"}, {number:100,roman:"C"}, {number:90,roman:"XC"}, {number:50,roman:"L"}, {number:40,roman:"XL"}, {number:10,roman:"X"}, {number:9,roman:"IX"}, {number:5,roman:"V"}, {number:4,roman:"IV"}, {number:1, roman: "I"},  
]
let roman="";
const numberToRoman = (input)=>{
  romanNumerals.forEach((obj)=>{
    while (obj.number<=input){
      roman+=obj.roman;
      input-=obj.number;
    }
  })
  return roman;
}
const checkUserInput = ()=>{
  const inputInt=parseInt(numberInput.value);
  if(!numberInput.value||isNaN(inputInt)){
    alert("Please enter a valid number.");
    result.textContent="Please enter a valid number.";
    return;
  }
  if(inputInt<0){
    alert("Please enter a number greater than or equal to 1");
    result.textContent="Please enter a number greater than or equal to 1";
    return;

  }
  if (inputInt>=4000){
    alert("Please enter a number less than or equal to 3999");
    result.textContent="Please enter a number less than or equal to 3999"
    return;
  }
  result.textContent=numberToRoman(inputInt);
  numberInput.value="";
  roman="";
}

convertBtn.addEventListener("click", checkUserInput);