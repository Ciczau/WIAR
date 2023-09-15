import React, { useState, useRef, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useCookies } from "react-cookie";

import Header from "../components/Header";
import HomeSection from "../containers/HomeSection";
import Route from "../components/Route";
import AboutSection from "../containers/AboutSection";
import OfferSection from "../containers/OfferSection";
import ContactSection from "../containers/ContactSection";
import UserPanelPage from "../containers/UserPanelPage";
import LoginRegisterPage from "../containers/LoginRegisterPage";
import LogoSection from "../containers/LogoSection";
import Background from "../components/Background";
import LoadingPage from "../containers/LoadingPage";
import SideBar from "../components/SideBar";
import CookieAgree from "../components/CookieAgree";

const App = () => {
  const [loginPanel, setLoginPanel] = useState(false);
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [token, setToken] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cookie, setCookies] = useCookies();

  useEffect(() => {
    refreshToken();
  }, [loaded]);

  useEffect(() => {
    const handleSize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  });
  const readData = (data) => {
    setLoginPanel(data);
    refreshToken();
  };

  const refreshToken = async () => {
    try {
      const token = cookie.refreshToken;
      const response = await axios.post(
        "https://urchin-app-zxtvj.ondigitalocean.app/token",
        { refreshToken: token }
      );
      setToken(response.config.data);
      const decoded = jwtDecode(response.config.data);
      setName(decoded.name);
      setRole(decoded.role);
      setFirstName(decoded.firstName);
      setSurName(decoded.surName);
      setEmail(decoded.email);
    } catch (err) {
      setName("");
    }
  };

  return (
    <div>
      {loaded && <LoadingPage />}
      <div>
        <Background />
        {!loginPanel && (
          <>
            <LogoSection readData={readData} name={name} />
            <div>
              {windowWidth > 800 && <SideBar hide={true} />}
              <Header readData={readData} windowWidth={windowWidth} />
              <Route path="/">
                <HomeSection windowWidth={windowWidth} />
              </Route>
              <Route path="/us">
                <AboutSection windowWidth={windowWidth} />
              </Route>
              <Route path="/offer">
                <OfferSection
                  name={name}
                  email={email}
                  readData={readData}
                  windowWidth={windowWidth}
                />
              </Route>
            </div>

            <ContactSection
              windowWidth={windowWidth}
              onload={() => setLoaded(true)}
            />
            <CookieAgree />
          </>
        )}
        {loginPanel && !token && (
          <div>
            <LoginRegisterPage readData={readData} windowWidth={windowWidth} />
          </div>
        )}
        {loginPanel && token && (
          <div>
            <UserPanelPage
              windowWidth={windowWidth}
              readData={readData}
              name={name}
              role={role}
              firstName={firstName}
              surName={surName}
              email={email}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
