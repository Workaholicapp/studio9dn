import house_olivia_hero from 'figma:asset/408ac5365463dcc857f9f6446a70a30ddbbbbb24.png';
import house_olivia_gal_1 from 'figma:asset/408ac5365463dcc857f9f6446a70a30ddbbbbb24.png';
import house_olivia_gal_2 from 'figma:asset/d52bf2646275a7b57f0b6b959d026e6d783b0da9.png';

import atlantic_crest_hero from 'figma:asset/ca1266aa9cd85a903d27f9ce42c2ef579e4429b9.png';
import atlantic_crest_gal_1 from 'figma:asset/ca1266aa9cd85a903d27f9ce42c2ef579e4429b9.png';
import atlantic_crest_gal_2 from 'figma:asset/98e27d0bf03ead47bfd86e9b8fd509b635730c89.png';

import restaurant_hero from 'figma:asset/927d1855ac830c93bc86459865e573ffca1168ed.png';
import restaurant_gal_1 from 'figma:asset/927d1855ac830c93bc86459865e573ffca1168ed.png';
import restaurant_gal_2 from 'figma:asset/b1d9572cac920f0dd8640c671cc8dc9f5acf1976.png';

import performing_arts_hero from 'figma:asset/faff59420755602f7dd77048a85cc4dd1ce2ecfb.png';
import performing_arts_gal_1 from 'figma:asset/faff59420755602f7dd77048a85cc4dd1ce2ecfb.png';
import performing_arts_gal_2 from 'figma:asset/7724e0fa67ba375deb04ca85aa02907c05287f3d.png';

import hotel_hero from 'figma:asset/d626d0c9b2e8a18a87abe97003452c2bcfc371d0.png';
import hotel_gal_1 from 'figma:asset/d626d0c9b2e8a18a87abe97003452c2bcfc371d0.png';
import hotel_gal_2 from 'figma:asset/8ad1838c9ffefc45d40f97fd3b0974b36e187dd0.png';
import hotel_gal_3 from 'figma:asset/61a9d2c22ebabd94024e9fbd5b44c0cff801c608.png';
import hotel_gal_4 from 'figma:asset/f54272c3dbf38058f4d1c609dcad5202eebe3626.png';

import agodi_hotels_hero from 'figma:asset/91be65325d487852591193da5e251003913ef795.png';
import agodi_hotels_gal_1 from 'figma:asset/91be65325d487852591193da5e251003913ef795.png';
import agodi_hotels_gal_2 from 'figma:asset/5fc9070c71f20996d1876ccdc4a7ec6f28e25af3.png';

export interface ProjectDetail {
  id: string;
  title: string;
  typology: string;
  role?: string;
  location: string;
  status: string;
  year: string;
  area: string;
  description: string;
  approach: string;
  sustainability: string;
  heroImage: string;
  images: string[];
}

export const projectDetails: Record<string, ProjectDetail> = {
  'house-olivia': {
    id: 'house-olivia',
    title: 'House Olivia',
    typology: 'Residential',
    role: 'Architecture, Interior Design & Construction Supervision',
    location: 'Lagos, Nigeria',
    status: 'Completed',
    year: '2024—2025',
    area: '650 sqm',
    description:
      'A residential project commissioned by a family of three in Sangotedo, Lagos. The design investigates passive cooling strategies, abundant natural lighting, cross-ventilation, and the seamless integration of outdoor living spaces as core architectural principles. Named after the client\'s daughter, House Olivia embodies a commitment to creating healthy, comfortable living environments through thoughtful environmental design.',
    approach:
      'The plan is organized vertically to maximize privacy while maintaining visual and spatial connections to the garden. Ground-floor living spaces open fully to the landscape through sliding glass panels, while upper-floor bedrooms are set back to create shaded terraces. A central stairwell functions as a thermal chimney, drawing hot air upward and out of the building. Carefully positioned openings choreograph natural light throughout the day, creating dynamic patterns of light and shadow that articulate the passage of time. Material selections prioritize tactile warmth—exposed concrete, timber screens, and terrazzo flooring—creating a restrained palette that foregrounds spatial experience.',
    sustainability:
      'The building\'s north-south orientation minimizes east-west solar exposure, reducing heat gain during peak hours. Operable louvers and strategically placed windows enable stack ventilation, eliminating the need for mechanical cooling in transitional months. Green roofs on lower volumes provide additional insulation and manage stormwater runoff. Low-VOC finishes and natural ventilation ensure healthy indoor air quality, while energy-efficient appliances and LED lighting reduce operational energy demand by 45%. Rainwater harvesting systems supply irrigation and non-potable water uses, reducing municipal water consumption by 60%.',
    heroImage: house_olivia_hero,
    images: [
      house_olivia_gal_1,
      house_olivia_gal_2,
    ],
  },
  'private-villa': {
    id: 'private-villa',
    title: 'Atlantic Crest',
    typology: 'Mixed-use',
    location: 'V.I, Lagos',
    status: 'Completed 2023',
    year: '2023',
    area: '3200 sqm',
    description:
      'A mixed-use development in Victoria Island that integrates residential units with ground-floor commercial spaces, addressing Lagos\' need for dense, walkable urban environments. The project explores how contemporary mixed-use typologies can contribute to neighborhood vitality while maintaining residential privacy and comfort. Atlantic Crest establishes a new benchmark for urban density in Lagos, demonstrating that vertical integration can create vibrant, economically diverse communities.',
    approach:
      'The building\'s massing is articulated through setbacks and terrace gardens that break down its scale and create outdoor amenity spaces for residents. Ground-floor retail is activated through generous glazing and integrated canopies that provide weather protection and visual connection to the street. Residential units above are organized around a central courtyard that brings natural light and ventilation deep into the plan while providing shared green space. Unit layouts prioritize cross-ventilation and natural light, with private balconies that extend living spaces outward. Material choices—warm-toned cladding, timber screens, and planters integrated into the façade—soften the building\'s presence and connect it to its tropical context.',
    sustainability:
      'The project employs passive design strategies adapted to Lagos\' climate—deep overhangs, ventilated façades, and strategic window placement minimize cooling loads. Green roofs and integrated landscaping reduce urban heat island effects while managing stormwater on-site. A building-wide energy management system coordinates HVAC and lighting to optimize efficiency. Solar panels on upper terraces offset common area energy consumption. Water-efficient fixtures and rainwater collection reduce potable water demand by 40%. Material selections prioritize durability and low maintenance, ensuring long-term environmental and economic performance.',
    heroImage: atlantic_crest_hero,
    images: [
      atlantic_crest_gal_1,
      atlantic_crest_gal_2,
    ],
  },
  'coastal-residence': {
    id: 'coastal-residence',
    title: '5 Star Restaurant',
    typology: 'Commercial',
    location: 'Lekki, Lagos',
    status: 'Completed 2025',
    year: '2025',
    area: '850 sqm',
    description:
      'A fine dining destination in Lekki that redefines culinary experience through spatial design and material refinement. The project explores how architecture can heighten sensory engagement—light, sound, texture, and view—to create an immersive dining environment. The design balances theatrical presentation with intimate scale, creating distinct zones that accommodate different dining experiences while maintaining visual and spatial coherence.',
    approach:
      'The restaurant is organized as a sequence of interconnected spaces that modulate scale and atmosphere. An arrival courtyard transitions guests from the urban context into a curated landscape of water features and sculptural plantings. The main dining hall is conceived as a double-height volume with clerestory glazing that bathes the space in diffused natural light. Private dining rooms are carved out as discrete volumes within the larger envelope, creating acoustic separation while maintaining visual connection. The material palette is deliberately restrained—polished concrete floors, blackened steel frames, warm timber paneling—allowing the food, service, and social interaction to remain the focus. A show kitchen is integrated as both functional workspace and performance stage, bringing the craft of cooking into dialogue with the dining experience.',
    sustainability:
      'Natural ventilation and cross-breezes reduce reliance on mechanical cooling in transition seasons. High-performance glazing minimizes heat gain while maximizing natural light. Energy-efficient kitchen equipment and LED lighting reduce operational energy consumption by 50%. Water-efficient fixtures and low-flow faucets minimize water use. Locally sourced materials reduce embodied carbon while supporting regional craft. A green roof provides thermal insulation and manages stormwater. Waste management systems facilitate composting and recycling, diverting 75% of operational waste from landfills.',
    heroImage: restaurant_hero,
    images: [
      restaurant_gal_1,
      restaurant_gal_2,
    ],
  },
  'performing-arts-center': {
    id: 'performing-arts-center',
    title: 'Performing Arts Center',
    typology: 'Commercial',
    location: 'Ota, Nigeria',
    status: 'Completed 2024',
    year: '2024',
    area: '1800 sqm',
    description:
      'A performing arts center designed for Covenant University to serve the institution\'s cultural and educational programs. The design prioritizes acoustic excellence within the main theatre, with careful attention to form, materiality, and spatial geometry to optimize sound quality and auditory experience. Beyond technical performance, the project investigates how cultural buildings can serve as civic anchors—spaces that gather community, facilitate dialogue, and affirm the value of artistic practice.',
    approach:
      'The theatre\'s interior geometry is shaped by acoustic principles, with carefully calculated angles and surfaces to distribute sound evenly throughout the auditorium. Strategic placement of absorptive and reflective materials creates optimal reverberation times for both spoken word and musical performance. Supporting spaces—rehearsal rooms, backstage areas, and public foyers—are organized to maintain acoustic separation while facilitating fluid movement for performers and audiences. The building\'s exterior massing is articulated to signal its civic function, with a monumental entrance canopy that frames the arrival sequence. Materials are selected for both performance and durability—exposed concrete provides thermal mass, timber panels modulate acoustics, and bronze-toned metal cladding creates a warm, inviting presence.',
    sustainability:
      'The design integrates passive environmental strategies appropriate to Ota\'s tropical climate. Deep roof overhangs and carefully positioned openings provide natural ventilation to public circulation areas, reducing cooling loads. Locally sourced materials minimize embodied carbon, while the building\'s compact massing and strategic orientation reduce solar heat gain to the main auditorium. High-performance building envelope and efficient HVAC systems ensure comfort during performances while minimizing energy consumption. Daylight harvesting in foyer and support spaces reduces artificial lighting loads. Rainwater collection and water-efficient fixtures reduce potable water demand by 45%.',
    heroImage: performing_arts_hero,
    images: [
      performing_arts_gal_1,
      performing_arts_gal_2,
    ],
  },
  'cultural-center': {
    id: 'cultural-center',
    title: '4 Star Hotel',
    typology: 'Commercial',
    role: 'Architecture design, Concept development & 3D modeling',
    location: 'Lagos, Nigeria',
    status: 'Completed 2025',
    year: '2025',
    area: '5200 sqm',
    description:
      'A four-star hotel in Lagos that redefines contemporary luxury through material integrity, spatial restraint, and environmental responsibility. This project was a partnership with Allied Designers, who visualized and handled the interior designs while Studio9DN was responsible for the architectural design, concept development, and 3D modeling. The design challenges conventional hospitality aesthetics—eschewing ornamentation in favor of refined detailing, curated materiality, and considered spatial sequence. The project establishes a new standard for Nigerian hospitality design, proving that luxury is achieved through quality of execution rather than excess of decoration.',
    approach:
      'The hotel is organized as a series of carefully choreographed spatial transitions—from arrival courtyard through double-height reception spaces to intimate lounge environments and private guest corridors. Each guest room is detailed with layered material textures: honed stone surfaces, blackened metal fixtures, and warm timber paneling that mediate between architecture and furnishing. Floor-to-ceiling glazing frames curated views while vertical louvers provide calibrated privacy and solar control. Public spaces employ a consistent material vocabulary—textured plaster walls, terrazzo flooring, woven acoustic panels—that reads as quiet confidence rather than ostentation. A rooftop restaurant and bar open to panoramic city views, grounded by a lush garden that provides both visual relief and microclimate modulation.',
    sustainability:
      'Environmental performance is integrated through passive design strategies and high-specification building systems. Deep roof overhangs and strategically positioned vertical fins reduce solar heat gain by 40% while maintaining natural light penetration. A centralized energy management system coordinates HVAC, lighting, and water heating to optimize efficiency across all operational zones. Low-flow fixtures and rainwater harvesting reduce potable water consumption by 35%. Material selection prioritizes durability and low embodied carbon—locally quarried stone, responsibly sourced timber, and low-VOC finishes ensure longevity and healthy interior environments. Rooftop photovoltaic arrays offset daytime energy demand, while green roofs provide thermal insulation and manage stormwater runoff. Heat recovery systems capture waste heat from kitchen operations to preheat domestic hot water.',
    heroImage: hotel_hero,
    images: [
      hotel_gal_1,
      hotel_gal_2,
      hotel_gal_3,
      hotel_gal_4,
    ],
  },
  'education-campus': {
    id: 'education-campus',
    title: 'Agodi Hotels',
    typology: 'Commercial',
    role: 'Interior Design, Visualizations & Facade Design',
    location: 'Ibadan, Nigeria',
    status: 'In Progress',
    year: '2024',
    area: '4500 sqm',
    description:
      'A hospitality project in Oyo State that investigates how contemporary luxury can be articulated through material integrity and spatial restraint rather than ornamentation. The design privileges quality over quantity—each surface, junction, and threshold is considered as an opportunity to demonstrate precision and craft. Located in Ibadan\'s evolving urban context, Agodi Hotel seeks to establish a new benchmark for regional hospitality design—architecture that responds thoughtfully to climate, context, and cultural expectations of refinement. Studio9DN was contacted by Conclave Limited to run the interior design and visualizations for the project.',
    approach:
      'The design language prioritizes contemporary luxury through restrained material expression and deliberate spatial sequence. Public areas are conceived as a series of controlled transitions—from arrival courtyards through double-height reception spaces to intimate lounge environments. Each guest room is carefully detailed with layered material textures: honed stone surfaces, blackened metal fixtures, and warm timber paneling that mediate between architecture and furnishing. Floor-to-ceiling glazing frames curated views of the surrounding landscape while vertical louvers provide calibrated privacy and solar control. The materiality throughout emphasizes tactile quality over decoration—textured plaster walls, terrazzo flooring, and woven acoustic panels create a sensory richness that reads as quiet confidence. The building\'s massing is broken down through strategic setbacks and planted terraces that connect interior spaces to the landscape.',
    sustainability:
      'Environmental performance is integrated through passive design strategies and high-specification building systems. Deep roof overhangs and strategically positioned vertical fins reduce solar heat gain by 40% while maintaining natural light penetration. A centralized energy management system coordinates HVAC, lighting, and water heating to optimize efficiency across all operational zones. Low-flow fixtures and rainwater harvesting reduce potable water consumption by 35%. Material selection prioritizes durability and low embodied carbon—locally quarried stone, responsibly sourced timber, and low-VOC finishes ensure longevity and healthy interior environments. Rooftop photovoltaic arrays offset daytime energy demand, while green roofs provide thermal insulation and manage stormwater runoff. Native landscaping reduces irrigation requirements and creates habitat corridors.',
    heroImage: agodi_hotels_hero,
    images: [
      agodi_hotels_gal_1,
      agodi_hotels_gal_2,
    ],
  },
};
