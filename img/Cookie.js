var cookietest = s.getNewRepeat();
var visitnew = $.cookie('newvisit');      // get the cookie name
var visitexist = $.cookie('existvisit');  // get the cookie name
var existcust = $.cookie('existcust');   // get the cookie name
//$.cookie('existcust', 'existcustvalue', { expires: 3000, path: '/' });
s.pageName=s.getPageName();
if($.cookie('existcust')=="existcustvalue")
{
$.cookie('newvisit', null, { path: '/' });
$.cookie('existvisit', null, { path: '/' });
s.prop26 = "Existing Customer";
s.prop27 = "Existing Customer"+" - "+s.pageName;
//s.prop23=s.prop26+">"+s.pageName;
}
else if(cookietest == "New")
{
$.cookie('newvisit', 'newvisitvalue', { expires: 3000, path: '/' });
$.cookie('existvisit', null, { path: '/' });
$.cookie('existcust', null, { path: '/' });
s.prop26 = "New Visitor";
s.prop27 = "New Visitor"+" - "+s.pageName;
//s.prop26 = "New Visitor";
}
else if(cookietest == "Repeat")
{
$.cookie('existvisit', 'existvisitvalue', { expires: 3000, path: '/' });
$.cookie('newvisit', null, { path: '/' });
$.cookie('existcust', null, { path: '/' });
s.prop26 = "Existing Visitor";
s.prop27 = "Existing Visitor"+" - "+s.pageName;
//s.prop26 = "Existing Visitor";
}






var currentpage=location.href.substr(location.href.lastIndexOf(".sg/")+1,location.href.length);
var newcurrentpage1=currentpage.indexOf(".htm");
var newcurrentpage=currentpage.substring(0,newcurrentpage1);  

if(newcurrentpage=='sg/gcb/credit_cards/creditcard' || newcurrentpage=='sg/gcb/credit_cards/cc_qcash' || newcurrentpage=='sg/gcb/credit_cards/balance' || newcurrentpage=='sg/gcb/credit_cards/citi_creditlimit' || newcurrentpage=='sg/gcb/credit_cards/citi_credit_card_upgrade' || newcurrentpage=='sg/gcb/credit_cards/cc_globeshopper' || newcurrentpage=='sg/gcb/insurance/safetravel' || newcurrentpage=='sg/gcb/mortgages/mortgages' || newcurrentpage=='sg/gcb/loans/loans' || newcurrentpage=='sg/gcb/investments/investments' || newcurrentpage=='sg/gcb/ready_credit/ready_credit' || newcurrentpage=='sg/gcb/ready_credit/rc_smartcash' || newcurrentpage=='sg/gcb/ready_credit/rc_pomotions'|| newcurrentpage=='sg/gcb/otherservices/overseas_usage' || newcurrentpage=='sg/gcb/ready_credit/rc_paylite' || newcurrentpage=='sg/gcb/ready_credit/rc_ready_credit' || newcurrentpage=='sg/gcb/landing_page/clickforcash/clickcash/click_for_cash'  )
{
	$.cookie('eXsell', 'eXsell', {expires :3000, path: '/' });
	}


