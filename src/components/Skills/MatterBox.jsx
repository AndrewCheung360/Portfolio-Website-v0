"use client";
import { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function MixedShapes() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const { Engine, Render, Runner, Composite, Common, MouseConstraint, Mouse, Bodies, Events } = Matter;

    // Create engine
    const engine = Engine.create();
    const world = engine.world;

    // Get container dimensions
    const containerWidth = sceneRef.current.clientWidth;
    const containerHeight = sceneRef.current.clientHeight;

    // Create renderer with dynamic canvas size
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        background: "transparent",
        wireframes: false,
        wireframeBackground: "transparent",
      },
    });

    Render.run(render);

    // Create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // List of skills
    const skills = ['Python', 'Java', 'Javascript', 'Kotlin', 'Typescript', 'React', 'React Native', 'HTML', 'CSS', 'Firebase', 'Supabase', 'AWS', 'Expo', 'TensorFlow', 'Pytest', 'JUnit'];

    // Predefined set of colors
    const colors = ["#F26E1D", "#0ae448", "#1DA1F2", "#fd5c63"];

    // Add bodies with text
    skills.forEach((skill, index) => {
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      const radius = Math.min(containerWidth, containerHeight) * Common.random(0.075, 0.1); // Scale radius based on canvas size
      const color = colors[index % colors.length];
      
      let body = Bodies.circle(x, y, radius, { render: { fillStyle: color } });

      Composite.add(world, body);

      // Add text
      const textElement = document.createElement('div');
      textElement.style.position = 'absolute';
      textElement.style.left = `${x}px`;
      textElement.style.top = `${y}px`;
      textElement.style.color = '#fffcf0';
      textElement.style.fontFamily = 'Inter, sans-serif';
      textElement.style.fontWeight = 'bold';
      textElement.style.fontSize = `${radius * 0.25}px`; // Scale text size based on shape size
      textElement.style.pointerEvents = 'none'; // Make sure the text does not interfere with mouse interactions
      textElement.textContent = skill;
      sceneRef.current.appendChild(textElement);

      // Update text position when body moves
      Events.on(engine, 'afterUpdate', () => {
        const position = body.position;
        textElement.style.left = `${position.x - textElement.offsetWidth / 2}px`; // Center text horizontally
        textElement.style.top = `${position.y - textElement.offsetHeight / 2}px`; // Center text vertically
      });
    });

    // Add walls with dynamic coordinates
    Composite.add(world, [
      Bodies.rectangle(containerWidth / 2, -2.5, containerWidth, 1, { isStatic: true, render: { visible: false } }), // Top wall
      Bodies.rectangle(containerWidth / 2, containerHeight + 2.5, containerWidth, 1, { isStatic: true, render: { visible: false } }), // Bottom wall
      Bodies.rectangle(containerWidth + 2.5, containerHeight / 2, 5, containerHeight, { isStatic: true, render: { visible: false } }), // Right wall
      Bodies.rectangle(-2.5, containerHeight / 2, 5, containerHeight, { isStatic: true, render: { visible: false } }), // Left wall
    ]);

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(world, mouseConstraint);

    // Keep the mouse in sync with rendering
    render.mouse = mouse;

    // Fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: containerWidth, y: containerHeight },
    });

    // Handle window resize
    const handleResize = () => {
      const newWidth = sceneRef.current.clientWidth;
      const newHeight = sceneRef.current.clientHeight;

      Render.setPixelRatio(render, window.devicePixelRatio);
      render.options.width = newWidth;
      render.options.height = newHeight;
      render.canvas.width = newWidth;
      render.canvas.height = newHeight;

      // Adjust walls to new dimensions
      Composite.clear(world, false, true); // Clear only the walls
      Composite.add(world, [
        Bodies.rectangle(newWidth / 2, -2.5, newWidth, 1, { isStatic: true, render: { visible: false } }),
        Bodies.rectangle(newWidth / 2, newHeight + 2.5, newWidth, 1, { isStatic: true, render: { visible: false } }),
        Bodies.rectangle(newWidth + 2.5, newHeight / 2, 5, newHeight, { isStatic: true, render: { visible: false } }),
        Bodies.rectangle(-2.5, newHeight / 2, 5, newHeight, { isStatic: true, render: { visible: false } }),
      ]);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
      window.removeEventListener('resize', handleResize);
      // Clean up text elements
      const currentRef = sceneRef.current;
      if (!currentRef) return;
      const textElements = currentRef.querySelectorAll('div');
      textElements.forEach(el => el.remove());
    };
  }, [ sceneRef]);

  return <div ref={sceneRef} style={{ position: 'relative', width: '100%', height: '100%' }} />;
}
