import '../scss/style.scss';
$(function() {
/*Q and A starts here*/
const question = $('.QA').find('h2');
const answer =  $('.QA').find('p');
answer.hide();
question.on('click',function(){
  let thisAnswer = $(this).next();
  thisAnswer.slideToggle();
  answer.not(thisAnswer).hide();
});
/*Q and A ends here*/

/*Tabs starts here*/
const tabs = $('.tabs').find('li');
const text = $('nav').siblings();
text.hide();
tabs.on('click',function(){
  let thatText =   $('nav').siblings().eq([$(this).index()]);
  thatText.slideToggle();
  $('nav').siblings().not(thatText).hide();
});
/*Tabs ends here*/

/*Sticky menu starts here*/
const menu = $('.menu');
//on scroll
$(window).on('scroll',function(){
let scrollValue = $(document).scrollTop();
let positionTop = $('div:first-of-type').height();//position top depends on the height of previoues elements
if(scrollValue >= positionTop){
  menu.addClass('sticky');
}else{
  menu.removeClass('sticky');
}
});
/*Sticky menu  ends here*/

});
