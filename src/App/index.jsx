import React, {useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import HomeSection from '../containers/HomeSection';
import Route from '../components/Route';
import AboutSection from '../containers/AboutSection';
import OfferSection from '../containers/OfferSection';
import jwtDecode from 'jwt-decode';
import ContactSection from '../containers/ContactSection';
import SocialMedia from '../components/MediaPopUp';
import UserPanelPage from '../containers/UserPanelPage';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { useCookies } from 'react-cookie'
import LoginRegisterPage from '../containers/LoginRegisterPage';
import LogoSection from '../containers/LogoSection';
import Background from '../components/Background';
import * as S from './index.styles';
import LoadingPage from '../containers/LoadingPage';
import SideBar from '../components/SideBar';
import CookieAgree from '../components/CookieAgree';

export const App = () => {
    const [playing, setPlaying] = useState(true);
    const videoRef = useRef(null);
    const [scroll, setScroll] = useState('');
    const [loginPanel, setLoginPanel] = useState(false);
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surName, setSurName] = useState('');
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [cookie, setCookies] = useCookies();
    useEffect(() => {
        refreshToken();
    },[loaded])
   /* useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        },1200)
    }, [])*/
    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        
    }, []);
    useEffect(() => {
        const handleSize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleSize);
        return () => {
            window.removeEventListener("resize", handleSize);
        }
    })
    const readData = (data) => {
        setLoginPanel(data);
        refreshToken();
    }
    const stopVideo = () => {
        videoRef.current.pause();
        setPlaying(current => !current);
    }
    const playVideo = event => {
        videoRef.current.play();
        setPlaying(current => !current);
    
    }
    const handleScroll = () => {
        const scrollPosition = window.scrollY; 
        setScroll(scrollPosition);
    };
    const refreshToken = async () => {
        try{
            const token = cookie.refreshToken;
            const response = await axios.post("https://urchin-app-zxtvj.ondigitalocean.app/token", {refreshToken: token});
            setToken(response.config.data);
            const decoded = jwtDecode(response.config.data);
            setName(decoded.name);
            setRole(decoded.role);
            setFirstName(decoded.firstName);
            setSurName(decoded.surName);
            setEmail(decoded.email);
            setExpire(decoded.exp);
        }catch(err){
            setName('');
        
        }
    }
    const axiosJWT = axios.create();
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if(expire * 1000 < currentDate.getTime()) {
            const response = await axios.get("https://urchin-app-zxtvj.ondigitalocean.app/token");
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwtDecode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config
    }, (err) => {
        return Promise.reject(err);
    })
    const getUsers = async () => {
        const response = await axiosJWT.get("https://urchin-app-zxtvj.ondigitalocean.app/users", {
            header: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }

    return (
        <div >
            
            {!loaded && (
                <LoadingPage/>
            )}
            <div>
                <Background videoRef={videoRef} windowWidth={windowWidth}/>
                {!loginPanel && (
                    <>
                    
                    <LogoSection readData={readData} name={name}/>
                    <div >
                        {windowWidth > 800 && (
                            <SideBar hide={true}/>
                        )}
                        <Header readData={readData} windowWidth={windowWidth}/>
                        <Route path="/"><HomeSection windowWidth={windowWidth}/></Route>
                        <Route path="/us"><AboutSection windowWidth={windowWidth}/></Route>
                        <Route path="/offer"><OfferSection name={name} email={email} readData={readData} windowWidth={windowWidth}/></Route>
                    
                 
                    </div>
                    
                    <ContactSection windowWidth={windowWidth} onload={() => setLoaded(true)}/>
                    <CookieAgree/>
                    </>
                )}              
                {loginPanel && !token && (
                    <div>
                        <LoginRegisterPage readData={readData} windowWidth={windowWidth}/>
                    </div>
                )}
                {loginPanel && token && (
                    <div>
                        <UserPanelPage windowWidth={windowWidth} readData={readData} name={name} role={role} firstName={firstName} surName={surName} email={email}/>
                    </div>
                )}
                </div>
            </div> 
    );
};

export default App;
