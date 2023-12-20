function loginPage() {
  window.location.href = "logIn.html";
}

function signupPage() {
  window.location.href = "signUp.html";
}

// Generate Options
let provinceCategories = document.getElementById("province");
let cityCategories = document.getElementById("city");

let arrayValue = [
  "Abra",
  "Agusan del Norte",
  "Agusan del Sur",
  "Aklan",
  "Albay",
  "Antique",
  "Apayao",
  "Aurora",
  "Basilan",
  "Bataan",
  "Batanes",
  "Batangas",
  "Benguet",
  "Biliran",
  "Bohol",
  "Bukidnon",
  "Bulacan",
  "Cagayan",
  "Camarines Norte",
  "Camarines Sur",
  "Camiguin",
  "Capiz",
  "Catanduanes",
  "Cavite",
  "Cebu",
  "Compostela Valley",
  "Cotabato",
  "Davao de Oro",
  "Davao del Norte",
  "Davao del Sur",
  "Davao Occidental",
  "Davao Oriental",
  "Dinagat Islands",
  "Eastern Samar",
  "Guimaras",
  "Ifugao",
  "Ilocos Norte",
  "Ilocos Sur",
  "Iloilo",
  "Isabela",
  "Kalinga",
  "La Union",
  "Laguna",
  "Lanao del Norte",
  "Lanao del Sur",
  "Leyte",
  "Maguindanao",
  "Marinduque",
  "Masbate",
  "Misamis Occidental",
  "Misamis Oriental",
  "Mountain Province",
  "Negros Occidental",
  "Negros Oriental",
  "Northern Samar",
  "Nueva Ecija",
  "Nueva Vizcaya",
  "Occidental Mindoro",
  "Oriental Mindoro",
  "Palawan",
  "Pampanga",
  "Pangasinan",
  "Quezon",
  "Quirino",
  "Rizal",
  "Romblon",
  "Samar",
  "Sarangani",
  "Siquijor",
  "Sorsogon",
  "South Cotabato",
  "Southern Leyte",
  "Sultan Kudarat",
  "Sulu",
  "Surigao del Norte",
  "Surigao del Sur",
  "Tarlac",
  "Tawi-Tawi",
  "Zambales",
  "Zamboanga del Norte",
  "Zamboanga del Sur",
];
let arrayText = [...arrayValue];

for (let i = 0; i < arrayValue.length; i++) {
  let num1 = arrayValue[i];
  let num2 = arrayText[i];
  generateProvinceCategory(num1, num2);
}

function generateProvinceCategory(value, text) {
  let option = document.createElement("option");
  option.value = value;
  option.text = text;
  provinceCategories.add(option);
}
// Generate Options

// Update Second Select Box
function updateSecondDropdown() {
  let provinceValue = document.getElementById("province").value;

  switch (provinceValue) {
    case "Abra":
      provinceAbra();
      break;

    case "Agusan del Norte":
      provinceAgusanDelNorte();
      break;

    case "Agusan del Sur":
      provinceAgusanDelSur();
      break;

    case "Aklan":
      provinceAklan();
      break;

    case "Albay":
      provinceAlbay();
      break;

    case "Antique":
      provinceAntique();
      break;

    case "Apayao":
      provinceApayao();
      break;

    case "Aurora":
      provinceAurora();
      break;

    case "Basilan":
      provinceBasilan();
      break;

    case "Bataan":
      provinceBataan();
      break;

    case "Batanes":
      provinceBatanes();
      break;

    case "Batangas":
      provinceBatangas();
      break;

    case "Benguet":
      provinceBenguet();
      break;

    case "Biliran":
      provinceBiliran();
      break;

    case "Bohol":
      provinceBohol();
      break;

    case "Bukidnon":
      provinceBukidnon();
      break;

    case "Bulacan":
      provinceBulacan();
      break;

    case "Cagayan":
      provinceCagayan();
      break;

    case "Camarines Norte":
      provinceCamarinesNorte();
      break;

    case "Camarines Sur":
      provinceCamarinesSur();
      break;

    case "Camiguin":
      provinceCamiguin();
      break;

    case "Capiz":
      provinceCapiz();
      break;

    case "Catanduanes":
      provinceCatanduanes();
      break;

    case "Cavite":
      provinceCavite();
      break;

    case "Cebu":
      provinceCebu();
      break;

    case "Compostela Valley":
      provinceCompostelaValley();
      break;

    case "Cotabato":
      provinceCotabato();
      break;

    case "Davao de Oro":
      provinceDavaoDeOro();
      break;

    case "Davao del Norte":
      provinceDavaoDelNorte();
      break;

    case "Davao del Sur":
      provinceDavaoDelSur();
      break;

    case "Davao Occidental":
      provinceDavaoOccidental();
      break;

    case "Davao Oriental":
      provinceDavaoOriental();
      break;

    case "Dinagat Islands":
      provinceDinagatIslands();
      break;

    case "Eastern Samar":
      provinceEasternSamar();
      break;

    case "Guimaras":
      provinceGuimaras();
      break;

    case "Ifugao":
      provinceIfugao();
      break;

    case "Ilocos Norte":
      provinceIlocosNorte();
      break;

    case "Ilocos Sur":
      provinceIlocosSur();
      break;

    case "Iloilo":
      provinceIloilo();
      break;

    case "Isabela":
      provinceIsabela();
      break;

    case "Kalinga":
      provinceKalinga();
      break;

    case "La Union":
      provinceLaUnion();
      break;

    case "Laguna":
      provinceLaguna();
      break;

    case "Lanao del Norte":
      provinceLanaoDelNorte();
      break;

    case "Lanao del Sur":
      provinceLanaoDelSur();
      break;

    case "Leyte":
      provinceLeyte();
      break;

    case "Maguindanao":
      provinceMaguindanao();
      break;

    case "Marinduque":
      provinceMarinduque();
      break;

    case "Masbate":
      provinceMasbate();
      break;

    case "Misamis Occidental":
      provinceMisamisOccidental();
      break;

    case "Misamis Oriental":
      provinceMisamisOriental();
      break;

    case "Mountain Province":
      provinceMountainProvince();
      break;

    case "Negros Occidental":
      provinceNegrosOccidental();
      break;

    case "Negros Oriental":
      provinceNegrosOriental();
      break;

    case "Northern Samar":
      provinceNorthernSamar();
      break;

    case "Nueva Ecija":
      provinceNuevaEcija();
      break;

    case "Nueva Vizcaya":
      provinceNuevaVizcaya();
      break;

    case "Occidental Mindoro":
      provinceOccidentalMindoro();
      break;

    case "Oriental Mindoro":
      provinceOrientalMindoro();
      break;

    case "Palawan":
      provincePalawan();
      break;

    case "Pampanga":
      provincePampanga();
      break;

    case "Pangasinan":
      provincePangasinan();
      break;

    case "Quezon":
      provinceQuezon();
      break;

    case "Quirino":
      provinceQuirino();
      break;

    case "Rizal":
      provinceRizal();
      break;

    case "Romblon":
      provinceRomblon();
      break;

    case "Samar":
      provinceSamar();
      break;

    case "Sarangani":
      provinceSarangani();
      break;

    case "Siquijor":
      provinceSiquijor();
      break;

    case "Sorsogon":
      provinceSorsogon();
      break;

    case "South Cotabato":
      provinceSouthCotabato();
      break;

    case "Southern Leyte":
      provinceSouthernLeyte();
      break;

    case "Sultan Kudarat":
      provinceSultanKudarat();
      break;

    case "Sulu":
      provinceSulu();
      break;

    case "Surigao del Norte":
      provinceSurigaoDelNorte();
      break;

    case "Surigao del Sur":
      provinceSurigaoDelSur();
      break;

    case "Tarlac":
      provinceTarlac();
      break;

    case "Tawi-Tawi":
      provinceTawiTawi();
      break;

    case "Zambales":
      provinceZambales();
      break;

    case "Zamboanga del Norte":
      provinceZamboangaDelNorte();
      break;

    case "Zamboanga del Sur":
      provinceZamboangaDelSur();
      break;
  }
}

function generateCityCategory(value, text) {
  let option = document.createElement("option");
  option.value = value;
  option.text = text;
  cityCategories.add(option);
}

function displayCityCategory(array, text) {
  let selectBoxCity = document.getElementById("city");
  selectBoxCity.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let num1 = array[i];
    let num2 = text[i];
    generateCityCategory(num1, num2);
  }
}

// Update Second Select Box

//Array provinces
function provinceAbra() {
  let arrayAbra = [
    "Bangued (Capital)",
    "Boliney",
    "Bucay",
    "Bucloc",
    "Daguioman",
    "Danglas",
    "Dolores",
    "La Paz",
    "Lacub",
    "Lagangilang",
    "Lagayan",
    "Langiden",
    "Licuan-Baay (Licuan)",
    "Luba",
    "Malibcong",
    "Manabo",
    "Peñarrubia",
    "Pidigan",
    "Pilar",
    "Sallapadan",
    "San Isidro",
    "San Juan",
    "San Quintin",
    "Tayum",
    "Tineg",
    "Tubo",
    "Villaviciosa",
  ];
  let abraText = [...arrayAbra];

  displayCityCategory(arrayAbra, abraText);
}
function provinceAgusanDelNorte() {
  let arrayAgusan = [
    "Buenavista",
    "Butuan City (Independent)",
    "Cabadbaran City (Capital)",
    "Carmen",
    "Jabonga",
    "Kitcharao",
    "Las Nieves",
    "Magallanes",
    "Nasipit",
    "Remedios T. Romualdez",
    "Santiago",
    "Tubay",
  ];
  let agusanText = [...arrayAgusan];

  displayCityCategory(arrayAgusan, agusanText);
}
function provinceAgusanDelSur() {
  let arrayDelSur = [
    "Bayugan",
    "Bunawan",
    "Esperanza",
    "La Paz",
    "Loreto",
    "Prosperidad (Capital)",
    "Rosario",
    "San Francisco",
    "San Luis",
    "Santa Josefa",
    "Sibagat",
    "Talacogon",
    "Trento",
    "Veruela",
  ];

  let delSurText = [...arrayDelSur];

  displayCityCategory(arrayDelSur, delSurText);
}
function provinceAklan() {
  let arrayAklan = [
    "Altavas",
    "Balete",
    "Banga",
    "Batan",
    "Buruanga",
    "Ibajay",
    "Kalibo (Capital)",
    "Lezo",
    "Libacao",
    "Madalag",
    "Makato",
    "Malay",
    "Malinao",
    "Nabas",
    "New Washington",
    "Numancia",
  ];

  let aklanText = [...arrayAklan];

  displayCityCategory(arrayAklan, aklanText);
}
function provinceAlbay() {
  let arrayAlbay = [
    "Bacacay",
    "Camalig",
    "Daraga (Locsin)",
    "Guinobatan",
    "Jovellar",
    "Legaspi City (Capital)",
    "Libon",
    "Malilipot",
    "Malinao",
    "Manito",
    "Oas",
    "Pio Duran",
    "Polangui",
    "Rapu-Rapu",
    "Santo Domingo (Libog)",
  ];

  let albayText = [...arrayAlbay];

  displayCityCategory(arrayAlbay, albayText);
}
function provinceAntique() {
  let arrayAntique = [
    "Anini-y",
    "Barbaza",
    "Belison",
    "Bugasong",
    "Caluya",
    "Culasi",
    "Hamtic",
    "Laua-an",
    "Libertad",
    "Pandan",
    "Patnongon",
    "San Jose (Capital)",
    "San Remigio",
    "Sebaste",
    "Sibalom",
    "Tibiao",
    "Tobias Fornier",
    "Valderrama",
  ];

  let antiqueText = [...arrayAntique];

  displayCityCategory(arrayAntique, antiqueText);
}
function provinceApayao() {
  let arrayApayao = [
    "Calanasan (Bayag)",
    "Conner",
    "Flora",
    "Kabugao (Capital)",
    "Luna",
    "Pudtol",
    "Santa Marcela",
  ];

  let apayaoText = [...arrayApayao];

  displayCityCategory(arrayApayao, apayaoText);
}
function provinceAurora() {
  let arrayAurora = [
    "Baler (Capital)",
    "Casiguran",
    "Dilasag",
    "Dinalungan",
    "Dingalan",
    "Dipaculao",
    "Maria Aurora",
  ];

  let auroraText = [...arrayAurora];

  displayCityCategory(arrayAurora, auroraText);
}

function provinceBasilan() {
  let arrayBasilan = [
    "Akbar",
    "Al-Barka",
    "Hadji Mohammad Ajul",
    "Hadji Muhtamad",
    "Isabela City (Capital)",
    "Lamitan City",
    "Lantawan",
    "Maluso",
    "Sumisip",
    "Tabuan-Lasa",
    "Tipo-Tipo",
    "Tuburan",
    "Ungkaya Pukan",
  ];
  let basilanText = [...arrayBasilan];

  displayCityCategory(arrayBasilan, basilanText);
}
function provinceBataan() {
  let arrayBataan = [
    "Abucay",
    "Bagac",
    "Balanga City (Capital)",
    "Dinalupihan",
    "Hermosa",
    "Limay",
    "Mariveles",
    "Morong",
    "Orani",
    "Orion",
    "Pilar",
    "Samal",
  ];
  let bataanText = [...arrayBataan];
  displayCityCategory(arrayBataan, bataanText);
}
function provinceBatanes() {
  let arrayBatanes = [
    "Basco (Capital)",
    "Itbayat",
    "Ivana",
    "Mahatao",
    "Sabtang",
    "Uyugan",
  ];
  let batanesText = [...arrayBatanes];
  displayCityCategory(arrayBatanes, batanesText);
}
function provinceBatangas() {
  let arrayBatangas = [
    "Agoncillo",
    "Alitagtag",
    "Balayan",
    "Balete",
    "Bauan",
    "Calaca",
    "Calatagan",
    "Cuenca",
    "Ibaan",
    "Laurel",
    "Lemery",
    "Lian",
    "Lipa City (Capital)",
    "Lobo",
    "Mabini",
    "Malvar",
    "Mataasnakahoy",
    "Nasugbu",
    "Padre Garcia",
    "Rosario",
    "San Jose",
    "San Juan",
    "San Luis",
    "San Nicolas",
    "San Pascual",
    "Santa Teresita",
    "Santo Tomas",
    "Taal",
    "Talisay",
    "Tanauan",
    "Taysan",
    "Tingloy",
    "Tuy",
  ];

  let batangasText = [...arrayBatangas];
  displayCityCategory(arrayBatangas, batangasText);
}
function provinceBenguet() {
  let arrayBenguet = [
    "Atok",
    "Baguio City (Independent)",
    "Bakun",
    "Bokod",
    "Buguias",
    "Itogon",
    "Kabayan",
    "Kapangan",
    "Kibungan",
    "La Trinidad (Capital)",
    "Mankayan",
    "Sablan",
    "Tuba",
    "Tublay",
  ];

  let benguetText = [...arrayBenguet];
  displayCityCategory(arrayBenguet, benguetText);
}
function provinceBiliran() {
  let arrayBiliran = [
    "Almeria",
    "Biliran (Capital)",
    "Cabucgayan",
    "Caibiran",
    "Culaba",
    "Kawayan",
    "Maripipi",
    "Naval",
  ];

  let biliranText = [...arrayBiliran];
  displayCityCategory(arrayBiliran, biliranText);
}
function provinceBohol() {
  let arrayBohol = [
    "Alburquerque",
    "Alicia",
    "Anda",
    "Antequera",
    "Baclayon",
    "Balilihan",
    "Batuan",
    "Bien Unido",
    "Bilar",
    "Buenavista",
    "Calape",
    "Candijay",
    "Carmen",
    "Catigbian",
    "Clarin",
    "Corella",
    "Cortes",
    "Dagohoy",
    "Danao",
    "Dauis",
    "Dimiao",
    "Duero",
    "Garcia Hernandez",
    "Getafe",
    "Guindulman",
    "Inabanga",
    "Jagna",
    "Jetafe",
    "Lila",
    "Loay",
    "Loboc",
    "Loon",
    "Mabini",
    "Maribojoc",
    "Panglao",
    "Pilar",
    "Pres. Carlos P. Garcia (Pitogo)",
    "Sagbayan",
    "San Isidro",
    "San Miguel",
    "Sevilla",
    "Sierra Bullones",
    "Sikatuna",
    "Tagbilaran City (Capital)",
    "Talibon",
    "Trinidad",
    "Tubigon",
    "Ubay",
    "Valencia",
  ];

  let boholText = [...arrayBohol];
  displayCityCategory(arrayBohol, boholText);
}
function provinceBukidnon() {
  let arrayBukidnon = [
    "Baungon",
    "Cabanglasan",
    "Damulog",
    "Dangcagan",
    "Don Carlos",
    "Impasugong",
    "Kadingilan",
    "Kalilangan",
    "Kibawe",
    "Kitaotao",
    "Lantapan",
    "Libona",
    "Malaybalay City (Capital)",
    "Malitbog",
    "Manolo Fortich",
    "Maramag",
    "Pangantucan",
    "Quezon",
    "San Fernando",
    "Sumilao",
    "Talakag",
    "Valencia City",
  ];

  let bukidnonText = [...arrayBukidnon];
  displayCityCategory(arrayBukidnon, bukidnonText);
}
function provinceBulacan() {
  let arrayBulacan = [
    "Angat",
    "Balagtas (Bigaa)",
    "Baliuag",
    "Bocaue",
    "Bulacan",
    "Bustos",
    "Calumpit",
    "Doña Remedios Trinidad (DRT)",
    "Guiguinto",
    "Hagonoy",
    "Malolos (Capital)",
    "Marilao",
    "Meycauayan",
    "Norzagaray",
    "Obando",
    "Pandi",
    "Paombong",
    "Plaridel",
    "Pulilan",
    "San Ildefonso",
    "San Jose del Monte",
    "San Miguel",
    "San Rafael",
    "Santa Maria",
  ];

  let bulacanText = [...arrayBulacan];
  displayCityCategory(arrayBulacan, bulacanText);
}

function provinceCagayan() {
  let arrayCagayan = [
    "Abulug",
    "Alcala",
    "Allacapan",
    "Amulung",
    "Aparri",
    "Baggao",
    "Ballesteros",
    "Buguey",
    "Calayan",
    "Camalaniugan",
    "Claveria",
    "Enrile",
    "Gattaran",
    "Gonzaga",
    "Iguig",
    "Lal-lo",
    "Lasam",
    "Pamplona",
    "Peñablanca",
    "Piat",
    "Rizal",
    "Sanchez-Mira",
    "Santa Ana",
    "Santa Praxedes",
    "Santa Teresita",
    "Santo Niño (Faire)",
    "Solana",
    "Tuao",
    "Tuguegarao City (Capital)",
  ];

  let cagayanText = [...arrayCagayan];
  displayCityCategory(arrayCagayan, cagayanText);
}
function provinceCamarinesNorte() {
  let arrayCamarinesNorte = [
    "Basud",
    "Capalonga",
    "Daet (Capital)",
    "Jose Panganiban",
    "Labo",
    "Mercedes",
    "Paracale",
    "San Lorenzo Ruiz (Imelda)",
    "San Vicente",
    "Santa Elena",
    "Talisay",
    "Vinzons",
  ];

  let camarinesNorteText = [...arrayCamarinesNorte];
  displayCityCategory(arrayCamarinesNorte, camarinesNorteText);
}
function provinceCamarinesSur() {
  let arrayCamarinesSur = [
    "Baao",
    "Balatan",
    "Bato",
    "Bombon",
    "Buhi",
    "Bula",
    "Cabusao",
    "Calabanga",
    "Camaligan",
    "Canaman",
    "Caramoan",
    "Del Gallego",
    "Gainza",
    "Garchitorena",
    "Goa",
    "Iriga City",
    "Lagonoy",
    "Libmanan",
    "Lupi",
    "Magarao",
    "Milaor",
    "Minalabac",
    "Nabua",
    "Naga City (Capital)",
    "Ocampo",
    "Pamplona",
    "Pasacao",
    "Pili",
    "Presentacion (Parubcan)",
    "Ragay",
    "Sagñay",
    "San Fernando",
    "San Jose",
    "Sipocot",
    "Siruma",
    "Tigaon",
    "Tinambac",
  ];

  let camarinesSurText = [...arrayCamarinesSur];
  displayCityCategory(arrayCamarinesSur, camarinesSurText);
}
function provinceCamiguin() {
  let arrayCamiguin = [
    "Catarman",
    "Guinsiliban",
    "Mahinog",
    "Mambajao (Capital)",
    "Sagay",
  ];

  let camiguinText = [...arrayCamiguin];
  displayCityCategory(arrayCamiguin, camiguinText);
}
function provinceCapiz() {
  let arrayCapiz = [
    "Cuartero",
    "Dao",
    "Dumalag",
    "Dumarao",
    "Ivisan",
    "Jamindan",
    "Ma-ayon",
    "Mambusao",
    "Panay",
    "Panitan",
    "Pilar",
    "Pontevedra",
    "President Roxas",
    "Roxas City (Capital)",
    "Sapian",
    "Sigma",
    "Tapaz",
  ];

  let capizText = [...arrayCapiz];
  displayCityCategory(arrayCapiz, capizText);
}
function provinceCatanduanes() {
  let arrayCatanduanes = [
    "Bagamanoc",
    "Baras",
    "Bato",
    "Caramoran",
    "Gigmoto",
    "Pandan",
    "Panganiban (Payo)",
    "San Andres (Calolbon)",
    "San Miguel",
    "Viga",
    "Virac (Capital)",
  ];

  let catanduanesText = [...arrayCatanduanes];
  displayCityCategory(arrayCatanduanes, catanduanesText);
}
function provinceCavite() {
  let arrayCavite = [
    "Alfonso",
    "Amadeo",
    "Bacoor",
    "Carmona",
    "Cavite City",
    "Dasmariñas",
    "General Emilio Aguinaldo",
    "General Mariano Alvarez",
    "General Trias",
    "Imus",
    "Indang",
    "Kawit",
    "Magallanes",
    "Maragondon",
    "Mendez",
    "Naic",
    "Noveleta",
    "Rosario",
    "Silang",
    "Tagaytay",
    "Tanza",
    "Ternate",
    "Trece Martires City (Capital)",
  ];

  let caviteText = [...arrayCavite];
  displayCityCategory(arrayCavite, caviteText);
}
function provinceCebu() {
  let arrayCebu = [
    "Alcantara",
    "Alcoy",
    "Alegria",
    "Aloguinsan",
    "Argao",
    "Asturias",
    "Badian",
    "Balamban",
    "Bantayan",
    "Barili",
    "Bogo City",
    "Boljoon",
    "Borbon",
    "Carcar City",
    "Carmen",
    "Catmon",
    "Cebu City (Capital)",
    "Compostela",
    "Consolacion",
    "Cordova",
    "Daanbantayan",
    "Dalaguete",
    "Danao City",
    "Dumanjug",
    "Ginatilan",
    "Lapu-Lapu City",
    "Liloan",
    "Madridejos",
    "Malabuyoc",
    "Mandaue City",
    "Medellin",
    "Minglanilla",
    "Moalboal",
    "Naga City",
    "Oslob",
    "Pilar",
    "Pinamungajan",
    "Poro",
    "Ronda",
    "Samboan",
    "San Fernando",
    "San Francisco",
    "San Remigio",
    "Santa Fe",
    "Santander",
    "Sibonga",
    "Sogod",
    "Tabogon",
    "Tabuelan",
    "Talisay City",
    "Toledo City",
    "Tuburan",
    "Tudela",
  ];

  let cebuText = [...arrayCebu];
  displayCityCategory(arrayCebu, cebuText);
}
function provinceCompostelaValley() {
  let arrayCompostelaValley = [
    "Compostela",
    "Laak (San Vicente)",
    "Mabini (Dona Alicia)",
    "Maco",
    "Maragusan (San Mariano)",
    "Mawab",
    "Monkayo",
    "Montevista",
    "Nabunturan (Capital)",
    "New Bataan",
    "Pantukan",
  ];

  let compostelaValleyText = [...arrayCompostelaValley];
  displayCityCategory(arrayCompostelaValley, compostelaValleyText);
}
function provinceCotabatoValley() {
  let arrayCotabatoValley = [
    "Alamada",
    "Aleosan",
    "Antipas",
    "Arakan",
    "Banisilan",
    "Carmen",
    "Kabacan",
    "Kidapawan City (Capital)",
    "Libungan",
    "M'lang",
    "Magpet",
    "Makilala",
    "Matalam",
    "Midsayap",
    "Pigcawayan",
    "Pikit",
    "President Roxas",
    "Tulunan",
    "Cotabato City (Independent)",
  ];

  let cotabatoValleyText = [...arrayCotabatoValley];
  displayCityCategory(arrayCotabatoValley, cotabatoValleyText);
}
function provinceCotabato() {
  let arrayCotabato = [
    "Alamada",
    "Aleosan",
    "Antipas",
    "Arakan",
    "Banisilan",
    "Carmen",
    "Kabacan",
    "Kidapawan City (Capital)",
    "Libungan",
    "M'lang",
    "Magpet",
    "Makilala",
    "Matalam",
    "Midsayap",
    "Pigcawayan",
    "Pikit",
    "President Roxas",
    "Tulunan",
    "Antipas",
    "Arakan",
    "Banisilan",
    "Carmen",
    "Kabacan",
    "Kidapawan City (Capital)",
    "Libungan",
    "M'lang",
    "Magpet",
    "Makilala",
    "Matalam",
    "Midsayap",
    "Pigcawayan",
    "Pikit",
    "President Roxas",
    "Tulunan",
  ];

  let cotabatoText = [...arrayCotabato];
  displayCityCategory(arrayCotabato, cotabatoText);
}

function provinceDavaoDeOro() {
  let arrayDavaoDeOro = [
    "Compostela",
    "Laak (San Vicente)",
    "Mabini (Dona Alicia)",
    "Maco",
    "Maragusan (San Mariano)",
    "Monkayo",
    "Montevista",
    "Nabunturan (Capital)",
    "New Bataan",
    "Pantukan",
  ];

  let davaoDeOroText = [...arrayDavaoDeOro];
  displayCityCategory(arrayDavaoDeOro, davaoDeOroText);
}
function provinceDavaoDelNorte() {
  let arrayDavaoDelNorte = [
    "Asuncion",
    "Braulio E. Dujali",
    "Carmen",
    "Kapalong",
    "New Corella",
    "Panabo City",
    "Samal City",
    "San Isidro",
    "Santo Tomas",
    "Tagum City (Capital)",
  ];

  let davaoDelNorteText = [...arrayDavaoDelNorte];
  displayCityCategory(arrayDavaoDelNorte, davaoDelNorteText);
}
function provinceDavaoDelSur() {
  let arrayDavaoDelSur = [
    "Bansalan",
    "Davao City (Capital)",
    "Digos City",
    "Hagonoy",
    "Kiblawan",
    "Magsaysay",
    "Malalag",
    "Matanao",
    "Padada",
    "Santa Cruz",
    "Sulop",
  ];

  let davaoDelSurText = [...arrayDavaoDelSur];
  displayCityCategory(arrayDavaoDelSur, davaoDelSurText);
}
function provinceDavaoOccidental() {
  let arrayDavaoOccidental = [
    "Don Marcelino",
    "Jose Abad Santos (Trinidad)",
    "Malita (Capital)",
    "Santa Maria",
    "Sarangani",
  ];

  let davaoOccidentalText = [...arrayDavaoOccidental];
  displayCityCategory(arrayDavaoOccidental, davaoOccidentalText);
}
function provinceDavaoOriental() {
  let arrayDavaoOriental = [
    "Baganga",
    "Banaybanay",
    "Boston",
    "Caraga",
    "Cateel",
    "Governor Generoso",
    "Lupon",
    "Manay",
    "Mati City (Capital)",
    "San Isidro",
    "Tarragona",
  ];

  let davaoOrientalText = [...arrayDavaoOriental];
  displayCityCategory(arrayDavaoOriental, davaoOrientalText);
}
function provinceDinagatIslands() {
  let arrayDinagatIslands = [
    "Basilisa",
    "Cagdianao",
    "Dinagat",
    "Libjo (Albor)",
    "Loreto",
    "San Jose (Capital)",
    "Tubajon",
  ];

  let dinagatIslandsText = [...arrayDinagatIslands];
  displayCityCategory(arrayDinagatIslands, dinagatIslandsText);
}
function provinceEasternSamar() {
  let arrayEasternSamar = [
    "Arteche",
    "Balangiga",
    "Balangkayan",
    "Borongan (Capital)",
    "Can-avid",
    "Dolores",
    "General MacArthur",
    "Giporlos",
    "Guiuan",
    "Hernani",
    "Jipapad",
    "Lawaan",
    "Llorente",
    "Maslog",
    "Maydolong",
    "Mercedes",
    "Oras",
    "Quinapondan",
    "Salcedo",
    "San Julian",
    "San Policarpo",
    "Sulat",
    "Taft",
  ];

  let easternSamarText = [...arrayEasternSamar];
  displayCityCategory(arrayEasternSamar, easternSamarText);
}

function provinceGuimaras() {
  let arrayGuimaras = [
    "Buenavista",
    "Jordan (Capital)",
    "Nueva Valencia",
    "San Lorenzo",
    "Sibunag",
  ];

  let guimarasText = [...arrayGuimaras];
  displayCityCategory(arrayGuimaras, guimarasText);
}

function provinceIfugao() {
  let arrayIfugao = [
    "Aguinaldo",
    "Alfonso Lista",
    "Asipulo",
    "Banaue",
    "Hingyon",
    "Hungduan",
    "Kiangan",
    "Lagawe (Capital)",
    "Lamut",
    "Mayoyao",
    "Tinoc",
  ];

  let ifugaoText = [...arrayIfugao];
  displayCityCategory(arrayIfugao, ifugaoText);
}
function provinceIlocosNorte() {
  let arrayIlocosNorte = [
    "Adams",
    "Bacarra",
    "Badoc",
    "Bangui",
    "Banna",
    "Batac City (Capital)",
    "Burgos",
    "Carasi",
    "Currimao",
    "Dingras",
    "Dumalneg",
    "Laoag City (Capital)",
    "Marcos",
    "Nueva Era",
    "Pagudpud",
    "Paoay",
    "Pasuquin",
    "Piddig",
    "Pinili",
    "San Nicolas",
    "Sarrat",
    "Solsona",
    "Vintar",
  ];

  let ilocosNorteText = [...arrayIlocosNorte];
  displayCityCategory(arrayIlocosNorte, ilocosNorteText);
}
function provinceIlocosSur() {
  let arrayIlocosSur = [
    "Alilem",
    "Banayoyo",
    "Bantay",
    "Burgos",
    "Cabugao",
    "Candon City",
    "Caoayan",
    "Cervantes",
    "Galimuyod",
    "Gregorio del Pilar (Concepcion)",
    "Lidlidda",
    "Magsingal",
    "Nagbukel",
    "Narvacan",
    "Quirino (Angkaki)",
    "Salcedo (Baugen)",
    "San Emilio",
    "San Esteban",
    "San Ildefonso",
    "San Juan",
    "San Vicente",
    "Santa",
    "Santa Catalina",
    "Santa Cruz",
    "Santa Lucia",
    "Santa Maria",
    "Santiago",
    "Santo Domingo",
    "Sigay",
    "Sinait",
    "Sugpon",
    "Suyo",
    "Tagudin",
  ];

  let ilocosSurText = [...arrayIlocosSur];
  displayCityCategory(arrayIlocosSur, ilocosSurText);
}
function provinceIloilo() {
  let arrayIloilo = [
    "Ajuy",
    "Alimodian",
    "Anilao",
    "Badiangan",
    "Balasan",
    "Banate",
    "Barotac Nuevo",
    "Barotac Viejo",
    "Batad",
    "Bingawan",
    "Cabatuan",
    "Calinog",
    "Carles",
    "Concepcion",
    "Dingle",
    "Dueñas",
    "Dumangas",
    "Estancia",
    "Guimbal",
    "Igbaras",
    "Iloilo City (Capital)",
    "Janiuay",
    "Lambunao",
    "Leganes",
    "Lemery",
    "Leon",
    "Maasin",
    "Miagao",
    "Mina",
    "New Lucena",
    "Oton",
    "Passi City",
    "Pavia",
    "Pototan",
    "San Dionisio",
    "San Enrique",
    "San Joaquin",
    "San Miguel",
    "San Rafael",
    "Santa Barbara",
    "Sara",
    "Tigbauan",
    "Tubungan",
    "Zarraga",
  ];

  let iloiloText = [...arrayIloilo];
  displayCityCategory(arrayIloilo, iloiloText);
}
function provinceIsabela() {
  let arrayIsabela = [
    "Alicia",
    "Angadanan",
    "Aurora",
    "Benito Soliven",
    "Burgos",
    "Cabagan",
    "Cabatuan",
    "Cauayan City",
    "Cordon",
    "Delfin Albano (Magsaysay)",
    "Dinapigue",
    "Divilacan",
    "Echague",
    "Gamu",
    "Ilagan City (Capital)",
    "Jones",
    "Luna",
    "Maconacon",
    "Mallig",
    "Naguilian",
    "Palanan",
    "Quezon",
    "Quirino",
    "Ramon",
    "Reina Mercedes",
    "Roxas",
    "San Agustin",
    "San Guillermo",
    "San Isidro",
    "San Manuel",
    "San Mariano",
    "San Mateo",
    "San Pablo",
    "Santa Maria",
    "Santiago City",
    "Santo Tomas",
    "Tumauini",
  ];

  let isabelaText = [...arrayIsabela];
  displayCityCategory(arrayIsabela, isabelaText);
}
function provinceKalinga() {
  let arrayKalinga = [
    "Balbalan",
    "Lubuagan",
    "Pasil",
    "Pinukpuk",
    "Rizal (Liwan)",
    "Tabuk City (Capital)",
    "Tanudan",
    "Tinglayan",
  ];

  let kalingaText = [...arrayKalinga];
  displayCityCategory(arrayKalinga, kalingaText);
}
function provinceLaUnion() {
  let arrayLaUnion = [
    "Agoo",
    "Aringay",
    "Bacnotan",
    "Bagulin",
    "Balaoan",
    "Bangar",
    "Bauang",
    "Burgos",
    "Caba",
    "Luna",
    "Naguilian",
    "Pugo",
    "Rosario",
    "San Fernando City (Capital)",
    "San Gabriel",
    "San Juan",
    "Santo Tomas",
    "Santol",
    "Sudipen",
    "Tubao",
  ];

  let laUnionText = [...arrayLaUnion];
  displayCityCategory(arrayLaUnion, laUnionText);
}
function provinceLaguna() {
  let arrayLaguna = [
    "Alaminos",
    "Bay",
    "Biñan",
    "Cabuyao",
    "Calamba City (Capital)",
    "Calauan",
    "Cavinti",
    "Famy",
    "Kalayaan",
    "Liliw",
    "Los Baños",
    "Luisiana",
    "Lumban",
    "Mabitac",
    "Magdalena",
    "Majayjay",
    "Nagcarlan",
    "Paete",
    "Pagsanjan",
    "Pakil",
    "Pangil",
    "Pila",
    "Rizal",
    "San Pablo City",
    "San Pedro",
    "Santa Cruz (Capital)",
    "Santa Maria",
    "Santa Rosa City",
    "Siniloan",
    "Victoria",
  ];

  let lagunaText = [...arrayLaguna];
  displayCityCategory(arrayLaguna, lagunaText);
}
function provinceLanaoDelNorte() {
  let arrayLanaoDelNorte = [
    "Bacolod",
    "Baloi",
    "Baroy",
    "Kapatagan",
    "Kauswagan",
    "Kolambugan",
    "Lala",
    "Linamon",
    "Magsaysay",
    "Maigo",
    "Matungao",
    "Munai",
    "Nunungan",
    "Pantao Ragat",
    "Pantar",
    "Poona Piagapo",
    "Salvador",
    "Sapad",
    "Sultan Naga Dimaporo (Karomatan)",
    "Tagoloan",
    "Tangcal",
    "Tubod (Capital)",
  ];

  let lanaoDelNorteText = [...arrayLanaoDelNorte];
  displayCityCategory(arrayLanaoDelNorte, lanaoDelNorteText);
}
function provinceLanaoDelSur() {
  let arrayLanaoDelSur = [
    "Bacolod-Kalawi",
    "Balabagan",
    "Balindong (Watu)",
    "Bayang",
    "Binidayan",
    "Buadiposo-Buntong",
    "Bubong",
    "Butig",
    "Calanogas",
    "Ditsaan-Ramain",
    "Ganassi",
    "Kapatagan",
    "Kapatagan",
    "Lumba-Bayabao (Maguing)",
    "Lumbaca-Unayan",
    "Lumbatan",
    "Lumbayanague",
    "Madalum",
    "Madamba",
    "Maguing",
    "Malabang",
    "Marantao",
    "Marawi City (Capital)",
    "Marogong",
    "Masiu",
    "Mulondo",
    "Pagayawan",
    "Piagapo",
    "Poona Bayabao (Gata)",
    "Pualas",
    "Saguiaran",
    "Sultan Dumalondong",
    "Tagoloan II",
    "Tamparan",
    "Taraka",
    "Tubaran",
    "Tugaya",
    "Wao",
  ];

  let lanaoDelSurText = [...arrayLanaoDelSur];
  displayCityCategory(arrayLanaoDelSur, lanaoDelSurText);
}
function provinceLeyte() {
  let arrayLeyte = [
    "Abuyog",
    "Alangalang",
    "Albuera",
    "Babatngon",
    "Barugo",
    "Bato",
    "Baybay City",
    "Burauen",
    "Calubian",
    "Capoocan",
    "Carigara",
    "Dagami",
    "Dulag",
    "Hilongos",
    "Hindang",
    "Inopacan",
    "Isabel",
    "Jaro",
    "Javier (Bugho)",
    "Julita",
    "Kananga",
    "La Paz",
    "Leyte",
    "MacArthur",
    "Mahaplag",
    "Matag-ob",
    "Matalom",
    "Mayorga",
    "Merida",
    "Ormoc City",
    "Palo",
    "Palompon",
    "Pastrana",
    "San Isidro",
    "San Miguel",
    "Santa Fe",
    "Tabango",
    "Tabontabon",
    "Tacloban City (Capital)",
    "Tanauan",
    "Tolosa",
    "Tunga",
    "Villaba",
  ];

  let leyteText = [...arrayLeyte];
  displayCityCategory(arrayLeyte, leyteText);
}
function provinceMaguindanao() {
  let arrayMaguindanao = [
    "Ampatuan",
    "Barira",
    "Buldon",
    "Buluan",
    "Datu Abdullah Sangki",
    "Datu Anggal Midtimbang",
    "Datu Blah T. Sinsuat",
    "Datu Hoffer Ampatuan",
    "Datu Montawal (Pagagawan)",
    "Datu Odin Sinsuat (Dinaig)",
    "Datu Paglas",
    "Datu Piang (Dulawan)",
    "Datu Salibo",
    "Datu Saudi-Ampatuan",
    "Datu Unsay",
    "General Salipada K. Pendatun",
    "Guindulungan",
    "Kabuntalan (Tumbao)",
    "Mamasapano",
    "Mangudadatu",
    "Matanog",
    "Northern Kabuntalan",
    "Pagalungan",
    "Paglat",
    "Pandag",
    "Parang",
    "Rajah Buayan",
    "Shariff Aguak (Maganoy)",
    "Shariff Saydona Mustapha",
    "South Upi",
    "Sultan Kudarat",
    "Sultan Mastura",
    "Sultan sa Barongis (Lambayong)",
    "Sultan Sumagka (Talitay)",
    "Talayan",
    "Talitay",
    "Upi",
  ];

  let maguindanaoText = [...arrayMaguindanao];
  displayCityCategory(arrayMaguindanao, maguindanaoText);
}
function provinceMarinduque() {
  let arrayMarinduque = [
    "Boac (Capital)",
    "Buenavista",
    "Gasan",
    "Mogpog",
    "Santa Cruz",
    "Torrijos",
  ];

  let marinduqueText = [...arrayMarinduque];
  displayCityCategory(arrayMarinduque, marinduqueText);
}
function provinceMasbate() {
  let arrayMasbate = [
    "Aroroy",
    "Baleno",
    "Balud",
    "Batuan",
    "Cataingan",
    "Cawayan",
    "Claveria",
    "Dimasalang",
    "Esperanza",
    "Mandaon",
    "Masbate City (Capital)",
    "Milagros",
    "Mobo",
    "Monreal",
    "Palanas",
    "Pio V. Corpus",
    "Placer",
    "San Fernando",
    "San Jacinto",
    "San Pascual",
    "Uson",
  ];

  let masbateText = [...arrayMasbate];
  displayCityCategory(arrayMasbate, masbateText);
}
function provinceMisamisOccidental() {
  let arrayMisamisOccidental = [
    "Aloran",
    "Baliangao",
    "Bonifacio",
    "Calamba",
    "Clarin",
    "Concepcion",
    "Don Victoriano Chiongbian (Don Mariano Marcos)",
    "Jimenez",
    "Lopez Jaena",
    "Oroquieta City (Capital)",
    "Ozamiz City",
    "Panaon",
    "Plaridel",
    "Sapang Dalaga",
    "Sinacaban",
    "Tangub City",
    "Tudela",
  ];

  let misamisOccidentalText = [...arrayMisamisOccidental];
  displayCityCategory(arrayMisamisOccidental, misamisOccidentalText);
}
function provinceMisamisOriental() {
  let arrayMisamisOriental = [
    "Alubijid",
    "Balingasag",
    "Balingoan",
    "Binuangan",
    "Claveria",
    "El Salvador City",
    "Gingoog City",
    "Gitagum",
    "Initao",
    "Jasaan",
    "Kinoguitan",
    "Lagonglong",
    "Laguindingan",
    "Libertad",
    "Lugait",
    "Magsaysay",
    "Manticao",
    "Medina",
    "Naawan",
    "Opol",
    "Salay",
    "Sugbongcogon",
    "Tagoloan",
    "Talisayan",
    "Villanueva",
  ];

  let misamisOrientalText = [...arrayMisamisOriental];
  displayCityCategory(arrayMisamisOriental, misamisOrientalText);
}
function provinceMountain() {
  let arrayMountain = [
    "Barlig",
    "Bauko",
    "Besao",
    "Bontoc (Capital)",
    "Natonin",
    "Paracelis",
    "Sabangan",
    "Sadanga",
    "Sagada",
    "Tadian",
  ];

  let mountainText = [...arrayMountain];
  displayCityCategory(arrayMountain, mountainText);
}
function provinceNegrosOccidental() {
  let arrayNegrosOccidental = [
    "Bacolod City (Capital)",
    "Bago",
    "Binalbagan",
    "Cadiz City",
    "Calatrava",
    "Candoni",
    "Cauayan",
    "Enrique B. Magalona (Saravia)",
    "Escalante City",
    "Himamaylan City",
    "Hinigaran",
    "Hinoba-an",
    "Ilog",
    "Isabela",
    "Kabankalan City",
    "La Carlota City",
    "La Castellana",
    "Manapla",
    "Moises Padilla (Magallon)",
    "Murcia",
    "Pontevedra",
    "Pulupandan",
    "Sagay City",
    "Salvador Benedicto",
    "San Carlos City",
    "San Enrique",
    "Silay City",
    "Sipalay City",
    "Talisay City",
    "Toboso",
    "Valladolid",
    "Victorias City",
  ];

  let negrosOccidentalText = [...arrayNegrosOccidental];
  displayCityCategory(arrayNegrosOccidental, negrosOccidentalText);
}
function provinceNegrosOriental() {
  let arrayNegrosOriental = [
    "Amlan",
    "Ayungon",
    "Bacong",
    "Bais City",
    "Basay",
    "Bayawan City",
    "Bindoy",
    "Canlaon City",
    "Dauin",
    "Dumaguete City (Capital)",
    "Guihulngan City",
    "Jimalalud",
    "La Libertad",
    "Mabinay",
    "Manjuyod",
    "Pamplona",
    "San Jose",
    "Santa Catalina",
    "Siaton",
    "Sibulan",
    "Tanjay City",
    "Tayasan",
    "Valencia",
    "Vallehermoso",
    "Zamboanguita",
  ];

  let negrosOrientalText = [...arrayNegrosOriental];
  displayCityCategory(arrayNegrosOriental, negrosOrientalText);
}
function provinceNorthernSamar() {
  let arrayNorthernSamar = [
    "Allen",
    "Biri",
    "Bobon",
    "Capul",
    "Catarman (Capital)",
    "Catubig",
    "Gamay",
    "Laoang",
    "Lapinig",
    "Las Navas",
    "Lavezares",
    "Lope de Vega",
    "Mapanas",
    "Mondragon",
    "Palapag",
    "Pambujan",
    "Rosario",
    "San Antonio",
    "San Isidro",
    "San Jose",
    "San Roque",
    "San Vicente",
    "Silvino Lobos",
    "Victoria",
  ];

  let northernSamarText = [...arrayNorthernSamar];
  displayCityCategory(arrayNorthernSamar, northernSamarText);
}
function provinceNuevaEcija() {
  let arrayNuevaEcija = [
    "Aliaga",
    "Bongabon",
    "Cabiao",
    "Carranglan",
    "Cuyapo",
    "Gabaldon (Bitulok & Sabani)",
    "Gapan City",
    "General Mamerto Natividad",
    "General Tinio (Papaya)",
    "Guimba",
    "Jaen",
    "Laur",
    "Licab",
    "Llanera",
    "Lupao",
    "Nampicuan",
    "Palayan City (Capital)",
    "Pantabangan",
    "Peñaranda",
    "Quezon",
    "Rizal",
    "San Antonio",
    "San Isidro",
    "San Jose City",
    "San Leonardo",
    "Santa Rosa",
    "Santo Domingo",
    "Talavera",
    "Talugtug",
    "Zaragoza",
  ];

  let nuevaEcijaText = [...arrayNuevaEcija];
  displayCityCategory(arrayNuevaEcija, nuevaEcijaText);
}
function provinceNuevaVizcaya() {
  let arrayNuevaVizcaya = [
    "Alfonso Castañeda",
    "Ambaguio",
    "Aritao",
    "Bagabag",
    "Bambang",
    "Bayombong (Capital)",
    "Diadi",
    "Dupax del Norte",
    "Dupax del Sur",
    "Kasibu",
    "Kayapa",
    "Quezon",
    "Santa Fe",
    "Solano",
    "Villaverde",
  ];

  let nuevaVizcayaText = [...arrayNuevaVizcaya];
  displayCityCategory(arrayNuevaVizcaya, nuevaVizcayaText);
}
function provinceOccidentalMindoro() {
  let arrayOccidentalMindoro = [
    "Abra de Ilog",
    "Calintaan",
    "Looc",
    "Lubang",
    "Magsaysay",
    "Mamburao (Capital)",
    "Paluan",
    "Rizal",
    "Sablayan",
    "San Jose",
    "Santa Cruz",
  ];

  let occidentalMindoroText = [...arrayOccidentalMindoro];
  displayCityCategory(arrayOccidentalMindoro, occidentalMindoroText);
}
function provinceOrientalMindoro() {
  let arrayOrientalMindoro = [
    "Baco",
    "Bansud",
    "Bongabong",
    "Bulalacao (San Pedro)",
    "Calapan City (Capital)",
    "Gloria",
    "Mansalay",
    "Naujan",
    "Pinamalayan",
    "Pola",
    "Puerto Galera",
    "Roxas",
    "San Teodoro",
    "Socorro",
    "Victoria",
  ];

  let orientalMindoroText = [...arrayOrientalMindoro];
  displayCityCategory(arrayOrientalMindoro, orientalMindoroText);
}
function provincePalawan() {
  let arrayPalawan = [
    "Aborlan",
    "Agutaya",
    "Araceli",
    "Balabac",
    "Bataraza",
    "Brooke's Point",
    "Busuanga",
    "Cagayancillo",
    "Coron",
    "Culion",
    "Cuyo",
    "Dumaran",
    "El Nido",
    "Kalayaan",
    "Linapacan",
    "Magsaysay",
    "Narra",
    "Puerto Princesa (Capital)",
    "Quezon",
    "Rizal",
    "Roxas",
    "San Vicente",
    "Sofronio Española",
    "Taytay",
  ];

  let palawanText = [...arrayPalawan];
  displayCityCategory(arrayPalawan, palawanText);
}
function provincePampanga() {
  let arrayPampanga = [
    "Angeles City",
    "Apalit",
    "Arayat",
    "Bacolor",
    "Candaba",
    "Floridablanca",
    "Guagua",
    "Lubao",
    "Mabalacat City",
    "Macabebe",
    "Magalang",
    "Masantol",
    "Mexico",
    "Minalin",
    "Porac",
    "San Fernando (Capital)",
    "San Luis",
    "San Simon",
    "Santa Ana",
    "Santa Rita",
    "Santo Tomas",
    "Sasmuan",
  ];

  let pampangaText = [...arrayPampanga];
  displayCityCategory(arrayPampanga, pampangaText);
}
function provincePangasinan() {
  let arrayPangasinan = [
    "Agno",
    "Aguilar",
    "Alcala",
    "Anda",
    "Asingan",
    "Balungao",
    "Bani",
    "Basista",
    "Bautista",
    "Bayambang",
    "Binalonan",
    "Binmaley",
    "Bolinao",
    "Bugallon",
    "Burgos",
    "Calasiao",
    "Dagupan City",
    "Dasol",
    "Infanta",
    "Labrador",
    "Laoac",
    "Lingayen (Capital)",
    "Mabini",
    "Malasiqui",
    "Manaoag",
    "Mangaldan",
    "Mangatarem",
    "Mapandan",
    "Natividad",
    "Pozorrubio",
    "Rosales",
    "San Carlos City",
    "San Fabian",
    "San Jacinto",
    "San Manuel",
    "San Nicolas",
    "San Quintin",
    "Santa Barbara",
    "Santa Maria",
    "Santo Tomas",
    "Sison",
    "Sual",
    "Tayug",
    "Umingan",
    "Urbiztondo",
    "Villasis",
  ];

  let pangasinanText = [...arrayPangasinan];
  displayCityCategory(arrayPangasinan, pangasinanText);
}
function provinceQuezon() {
  let arrayQuezon = [
    "Agdangan",
    "Alabat",
    "Atimonan",
    "Buenavista",
    "Burdeos",
    "Calauag",
    "Candelaria",
    "Catanauan",
    "Dolores",
    "General Luna",
    "General Nakar",
    "Guinayangan",
    "Gumaca",
    "Infanta",
    "Jomalig",
    "Lopez",
    "Lucban",
    "Lucena City (Capital)",
    "Macalelon",
    "Mauban",
    "Mulanay",
    "Padre Burgos",
    "Pagbilao",
    "Panukulan",
    "Patnanungan",
    "Perez",
    "Pitogo",
    "Plaridel",
    "Polillo",
    "Quezon",
    "Real",
    "Sampaloc",
    "San Andres",
    "San Antonio",
    "San Francisco (Aurora)",
    "San Narciso",
    "Sariaya",
    "Tagkawayan",
    "Tiaong",
    "Unisan",
  ];

  let quezonText = [...arrayQuezon];
  displayCityCategory(arrayQuezon, quezonText);
}
function provinceQuirino() {
  let arrayQuirino = [
    "Aglipay",
    "Cabarroguis (Capital)",
    "Diffun",
    "Maddela",
    "Nagtipunan",
    "Saguday",
  ];

  let quirinoText = [...arrayQuirino];
  displayCityCategory(arrayQuirino, quirinoText);
}
function provinceRizal() {
  let arrayRizal = [
    "Angono",
    "Antipolo City (Capital)",
    "Baras",
    "Binangonan",
    "Cainta",
    "Cardona",
    "Jalajala",
    "Morong",
    "Pililla",
    "Rodriguez (Montalban)",
    "San Mateo",
    "Tanay",
    "Taytay",
    "Teresa",
  ];

  let rizalText = [...arrayRizal];
  displayCityCategory(arrayRizal, rizalText);
}
function provinceRomblon() {
  let arrayRomblon = [
    "Alcantara",
    "Banton",
    "Cajidiocan",
    "Calatrava",
    "Concepcion",
    "Corcuera",
    "Ferrol",
    "Looc",
    "Magdiwang",
    "Odiongan",
    "Romblon (Capital)",
    "San Agustin",
    "San Andres",
    "San Fernando",
    "San Jose",
    "Santa Fe",
    "Santa Maria",
  ];

  let romblonText = [...arrayRomblon];
  displayCityCategory(arrayRomblon, romblonText);
}
function provinceSamar() {
  let arraySamar = [
    "Almagro",
    "Basey",
    "Calbayog City",
    "Calbiga",
    "Catbalogan City (Capital)",
    "Daram",
    "Gandara",
    "Hinabangan",
    "Jiabong",
    "Marabut",
    "Matuguinao",
    "Motiong",
    "Pagsanghan",
    "Paranas (Wright)",
    "Pinabacdao",
    "San Jorge",
    "San Jose de Buan",
    "San Sebastian",
    "Santa Margarita",
    "Santa Rita",
    "Santo Niño",
    "Tagapul-an",
    "Talalora",
    "Tarangnan",
    "Villareal",
    "Zumarraga",
  ];

  let samarText = [...arraySamar];
  displayCityCategory(arraySamar, samarText);
}
function provinceSarangani() {
  let arraySarangani = [
    "Alabel (Capital)",
    "Glan",
    "Kiamba",
    "Maasim",
    "Maitum",
    "Malapatan",
    "Malungon",
  ];

  let saranganiText = [...arraySarangani];
  displayCityCategory(arraySarangani, saranganiText);
}
function provinceSiquijor() {
  let arraySiquijor = [
    "Enrique Villanueva",
    "Larena",
    "Lazi",
    "Maria",
    "San Juan",
    "Siquijor (Capital)",
  ];

  let siquijorText = [...arraySiquijor];
  displayCityCategory(arraySiquijor, siquijorText);
}
function provinceSorsogon() {
  let arraySorsogon = [
    "Barcelona",
    "Bulan",
    "Bulusan",
    "Casiguran",
    "Castilla",
    "Donsol",
    "Gubat",
    "Irosin",
    "Juban",
    "Magallanes",
    "Matnog",
    "Pilar",
    "Prieto Diaz",
    "Santa Magdalena",
    "Sorsogon City (Capital)",
  ];

  let sorsogonText = [...arraySorsogon];
  displayCityCategory(arraySorsogon, sorsogonText);
}
function provinceSouthCotabato() {
  let arraySouthCotabato = [
    "Banga",
    "General Santos City",
    "Koronadal City (Capital)",
    "Lake Sebu",
    "Norala",
    "Polomolok",
    "Santo Niño",
    "Surallah",
    "T'Boli",
    "Tampakan",
    "Tantangan",
    "Tupi",
  ];

  let southCotabatoText = [...arraySouthCotabato];
  displayCityCategory(arraySouthCotabato, southCotabatoText);
}
function provinceSouthernLeyte() {
  let arraySouthernLeyte = [
    "Anahawan",
    "Bontoc",
    "Hinunangan",
    "Hinundayan",
    "Libagon",
    "Liloan",
    "Limasawa",
    "Maasin City (Capital)",
    "Macrohon",
    "Malitbog",
    "Padre Burgos",
    "Pintuyan",
    "Saint Bernard",
    "San Francisco",
    "San Juan (Cabalian)",
    "San Ricardo",
    "Silago",
    "Sogod",
    "Tomas Oppus",
  ];

  let southernLeyteText = [...arraySouthernLeyte];
  displayCityCategory(arraySouthernLeyte, southernLeyteText);
}
function provinceSultanKudarat() {
  let arraySultanKudarat = [
    "Bagumbayan",
    "Columbio",
    "Esperanza",
    "Isulan (Capital)",
    "Kalamansig",
    "Lambayong (Mariano Marcos)",
    "Lebak",
    "Lutayan",
    "Palimbang",
    "President Quirino",
    "Senator Ninoy Aquino",
    "Tacurong City",
  ];

  let sultanKudaratText = [...arraySultanKudarat];
  displayCityCategory(arraySultanKudarat, sultanKudaratText);
}
function provinceSulu() {
  let arraySulu = [
    "Banguingui (Tongkil)",
    "Hadji Panglima Tahil (Marunggas)",
    "Indanan",
    "Jolo (Capital)",
    "Kalingalan Caluang",
    "Lugus",
    "Luuk",
    "Maimbung",
    "Old Panamao",
    "Omar",
    "Pandami",
    "Panglima Estino (New Panamao)",
    "Pangutaran",
    "Parang",
    "Pata",
    "Patikul",
    "Siasi",
    "Talipao",
    "Tapul",
  ];

  let suluText = [...arraySulu];
  displayCityCategory(arraySulu, suluText);
}
function provinceSurigaoDelNorte() {
  let arraySurigaoDelNorte = [
    "Alegria",
    "Bacuag",
    "Burgos",
    "Claver",
    "Dapa",
    "Del Carmen",
    "General Luna",
    "Gigaquit",
    "Mainit",
    "Malimono",
    "Pilar",
    "Placer",
    "San Benito",
    "San Francisco (Anao-Aon)",
    "San Isidro",
    "Santa Monica",
    "Sison",
    "Socorro",
    "Surigao City (Capital)",
    "Tagana-an",
    "Tubod",
  ];

  let surigaoDelNorteText = [...arraySurigaoDelNorte];
  displayCityCategory(arraySurigaoDelNorte, surigaoDelNorteText);
}
function provinceSurigaoDelSur() {
  let arraySurigaoDelSur = [
    "Barobo",
    "Bayabas",
    "Bislig City",
    "Cagwait",
    "Cantilan",
    "Carmen",
    "Carrascal",
    "Cortes",
    "Hinatuan",
    "Lanuza",
    "Lianga",
    "Lingig",
    "Madrid",
    "Marihatag",
    "San Agustin",
    "San Miguel",
    "Tagbina",
    "Tago",
    "Tandag City (Capital)",
  ];

  let surigaoDelSurText = [...arraySurigaoDelSur];
  displayCityCategory(arraySurigaoDelSur, surigaoDelSurText);
}
function provinceTarlac() {
  let arrayTarlac = [
    "Anao",
    "Bamban",
    "Camiling",
    "Capas",
    "Concepcion",
    "Gerona",
    "La Paz",
    "Mayantoc",
    "Moncada",
    "Paniqui",
    "Pura",
    "Ramos",
    "San Clemente",
    "San Jose",
    "San Manuel",
    "Santa Ignacia",
    "Tarlac City (Capital)",
    "Victoria",
  ];

  let tarlacText = [...arrayTarlac];
  displayCityCategory(arrayTarlac, tarlacText);
}
function provinceTawiTawi() {
  let arrayTawiTawi = [
    "Bongao (Capital)",
    "Languyan",
    "Mapun (Cagayan de Tawi-Tawi)",
    "Panglima Sugala",
    "Sapa-Sapa",
    "Sibutu",
    "Simunul",
    "Sitangkai",
    "South Ubian",
    "Tandubas",
    "Turtle Islands",
  ];

  let tawiTawiText = [...arrayTawiTawi];
  displayCityCategory(arrayTawiTawi, tawiTawiText);
}
function provinceZambales() {
  let arrayZambales = [
    "Botolan",
    "Cabangan",
    "Candelaria",
    "Castillejos",
    "Iba (Capital)",
    "Masinloc",
    "Olongapo City (Independent)",
    "Palauig",
    "San Antonio",
    "San Felipe",
    "San Marcelino",
    "San Narciso",
    "Santa Cruz",
    "Subic",
  ];

  let zambalesText = [...arrayZambales];
  displayCityCategory(arrayZambales, zambalesText);
}
function provinceZamboangaDelNorte() {
  let arrayZamboangaDelNorte = [
    "Baliguian",
    "Dapitan City",
    "Dipolog City (Capital)",
    "Godod",
    "Gutalac",
    "Jose Dalman (Ponot)",
    "Kalawit",
    "Katipunan",
    "La Libertad",
    "Labason",
    "Liloy",
    "Manukan",
    "Mutia",
    "Piñan (New Piñan)",
    "Polanco",
    "Pres. Manuel A. Roxas",
    "Rizal",
    "Salug",
    "Sergio Osmeña Sr.",
    "Siayan",
    "Sibuco",
    "Sibutad",
    "Sindangan",
    "Siocon",
    "Sirawai",
    "Tampilisan",
  ];

  let zamboangaDelNorteText = [...arrayZamboangaDelNorte];
  displayCityCategory(arrayZamboangaDelNorte, zamboangaDelNorteText);
}
function provinceZamboangaDelSur() {
  let arrayZamboangaDelSur = [
    "Aurora",
    "Bayog",
    "Dimataling",
    "Dinas",
    "Dumalinao",
    "Dumingag",
    "Guipos",
    "Josefina",
    "Kumalarang",
    "Labangan",
    "Lakewood",
    "Lapuyan",
    "Mahayag",
    "Margosatubig",
    "Midsalip",
    "Molave",
    "Pitogo",
    "Ramon Magsaysay",
    "San Miguel",
    "San Pablo",
    "Sominot",
    "Tabina",
    "Tambulig",
    "Tigbao",
    "Tukuran",
    "Vincenzo A. Sagun (Dimataling)",
  ];

  let zamboangaDelSurText = [...arrayZamboangaDelSur];
  displayCityCategory(arrayZamboangaDelSur, zamboangaDelSurText);
}
