import {useEffect, useState, useMemo} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground(){

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: -1,
      },
      background: {
        color: {
          value: "#141817",
        },
      },
      fpsLimit: 120,
      interactivity: {
        modes: {
          push: {
            quantity: 3,
          },
          repulse: {
            distance: 2000,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 50,
          enable: true,
          opacity: 0.5,
          width: .5,
        },
        move: {
          enable: true,
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            height:150,
            width: 2980,
            enable: true,
          },
          value: 180,
        },
        opacity: {
          value: 0.1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 2,
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if(init){

    return (
      <Particles
      id="tsparticles"
      options={options}/>
    )
  }

}

export default ParticlesBackground;