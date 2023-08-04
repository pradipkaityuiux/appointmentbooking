// function sendAppointmemt() {
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "pradipkaityux@gmail.com",
//         Password: "20785C9DB1881A357BD1FAAC029A14A83F79",
//         To: 'pradipforofficial@gmail.com',
//         From: document.getElementById("mobileNumber").value,
//         Subject: "This is the subject",
//         Body: "Enquiry for: " + document.getElementsByName("appointment").value + "<br> Name: " + document.getElementById("fullName").value + "<br> Sex: " + document.getElementsByName("sex").value + "<br> Mobile Number: " + document.getElementById("MobileNumber")
//     }).then(
//         message => alert("message sent successfully")
//     );

// }

// function sendAppointment() {
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "pradipkaityux@gmail.com",
//         Password: "20785C9DB1881A357BD1FAAC029A14A83F79",
//         To: 'pradipforofficial@gmail.com',
//         From: document.getElementById("mobileNumber").value,
//         Subject: "This is the subject",
//         // Body: "Enquiry for: " + document.getElementsByName("appointment").value + "<br> Name: " + document.getElementById("fullName").value + "<br> Sex: " + document.getElementsByName("sex").value + "<br> Mobile Number: " + document.getElementById("MobileNumber")
//         Body: "Hello I am Here"
//     }).then(
//         message => alert("message sent successfully")
//     );
// }
// var form = document.getElementById('sheetdb-form');
// form.addEventListener("submit", e => {
//     e.preventDefault();
//     fetch(form.action, {
//         method: "POST",
//         body: new FormData(document.getElementById("sheetdb-form")),
//     }).then(
//         response => response.json()
//     ).then((html) => {
//         // you can put any JS code here
//         window.open('page2.html', '_blank');

//     });
// });