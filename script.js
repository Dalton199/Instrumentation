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
    language: "Langue",
    heroTitle: "Un guide web pratique pour les techniciens instrumentation et VSD.",
    heroBody: "Choisissez un instrument, etudiez le schema, suivez l'installation, puis faites les controles de calibration et mise en service.",
    startLearning: "Commencer",
    openChecklist: "Checklist",
    all: "Tous",
    level: "Niveau",
    flow: "Debit",
    pressure: "Pression",
    temperature: "Temperature",
    moduleTitle: "Selectionnez un appareil et apprenez la bonne methode terrain.",
    drawingTitle: "Connexions typiques vues sur site.",
    calTitle: "Du banc de test a la remise signee.",
    checkTitle: "Avant d'alimenter un instrument",
    vendorTitle: "Les memes bases pour les grands fournisseurs d'automatisation.",
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

function applyLanguage(language) {
  const dictionary = { ...translations.en, ...translations[language] };
  document.documentElement.lang = language;

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
