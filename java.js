const URL="https://cat-fact.herokuapp.com/facts";
var fact=document.getElementById("fact");
var fact1=document.getElementById("fact1");
var fact2=document.getElementById("fact2");
var fact3=document.getElementById("fact3");
const getFacts= async()=>{
    console.log("getting data.....");
    let response= await fetch(URL);
    console.log(response);
    let data= await response.json();
    fact.innerText= data[0].text;
    fact1.innerText= data[1].text;
    fact2.innerText= data[2].text;
    fact3.innerText= data[3].text;

}