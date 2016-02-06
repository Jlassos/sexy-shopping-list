$(document).ready(function() {
    $('#add').click(function () {
        var itemName = $('#itemName').val();
        if ($("#itemName").val() == '') {
            $('#alert').html("<strong>Warning!</strong> You left the item empty");
            $('#alert').fadeIn().delay(1000).fadeOut();
            return false;
        }
        $('#items').append("<li>" + itemName + "</li>");
        $('#form')[0].reset();
        var items = $('#items').html();
        localStorage.setItem('items', items);
        return false;
    });

    if (localStorage.getItem('items')) {
        $('#items').html(localStorage.getItem('items'));
    }

    $('#clear').click(function () {
        window.localStorage.clear();
        location.reload();
        return false;

    });
    $('li').click(function(e){
        $(e.target).remove();
        window.localStorage.removeItem(key);
        return false;
    });
});