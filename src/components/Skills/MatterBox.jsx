"use client";
import { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function MixedShapes() {
  const sceneRef = useRef(null);
  const textCanvasRef = useRef(null);

  useEffect(() => {
    const { Engine, Render, Runner, Common, MouseConstraint, Mouse, Composite, Bodies } = Matter;

    // Create engine
    const engine = Engine.create();
    const world = engine.world;

    // Canvas dimensions
    const canvasWidth = 550;
    const canvasHeight = 500;

    // Create renderer with canvas dimensions
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        background: "#101010",
        wireframes: false,
      },
    });

    Render.run(render);

    // Create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Define skills and colors
    const skills = ["Python", "Java", "Kotlin", "React", "JavaScript", "React Native", "TypeScript", "Supabase", "AWS", "GCP", "Expo", "Next.js", "Firebase", "TensorFlow", "HTML", "CSS", "JUnit", "Pytest"];
    const colors = ["#F26E1D", "#0ae448", "#1DA1F2", "#fd5c63"];

    // Add bodies with skills
    const bodies = skills.map((skill, index) => {
      const x = 100 + (Math.floor(Math.random() * 4)) * 120; // Adjust x position
      const y = 100 + Math.floor(Math.random() * 4) * 100; // Adjust y position

      let body = Bodies.circle(x, y, 45, {
        render: {
          fillStyle: colors[index % colors.length]
        }
      });

      // Add text to the body
      body.text = skill;
      return body;
    });

    Composite.add(world, bodies);

    Composite.add(world, [
      // Walls with invisible render
      Bodies.rectangle(canvasWidth / 2, 0, canvasWidth, 5, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(canvasWidth / 2, canvasHeight, canvasWidth, 5, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(canvasWidth, canvasHeight / 2, 5, canvasHeight, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(0, canvasHeight / 2, 5, canvasHeight, { isStatic: true, render: { visible: false } }),
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
      max: { x: canvasWidth, y: canvasHeight },
    });

    // Create a separate canvas for text
    const textCanvas = document.createElement("canvas");
    textCanvas.width = canvasWidth;
    textCanvas.height = canvasHeight;
    textCanvas.style.position = "absolute";
    textCanvas.style.top = "0";
    textCanvas.style.left = "0";
    textCanvas.style.pointerEvents = "none";
    sceneRef.current.appendChild(textCanvas);
    textCanvasRef.current = textCanvas;

    const textContext = textCanvas.getContext("2d");
    textContext.font = 'bold 14px Sans-serif';
    textContext.textAlign = 'center';
    textContext.textBaseline = 'middle';
    textContext.fillStyle = '#FFFCF0'; // Set text color

    function drawText() {
      const bodies = Composite.allBodies(world);
      textContext.clearRect(0, 0, canvasWidth, canvasHeight); // Clear only text layer

      bodies.forEach(body => {
        if (body.text) {
          const { position } = body;
          const scale = render.options.width / canvasWidth;
          // Adjust for Matter.js coordinate system
          const x = position.x;
          const y = position.y;
          textContext.fillText(body.text, x, y);
        }
      });
    }

    // Redraw text after each update
    Matter.Events.on(engine, 'afterUpdate', drawText);

    // Initial draw
    drawText();

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
      Matter.Events.off(engine, 'afterUpdate', drawText);
      if (textCanvasRef.current) {
        textCanvasRef.current.remove();
      }
    };
  }, []);

  return <div ref={sceneRef} />;
}
