$(document).ready(function() {  
    var numHeaders = 4;

    var header = 1;
    setInterval(function() {
        header++;
        if (header > numHeaders) {
            header = 1;
        }
$('.banner-img').css({"background":"url(img/b"+header+".jpg",
                      'background-repeat':'no-repeat',
                       'background-position':'center',
                       'position':'absolute',
                       'top':'0',
                       'left':'0',
                       'width':'100%',
                       'height':'100%',
                       '-webkit-background-size':'cover',
                       '-moz-background-size': 'cover',
                       'background-size':'cover',
                       '-o-background-size': 'cover',
                       'z-index':'-10'});        
    }, 3000);
});