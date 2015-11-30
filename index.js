$(function() {
    var play_sound = function(bite) {
        bite.find('i.fa-pause').show();
        bite.find('i.fa-play').hide();
        bite.find('#player').addClass('active')

        if (window.current_cell) {
            stop_sound(window.current_cell);
            window.sound.pause();
        }

        window.current_cell = bite
        window.sound = new Audio(bite.data('src'));
        window.sound.onended = function() {
            stop_sound(window.current_cell)
            window.current_cell = null
            window.sound = null
        }
        window.sound.play();
    }

    var stop_sound = function(bite) {
        window.sound.pause();

        bite.find('i.fa-pause').hide();
        bite.find('i.fa-play').show();
        bite.find('#player').removeClass('active')
    }

    $('.soundbite i.fa-play').click(function() {
        play_sound($(this).parents('.soundbite'));
    })

    $('.soundbite i.fa-pause').click(function() {
        stop_sound($(this).parents('.soundbite'));
    })
})