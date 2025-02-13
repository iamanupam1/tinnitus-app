import React from 'react'

const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-8 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-bold text-2xl">Tinnitus Support</h3>
        <p className="text-gray-400 mt-4 mb-8">
          Empowering Providers with Tailored, Evidence-Based Tinnitus
          Counseling Strategies for Improved Patient Care
        </p>
        <div className="text-sm text-gray-400 pt-8 border-t border-gray-800">
          © {new Date().getFullYear()} Tinnitus Support. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent