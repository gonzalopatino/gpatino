export interface ProjectLink {
  label: string
  url: string
  type: 'repo' | 'demo' | 'readme' | 'writeup'
}

export interface Project {
  slug: string
  title: string
  summary: string
  category: string
  problem: string
  solution: string
  role: string
  stack: string[]
  metrics: string[]
  links: ProjectLink[]
  thumbnail: string
  featured: boolean
  caseStudy: {
    overview: {
      problem: string
      users: string
      successCriteria: string[]
    }
    constraints: string[]
    architecture: {
      description: string
      components: { name: string; description: string }[]
    }
    data: {
      source: string
      labeling: string
      qualityChecks: string[]
      leakagePrevention: string
    }
    modelOrLogic: {
      baseline: string
      iterations: string[]
      whyChosen: string
    }
    evaluation: {
      offlineMetrics: string[]
      productionMonitoring: string[]
    }
    deployment: {
      packaging: string
      api: string
      scaling: string
      versioning: string
      rollback: string
    }
    safetyPrivacy: {
      piiHandling: string
      security: string[]
    }
    results: string[]
    nextSteps: string[]
  }
}

export const projects: Project[] = [
  {
    slug: 'esp32-freertos-thermostat',
    title: 'ESP32 FreeRTOS Smart Thermostat Ecosystem',
    summary: 'IoT thermostat system with real-time sensor fusion, PID control, and secure MQTT cloud connectivity.',
    category: 'IoT & Embedded Systems',
    problem: 'Traditional thermostats lack intelligent control and remote accessibility. Users need responsive climate control that adapts to conditions while providing secure remote monitoring and configuration.',
    solution: 'Built a complete IoT thermostat ecosystem: ESP32 device running FreeRTOS handles real-time sensor reading, PID temperature control, and HVAC actuation. Secure MQTT connects to cloud API for remote monitoring, configuration, and data logging.',
    role: 'Solo project. Designed architecture, implemented embedded firmware, cloud integration, and full system testing.',
    stack: ['C/C++', 'FreeRTOS', 'ESP-IDF', 'MQTT', 'WiFi', 'I2C/SPI', 'PID Control'],
    metrics: [
      'Sub-100ms control loop',
      '±0.5°C accuracy',
      'Secure TLS communication',
      'Watchdog recovery',
    ],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/gonzalopatino/IoT_thermoStat_ecosystem/', type: 'repo' },
      { label: 'Live Demo', url: 'https://gonzalopatino.github.io/IoT_thermoStat_ecosystem/', type: 'demo' },
    ],
    thumbnail: '/images/projects/thermostat-system.svg',
    featured: true,
    caseStudy: {
      overview: {
        problem: 'Home and commercial HVAC systems need precise, responsive temperature control with remote accessibility. Legacy thermostats use simple on/off control leading to temperature oscillation, energy waste, and no remote visibility.',
        users: 'Homeowners and building managers who need precise climate control, remote monitoring, and energy-efficient HVAC operation.',
        successCriteria: [
          'Maintain temperature within ±0.5°C of setpoint',
          'Sub-100ms sensor-to-actuation response time',
          'Secure remote access with encrypted communication',
          'Reliable 24/7 operation with watchdog recovery',
        ],
      },
      constraints: [
        'Real-time: Control loop must execute within strict timing deadlines',
        'Power: Must operate efficiently for potential battery-backup scenarios',
        'Reliability: System must auto-recover from faults without manual intervention',
        'Security: All external communication must be encrypted (TLS/SSL)',
      ],
      architecture: {
        description: 'Multi-task FreeRTOS architecture with clear separation between sensor acquisition, control logic, actuation, and communication.',
        components: [
          { name: 'Sensor Task', description: 'High-priority task reading temperature, humidity, and environmental sensors via I2C/SPI at fixed intervals' },
          { name: 'Control Task', description: 'PID controller computing HVAC commands based on setpoint error and derivative terms' },
          { name: 'Actuation Task', description: 'GPIO control of relays for heating, cooling, and fan with safety interlocks' },
          { name: 'MQTT Task', description: 'Secure MQTT client publishing telemetry and subscribing to configuration commands' },
          { name: 'Display Task', description: 'Local LCD/OLED interface showing current status and allowing manual overrides' },
          { name: 'Watchdog Manager', description: 'System health monitoring with automatic recovery from task failures' },
        ],
      },
      data: {
        source: 'Temperature, humidity, and pressure sensors (DHT22, BME280) sampled at configurable intervals (default 1Hz).',
        labeling: 'N/A (control system, not ML). Sensor readings validated against physical limits and smoothed with moving average.',
        qualityChecks: [
          'Range validation for physical sensor limits',
          'Noise filtering with configurable smoothing',
          'Sensor fault detection via outlier detection',
          'Checksum validation on sensor communication',
        ],
        leakagePrevention: 'N/A (real-time control). Focus on sensor calibration and environmental compensation.',
      },
      modelOrLogic: {
        baseline: 'Simple on/off (bang-bang) control with fixed hysteresis. Resulted in temperature oscillation of ±2°C.',
        iterations: [
          'Implemented proportional control: reduced oscillation but steady-state error remained',
          'Added integral term: eliminated steady-state error but introduced overshoot',
          'Added derivative term with filtering: smooth response with minimal overshoot',
          'Tuned gains using Ziegler-Nichols method, then manual refinement',
        ],
        whyChosen: 'PID control provides the right balance of responsiveness, accuracy, and simplicity for HVAC control. Well-understood, tunable, and proven in industrial applications.',
      },
      evaluation: {
        offlineMetrics: [
          'Setpoint accuracy: ±0.5°C',
          'Settling time: < 10 minutes',
          'Overshoot: < 1°C',
          'Control loop execution: < 50ms',
        ],
        productionMonitoring: [
          'Temperature deviation from setpoint',
          'HVAC duty cycle',
          'WiFi connection stability',
          'Task execution timing and watchdog triggers',
        ],
      },
      deployment: {
        packaging: 'Firmware built with ESP-IDF, flashed via USB or OTA updates through secure MQTT channel.',
        api: 'MQTT topics for telemetry publishing and command subscription. JSON payload format for interoperability.',
        scaling: 'Each device operates independently. Cloud backend designed for multi-device fleet management.',
        versioning: 'Semantic versioning for firmware. OTA updates with rollback capability.',
        rollback: 'Dual OTA partition scheme allows instant rollback to previous working firmware on boot failure.',
      },
      safetyPrivacy: {
        piiHandling: 'No personal data collected. Device IDs are anonymous. Location data optional and user-controlled.',
        security: [
          'TLS 1.2 encryption for all MQTT communication',
          'Certificate-based device authentication',
          'Secure boot with signed firmware images',
          'Hardware watchdog for fault recovery',
        ],
      },
      results: [
        'Achieved ±0.5°C temperature control accuracy',
        'Sub-100ms control loop response time',
        'Zero unrecoverable system failures in extended testing',
        'Successful remote monitoring and configuration via MQTT',
      ],
      nextSteps: [
        'Add predictive pre-heating/cooling based on schedule learning',
        'Implement occupancy detection for energy optimization',
        'Build mobile app for user-friendly remote control',
        'Add multi-zone support with coordinated control',
      ],
    },
  },
  {
    slug: 'rf-drone-ml-vr-ecosystem',
    title: 'RF Drone with ML and VR Control Ecosystem',
    summary: 'Autonomous drone platform with RF communication, machine learning for flight optimization, and VR interface for immersive control.',
    category: 'Embedded Systems & ML',
    problem: 'Traditional drone control requires specialized skills and offers limited situational awareness. Operators need intuitive interfaces and intelligent flight assistance for complex missions.',
    solution: 'Built an integrated drone ecosystem: FreeRTOS-based flight controller handles real-time stabilization and RF communication. ML models optimize flight parameters. VR interface provides immersive first-person control.',
    role: 'Solo project. Designed full-stack architecture from embedded flight controller to ML components and VR interface.',
    stack: ['C/C++', 'FreeRTOS', 'Python', 'PyTorch', 'OpenCV', 'Unity/VR', 'RF Communication', 'IMU Sensors'],
    metrics: [
      '< 20ms control latency',
      'Stable RF link at 500m+',
      'Real-time sensor fusion',
      'VR integration',
    ],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/gonzalopatino/RFDrone_FreeRTOS_Smart_EcoSystem_Machine_Learning_VR', type: 'repo' },
    ],
    thumbnail: '/images/projects/drone-ml-system.svg',
    featured: true,
    caseStudy: {
      overview: {
        problem: 'Drone operation requires significant training and offers limited situational awareness through traditional controllers. Complex missions need intelligent assistance and intuitive interfaces to reduce operator workload.',
        users: 'Drone operators needing intuitive control for inspection, mapping, and exploration missions where situational awareness is critical.',
        successCriteria: [
          'End-to-end control latency under 50ms for responsive flight',
          'ML-assisted stabilization and obstacle awareness',
          'Immersive VR view with natural gesture controls',
          'Reliable RF communication at extended range',
        ],
      },
      constraints: [
        'Latency: Total loop from sensor to actuator must stay under 20ms for stable flight',
        'Power: Flight time limited by battery; computation must be efficient',
        'Range: RF link must maintain reliability at 500m+ line-of-sight',
        'Weight: Onboard compute limited by payload capacity',
      ],
      architecture: {
        description: 'Distributed architecture with real-time flight controller, ground station for ML processing, and VR interface for operator control.',
        components: [
          { name: 'Flight Controller', description: 'FreeRTOS-based MCU handling IMU fusion, PID stabilization, and motor control at 500Hz' },
          { name: 'RF Transceiver', description: 'Long-range RF module for bidirectional telemetry and command transmission' },
          { name: 'Ground Station', description: 'Python application receiving telemetry, running ML inference, and bridging to VR' },
          { name: 'ML Pipeline', description: 'PyTorch models for flight optimization, anomaly detection, and optional vision processing' },
          { name: 'VR Interface', description: 'Unity-based headset application with FPV video, 3D telemetry overlay, and gesture control' },
          { name: 'Video Link', description: 'Low-latency video transmission for real-time first-person view in VR' },
        ],
      },
      data: {
        source: 'IMU sensors (accelerometer, gyroscope, magnetometer), barometer, GPS, and optional camera feed at high frequency.',
        labeling: 'Flight logs used for ML training. Stable flight segments labeled as positive examples, crashes/instabilities as negative.',
        qualityChecks: [
          'IMU calibration validation at startup',
          'GPS fix quality and satellite count thresholds',
          'Sensor fusion sanity checks (complementary filter)',
          'RF link quality monitoring with automatic failsafe',
        ],
        leakagePrevention: 'Time-based splits for training data. Flight sessions kept separate to prevent model memorizing specific flights.',
      },
      modelOrLogic: {
        baseline: 'Standard PID control with fixed gains. Works well in calm conditions but struggles in wind and aggressive maneuvers.',
        iterations: [
          'Collected flight data to train gain-scheduling model',
          'Implemented lightweight neural network for adaptive PID tuning',
          'Added anomaly detection to predict motor/sensor failures',
          'Integrated optional vision-based position hold using OpenCV',
        ],
        whyChosen: 'Hybrid approach: classical PID for guaranteed stability with ML for adaptive optimization. Neural networks small enough for edge inference while providing meaningful improvement.',
      },
      evaluation: {
        offlineMetrics: [
          'Control loop frequency: 500Hz sustained',
          'Position hold accuracy: < 1m in GPS mode',
          'ML inference time: < 5ms per frame',
          'Anomaly detection precision: 85%+',
        ],
        productionMonitoring: [
          'Attitude error magnitude',
          'Motor current draw patterns',
          'RF packet loss rate',
          'Battery voltage and consumption',
        ],
      },
      deployment: {
        packaging: 'Flight controller firmware flashed via ST-Link. Ground station as Python package. VR app as Unity build.',
        api: 'MAVLink-compatible protocol for telemetry. Custom extensions for ML predictions and VR commands.',
        scaling: 'Single drone focus. Architecture supports multi-drone with ground station coordination.',
        versioning: 'Git-based versioning for all components. Firmware, ground station, and VR app versioned independently.',
        rollback: 'Flight controller stores backup parameters. Ground station can push previous config on connection.',
      },
      safetyPrivacy: {
        piiHandling: 'No personal data collected. Flight logs stored locally. Optional cloud sync is user-initiated.',
        security: [
          'RF link uses frequency hopping and encryption',
          'Ground station authentication for command authority',
          'Geofencing with configurable no-fly zones',
          'Automatic return-to-home on signal loss',
        ],
      },
      results: [
        'Achieved stable flight with sub-20ms control loop latency',
        'ML-based gain scheduling improved wind rejection by 40%',
        'VR interface enabled intuitive first-person control',
        'Reliable RF communication demonstrated at 500m+ range',
      ],
      nextSteps: [
        'Add SLAM for GPS-denied indoor navigation',
        'Implement swarm coordination for multi-drone missions',
        'Train end-to-end vision model for autonomous obstacle avoidance',
        'Build gesture library for advanced VR control modes',
      ],
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
