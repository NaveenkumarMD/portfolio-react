import emailjs from '@emailjs/browser';

const sendMail = (from, message, email) => {
    emailjs.send("service_4kogzre", "template_g8o83ln", {
        from_name: from,
        message: message,
        email: email,
    },"user_64YUEdK5DuRK3XMyXRluy").then(res => {
        console.log("res", res)
    }).catch(err => {
        console.log("err is ", err)
    })
}

export default sendMail