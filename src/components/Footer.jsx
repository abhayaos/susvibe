import React from "react";
import { Link } from "react-router-dom";
import Rta from '../assets/rta.png'
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <h1 className="text-2xl font-bold text-red-600">
            Sus<span className="text-gray-900">Vibe</span>
          </h1>
          <p className="text-gray-700 max-w-sm">
            SusVibe ek adult entertainment platform ho, jaha tapai afno favorite videos herna ra explore garna saknuhunchha. Hamro content safe ra quality-focused cha.
          </p>
        </div>

        {/* RTA Logo */}
        <div className="flex flex-col items-center gap-2">
          <img
            src={Rta} // replace with actual RTA logo path
            alt="RTA Logo"
            className="w-24 h-auto"
          />
          <p className="text-gray-500 text-sm">
            Registered with RTA
          </p>
        </div>

        {/* Links or extra info */}
        <div className="flex flex-col items-center gap-2">
          <Link to="/terms" className="text-gray-600 hover:text-red-600">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="text-gray-600 hover:text-red-600">
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-6 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SusVibe. All right reserved.
      </div>
    </footer>
  );
}