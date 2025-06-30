import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-2">
      <div className="max-w-xl mx-auto text-center space-y-6 px-2">
        {/* Footer Text */}
        <p className="text-lg font-medium">
          © {new Date().getFullYear()} Madhur Achanta. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center flex-wrap gap-6 text-2xl">
          {/* Email */}
          <a
            href="mailto:madhurachanta2005@gmail.com"
            className="hover:text-blue-400 transition min-w-[24px]"
            aria-label="Email"
            title="Email"
          >
            <FaEnvelope />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/madhur-achanta-693b0b28a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          
          {/* GeeksforGeeks */}
          <a
            href="https://www.geeksforgeeks.org/user/madhurachn5h4/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="GeeksforGeeks"
            title="GeeksforGeeks"
          >
            <SiGeeksforgeeks />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/MadhurAchanta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/Madhur_Achanta/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="LeetCode"
            title="LeetCode"
          >
            <SiLeetcode />
          </a>

          
          {/* Instagram */}
          <a
            href="https://www.instagram.com/madhur_achanta/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="Instagram"
            title="Instagram"
          >
            <FaInstagram />
          </a>

          {/* Medial */}
          <a
            href="https://medial.app/user/madhur-achanta-09ea210554fa0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="Medial"
            title="Medial"
          >
            <div className="w-10 h-10 flex items-center justify-center  p-15">
              <img
                src="/images/medialfooter.jpeg"
                alt="Madhur Achanta on Medial"
                className="w-full h-full object-contain"
              />
            </div>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
