// Add some JavaScript
function updateChange($this) {
    var html = $this.value;
    document.getElementById('mkd-send').value = html;
    renderMarkup('http://localhost:4500/editor/render', html, function(res) {
        document.getElementById('preview').innerHTML = res;
    });
}

function changeTitle($this) {
    var html = $this.innerHTML.replace(/<(\/)?div>/gi, '');
    document.getElementById('title-send').value = html;
    document.getElementById('preview-title').innerHTML = html;
}

function renderMarkup(url, body, cFunction) {
    console.log(body);
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== '') {
                console.log('returned ' + this.responseText);
                cFunction(this.responseText);
            }
        }
    };
    xhttp.open('POST', url, true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify({ markdown: body }));
}
