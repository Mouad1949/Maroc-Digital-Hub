import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#4A80FF] w-full bottom-0">
        <div className="max-w-screen mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Use grid with 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            
            {/* Left Section */}
            <div>
              <h3 className="text-[#FFFFFF] font-bold text-2xl">Maroc Digital Hub</h3>
              <p className="mt-4 text-[#FFFFFF] text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, doloremque. Ratione impedit animi magnam dolorem ea omnis, eum corrupti, vero pariatur aperiam molestias illo accusantium? Numquam, quae temporibus? Earum, at!
              </p>

              
                </div>

                {/* Center Section */}
                <div className="flex flex-col items-center" >
                  <a href="mailto:contact@artconnect.ma" className="text-[#FFFFFF] transition hover:opacity-75">contact@artconnect.ma</a>
                  <ul className="mt-8 flex gap-6">
                    
                      <li>
                      <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="text-[#FFFFFF] transition hover:opacity-75"
                      >
                        <span className="sr-only">Facebook</span>

                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="text-[#FFFFFF] transition hover:opacity-75"
                      >
                        <span className="sr-only">Instagram</span>

                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                        <a
                          href="https://wa.me/212600000000"
                          rel="noreferrer"
                          target="_blank"
                          className="text-[#FFFFFF] transition hover:opacity-75"
                        >
                          <span className="sr-only">WhatsApp</span>

                          <svg
                            className="size-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M20.52 3.48A11.87 11.87 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.96L0 24l6.22-1.63A11.96 11.96 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.94 9.94 0 01-5.06-1.38l-.36-.21-3.69.97.99-3.6-.24-.37A9.94 9.94 0 012 12C2 6.49 6.49 2 12 2c2.67 0 5.18 1.04 7.07 2.93S22 9.33 22 12c0 5.51-4.49 10-10 10zm5.3-7.7c-.29-.14-1.71-.84-1.98-.93-.27-.1-.47-.14-.66.14-.19.29-.76.93-.93 1.12-.17.19-.34.21-.63.07-.29-.14-1.23-.45-2.34-1.43a8.73 8.73 0 01-1.63-2.01c-.17-.29-.02-.45.13-.59.14-.14.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.66-1.6-.91-2.18-.24-.58-.48-.5-.66-.51-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.81 1.16 3 .14.19 2 3.05 4.84 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z" />
                          </svg>
                        </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="text-[#FFFFFF] transition hover:opacity-75"
                      >
                        <span className="sr-only">Dribbble</span>

                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                

                {/* Right Section */}
                <div className="flex justify-center md:justify-end">
                  <ul className="space-y-2 text-center md:text-right">
                    <li><a href="#" className="text-[#000000] hover:opacity-75">Accueil</a></li>
                    <li><a href="#" className="text-[#000000] hover:opacity-75">Dashbord</a></li>
                    <li><a href="#" className="text-[#000000] hover:opacity-75">Stratup</a></li>
                    <li><a href="#" className="text-[#000000] hover:opacity-75">Evenement</a></li>
                    {/* <li><a href="#" className="text-[#F2613F] hover:opacity-75">Admin</a></li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pb-4">
          <p className="text-xs text-[#FFFFFF] text-center">
            © 2025 ArtConnect Maroc. Tous droits réservés.
          </p>
        </div>
      </footer>
  )
}

export default Footer