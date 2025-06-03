import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiGeeksforgeeks } from 'react-icons/si';

const SimpleFooter = () => {
  return (    <footer className="py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-center items-center gap-8 text-zinc-600 dark:text-zinc-400">
          <a
            href="https://www.linkedin.com/in/madhur-achanta-693b0b28a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/madhur_achanta/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/MadhurAchanta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/madhurachn5h4/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
            aria-label="GeeksforGeeks"
          >
            <SiGeeksforgeeks className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
