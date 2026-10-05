"use client";

import {
  Renderer,
  Program,
  Mesh,
  Color,
  Triangle,
} from "ogl";
import { useEffect, useRef } from "react";

import "./Iridescence.css";

const vertexShader = `
  attribute vec2 uv;
  attribute vec2 position;

  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  uniform float uTime;
  uniform vec3 uColor;
  uniform vec3 uResolution;
  uniform vec2 uMouse;
  uniform float uAmplitude;
  uniform float uSpeed;

  varying vec2 vUv;

  void main() {

    float mr = min(uResolution.x, uResolution.y);

    vec2 uv =
      (vUv.xy * 2.0 - 1.0)
      * uResolution.xy
      / mr;

    /*
      Very subtle mouse movement.
    */
    uv += (uMouse - vec2(0.5)) * uAmplitude;

    /*
      Slow animation.
    */
    float time = uTime * uSpeed;

    float d = -time * 0.35;
    float a = 0.0;

    for (float i = 0.0; i < 8.0; i++) {

      a += cos(
        i - d - a * uv.x
      );

      d += sin(
        uv.y * i + a
      ) * 0.08;
    }

    d += time * 0.35;

    /*
      Create smooth color field.
    */
    vec3 col = vec3(
      cos(uv.x * d + a) * 0.5 + 0.5,
      cos(uv.y * a - d) * 0.5 + 0.5,
      cos(a + d) * 0.5 + 0.5
    );

    /*
      Smooth purple tint.
    */
    col = mix(
      vec3(0.82, 0.76, 0.94),
      col,
      0.18
    );

    /*
      Apply brand color.
    */
    col *= uColor;

    /*
      Keep background bright.
    */
    col = mix(
      vec3(0.94, 0.91, 0.98),
      col,
      0.32
    );

    /*
      Very subtle vignette.
    */
    float vignette =
      smoothstep(
        1.35,
        0.15,
        length(uv)
      );

    col *= mix(
      0.96,
      1.04,
      vignette
    );

    gl_FragColor =
      vec4(col, 1.0);
  }
`;

export default function Iridescence({
  color = [0.65, 0.35, 1],
  speed = 0.18,
  amplitude = 0.035,
  mouseReact = true,
  className = "",
}) {
  const containerRef = useRef(null);

  const mouseRef = useRef({
    x: 0.5,
    y: 0.5,
  });

  useEffect(() => {
    const container =
      containerRef.current;

    if (!container) return;

    const renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(
        window.devicePixelRatio || 1,
        2
      ),
    });

    const gl = renderer.gl;

    gl.clearColor(
      0.94,
      0.91,
      0.98,
      1
    );

    const geometry =
      new Triangle(gl);

    const program =
      new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,

        uniforms: {
          uTime: {
            value: 0,
          },

          uColor: {
            value: new Color(
              ...color
            ),
          },

          uResolution: {
            value: new Color(
              1,
              1,
              1
            ),
          },

          uMouse: {
            value:
              new Float32Array([
                0.5,
                0.5,
              ]),
          },

          uAmplitude: {
            value: amplitude,
          },

          uSpeed: {
            value: speed,
          },
        },
      });

    const mesh = new Mesh(gl, {
      geometry,
      program,
    });

    const resize = () => {
      const width =
        container.clientWidth;

      const height =
        container.clientHeight;

      renderer.setSize(
        width,
        height
      );

      program.uniforms.uResolution.value =
        new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width /
            gl.canvas.height
        );
    };

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    const handleMouseMove = (event) => {
      if (!mouseReact) return;

      const rect =
        container.getBoundingClientRect();

      const x =
        (event.clientX -
          rect.left) /
        rect.width;

      const y =
        1 -
        (event.clientY -
          rect.top) /
          rect.height;

      mouseRef.current = {
        x,
        y,
      };

      /*
        Smooth mouse interpolation
        is handled in animation.
      */
    };

    if (mouseReact) {
      container.addEventListener(
        "mousemove",
        handleMouseMove
      );
    }

    let animationId = 0;

    let smoothMouseX = 0.5;
    let smoothMouseY = 0.5;

    const animate = (
      time
    ) => {
      animationId =
        requestAnimationFrame(
          animate
        );

      /*
        Smooth mouse movement.
      */
      smoothMouseX +=
        (mouseRef.current.x -
          smoothMouseX) *
        0.035;

      smoothMouseY +=
        (mouseRef.current.y -
          smoothMouseY) *
        0.035;

      program.uniforms.uMouse.value[0] =
        smoothMouseX;

      program.uniforms.uMouse.value[1] =
        smoothMouseY;

      program.uniforms.uTime.value =
        time * 0.001;

      renderer.render({
        scene: mesh,
      });
    };

    animationId =
      requestAnimationFrame(
        animate
      );

    container.appendChild(
      gl.canvas
    );

    return () => {
      cancelAnimationFrame(
        animationId
      );

      window.removeEventListener(
        "resize",
        resize
      );

      if (mouseReact) {
        container.removeEventListener(
          "mousemove",
          handleMouseMove
        );
      }

      if (
        gl.canvas.parentNode ===
        container
      ) {
        container.removeChild(
          gl.canvas
        );
      }

      gl.getExtension(
        "WEBGL_lose_context"
      )?.loseContext();
    };
  }, [
    color,
    speed,
    amplitude,
    mouseReact,
  ]);

  return (
    <div
      ref={containerRef}
      className={`iridescence-container ${className}`}
      aria-hidden="true"
    />
  );
}