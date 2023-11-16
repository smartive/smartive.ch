'use client';

/* eslint-disable react/no-unknown-property */
import { PresentationControls, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import localFont from 'next/font/local';
import { FC, useEffect, useRef, useState } from 'react';
import THREE, { Group } from 'three';
import type { GLTF } from 'three-stdlib';
import { classNames } from '../../../utils/css';
import { ArrowTopToBottomLeft, ArrowToptoBottomRight } from './arrow-icons';
import { CHOCOLATE_COLORS, DOT_INGREDIENTS, TOGGLE_BUTTONS, desaturateColor } from './helpers';

const heyOctoberFont = localFont({ src: './hey-october.woff2' });

export const FarmerModel: FC = () => {
  const [activeTopping, setActiveTopping] = useState<(typeof TOGGLE_BUTTONS)[number]['topping']>('none');
  // Hack 🙊 since the canvas is not rerendered on resize, we need to force a rerender
  const [canvasRerender, setCanvasRerender] = useState(0);
  useEffect(() => {
    const onResize = () => setCanvasRerender((v) => v + 1);
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="flex basis-2/5 flex-col items-center gap-6">
      <div className="max-h-150 relative flex h-full w-full max-w-[28rem] items-center justify-center overflow-hidden px-5 py-2">
        <div className="absolute inset-0">
          <div className="pointer-events-none relative z-10 h-full w-full">
            <div className="absolute left-3 top-1/4 flex flex-col items-center justify-center">
              <span className={`text-base ${heyOctoberFont.className}`}>Interaktiv</span>
              <div className="translate-x-1/3">
                <ArrowToptoBottomRight />
              </div>
            </div>
            <div className="absolute right-3 top-10 flex flex-col items-center justify-center">
              <span className={`text-base ${heyOctoberFont.className}`}>Spielerisch</span>
              <div className="-translate-x-1/3">
                <ArrowTopToBottomLeft />
              </div>
            </div>
          </div>
        </div>

        <div className="h-120 w-full max-w-[28rem]">
          {/* eslint-disable-next-line react/forbid-component-props */}
          <Canvas camera={{ fov: 45 }} key={canvasRerender} className="touch-none">
            <directionalLight intensity={1.4} position={[1, 1, 1]} />
            <directionalLight intensity={1.4} position={[-1, 0, 0]} />
            <directionalLight intensity={2.4} position={[1, -1, 0]} />
            <directionalLight intensity={0.7} position={[-1, -1, 1]} />
            <ambientLight intensity={0.5} />
            <PresentationControls enabled global rotation={[0, 0, 0.2]} polar={[-1, 1]}>
              <FarmerGroup position={[0, 0, 0]} topping={activeTopping} />
            </PresentationControls>
          </Canvas>
        </div>
      </div>
      <ul className="flex w-full items-center justify-center gap-0.5 rounded-sm">
        {TOGGLE_BUTTONS.map(({ label, topping }) => (
          <li
            key={label}
            className={classNames(
              'rounded-md bottom-5 left-5 text-sm text-black first:rounded-l-full last:rounded-r-full',
              topping === activeTopping
                ? 'bg-cornflower-500 text-white-100'
                : 'bg-white-100 transition-all delay-150 hover:bg-cornflower-200 hover:text-white-100',
            )}
          >
            <button
              type="button"
              className={classNames(
                'h-full w-full whitespace-nowrap px-4 py-2 md:px-8',
                topping === activeTopping && 'cursor-default',
              )}
              onClick={() => setActiveTopping(topping)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

type GLTFResult = GLTF & {
  nodes: {
    Schoko_voll: THREE.Mesh;
    Schoko_unten: THREE.Mesh;
    Farmer_Soft: THREE.Mesh;
    Farmer_Nuss: THREE.Mesh;
    Zutat_1: THREE.Mesh;
    Zutat_2: THREE.Mesh;
    Zutat_3: THREE.Mesh;
  };
  materials: {
    ['Schokolade voll']: THREE.MeshStandardMaterial;
    ['Schokolade unten']: THREE.MeshStandardMaterial;
    Riegel: THREE.MeshStandardMaterial;
    ['Zutat 1']: THREE.MeshStandardMaterial;
    ['Zutat 2']: THREE.MeshStandardMaterial;
    ['Zutat 3']: THREE.MeshStandardMaterial;
  };
};

const FarmerGroup: FC<JSX.IntrinsicElements['group'] & { topping?: 'full' | 'bottom' | 'none' }> = (props) => {
  const { nodes, materials } = useGLTF('/three/farmer.glb') as GLTFResult;
  const groupRef = useRef<Group | null>(null);
  const { topping } = props;

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() / 3;
    }
  });

  useEffect(() => {
    materials['Schokolade voll'].color.set(CHOCOLATE_COLORS['milk']);
    materials['Schokolade unten'].color.set(CHOCOLATE_COLORS['dark']);
    for (const { color, index } of DOT_INGREDIENTS) {
      materials[`Zutat ${index}`].color.set(desaturateColor(color));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <group {...props} scale={35} dispose={null} ref={groupRef}>
      <mesh geometry={nodes.Farmer_Soft.geometry} visible={topping !== 'full'} material={materials.Riegel} />
      {topping === 'full' && <mesh geometry={nodes.Schoko_voll.geometry} material={materials['Schokolade voll']} />}
      {topping === 'bottom' && <mesh geometry={nodes.Schoko_unten.geometry} material={materials['Schokolade unten']} />}
      {DOT_INGREDIENTS.map(({ index }) => (
        <mesh
          key={index}
          geometry={nodes[`Zutat_${index}`].geometry}
          visible={topping !== 'full'}
          material={materials[`Zutat ${index}`]}
        />
      ))}
    </group>
  );
};

useGLTF.preload('/three/farmer.glb');
