var currentQuote = "";
var currentAuthor = "";
$(document).ready(function(){
	getQuotation();
	//New_Quote Button Event Handler.
	$("#get-another").on("click", function(){
		getQuotation();
	});
	//Twitter Button Event Handler.
	$('#tweetit').click(function() {
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + currentQuote + currentAuthor);
  });
});

function getQuotation() {
	$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json){
	$('#quote').hide();
	$('#author').hide();

	currentQuote = '<i class="fa fa-quote-left" aria-hidden="true"></i> ' + json.quoteText + ' <i class="fa fa-quote-right" aria-hidden="true"></i>';
    if (json.quoteAuthor !== "") {
      	currentAuthor = "- "+json.quoteAuthor;
    } 
    else {
      	currentAuthor = "- Unknown";
    }
    $("#quote").html(currentQuote);
    $("#author").html(currentAuthor);
    $("#quote").hide();
    $("#author").hide();

    $("#quote").fadeIn(3000);
    $("#author").fadeIn(3000);
	});
}