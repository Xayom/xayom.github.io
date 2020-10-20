$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '2945152756',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: 'IGQVJYQUZAEaEdnNm9paVB2aU9CRlFFVDFtbEZAiUXN4Q2J2alVzeGtGcmFKU192SDIxNTNSX29sY3NFZA3YzWWN6MU1mVUxYZAmRyc21jMHAtOEllY29EdWhVWDBPTFM2ejJYZAXR5bzdoWnc2X3lXQVF1OAZDZD',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
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