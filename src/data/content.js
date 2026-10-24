import { Square } from "lucide-react";

/*
 * Role titles, org names, dates and locations follow the resume.
 * `summary` is the one-liner shown on the home page; `points` show in the popup.
 */
export const experience = [
  {
    role: 'Electrical Team Member',
    org: 'UBC Formula Electric',
    dates: 'Sep 2026 – Present',
    location: 'Vancouver, BC',
    summary: 'HV battery hardware for an FSAE Electric race car',
    points: [
      'Spearheading hardware design and system integration for high-voltage battery module daughterboards and thermistor sensing boards across the 600V tractive battery pack.',
      'Designing dual-channel, bidirectional digital isolation circuitry isolating DS18B20 E-Meter temperature telemetry from battery ground domains to adhere to FSAE safety regulations.',
      'Transitioning cell balancing from internal ADBMS switching to discrete external MOSFETs to boost thermal dissipation and passive balancing efficiency while improving repairability.',
      'Collaborating closely with the BMS firmware team to design architecture for bidirectional 1-Wire MCU communication and redesigning analog thermistor voltage sensing paths by eliminating Op-amp buffering circuits.',
    ],
  },
  {
    role: 'Electronics Engineering Intern',
    org: 'Fulcrum Air',
    dates: 'May 2026 – Aug 2026',
    location: 'Calgary, AB',
    summary: 'LV electronics for drones and robots',
    points: [
      'Owned the complete design lifecycle of a 4-channel motor controller PCB to drive 12V actuators at 3A.',
      'Designed system architecture around Teensy 4.1 supporting 150 W continuous power draw, multichannel motor control, CAN communication, analog current sensing, Hall-effect positioning, and operation on 240kV power lines.',
      'Performed high-density routing for an 8-layer PCB within a strict 80 mm x 54 mm package, implementing orthogonal routing, dedicated power and ground planes, ground stitching, and 2.1 MHz switching node shielding.',
      'Engineered a power-loss detection circuit and falling-edge ISR using a voltage divider and bulk capacitor, guaranteeing non-volatile EEPROM backup of actuator positions within 5 ms of power disconnection.',
      'Built a test bench and developed C++ firmware to validate PCB function, verifying MCU pinouts, voltage regulation, inrush current stabilization, CAN signal integrity, and bidirectional actuation under dynamic loads.',
    ],
  },
  {
    role: 'Electrical Team Member',
    org: 'UBC Rover',
    dates: 'Sep 2025 – Aug 2026',
    summary: 'Hardware for an autonomous Mars rover',
    points: [
      'Collaborated with chassis and software subteams to design a test rover for autonomous navigation training.',
      'Tested an off-road powertrain prototype around the L298N full-bridge motor driver and Nucleo F446RE MCU.',
      'Developed C firmware using STM32 HAL for UART communication, command parsing, and Hall effect feedback.',
      'Performed stress testing to validate thermal regulation and electronic reliability in environments over 35°C.',
    ],
  },
  {
    role: 'Electrical Engineering Research Assistant',
    org: 'University of Calgary',
    dates: 'Jul 2023 – Aug 2023',
    summary: 'Amplifier-based oscillator simulation and research',
    points: [
      'Modeled and simulated circuits in LTspice to support research on novel Op-Amp-based oscillator topologies.',
      'Validated circuit performance, achieving 95% correlation between simulation and lab measurements.',
      'Utilized oscilloscopes, signal generators, and DMMs to debug test circuits and verify frequency responses.',
    ],
  },
];

export const tools = [
  { src: '/altium-logo.png', title: 'Altium' },
  { icon: 'git', title: 'Git' },
  { src: '/LT.png', title: 'LTspice' },
  { src: '/MATLAB.png', title: 'MATLAB' },
];

export const languages = [
  { src: '/C.png', title: 'C/C++' },
  { src: '/javalogo.png', title: 'Java', size: 44 },
  { src: '/systemverilog.png', title: 'SystemVerilog', size: 64 },
  { src: '/riscv_logo.png', title: 'RISC-V Assembly', size: 48 },
];

/*
 * Home-page photo gallery. The first 4 show in the hero; clicking any opens a
 * full-screen viewer that steps through ALL of them. To add a photo: drop it in
 * public/ (compressed, ~1600px wide, .webp or .jpg) and add a line here.
 * Optional `pos` sets the thumbnail crop focus, e.g. '35% 60%' (x y).
 */
export const gallery = [
  { src: '/PCB_Bringup.jpg', alt: 'Soldering a PCB at the lab bench', caption: 'PCB bring-up', pos: '35% 60%' },
  { src: '/Robot_Testing.jpg', alt: 'Testing electronics on a robot with a multimeter', caption: 'Robot testing', pos: '60% 50%' },
  { src: '/motor_controller_top.jpg', alt: 'Custom 4-channel motor controller PCB', caption: 'Motor controller PCB' },
  { src: '/motor_controller_testing1.jpg', alt: 'Motor controller on the test bench', caption: 'Hardware testing' },
  { src: '/motor_controller_testing2.jpg', alt: 'Motor controller test setup', caption: 'Bench setup' },
  { src: '/HUD-driver-view.jpg', alt: 'Car HUD speedometer on the dashboard', caption: 'Car HUD speedometer' },
  { src: '/mini-rover-prototype.png', alt: 'Mini rover powertrain prototype', caption: 'Rover powertrain prototype' },
];

/*
 * Project fields: `decisions` (optional) is the main story on a project page:
 *   { title, chose, why, tradeoff? }. `highlights` stay as the supporting technical detail.
 *
 * Gallery item: { src, alt, type: 'photo' | 'light' | 'dark', wide?: boolean }
 *  photo = cropped cover image, light/dark = diagram on a light/dark backing
 */
export const projects = [
  {
    id: 'battery-pack-boards',
    title: 'Battery Module & Thermistor Boards',
    heading: 'Battery Module & Thermistor Boards',
    status: 'In progress',
    desc: 'Daughterboards and thermistor sensing boards for the high-voltage tractive battery pack of an FSAE electric race car.',
    tech: ['Altium', 'LTspice', 'ADBMS',],
    decisions: [
      {
        title: "Two-wire sensing in parasitic power mode",
        chose: "Keep the DS18B20 temperature sensors in parasitic power mode, so each one needs only a data line and ground.",
        why: "FSAE rules require it. The datasheet describes a three-wire architecture that would be easier, but it is not an option here.",
      },
      {
        title: "Isolating the e-meter signal",
        chose: "Two-channel, bidirectional digital isolation where the e-meter signal enters and exits each board.",
        why: "The rules require the e-meter signal to be isolated from the modules. It has to be bidirectional so firmware can talk to whichever thermistor it picks.",
        tradeoff: "Isolating a one-wire bus splits it into forward and backward paths, which can latch the line low in a feedback loop. Each isolated sensor also needs its own weak pull-up, and the isolator has to survive the current pulses a parasitic DS18B20 draws.",
      },
      {
        title: "Driving the strong pull-up",
        chose: "Exploring a circuit that inverts the e-meter output with NOT gates and uses a capacitor to switch a MOSFET strong pull-up on cue.",
        why: "During a temperature conversion each sensor needs about 1.5 mA, and a weak pull-up of roughly 4.7 kOhm sags the line. The datasheet fix is a MOSFET strong pull-up, but the e-meter only gives a data line and a return, so nothing is available to drive the gate.",
        tradeoff: "The pull-up has to take over within 10 us of the e-meter releasing the line, so the capacitor timing is critical.",
      },
      {
        title: "Restoring ADBMS bidirectional communication",
        chose: "Remove an op-amp voltage buffer in the thermistor sensing path.",
        why: "A proper open-wire check needs the ADBMS chip to source and sink current. In the previous architecture, a buffer prevented that.",
      },
      {
        title: "Internal vs. external cell balancing",
        chose: "Move balancing from the ADBMS internal switches to discrete external MOSFETs.",
        why: "Better thermal dissipation, more efficient passive balancing, and easier repair.",
      },
    ],
    highlights: [
      ['Digital Isolation', 'Designing dual-channel, bidirectional digital isolation to isolate DS18B20 E-Meter telemetry from battery ground domains, per FSAE rules.'],
      ['Cell Balancing', 'Moving cell balancing from internal ADBMS switching to discrete external MOSFETs for better thermal dissipation, balancing efficiency and repairability.'],
      ['Firmware Collaboration', 'Working with the BMS firmware team on bidirectional 1-Wire MCU communication and removing the op-amp buffering from the analog thermistor sensing path.'],
    ],
    gallery: [],
  },
  {
    id: 'motor-controller',
    title: '4-Channel Motor Controller',
    heading: 'Custom 4-Channel Motor Controller',
    desc: 'Custom 4-channel motor controller PCB with 150W continuous power and CAN communication.',
    tech: ['Teensy 4.1', 'Altium', 'C++'],
    decisions: [
      {
        title: "Dev board shield vs. bare MCU",
        chose: "A Teensy 4.1 development board, with my PCB built as a shield around it.",
        why: "The deadline for a working MVP was tight. Using a dev board took away the work of routing the MCU and implementing CAN controller, ADC, etc.",
      },
      {
        title: "Choosing the MCU",
        chose: "Teensy 4.1.",
        why: "Picked mostly based on pinout. I needed enough analog pins for current sensing on every half-bridge IC, enough PWM-capable pins to drive ENA pins, and enough general digital I/O.",
      },
      {
        title: "Thermal management",
        chose: "Large ground and power planes, with stitching vias.",
        why: "Each actuator runs at 12 V 3 A, so the board handles roughly 150 W continuous and thermal regulation mattered.",
      },
    ],
    highlights: [
      ['System Architecture', 'Owned the complete design lifecycle of a 4-channel motor controller PCB to drive 12V actuators at 3A continuous current each, implementing 8 IFX007T half-bridge ICs.'],
      ['MCU & Telemetry', 'Architected system around the Teensy 4.1 600 MHz ARM Cortex-M7 to support multi-channel PWM generation, real-time Hall-effect decoding, and CAN telemetry speeds of up to 1Mbit/s.'],
      ['Power Safety', 'Integrated a bulk electrolytic capacitor alongside a voltage divider fed into an MCU falling-edge interrupt, securing a 5 ms hold-up time to commit actuator calibration data to EEPROM before brownout.'],
      ['Hardware Validation', 'Performed extensive hardware debugging to resolve buck converter faults, validating frequency responses using an oscilloscope to optimize passive component sizing and prevent underdamping. Also used oscilloscope to verify MAX33040E CAN bus transceiver signal integrity.'],
      ['Embedded Firmware', 'Developed C++ testing firmware to validate hardware performance, implementing automated homing sequences, directional state tracking, and interrupt-driven Hall sensor decoding for precise actuator positioning.'],
      ['PCB Layout', 'Applied DFM principles across the 8-layer stackup, sizing thermal reliefs and component clearances for manual SMT assembly and utilizing large trace widths and polygon pours for continuous 3A current draw.'],
    ],
    links: [
      ['Planning Document', 'https://drive.google.com/file/d/1jCLkcDWhCb2FywIH_KdRXVgo_ij3EGPf/view?usp=sharing'],
      ['Hardware Testing Video', 'https://drive.google.com/file/d/1u668nQbwF0ZwOWNwbAeJjb9NH0hfOCJF/view?usp=sharing'],
      ['Test Firmware', 'https://github.com/mofeomolade/Motor-Driver-Testing']
    ],
    gallery: [
      { src: '/motor_controller_top.jpg', alt: 'Motor Controller Top View', type: 'photo', cover: true },
      { src: '/motor_controller_bottom.jpg', alt: 'Motor Controller Bottom View', type: 'photo', cover: true },
      //{ src: '/updated-motor-driver-module-layout.png', alt: 'Motor Driver Layout', type: 'photo', wide: true },
      //{ src: '/motor-driver-module-schematic.png', alt: 'Motor Driver Module Schematic', type: 'photo', wide: true },
      //{ src: '/motor-driver-h-bridge-schematic.png', alt: 'Motor Driver H-Bridge Schematic', type: 'photo', cover: true },
      { src: '/motor_controller_testing1.jpg', alt: 'Motor Controller Testing Setup 1', type: 'photo', cover: true },
      { src: '/motor_controller_testing2.jpg', alt: 'Motor Controller Testing Setup 2', type: 'photo', cover: true },
    ],
  },
  {
    id: 'buck-converter',
    title: '24V-5V Buck Converter',
    heading: '24V-5V Asynchronous Buck Converter',
    status: 'In progress',
    desc: 'Asynchronous buck converter stepping a 6S LiPo input down to 5V at 85% efficiency.',
    tech: ['Altium', 'LTspice'],
    decisions: [
      {
        title: "Discrete components vs. a controller IC",
        chose: "Designed the power and control stages from scratch with discrete components.",
        why: "To build a deep understanding of buck topology fundamentals.",
      },
      {
        title: "Voltage mode vs. current mode control",
        chose: "Voltage mode.",
        why: "It simplifies the feedback loop.",
      },
    ],
    highlights: [
      ['Power Architecture', 'Designed an asynchronous buck converter stepping down an 18V–25.2V 6S LiPo input to 5V 100-500 mA at 85% efficiency, maintaining Continuous Conduction Mode across all operating loads.'],
      ['PWM Controller', 'Implemented an analog voltage-mode PWM controller at 100 kHz, driving an LM334 constant-current source into a TLC555 timer to generate a linear sawtooth ramp fed into a comparator.'],
      [ 'Compensator', 'Developed an active Type III compensation network using an Op-amp to place double zeros compensating the 1.56 kHz LC double pole, maximizing phase margin and stability under peak 25.2V input gain.'],
      ['Transient Response', 'Engineered a 10 ms RC soft-start network on the 2.5V reference to suppress turn-on overshoot and limit inrush current to 10 mA, driving the high-side gate via an IR2125 with a 220 nF bootstrap capacitor.'],
      ['PCB Layout', 'Routing a compact 4-layer PCB in Altium, isolating sensitive feedback and timing traces from the high di/dt switching node and integrating a dedicated ground plane to suppress switching noise.'],
    ],
    links: [
      ['Planning Document', 'https://drive.google.com/file/d/1GUGJ41Ly34sU3f9lQwCAKZL2yV-m_Rey/view?usp=sharing'],
    ],
    gallery: [
      { src: '/buck_control_phase.png', alt: 'Control Stage', type: 'dark', cover: true},
      { src: '/buck_power_stage.png', alt: 'Power Stage', type: 'dark', cover: true },
      { src: 'open_loop_dynamics_sim_buck.png', alt: 'Open Loop Dynamics', type: 'dark', wide: true}
    ],
  },
  {
    id: 'pid-robot',
    title: 'PID Self-Balancing Robot',
    heading: 'PID Self-Balancing Robot',
    desc: 'Self-balancing robot on an ESP32-C3 with a from-scratch IMU driver and PID control.',
    tech: ['ESP32', 'C++', 'I2C'],
    decisions: [
      {
        title: "ESP32 vs. Arduino Nano",
        chose: "ESP32.",
        why: "A faster clock and a 32-bit processor give a faster PID loop, which makes the robot more responsive.",
      },
    ],
    repo: 'https://github.com/mofeomolade/PID-Self-Balancing-Robot',
    highlights: [
      ['Driver Development', 'Developed a standalone C++ device driver for the MPU-6050 from scratch, writing directly to I2C registers to configure power states, set gyroscope and accelerometer ranges, and parse 14-byte data bursts.'],
      ['Sensor Fusion', 'Implemented 1 kHz non-blocking data acquisition and applied a complementary filter to fuse accelerometer and gyroscope readings, achieving low-latency angle estimation while reducing gyroscope angular drift by 85%.'],
      ['Control Systems', 'Programmed a custom closed-loop PID controller from first principles without third-party frameworks, incorporating anti-windup clamping, derivative filtering, and deadband compensation.'],
      ['Embedded Programming', 'Programmed deterministic PWM generation using ESP32-C3 hardware timers to drive an L298N dual-motor bridge, converting raw PID outputs into directional motor commands.'],
    ],
    gallery: [
      { src: '/PID_Robot_Schematic.png', alt: 'PID Robot Schematic', type: 'photo', full: true },
      { src: '/PID_Robot_Standing.png', alt: 'PID Robot Standing', type: 'dark', fill: true},
    ],
  },
  {
    id: 'robot-control-breakout',
    title: 'Robot Control Breakout Board',
    heading: 'Robot Control Breakout Board',
    desc: 'Breakout board connecting a Cube Orange flight controller, radio, cameras, and actuators on a remotely controlled robot.',
    tech: ['Altium', 'Cube Orange', 'CAN', 'RS-485'],
    highlights: [
      ['System Integration', 'Integrated with a Cube Orange flight controller and a radio communications module to support a remotely controlled robot, bringing camera, actuator, CAN, RS-485, and servo connections onto one board.'],
      ['Board Architecture', 'Redesigned the breakout board architecture to resolve harness congestion, strategically grouping peripheral headers around board edges to isolate high-speed camera signals from inductive actuator lines.'],
      ['Power Delivery', 'Integrated high-efficiency TPSM33625 and TPSM53604 buck power modules to replace bulky discrete regulators, coupling them with dedicated thermal copper pours and via stitching to ensure stable power delivery.'],
      ['Signal Integrity', 'Routed controlled-impedance differential pairs with termination networks for CAN and RS-485 buses, maintaining an unbroken ground reference plane on the bottom layer to eliminate cross-talk.'],
      ['Debug & Validation', 'Integrated a dedicated servo debug port and test points for firmware testing and hardware validation.'],
    ],
    gallery: [
      { src: '/CSR_Communications_3D_View.png', alt: 'Robot Control Breakout Board 3D View', type: 'dark', cover: true}
      //{ src: '/CSR_Communications_Layout.png', alt: 'Robot Control Breakout Board PCB Layout', type: 'dark', cover: true},
      //{ src: '/CSR_Communications_Schematic.png', alt: 'Robot Control Breakout Board Schematic', type: 'dark', wide: true },
    ],
  },
  {
    id: 'imu-tracker',
    title: 'IMU Pitch, Roll & Yaw Calculator',
    heading: 'IMU Orientation Calculator',
    desc: 'C++ firmware that fuses MPU-6050 IMU data to calculate orientation.',
    tech: ['ESP32', 'C++', 'I2C', 'Sensor Fusion'],
    repo: 'https://github.com/mofeomolade/IMU-Orientation-Tracker',
    highlights: [
      ['Firmware Development', 'Developed C++ firmware for ESP32 to parse MPU-6050 IMU accelerometer and gyroscope registers via I2C.'],
      ['Signal Processing', 'Applied a sensor fusion Euler complementary filter and deadband filter to account for angular integration drift.'],
      ['Mathematical Modeling', 'Applied trigonometry to accelerometer vectors and fused with gyroscope readings to calculate pitch and roll.'],
    ],
    links: [
      ['Demonstration Video', 'https://drive.google.com/file/d/1bCM1_0JE25q_tLVzCbwgkk_Z00zFMDHI/view?usp=sharing'],
    ],
    gallery: [],
  },
  {
    id: 'hud',
    title: 'Car HUD Speedometer',
    heading: 'Car HUD Speedometer',
    desc: 'Heads-up display speedometer built from an Arduino Nano, GPS module, and OLED.',
    tech: ['Arduino', 'GNSS', 'C++', 'SPI'],
    repo: 'https://github.com/mofeomolade/Arduino-Speedometer-HUD',
    highlights: [
      ['Embedded Programming', 'Developed a low-latency speedometer using an Arduino Nano, GY-NEO6MV2 module, and SPI OLED display.'],
      ['Data Processing', 'Wrote C++ firmware to parse NMEA data streams to compute velocity within 5% of the factory speedometer.'],
      ['Electronics Integration', "Safely integrated with the vehicle's 14V input using a USB-C to DIN converter to supply the Arduino Vin."],
    ],
    links: [
      ['Demonstration Video', 'https://drive.google.com/file/d/1bXU-WOvz6mYj_RZd-T5iZxPks0LKFZjZ/view?usp=sharing'],
    ],
    gallery: [
      { src: '/hud-breadboard.jpg', alt: 'Breadboard Prototype', type: 'photo', cover: true },
      { src: '/HUD-driver-view.jpg', alt: 'Driver View Dashboard', type: 'photo', cover:true },
      { src: '/HUD-Schematic.png', alt: 'HUD Schematic', type: 'photo', wide: true },
    ],
  },
  {
    id: 'drivetrain',
    title: '6-Wheel Rover Powertrain',
    heading: 'Rover Powertrain System',
    desc: 'Firmware and electronics for a 6-wheel rover drivetrain on a Nucleo-F446RE.',
    tech: ['STM32', 'C', 'UART'],
    decisions: [
      {
        title: "STM32 Nucleo vs. Arduino",
        chose: "An STM32 Nucleo board for prototyping.",
        why: "More GPIOs and a faster processor. I also wanted to get familiar with an industry-standard platform and the STM32 HAL library.",
      },
      {
        title: "Choosing the motor driver",
        chose: "L298N.",
        why: "Extensive documentation and community support around it.",
        tradeoff: "The BJT-based architecture is inefficient. The support was worth more to me than the efficiency.",
      },
    ],
    highlights: [
      ['Hardware Integration', 'Designed a powertrain prototype around the L298N full-bridge motor driver and Nucleo F446RE MCU.'],
      ['Embedded Control', 'Implemented C firmware using STM32 HAL for command parsing, motor feedback, and UART communication.'],
      ['Telemetry', 'Integrated IMU, GNSS, and LiDAR sensors to stream real-time positional and spatial data over UART and I2C.'],
    ],
    gallery: [
      { src: '/mini-rover-prototype.png', alt: 'Mini Rover Prototype', type: 'photo', fill: true },
      { src: '/mini-rover-block-diagram.png', alt: 'Mini Rover Block Diagram', type: 'photo', cover: true},
    ],
  },
];

export const getProject = (id) => projects.find((p) => p.id === id);
