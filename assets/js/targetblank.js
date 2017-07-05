$(document).ready( function() {
    var c_host = document.location.host.replace(/www\./, '');
        $(document.body).on('click', 'a', function() {
            if (this.href && this.href.indexOf(c_host) == -1) {
              $(this).attr('target', '_blank');
            }
        });
    });