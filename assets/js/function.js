function sendMail() {
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var messageElement = document.getElementById("message");
    var request = new XMLHttpRequest();
    var params = {
                     "name": nameElement.value,
                     "mailAddress": emailElement.value,
                     "message": messageElement.value
                 }
    request.open("POST", "http://localhost:8080/receive");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.onload = () => {
        console.log("Mail sent successfully with status code : " + request.status);
        nameElement.value = "";
        emailElement.value = "";
        messageElement.value = "";
    }
    var response = request.send(JSON.stringify(params));
}