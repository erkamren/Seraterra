import { Link } from "react-router-dom";
import connect from "../img/connect.jpg";
import React, { useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import {
  EnvelopeIcon,
  UserIcon,
  ChatBubbleBottomCenterTextIcon,
  PaperAirplaneIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";
import { LanguageContext } from "../context/LanguageContext";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const form = useRef();

  const { language } = useContext(LanguageContext);
  const info =
    language === "tr"
      ? require("../pages/info.json")
      : require("../pages/info.en.json");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_d7sa04n", "template_7fwq8m2", form.current, {
        publicKey: "2apfuSJVqULPY9vDj",
      })
      .then(
        () => {
          toggleModal();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="contact">
      <div className="rounded-2xl bg-gradient-to-br from-[#80cc28] to-[#b1e476] shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Form Section */}
          <div className="p-8 lg:p-12">
            <h2 className="mb-8 text-center text-3xl font-bold text-white">
              {info.contact.header}
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
              name="sign-up"
            >
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="full-name"
                  type="text"
                  placeholder={info.contact.name}
                  name="name"
                  required
                  className="w-full rounded-lg bg-white py-3 pl-10 pr-4 text-gray-800 placeholder-gray-400 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#80cc28]"
                />
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder={info.contact.email}
                  name="email"
                  required
                  className="w-full rounded-lg bg-white py-3 pl-10 pr-4 text-gray-800 placeholder-gray-400 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#80cc28]"
                />
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute left-0 top-3 flex items-center pl-3">
                  <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  id="submit"
                  placeholder={info.contact.message}
                  name="message"
                  required
                  rows="4"
                  className="w-full rounded-lg bg-white py-3 pl-10 pr-4 text-gray-800 placeholder-gray-400 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#80cc28]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-lg bg-white px-6 py-3 text-lg font-semibold text-[#80cc28] shadow-sm transition-all hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                <PaperAirplaneIcon className="mr-2 h-5 w-5" />
                {info.contact.send}
              </button>
            </form>

            {/* Social Media Links */}
            <div className="mt-8">
              <p className="mb-4 text-center text-white">
                {info.contact.followUs}
              </p>
              <div className="flex justify-center space-x-6">
                <Link
                  onClick={() =>
                    openInNewTab(
                      "https://api.whatsapp.com/send?phone=905510074409"
                    )
                  }
                  className="items-center rounded-full bg-white p-3 text-[#80cc28] transition-all hover:bg-opacity-90 hover:text-[#9ad655]"
                >
                  <FaWhatsapp className="h-6 w-6" />
                </Link>
                <Link
                  onClick={() =>
                    openInNewTab(
                      "https://www.facebook.com/people/Sera-natura/61557231689037/"
                    )
                  }
                  className="rounded-full bg-white p-3 text-[#80cc28] transition-all hover:bg-opacity-90 hover:text-[#9ad655]"
                >
                  <FaFacebook className="h-6 w-6" />
                </Link>
                <Link
                  onClick={() =>
                    openInNewTab("https://www.instagram.com/sera_natura/?hl=en")
                  }
                  className="rounded-full bg-white p-3 text-[#80cc28] transition-all hover:bg-opacity-90 hover:text-[#9ad655]"
                >
                  <FaInstagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden overflow-hidden rounded-r-2xl lg:block">
            <img
              className="h-full w-full object-cover"
              src={connect}
              alt="contact"
            />
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            onClick={toggleModal}
            className="fixed inset-0 bg-black bg-opacity-50"
          />
          <div className="relative rounded-lg bg-white p-8 shadow-xl">
            <div className="text-center">
              <CheckIcon className="mx-auto mb-4 h-12 w-12 text-[#80cc28]" />
              <h3 className="mb-4 text-xl font-medium text-gray-900">
                {info.contact.successMessage}
              </h3>
              <button
                onClick={toggleModal}
                className="rounded-lg bg-[#80cc28] px-6 py-2 text-white transition-all hover:bg-[#9ad655]"
              >
                {info.contact.modalButton}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
