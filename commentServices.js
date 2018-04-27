/*function getComments() {
    var xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.onreadystatechange = function() {
        if ( xmlHttpRequest.readyState == XMLHttpRequest.DONE && xmlHttpRequest.status == 200 ) {
            document.getElementById("comment").innerText = xmlHttpRequest.responseText;
        }
    };
    xmlHttpRequest.open('GET', 'http://localhost/comment', true);

    console.log("test");

    xmlHttpRequest.send();
}*/

function getComments() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';

    axios.get('http://localhost/')
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}