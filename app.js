$(document).ready(function () {

    let $newItemForm = $('#newItemForm');
    let $list = $('ul');

    $newItemForm.on('submit', function (e) {
    e.preventDefault();
    let text = $('input:text').val();
    $list.append('<li>' + text + '</li>')
        
    });

    $list.on('click', 'li', function () {
        let $this = $(this);
        $this.remove(); 
    });
    
});