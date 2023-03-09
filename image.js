<script>
function getImgData(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', '画像のURL', true);
    xhr.responseType = 'blob';
    xhr.send();
}

getImgData(function(dataUrl) {
    var img = document.createElement('img');
    img.src = dataUrl;
    document.body.appendChild(img);
});

getImgData("https://skeb.imgix.net/uploads/origins/65f92c43-5ca0-475e-b58a-3acd898da840?bg=%23fff&fm=png&w=1920&h=1080&fit=fill&fill=blur&mark64=aHR0cHM6Ly9za2ViLWF2YXRhci5pbWdpeC5uZXQvfnRleHQ_YXV0bz1mb3JtYXQmZm09cG5nJnR4dDY0PTQ0R0c0NEdoNDRHdTVhMlE0NE9xNDRLdjQ0S280NEs1NDRPSUNtaDBkSEJ6T2k4dmMydGxZaTVxY0M5QVJXNTFUV2w1WVc0dmQyOXlhM012TVRNeUN1T0NyLU9EcXVPQ3FPT0NwT09Ddi1PRHZEcE9UWG53bjVhTWMydGxZdVdQbC1TN21PUzRyU2hBUlc1MVRXbDVZVzRwQ3VPQ3ItT0RxZU9DcE9PQ291T0RzLU9EaURwVWJHRnpkR1Z5S0VCTlZHeGhjM1JsY2lrJnR4dGZvbnQ9SGVsdmV0aWNhJTJDQm9sZCZ0eHRjb2xvcj1mZmYmdHh0c2l6ZT0yMiZ0eHRzaGFkPTEwJnR4dGFsaWduPWxlZnQlMkN0b3AmdHh0cGFkPTMwJnc9NTg0JnM9ZjY1ZGI5ODk5YzM3ZGFmNjQ5NWE5YjA5NzEwZjMwNTM&markalign=left%2Ctop&marky=780&s=c812778d699aba6191c1725c60459eff");
</script>