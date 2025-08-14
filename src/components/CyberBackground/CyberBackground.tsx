import React, { useState, useEffect, useCallback } from 'react';
import Particles from "react-tsparticles";
import { type Engine, type ISourceOptions } from "tsparticles-engine";
import { type Container } from 'tsparticles-engine';
import { loadSlim } from "tsparticles-slim"; 

const CyberBackground = () => {
    // This function loads the particles engine
    const particlesInit = useCallback(async (engine: Engine) => {
        // You can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // This loads the slim bundle, which is smaller and suitable for most cases
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    const options: ISourceOptions = {
        background: {
            color: {
                value: 'transparent',
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: 'repulse',
                },
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.3,
                },
            },
        },
        particles: {
            color: {
                value: '#39FF14',
            },
            links: {
                color: '#39FF14',
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: {
                    default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 80,
            },
            opacity: {
                value: 0.4,
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
            className="absolute top-0 left-0 w-full h-full z-0"
        />
    );
}

export default CyberBackground;