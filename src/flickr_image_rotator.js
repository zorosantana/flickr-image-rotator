/**
 * jQuery Flickr Image Rotator Plugin
 *
 * @author Zoro Santana
 */


/**
 * TODO
 */
function timerSetup() {
    var newTimer;

    this.stop = function () {

    }

    this.start = function () {

    }
}

/**
 * Get Flickr pictures by tag names.
 *
 * @param flickrTags
 */
function getPictures(flickrTags) {

    // Get tags from input field
    if ($('#flickrTags').val()) {

        // Tags have been submitted

        // Empty image container
        $('#image-rotator').empty();
    }
    else {
        // Default tags
        flickrTags = 'nature, green, meditation';
    }

    // Load Flickr images
    $.getJSON( "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
            tags: flickrTags,
            tagmode: "any",
            format: "json"
        },
        flickrApiCallback);

    // Rotate images every 3s
    setInterval("rotateImages()", 4000);
}

/**
 * Flickr API Callback.
 *
 * @param flickrResult
 */
function flickrApiCallback(flickrResult) {

    // Loop through the Flickr result items
    $.each(flickrResult.items, function(i, item) {
        if (i === 0) {
            // Create div with current class
            var imageDiv = $("<div class='current'>");
        }
        else {
            // Create div for next picture
            imageDiv = $("<div>");

            // Hide div from underneath current picture
            imageDiv.hide();
        }

        // Append recently created div to image rotator container
        imageDiv.appendTo("#image-rotator");

        // Create and append image to new div
        $("<img>").attr("src", item.media.m).appendTo(imageDiv);

        // Only rotating five pictures
        if (i === 5) {
            return false;
        }
    });
}

/**
 * Rotate Flickr Images.
 */
function rotateImages() {
    // Get the current image
    var currentImage = $('#image-rotator div.current');
    // Get next image
    var nextPhoto = currentImage.next();

    // It's the last image so start over
    if (nextPhoto.length == 0)
        nextPhoto = $('#image-rotator div:first');

    // Replace current class with previous, then hide it
    currentImage.removeClass('current')
        .addClass('previous')
        .hide();

    // Next photo becomes current
    nextPhoto.css({ opacity: 0.0 })
        .addClass('current')
        .show()
        .animate({opacity: 1.0 }, 1000, function() {
                currentImage.removeClass('previous');
            });
}