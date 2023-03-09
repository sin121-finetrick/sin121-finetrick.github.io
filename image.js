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

</script>