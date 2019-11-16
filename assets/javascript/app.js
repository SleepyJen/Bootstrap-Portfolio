$(document).ready(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyAcoqEzEoGwruD3KPODf-plA9KDEap9uHI",
        authDomain: "contact-me-a905d.firebaseapp.com",
        databaseURL: "https://contact-me-a905d.firebaseio.com",
        projectId: "contact-me-a905d",
        storageBucket: "contact-me-a905d.appspot.com",
        messagingSenderId: "571241693709",
        appId: "1:571241693709:web:a1e1a101a159b8d66b8b44"
    };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    $('.btn').on('click', function () {
        let name = $('#name').val();
        let email = $('#email').val();
        let message = $('#message').val();

        db.ref(name).set({
            name: name,
            email: email,
            message: message
        });

        $('#name').val('');
        $('#email').val('');
        $('#message').val('');

        alert('Thank you! your message has been sent');

    });

});