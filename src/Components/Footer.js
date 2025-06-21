import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-4 md:px-6 py-8 md:py-10 text-xs md:text-sm">
      <div className="max-w-4xl mx-auto">
        <p className="mb-4 md:mb-6">
          Questions? Call
          <span className="underline hover:text-white">
            000-800-919-1743 (Toll-Free)
          </span>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
          <p className="hover:underline hover:text-white">FAQ</p>
          <p className="hover:underline hover:text-white">Help Centre</p>
          <p className="hover:underline hover:text-white">Terms of Use</p>
          <p className="hover:underline hover:text-white">Privacy</p>
          <p className="hover:underline hover:text-white">Cookie Preferences</p>
          <p className="hover:underline hover:text-white">
            Corporate Information
          </p>
        </div>

        <div className="mb-2">
          <label htmlFor="language" className="sr-only">
            Select language
          </label>
          <select
            id="language"
            name="language"
            className="bg-black border border-gray-500 text-white p-2 rounded"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
