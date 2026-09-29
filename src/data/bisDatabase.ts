import { ProductPreset, StandardCandidate, RequiredTest, AccreditedLaboratory, ChecklistItem } from '../types';

export const NATIONAL_LABORATORIES: AccreditedLaboratory[] = [
  {
    id: 'lab-bis-sahibabad',
    name: 'Central Laboratory, Bureau of Indian Standards (BIS CL)',
    location: 'Sahibabad, Ghaziabad',
    state: 'Uttar Pradesh (NCR)',
    type: 'BIS Central Lab',
    recognizedScope: ['IS 2347', 'IS 14543', 'IS 13428', 'IS 9873', 'IS 10322', 'IS 1786', 'IS 16046'],
    sampleTurnaroundDays: 14,
    contactEmail: 'cl@bis.gov.in',
    address: 'Plot No. 20/9, Site IV, Sahibabad Industrial Area, Ghaziabad - 201010',
  },
  {
    id: 'lab-nth-kolkata',
    name: 'National Test House (Eastern Region)',
    location: 'Alipore, Kolkata',
    state: 'West Bengal',
    type: 'National Test House (NTH)',
    recognizedScope: ['IS 1786', 'IS 2347', 'IS 10322', 'IS 14543'],
    sampleTurnaroundDays: 21,
    contactEmail: 'nth-kolkata@nic.in',
    address: 'Block CP, Sector V, Salt Lake / Alipore, Kolkata - 700091',
  },
  {
    id: 'lab-cpri-bangalore',
    name: 'Central Power Research Institute (CPRI)',
    location: 'Sadashivanagar, Bengaluru',
    state: 'Karnataka',
    type: 'NABL Accredited',
    recognizedScope: ['IS 14286', 'IS/IEC 61730', 'IS 16444', 'IS 10322', 'IS 16046'],
    sampleTurnaroundDays: 18,
    contactEmail: 'cpri-test@cpri.in',
    address: 'Prof. Sir C.V. Raman Road, Sadashivanagar, Bengaluru - 560080',
  },
  {
    id: 'lab-niwe-chennai',
    name: 'National Institute of Wind Energy / Solar Testing Cell (NIWE)',
    location: 'Velachery, Chennai',
    state: 'Tamil Nadu',
    type: 'NABL Accredited',
    recognizedScope: ['IS 14286', 'IS/IEC 61730'],
    sampleTurnaroundDays: 20,
    contactEmail: 'info.niwe@gov.in',
    address: 'Velachery - Tambaram Main Road, Pallikaranai, Chennai - 600100',
  },
  {
    id: 'lab-ertl-north',
    name: 'Electronics Regional Test Laboratory (North - ERTL)',
    location: 'Okhla Industrial Area, New Delhi',
    state: 'Delhi NCR',
    type: 'Regional Testing Centre (RTC)',
    recognizedScope: ['IS 16046', 'IS 16444', 'IS 10322'],
    sampleTurnaroundDays: 15,
    contactEmail: 'ertlnorth@stqc.nic.in',
    address: 'S-Block, Okhla Industrial Area Phase-II, New Delhi - 110020',
  },
  {
    id: 'lab-shiva-bangalore',
    name: 'Shiva Analyticals & Safety Testing Laboratory',
    location: 'Hosakote, Bengaluru',
    state: 'Karnataka',
    type: 'NABL Accredited',
    recognizedScope: ['IS 9873', 'IS 14543', 'IS 2347'],
    sampleTurnaroundDays: 10,
    contactEmail: 'info@shivaanalyticals.com',
    address: 'Plot No. 248/249, KIADB Industrial Area, Hosakote, Bengaluru - 562114',
  },
  {
    id: 'lab-tuv-mumbai',
    name: 'TÜV Rheinland India Pvt. Ltd. (BIS Recognized Division)',
    location: 'Andheri East, Mumbai',
    state: 'Maharashtra',
    type: 'NABL Accredited',
    recognizedScope: ['IS 16046', 'IS 10322', 'IS 9873', 'IS 14286'],
    sampleTurnaroundDays: 12,
    contactEmail: 'india@de.tuv.com',
    address: 'MIDC Industrial Area, Andheri East, Mumbai - 400093',
  }
];

export const DEFAULT_CHECKLIST: ChecklistItem[] = [
  {
    id: 'step-1',
    stepNumber: '01',
    title: 'Confirm Applicable Standard & Boundary Scope',
    description: 'Verify product classification, material grades, intended operating voltage/pressure, and exact applicability exclusions under the relevant Indian Standard.',
    estimatedTime: '3–5 Days',
    requiredDocuments: ['Product Technical Datasheet', 'Bill of Materials (BOM)', 'CAD / Engineering Drawing'],
    completed: true,
  },
  {
    id: 'step-2',
    stepNumber: '02',
    title: 'Verify Regulatory Requirement & QCO Enforcement Order',
    description: 'Check whether the product is governed under a mandatory Quality Control Order (QCO) published in the Gazette of India under Section 16 of BIS Act, 2016.',
    estimatedTime: '2 Days',
    requiredDocuments: ['Gazette QCO Reference Check', 'HS Code Verification'],
    completed: true,
  },
  {
    id: 'step-3',
    stepNumber: '03',
    title: 'Establish In-House Quality Control & Testing Apparatus',
    description: 'Procure and calibrate factory test equipment required as per the BIS Scheme of Testing and Inspection (STI), maintaining test registers and calibration records.',
    estimatedTime: '15–30 Days',
    requiredDocuments: ['STI Compliance Matrix', 'Test Equipment Calibration Certificates', 'Competent Quality Personnel CVs'],
    completed: false,
  },
  {
    id: 'step-4',
    stepNumber: '04',
    title: 'Complete Type Testing at Recognized / NABL Laboratory',
    description: 'Submit representative sample units sealed as per BIS sampling protocols to an authorized BIS Central Lab or recognized NABL testing facility.',
    estimatedTime: '14–25 Days',
    requiredDocuments: ['Sample Test Request Form', 'Sealing Protocols', 'Official Test Report Formats'],
    completed: false,
  },
  {
    id: 'step-5',
    stepNumber: '05',
    title: 'Prepare Dossier & Submit Manakonline Portal Application',
    description: 'File Form V (Scheme I) or Form I (Scheme II CRS) via the Manakonline portal with required factory layout, manufacturing flow chart, and statutory fees.',
    estimatedTime: '5–7 Days',
    requiredDocuments: ['Form V Application', 'Factory Registration / MSME / ROC', 'Proof of Manufacturing Address', 'Test Reports'],
    completed: false,
  },
  {
    id: 'step-6',
    stepNumber: '06',
    title: 'Factory Inspection & Grant of ISI Mark / CRS Registration',
    description: 'Host the BIS Inspecting Officer for an on-site factory audit (manufacturing verification, in-house test witnessing, counter-sample drawn for independent testing).',
    estimatedTime: '20–40 Days',
    requiredDocuments: ['Factory Inspection Report', 'Bank Guarantee / Advance Minimum Marking Fee', 'Endorsement Letter'],
    completed: false,
  },
];

export const PRODUCT_PRESETS: ProductPreset[] = [
  {
    id: 'preset-pressure-cooker',
    label: 'Pressure Cooker',
    sublabel: 'Kitchen & Pressurized Vessels',
    description: 'I manufacture stainless steel domestic pressure cookers (3L & 5L capacity) with safety release valves and gasket release systems for kitchen use.',
    defaultProfile: {
      productName: 'Domestic Pressure Cooker',
      material: 'Stainless Steel (AISI 304 / Grade 04Cr18Ni10)',
      application: 'Domestic Kitchen Cooking',
      category: 'Pressurized Household Utensils',
      capacityOrRating: '3.0 L to 5.0 L Rated Capacity',
      regulatoryRegime: 'Scheme I (ISI Mark — Mandatory QCO)',
      riskLevel: 'Critical (Safety Mandatory)',
      rawInput: 'Stainless steel pressure cookers (3L & 5L) with safety relief valves for domestic kitchen use',
    },
    clarification: {
      id: 'clar-pc-1',
      question: 'What is the pressure cooking lid locking and release architecture?',
      context: 'BIS standard IS 2347 specifies distinct proof pressure, bursting pressure, and gasket release test parameters based on the lid mechanism.',
      whyWeAsk: 'The Domestic Pressure Cooker (Quality Control) Order strictly enforces separate safety margins for inner lid vs outer lid clasp designs under Clause 8.2.',
      options: [
        {
          id: 'opt-inner-lid',
          label: 'Inner Lid Locking Mechanism',
          subtext: 'Lid fits inside the mouth rim; internal steam pressure seals the gasket against the lip.',
          attributeChanges: { capacityOrRating: 'Inner Lid Clasp (3L & 5L)' },
        },
        {
          id: 'opt-outer-lid',
          label: 'Outer Lid Lug & Clamp Mechanism',
          subtext: 'Lid rotates over external body lugs; features external gasket channel and secondary relief vent.',
          attributeChanges: { capacityOrRating: 'Outer Lug Clamping (3L & 5L)' },
        },
        {
          id: 'opt-electric-multi',
          label: 'Electric Multi-Cooker / Programmable',
          subtext: 'Integrated electric heating element with microprocessor pressure controls (IS/IEC 60335-2-15).',
          attributeChanges: { 
            category: 'Electric Kitchen Appliances',
            regulatoryRegime: 'Scheme I & CRS Dual Scope',
            capacityOrRating: 'Electric Automated (5L)' 
          },
          candidateBoostId: 'is-60335-2-15'
        }
      ]
    },
    primaryStandardId: 'is-2347',
    candidateStandards: [
      {
        id: 'is-2347',
        isNumber: 'IS 2347 : 2017',
        title: 'Domestic Pressure Cookers — Specification (Fourth Revision)',
        shortTitle: 'Domestic Pressure Cookers',
        matchSignal: 96,
        relevanceTag: 'PRIMARY MATCH',
        scope: 'Specifies requirements for domestic pressure cookers of capacities up to 22 litres, manufactured from wrought aluminum, aluminum alloy, or stainless steel.',
        revision: 'Fourth Revision (Amended 2021)',
        gazetteNotification: 'S.O. 451(E) / Domestic Pressure Cooker (QCO)',
        gazetteDate: 'Mandatory Enforcement Active since 2020',
        ministry: 'Ministry of Consumer Affairs, Food & Public Distribution',
        qcoStatus: 'MANDATORY',
        qcoEnforcementDate: 'Enforced (No non-ISI sales permitted)',
        scheme: 'Scheme I (ISI Mark)',
        whyMatches: [
          'Product classification corresponds exactly to domestic pressurized cooking vessels up to 22 litres',
          'Stainless steel Grade 04Cr18Ni10 is explicitly defined under Clause 4.1.2',
          'Operating pressure range matches domestic cooking thresholds (1.0 kgf/cm² gauge)'
        ],
        keySafetyInvariants: [
          'Hydrostatic test pressure at 2× normal operating pressure (200 kPa / 2 bar)',
          'Safety relief device operating pressure between 1.4× and 2.5× normal operating pressure',
          'Gasket release system must discharge excess pressure before reaching 3× operating pressure'
        ],
        evidenceClauses: [
          {
            clauseNumber: 'Clause 4.1.2',
            clauseTitle: 'Stainless Steel Body & Lid Material Requirements',
            exactText: 'Stainless steel used for body, lid and grid shall conform to Designation 04Cr18Ni10 of IS 6911 or AISI Grade 304, free from pitting, laminations, and surface fissures.',
            requirementType: 'Material Composition'
          },
          {
            clauseNumber: 'Clause 8.2',
            clauseTitle: 'Safety Relief Device Operating Pressure',
            exactText: 'The safety relief device shall operate at a pressure of not less than 137 kPa and not more than 245 kPa (1.4 to 2.5 kgf/cm²). It shall fail-safe without fragmentation.',
            requirementType: 'Safety Critical'
          },
          {
            clauseNumber: 'Clause 8.4',
            clauseTitle: 'Bursting Pressure Safety Limit',
            exactText: 'The pressure cooker shall withstand an internal hydrostatic pressure of not less than 400 kPa (4 kgf/cm²) without rupturing or projecting components.',
            requirementType: 'Safety Critical'
          },
          {
            clauseNumber: 'Clause 12.1',
            clauseTitle: 'Mandatory BIS Standard Mark (ISI)',
            exactText: 'Each cooker shall be indelibly stamped with the Standard Mark (ISI logo), manufacturer license number (CM/L), and nominal capacity in litres.',
            requirementType: 'Marking & Traceability'
          }
        ]
      },
      {
        id: 'is-6911',
        isNumber: 'IS 6911 : 2017',
        title: 'Stainless Steel Plate, Sheet and Strip — Specification',
        shortTitle: 'Stainless Steel Raw Material Feedstock',
        matchSignal: 78,
        relevanceTag: 'FEEDSTOCK STANDARD',
        scope: 'Covers requirements for hot-rolled and cold-rolled stainless steel plate, sheet, and strip used for fabrication.',
        revision: 'First Revision',
        gazetteNotification: 'Steel & Steel Products (Quality Control) Order',
        gazetteDate: 'Mandatory Active',
        ministry: 'Ministry of Steel',
        qcoStatus: 'MANDATORY',
        qcoEnforcementDate: 'Enforced for raw material suppliers',
        scheme: 'Scheme I (ISI Mark)',
        whyMatches: [
          'Governs the base stainless steel coil/sheet supplier certification for pressure cooker bodies',
          'Required as prerequisite traceability documentation during BIS factory audit'
        ],
        keySafetyInvariants: [
          'Chemical composition verification (Chromium 18–20%, Nickel 8–10.5%)',
          'Tensile strength and intergranular corrosion test compliance'
        ],
        evidenceClauses: [
          {
            clauseNumber: 'Clause 5.1',
            clauseTitle: 'Chemical Composition for Austenitic Grades',
            exactText: 'Grade 04Cr18Ni10 shall contain Carbon max 0.08%, Silicon max 1.00%, Manganese max 2.00%, Nickel 8.00–10.50%, Chromium 18.00–20.00%.',
            requirementType: 'Material Composition'
          }
        ]
      },
      {
        id: 'is-60335-2-15',
        isNumber: 'IS/IEC 60335-2-15 : 2012',
        title: 'Household and Similar Electrical Appliances — Safety: Particular Requirements for Appliances for Heating Liquids',
        shortTitle: 'Electric Pressure Cookers & Heating Appliances',
        matchSignal: 54,
        relevanceTag: 'CONDITIONAL ALTERNATIVE',
        scope: 'Applies to the electrical safety of electric pressure cookers, kettles, and heating appliances intended for household and similar use.',
        revision: 'Dual Adopted IEC Standard',
        gazetteNotification: 'Electrical Appliances (QCO)',
        gazetteDate: 'Mandatory Active',
        ministry: 'Department for Promotion of Industry and Internal Trade (DPIIT)',
        qcoStatus: 'MANDATORY',
        qcoEnforcementDate: 'Enforced for electric variants',
        scheme: 'Scheme I (ISI Mark)',
        whyMatches: [
          'Only applies if the cooker contains integrated electric heating elements',
          'Mechanical pressure vessel rules still cross-reference IS 2347'
        ],
        keySafetyInvariants: [
          'Dielectric voltage withstand at 1250V AC',
          'Thermal cut-out safety shutdown during boil-dry conditions'
        ],
        evidenceClauses: [
          {
            clauseNumber: 'Clause 22.101',
            clauseTitle: 'Pressure Protection Interlock',
            exactText: 'Appliances shall be constructed so that steam pressure cannot be generated unless the lid is properly secured in the locked position.',
            requirementType: 'Safety Critical'
          }
        ]
      }
    ],
    requiredTests: [
      {
        id: 'test-hydrostatic',
        testName: 'Hydrostatic Proof Pressure Test',
        standardClause: 'IS 2347 : Clause 8.1',
        requirement: 'Vessel filled with ambient water and pressurized to 200 kPa (2.0 bar).',
        threshold: 'Zero leakage, no permanent distortion or joint seam bulging.',
        testMethod: 'Calibrated hydraulic pressure bench with digital precision gauge (Class 0.5).',
        criticality: 'Mandatory Pass/Fail'
      },
      {
        id: 'test-burst',
        testName: 'Ultimate Bursting Pressure Test',
        standardClause: 'IS 2347 : Clause 8.4',
        requirement: 'Pressurized continuously until failure or minimum 400 kPa threshold.',
        threshold: 'Must withstand ≥ 400 kPa without projectile fragmentation.',
        testMethod: 'Reinforced explosive blast chamber with high-speed transducer.',
        criticality: 'Mandatory Pass/Fail'
      },
      {
        id: 'test-safety-valve',
        testName: 'Safety Valve Discharge & Operating Test',
        standardClause: 'IS 2347 : Clause 8.2 & 8.3',
        requirement: 'Vent tube blocked; steam generation increased to trigger secondary fuse.',
        threshold: 'Relief must blow cleanly between 137 kPa and 245 kPa.',
        testMethod: 'Steam test boiler with calibrated optical steam sensors.',
        criticality: 'Mandatory Pass/Fail'
      },
      {
        id: 'test-gasket-release',
        testName: 'Gasket Release System (GRS) Discharge Test',
        standardClause: 'IS 2347 : Clause 8.5',
        requirement: 'Primary vent and secondary relief both sealed mechanically.',
        threshold: 'Gasket must push out of lid recess safely between 200 kPa and 300 kPa.',
        testMethod: 'Water-steam hybrid pressurization with containment hood.',
        criticality: 'Mandatory Pass/Fail'
      },
      {
        id: 'test-handle-temp',
        testName: 'Handle Insulation & Thermal Shock Test',
        standardClause: 'IS 2347 : Clause 9.3',
        requirement: 'Continuous boil test at maximum rated heat input for 60 minutes.',
        threshold: 'Handle gripping surface temperature shall not exceed 65°C.',
        testMethod: 'Multi-channel thermocouple data logger with K-type probes.',
        criticality: 'Performance Benchmark'
      }
    ],
    accreditedLabs: [
      NATIONAL_LABORATORIES[0], // BIS Central Lab Sahibabad
      NATIONAL_LABORATORIES[1], // NTH Kolkata
      NATIONAL_LABORATORIES[5], // Shiva Analyticals Bangalore
    ],
    checklist: DEFAULT_CHECKLIST,
  },
  {
    id: 'preset-solar-pv',
    label: 'Solar PV Modules',
    sublabel: 'Renewable Energy & Photovoltaics',
    description: 'We assemble crystalline silicon terrestrial photovoltaic (PV) solar panels (540W bifacial) for utility-scale solar farms and grid-tied rooftop installations.',
    defaultProfile: {
      productName: 'Crystalline Silicon Terrestrial Photovoltaic Module',
      material: 'Mono-PERC Solar Cells, Low-Iron Tempered Glass, Anodized Al Frame',
      application: 'Utility-Scale Solar Farms & Grid-Tied Rooftop Generation',
      category: 'Solar Photovoltaic Energy Systems',
      capacityOrRating: '540W Bifacial (1500V DC System Voltage)',
      regulatoryRegime: 'Scheme II (CRS) & MNRE ALMM Listed',
      riskLevel: 'Critical (Safety Mandatory)',
      rawInput: 'Crystalline silicon terrestrial photovoltaic (PV) solar modules for utility-scale solar parks',
    },
    clarification: {
      id: 'clar-solar-1',
      question: 'What is the PV cell architecture and system maximum voltage?',
      context: 'MNRE Solar Photovoltaics, Systems, Devices and Components Goods (Requirements for Compulsory Registration) Order requires strict insulation standards.',
      whyWeAsk: 'Systems rated for 1500V DC have higher clearance/creepage thresholds and require extended PID (Potential Induced Degradation) testing.',
      options: [
        {
          id: 'opt-mono-1500v',
          label: 'Crystalline Silicon (1500V DC System)',
          subtext: 'High-voltage utility modules with double glass or transparent backsheet.',
          attributeChanges: { capacityOrRating: '1500V DC Utility-Grade Crystalline' },
        },
        {
          id: 'opt-thin-film',
          label: 'Thin-Film Photovoltaic (CdTe / CIGS)',
          subtext: 'Thin film terrestrial modules evaluated under IS 16077 / IEC 61646.',
          attributeChanges: { 
            category: 'Thin-Film Photovoltaic',
            capacityOrRating: 'Thin Film System' 
          },
          candidateBoostId: 'is-16077'
        }
      ]
    },
    primaryStandardId: 'is-14286',
    candidateStandards: [
      {
        id: 'is-14286',
        isNumber: 'IS 14286 : 2010 / IEC 61215 : 2005',
        title: 'Crystalline Silicon Terrestrial Photovoltaic (PV) Modules — Design Qualification and Type Approval',
        shortTitle: 'PV Design Qualification & Type Approval',
        matchSignal: 98,
        relevanceTag: 'PRIMARY MATCH',
        scope: 'Lays down requirements for design qualification and type approval of terrestrial crystalline silicon photovoltaic modules suitable for long-term outdoor climate exposure.',
        revision: 'Adopted IEC 61215 with Indian National Amendments',
        gazetteNotification: 'Solar Photovoltaics (Compulsory Registration) Order, MNRE',
        gazetteDate: 'Mandatory Active under CRO/CRS Scheme',
        ministry: 'Ministry of New and Renewable Energy (MNRE)',
        qcoStatus: 'MANDATORY',
        qcoEnforcementDate: 'Strictly Enforced (ALMM Listing requires valid BIS CRS)',
        scheme: 'Scheme II (CRS Registration)',
        whyMatches: [
          'Exact match for crystalline silicon terrestrial photovoltaic technology',
          'Prerequisite technical foundation for MNRE Approved List of Models and Manufacturers (ALMM)',
          'Covers outdoor durability, mechanical load (5400 Pa), and hail impact resistance'
        ],
        keySafetyInvariants: [
          'Insulation resistance > 40 MΩ·m² at 1000V / 1500V DC test',
          'Wet leakage current test with module submerged in water at 1000V DC',
          'Mechanical load test withstanding 2400 Pa wind load and 5400 Pa snow load'
        ],
        evidenceClauses: [
          {
            clauseNumber: 'Clause 10.15',
            clauseTitle: 'Wet Leakage Current Test',
            exactText: 'The module shall be submerged in a water bath with resistivity < 3500 Ω·cm. An insulation test voltage equal to maximum system voltage shall be applied for 2 min. Insulation resistance shall be not less than 40 MΩ·m².',
            requirementType: 'Safety Critical'
          },
          {
            clauseNumber: 'Clause 10.16',
            clauseTitle: 'Mechanical Load Test',
            exactText: 'A dynamic or static mechanical load of 2400 Pa shall be applied front and rear. For heavy snow regions, front load is increased to 5400 Pa without electrical discontinuity.',
            requirementType: 'Safety Critical'
          }
        ]
      },
      {
        id: 'is-iec-61730-1',
        isNumber: 'IS/IEC 61730 (Part 1 & 2) : 2004',
        title: 'Photovoltaic (PV) Module Safety Qualification — Part 1: Requirements for Construction, Part 2: Requirements for Testing',
        shortTitle: 'PV Module Safety Qualification',
        matchSignal: 94,
        relevanceTag: 'MANDATORY COMPANION',
        scope: 'Defines fundamental construction and testing requirements to prevent electrical shock, fire hazard, and personal injury.',
        revision: 'Dual Part Standard',
        gazetteNotification: 'MNRE Compulsory Registration Order',
        gazetteDate: 'Mandatory in conjunction with IS 14286',
        ministry: 'Ministry of New and Renewable Energy (MNRE)',
        qcoStatus: 'MANDATORY',
        qcoEnforcementDate: 'Enforced jointly',
        scheme: 'Scheme II (CRS Registration)',
        whyMatches: [
          'Mandatory companion standard tested simultaneously during BIS type testing',
          'Assesses Class A application safety (general access > 50V DC)'
        ],
        keySafetyInvariants: [
          'Dielectric impulse voltage test up to 8 kV',
          'Fire resistance spread of flame test (Class C / Class A roofing)'
        ],
        evidenceClauses: [
          {
            clauseNumber: 'Part 2 Clause 10.3',
            clauseTitle: 'Impulse Voltage Test',
            exactText: 'The module shall withstand a 1.2/50 µs impulse voltage waveform corresponding to overvoltage Category III without insulation breakdown or flashover.',
            requirementType: 'Safety Critical'
          }
        ]
      }
    ],
    requiredTests: [
      {
        id: 'test-wet-leakage',
        testName: 'Submerged Wet Leakage Current Test',
        standardClause: 'IS 14286 : Clause 10.15',
        requirement: 'Module submerged in water tank, 1500V DC applied between terminals and liquid.',
        threshold: 'Insulation resistance shall be ≥ 40 MΩ·m².',
        testMethod: 'Immersion bath with Megohmmeter and grounded electrode ring.',
        criticality: 'Mandatory Pass/Fail'
      },
      {
        id: 'test-thermal-cycling',
        testName: 'Thermal Cycling Test (200 Cycles)',
        standardClause: 'IS 14286 : Clause 10.11',
        requirement: 'Chamber temperature cycled between -40°C and +85°C with current injection.',
        threshold: 'Max power degradation < 5%; no visible delamination.',
        testMethod: 'Programmable walk-in environmental climate chamber.',
        criticality: 'Durability Cycle'
      },
      {
        id: 'test-damp-heat',
        testName: 'Damp Heat Test (1000 Hours)',
        standardClause: 'IS 14286 : Clause 10.13',
        requirement: 'Exposed to 85°C ± 2°C and 85% ± 5% relative humidity for 1000 consecutive hours.',
        threshold: 'Power drop < 5%; insulation resistance maintained.',
        testMethod: 'Accelerated aging humidity chamber with continuous logging.',
        criticality: 'Durability Cycle'
      },
      {
        id: 'test-mechanical-load',
        testName: 'Static Mechanical Load (5400 Pa)',
        standardClause: 'IS 14286 : Clause 10.16',
        requirement: 'Simulated snow and wind pressure applied across active module face for 3 cycles.',
        threshold: 'Zero glass fracture, cell micro-cracks monitored via Electroluminescence (EL).',
        testMethod: 'Pneumatic cylinder array or uniform sandbag pressure rig.',
        criticality: 'Mandatory Pass/Fail'
      }
    ],
    accreditedLabs: [
      NATIONAL_LABORATORIES[2], // CPRI Bangalore
      NATIONAL_LABORATORIES[3], // NIWE Chennai
      NATIONAL_LABORATORIES[6], // TUV Mumbai
    ],
    checklist: DEFAULT_CHECKLIST,
  },
  {
    id: 'preset-lithium-battery',
    label: 'Lithium-Ion Battery',
    sublabel: 'Electric Mobility & Portable Energy',
    description: 'We manufacture rechargeable lithium-ion battery packs (48V 30Ah NMC/LFP) with integrated smart Battery Management System (BMS) for electric two-wheelers and scooters.',
    defaultProfile: {
      productName: 'Traction Lithium-Ion Battery Pack',
      material: 'Lithium Iron Phosphate (LFP) / NMC Cells, IP67 Aluminum Enclosure',
      application: 'Electric Two-Wheeler (EV) Traction & Light Electric Vehicles',
      category: 'Secondary Cells & Batteries / EV Powertrain',
      capacityOrRating: '48V Nominal, 30Ah (1.44 kWh Capacity)',
      regulatoryRegime: 'Scheme I / AIS-156 & IS 16046 Dual Mandate',
      riskLevel: 'Critical (Safety Mandatory)',
      rawInput: 'Rechargeable Lithium-ion battery packs for two-wheeler electric vehicles',
    },
    clarification: {
      id: 'clar-battery-1',
      question: 'Is this battery pack intended for EV traction or portable electronics?',
      context: 'Ministry of Road Transport and MeitY enforce distinct regulatory regimes for portable vs electric vehicle batteries.',
      whyWeAsk: 'EV traction batteries require AIS-156 Amendment 3 thermal runaway propagation tests, whereas portable electronics are governed under MeitY CRO (IS 16046 Part 2).',
      options: [
        {
          id: 'opt-ev-traction',
          label: 'Electric Vehicle (EV) Powertrain Traction',
          subtext: 'Requires automotive AIS-156 / AIS-038 with thermal runaway propagation tests.',
          attributeChanges: { application: 'Electric Vehicle Traction (AIS-156 & IS 17855)' },
          candidateBoostId: 'is-17855'
        },
        {
          id: 'opt-portable-consumer',
          label: 'Portable Electronics / Power Tools / UPS',
          subtext: 'Governed strictly under MeitY Compulsory Registration Scheme (IS 16046 Part 2).',
          attributeChanges: { 
            application: 'Portable Power / Consumer Storage',
            regulatoryRegime: 'Scheme II (CRS - MeitY Order)' 
          },
          candidateBoostId: 'is-16046-2'
        }
      ]
    },
    primaryStandardId: 'is-17855',
    candidateStandards: [
      {
        id: 'is-17855',
        isNumber: 'IS 17855 : 2022 / ISO 12405-4 : 2018',
        title: 'Electrically Propelled Road Vehicles — Test Specification for Lithium-Ion Traction Battery Packs and Systems',
        shortTitle: 'EV Traction Battery Pack Safety',
        matchSignal: 97,
        relevanceTag: 'PRIMARY MATCH',
        scope: 'Prescribes safety and performance test procedures for lithium-ion battery packs used in electrically propelled road vehicles, harmonized with AIS-156.',
        revision: 'First Edition (2022)',
        gazetteNotification: 'MoRTH CMVR Gazette & DPIIT QCO',
        gazetteDate: 'Mandatory Enforced',
        ministry: 'Ministry of Heavy Industries / MoRTH',
        qcoStatus: 'MANDATORY',
        qcoEnforcementDate: 'Enforced with Phase 1 & 2 Thermal Runaway mandates',
        scheme: 'Scheme I (ISI Mark)',
        whyMatches: [
          'Governs automotive battery packs intended for electric two-wheelers (L-category)',
          'Requires BMS thermal runaway prevention and active cell fail-safe monitoring',
          'Enforces nail penetration / thermal trigger propagation safety'
        ],
        keySafetyInvariants: [
          'Thermal runaway propagation: single cell failure must not trigger neighboring cell explosion',
          'Overcharge and over-discharge safety cut-off under BMS failure simulation',
          'Water immersion test: IPX7 ingress protection with no electrical shock'
        ],
        evidenceClauses: [
          {
            clauseNumber: 'Clause 6.3.2',
            clauseTitle: 'Thermal Propagation Test',
            exactText: 'When thermal runaway is initiated in a single cell via heater or ceramic pin, there shall be no fire or explosion outside the battery enclosure for at least 5 minutes, allowing vehicle occupants safe egress.',
            requirementType: 'Safety Critical'
          },
          {
            clauseNumber: 'Clause 6.2.1',
            clauseTitle: 'External Short-Circuit Test',
            exactText: 'The battery system shall be connected across a circuit resistance of < 20 mΩ until BMS protection disconnects or temperature stabilizes. Zero fire, zero rupture.',
            requirementType: 'Safety Critical'
          }
        ]
      },
      {
        id: 'is-16046-2',
        isNumber: 'IS 16046 (Part 2) : 2018 / IEC 62133-2 : 2017',
        title: 'Secondary Cells and Batteries Containing Alkaline or Other Non-Acid Electrolytes — Safety Requirements for Portable Sealed Secondary Cells: Part 2 Lithium Systems',
        shortTitle: 'Portable Lithium Battery Safety',
        matchSignal: 82,
        relevanceTag: 'PORTABLE BENCHMARK',
        scope: 'Requirements for portable sealed secondary lithium cells and batteries for use in portable applications.',
        revision: 'Part 2 Edition',
        gazetteNotification: 'Electronics & IT Goods (Requirements for Compulsory Registration) Order, MeitY',
        gazetteDate: 'Mandatory Active',
        ministry: 'Ministry of Electronics and Information Technology (MeitY)',
        qcoStatus: 'MANDATORY',
        qcoEnforcementDate: 'Enforced under CRS',
        scheme: 'Scheme II (CRS Registration)',
        whyMatches: [
          'Mandatory for all individual cylindrical or pouch cells incorporated into the pack',
          'Each cell batch must possess valid BIS CRS R-number'
        ],
        keySafetyInvariants: [
          'Continuous low-rate charging withstand test',
          'Moulded case stress at high ambient temperature (70°C for 7 hours)'
        ],
        evidenceClauses: [
          {
            clauseNumber: 'Clause 7.3.2',
            clauseTitle: 'External Short-Circuit (Cell & Battery)',
            exactText: 'Each fully charged sample is short-circuited at 55°C ± 5°C. No fire, no explosion within 24 hours of observation.',
            requirementType: 'Safety Critical'
          }
        ]
      }
    ],
    requiredTests: [
      {
        id: 'test-thermal-runaway',
        testName: 'Thermal Propagation & Flame Containment',
        standardClause: 'IS 17855 / AIS-156 Clause 6.3.2',
        requirement: 'Overheating a target internal cell to 200°C until thermal runaway occurs.',
        threshold: 'Zero flames outside the enclosure; audio-visual warning buzzer triggered.',
        testMethod: 'Explosion-proof blast cell with gas mass spectrometry and IR thermal cameras.',
        criticality: 'Mandatory Pass/Fail'
      },
      {
        id: 'test-water-immersion',
        testName: 'Water Immersion IPX7 Ingress Test',
        standardClause: 'IS 17855 Clause 6.4.1',
        requirement: 'Fully charged battery submerged 1 meter deep in salt-water tank for 2 hours.',
        threshold: 'Zero short circuit, no venting or combustion during or post immersion.',
        testMethod: '1-meter immersion tank with real-time insulation resistance bridge.',
        criticality: 'Mandatory Pass/Fail'
      },
      {
        id: 'test-bms-overcharge',
        testName: 'BMS Redundant Overcharge Protection',
        standardClause: 'IS 17855 Clause 6.2.3',
        requirement: 'Battery charged with faulty charger at 2× rated current with primary switch bypassed.',
        threshold: 'Secondary hardware protection circuit must isolate pack safely.',
        testMethod: 'Regulated programmable DC power supply with isolated digital scope.',
        criticality: 'Mandatory Pass/Fail'
      }
    ],
    accreditedLabs: [
      NATIONAL_LABORATORIES[2], // CPRI Bangalore
      NATIONAL_LABORATORIES[4], // ERTL North New Delhi
      NATIONAL_LABORATORIES[6], // TUV Mumbai
    ],
    checklist: DEFAULT_CHECKLIST,
  },
  {
    id: 'preset-toys',
    label: 'Safety of Toys',
    sublabel: 'Consumer Goods & Child Safety',
    description: 'We produce injection-moulded non-electric educational plastic toys and building blocks for children aged 18 months to 6 years.',
    defaultProfile: {
      productName: 'Children Educational Plastic Toys',
      material: 'Virgin Polypropylene (BPA-free, non-toxic pigment)',
      application: 'Children Play & Learning (Age Group 18 months – 6 years)',
      category: 'Child Care & Safety Goods',
      capacityOrRating: 'Non-Electric / Mechanical & Chemical Safety',
      regulatoryRegime: 'Scheme I (ISI Mark — Mandatory QCO)',
      riskLevel: 'Critical (Safety Mandatory)',
      rawInput: 'Non-electric plastic safety toys for children under 3 years',
    },
    clarification: {
      id: 'clar-toys-1',
      question: 'Does the toy feature electrical circuits, batteries, or ride-on mechanics?',
      context: 'DPIIT Toys (Quality Control) Order strictly segregates non-electric mechanical toys (IS 9873 Part 1) from electric toys (IS 15644).',
      whyWeAsk: 'Electric toys require additional electromagnetic compatibility (EMC) and battery enclosure screw-torque verification under IS 15644.',
      options: [
        {
          id: 'opt-non-electric-plastic',
          label: 'Purely Non-Electric Mechanical / Plush',
          subtext: 'Governed under IS 9873 Parts 1, 2, 3 (Mechanical, Flammability, Heavy Metals).',
          attributeChanges: { category: 'Non-Electric Plastic Toys' }
        },
        {
          id: 'opt-electric-sound',
          label: 'Battery-Operated / Electric Sound & Motion',
          subtext: 'Governed under IS 15644 (Safety of Electric Toys) + IS 9873.',
          attributeChanges: { 
            category: 'Electric Battery-Operated Toys',
            regulatoryRegime: 'Scheme I Dual Mandate (IS 9873 + IS 15644)' 
          },
          candidateBoostId: 'is-15644'
        }
      ]
    },
    primaryStandardId: 'is-9873-1',
    candidateStandards: [
      {
        id: 'is-9873-1',
        isNumber: 'IS 9873 (Part 1) : 2019 / ISO 8124-1 : 2018',
        title: 'Safety of Toys — Part 1: Safety Aspects Related to Mechanical and Physical Properties',
        shortTitle: 'Toy Mechanical & Physical Safety',
        matchSignal: 98,
        relevanceTag: 'PRIMARY MATCH',
        scope: 'Applies to all toys intended for children up to 14 years. Details drop tests, small parts choking hazards, sharp edge gauges, and tension tests.',
        revision: 'Second Revision',
        gazetteNotification: 'Toys (Quality Control) Order, 2020',
        gazetteDate: 'Mandatory Active since January 1, 2021',
        ministry: 'Department for Promotion of Industry and Internal Trade (DPIIT)',
        qcoStatus: 'MANDATORY',
        qcoEnforcementDate: 'Active (Zero import or domestic sale without ISI)',
        scheme: 'Scheme I (ISI Mark)',
        whyMatches: [
          'Direct mandate under Toys QCO covering all toys sold in India',
          'Evaluates small parts ingestion hazards for children under 36 months',
          'Enforces drop, impact, compression, and torque stress tests'
        ],
        keySafetyInvariants: [
          'Small parts cylinder test: zero detachment fitting inside 31.7 mm truncated cylinder',
          'Accessible sharp edges: zero cuts on calibrated PTFE tape test blade',
          'Drop test: 5 drops from 1.38 m onto steel plate on concrete'
        ],
        evidenceClauses: [
          {
            clauseNumber: 'Clause 4.3',
            clauseTitle: 'Small Parts Ingestion Warning & Cylinder Test',
            exactText: 'For toys intended for children under 36 months, no part or detached component shall fit entirely inside the small parts test cylinder defined in Figure 8.',
            requirementType: 'Safety Critical'
          },
          {
            clauseNumber: 'Clause 4.5',
            clauseTitle: 'Sharp Edges and Burrs',
            exactText: 'Accessible edges of toys shall not present an unreasonable risk of injury. Sharp edges evaluated via rotating mandrel with PTFE tape.',
            requirementType: 'Safety Critical'
          }
        ]
      },
      {
        id: 'is-9873-3',
        isNumber: 'IS 9873 (Part 3) : 2020 / ISO 8124-3 : 2020',
        title: 'Safety of Toys — Part 3: Migration of Certain Elements',
        shortTitle: 'Heavy Metal & Toxic Elements Migration',
        matchSignal: 95,
        relevanceTag: 'MANDATORY COMPANION',
        scope: 'Sets maximum allowable limits for migration of antimony, arsenic, barium, cadmium, chromium, lead, mercury, and selenium from toy materials.',
        revision: 'Third Revision',
        gazetteNotification: 'Toys (Quality Control) Order, 2020',
        gazetteDate: 'Mandatory Active',
        ministry: 'DPIIT',
        qcoStatus: 'MANDATORY',
        qcoEnforcementDate: 'Enforced jointly with Part 1',
        scheme: 'Scheme I (ISI Mark)',
        whyMatches: [
          'Mandatory for all polymeric, coated, and pigmented toy surfaces',
          'Strict ICP-MS heavy metal migration limits to protect children from ingestion toxicity'
        ],
        keySafetyInvariants: [
          'Lead (Pb) migration limit: max 90 mg/kg (25 mg/kg for modeling clay)',
          'Cadmium (Cd) migration limit: max 75 mg/kg',
          'Mercury (Hg) migration limit: max 60 mg/kg'
        ],
        evidenceClauses: [
          {
            clauseNumber: 'Clause 4.1',
            clauseTitle: 'Maximum Acceptable Element Migration Limits',
            exactText: 'Migration of elements shall not exceed: Lead 90 mg/kg, Cadmium 75 mg/kg, Arsenic 25 mg/kg, Barium 1000 mg/kg measured by ICP-OES after 0.07M HCl extraction.',
            requirementType: 'Material Composition'
          }
        ]
      }
    ],
    requiredTests: [
      {
        id: 'test-small-parts',
        testName: 'Small Parts Choking Ingestion Gauge',
        standardClause: 'IS 9873 Part 1 Clause 4.3',
        requirement: 'Toy subjected to 850mm drop and 70N pull force; components examined in test cylinder.',
        threshold: 'No detached piece shall fit entirely inside the small parts cylinder.',
        testMethod: 'Calibrated truncated 31.7 mm small parts gauge.',
        criticality: 'Mandatory Pass/Fail'
      },
      {
        id: 'test-heavy-metals',
        testName: 'Heavy Metals ICP-MS Migration Assay',
        standardClause: 'IS 9873 Part 3 Clause 4.1',
        requirement: 'Polymer crushed and extracted in 0.07 mol/L hydrochloric acid for 2 hours.',
        threshold: 'Lead < 90 mg/kg, Cadmium < 75 mg/kg, Mercury < 60 mg/kg.',
        testMethod: 'Inductively Coupled Plasma Mass Spectrometry (ICP-MS).',
        criticality: 'Mandatory Pass/Fail'
      },
      {
        id: 'test-flammability',
        testName: 'Flammability & Rate of Spread of Flame',
        standardClause: 'IS 9873 Part 2 Clause 4.1',
        requirement: 'Toy surface exposed to small defined burner flame for 3 seconds.',
        threshold: 'Rate of flame spread shall not exceed 30 mm/s along major axis.',
        testMethod: 'Draught-free flammability chamber with micro-burner.',
        criticality: 'Mandatory Pass/Fail'
      }
    ],
    accreditedLabs: [
      NATIONAL_LABORATORIES[0], // BIS CL Sahibabad
      NATIONAL_LABORATORIES[5], // Shiva Analyticals Bangalore
      NATIONAL_LABORATORIES[6], // TUV Mumbai
    ],
    checklist: DEFAULT_CHECKLIST,
  },
  {
    id: 'preset-led-lighting',
    label: 'LED Luminaires',
    sublabel: 'Electronics & Energy Efficiency',
    description: 'We manufacture commercial LED streetlights (120W) and indoor recessed LED luminaires with integrated surge protection and electronic driver.',
    defaultProfile: {
      productName: 'Commercial Outdoor LED Streetlight Luminaire',
      material: 'Die-Cast Aluminum ADC12 Housing, Toughened Glass Lens, Constant Current Driver',
      application: 'Roadway & Municipal Street Lighting',
      category: 'Lighting Fixtures / Electrical Goods',
      capacityOrRating: '120 Watt (Operating 140V–270V AC, 10kV Surge)',
      regulatoryRegime: 'Scheme II (CRS) & Scheme I Dual Path',
      riskLevel: 'Critical (Safety Mandatory)',
      rawInput: 'Fixed general purpose LED luminaires and street lighting fixtures',
    },
    clarification: {
      id: 'clar-led-1',
      question: 'Is the luminaire designed for outdoor street lighting or indoor recessed use?',
      context: 'BIS distinguishes fixed outdoor roadway luminaires (IS 10322 Part 5 Sec 3) from indoor luminaires (Part 5 Sec 1) in ingress protection and surge immunity.',
      whyWeAsk: 'Outdoor municipal streetlights must withstand 10 kV impulse surges and provide minimum IP66 ingress protection to pass MeitY CRS evaluation.',
      options: [
        {
          id: 'opt-outdoor-street',
          label: 'Outdoor Roadway & Floodlight (IP66, 10kV Surge)',
          subtext: 'Governed under IS 10322 (Part 5 / Sec 3) with stringent weather seals.',
          attributeChanges: { capacityOrRating: 'Outdoor IP66 (120W, 10kV Surge)' }
        },
        {
          id: 'opt-indoor-recessed',
          label: 'Indoor Office / Recessed Troffer (IP20)',
          subtext: 'Governed under IS 10322 (Part 5 / Sec 1) for indoor ceiling grids.',
          attributeChanges: { 
            category: 'Indoor Recessed LED Fixtures',
            capacityOrRating: 'Indoor IP20 (40W)' 
          }
        }
      ]
    },
    primaryStandardId: 'is-10322-5-3',
    candidateStandards: [
      {
        id: 'is-10322-5-3',
        isNumber: 'IS 10322 (Part 5 / Sec 3) : 2012',
        title: 'Luminaires — Part 5: Particular Requirements, Section 3: Luminaires for Road and Street Lighting',
        shortTitle: 'Road and Street LED Luminaires',
        matchSignal: 97,
        relevanceTag: 'PRIMARY MATCH',
        scope: 'Applies to road, street, and outdoor public lighting luminaires for use with tungsten filament, tubular fluorescent, and LED light sources.',
        revision: 'First Revision (Adopted IEC 60598-2-3)',
        gazetteNotification: 'Electronics & IT Goods Compulsory Registration Order (CRO), MeitY',
        gazetteDate: 'Mandatory Active under Scheme II (CRS)',
        ministry: 'Ministry of Electronics and Information Technology (MeitY)',
        qcoStatus: 'MANDATORY',
        qcoEnforcementDate: 'Enforced (Mandatory CRS Registration with R-Number)',
        scheme: 'Scheme II (CRS Registration)',
        whyMatches: [
          'Direct standard for municipal streetlights and highway lighting poles',
          'Enforces IP65/IP66 rain spray test and wind force mechanical resistance',
          'Cross-references IS 15885 (Part 2 / Sec 13) for safety of AC electronic LED control gear'
        ],
        keySafetyInvariants: [
          'Ingress protection against solid dust and water spray (minimum IP65)',
          'Surge immunity test at 4 kV line-line and 10 kV line-earth',
          'Earthing continuity resistance < 0.1 Ω with 25A test current'
        ],
        evidenceClauses: [
          {
            clauseNumber: 'Clause 3.13',
            clauseTitle: 'Resistance to Dust, Solid Objects and Moisture',
            exactText: 'Roadway luminaires shall have a degree of protection against ingress of dust and moisture of at least IP65 according to IS/IEC 60529.',
            requirementType: 'Safety Critical'
          },
          {
            clauseNumber: 'Clause 3.14',
            clauseTitle: 'Insulation Resistance and Electric Strength',
            exactText: 'Electric strength test voltage of 2U + 1000 V AC shall be applied between live parts and the luminaire chassis for 1 min without breakdown.',
            requirementType: 'Safety Critical'
          }
        ]
      },
      {
        id: 'is-15885-2-13',
        isNumber: 'IS 15885 (Part 2 / Sec 13) : 2012',
        title: 'Lamp Control Gear — Part 2: Particular Requirements, Section 13: D.C. or A.C. Supplied Electronic Controlgear for LED Modules',
        shortTitle: 'LED Driver Safety Requirements',
        matchSignal: 92,
        relevanceTag: 'MANDATORY COMPONENT',
        scope: 'Covers electronic control gear for LED modules fed from AC supplies up to 1000V at 50/60 Hz.',
        revision: 'First Edition',
        gazetteNotification: 'MeitY CRO Schedule',
        gazetteDate: 'Mandatory Active',
        ministry: 'MeitY',
        qcoStatus: 'MANDATORY',
        qcoEnforcementDate: 'Enforced under CRS for standalone drivers',
        scheme: 'Scheme II (CRS Registration)',
        whyMatches: [
          'Governs the internal power supply/driver module powering the LEDs',
          'Must be independently certified or type-tested as critical component'
        ],
        keySafetyInvariants: [
          'High temperature insulation test (110°C tc rating)',
          'Abnormal fault condition test with driver short-circuit and open-circuit'
        ],
        evidenceClauses: [
          {
            clauseNumber: 'Clause 14',
            clauseTitle: 'Fault Condition Safety',
            exactText: 'No hazard shall arise when components are simulated in short or open condition. Temperature shall not exceed 180°C on windings.',
            requirementType: 'Safety Critical'
          }
        ]
      }
    ],
    requiredTests: [
      {
        id: 'test-ip66-spray',
        testName: 'IP66 Dust Chamber & High Pressure Water Jet',
        standardClause: 'IS 10322 Clause 3.13 / IS/IEC 60529',
        requirement: 'Enclosure exposed to talcum dust vacuum for 8h, followed by 100 kPa high pressure water jet.',
        threshold: 'Zero dust ingress into optical cavity; zero water ingress to live connections.',
        testMethod: 'IP6X dust chamber and 12.5mm calibrated nozzle water stream test rig.',
        criticality: 'Mandatory Pass/Fail'
      },
      {
        id: 'test-surge-protection',
        testName: 'Surge Immunity (10 kV Combination Wave)',
        standardClause: 'IS 16102 / IEC 61000-4-5',
        requirement: '1.2/50 µs surge impulses injected in both positive and negative polarities.',
        threshold: 'Luminaire continues operating without LED flicker or driver destruction.',
        testMethod: 'EMC combination wave surge generator with coupling decoupling network.',
        criticality: 'Mandatory Pass/Fail'
      },
      {
        id: 'test-dielectric',
        testName: 'High Voltage Dielectric Withstand (1500V AC)',
        standardClause: 'IS 10322 Clause 3.14',
        requirement: '1500V AC applied between primary power terminal and metallic chassis for 60 seconds.',
        threshold: 'Leakage current < 0.5 mA; no dielectric breakdown.',
        testMethod: 'Calibrated automatic hipot tester.',
        criticality: 'Mandatory Pass/Fail'
      }
    ],
    accreditedLabs: [
      NATIONAL_LABORATORIES[0], // BIS CL
      NATIONAL_LABORATORIES[4], // ERTL Delhi
      NATIONAL_LABORATORIES[6], // TUV Mumbai
    ],
    checklist: DEFAULT_CHECKLIST,
  }
];

export function findStandardByQuery(query: string): ProductPreset {
  const normalized = query.toLowerCase();
  
  if (normalized.includes('solar') || normalized.includes('photovoltaic') || normalized.includes('pv') || normalized.includes('panel')) {
    return PRODUCT_PRESETS[1];
  }
  if (normalized.includes('battery') || normalized.includes('lithium') || normalized.includes('cell') || normalized.includes('lfp') || normalized.includes('ev') || normalized.includes('scooter')) {
    return PRODUCT_PRESETS[2];
  }
  if (normalized.includes('toy') || normalized.includes('game') || normalized.includes('children') || normalized.includes('doll') || normalized.includes('plush')) {
    return PRODUCT_PRESETS[3];
  }
  if (normalized.includes('light') || normalized.includes('led') || normalized.includes('luminaire') || normalized.includes('lamp') || normalized.includes('bulb')) {
    return PRODUCT_PRESETS[4];
  }
  
  // Default to pressure cooker preset
  return PRODUCT_PRESETS[0];
}
