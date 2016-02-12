$(document).ready(function() {
    var write_list_to_storage = function() {
        var items = $('#items').html();
        localStorage.setItem('items', items);
    };
    //Add an item
    $('#add').click(function () {
        var itemName = $('#itemName').val();
        if ($("#itemName").val() == '') {
            $('#alert').html("<strong>Warning!</strong> You left the item empty");
            $('#alert').fadeIn().delay(1000).fadeOut();
            //$("#itemName").addClass(".error").delay(1000).removeClass(".error");
            return false;
        }
        $('#items').append("<li>" + itemName + "</li>");
        $("#itemName").val('');
        write_list_to_storage();
        return false;
    });

    if (localStorage.getItem('items')) {
        $('#items').html(localStorage.getItem('items'));
}
// Clear All storage
$('#clear').click(function () {
    window.localStorage.clear();
    location.reload();
    return false;
});
// Click to remove item
$("body").on('click', "li", function(e){
    $(e.target).remove();
    write_list_to_storage();
    return false;
});
});