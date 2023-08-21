var inputTags=document.querySelectorAll("input")
var selectTags=document.querySelectorAll("select")
console.log(inputTags)
function storeTheData()
{
    var fName=inputTags[0].value;
    var sName=inputTags[1].value;
    var MandE=inputTags[2].value;
    var pass=inputTags[3].value;
    var dd=selectTags[0].value;
    var mo=selectTags[1].value;
    var yy=selectTags[2].value;
    localStorage.setItem("firstName",fName);
    localStorage.setItem("secondName",sName);
    sessionStorage.setItem("mobAndEmail",MandE);
    sessionStorage.setItem("password",pass);
    localStorage.setItem("date",dd);
    localStorage.setItem("month",mo);
    localStorage.setItem("year",yy);

}
function genderSel(gen)
{
    var gender=gen;
    localStorage.setItem("gender",gender)
}
var userVal=document.getElementById("inp").value;
var userPass=document.getElementById("pass").value;
var mande=sessionStorage.getItem("mobAndEmail")
var passverify=sessionStorage.getItem("password")
console.log(mande,passverify)
// console.log(userVal,userPass)
function verify()
{
    if((mande===userVal)&&(passverify===userPass))
    {
        document.getElementById("message").innerHTML="Sucessfully login"
        document.getElementById("message").style.color="green"
        document.getElementById("inp").style.border="2px green solid"
    }
    else{
        document.getElementById("message").innerHTML="Entre valid data"
        document.getElementById("message").style.color="red"
        
        document.getElementById("inp").style.border="2px red solid"
    }
}