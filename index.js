var change = document.getElementById("chk");
var headerBg = document.querySelector(".header");
var heading = document.querySelector(".container .heading");
var number = document.querySelector(".number");
var subHeading = document.querySelector(".container .sub-heading");
var card = document.getElementsByClassName("card")[0];
var card1 = document.getElementsByClassName("card")[1];
var card2 = document.getElementsByClassName("card")[2];
var card3 = document.getElementsByClassName("card")[3];
var overviewCard = document.getElementsByClassName("overview-card")[0];
var overviewCard1 = document.getElementsByClassName("overview-card")[1];
var overviewCard2 = document.getElementsByClassName("overview-card")[2];
var overviewCard3 = document.getElementsByClassName("overview-card")[3];
var overviewCard4 = document.getElementsByClassName("overview-card")[4];
var overviewCard5 = document.getElementsByClassName("overview-card")[5];
var overviewCard6 = document.getElementsByClassName("overview-card")[6];
var overviewCard7 = document.getElementsByClassName("overview-card")[7];
var follower = document.getElementsByClassName("follower")[0];
var follower1 = document.getElementsByClassName("follower")[1];
var follower2 = document.getElementsByClassName("follower")[2];
var follower3 = document.getElementsByClassName("follower")[3];
var number = document.getElementsByClassName("number")[0];
var number1 = document.getElementsByClassName("number")[1];
var number2 = document.getElementsByClassName("number")[2];
var number3 = document.getElementsByClassName("number")[3];
var number4 = document.getElementsByClassName("number2")[0];
var number5 = document.getElementsByClassName("number2")[1];
var number6 = document.getElementsByClassName("number2")[2];
var number7 = document.getElementsByClassName("number2")[3];
var number8 = document.getElementsByClassName("number2")[4];
var number9 = document.getElementsByClassName("number2")[5];
var number10 = document.getElementsByClassName("number2")[6];
var number11 = document.getElementsByClassName("number2")[7];
var overview = document.getElementsByClassName("overview-heading")[0];
var main = document.querySelector(".main-heading");
var attribution = document.querySelector(".attribution");
var link = document.querySelector(".link");



change.addEventListener("change", function(){
if(change.checked === true){
document.body.classList.add("white");
headerBg.classList.add("header-bg");
heading.classList.add("heading1");
subHeading.classList.add("subheading1");
card.classList.add("card-bg");
card1.classList.add("card-bg");
card2.classList.add("card-bg");
card3.classList.add("card-bg");
overviewCard.classList.add("card-bg");
overviewCard1.classList.add("card-bg");
overviewCard2.classList.add("card-bg");
overviewCard3.classList.add("card-bg");
overviewCard4.classList.add("card-bg");
overviewCard5.classList.add("card-bg");
overviewCard6.classList.add("card-bg");
overviewCard7.classList.add("card-bg");
follower.classList.add("follower");
follower1.classList.add("follower");
follower2.classList.add("follower");
follower3.classList.add("follower");
number.classList.add("number1");
number1.classList.add("number1");
number2.classList.add("number1");
number3.classList.add("number1");
main.classList.add("heading1");
number4.classList.add("number3");
number5.classList.add("number3");
number5.classList.add("number3");
number6.classList.add("number3");
number7.classList.add("number3");
number8.classList.add("number3");
number9.classList.add("number3");
number10.classList.add("number3");
number11.classList.add("number3");
attribution.style.color = "black";
link.style.color = "black";
}


else{
    document.body.classList.remove("white");
    headerBg.classList.remove("header-bg");
    heading.classList.remove("heading1");
    subHeading.classList.remove("subheading1");
     card.classList.remove("card-bg");
    card1.classList.remove("card-bg");
    card2.classList.remove("card-bg");
    card3.classList.remove("card-bg");
    overviewCard.classList.remove("card-bg");
    overviewCard1.classList.remove("card-bg");
    overviewCard2.classList.remove("card-bg");
    overviewCard3.classList.remove("card-bg");
    overviewCard4.classList.remove("card-bg");
    overviewCard5.classList.remove("card-bg");
    overviewCard6.classList.remove("card-bg");
    overviewCard7.classList.remove("card-bg");
    follower.classList.remove("follower");
    follower1.classList.remove("follower");
    follower2.classList.remove("follower");
    follower3.classList.remove("follower");
    number.classList.remove("number1");
    number1.classList.remove("number1");
    number2.classList.remove("number1");
    number3.classList.remove("number1");
    main.classList.remove("heading1");
    number4.classList.remove("number3");
    number5.classList.remove("number3");
    number6.classList.remove("number3");
    number7.classList.remove("number3");
    number8.classList.remove("number3");
    number9.classList.remove("number3");
    number10.classList.remove("number3");
    number11.classList.remove("number3");
    attribution.style.color = "white";
    link.style.color = "white";
}
});