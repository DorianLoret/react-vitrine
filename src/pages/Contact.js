import React from "react";
import Buttons from "../components/Buttons";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };

  return (
    <main>
      <Mouse />
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 0.4 }}
        className="contact"
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="adress">
            <div className="content">
              <h4>adresse</h4>
              <p>12 rue Laplace</p>
              <p>64200 Biarritz</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <p
                onClick={() => navigator.clipboard.writeText("0642844284")}
                className="hover clipboard"
                onClickCapture={() => alert("Téléphone copié !")}
                style={{ cursor: "pointer" }}
              >
                06 42 84 42 84
              </p>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <p
                onClick={() =>
                  navigator.clipboard.writeText("fsagency@gmail.com")
                }
                className="hover clipboard"
                onClickCapture={() => alert("Email copié !")}
                style={{ cursor: "pointer" }}
              >
                fsagency@gmail.com
              </p>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>From Scratch - 2022</p>
          </div>
        </div>
        <Buttons left={"/projet-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
