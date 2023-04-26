import React,  { useCallback } from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles-config";

function ParticlesBackground() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <Particles 
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0"
      }}
    params={particlesConfig}
    ></Particles>
  );
}

export default ParticlesBackground;

// import React from 'react';
// import Particles from "react-tsparticles";
// import particlesConfig from "./config/particles-config";

// export default function ParticlesBackground() {
//   return (
//     <>
//       <Particles params={particlesConfig}></Particles>
//     </>
//   )
// }
