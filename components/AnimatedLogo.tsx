'use client';
import { useEffect, useRef } from 'react';
import styles from './AnimatedLogo.module.css';

const AnimatedLogo = () => {
  const pathsRef = useRef<NodeListOf<SVGPathElement> | null>(null);

  useEffect(() => {
    const animateLogo = () => {
      // Reset animations
      if (pathsRef.current) {
        pathsRef.current.forEach((path) => {
          path.style.strokeDasharray = path.getTotalLength().toString();
          path.style.strokeDashoffset = path.getTotalLength().toString();
          path.classList.remove(styles.filled);
        });
      }

      // Start animations
      if (pathsRef.current) {
        pathsRef.current.forEach((path, i) => {
          path.style.animationDelay = `${i * 0.2}s`;
        });
      }

      // Fill logo after draw
      setTimeout(() => {
        if (pathsRef.current) {
          pathsRef.current.forEach((path) => {
            path.classList.add(styles.filled);
          });
        }
      }, 1500);
    };

    // Initial animation
    animateLogo();

    // Set up interval for looping every 5 seconds
    const interval = setInterval(animateLogo, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles['logo-container']}>
      <svg className={styles['logo-svg']} viewBox="0 0 1600 1600" height="1600" width="1600" xmlns="http://www.w3.org/2000/svg">
        <g transform="matrix(1.3333333,0,0,-1.3333333,0,1600)">
          <g>
            <g>
              <g>
                <g>
                  <path ref={(el) => { if (el) pathsRef.current = document.querySelectorAll(`.${styles['draw-path']}`); }} className={styles['draw-path']} d="m 798.73,442.798 c -180,-23.999 -232,-129.999 -232,-129.999 v 0 c 128,38.999 202,-55 202,-55 v 0 l 84,-84.001 c 97,-65 113.001,32 113.001,32 v 0 c 0,0 11.887,238.565 -144.366,238.559 v 0 c -7.182,0 -14.725,-0.504 -22.635,-1.559" />
                </g>
              </g>
            </g>
          </g>
          <g>
            <g>
              <g>
                <g>
                  <path className={styles['draw-path']} d="m 485.003,1023.701 c -11.57,-10.332 -21.395,-22.464 -29.472,-35.706 v 0 L 190.73,553.799 c 0,0 -31,-202.001 151,-121.001 v 0 l 170,347.001 c 0,0 42,64.999 93,0 v 0 c 0,0 41,-63 81,-175.001 v 0 c 0,0 127.001,35 218,-50.999 v 0 L 667.063,979.417 c -13.814,24.844 -34.171,45.568 -59.148,59.142 v 0 c -15.22,8.27 -33.269,14.572 -52.925,14.573 v 0 c -21.893,10e-4 -45.779,-7.814 -69.987,-29.431" />
                </g>
              </g>
            </g>
          </g>
          <g>
            <g>
              <g>
                <g>
                  <path className={styles['draw-path']} d="m 527.73,523.798 -178,-87.999 c -174,-60 -154.15,125.951 -154.15,125.951 v 0 C 113.66,447.459 102.6,338.712 103.197,284.541 v 0 c 0.371,-33.724 12.375,-66.45 34.716,-91.715 v 0 c 57.45,-64.968 143.818,-42.027 143.818,-42.027 v 0 c 81,18 171,82.999 171,82.999 v 0 L 617.73,348.799 c 132.001,90 190.478,64.837 190.478,64.837 v 0 C 920.686,384.475 965.731,205.798 965.731,205.798 v 0 c 52.999,203.001 -72,316 -72,316 v 0 c -40.76,43.454 -95.57,57.86 -150.366,57.857 v 0 C 635.491,579.648 527.73,523.798 527.73,523.798" />
                </g>
              </g>
            </g>
          </g>
          <g>
            <g>
              <g>
                <g>
                  <path className={styles['draw-path']} d="m 1035.046,812.011 h 87.49 c 14.631,0 26.502,11.871 26.502,26.502 v 0 73.012 c 0,14.353 -11.428,26.05 -25.674,26.483 v 0 c -91.511,-1.933 -88.318,-125.997 -88.318,-125.997" />
                </g>
              </g>
            </g>
          </g>
          <g>
            <g>
              <g>
                <g>
                  <path className={styles['draw-path']} d="m 937.455,1052 c -14.631,0 -26.501,-11.871 -26.501,-26.502 v 0 -87.49 h -87.49 c -14.631,0 -26.502,-11.87 -26.502,-26.502 v 0 -73.012 c 0,-14.631 11.871,-26.502 26.502,-26.502 v 0 h 68.991 v 56.649 c -0.173,3.964 -1.135,40.768 22.356,65.625 v 0 c 13.814,14.612 32.966,22.019 56.939,22.019 v 0 h 65.22 v 69.213 c 0,14.631 -11.871,26.502 -26.502,26.502 v 0 z" />
                </g>
              </g>
            </g>
          </g>
          <g>
            <g>
              <g>
                <g>
                  <path className={styles['draw-path']} d="m 971.75,938.008 c -18.701,0 -33.361,-5.454 -43.577,-16.218 v 0 c -18.912,-19.923 -17.469,-52.1 -17.45,-52.427 v 0 l 0.009,-0.5 v -56.871 h 0.222 v -87.49 c 0,-14.632 11.87,-26.502 26.501,-26.502 v 0 h 73.013 c 14.631,0 26.502,11.87 26.502,26.502 v 0 87.49 c 0,0 -3.194,124.063 88.317,125.997 v 0 c -0.269,0.019 -0.548,0.019 -0.827,0.019 v 0 z" />
                </g>
              </g>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient id="linearGradient28" spreadMethod="pad" gradientTransform="matrix(424.95654,117.39131,117.39131,-424.95654,559.1402,216.63428)" gradientUnits="userSpaceOnUse" y2="0" x2="1" y1="0" x1="0">
            <stop id="stop24" offset="0" style={{ stopOpacity: 1, stopColor: '#030277' }} />
            <stop id="stop26" offset="1" style={{ stopOpacity: 1, stopColor: '#1736dc' }} />
          </linearGradient>
        </defs>
      </svg>
      <svg className={styles['logo-text-svg']} width="220" height="80" viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="-3" y="75" fontFamily="Inter, Arial, sans-serif" fontSize="64" fontWeight="900" className={styles['draw-loop']}>LOOP</text>
      </svg>
    </div>
  );
};

export default AnimatedLogo; 