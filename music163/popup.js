$(function(){

    var $inputHandleLink = $('#handle-link');
    var $inputShortLink = $('#short-link');

    $(document).on('click', '.js-convert-short', function(){
        var url = $inputHandleLink.val();
        if (!url) {
            return;
        }
        LinkService.getShortLink(url)
          .done(function(resp){
                var url = 'http://d.qunar.com/' + resp.shortUrl;
                $inputShortLink.val(url);
          });
    });

    $(document).on('click', '.js-gen-app-link', function(){
    });

});


// -------------------

var LinkService = {
    getShortLink: function(url){
        var df = $.Deferred();

        // var xhr = new XMLHttpRequest();
        // xhr.open("POST", "http://surl.corp.qunar.com/url/convert.do", true);
        // xhr.onreadystatechange = function() {
        //   if (xhr.readyState == 4) {
        //     var resp = JSON.parse(xhr.responseText);
        //     df.resolve(resp);
        //   }
        // }
        // xhr.send();

        $.ajax({
            url: 'http://surl.corp.qunar.com/url/convert.do',
            type: 'POST',
            dataType: 'json',
            data: {
                url: url
            }
        })
        .done(function(resp){
            df.resolve(resp);
        })
        .fail(function(resp){
            df.reject(resp);
        });

        return df;
    }
};