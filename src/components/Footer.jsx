// src/components/Footer.jsx
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { medialLogo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <p className="text-lg">© {new Date().getFullYear()} Madhur Achanta. All rights reserved.</p>

        <div className="flex justify-center items-center flex-wrap gap-6 text-2xl">
          {/* Email */}
          <a
            href="mailto:madhurachanta2005@gmail.com"
            className="hover:text-blue-400 transition"
            aria-label="Email"
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
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/MadhurAchanta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="GitHub"
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
          >
            <SiLeetcode />
          </a>

          {/* GeeksforGeeks */}
          <a
            href="https://www.geeksforgeeks.org/user/madhurachn5h4/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="GeeksforGeeks"
          >
            <SiGeeksforgeeks />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/madhur_achanta/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          {/* Medial (Logo aligned with icons) */}
          <a
            href="https://medial.app/user/madhur-achanta-09ea210554fa0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
            aria-label="Medial"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <img
                src={medialLogo}
                alt="Medial Logo"
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
