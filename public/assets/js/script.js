//insode a function to make sure tha page has time to load first
$(function(){
    //button action to devour a burger
    $('.devour').on('click', function(event){
        
        let id = $(this)[0].dataset.id
        const devourObj = {devoured: 1}
        $.ajax('/api/change/' + id, {
            type: 'PUT', 
            data: devourObj
        }).then(() => location.reload()
        ).fail(()=>location.reload())
    });
    //form to insert new burger to menu
    $('.create-form').on('submit', event => {
        event.preventDefault();

        let newBurger = {
            burger_name : $('#bn').val().trim()
        }

        if ($('#bn').val().trim()) {
            $.ajax('/api/new', {
                type: 'POST',
                data: newBurger
            }).then(() => location.reload()).fail(() => location.reload())
        }
    })
});