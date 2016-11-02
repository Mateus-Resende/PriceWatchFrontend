// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require turbolinks
//= require jquery_ujs
//= require_tree .

var ss = ".selectors",
	ps = ".products";

$(document).on("click", ".sandwich_menu", function() {
	var temp = $($(document).find(ss));

	if(temp.data("actived")) {
		temp.data("actived", false);
		temp.css({left: "-100%"});
	} else {
		temp.data("actived", true);
		temp.css({left: "0"});
	}
});

$(document).on("click", ".products_page", function() {
    var url = $(this).prop("href");
    if(url){
	    $.ajax({
		    url: url,
		    type: "GET",
		    dataType : "html",
		    beforeSend: function(){
		    	animateBefore(ps);
		    },
		    success: function(data) {
		    	replaceWithNew(ps, data);
		    },
		    complete: function(){
		    	animateAfter(ps);
		    }
	    });
    }
});

function animateBefore(elem){
	$(elem).animate({
		opacity: 0,
		left: "100%"
	},
	100);
}

function animateAfter(elem){
	$(elem).animate({
		opacity: 1,
		left: "0"
	},
	700);
}

function replaceWithNew(elem, data){
	$(elem).replaceWith($(data).find(elem));
}

$(document).on("change", ".category_type", function() {
    var url = $(location).attr("href");
    var data = $("form[name='fields']").serialize();

    $.ajax({
	    url: url,
	    type: "GET",
	    data: data,
	    dataType : "html",
	    beforeSend: function(){
	    	animateBefore(ss);
	    	animateBefore(ps);
	    },
	    success: function(data) {
	    	replaceWithNew(ss, data);
	    	replaceWithNew(ps, data);
	    },
	    complete: function(){
	    	animateAfter(ss);
	    	animateAfter(ps);
	    }
    });
});