import React, { useState } from "react"
import { Link } from "gatsby"
import IButton from "../IButton"
import Logo from "../Logo"
import CookieConsent from "react-cookie-consent"
import UseTheme from "../../hooks/use-theme"
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import Brightness3Icon from '@material-ui/icons/Brightness3'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined'
import "./styles.css"

const Header = () => {
  const isActive = ({ isCurrent }: any) => {
    return isCurrent
      ? {
        className:
          "px-4 py-2 text-lg text-primary-100 lg:text-primary-900 dark:text-primary-50 border-b-2 border-secondary-600",
      }
      : { className: "px-4 py-2 text-lg text-primary-400 lg:text-primary-500 dark:text-primary-300" }
  }

  const [nextTheme, setTheme] = UseTheme();

  const cookieAcceptBtn = {
    backgroundColor: "#dc2626",
    color: "#fff",
    borderRadius: "3px",
    padding: "8px 20px",
  }

  const [visible, setVisible] = useState(false)

  const handleLinkClick = () => {
    if (visible === true) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }

  const mobileMenuClass = visible === false ? '-left-80' : 'left-0'

  return (
    <div className="flex justify-center">
      <header className="w-full z-50">
        <nav className="w-full py-2 nav-section">
          <div className="container mx-auto">
            <div className="flex items-center content-center justify-between px-0 py-2 flex- lg:py-2 lg:px-0">
              <Link to="/" className="app-logo inline-flex">
                <Logo></Logo>
              </Link>
              {
                visible === true && (
                  <div
                    className="mobile-menu-overlay duration-300 block lg:hidden fixed top-0 right-0 left-0 bottom-0 bg-zinc-300 opacity-70 z-10"
                    onClick={handleLinkClick}
                  />
                )
              }
              <div className={`fixed top-0 duration-300 ${mobileMenuClass} bottom-0 right-auto pr-32 lg:pr-0 bg-gray-900 lg:bg-transparent lg:static z-20`}>
                <ul className="flex flex-col gap-y-6 lg:gap-y-0 mt-20 lg:mt-0 lg:flex-row ml-5 lg:ml-0">
                  <li>
                    <Link to="/services" getProps={isActive} onClick={handleLinkClick}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-work" getProps={isActive} onClick={handleLinkClick}>
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" getProps={isActive} onClick={handleLinkClick}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" getProps={isActive} onClick={handleLinkClick}>
                      Careers
                    </Link>
                  </li>
                  <li className="block lg:hidden">
                    <div onClick={handleLinkClick}>
                      <IButton
                        to="/hire-us"
                        color="red"
                        size="md"
                        className="inline-flex items-center"
                      >
                        Get in touch
                        <ArrowForwardOutlinedIcon className="text-xl ml-1" />
                      </IButton>
                    </div>
                  </li>
                </ul>
                <button
                  className="mobile-close-btn block lg:hidden absolute top-5 right-4 outline-none"
                  onClick={handleLinkClick}
                >
                  <ClearOutlinedIcon className="text-4xl text-primary-400" />
                </button>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => setTheme(nextTheme)}
                  className="group w-10 h-10 mr-8 md:mr-6 outline-none relative flex justify-center items-center rounded duration-200 hover:bg-primary-200 dark:hover:bg-primary-700"
                >
                  <WbSunnyIcon className="sun-icon text-primary-200" />
                  <Brightness3Icon className="moon-icon rotate-12" />
                </button>
                <button
                  className="mobile-menu block lg:hidden"
                  onClick={handleLinkClick}
                >
                  <MenuOutlinedIcon className="text-4xl dark:text-primary-300" />
                </button>
                {/* End Secondary Navbar */}
                <div className="hidden lg:block">
                  <ul className="flex flex-">
                    <li className="nav-item signup">
                      <IButton
                        to="/hire-us"
                        color="red"
                        size="md"
                        className="inline-flex items-center"
                      >
                        Get in touch
                        <ArrowForwardOutlinedIcon className="text-xl ml-1" />
                      </IButton>
                    </li>
                  </ul>
                </div>
                {/* End Secondary Navbar */}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <CookieConsent
        location="bottom"
        buttonText="Accept All Cookies"
        cookieName="easesol.net"
        buttonStyle={cookieAcceptBtn}
        buttonClasses="accept-btn"
        contentClasses="cookie-content"
      >
        By clicking “Accept All Cookies”, you agree to the storing of cookies on
        your device to enhance site navigation, analyze site usage, and assist
        in our marketing efforts.
      </CookieConsent>
    </div>
  )
}

export default Header
