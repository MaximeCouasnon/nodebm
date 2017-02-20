// FOR CONTENT
$(document).ready( function() {
        $("#CP").hide();
        $("#CS").hide();
        $("#CA").hide();
        $("#CC").hide();
});

// NAVIGATION / MENU SHOW HIDE
$(document).ready( function(){
        $("#menu").hide();
})

$(document).ready( function() {
        $("#logo").click(function() {
                $("#menu").show();
                $("#menu").transition({
                        y: '330px'
                });
                $("#logo").hide();
                $("#logob").show();
        });
});

$(document).ready( function() {
        $("#logob").click(function() {
                $("#menu").transition({
                        y: '0px'
                });
                setTimeout(function() {$("#menu").hide()},300);
                $("#logo").show();
                $("#logob").hide();
        });
});

/* BOTTOM CONTACT EMAIL BUTTON LOAD THE CONTACT MENU PAGE */
$(".MB").click( function() {
        $("#menu").transition({
                y: '0px'
        });
        $("#button_nav_a").show();
        $("#button_nav_b").hide();
        $("#CH").fadeOut(100).delay(450);
        $("#CP").fadeOut(100).delay(450);
        $("#CS").fadeOut(100).delay(450);
        $("#CA").fadeOut(100).delay(450);
        $("#CC").fadeIn(400);
});
	


// SOCIAL NETWORK SHOW HIDE
$(document).ready( function() {
        $("#social").toggle(function() {
                $("#social_icons").slideDown( 200 )
        }, function(){
                $("#social_icons").slideUp( 200 ); 
        });
});

/* INFORMATION BUBBLES HIDE */
$(document).ready( function() {
        $(".whide").click( function() {
                $(".warning").fadeOut(500);
        });
	
        $(".nhide").click( function() {
                $(".notice").fadeOut(500);
        });
	
        $(".nnhide").click( function() {
                $(".note").fadeOut(500);
        });
});

