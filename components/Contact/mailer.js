import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) => {
  return emailjs.send(
    "service_45sv7oc",
    "template_klxhg8h",
    { name, email, message },
    "5woJ-BvsKYqlvYzuI"
  );
};

export default mail;
