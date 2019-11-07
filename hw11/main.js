let lang = 'https://translate.yandex.net/api/v1.5/tr.json/detect';
let keyAPI = "trnsl.1.1.20130922T110455Z.4a9208e68c61a760.f819c1db302ba637c2bea1befa4db9f784e9fbb8";
let url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
let outputEl = document.querySelector('#output');
let source1 = document.querySelector('#source1');
let source = document.querySelector('#source').value;


document.querySelector('#translate').addEventListener('click', function() {

    const xhr = new XMLHttpRequest();
    
    const xhrb = new XMLHttpRequest();

    xhrb.open('get', sendResponse());
    xhrb.send(); 
    xhrb.addEventListener('load' , function() {
       let response = JSON.parse(xhrb.response); 
    
    let textAPI = source1.value
    urlResponse = 'key='+keyAPI+'&text='+textAPI+'&lang='+response.lang;
    
        xhr.open('POST',url);
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xhr.send(urlResponse);
    })
        xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let res = this.responseText;
        let json = JSON.parse(res);
        if(json.code == 200) {
            outputEl.innerHTML = json.text[0];
        }
        else {
            outputEl.innerHTML = 'Error Code: ' + json.code;
        }
    }
}
});

function sendResponse () {
    translatingEl = source.value;
    const textURI = encodeURI(translatingEl);
    lang += '?key=' + keyAPI + '&text=' + textURI;

    return lang;
}
