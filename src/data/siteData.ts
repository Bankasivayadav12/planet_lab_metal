export interface MissionCard {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
  link: string;
}

export interface FeatureBannerData {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  buttonText: string;
  image: string;
  link: string;
}

export interface StationModule {
  id: string;
  name: string;
  type: string;
  volume: string;
  power: string;
  purpose: string;
  description: string;
  features: string[];
}

export interface SuitHotspot {
  id: string;
  title: string;
  x: number; // percentage
  y: number; // percentage
  description: string;
}

export interface PressRelease {
  id: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  image?: string;
}

export const siteData = {
  hero: {
    title: "Pioneering Orbital Stations & Advanced Metals",
    subtitle: "World Leader in Commercial Space Stations & Zero-Gravity Titanium Refineries",
    tagline: "Designing next-generation space infrastructure, zero-gravity refineries, and lunar material synthesis.",
    bgImage: "/images/hero_space_station_hd.png",
    ctaPrimary: "Explore Orbital Station",
    ctaSecondary: "Request Metals Partnership"
  },
  
  missionCards: [
    {
      id: "orbital-metallurgy",
      title: "Zero-Gravity Titanium Refineries",
      description: "Manufacturing hyper-pure metallic alloys and crystalline titanium structures in microgravity, free from gravitational settling.",
      buttonText: "Discover Metallurgy Labs",
      image: "/images/orbital_metallurgy.png",
      link: "/solutions"
    },
    {
      id: "lunar-exploration",
      title: "Lunar Surface Mining & Extraction",
      description: "Operating autonomous plasma mining and ore extraction platforms on the Moon for continuous lunar surface colonization.",
      buttonText: "Explore Lunar Facility",
      image: "/images/lunar_metals_facility.png",
      link: "/solutions"
    },
    {
      id: "crystal-alloys",
      title: "Next-Gen Exotic Metal Alloys",
      description: "Synthesizing ultra-high tensile crystal alloys for aerospace, quantum computing optics, and deep space propulsion.",
      buttonText: "View Alloy Specs",
      image: "/images/advanced_crystal_alloy.png",
      link: "/solutions"
    }
  ] as MissionCard[],

  featureBanners: [
    {
      id: "foundations-future",
      title: "Commercial Orbital Station & Foundry",
      subtitle: "The World's First Commercial Space Station & Metal Processing Hub",
      description: "Planet Labs & Metals Station delivers microgravity research laboratories, cleanroom metal synthesis bays, and habitation modules.",
      buttonText: "Explore Station",
      image: "/images/hero_space_station_hd.png",
      link: "/station"
    },
    {
      id: "advancing-exploration",
      title: "Extreme-Thermal Lunar Mining Spacesuit",
      subtitle: "Next-Gen Exploration Architecture",
      description: "Engineered in partnership with space agencies, our spacesuit provides thermal protection from -200°C to +120°C in lunar crater environments.",
      buttonText: "Meet the PL-EVA Suit",
      image: "/images/axemu_spacesuit.png",
      link: "/suit"
    }
  ] as FeatureBannerData[],

  stats: [
    { label: "Missions Flown to ISS", value: "4+" },
    { label: "Hours in Microgravity", value: "1,200+" },
    { label: "Refined Alloy Output", value: "250+ KG" },
    { label: "Global Partner Nations", value: "18+" }
  ],

  stationModules: [
    {
      id: "hub-1",
      name: "Habitation & Metallurgy Core 1 (PL-H1)",
      type: "Primary Crew & Refinery Node",
      volume: "350 m³",
      power: "40 kW Solar Array",
      purpose: "Provides living quarters for up to 4 astronauts alongside high-throughput vacuum alloy furnaces.",
      description: "The primary structural foundation of Planet Labs & Metals Station, featuring expanded crew cabins, high-speed telemetry, and standardized payload interfaces.",
      features: ["Quarters for 4 crew members", "Dual-redundant Life Support Systems", "Plasma furnace power downlink", "Earth-facing observation window"]
    },
    {
      id: "lab-2",
      name: "Commercial Metal Synthesis Lab 2 (PL-L2)",
      type: "In-Space Metallurgy Lab",
      volume: "280 m³",
      power: "30 kW Solar Array",
      purpose: "Dedicated microgravity manufacturing for titanium crystals, optical fiber, and semiconductor substrates.",
      description: "Engineered specifically for commercial clients demanding contamination-free cleanroom environments and automated vacuum access.",
      features: ["Class-100 Cleanroom gloveboxes", "Automated sample retrieval airlock", "Cryogenic metal storage", "Vibration-isolated optical benches"]
    },
    {
      id: "power-tower",
      name: "Power Thermal & Logistics Core",
      type: "Station Infrastructure Core",
      volume: "190 m³",
      power: "120 kW Total Station Capacity",
      purpose: "Generates station-wide electrical power, thermal rejection, and orbital boost capability.",
      description: "Equipped with next-gen solar tracking arrays and heavy-capacity external payload mounting points.",
      features: ["Autonomous orbital altitude maintenance", "Advanced ammonia thermal radiators", "Robotic arm docking berth", "External orbital exposure platforms"]
    },
    {
      id: "observatory",
      name: "Orbital Observatory & Earth View Dome",
      type: "Observation & Communications Node",
      volume: "120 m³",
      power: "15 kW Dedicated System",
      purpose: "Provides 360-degree visual monitoring of Earth and deep space optical telemetry.",
      description: "Features the largest monolithic optical glass window ever launched to Earth orbit for remote sensing and panoramic viewing.",
      features: ["360° monolithic optical viewport", "Ultra-HD multispectral cameras", "Public outreach live broadcast suite", "Relaxation bay for astronaut crew"]
    }
  ] as StationModule[],

  suitHotspots: [
    {
      id: "helmet",
      title: "Custom Bubble Visor & HD Camera Array",
      x: 50,
      y: 18,
      description: "Gold-coated outer visor shielding lunar solar radiation, integrated heads-up display (HUD), and dual high-definition illumination cameras."
    },
    {
      id: "lss",
      title: "Portable Life Support System (PLSS)",
      x: 72,
      y: 35,
      description: "Compact back-mounted life support providing up to 8 hours of continuous lunar EVA operations, carbon dioxide scrubbing, and dual-loop thermal water cooling."
    },
    {
      id: "chest",
      title: "Hard Upper Torso (HUT) & Display Unit",
      x: 50,
      y: 42,
      description: "Rigid composite shell protecting vital organs while housing telemetry control interface and rapid-connect umbilicals for spacecraft docking."
    },
    {
      id: "joints",
      title: "High-Mobility Dynamic Bearings",
      x: 35,
      y: 62,
      description: "Custom sealed ball-bearing hip and knee joints enabling astronauts to kneel, crouch, and sample lunar regolith with minimal effort."
    },
    {
      id: "boots",
      title: "Cryogenic Lunar Thermal Boots",
      x: 56,
      y: 88,
      description: "Multi-layer insulated footwear rated for extreme temperatures ranging from -200°C in shadowed lunar craters to +120°C in direct sunlight."
    }
  ] as SuitHotspot[],

  solutionsList: [
    {
      id: "zero-g-metallurgy",
      title: "Zero-Gravity Titanium & Alloy Synthesis",
      category: "Microgravity Metallurgy",
      description: "Leverage zero-gravity to refine ultra-pure titanium-aluminide alloys, protein crystals, and advanced materials without gravitational sedimentation."
    },
    {
      id: "semiconductor",
      title: "Exotic Semiconductor & Superconductor Fabrication",
      category: "Advanced Materials",
      description: "Manufacture ultra-pure optical fibers and next-generation gallium nitride semiconductors under near-perfect vacuum conditions."
    },
    {
      id: "national-astronauts",
      title: "National Human Spaceflight & Research Programs",
      category: "Government Services",
      description: "Turnkey astronaut training, flight operations, and mission execution for sovereign nations looking to build space capabilities."
    },
    {
      id: "satellite-servicing",
      title: "Orbital Assembly & Technology Demonstration",
      category: "In-Space Operations",
      description: "Test propulsion systems, autonomous docking algorithms, and orbital robotics directly on Planet Labs & Metals external payload platforms."
    }
  ],

  latestNews: [
    {
      id: "news-1",
      date: "July 15, 2026",
      category: "EXECUTIVE UPDATE",
      title: "Planet Labs & Metals Builds Out Executive Team for Commercial Space Station Era Welcoming New CFO, CIO",
      summary: "Planet Labs & Metals expands executive leadership team to spearhead commercial space station operations and zero-gravity metallurgy.",
      image: "/images/planet_labs_hero.png"
    },
    {
      id: "news-2",
      date: "June 23, 2026",
      category: "INFRASTRUCTURE",
      title: "Planet Labs & Metals Expands Headquarters & Refinery Ecosystem to Enable Humanity's Future",
      summary: "Expanding advanced materials refining and space station payload manufacturing facilities.",
      image: "/images/orbital_metallurgy.png"
    },
    {
      id: "news-3",
      date: "June 2, 2026",
      category: "GLOBAL COLLABORATION",
      title: "Planet Labs & Metals Establishes Swiss Subsidiary to Anchor European Engagement, Space Collaboration",
      summary: "New European subsidiary will partner with leading research institutes for zero-gravity material synthesis.",
      image: "/images/lunar_metals_facility.png"
    },
    {
      id: "news-4",
      date: "May 14, 2026",
      category: "REGIONAL EXPANSION",
      title: "Planet Labs & Metals to Establish Japan Subsidiary to Serve Growing Asia-Pacific Demand",
      summary: "Expanding regional operations across Asia-Pacific for orbital station payloads and metal alloy procurement.",
      image: "/images/advanced_crystal_alloy.png"
    }
  ] as PressRelease[]
};
