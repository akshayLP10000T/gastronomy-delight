import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">Gastronomy Delight</h3>
          <p className="text-gray-400">123 Restaurant Street<br />Cityville, State 12345<br />Phone: +1 (123) 456-7890<br />Email: info@gastronomydelight.com</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
          <p className="text-gray-400">Monday - Friday: 11:00 AM - 10:00 PM<br />Saturday - Sunday: 10:00 AM - 11:00 PM</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 2H2v20h20V2zM11.974 18.246v-6.51h-1.996v6.51h1.996zm-.998-7.574a1.64 1.64 0 100-3.28 1.64 1.64 0 000 3.28zm6.772 6.51h-1.994v-3.274c0-1.174-.99-2.126-2.208-2.126a2.196 2.196 0 00-2.206 2.126v3.274H8.322v-6.51h-1.996v6.51H4.33V9.166h7.294c1.973 0 3.57 1.604 3.57 3.58v3.436h2.543v-4.572c0-3.008-2.464-5.462-5.507-5.462H5.333C2.39 6.15 0 8.54 0 11.568v6.51c0 3.028 2.39 5.418 5.333 5.418h7.293c3.042 0 5.506-2.39 5.506-5.418v-1.363z"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 2H2v20h20V2zm-2 3.65c.69-.39 1.23-.97 1.6-1.65a10.6 10.6 0 01-3.2 1.15c-1.02-1.08-2.47-1.76-4.08-1.76-3.1 0-5.62 2.52-5.62 5.62 0 .44.05.86.15 1.27-4.67-.24-8.81-2.48-11.57-5.9-.48.84-.76 1.82-.76 2.86 0 1.97 1 3.72 2.52 4.75-.93-.03-1.8-.29-2.57-.72v.07c0 2.75 1.96 5.05 4.56 5.57-.48.13-1.03.2-1.59.2-.39 0-.78-.03-1.16-.1.78 2.42 3.05 4.18 5.73 4.23-2.1 1.64-4.74 2.62-7.61 2.62-.49 0-.98-.03-1.46-.08 2.7 1.73 5.9 2.74 9.34 2.74 11.2 0 17.34-9.3 17.34-17.34 0-.26-.01-.52-.02-.78 1.19-.87 2.22-1.96 3.04-3.2z"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 0h20c1.1 0 2 .9 2 2v20c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2zm7.87 19.16v-7.51H7.24v7.51h2.63zm-1.32-8.88c0-1.31.89-2.41 2.2-2.41 1.23 0 2.19 1.1 2.19 2.41 0 1.3-.96 2.41-2.19 2.41-1.31 0-2.2-1.11-2.2-2.41zm10.45 7.63v-5.06c0-.52-.01-1.19-.02-1.9h-1.77v.01c-.25.42-1.03.87-1.77.87-.78 0-1.32-.54-1.32-1.36v-3.11h2.24l-.29 2.27h.03c.29-.45.79-.69 1.44-.69 1.34 0 2.38 1.12 2.38 2.4zm-3.28-4.88v-1.5h-.02c-.34 0-.67.17-.67.75v.89c0 .59.34.86.77.86.22 0 .46-.11.59-.26.06-.07.07-.16.07-.25l-.01-1.63h.88v2.27c-.06 1.21-.66 1.71-1.44 1.71-.79 0-1.36-.67-1.36-1.77z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2024 Gastronomy Delight. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer