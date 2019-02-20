$(document).ready(function () {
    $('.js--veg-btn').click(function () {
        var nav = $('.js--meals-showcase');
        var nav2 = $('.js--non-veg-meals-showcase');
        if (nav.is(":hidden") && nav2.is(":hidden")) {
            $('.js--welcome-text').hide(500);
            nav.first().show("fast", function showNext() {
                $(this).next(nav).show("fast", showNext);
            });
        } else if (nav2.is(":visible")) {

            nav2.first().hide("fast", function showNext() {
                $(this).next(nav).hide("fast", showNext);
            });

            nav.first().show("fast", function showNext() {
                $(this).next(nav).show("fast", showNext);
            });

        } else {

            nav.first().hide("fast", function showNext() {
                $(this).next(nav).hide("fast", showNext);
            });
            $('.js--welcome-text').show(1000);
        }

    });

    $('.js--non-veg-btn').click(function () {
        var nav = $('.js--non-veg-meals-showcase');
        var nav2 = $('.js--meals-showcase');
        if (nav.is(":hidden") && nav2.is(":hidden")) {
            $('.js--welcome-text').hide(500);
            nav.first().show("fast", function showNext() {
                $(this).next(nav).show("fast", showNext);
            });
        } else if (nav2.is(":visible")) {

            nav2.first().hide("fast", function showNext() {
                $(this).next(nav).hide("fast", showNext);
            });

            nav.first().show("fast", function showNext() {
                $(this).next(nav).show("fast", showNext);
            });

        } else {
            nav.first().hide("fast", function showNext() {
                $(this).next(nav).hide("fast", showNext);
            });
            $('.js--welcome-text').show(500);
        }

    });





});

//variables

var quantity;
var price;
var sum;
var vselect,nvselect;

init();


/*-----------------------------FOR VEG----------------------------------------------*/


/*-------------------------------------------------------------------------------------------*/
//Code for selecting a division
//Add these codes for each div added in html
//This is for VEG

document.querySelector('.veg-1').addEventListener('click', function () {

    if (vselect) {
        price = 60;
        vselected(1);
        document.querySelector('.icon-v-1').style.display = 'block';
    }


});

//veg - 2

document.querySelector('.veg-2').addEventListener('click', function () {
    if (vselect) {
        price = 110;
        vselected(2);
        document.querySelector('.icon-v-2').style.display = 'block';
    }
});

//veg - 3

document.querySelector('.veg-3').addEventListener('click', function () {
    if (vselect) {
        price = 110;
        vselected(3);
        document.querySelector('.icon-v-3').style.display = 'block';
    }
});

//veg - 4

document.querySelector('.veg-4').addEventListener('click', function () {
    if (vselect) {
        price = 110;
        vselected(4);
        document.querySelector('.icon-v-4').style.display = 'block';
    }
});

//veg - 5

document.querySelector('.veg-5').addEventListener('click', function () {
    if (vselect) {
        price = 110;
        vselected(5);
        document.querySelector('.icon-v-5').style.display = 'block';
    }
});

//veg - 6

document.querySelector('.veg-6').addEventListener('click', function () {
    if (vselect) {
        price = 110;
        vselected(6);
        document.querySelector('.icon-v-6').style.display = 'block';
    }
});

//veg - 7

document.querySelector('.veg-7').addEventListener('click', function () {
    if (vselect) {
        price = 110;
        vselected(7);
        document.querySelector('.icon-v-7').style.display = 'block';
    }
});

//veg - 8

document.querySelector('.veg-8').addEventListener('click', function () {
    if (vselect) {
        price = 110;
        vselected(8);
        document.querySelector('.icon-v-8').style.display = 'block';
    }
});

/*--------------------------------------------------------------------------------------------*/


//Code for unselecting veg
//Add these codes for each div added in html
/*---------------------------------------------------------------------------------------------*/

document.querySelector('.icon-v-1').addEventListener('click', function () {

    viconRemove(1);
    vselect = true;
    init();
});

//icon veg - 2

document.querySelector('.icon-v-2').addEventListener('click', function () {
    viconRemove(2);
    vselect = true;
    init();
});

//icon veg - 3

document.querySelector('.icon-v-3').addEventListener('click', function () {
    viconRemove(3);
    vselect = true;
    init();
});

//icon veg - 4

document.querySelector('.icon-v-4').addEventListener('click', function () {
    viconRemove(4);
    vselect = true;
    init();
});

//icon veg - 5

document.querySelector('.icon-v-5').addEventListener('click', function () {
    viconRemove(5);
    vselect = true;
    init();
});

//icon veg - 6

document.querySelector('.icon-v-6').addEventListener('click', function () {
    viconRemove(6);
    vselect = true;
    init();
});

//icon veg - 7

document.querySelector('.icon-v-7').addEventListener('click', function () {
    viconRemove(7);
    vselect = true;
    init();
});

//icon veg - 8

document.querySelector('.icon-v-8').addEventListener('click', function () {
    viconRemove(8);
    vselect = true;
    init();
});
/*----------------------------------------------------------------*/
//Funtions for veg

function viconRemove(number) {
    var div = document.querySelector('.v-' + number);
    div.classList.remove('overlay-select');
    div.classList.add('overlay');
    alert('You have unselected an item.');
}
//select an item

function vselected(order) {
    var div = document.querySelector('.v-' + order);
    if (div.classList.contains('overlay')) {
        div.classList.remove('overlay');
        div.classList.add('overlay-select');
        alert('You have selected an item.');
        vselect = false;
    } else {
        div.classList.remove('overlay-select');
        div.classList.add('overlay');
        alert('You have unselected an item.');
        init();
    }


}

/*------------------------------------------------------------------------------------------------*/


/*-----------------------------FOR NON-VEG----------------------------------------------*/


/*-------------------------------------------------------------------------------------------*/
//Code for selecting a division
//Add these codes for each div added in html
//This is for NON-VEG

document.querySelector('.non-veg-1').addEventListener('click', function () {

    if (nvselect) {
        price = 60;
        nvselected(1);
        document.querySelector('.icon-nv-1').style.display = 'block';
    }
});

//non-veg - 2

document.querySelector('.non-veg-2').addEventListener('click', function () {
    if (nvselect) {
        price = 110;
        nvselected(2);
        document.querySelector('.icon-nv-2').style.display = 'block';
    }
});

//non-veg - 3

document.querySelector('.non-veg-3').addEventListener('click', function () {
    if (nvselect) {
        price = 110;
        nvselected(3);
        document.querySelector('.icon-nv-3').style.display = 'block';
    }
});

//non-veg - 4

document.querySelector('.non-veg-4').addEventListener('click', function () {
    if (nvselect) {
        price = 110;
        nvselected(4);
        document.querySelector('.icon-nv-4').style.display = 'block';
    }
});

//non-veg - 5

document.querySelector('.non-veg-5').addEventListener('click', function () {
    if (nvselect) {
        price = 110;
        nvselected(5);
        document.querySelector('.icon-nv-5').style.display = 'block';
    }
});

//non-veg - 6

document.querySelector('.non-veg-6').addEventListener('click', function () {
    if (nvselect) {
        price = 110;
        nvselected(6);
        document.querySelector('.icon-nv-6').style.display = 'block';
    }
});

//non-veg - 7

document.querySelector('.non-veg-7').addEventListener('click', function () {
    if (nvselect) {
        price = 110;
        nvselected(7);
        document.querySelector('.icon-nv-7').style.display = 'block';
    }
});

//non-veg - 8

document.querySelector('.non-veg-8').addEventListener('click', function () {
    if (nvselect) {
        price = 110;
        nvselected(8);
        document.querySelector('.icon-nv-8').style.display = 'block';
    }
});




/*--------------------------------------------------------------------------------------------*/


//Code for unselecting non-veg
//Add these codes for each div added in html
/*---------------------------------------------------------------------------------------------*/

document.querySelector('.icon-nv-1').addEventListener('click', function () {

    nviconRemove(1);
    nvselect = true;
    init();
});

//icon - 2

document.querySelector('.icon-nv-2').addEventListener('click', function () {
    nviconRemove(2);
    nvselect = true;
    init();
});

//icon - 3

document.querySelector('.icon-nv-3').addEventListener('click', function () {
    nviconRemove(3);
    nvselect = true;
    init();
});

//icon - 4

document.querySelector('.icon-nv-4').addEventListener('click', function () {
    nviconRemove(4);
    nvselect = true;
    init();
});

//icon - 5

document.querySelector('.icon-nv-5').addEventListener('click', function () {
    nviconRemove(5);
    nvselect = true;
    init();
});

//icon - 6

document.querySelector('.icon-nv-6').addEventListener('click', function () {
    nviconRemove(6);
    nvselect = true;
    init();
});

//icon - 7

document.querySelector('.icon-nv-7').addEventListener('click', function () {
    nviconRemove(7);
    nvselect = true;
    init();
});

//icon - 8

document.querySelector('.icon-nv-8').addEventListener('click', function () {
    nviconRemove(8);
    nvselect = true;
    init();
});

/*------------------------------------------------------------------------------------------------*/


//functions
/*-------------------------------------------------------------------------------------------------*/

//only for icon

function nviconRemove(number) {
    var div = document.querySelector('.nv-' + number);
    div.classList.remove('overlay-select');
    div.classList.add('overlay');
    alert('You have unselected an item.');
}
//select an item

function nvselected(order) {
    var div = document.querySelector('.nv-' + order);
    if (div.classList.contains('overlay')) {
        div.classList.remove('overlay');
        div.classList.add('overlay-select');
        alert('You have selected an item.');
        nvselect = false;
    } else {
        div.classList.remove('overlay-select');
        div.classList.add('overlay');
        alert('You have unselected an item.');
        init();
    }


}

//to calculate sum

function displaySum() {

    quantity = document.getElementById('quantity').value;
    sum = quantity * price;
    document.getElementById('total').textContent = 'Rs.' + sum;
}

//to initialise

function init() {
    nvselect = true;
    vselect = true;
    quantity = 0;
    price = 0;
    sum = 0;
    document.getElementById('total').textContent = sum;
    document.getElementById('quantity').textContent = '0';
}
/*------------------------------------------------------------------------------------*/
