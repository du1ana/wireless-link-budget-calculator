function Calculate(inputForm){
  ptx=parseInt(inputForm.ptx.value);
  gtx=parseInt(inputForm.gtx.value);
  filter_ltx=parseInt(inputForm.filter_ltx.value);
  jumper_ltx=parseInt(inputForm.jumper_ltx.value);
  feedline_ltx=parseInt(inputForm.feedline_ltx.value);
  lfs=parseInt(inputForm.lfs.value);
  grx=parseInt(inputForm.grx.value);
  lm=parseInt(inputForm.lm.value);
  feedline_lrx=parseInt(inputForm.feedline_lrx.value);
  filter_lrx=parseInt(inputForm.filter_lrx.value);
  if(inputForm.srx.value!=""){srx=parseInt(inputForm.srx.value);}




  var eirp=ptx+gtx-filter_ltx-jumper_ltx-feedline_ltx;
  var fspl=lfs;
  var receiverSide=grx-lm-feedline_lrx-filter_lrx;
  if(inputForm.srx.value!=""){var receiverSensitivity=srx;}

  var rss=eirp-fspl+receiverSide;

  var result,result2;

  result="".concat("<u>Results:</u><br/>Equivalent Isotropic Radiated Power:<b>",eirp,inputForm.ptxUnit.value,"</b><br/>",
  "Free Space Path Loss:<b>",fspl,inputForm.lfsUnit.value,"</b><br/>"
  ,"Received Signal Strength:<b>",rss,inputForm.ptxUnit.value,"</b><br/> ");



if(inputForm.srx.value!=""){
if(rss>=receiverSensitivity){
  result2="<br/><b>Congratulations, your link is feasible.</b>";
}else{
  result2="<br/><b>Unfortunately your link is not feasible. Try lowering the receiver sensitivity.</b>";
}}

document.getElementById("result").innerHTML=result;

if(result2){
document.getElementById("result2").innerHTML=result2;
};

}
