'use strict';

$(document).ready(function() {
    $('#settings-window').hide();
    toggleDiv();
    toggleSearch();
    toggleMultimedia();
    toggleQuotes();
    toggleTodo();
});

function toggleDiv() {
    $('.rotate').click(function() {
        $(this).toggleClass('down');
        $('#settings-window').toggle('slow');
    });
}

function toggleSearch() {
    $('#onoffSearch').click(function() {
        if ($(this).is(':checked')) {
            $('#search-container').show();
        } else {
            $('#search-container').hide();
        }
    });
}

function toggleMultimedia() {
    $('#onoffMultimedia').click(function() {
        if ($(this).is(':checked')) {
            $('#multimedia').show();
        } else {
            $('#multimedia').hide();
        }
    });
}

function toggleQuotes() {
    $('#onoffQuotes').click(function() {
        if ($(this).is(':checked')) {
            $('#quote-container').show();
        } else {
            $('#quote-container').hide();
        }
    });
}

function toggleTodo() {
    $('#onoffTodo').click(function() {
        if ($(this).is(':checked')) {
            $('#todo-container').show();
        } else {
            $('#todo-container').hide();
        }
    });
}
