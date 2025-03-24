import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import emailjs from "@emailjs/browser"; // Import emailjs

const variants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const ContactSection = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace these with your actual EmailJS service ID, template ID, and user ID
    const serviceID = "service_85gwale";
    const templateID = "template_l2ty6rc";
    const userID = "obMNLFC9b-Fhz__x1";

    emailjs.sendForm(serviceID, templateID, formRef.current, userID).then(
      (result) => {
        console.log(result.text);
        setSuccess(true);
        setError(false);
        formRef.current.reset(); // Reset the form after successful submission
      },
      (error) => {
        console.log(error.text);
        setError(true);
        setSuccess(false);
      }
    );
  };

  return (
    <motion.div
      ref={ref}
      className="h-screen max-w-[1366px] mx-auto pb-2 flex items-center gap-12 flex-col md:flex-row"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div
        className="flex-1 flex flex-col gap-6 text-center md:text-left"
        variants={variants}
      >
        <motion.h1
          className="text-5xl mt-20 md:mt-0 p-2 md:text-[100px] leading-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Let’s Connect
          <span className="block p-2 text-2xl md:text-2xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-600 mt-3 tracking-wide">
            Code the Future Together
          </span>
        </motion.h1>
        <motion.div className="flex flex-col gap-4 p-4" variants={variants}>
          <div className="text-lg">
            <strong>Address:</strong> Nagpur, Maharashtra
          </div>
          <div className="text-lg">
            <strong>Phone:</strong> +91 7249729185
          </div>
        </motion.div>
      </motion.div>

      <div className="flex-1 relative px-4">
        <motion.div
          className="absolute w-[320px] h-[320px] right-0 md:w-[450px] md:h-[450px] stroke-blue-400 z-[-1] p-4"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg viewBox="0 0 32.666 32.666">
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
                M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z 
                M16.333,0C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006
                c0-0.559-0.45-1.01-1.007-1.01c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319
                c7.896,0,14.317,6.424,14.317,14.319c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761
                c0.634-0.377,1.183-0.887,1.591-1.529c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518
                c0.243-1.064-4.658-3.143-5.084-1.814c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168
                c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092
                v0.002c-1.106-1.096-2.506-2.34-3.457-3.459c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699
                c1.326-0.424-0.75-5.328-1.816-5.084c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24
                c-2.799,1.774-3.16,6.082-0.428,9.292c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09
                c0.03,0.031,0.059,0.062,0.088,0.095l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098
                c3.67-2.021,5.312-6.338,5.312-9.719C32.666,7.326,25.339,0,16.333,0z"
            />
          </svg>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail} // Add the onSubmit handler
          className="flex flex-col gap-5 w-[80vw] md:w-full "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input
            type="text"
            required
            placeholder="Name"
            name="name"
            className="p-5 bg-transparent border  rounded-md"
          />
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            className="p-5 bg-transparent border rounded-md"
          />
          <textarea
            rows={8}
            placeholder="Message"
            name="message"
            className="p-5 bg-transparent border text-gray- rounded-md"
          />
          <button className="p-5 bg-blue-400 text-white font-semibold rounded-md hover:bg-blue-500">
            Submit
          </button>
          {error && <p className="text-red-500">Error sending message</p>}
          {success && (
            <p className="text-green-500">Message sent successfully!</p>
          )}
        </motion.form>

        {/* Footer Section */}
        <motion.div
          className="mt-6 flex justify-center gap-6 text-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <SiGmail />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
