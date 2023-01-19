import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import {Html, useProgress} from '@react-three/drei'
import { Suspense } from 'react'
import gsap from 'gsap'

function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress()
    // gsap.fromTo('progress-bar',{width: 0}, {width: progress, ease: 'power1.out'})
    return <Html center>
        <div className="container">    
    <div className="progress progress-striped">
      <div className="progress-bar" style={{width: `${progress}%`}}>
      </div>                       
    </div> 
  </div></Html>
  }
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <>
    <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [ -3, 1.5, 4 ]
        } }
    >
        <Suspense fallback={<Loader />}>
        <Experience />
        </Suspense>
        
    </Canvas>
    </>
)