$(document).ready(function() {
var feedo={};
function aclick(t) {
		var a=$(t).prop("id");
		curA.id=a.substring(1);
		//$(".maincontent").addClass("hideit");
		$(".wrapper").prop("class","wrapperactive");
		$(".wrapperactive").html("");
		$(".wrapperactive").append($("#"+a).html());
		$("#d"+curA.id).prepend('<div class="wrapperclose"><img src="/images/close.jpg" title="Close" style="height:30px; width:30px;"/></div>');
		$("#h"+curA.id).prepend('<div class="highlighters"><img src="/images/highlight.jpg" type="button" ontouchstart="highlightSelectedText();" onclick="highlightSelectedText();" title="Highlight selection"/>        <img src="/images/de-highlight.jpg" type="button" ontouchstart="removeHighlightFromSelectedText();" onclick="removeHighlightFromSelectedText();" title="Remove highlights from selection"></div>');
		$(".wrapperactive").fadeIn();
		
		$(".wrapperclose").click(function() {
			$(".wrapperactive").fadeOut(500,function() {
				$(".wrapperactive").prop("class","wrapper");
			});
		});
		
		$('.wrapperactive .a_c').bind('mousewheel', function(e){
				$(this).scrollTop($(this).scrollTop()-e.originalEvent.wheelDeltaY);
				//prevent page fom scrolling
				return false;    
		});
}

function processDates(page) {
	if(!feedo.lastdate) {
	var today = new Date();
	feedo.lastdate=today;
	}
	skip=page*10;
	for(i=skip;i<skip+10;i++) {
		var j;
		if(i<10) {
		j="0"+i;
		} else {
		j=i;
		}
		$("#date"+j).html(moment(feedo.lastdate).format("MMMM Do, YYYY"));
		feedo.lastdate.setDate(feedo.lastdate.getDate()-1);
	}
	
}
processDates(0);
	$(".wrapper").fadeOut();
    rangy.init();
    var sel = rangy.getSelection();
    //sel.selectAllChildren(document.body);
    console.log("ready!");
	var curA={};
	curA.id=null;
	curA.page=0;
	$(".a_l").click(function() {
	aclick(this);
	});
	
	$("#loadMore").click(function() {
		curA.page++;
		$("#loadMore").html("Loading...");
		$.ajax({
		  url: "/loadajax/"+curA.page
		}).done(function(data) {
		  $(".alist").append( data );
			$(".a_l").click(function() {
			aclick(this);
			});
			processDates(curA.page);
		  $("#loadMore").html("More");
		}).fail(function() {
			curA.page--;
		  $("#loadMore").html("Error Loading Content.. Click to retry!");
		});
	});
	
});

var serializedHighlights = decodeURIComponent(window.location.search.slice(window.location.search.indexOf("=") + 1));
var highlighter;

var initialDoc;

window.onload = function() {
    rangy.init();

    highlighter = rangy.createHighlighter();

    highlighter.addClassApplier(rangy.createCssClassApplier("highlight", {
        ignoreWhiteSpace: true,
        tagNames: ["span", "a"]
    }));
};


function highlightSelectedText() {
    highlighter.highlightSelection("highlight");
}

function removeHighlightFromSelectedText() {
    highlighter.unhighlightSelection();
}
