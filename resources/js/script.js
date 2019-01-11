$(document).ready(function () {
    $('.js--veg-btn').click(function () {
        var nav = $('.js--meals-showcase');
        var nav2 = $('.js--non-veg-meals-showcase');
        if (nav.is(":hidden")&&nav2.is(":hidden")) {
            $('.js--welcome-text').hide(500);
            nav.first().show("fast", function showNext() {
                $(this).next(nav).show("fast", showNext);
            });
        }
        else if(nav2.is(":visible")){
            
            nav2.first().hide("fast", function showNext() {
                $(this).next(nav).hide("fast", showNext);
            });
            
            nav.first().show("fast", function showNext() {
                $(this).next(nav).show("fast", showNext);
            });
            
        }
        else{
            
            nav.first().hide("fast", function showNext() {
                $(this).next(nav).hide("fast", showNext);
            });
            $('.js--welcome-text').show(1000);
        }

    });
    
    $('.js--non-veg-btn').click(function () {
        var nav = $('.js--non-veg-meals-showcase');
        var nav2= $('.js--meals-showcase');
        if (nav.is(":hidden")&&nav2.is(":hidden")) {
            $('.js--welcome-text').hide(500);
            nav.first().show("fast", function showNext() {
                $(this).next(nav).show("fast", showNext);
            });
        }
        else if(nav2.is(":visible")){
            
            nav2.first().hide("fast", function showNext() {
                $(this).next(nav).hide("fast", showNext);
            });
            
            nav.first().show("fast", function showNext() {
                $(this).next(nav).show("fast", showNext);
            });
            
        }
        
        else {
            nav.first().hide("fast", function showNext() {
                $(this).next(nav).hide("fast", showNext);
            });
            $('.js--welcome-text').show(500);
        }

    });
    
});
