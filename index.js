$(function handlingList(){
    $('#js-shopping-list-form').on('submit', function(event) {
        event.preventDefault();
        const itemName = $('#shopping-list-entry').val();
            $("ul").append(
                "<li>" +
                "<span class='shopping-item'>"+ itemName + "</span>" +
                '<div class="shopping-item-controls">' +
                  '<button class="shopping-item-toggle">' + 
                    '<span class="button-label">check</span>' +
                  '</button> ' +
                  '<button class="shopping-item-delete">' +
                    '<span class="button-label">delete</span>' +
                  '</button>' +
                '</div>'
            )
        });
    $('ul').on('click', '.shopping-item-delete', function(event) {
        this.closest('li').remove();
    });

    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
    });
});

