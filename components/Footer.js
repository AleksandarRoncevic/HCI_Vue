app.component('footer-bar', {
    template: `<div class="footer">
    <span>
        <img class="logo" src="assets/images/logo.png" alt=" Opet logo">
    </span>
    <span>
        <a href="./index.html">Home</a>
        <a href="./about.html">About us</a>
        <a href="./contact.html">Contact Us</a>
    </span>
    <span id="contact-info">
        <p>Adresa: Štrosmajerova 16, Novi Sad</p>
        <p>Email: mail@hostel.com</p>
        <p>Telelphone: 021/455-213</p>
    </span>
    <span id="subscribe">
        <form onsubmit="onSubmitSubscribe()">
            <label for="subs" style="color: rgba(255, 255, 255, 0.8);">Get our newsletter: </label>
            <input type="mail" name="mail" id="subs">
            <button type="submit">Subscribe</button>
        </form>
    </span>
</div>`
});