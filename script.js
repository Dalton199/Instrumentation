const translations = {
  en: {
    brand: "D~MAN Instrumentation Academy",
    tagline: "Install, wire and calibrate field instruments",
    navModules: "Modules",
    navDrawings: "Drawings",
    navCalibration: "Calibration",
    navVendors: "Vendors",
    language: "Language",
    eyebrow: "Practical industrial training",
    heroTitle: "A hands-on web guide for instrumentation and VSD technicians.",
    heroBody: "Choose an instrument type, study the wiring drawing, follow the installation sequence, then complete calibration and commissioning checks.",
    startLearning: "Start learning",
    openChecklist: "Open checklist",
    filterType: "Instrument type",
    all: "All",
    level: "Level",
    flow: "Flow",
    pressure: "Pressure",
    temperature: "Temperature",
    vsd: "VSD",
    search: "Search",
    searchPlaceholder: "4-20 mA, radar, VSD, HART",
    moduleEyebrow: "Training modules",
    moduleTitle: "Select a device and learn the correct field method.",
    radarTitle: "Radar level transmitter",
    radarText: "For Vega VEGAPULS, Endress+Hauser Micropilot, Siemens Sitrans LR and similar radar instruments.",
    radarStep1: "Confirm nozzle position, range, process temperature and dielectric.",
    radarStep2: "Wire loop power, screen the cable and check polarity before energizing.",
    radarStep3: "Set empty and full distances, damping, output mode and echo suppression.",
    flowTitle: "Flow measurement",
    flowText: "Magnetic, Coriolis, vortex and DP flow systems from leading automation vendors.",
    flowStep1: "Verify pipe orientation, straight runs, grounding rings and process fill.",
    flowStep2: "Connect power, signal, pulse and communication terminals as per datasheet.",
    flowStep3: "Zero the meter, set engineering units, span and totalizer behavior.",
    pressureTitle: "Pressure and DP transmitter",
    pressureText: "Gauge, absolute and differential pressure transmitters for tanks, lines and filters.",
    pressureStep1: "Mount above or below tapping points according to gas, liquid or steam service.",
    pressureStep2: "Check impulse tubing, manifolds, vents, drains and isolation valves.",
    pressureStep3: "Apply five-point calibration and document as-found and as-left results.",
    tempTitle: "Temperature loop",
    tempText: "RTD, thermocouple and head-mount transmitter installation for process temperature.",
    tempStep1: "Inspect thermowell insertion length, lagging and vibration risk.",
    tempStep2: "Wire 2, 3 or 4 wire RTD correctly and keep thermocouple polarity intact.",
    tempStep3: "Simulate sensor input and trim transmitter output to the control system.",
    vsdTitle: "Variable speed drive",
    vsdText: "Install, wire and commission VSDs/VFDs for pumps, fans, conveyors and mixers.",
    vsdStep1: "Confirm supply, motor nameplate, enclosure rating, cooling space and earthing.",
    vsdStep2: "Separate power and control wiring, fit EMC glands and connect STO if required.",
    vsdStep3: "Enter motor data, acceleration, deceleration, control source and protection limits.",
    wiring: "Wiring",
    loopTitle: "Loop checking and handover",
    loopText: "Trace every circuit from field device to junction box, marshalling cabinet, PLC or DCS input.",
    loopStep1: "Megger cables only when devices are disconnected and site rules allow it.",
    loopStep2: "Inject 4, 12 and 20 mA and confirm correct tag, scaling and alarm direction.",
    loopStep3: "Record cable number, terminal number, range, units and final status.",
    drawingEyebrow: "Drawings and wiring",
    drawingTitle: "Typical field connections technicians see on site.",
    loopDrawing: "2-wire 4-20 mA loop",
    vsdDrawing: "VSD power and control",
    calEyebrow: "Calibration workflow",
    calTitle: "From bench setup to signed handover.",
    cal1Title: "Identify",
    cal1Text: "Check tag, service, hazardous area rating, range, units, process connection and datasheet revision.",
    cal2Title: "Isolate",
    cal2Text: "Follow permit, LOTO and bypass procedure. Protect the plant before disconnecting or simulating.",
    cal3Title: "Simulate",
    cal3Text: "Apply known pressure, temperature, level or electrical signal at 0, 25, 50, 75 and 100 percent.",
    cal4Title: "Trim",
    cal4Text: "Adjust sensor trim or output trim only when error exceeds tolerance and the procedure allows it.",
    cal5Title: "Document",
    cal5Text: "Record as-found, as-left, serial number, calibrator ID, technician, date and next due date.",
    checkEyebrow: "Field checklist",
    checkTitle: "Before energizing any instrument",
    check1: "Correct tag and device type installed",
    check2: "Cable gland, seal and IP rating complete",
    check3: "Polarity, terminal numbers and screen checked",
    check4: "Hazardous area barrier or isolator matches loop drawing",
    check5: "Range, units, damping and fail direction configured",
    check6: "PLC/DCS scaling and alarms verified with operations",
    vendorEyebrow: "Vendor coverage",
    vendorTitle: "Use the same fundamentals across major automation suppliers.",
    vendorBody: "The drawings are vendor-neutral, so technicians can apply the principles to devices from Vega, Endress+Hauser, Siemens, ABB, Emerson, Yokogawa, Schneider Electric, Rockwell Automation, Danfoss, WEG and similar manufacturers. Always confirm the exact terminals and parameters in the current product manual before work starts.",
    footer: "Training reference only. Follow site procedures, permits, isolation rules and the latest manufacturer manual."
  },
  es: {
    brand: "D~MAN Academia de Instrumentacion",
    tagline: "Instalar, cablear y calibrar instrumentos",
    navModules: "Modulos",
    navDrawings: "Planos",
    navCalibration: "Calibracion",
    navVendors: "Marcas",
    language: "Idioma",
    eyebrow: "Capacitacion industrial practica",
    heroTitle: "Una guia web practica para tecnicos de instrumentacion y VSD.",
    heroBody: "Elija un tipo de instrumento, estudie el plano de cableado, siga la secuencia de instalacion y complete las pruebas de calibracion y puesta en marcha.",
    startLearning: "Comenzar",
    openChecklist: "Lista de chequeo",
    filterType: "Tipo de instrumento",
    all: "Todos",
    level: "Nivel",
    flow: "Caudal",
    pressure: "Presion",
    temperature: "Temperatura",
    vsd: "VSD",
    search: "Buscar",
    searchPlaceholder: "4-20 mA, radar, VSD, HART",
    moduleEyebrow: "Modulos de capacitacion",
    moduleTitle: "Seleccione un equipo y aprenda el metodo correcto en campo.",
    radarTitle: "Transmisor de nivel radar",
    radarText: "Para Vega VEGAPULS, Endress+Hauser Micropilot, Siemens Sitrans LR y equipos radar similares.",
    radarStep1: "Confirme boquilla, rango, temperatura de proceso y constante dielectrica.",
    radarStep2: "Cablee la alimentacion del lazo, apantalle el cable y revise polaridad antes de energizar.",
    radarStep3: "Configure distancia vacia y llena, amortiguacion, salida y supresion de ecos.",
    flowTitle: "Medicion de caudal",
    flowText: "Sistemas magneticos, Coriolis, vortex y DP de proveedores lideres.",
    flowStep1: "Verifique orientacion de tuberia, tramos rectos, puesta a tierra y tuberia llena.",
    flowStep2: "Conecte potencia, senal, pulso y comunicacion segun la hoja tecnica.",
    flowStep3: "Cero del medidor, unidades, span y comportamiento del totalizador.",
    pressureTitle: "Transmisor de presion y DP",
    pressureText: "Transmisores manometricos, absolutos y diferenciales para tanques, lineas y filtros.",
    pressureStep1: "Monte arriba o abajo de las tomas segun servicio de gas, liquido o vapor.",
    pressureStep2: "Revise tubing, manifolds, venteos, drenajes y valvulas de aislamiento.",
    pressureStep3: "Aplique calibracion de cinco puntos y documente as-found y as-left.",
    tempTitle: "Lazo de temperatura",
    tempText: "Instalacion de RTD, termopar y transmisor de cabezal.",
    tempStep1: "Inspeccione longitud de termopozo, aislamiento y riesgo de vibracion.",
    tempStep2: "Cablee RTD de 2, 3 o 4 hilos y conserve polaridad del termopar.",
    tempStep3: "Simule la entrada del sensor y ajuste la salida hacia el control.",
    vsdTitle: "Variador de velocidad",
    vsdText: "Instale, cablee y ponga en marcha VSD/VFD para bombas, ventiladores, bandas y mezcladores.",
    vsdStep1: "Confirme alimentacion, placa del motor, gabinete, ventilacion y tierra.",
    vsdStep2: "Separe potencia y control, use prensaestopas EMC y conecte STO si aplica.",
    vsdStep3: "Ingrese datos del motor, rampas, fuente de control y limites de proteccion.",
    wiring: "Cableado",
    loopTitle: "Prueba de lazo y entrega",
    loopText: "Trace cada circuito desde el instrumento hasta caja, gabinete marshalling, PLC o DCS.",
    loopStep1: "Use megger solo con equipos desconectados y cuando el procedimiento lo permita.",
    loopStep2: "Inyecte 4, 12 y 20 mA y confirme tag, escala y direccion de alarma.",
    loopStep3: "Registre cable, bornera, rango, unidades y estado final.",
    drawingEyebrow: "Planos y cableado",
    drawingTitle: "Conexiones tipicas que el tecnico encuentra en sitio.",
    loopDrawing: "Lazo 4-20 mA de 2 hilos",
    vsdDrawing: "Potencia y control de VSD",
    calEyebrow: "Flujo de calibracion",
    calTitle: "Del banco de prueba a la entrega firmada.",
    cal1Title: "Identificar",
    cal1Text: "Revise tag, servicio, area peligrosa, rango, unidades, conexion y revision de datos.",
    cal2Title: "Aislar",
    cal2Text: "Siga permiso, LOTO y bypass. Proteja la planta antes de simular o desconectar.",
    cal3Title: "Simular",
    cal3Text: "Aplique senal conocida a 0, 25, 50, 75 y 100 por ciento.",
    cal4Title: "Ajustar",
    cal4Text: "Ajuste sensor o salida solo cuando el error supere tolerancia y el procedimiento lo permita.",
    cal5Title: "Documentar",
    cal5Text: "Registre as-found, as-left, serie, calibrador, tecnico, fecha y proxima fecha.",
    checkEyebrow: "Lista de campo",
    checkTitle: "Antes de energizar cualquier instrumento",
    check1: "Tag y tipo de equipo correctos",
    check2: "Prensaestopa, sello e IP completos",
    check3: "Polaridad, bornes y pantalla revisados",
    check4: "Barrera o aislador coincide con el plano",
    check5: "Rango, unidades, amortiguacion y falla configurados",
    check6: "Escala y alarmas verificadas con operaciones",
    vendorEyebrow: "Cobertura de marcas",
    vendorTitle: "Use los mismos fundamentos con proveedores lideres.",
    vendorBody: "Los planos son neutrales por marca para aplicarse a Vega, Endress+Hauser, Siemens, ABB, Emerson, Yokogawa, Schneider Electric, Rockwell Automation, Danfoss, WEG y fabricantes similares. Confirme siempre bornes y parametros en el manual vigente.",
    footer: "Referencia de capacitacion. Siga procedimientos, permisos, aislamiento y el manual vigente."
  },
  fr: {
    brand: "D~MAN Academie d'instrumentation",
    tagline: "Installer, cabler et etalonner les instruments de terrain",
    navModules: "Modules",
    navDrawings: "Schemas",
    navCalibration: "Etalonnage",
    navVendors: "Fournisseurs",
    language: "Langue",
    eyebrow: "Formation industrielle pratique",
    heroTitle: "Un guide web pratique pour les techniciens instrumentation et VSD.",
    heroBody: "Choisissez un instrument, etudiez le schema, suivez l'installation, puis faites les controles de calibration et mise en service.",
    startLearning: "Commencer",
    openChecklist: "Checklist",
    filterType: "Type d'instrument",
    all: "Tous",
    level: "Niveau",
    flow: "Debit",
    pressure: "Pression",
    temperature: "Temperature",
    vsd: "VSD",
    search: "Rechercher",
    searchPlaceholder: "4-20 mA, radar, VSD, HART",
    moduleEyebrow: "Modules de formation",
    moduleTitle: "Selectionnez un appareil et apprenez la bonne methode terrain.",
    radarTitle: "Transmetteur de niveau radar",
    radarText: "Pour Vega VEGAPULS, Endress+Hauser Micropilot, Siemens Sitrans LR et instruments radar similaires.",
    radarStep1: "Confirmez la position de la bride, la plage, la temperature process et la constante dielectrique.",
    radarStep2: "Cablez l'alimentation de boucle, raccordez l'ecran du cable et verifiez la polarite avant la mise sous tension.",
    radarStep3: "Reglez les distances vide et plein, l'amortissement, le mode de sortie et la suppression des faux echos.",
    flowTitle: "Mesure de debit",
    flowText: "Systemes magnetiques, Coriolis, vortex et debit DP des principaux fournisseurs d'automatisation.",
    flowStep1: "Verifiez l'orientation de la tuyauterie, les longueurs droites, les anneaux de terre et le remplissage.",
    flowStep2: "Raccordez alimentation, signal, impulsion et communication selon la fiche technique.",
    flowStep3: "Faites le zero du debitmetre, reglez les unites, l'echelle et le totalisateur.",
    pressureTitle: "Transmetteur de pression et DP",
    pressureText: "Transmetteurs de pression relative, absolue et differentielle pour cuves, lignes et filtres.",
    pressureStep1: "Montez au-dessus ou au-dessous des prises selon le service gaz, liquide ou vapeur.",
    pressureStep2: "Controlez les lignes d'impulsion, manifolds, events, purges et vannes d'isolement.",
    pressureStep3: "Effectuez un etalonnage en cinq points et documentez les valeurs avant et apres reglage.",
    tempTitle: "Boucle de temperature",
    tempText: "Installation RTD, thermocouple et transmetteur de tete pour temperature process.",
    tempStep1: "Inspectez la longueur du doigt de gant, l'isolation et le risque de vibration.",
    tempStep2: "Cablez correctement les RTD 2, 3 ou 4 fils et conservez la polarite du thermocouple.",
    tempStep3: "Simulez l'entree capteur et ajustez la sortie transmetteur vers le systeme de controle.",
    vsdTitle: "Variateur de vitesse",
    vsdText: "Installer, cabler et mettre en service les VSD/VFD pour pompes, ventilateurs, convoyeurs et melangeurs.",
    vsdStep1: "Confirmez l'alimentation, la plaque moteur, l'indice du coffret, la ventilation et la mise a la terre.",
    vsdStep2: "Separez les cables puissance et commande, montez les presse-etoupes CEM et raccordez STO si necessaire.",
    vsdStep3: "Entrez les donnees moteur, acceleration, deceleration, source de commande et limites de protection.",
    wiring: "Cablage",
    loopTitle: "Verification de boucle et remise",
    loopText: "Suivez chaque circuit depuis l'instrument jusqu'a la boite de jonction, l'armoire de marshalling, l'entree PLC ou DCS.",
    loopStep1: "Utilisez le megohmmetre uniquement lorsque les appareils sont deconnectes et que les regles du site l'autorisent.",
    loopStep2: "Injectez 4, 12 et 20 mA et confirmez le bon tag, l'echelle et le sens d'alarme.",
    loopStep3: "Notez le numero de cable, la borne, la plage, les unites et l'etat final.",
    drawingEyebrow: "Schemas et cablage",
    drawingTitle: "Connexions typiques vues sur site.",
    loopDrawing: "Boucle 4-20 mA a 2 fils",
    vsdDrawing: "Puissance et commande VSD",
    calEyebrow: "Procedure d'etalonnage",
    calTitle: "Du banc de test a la remise signee.",
    cal1Title: "Identifier",
    cal1Text: "Verifiez le tag, le service, le classement zone dangereuse, la plage, les unites, le raccord process et la revision de la fiche technique.",
    cal2Title: "Isoler",
    cal2Text: "Suivez le permis, LOTO et la procedure de bypass. Protegez l'installation avant de deconnecter ou simuler.",
    cal3Title: "Simuler",
    cal3Text: "Appliquez une pression, temperature, niveau ou signal electrique connu a 0, 25, 50, 75 et 100 pour cent.",
    cal4Title: "Ajuster",
    cal4Text: "Ajustez le capteur ou la sortie seulement si l'erreur depasse la tolerance et si la procedure l'autorise.",
    cal5Title: "Documenter",
    cal5Text: "Notez les resultats avant/apres, le numero de serie, l'identifiant du calibrateur, le technicien, la date et la prochaine echeance.",
    checkEyebrow: "Checklist terrain",
    checkTitle: "Avant d'alimenter un instrument",
    check1: "Tag et type d'appareil corrects installes",
    check2: "Presse-etoupe, joint et indice IP termines",
    check3: "Polarite, numeros de bornes et ecran verifies",
    check4: "Barriere ou isolateur zone dangereuse conforme au schema de boucle",
    check5: "Plage, unites, amortissement et direction de defaut configures",
    check6: "Echelle PLC/DCS et alarmes verifiees avec l'exploitation",
    vendorEyebrow: "Couverture fournisseurs",
    vendorTitle: "Les memes bases pour les grands fournisseurs d'automatisation.",
    vendorBody: "Les schemas sont neutres par fournisseur afin que les techniciens puissent appliquer les principes aux appareils Vega, Endress+Hauser, Siemens, ABB, Emerson, Yokogawa, Schneider Electric, Rockwell Automation, Danfoss, WEG et fabricants similaires. Confirmez toujours les bornes exactes et les parametres dans le manuel produit actuel avant de commencer.",
    footer: "Reference de formation uniquement. Suivez les procedures du site et le manuel fabricant le plus recent."
  },
  pt: {
    language: "Idioma",
    heroTitle: "Um guia web pratico para tecnicos de instrumentacao e VSD.",
    heroBody: "Escolha um instrumento, estude o desenho de ligacao, siga a instalacao e complete a calibracao e comissionamento.",
    startLearning: "Comecar",
    openChecklist: "Checklist",
    all: "Todos",
    level: "Nivel",
    flow: "Vazao",
    pressure: "Pressao",
    temperature: "Temperatura",
    moduleTitle: "Selecione um equipamento e aprenda o metodo correto em campo.",
    drawingTitle: "Ligacoes tipicas encontradas no campo.",
    calTitle: "Da bancada ate a entrega assinada.",
    checkTitle: "Antes de energizar qualquer instrumento",
    vendorTitle: "Use os mesmos fundamentos nos principais fornecedores.",
    footer: "Referencia de treinamento. Siga procedimentos, permissoes, isolamento e o manual mais recente."
  },
  zu: {
    language: "Ulimi",
    heroTitle: "Umhlahlandlela wewebhu osebenzayo wochwepheshe be-instrumentation ne-VSD.",
    heroBody: "Khetha uhlobo lwensimbi, funda umdwebo wokuxhuma, ulandele ukufaka, bese uqedela ukulinganisa nokuhlola.",
    startLearning: "Qala ukufunda",
    openChecklist: "Vula uhlu",
    all: "Konke",
    level: "Izinga",
    flow: "Ukugeleza",
    pressure: "Ingcindezi",
    temperature: "Izinga lokushisa",
    moduleTitle: "Khetha idivayisi ufunde indlela efanele yasensimini.",
    drawingTitle: "Ukuxhumeka okujwayelekile okubonwa esizeni.",
    calTitle: "Kusuka ebhentshini lokuhlola kuye ekunikezeleni.",
    checkTitle: "Ngaphambi kokunika amandla noma iyiphi insimbi",
    vendorTitle: "Sebenzisa izisekelo ezifanayo kubakhiqizi abakhulu.",
    footer: "Isithenjwa sokuqeqesha kuphela. Landela izinqubo zesayithi nemanuwali yakamuva."
  },
  af: {
    language: "Taal",
    heroTitle: "n Praktiese webgids vir instrumentasie- en VSD-tegnici.",
    heroBody: "Kies n instrumenttipe, bestudeer die bedradingstekening, volg die installasie en voltooi kalibrasie en ingebruikneming.",
    startLearning: "Begin leer",
    openChecklist: "Maak kontrolelys oop",
    all: "Alles",
    level: "Vlak",
    flow: "Vloei",
    pressure: "Druk",
    temperature: "Temperatuur",
    moduleTitle: "Kies n toestel en leer die korrekte veldmetode.",
    drawingTitle: "Tipiese veldverbindings wat tegnici op terrein sien.",
    calTitle: "Van banktoets tot getekende oorhandiging.",
    checkTitle: "Voor enige instrument aangeskakel word",
    vendorTitle: "Gebruik dieselfde beginsels oor groot outomatiseringsverskaffers.",
    footer: "Slegs opleidingsverwysing. Volg terreinprosedures, permitte, isolasie en die nuutste handleiding."
  }
};

const languageSelect = document.querySelector("#languageSelect");
const typeFilters = document.querySelector("#typeFilters");
const moduleSearch = document.querySelector("#moduleSearch");
const cards = Array.from(document.querySelectorAll(".module-card"));
let activeFilter = "all";

const staticFrenchText = {
  "PLC wiring": "Cablage PLC",
  "Videos": "Videos",
  "Analytical": "Analyse",
  "Control": "Commande",
  "Safety": "Securite",
  "Mechanical": "Mecanique",
  "Switches": "Contacts",
  "pH, ORP, conductivity and analyzers": "pH, ORP, conductivite et analyseurs",
  "Water, chemical, boiler, effluent and process analyzers with local transmitter and probe wiring.": "Analyseurs eau, chimie, chaudiere, effluents et process avec transmetteur local et cablage de sonde.",
  "Install probe where flow is representative, bubbles are avoided and the sensor stays wet.": "Installez la sonde la ou le debit est representatif, sans bulles et avec le capteur toujours humide.",
  "Use shielded low-noise cable, separate sensor cable from power, and keep junction boxes dry.": "Utilisez un cable blinde a faible bruit, separez le cable capteur de la puissance et gardez les boites de jonction seches.",
  "Calibrate with fresh certified buffers or standards, rinse between points and record temperature.": "Etalonnez avec des tampons ou standards certifies et frais, rincez entre les points et notez la temperature.",
  "Control valves and positioners": "Vannes de regulation et positionneurs",
  "Pneumatic, electro-pneumatic and smart positioners used on globe, ball, butterfly and damper actuators.": "Positionneurs pneumatiques, electro-pneumatiques et intelligents pour actionneurs a soupape, bille, papillon et registre.",
  "Check air supply quality, tubing leaks, actuator spring range and mechanical linkage travel.": "Verifiez la qualite d'air, les fuites de tubes, la plage du ressort et la course mecanique.",
  "Wire 4-20 mA command, feedback, limit switches and solenoids to the correct PLC or DCS channels.": "Cablez la commande 4-20 mA, le retour, les fins de course et les solenoides vers les bons canaux PLC ou DCS.",
  "Run auto-stroke, verify fail action, set split range if used and confirm valve travel at 0, 25, 50, 75 and 100 percent.": "Lancez l'auto-course, verifiez l'action de securite, reglez le split range si utilise et confirmez la course a 0, 25, 50, 75 et 100 pour cent.",
  "Gas, flame and fire detection": "Detection gaz, flamme et incendie",
  "LEL, toxic gas, oxygen deficiency, flame scanners, smoke and heat detectors for plant protection systems.": "Detecteurs LEL, gaz toxique, manque d'oxygene, flamme, fumee et chaleur pour systemes de protection.",
  "Mount at the correct height for the gas density and keep detectors clear of water, dust and dead-air zones.": "Montez a la bonne hauteur selon la densite du gaz et evitez eau, poussiere et zones sans circulation d'air.",
  "Wire power, signal and alarm contacts through approved barriers or isolators where required.": "Cablez l'alimentation, le signal et les contacts d'alarme via les barrieres ou isolateurs approuves si requis.",
  "Perform bump test and calibration with certified gas; verify PLC alarms, voting logic and trip action.": "Effectuez le bump test et l'etalonnage avec gaz certifie; verifiez alarmes PLC, logique de vote et declenchement.",
  "Vibration, speed and weighing": "Vibration, vitesse et pesage",
  "Accelerometers, proximity probes, tachometers, encoders, load cells, belt scales and weigh feeders.": "Accelerometres, sondes de proximite, tachymetres, codeurs, cellules de charge, balances a bande et doseurs peseurs.",
  "Mount sensors on clean, rigid surfaces and route cables away from VSD output and high-current conductors.": "Montez les capteurs sur surfaces propres et rigides et eloignez les cables des sorties VSD et conducteurs forts courants.",
  "Wire IEPE, proximity driver, pulse, encoder or mV/V load cell signals into the correct module type.": "Cablez IEPE, driver de proximite, impulsion, codeur ou cellule mV/V vers le type de module correct.",
  "Calibrate zero/span with known mass, speed reference, shaker table or vendor simulator as applicable.": "Etalonnez zero/span avec masse connue, reference de vitesse, table vibrante ou simulateur fournisseur selon le cas.",
  "Level, pressure and temperature switches": "Contacts de niveau, pression et temperature",
  "Point-level, pressure, flow and temperature switches used for alarms, permissives and protection.": "Contacts de niveau ponctuel, pression, debit et temperature utilises pour alarmes, permissifs et protections.",
  "Install where the process actually reaches the switch and where vibration or turbulence will not chatter the contact.": "Installez la ou le process atteint vraiment le contact et ou vibration ou turbulence ne provoque pas de battement.",
  "Wire dry contacts to digital input common correctly; use interposing relays for different voltages.": "Cablez correctement les contacts secs vers l'entree digitale commune; utilisez des relais d'interface pour tensions differentes.",
  "Prove switch point and reset point with a controlled process, hand pump, bath or simulator.": "Verifiez le point de commutation et de reset avec process controle, pompe manuelle, bain ou simulateur.",
  "Industry instrument index": "Index des instruments industriels",
  "Common instrument families found in modern plants.": "Familles d'instruments courantes dans les usines modernes.",
  "This list covers the main families a technician will meet in mining, water, food, oil and gas, chemical, power, paper, cement and manufacturing plants.": "Cette liste couvre les principales familles rencontrees en mines, eau, agroalimentaire, petrole et gaz, chimie, energie, papier, ciment et fabrication.",
  "Level": "Niveau",
  "Flow": "Debit",
  "Pressure": "Pression",
  "Temperature": "Temperature",
  "Radar, guided wave radar, ultrasonic, hydrostatic, DP level, capacitance, nuclear, displacer, float, vibrating fork and point-level switches.": "Radar, radar guide, ultrason, hydrostatique, niveau DP, capacitif, nucleaire, displacer, flotteur, fourche vibrante et contacts de niveau.",
  "Magnetic, Coriolis, vortex, ultrasonic, thermal mass, turbine, positive displacement, open-channel, DP orifice, venturi and annubar.": "Magnetique, Coriolis, vortex, ultrason, masse thermique, turbine, volumetrique, canal ouvert, DP avec plaque a orifice, venturi et annubar.",
  "Gauge, absolute, vacuum, DP, remote seal, sanitary diaphragm, pressure switch and safety pressure monitoring.": "Pression relative, absolue, vide, DP, separateur distant, membrane sanitaire, pressostat et surveillance de securite pression.",
  "RTD, thermocouple, thermistor, infrared pyrometer, temperature switch, head transmitter and multi-point temperature assembly.": "RTD, thermocouple, thermistance, pyrometre infrarouge, thermostat, transmetteur de tete et ensemble multi-points.",
  "pH, ORP, conductivity, resistivity, dissolved oxygen, chlorine, turbidity, suspended solids, silica, sodium, moisture and gas analyzers.": "Analyseurs pH, ORP, conductivite, resistivite, oxygene dissous, chlore, turbidite, solides en suspension, silice, sodium, humidite et gaz.",
  "Final control": "Organe final de commande",
  "Control valve, smart positioner, I/P converter, solenoid valve, on/off actuator, damper actuator, MOV and pneumatic actuator.": "Vanne de regulation, positionneur intelligent, convertisseur I/P, electrovanne, actionneur tout-ou-rien, actionneur de registre, MOV et actionneur pneumatique.",
  "Rotating equipment": "Machines tournantes",
  "Vibration, proximity probe, speed pickup, tachometer, encoder, bearing temperature, lube oil pressure and motor protection.": "Vibration, sonde de proximite, capteur de vitesse, tachymetre, codeur, temperature palier, pression huile et protection moteur.",
  "Weighing": "Pesage",
  "Load cell, weighing transmitter, belt scale, weigh feeder, platform scale, silo weighing and batching instruments.": "Cellule de charge, transmetteur de pesage, balance a bande, doseur peseur, balance plateforme, pesage silo et instruments de dosage.",
  "Safety and detection": "Securite et detection",
  "LEL gas, toxic gas, oxygen, flame, smoke, heat, area siren, beacon, emergency stop and safety relay interfaces.": "Gaz LEL, gaz toxique, oxygene, flamme, fumee, chaleur, sirene de zone, gyrophare, arret d'urgence et interfaces relais de securite.",
  "Electrical and power": "Electricite et puissance",
  "VSD/VFD, soft starter, power meter, energy meter, current transformer, voltage transducer and motor current monitor.": "VSD/VFD, demarreur progressif, analyseur de puissance, compteur energie, transformateur de courant, transducteur tension et surveillance courant moteur.",
  "Position and presence": "Position et presence",
  "Proximity switch, photoelectric sensor, limit switch, reed switch, laser distance, LVDT, draw-wire and valve feedback.": "Detecteur de proximite, cellule photoelectrique, fin de course, contact reed, distance laser, LVDT, cable tire et retour vanne.",
  "Communication": "Communication",
  "HART, Profibus PA/DP, Profinet, Foundation Fieldbus, Modbus RTU/TCP, EtherNet/IP, IO-Link and WirelessHART gateways.": "Passerelles HART, Profibus PA/DP, Profinet, Foundation Fieldbus, Modbus RTU/TCP, EtherNet/IP, IO-Link et WirelessHART.",
  "How field instruments connect to PLC input and output cards.": "Comment les instruments de terrain se raccordent aux cartes d'entree et de sortie PLC.",
  "Terminal names differ between PLC brands, but the principle is the same: match the signal type to the correct module, maintain polarity, keep shields controlled and prove the value at the PLC before handover.": "Les noms de bornes varient selon les marques de PLC, mais le principe reste le meme: choisir le module adapte au signal, garder la polarite, maitriser les ecrans et verifier la valeur dans le PLC avant remise.",
  "2-wire 4-20 mA transmitter to analog input": "Transmetteur 4-20 mA 2 fils vers entree analogique",
  "4-wire transmitter to analog input": "Transmetteur 4 fils vers entree analogique",
  "Digital sensor or switch to PLC input": "Capteur digital ou contact vers entree PLC",
  "PLC analog output to valve positioner or VSD speed": "Sortie analogique PLC vers positionneur ou vitesse VSD",
  "RTD and thermocouple to PLC temperature module": "RTD et thermocouple vers module temperature PLC",
  "Pulse, frequency and encoder signals": "Signaux impulsion, frequence et codeur",
  "+24 V / loop positive": "+24 V / positif boucle",
  "Analog signal": "Signal analogique",
  "Command / feedback": "Commande / retour",
  "0 V / common / return": "0 V / commun / retour",
  "Cable shield to earth at one end": "Ecran cable a la terre a une seule extremite",
  "PSU + to TX +": "Alim + vers TX +",
  "TX - to PLC AI I+": "TX - vers PLC AI I+",
  "PLC AI COM to PSU -": "PLC AI COM vers alim -",
  "Screen to panel earth only": "Ecran vers terre armoire uniquement",
  "Supply L+ to TX P+": "Alim L+ vers TX P+",
  "Supply M to TX P-": "Alim M vers TX P-",
  "TX AO+ to PLC I+": "TX AO+ vers PLC I+",
  "TX AO- to PLC COM": "TX AO- vers PLC COM",
  "+24 V through field contact": "+24 V via contact terrain",
  "Contact return to PLC IN": "Retour contact vers PLC IN",
  "PLC COM to 0 V": "PLC COM vers 0 V",
  "Use relay if voltages differ": "Utiliser relais si tensions differentes",
  "PLC AO+ to device +": "PLC AO+ vers appareil +",
  "Device - to PLC AO COM": "Appareil - vers PLC AO COM",
  "Feedback to separate AI if used": "Retour vers AI separee si utilise",
  "Confirm active/passive loop": "Confirmer boucle active/passive",
  "RTD A to module A": "RTD A vers module A",
  "RTD B to module B": "RTD B vers module B",
  "RTD b to module b": "RTD b vers module b",
  "TC polarity must match cable type": "Polarite TC conforme au type de cable",
  "A phase to HSC A": "Phase A vers HSC A",
  "B phase to HSC B": "Phase B vers HSC B",
  "Z index to HSC Z": "Index Z vers HSC Z",
  "Shield earth at PLC end": "Ecran a la terre cote PLC",
  "Use analog input set to current mode, not voltage mode.": "Utilisez l'entree analogique en mode courant, pas en mode tension.",
  "Connect shield to instrument earth or panel earth at one end only unless the site standard says otherwise.": "Raccordez l'ecran a la terre instrument ou armoire a une seule extremite sauf indication contraire du standard site.",
  "PLC scaling example: 4 mA = 0 percent, 12 mA = 50 percent, 20 mA = 100 percent.": "Exemple d'echelle PLC: 4 mA = 0 pour cent, 12 mA = 50 pour cent, 20 mA = 100 pour cent.",
  "Power and signal are separate circuits; do not place the PLC input in the supply line.": "La puissance et le signal sont des circuits separes; ne placez pas l'entree PLC dans la ligne d'alimentation.",
  "Check whether the output is active or passive before wiring.": "Verifiez si la sortie est active ou passive avant cablage.",
  "For voltage output, use PLC voltage input and scale the engineering range correctly.": "Pour une sortie tension, utilisez une entree tension PLC et reglez correctement l'echelle d'unites.",
  "Sourcing input usually receives +24 V through the field contact; sinking input wiring may be opposite.": "Une entree sourcing recoit generalement +24 V via le contact terrain; une entree sinking peut etre cablee a l'inverse.",
  "Use interposing relay contacts when field voltage differs from PLC input voltage.": "Utilisez un relais d'interface lorsque la tension terrain differe de la tension d'entree PLC.",
  "Prove open and closed state in the PLC tag monitor and check alarm inversion.": "Verifiez les etats ouvert et ferme dans le moniteur de tags PLC et controlez l'inversion d'alarme.",
  "Confirm active/passive loop requirements for the AO card and receiving device.": "Confirmez les exigences boucle active/passive de la carte AO et de l'appareil recepteur.",
  "Scale command as 4 mA = closed/minimum and 20 mA = open/maximum unless the process requires reverse action.": "Reglez la commande comme 4 mA = ferme/minimum et 20 mA = ouvert/maximum sauf action inverse requise.",
  "Stroke the final element and verify feedback, travel limits, fail position and interlocks.": "Actionnez l'organe final et verifiez retour, limites de course, position de securite et interverrouillages.",
  "Use a temperature input module, not a standard 4-20 mA card, unless a transmitter is installed.": "Utilisez un module d'entree temperature, pas une carte 4-20 mA standard, sauf si un transmetteur est installe.",
  "RTD 3-wire: two same-color leads usually go to B and b; single lead goes to A.": "RTD 3 fils: les deux fils de meme couleur vont generalement sur B et b; le fil seul va sur A.",
  "Thermocouple: maintain polarity and use the correct extension cable type to the cold junction module.": "Thermocouple: respectez la polarite et utilisez le bon cable d'extension jusqu'au module de jonction froide.",
  "High-speed signals need a high-speed counter or motion module, not a slow digital input.": "Les signaux rapides necessitent un compteur rapide ou module motion, pas une entree digitale lente.",
  "Set pulses per revolution, engineering units, debounce/filter and direction logic.": "Reglez impulsions par tour, unites, anti-rebond/filtre et logique de direction.",
  "Compare displayed speed, count or total with a handheld tachometer or known reference.": "Comparez vitesse, comptage ou total affiche avec un tachymetre portable ou une reference connue.",
  "4-20 mA transmitter method": "Methode transmetteur 4-20 mA",
  "Connect a loop calibrator in series. Record as-found at 0, 25, 50, 75 and 100 percent. For a 0-10 bar range, apply 0, 2.5, 5, 7.5 and 10 bar and expect 4, 8, 12, 16 and 20 mA. Adjust only if outside tolerance, then repeat upscale and downscale.": "Connectez un calibrateur de boucle en serie. Relevez l'etat initial a 0, 25, 50, 75 et 100 pour cent. Pour une plage 0-10 bar, appliquez 0, 2.5, 5, 7.5 et 10 bar et attendez 4, 8, 12, 16 et 20 mA. Ajustez seulement hors tolerance, puis repetez en montee et descente.",
  "Pressure and DP method": "Methode pression et DP",
  "Isolate and vent safely. Connect a certified pressure source to the correct side. Equalize DP before zero. Apply five points slowly, allow stabilization, tap lightly only if procedure permits, then check hysteresis on the return points.": "Isolez et purgez en securite. Connectez une source de pression certifiee au bon cote. Egalisez la DP avant le zero. Appliquez cinq points lentement, laissez stabiliser, tapotez legerement seulement si la procedure l'autorise, puis verifiez l'hysteresis au retour.",
  "Temperature method": "Methode temperature",
  "For transmitter calibration, simulate RTD resistance or thermocouple mV with cold-junction compensation enabled. For sensor calibration, use a dry block or bath with a reference probe and allow enough soak time before recording readings.": "Pour etalonner un transmetteur, simulez la resistance RTD ou les mV thermocouple avec compensation de jonction froide activee. Pour un capteur, utilisez un bloc sec ou bain avec sonde reference et laissez le temps de stabilisation avant lecture.",
  "Flow method": "Methode debit",
  "For magmeters and Coriolis meters, perform zero only with a full pipe and no flow. For DP flow, calibrate the DP transmitter to the calculated range and verify square-root extraction in transmitter or PLC, but not both.": "Pour debitmetres magnetiques et Coriolis, faites le zero uniquement conduite pleine et sans debit. Pour debit DP, etalonnez le transmetteur DP a la plage calculee et verifiez l'extraction racine carree dans le transmetteur ou le PLC, mais pas les deux.",
  "Level method": "Methode niveau",
  "For radar or ultrasonic, measure empty distance, full distance, nozzle height and blocking distance. Confirm echo quality, map false echoes, then test output at known level or by simulation. For DP level, calculate wet-leg or dry-leg range before applying pressure.": "Pour radar ou ultrason, mesurez distance vide, distance plein, hauteur de piquage et distance de blocage. Confirmez la qualite echo, cartographiez les faux echos, puis testez la sortie a niveau connu ou par simulation. Pour niveau DP, calculez la plage jambe humide ou seche avant pression.",
  "Analytical method": "Methode analyse",
  "Clean probe, inspect electrolyte or membrane, then calibrate with fresh standards. pH normally uses pH 7 first, then pH 4 or 10. Conductivity uses a certified standard near the process value. Record sample temperature and slope/offset.": "Nettoyez la sonde, inspectez electrolyte ou membrane, puis etalonnez avec standards frais. Le pH utilise normalement pH 7 d'abord, puis pH 4 ou 10. La conductivite utilise un standard certifie proche de la valeur process. Notez temperature, pente et offset.",
  "Control valve method": "Methode vanne de regulation",
  "Confirm air supply, fail action and mechanical travel. Command 4, 8, 12, 16 and 20 mA. Verify actual stem or shaft position, feedback signal, travel limits, seat leakage requirement and response without hunting.": "Confirmez alimentation air, action de securite et course mecanique. Commandez 4, 8, 12, 16 et 20 mA. Verifiez la position reelle de tige ou axe, le signal retour, les limites de course, l'exigence de fuite siege et la reponse sans oscillation.",
  "VSD commissioning method": "Methode de mise en service VSD",
  "Enter motor nameplate voltage, current, frequency, speed and power. Run motor identification if allowed. Verify direction uncoupled where possible, then test 0, 25, 50, 75 and 100 percent speed reference, start/stop source, fault relay and emergency stop chain.": "Entrez tension, courant, frequence, vitesse et puissance de la plaque moteur. Lancez l'identification moteur si autorisee. Verifiez le sens decouple si possible, puis testez reference vitesse 0, 25, 50, 75 et 100 pour cent, source marche/arret, relais defaut et chaine arret d'urgence.",
  "YouTube training links": "Liens de formation YouTube",
  "Calibration and wiring videos for self-study.": "Videos d'etalonnage et de cablage pour l'auto-formation.",
  "Use these links as learning support, then confirm the exact terminals, safety requirements and parameters in the current manual for the device installed on site.": "Utilisez ces liens comme support d'apprentissage, puis confirmez les bornes exactes, exigences de securite et parametres dans le manuel actuel de l'appareil installe.",
  "4-20 mA and PLC wiring": "Cablage 4-20 mA et PLC",
  "Level transmitter": "Transmetteur de niveau",
  "Temperature calibration": "Etalonnage temperature",
  "Temperature transmitter": "Transmetteur de temperature",
  "VSD / drive": "VSD / variateur",
  "Control valve": "Vanne de regulation",
  "Safety instruments": "Instruments de securite",
  "4-20 mA current signal wiring, scaling and troubleshooting": "Cablage signal courant 4-20 mA, mise a l'echelle et diagnostic",
  "Good for 2-wire and 4-wire transmitter loops into PLC analog inputs.": "Utile pour boucles transmetteur 2 fils et 4 fils vers entrees analogiques PLC.",
  "VEGAFLEX / radar level transmitter configuration": "Configuration transmetteur de niveau VEGAFLEX / radar",
  "Useful for learning level setup concepts before applying the vendor manual.": "Utile pour apprendre les concepts de reglage niveau avant d'appliquer le manuel fournisseur.",
  "RTD and 4-20 mA transmitter calibration": "Etalonnage RTD et transmetteur 4-20 mA",
  "Shows sensor checking, simulation and transmitter output verification.": "Montre la verification capteur, la simulation et le controle de sortie transmetteur.",
  "Temperature transmitter calibration and RTD wiring": "Etalonnage transmetteur de temperature et cablage RTD",
  "Helpful for RTD, thermocouple and DCS/PLC output checking.": "Utile pour RTD, thermocouple et verification de sortie DCS/PLC.",
  "SINAMICS G120 easy commissioning": "Mise en service simple SINAMICS G120",
  "Drive setup reference for motor data, commissioning and basic parameters.": "Reference de reglage variateur pour donnees moteur, mise en service et parametres de base.",
  "Search: pH probe and analyzer calibration": "Recherche: etalonnage sonde pH et analyseur",
  "Use for pH 7 / pH 4 or pH 10 buffer calibration examples.": "A utiliser pour exemples d'etalonnage avec tampons pH 7 / pH 4 ou pH 10.",
  "Search: positioner calibration and valve stroking": "Recherche: etalonnage positionneur et course vanne",
  "Use for smart positioner auto-stroke and 4-20 mA travel checks.": "A utiliser pour auto-course positionneur intelligent et controle de course 4-20 mA.",
  "Search: gas detector bump test and calibration": "Recherche: bump test et etalonnage detecteur gaz"
  ,"Use for LEL, oxygen and toxic gas detector calibration practice.": "A utiliser pour pratique d'etalonnage detecteur LEL, oxygene et gaz toxique."
};

function applyLanguage(language) {
  const dictionary = { ...translations.en, ...translations[language] };
  document.documentElement.lang = language;
  document.title = dictionary.brand || translations.en.brand;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    if (dictionary[key]) {
      node.setAttribute("placeholder", dictionary[key]);
    }
  });

  translateStaticContent(language);
}

function translateStaticContent(language) {
  const nodes = document.querySelectorAll(`
    .nav a:not([data-i18n]),
    .segmented button:not([data-i18n]),
    .module-card .chip:not([data-i18n]),
    .module-card h3:not([data-i18n]),
    .module-card p:not([data-i18n]),
    .module-card li:not([data-i18n]),
    .compact-reference .eyebrow,
    .compact-reference h2,
    .compact-reference p,
    .compact-reference h3,
    .plc-section .eyebrow,
    .plc-section h2,
    .plc-section p,
    .wiring-card h3,
    .wiring-card li,
    .terminal-list span,
    .method-grid h3,
    .method-grid p,
    .video-library .eyebrow,
    .video-library h2,
    .video-library p,
    .video-card span,
    .video-card strong,
    .video-card small
  `);

  nodes.forEach((node) => {
    if (node.children.length > 0) {
      return;
    }

    if (!node.dataset.originalText) {
      node.dataset.originalText = node.textContent.trim();
    }

    const original = node.dataset.originalText;
    node.textContent = language === "fr" && staticFrenchText[original]
      ? staticFrenchText[original]
      : original;
  });

  document.querySelectorAll(".schematic-legend span").forEach((node) => {
    if (!node.dataset.originalText) {
      node.dataset.originalText = node.textContent.trim();
    }

    const original = node.dataset.originalText;
    const label = language === "fr" && staticFrenchText[original]
      ? staticFrenchText[original]
      : original;

    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        child.remove();
      }
    });
    node.append(` ${label}`);
  });
}

function filterCards() {
  const query = moduleSearch.value.trim().toLowerCase();

  cards.forEach((card) => {
    const cardType = card.dataset.type;
    const typeMatch = activeFilter === "all" || cardType === activeFilter || cardType === "all";
    const text = `${card.textContent} ${card.dataset.keywords}`.toLowerCase();
    const searchMatch = !query || text.includes(query);
    card.classList.toggle("hidden", !(typeMatch && searchMatch));
  });
}

languageSelect.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

typeFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) {
    return;
  }

  activeFilter = button.dataset.filter;
  typeFilters.querySelectorAll("button").forEach((item) => {
    item.classList.toggle("active", item === button);
  });
  filterCards();
});

moduleSearch.addEventListener("input", filterCards);

applyLanguage("en");
