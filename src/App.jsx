import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

// --- INLINE SVG COMPONENTS ---

// 1. Footer GitHub Icon
const GithubIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

// 2. Tools Grid Git Icon
const GitIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z"/>
  </svg>
);

// General UI Icons
const MailIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg> 
);

const MaximizeIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="15 3 21 3 21 9"></polyline>
    <polyline points="9 21 3 21 3 15"></polyline>
    <line x1="21" y1="3" x2="14" y2="10"></line>
    <line x1="3" y1="21" x2="10" y2="14"></line>
  </svg>
);

const CloseIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ExternalLinkIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

// STMicroelectronics
const Stm32Icon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M 23.818 5.61 L 6.402 5.61 C 5.125 5.609 3.968 6.362 3.452 7.529 L 0.014 15.811 C -0.036 15.931 0.052 16.063 0.182 16.061 L 8.046 16.061 C 8.601 16.061 8.848 15.523 8.412 15.093 L 5.524 12.388 C 4.008 10.9 4.658 7.45 7.81 7.45 L 23.206 7.45 C 23.283 7.451 23.352 7.402 23.378 7.329 L 23.987 5.857 C 23.996 5.835 24.001 5.811 24 5.787 C 23.997 5.689 23.917 5.61 23.818 5.61 M 22.082 9.826 L 19.126 9.826 C 18.932 9.825 18.756 9.94 18.681 10.118 L 15.369 18.118 C 15.355 18.144 15.347 18.173 15.347 18.202 C 15.348 18.302 15.429 18.383 15.529 18.381 L 16.632 18.381 C 17.93 18.387 19.105 17.613 19.612 16.418 L 22.244 10.063 C 22.252 10.042 22.257 10.019 22.257 9.996 C 22.253 9.902 22.176 9.828 22.082 9.826 M 16.271 10.005 C 16.271 9.905 16.189 9.825 16.089 9.825 L 7.706 9.825 C 7.251 9.825 6.853 10.38 7.335 10.825 L 10.104 13.404 C 10.104 13.404 11.224 14.437 10.984 15.916 C 10.778 17.219 9.889 18.016 9.241 18.302 C 9.208 18.31 9.196 18.351 9.219 18.376 C 9.23 18.387 9.246 18.392 9.261 18.388 L 12.489 18.388 C 12.683 18.39 12.859 18.275 12.934 18.095 L 16.256 10.068 C 16.266 10.049 16.271 10.027 16.271 10.005"/>
  </svg>
);

// Python
const PythonIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
  </svg>
);


// --- COMPONENT RENDERERS ---

const TechItem = ({ Icon, name }) => (
  <div className="group relative flex flex-col items-center justify-center p-2 text-white cursor-default h-full min-h-[70px]">
    <Icon 
      size={28} 
      className="transition-all duration-300 group-hover:text-cyan-500 group-hover:-translate-y-2 relative z-10" 
    />
    <span className="absolute bottom-1 text-[10px] sm:text-xs font-mono tracking-wider text-neutral-500 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-0">
      {name}
    </span>
  </div>
);

const TechItemPNG = ({ src, name }) => (
  <div className="group relative flex flex-col items-center justify-center p-2 text-white cursor-default h-full min-h-[70px]">
    <div 
      className="w-[28px] h-[28px] bg-white transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-cyan-500 relative z-10"
      style={{
        WebkitMaskImage: `url(${src})`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskImage: `url(${src})`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
      }}
      title={name}
    />
    <span className="absolute bottom-1 text-[10px] sm:text-xs font-mono tracking-wider text-neutral-500 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-0">
      {name}
    </span>
  </div>
);

// --- INVERSE KINEMATICS ROBOT ARM ---
function RobotArmCanvas() {
  const mountRef = useRef(null);
  const [webGlSupported, setWebGlSupported] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;
    mountRef.current.innerHTML = '';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 12);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch (error) {
      console.error('3D Canvas Error: WebGL is not supported.', error);
      setWebGlSupported(false);
      return;
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight1.position.set(10, 15, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x88ccff, 1.2);
    dirLight2.position.set(-10, 8, -10);
    scene.add(dirLight2);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.5);
    rimLight.position.set(0, 5, -15);
    scene.add(rimLight);

    scene.add(new THREE.HemisphereLight(0xe0f2fe, 0x0f172a, 0.6));

    const darkMat = new THREE.MeshStandardMaterial({ color: 0x2a313b, metalness: 0.85, roughness: 0.3 });
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xe8ecef, metalness: 1.0, roughness: 0.15 });
    const accentMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, metalness: 0.5, roughness: 0.2, emissive: 0x0369a1, emissiveIntensity: 0.4 });
    const jointMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.95, roughness: 0.1 });

    const root = new THREE.Group();
    root.position.set(0, -3.4, 0); 
    root.scale.set(1.5, 1.5, 1.5);
    root.rotation.y = -Math.PI / 2;
    scene.add(root);

    const shadowGeo = new THREE.CircleGeometry(3.6, 40);
    const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.2 });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -0.02;
    root.add(shadowMesh);

    const baseGroup = new THREE.Group();
    baseGroup.rotation.y = Math.PI / 2;
    root.add(baseGroup);

    const baseBottom = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, 0.3, 32), darkMat);
    baseBottom.position.y = 0.15;
    baseGroup.add(baseBottom);

    const baseYawGroup = new THREE.Group();
    baseYawGroup.position.set(0, 0.3, 0);
    root.add(baseYawGroup);

    const yawCore = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, 0.08, 32), accentMat);
    yawCore.position.set(0, 0.04, 0);
    baseYawGroup.add(yawCore);

    const uBracketBase = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 0.1, 32), bodyMat);
    uBracketBase.position.set(0, 0.13, 0); 
    baseYawGroup.add(uBracketBase);

    const uprightLBase = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.47, 0.25), bodyMat);
    uprightLBase.position.set(0, 0.415, -0.45);
    baseYawGroup.add(uprightLBase);

    const uprightLCap = new THREE.Mesh(new THREE.CylinderGeometry(0.275, 0.275, 0.25, 32), bodyMat);
    uprightLCap.rotation.x = Math.PI / 2;
    uprightLCap.position.set(0, 0.65, -0.45);
    baseYawGroup.add(uprightLCap);

    const uprightRBase = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.47, 0.25), bodyMat);
    uprightRBase.position.set(0, 0.415, 0.45);
    baseYawGroup.add(uprightRBase);

    const uprightRCap = new THREE.Mesh(new THREE.CylinderGeometry(0.275, 0.275, 0.25, 32), bodyMat);
    uprightRCap.rotation.x = Math.PI / 2;
    uprightRCap.position.set(0, 0.65, 0.45);
    baseYawGroup.add(uprightRCap);

    const shoulderPivot = new THREE.Group();
    shoulderPivot.position.set(0, 0.65, 0); 
    baseYawGroup.add(shoulderPivot);

    const shoulderMotor = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.65, 32), jointMat);
    shoulderMotor.rotation.x = Math.PI / 2;
    shoulderPivot.add(shoulderMotor);

    const shoulderAxle = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.25, 32), accentMat);
    shoulderAxle.rotation.x = Math.PI / 2;
    shoulderPivot.add(shoulderAxle);

    const upperArmLength = 2.65;
    const upperArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.42, upperArmLength, 32), bodyMat);
    upperArmMesh.rotation.z = -Math.PI / 2;
    upperArmMesh.position.set(upperArmLength / 2, 0, 0);
    shoulderPivot.add(upperArmMesh);

    const elbowPivot = new THREE.Group();
    elbowPivot.position.set(upperArmLength, 0, 0);
    shoulderPivot.add(elbowPivot);

    const elbowMotor = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.5, 32), jointMat);
    elbowMotor.rotation.x = Math.PI / 2;
    elbowPivot.add(elbowMotor);

    const elbowCap = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.56, 32), accentMat);
    elbowCap.rotation.x = Math.PI / 2;
    elbowPivot.add(elbowCap);

    const forearmLength = 2.5;
    const forearmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.24, forearmLength, 32), bodyMat);
    forearmMesh.rotation.z = -Math.PI / 2;
    forearmMesh.position.set(forearmLength / 2, 0, 0);
    elbowPivot.add(elbowPivot);
    elbowPivot.add(forearmMesh);

    const wristPitchPivot = new THREE.Group();
    wristPitchPivot.position.set(forearmLength, 0, 0);
    elbowPivot.add(wristPitchPivot);

    const wristMotor = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.38, 32), jointMat);
    wristMotor.rotation.x = Math.PI / 2;
    wristPitchPivot.add(wristMotor);

    const wristCap = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.44, 32), accentMat);
    wristCap.rotation.x = Math.PI / 2;
    wristPitchPivot.add(wristCap);

    const wristCone = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.2, 0.4, 32), accentMat);
    wristCone.rotation.z = -Math.PI / 2;
    wristCone.position.set(0.2, 0, 0);
    wristPitchPivot.add(wristCone);

    const toolFlange = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.08, 32), darkMat);
    toolFlange.rotation.z = -Math.PI / 2;
    toolFlange.position.set(0.4, 0, 0); 
    wristPitchPivot.add(toolFlange);

    const wristRollPivot = new THREE.Group();
    wristRollPivot.position.set(0, 0, 0);
    wristPitchPivot.add(wristRollPivot);

    const makeProng = (rollAngle) => {
      const pivot = new THREE.Group();
      pivot.rotation.x = rollAngle;

      const basePivot = new THREE.Group();
      basePivot.position.set(0.44, 0.18, 0);
      basePivot.rotation.z = 0.35;

      const proximalLength = 0.45;
      const proximal = new THREE.Mesh(new THREE.CapsuleGeometry(0.02, proximalLength, 12, 12), darkMat);
      proximal.rotation.z = -Math.PI / 2;
      proximal.position.set(0.225, 0, 0); 
      basePivot.add(proximal);

      const midJointPivot = new THREE.Group();
      midJointPivot.position.set(0.45, 0, 0); 
      midJointPivot.rotation.z = -0.75;
      basePivot.add(midJointPivot);

      const midHinge = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.06, 16), jointMat);
      midHinge.rotation.x = Math.PI / 2;
      midJointPivot.add(midHinge);

      const midHingeOuterL = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.015, 16), darkMat);
      midHingeOuterL.position.z = 0.03;
      midHingeOuterL.rotation.x = Math.PI / 2;
      midJointPivot.add(midHingeOuterL);

      const midHingeOuterR = midHingeOuterL.clone();
      midHingeOuterR.position.z = -0.03;
      midJointPivot.add(midHingeOuterR);

      const distalLength = 0.42;
      const distal = new THREE.Mesh(new THREE.CapsuleGeometry(0.015, distalLength, 12, 12), darkMat);
      distal.rotation.z = -Math.PI / 2;
      distal.position.set(0.21, 0, 0); 
      midJointPivot.add(distal);

      pivot.add(basePivot);
      return pivot;
    };

    wristRollPivot.add(makeProng(0));
    wristRollPivot.add(makeProng((Math.PI * 2) / 3));
    wristRollPivot.add(makeProng((Math.PI * 4) / 3));

    const raycaster = new THREE.Raycaster();
    const mouseNdc = new THREE.Vector2(0, 0);
    const hitPoint = new THREE.Vector3();

    const workPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -4);

    const L1 = upperArmLength;
    const L2 = forearmLength;
    const L3 = 1.45;

    const smooth = { baseYaw: 0, shoulder: 0.3, elbow: -0.9, wristPitch: 0, wristRoll: 0, targetYaw: 0, targetX: 3, targetY: 1, targetPhi: 0 };
    const clamp = THREE.MathUtils.clamp;
    const lerp = THREE.MathUtils.lerp;

    function solveTwoBoneIK(targetX, targetY, len1, len2) {
      const distRaw = Math.sqrt(targetX * targetX + targetY * targetY);
      const maxReach = len1 + len2 - 0.2; 
      const dist = clamp(distRaw, 0.001, maxReach);
      const cosElbow = clamp((dist * dist - len1 * len1 - len2 * len2) / (2 * len1 * len2), -1, 1);
      const elbow = -Math.acos(cosElbow);
      const k1 = len1 + len2 * Math.cos(elbow);
      const k2 = len2 * Math.sin(elbow);
      const shoulder = Math.atan2(targetY, targetX) - Math.atan2(k2, k1);
      return { shoulder, elbow };
    }

    function updateTargetFromMouse() {
      raycaster.setFromCamera(mouseNdc, camera);
      const ok = raycaster.ray.intersectPlane(workPlane, hitPoint);
      if (!ok) return;

      const local = root.worldToLocal(hitPoint.clone());
      const shoulderYOffset = 0.95;
      const r = Math.sqrt(local.x * local.x + local.z * local.z);
      const y = local.y - shoulderYOffset;

      smooth.targetYaw = clamp(Math.atan2(-local.z, local.x), -Math.PI * 0.75, Math.PI * 0.75);
      
      let targetR = clamp(r, 1.5, L1 + L2 + L3 - 1.2); 
      let targetY_val = clamp(y, -3.0, 7.0); 
      
      let edgeFactor = Math.abs(mouseNdc.x);
      let upwardBend = Math.max(0, targetY_val * 0.35) * (0.1 + edgeFactor * 0.9);
      let phi = clamp(upwardBend - 0.7, -1.2, 1.2);

      let wristX = targetR - L3 * Math.cos(phi);
      let wristY = targetY_val - L3 * Math.sin(phi);

      smooth.targetX = wristX;
      smooth.targetY = wristY;
      smooth.targetPhi = phi;
    }

    const onMouseMove = (e) => {
      mouseNdc.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseNdc.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    let frameId;
    const animate = () => {
      updateTargetFromMouse();

      const solved = solveTwoBoneIK(smooth.targetX, smooth.targetY, L1, L2);
      const desiredShoulder = clamp(solved.shoulder, -0.2, 2.4);
      const desiredElbow = clamp(solved.elbow, -2.9, -0.15);
      const forearmWorldAngle = desiredShoulder + desiredElbow;

      const desiredWristPitch = clamp(smooth.targetPhi - forearmWorldAngle, -2.2, 2.2);
      const desiredWristRoll = clamp(mouseNdc.x * 1.5, -Math.PI, Math.PI);

      smooth.baseYaw = lerp(smooth.baseYaw, smooth.targetYaw, 0.08);
      smooth.shoulder = lerp(smooth.shoulder, desiredShoulder, 0.08);
      smooth.elbow = lerp(smooth.elbow, desiredElbow, 0.08);
      smooth.wristPitch = lerp(smooth.wristPitch, desiredWristPitch, 0.08);
      smooth.wristRoll = lerp(smooth.wristRoll, desiredWristRoll, 0.08);

      baseYawGroup.rotation.y = smooth.baseYaw;
      shoulderPivot.rotation.z = smooth.shoulder;
      elbowPivot.rotation.z = smooth.elbow;
      wristPitchPivot.rotation.z = smooth.wristPitch;
      wristRollPivot.rotation.x = smooth.wristRoll;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    updateTargetFromMouse();
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frameId);

      if (mountRef.current) mountRef.current.innerHTML = '';
      [darkMat, bodyMat, accentMat, jointMat, shadowMat].forEach((m) => m.dispose());
      shadowGeo.dispose();
      renderer.dispose();
    };
  }, []);

  if (!webGlSupported) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-neutral-950 p-6 text-center">
        <p className="text-neutral-500 font-mono text-sm">WebGL acceleration is disabled.</p>
      </div>
    );
  }

  return <div ref={mountRef} className="w-full h-full pointer-events-none" />;
}

// --- HOME CONTENT COMPONENT ---
function HomeContent() {
  const [activeModal, setActiveModal] = useState(null);

  const modalData = {
    experience: {
      title: "EXPERIENCE DETAILS",
      content: (
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-bold text-white mb-1">Electronics R&D Intern <span className="text-cyan-500 font-normal">@ FulcrumAir</span></h4>
            <p className="text-sm font-mono text-neutral-500 mb-3">Current</p>
            <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
              Developing and testing custom PCBs and embedded systems for industrial robotic applications. Focusing on maximizing power reliability, signal integrity, and firmware stability for high-voltage environments.
            </p>
          </div>
          <div className="w-full h-px bg-neutral-800/50"></div>
          <div>
            <h4 className="text-xl font-bold text-white mb-1">ELEC Team Member <span className="text-cyan-500 font-normal">@ UBC Rover</span></h4>
            <p className="text-sm font-mono text-neutral-500 mb-3">2025 - Present</p>
            <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
              Collaborating with a multi-disciplinary team to design and build a Mars rover for international competitions. Contributing to the electrical sub-team on sensor integration, power distribution, and serial communication.
            </p>
          </div>
          <div className="w-full h-px bg-neutral-800/50"></div>
          <div>
            <h4 className="text-xl font-bold text-white mb-1">Electrical Engineering Intern <span className="text-cyan-500 font-normal">@ UCalgary</span></h4>
            <p className="text-sm font-mono text-neutral-500 mb-3">2023</p>
            <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
              Assisted in research on op-amp based oscillator design. Prototyped circuits, performed validation tests, and ran SPICE simulation to validate signal behavior.
            </p>
          </div>
        </div>
      )
    },
    currentProject: {
      title: "PROJECT INSIGHTS",
      content: (
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-white">Custom Motor Controller</h4>
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-5">
            <h5 className="font-mono text-cyan-500 text-sm mb-4 uppercase tracking-wider">Technical Highlights</h5>
            <ul className="space-y-4 text-neutral-400 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-neutral-200 block mb-1">Hardware Design:</strong> Designing a compact motor driver module around the IFX007T half-bridge to support multichannel actuator control. </span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-neutral-200 block mb-1">Embedded Firmware:</strong> Developing C++ firmware to handle motor control logic and CAN communication.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  };

  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col p-6 sm:p-8 md:px-16 pt-8 md:pt-12 pointer-events-none transition-opacity duration-500">
        
        <div className="max-w-7xl w-full mx-auto pointer-events-auto flex-1 flex flex-col">
          
          <div className="border-b border-neutral-800 pb-8 mb-8">
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white text-left drop-shadow-lg m-0 leading-none">
                Mofe Omolade <span className="text-cyan-500">.</span>
              </h1>
            </div>
            <div className="space-y-6 text-neutral-300 text-lg md:text-xl leading-relaxed max-w-2xl text-left drop-shadow-md">
              <p>
                I'm a UBC Computer Engineering student with a passion for electronics. I love exploring anything related to robotics, embedded programming, semiconductors, and more!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12 font-mono text-sm">
            
            <div 
              onClick={() => setActiveModal('experience')}
              className="relative p-6 bg-neutral-900/60 rounded-xl backdrop-blur-md border border-neutral-800/60 hover:border-cyan-500/50 hover:bg-neutral-800/60 transition-all text-left flex flex-col h-full cursor-pointer group shadow-lg hover:shadow-cyan-900/20"
            >
              <div className="absolute top-5 right-5 text-neutral-500 group-hover:text-cyan-400 transition-colors">
                <MaximizeIcon size={18} />
              </div>
              <h3 className="text-white font-semibold mb-3 pb-2 border-b border-neutral-800 tracking-wider pr-8">EXPERIENCE</h3>
              <ul className="space-y-3 text-neutral-400 mt-2">
                <li><span className="text-white">Electronics R&D Intern</span> <br/>@ FulcrumAir</li>
                <li><span className="text-white">ELEC Team Member</span> <br/>@ UBC Rover</li>
                <li><span className="text-white">Electrical Engineering Intern</span> <br/>@ UCalgary</li>
              </ul>
            </div>

            <div className="p-6 bg-neutral-900/60 rounded-xl backdrop-blur-md border border-neutral-800/60 hover:border-cyan-500/30 transition-all text-left flex flex-col h-full">
              <h3 className="text-white font-semibold mb-2 pb-2 border-b border-neutral-800 tracking-wider">TOOLS</h3>
              <div className="grid grid-cols-3 gap-2 mt-2 content-start flex-1">
                <TechItemPNG src="/altium-logo.png" name="Altium" />
                <TechItemPNG src="/kicad.png" name="KiCad" />
                <TechItem Icon={GitIcon} name="Git" />
                <TechItemPNG src="/LT.png" name="LTspice" />
                <TechItem Icon={Stm32Icon} name="STM32" />
                <TechItemPNG src="/matlablogo.png" name="MATLAB" />
              </div>
            </div>

            <div className="p-6 bg-neutral-900/60 rounded-xl backdrop-blur-md border border-neutral-800/60 hover:border-cyan-500/30 transition-all text-left flex flex-col h-full">
              <h3 className="text-white font-semibold mb-2 pb-2 border-b border-neutral-800 tracking-wider">LANGUAGES</h3>
              <div className="grid grid-cols-2 gap-4 mt-2 content-start flex-1">
                <TechItemPNG src="/C.png" name="C/C++" />
                <TechItem Icon={PythonIcon} name="Python" />
              </div>
            </div>

            <div 
              onClick={() => setActiveModal('currentProject')}
              className="relative p-6 bg-neutral-900/60 rounded-xl backdrop-blur-md border border-neutral-800/60 hover:border-cyan-500/50 hover:bg-neutral-800/60 transition-all text-left flex flex-col h-full cursor-pointer group shadow-lg hover:shadow-cyan-900/20"
            >
              <div className="absolute top-5 right-5 text-neutral-500 group-hover:text-cyan-400 transition-colors">
                <MaximizeIcon size={18} />
              </div>
              <h3 className="text-white font-semibold mb-3 pb-2 border-b border-neutral-800 tracking-wider pr-8">CURRENT PROJECT</h3>
              <div className="space-y-3 text-neutral-400 mt-2">
                <p className="text-white font-medium">Custom Motor Controller</p>
                <p className="text-xs leading-relaxed">
                  Designing a custom motor controller PCB supporting 24 V, 5 A loads and CAN communication.
                </p>
                <p className="text-xs uppercase tracking-wider text-cyan-500 font-bold mt-2">
                  In Progress
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto flex flex-col">
            <div className="w-full border-t border-neutral-800 pt-6 pb-4">
              <div className="flex justify-start items-center gap-8">
                <a href="https://github.com/mofeomolade" target="_blank" aria-label="GitHub Profile" rel="noreferrer" className="pointer-events-auto cursor-pointer text-neutral-400 hover:text-white transition-transform hover:-translate-y-1 duration-300 relative z-20">
                  <GithubIcon size={24} />
                </a>
                
                <a href="https://linkedin.com/in/momolade" target="_blank" aria-label="LinkedIn Profile" rel="noreferrer" className="pointer-events-auto cursor-pointer text-neutral-400 hover:text-white transition-all hover:-translate-y-1 duration-300 flex items-center justify-center relative z-20">
                  <div
                    className="w-6 h-6 bg-current transition-colors duration-300"
                    style={{
                      WebkitMaskImage: `url(/linkedin.png)`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url(/linkedin.png)`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </a>
                
                <a href="mailto:mofe.omolade@example.com" aria-label="Contact" className="pointer-events-auto cursor-pointer text-neutral-400 hover:text-white transition-transform hover:-translate-y-1 duration-300 flex items-center justify-center relative z-20">
                  <MailIcon size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-auto animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
            onClick={() => setActiveModal(null)}
          ></div>
          <div className="relative z-10 w-full max-w-2xl bg-[#0a0a0a] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center p-5 md:p-6 border-b border-neutral-800/80 bg-neutral-900/40">
              <h2 className="text-lg md:text-xl font-bold font-mono tracking-widest text-white">{modalData[activeModal].title}</h2>
              <button 
                onClick={() => setActiveModal(null)}
                className="text-neutral-500 hover:text-cyan-400 transition-colors bg-transparent border-none cursor-pointer p-1 rounded hover:bg-neutral-800"
              >
                <CloseIcon size={24} />
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto text-left scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
              {modalData[activeModal].content}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// --- PROJECTS CONTENT COMPONENT ---
function ProjectsContent() {
  const [activeModal, setActiveModal] = useState(null);

  const projects = [
    { 
      id: "motor-controller",
      title: "Custom Motor Controller", 
      desc: "Custom motor controller PCB supporting 24V, 5A loads and CAN communication.", 
      tech: "Altium Designer, LTspice, C++",
      content: (
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-white">Custom Motor Controller</h4>
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-5">
            <h5 className="font-mono text-cyan-500 text-sm mb-4 uppercase tracking-wider">Technical Highlights</h5>
            <ul className="space-y-4 text-neutral-400 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-neutral-200 block mb-1">Hardware Design:</strong> Designing a compact motor driver module around the IFX007T half-bridge to support multi-channel actuator control and CAN communication. </span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-neutral-200 block mb-1">PCB Layout:</strong> Planning thorough SPICE simulations prior to physical assembly, followed by hardware debugging.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-neutral-200 block mb-1">Embedded Firmware:</strong> Developing C++ firmware to handle motor control logic and serial communication for reliable in-field robot operation.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    { 
      id: "drivetrain",
      title: "Autonomous Drivetrain", 
      desc: "Firmware and electrical design for a 6-wheel rover drivetrain using a Nucleo-F446RE, interfacing with an NVIDIA Jetson.", 
      tech: "STM32, C, UART",
      content: (
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-white">Autonomous Drivetrain System</h4>
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-5">
            <h5 className="font-mono text-cyan-500 text-sm mb-4 uppercase tracking-wider">Technical Highlights</h5>
            <ul className="space-y-4 text-neutral-400 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-neutral-200 block mb-1">Hardware Integration:</strong> Utilized three L298N motor driver modules to drive six brushed DC motors.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-neutral-200 block mb-1">Embedded Control:</strong> Wrote C firmware on a Nucleo-F446RE MCU to parse serial commands from an Nvidia Jetson for drivetrain execution.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-neutral-200 block mb-1">Telemetry:</strong> Calculated rover speed using hall effect encoder data, transmitting velocity back to the Jetson.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    { 
      id: "uav",
      title: "Buck Converter Module", 
      desc: "Designing a custom 24V-5V 2A synchronous buck converter.", 
      tech: "Altium, LTspice",
      content: (
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-white">24V-5V Synchronous Buck</h4>
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-5">
            <h5 className="font-mono text-cyan-500 text-sm mb-4 uppercase tracking-wider">Technical Highlights</h5>
            <ul className="space-y-4 text-neutral-400 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-neutral-200 block mb-1">Power Architecture:</strong> Designing a discrete step-down topology utilizing a high-side N-channel MOSFET, low-side synchronous switch, floating bootstrap gate drive, and an analog Type II control loop.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-neutral-200 block mb-1">PCB Layout:</strong> Validating closed-loop stability in LTspice before executing PCB layout in Altium.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    { 
      id: "hud",
      title: "Car HUD Speedometer", 
      desc: "Custom Heads-Up Display speedometer using a low-power MCU, GPS module, and high-brightness LCD.", 
      tech: "Arduino, GNSS, C++, SPI",
      content: (
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-white">Car HUD Speedometer</h4>
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-5">
            <h5 className="font-mono text-cyan-500 text-sm mb-4 uppercase tracking-wider">Technical Highlights</h5>
            <ul className="space-y-4 text-neutral-400 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-neutral-200 block mb-1">Embedded Programming:</strong> C++ firmware to parse NMEA data streams to compute velocity from positioning telemetry.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-neutral-200 block mb-1">Electronics Design:</strong> Integrating Arduino Nano, GY-NEO6MV2 module, and SPI OLED display for safe operation on vehicle supply voltage. </span>
                
              </li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const activeProjectData = projects.find(p => p.id === activeModal);

  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col p-6 sm:p-8 md:px-16 pt-8 md:pt-12 pointer-events-none transition-opacity duration-500">
        
        <div className="max-w-7xl w-full mx-auto pointer-events-auto flex-1 flex flex-col">
          
          <div className="border-b border-neutral-800 pb-8 mb-8 text-left">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white text-left drop-shadow-lg m-0 leading-none">
                Projects <span className="text-cyan-500">.</span>
              </h1>
            </div>
            <p className="text-neutral-400 font-mono text-xs sm:text-sm uppercase tracking-widest mt-4">Cool things I've made :) </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 text-left flex-1">
            {projects.map((proj) => (
              <div 
                key={proj.id} 
                onClick={() => setActiveModal(proj.id)}
                className="relative p-6 sm:p-8 bg-neutral-900/60 rounded-xl backdrop-blur-md border border-neutral-800/60 hover:border-cyan-500/40 hover:bg-neutral-800/60 hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col h-full shadow-lg"
              >
                <div className="absolute top-6 right-6 text-neutral-500 group-hover:text-cyan-400 transition-colors">
                  <MaximizeIcon size={18} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors pr-8">{proj.title}</h3>
                <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">{proj.desc}</p>
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider border-t border-neutral-800 pt-4">
                  {proj.tech}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-col">
            <div className="w-full border-t border-neutral-800 pt-6 pb-4">
              <div className="flex justify-start items-center gap-8">
                <a href="https://github.com/mofeomolade" target="_blank" aria-label="GitHub Profile" rel="noreferrer" className="pointer-events-auto cursor-pointer text-neutral-400 hover:text-white transition-transform hover:-translate-y-1 duration-300 relative z-20">
                  <GithubIcon size={24} />
                </a>
                
                <a href="https://linkedin.com/in/momolade" target="_blank" aria-label="LinkedIn Profile" rel="noreferrer" className="pointer-events-auto cursor-pointer text-neutral-400 hover:text-white transition-all hover:-translate-y-1 duration-300 flex items-center justify-center relative z-20">
                  <div
                    className="w-6 h-6 bg-current transition-colors duration-300"
                    style={{
                      WebkitMaskImage: `url(/linkedin.png)`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url(/linkedin.png)`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </a>
                
                <a href="mailto:mofe.omolade@example.com" aria-label="Contact" className="pointer-events-auto cursor-pointer text-neutral-400 hover:text-white transition-transform hover:-translate-y-1 duration-300 flex items-center justify-center relative z-20">
                  <MailIcon size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeModal && activeProjectData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-auto animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
            onClick={() => setActiveModal(null)}
          ></div>
          <div className="relative z-10 w-full max-w-2xl bg-[#0a0a0a] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center p-5 md:p-6 border-b border-neutral-800/80 bg-neutral-900/40">
              <h2 className="text-lg md:text-xl font-bold font-mono tracking-widest text-white">PROJECT INSIGHTS</h2>
              <button 
                onClick={() => setActiveModal(null)}
                className="text-neutral-500 hover:text-cyan-400 transition-colors bg-transparent border-none cursor-pointer p-1 rounded hover:bg-neutral-800"
              >
                <CloseIcon size={24} />
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto text-left scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
              {activeProjectData.content}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2306b6d4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18.36 6.64a9 9 0 1 1-12.73 0'/%3E%3Cline x1='12' y1='2' x2='12' y2='12'/%3E%3C/svg%3E";
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: '#050505',
        backgroundImage: `
          radial-gradient(circle at 50% 50%, #0f172a 0%, #000000 100%), 
          linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), 
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        backgroundPosition: 'center center',
        color: '#e5e5e5',
        overflow: 'hidden',
      }}
      className="font-sans selection:bg-cyan-500 selection:text-black"
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <RobotArmCanvas />
      </div>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        <div className="relative w-full h-full overflow-y-auto pointer-events-none">
          
          {/* Wrapped in identical max-w container structure as content to lock the right alignment perfectly */}
          <div className="absolute top-0 left-0 w-full flex flex-col p-6 sm:p-8 md:px-16 pt-10 sm:pt-12 md:pt-16 pointer-events-none z-20">
            <div className="max-w-7xl w-full mx-auto pointer-events-auto flex justify-end">
              <nav className="flex gap-8 font-mono text-base sm:text-lg tracking-widest items-center">
                <button 
                  onClick={() => setPage('home')} 
                  className={`flex items-center gap-2 transition-colors cursor-pointer bg-transparent border-0 p-0 group ${page === 'home' ? 'text-cyan-500' : 'text-neutral-400 hover:text-white'}`}
                >
                  Home
                </button>
                
                <button 
                  onClick={() => setPage('projects')} 
                  className={`flex items-center gap-2 transition-colors cursor-pointer bg-transparent border-0 p-0 group ${page === 'projects' ? 'text-cyan-500' : 'text-neutral-400 hover:text-white'}`}
                >
                  Projects
                </button>

                <a 
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition-colors cursor-pointer text-neutral-400 hover:text-white"
                >
                  Resume
                  <ExternalLinkIcon size={16} className="mb-0.5 opacity-80" />
                </a>
              </nav>
            </div>
          </div>

          {page === 'home' && <HomeContent />}
          {page === 'projects' && <ProjectsContent />}
          
        </div>
      </div>
    </div>
  );
}