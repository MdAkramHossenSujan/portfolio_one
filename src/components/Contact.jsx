import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaWhatsapp, FaFacebookMessenger, FaCopy, FaFacebook } from "react-icons/fa";

import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("mdsujan.dev@gmail.com");
        setCopied(true);
        toast.success("Email copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        emailjs
            .send(
                serviceId,
                templateId,
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                    time: new Date().toLocaleString()
                },
                publicKey
            )
            .then(
                () => {
                    toast.success("Thank you for reaching out! Your message has been sent successfully.");

                    e.target.reset();
                },
                (error) => {
                    console.error(error);
                    toast.error("Something went wrong. Please try again.");
                }
            );
    };

    return (
        <div className="py-12 flex items-center justify-center p-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 gap-10 w-full max-w-[1440px]"
            >
                {/* LEFT SIDE */}
                <div className="space-y-6">
                    <motion.h2
                        className="text-3xl md:text-4xl dark:xl:text-5xl font-bold dark:font-mono bg-gradient-to-r from-gray-800 to-gray-500 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 text-transparent bg-clip-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        DO YOU HAVE A PROJECT TO DISCUSS?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg"
                    >
                        GET IN TOUCH
                    </motion.p>

                    {/* Email with Copy Button */}
                    <motion.div
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={handleCopyEmail}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <span className="dark:text-cyan-500 underline hover:text-gray-600 dark:hover:text-cyan-300">
                            mdsujan.dev@gmail.com
                        </span>
                        <FaCopy size={24} />
                        {copied && (
                            <span className="text-sm text-gray-700 dark:text-green-400">Copied!</span>
                        )}
                    </motion.div>

                    {/* Social Media Icons */}
                    <motion.div
                        className="flex gap-5 mt-4 text-2xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <a href="https://www.linkedin.com/in/akram-hossen-29872a30a/" target="_blank" rel="noreferrer">
                            <FaLinkedin className="hover:text-cyan-400 transition-colors" />
                        </a>
                        <a href="https://x.com/mdahsujan" target="_blank" rel="noreferrer">
                            <FaTwitter className="hover:text-cyan-400 transition-colors" />
                        </a>
                        <a href="https://wa.me/+8801733975796" target="_blank" rel="noreferrer">
                            <FaWhatsapp className="hover:text-cyan-400 transition-colors" />
                        </a>
                        <a href="https://www.facebook.com/sujan.hossen.2003#" target="_blank" rel="noreferrer">
                            <FaFacebook className="hover:text-cyan-400 transition-colors" />
                        </a>
                    </motion.div>
                </div>

                {/* RIGHT SIDE FORM */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4 w-full"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="font-semibold dark:text-gray-300 dark:font-mono text-gray-700 text-2xl lg:text-3xl xl:text-4xl">Send me a message</p>
                    <div>
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            required
                            className="input input-bordered dark:border-cyan-500 bg-base-200 rounded-xl border-gray-500 w-full"
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="input input-bordered dark:border-cyan-500 bg-base-200 rounded-xl border-gray-500 w-full"
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="input input-bordered dark:border-cyan-500 bg-base-200 rounded-xl border-gray-500 w-full"
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea
                            name="message"
                            required
                            className="textarea bg-base-200 rounded-xl border-gray-500 dark:border-cyan-500 textarea-bordered w-full"
                            rows={4}
                        ></textarea>
                    </div>

                    <motion.button
                        type="submit"
                        whileHover={{
                            boxShadow: `
          0 0 6px rgba(34, 211, 238, 0.6),
          0 0 8px rgba(236, 72, 153, 0.6),
          inset 0 0 3px rgba(34, 211, 238, 0.4)
        `,
                            scale: 1.05,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`
        relative inline-block p-[2px] rounded-xl
    border-cyan-800 border dark:border-none
        dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 cursor-pointer
      `}
                    >
                        <span
                            className={`
          block rounded-xl
          bg-white/40 dark:bg-black/75
          text-center px-6 py-2
          shadow-inner transition-all duration-300
        `}
                        >
                            {/* Dark mode: gradient text. Light mode: cyan text */}
                            <span className={`
          font-semibold
          text-cyan-700
          dark:text-transparent dark:bg-clip-text
          dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600
        `}>
                                SEND
                            </span>
                        </span>
                    </motion.button>
                </motion.form>
            </motion.div>
        </div>
    );
};

export default Contact;
