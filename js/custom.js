$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '39676335782',
        limit: 3,
        resolution: 'standard_resolution',
        accessToken: 'IGQVJVRGdudzFZARDUwVjJLbVp2X2dqNXlpUG1BVTJkNFc3RHZAJNjFoOHRxVGctYi1KdlM3ME0zUXBxMFRlLXc0MWI5am5hTmx0MEI5Y1lZANVEzZAUsxVDdHTFFyV25nTFBlS0U5WVVIeHB3RzNzWmNLMAZDZD',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});