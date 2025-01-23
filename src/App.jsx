import './App.css';
import { Canvas, useThree } from '@react-three/fiber';
import Scene from './component/3d';
import { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import Content from './component/content';

function App() {
  const [fov, setFov] = useState(75)

  function InitialCamera(){
    if (window.innerWidth < 1024){
      setFov(() => 120)
    }
    else{
      setFov(() => 75)
    }
  }
  
  function Loader(){
          return(
              <div className='flex h-screen text-8xl text-white justify-center items-center sm:text-7xl max-sm:text-5xl'>
                  <h1 id='L'>L</h1>
                  <h1 id='O'>O</h1>
                  <h1 id='A'>A</h1>
                  <h1 id='D'>D</h1>
                  <h1 id='I'>I</h1>
                  <h1 id='N'>N</h1>
                  <h1 id='G'>G</h1>
              </div>
          )
      }
  
  return (
    <div className="App">
        {/* <Canvas className='canvas'>
            <ScrollControls>
              <Scroll>
                <Scene />
              </Scroll>
              <Scroll html>
                <Content />
              </Scroll>
            </ScrollControls>
        </Canvas> */}
        <Suspense fallback={<Loader />}>
          <InitialCamera />
          <div style={{width: "100%", height:"100%", position: "fixed", margin: 0, padding: 0}}>
            <Canvas camera={{position: [60,2,20], fov: fov}}>
                <Scene />
            </Canvas>
          </div>
          <div className='test'>
            <Content />
          </div>
        </Suspense>
    </div>
  );
}

export default App;
