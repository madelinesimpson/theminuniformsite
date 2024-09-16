import './App.css'
import './EPK.css'
import Home from './Home'
import EPK from './EPK'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import React, { useState, useEffect } from 'react'
import { RotatingLines } from "react-loader-spinner";
import siteBG from './assets/sitebg.gif'
import smiths from './assets/smithsfade.png'


function App() {

  const [isLoading, setIsLoading] = useState(true);

  const cacheImages = async (srcArray) => {
    try {
      const promises = srcArray.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            console.log(`Image loaded: ${src}`);
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load image: ${src}`);
            reject();
          };
        });
      });

      await Promise.all(promises);
      setIsLoading(false);  
    } catch (error) {
      console.error('Error loading images:', error);
      setIsLoading(false);  
    }
  };


  useEffect(() => {
    const images = [
      siteBG,
      smiths,
    ];
    cacheImages(images);
  }, []); 


  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.overflow = "hidden"; 
    } else if (location.pathname === "/epk") {
      document.body.style.overflow = "auto"; 
    }
  }, [location]); 

  const router = createBrowserRouter([
    { path: "/", element: <HomePageWithOverflow /> },
    { path: "/epk", element: <EPKPageWithAutoScroll /> },
  ]);

  return (
      <div className='App'>
      {isLoading ? (
        <div className='spinner-div'>
          <RotatingLines
            strokeColor="white"
            strokeWidth="4"
            animationDuration="1"
            width="100"
            visible={true}
        />
        </div>
      ) : (
        <React.Fragment>
          <main className='main-page-content'>
            <RouterProvider router={router} />
          </main>
        </React.Fragment>
      )}
    </div>
  )
}

function HomePageWithOverflow() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";  // Cleanup when component is unmounted
    };
  }, []);

  return <Home />;
}

function EPKPageWithAutoScroll() {
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  return <EPK />;
}

export default App
