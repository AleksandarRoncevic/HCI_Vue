function onSubmitSubscribe() {
    var email = document.getElementById('subs').innerHTML;
    if (email.length == 0) {
        window.alert("Please enter a valid email.");
    } else {
        document.getElementById('subs').innerHTML = '';
        window.confirm("Succesfully subscribes to newsletter");
    }
}