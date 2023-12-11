
function loginPage(){
    window.location.href = 'login.html';
}

function signupPage(){
    window.location.href = 'signUp.html';
}

// Generate Options
let provinceCategories = document.getElementById('province');
let cityCategories = document.getElementById('city');

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
    "Zamboanga del Sur"
  ];

let arrayText = [...arrayValue];

for (let i = 0; i < arrayValue.length; i++){
    let num1 = arrayValue[i];
    let num2 = arrayText[i];
    generateProvinceCategory(num1, num2);
}

function generateProvinceCategory(value, text){
    let option = document.createElement('option');
    option.value = value;
    option.text = text;
    provinceCategories.add(option)
}
// Generate Options


// Update Second Select Box
function updateSecondDropdown(){

    let provinceValue = document.getElementById('province').value;

    switch (provinceValue) {
    case 'Abra':
      provinceAbra();
      break;

    case 'Agusan del Norte':
      provinceAgusanDelNorte();
      break;

    case 'Agusan del Sur':
      provinceAgusanDelSur();
      break;

    case 'Aklan':
      provinceAklan();
      break;

    case 'Albay':
      provinceAlbay();
      break;

    case 'Antique':
      provinceAntique();
      break;

    case 'Apayao':
      provinceApayao();
      break;

    case 'Aurora':
      provinceAurora();
      break;

    case 'Basilan':
      provinceBasilan();
      break;

    case 'Bataan':
      provinceBataan();
      break;

    case 'Batanes':
      provinceBatanes();
      break;

    case 'Batangas':
      provinceBatangas();
      break;

    case 'Benguet':
      provinceBenguet();
      break;

    case 'Biliran':
      provinceBiliran();
      break;

    case 'Bohol':
      provinceBohol();
      break;

    case 'Bukidnon':
      provinceBukidnon();
      break;

    case 'Bulacan':
      provinceBulacan();
      break;

    case 'Cagayan':
      provinceCagayan();
      break;

    case 'Camarines Norte':
      provinceCamarinesNorte();
      break;

    case 'Camarines Sur':
      provinceCamarinesSur();
      break;

    case 'Camiguin':
      provinceCamiguin();
      break;

    case 'Capiz':
      provinceCapiz();
      break;

    case 'Catanduanes':
      provinceCatanduanes();
      break;

    case 'Cavite':
      provinceCavite();
      break;

    case 'Cebu':
      provinceCebu();
      break;

    case 'Compostela Valley':
      provinceCompostelaValley();
      break;

    case 'Cotabato':
      provinceCotabato();
      break;

    case 'Davao de Oro':
      provinceDavaoDeOro();
      break;

    case 'Davao del Norte':
      provinceDavaoDelNorte();
      break;

    case 'Davao del Sur':
      provinceDavaoDelSur();
      break;

    case 'Davao Occidental':
      provinceDavaoOccidental();
      break;

    case 'Davao Oriental':
      provinceDavaoOriental();
      break;

    case 'Dinagat Islands':
      provinceDinagatIslands();
      break;

    case 'Eastern Samar':
      provinceEasternSamar();
      break;

    case 'Guimaras':
      provinceGuimaras();
      break;

    case 'Ifugao':
      provinceIfugao();
      break;

    case 'Ilocos Norte':
      provinceIlocosNorte();
      break;

    case 'Ilocos Sur':
      provinceIlocosSur();
      break;

    case 'Iloilo':
      provinceIloilo();
      break;

    case 'Isabela':
      provinceIsabela();
      break;

    case 'Kalinga':
      provinceKalinga();
      break;

    case 'La Union':
      provinceLaUnion();
      break;

    case 'Laguna':
      provinceLaguna();
      break;

    case 'Lanao del Norte':
      provinceLanaoDelNorte();
      break;

    case 'Lanao del Sur':
      provinceLanaoDelSur();
      break;

    case 'Leyte':
      provinceLeyte();
      break;

    case 'Maguindanao':
      provinceMaguindanao();
      break;

    case 'Marinduque':
      provinceMarinduque();
      break;

    case 'Masbate':
      provinceMasbate();
      break;

    case 'Misamis Occidental':
      provinceMisamisOccidental();
      break;

    case 'Misamis Oriental':
      provinceMisamisOriental();
      break;

    case 'Mountain Province':
      provinceMountainProvince();
      break;

    case 'Negros Occidental':
      provinceNegrosOccidental();
      break;

    case 'Negros Oriental':
      provinceNegrosOriental();
      break;

    case 'Northern Samar':
      provinceNorthernSamar();
      break;

    case 'Nueva Ecija':
      provinceNuevaEcija();
      break;

    case 'Nueva Vizcaya':
      provinceNuevaVizcaya();
      break;

    case 'Occidental Mindoro':
      provinceOccidentalMindoro();
      break;

    case 'Oriental Mindoro':
      provinceOrientalMindoro();
      break;

    case 'Palawan':
      provincePalawan();
      break;

    case 'Pampanga':
      provincePampanga();
      break;

    case 'Pangasinan':
      provincePangasinan();
      break;

    case 'Quezon':
      provinceQuezon();
      break;

    case 'Quirino':
      provinceQuirino();
      break;

    case 'Rizal':
      provinceRizal();
      break;

    case 'Romblon':
      provinceRomblon();
      break;

    case 'Samar':
      provinceSamar();
      break;

    case 'Sarangani':
      provinceSarangani();
      break;

    case 'Siquijor':
      provinceSiquijor();
      break;

    case 'Sorsogon':
      provinceSorsogon();
      break;

    case 'South Cotabato':
      provinceSouthCotabato();
      break;

    case 'Southern Leyte':
      provinceSouthernLeyte();
      break;

    case 'Sultan Kudarat':
      provinceSultanKudarat();
      break;

    case 'Sulu':
      provinceSulu();
      break;

    case 'Surigao del Norte':
      provinceSurigaoDelNorte();
      break;

    case 'Surigao del Sur':
      provinceSurigaoDelSur();
      break;

    case 'Tarlac':
      provinceTarlac();
      break;

    case 'Tawi-Tawi':
      provinceTawiTawi();
      break;

    case 'Zambales':
      provinceZambales();
      break;

    case 'Zamboanga del Norte':
      provinceZamboangaDelNorte();
      break;

    case 'Zamboanga del Sur':
      provinceZamboangaDelSur();
      break;
    }

}

function generateCityCategory(value, text){
    let option = document.createElement('option');
    option.value = value;
    option.text = text;
    cityCategories.add(option);
}

function displayCityCategory(array, text){
    let selectBoxCity = document.getElementById('city');
    selectBoxCity.innerHTML = '';

    for (let i = 0; i < array.length; i++){
        let num1 = array[i];
        let num2 = text[i];
        generateCityCategory(num1, num2);
    }
}

// Update Second Select Box


function provinceAbra (){
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
        "Villaviciosa"
    ];
    let abraText = [...arrayAbra];

    displayCityCategory(arrayAbra, abraText);
}
function provinceAgusanDelNorte(){
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
        "Tubay"
      ];
    let agusanText = [...arrayAgusan];

    displayCityCategory(arrayAgusan, agusanText);
}
function provinceAgusanDelSur(){
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
        "Veruela"
      ];

    let delSurText = [...arrayDelSur];

    displayCityCategory(arrayDelSur, delSurText);

}
function provinceAklan(){
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
        "Numancia"
    ];

    let aklanText = [...arrayAklan];

    displayCityCategory(arrayAklan, aklanText);
}
function provinceAlbay(){
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
        "Santo Domingo (Libog)"
      ];

    let albayText = [...arrayAlbay];

    displayCityCategory(arrayAlbay, albayText);
}
function provinceAntique(){
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
        "Valderrama"
      ];
    
    let antiqueText = [...arrayAntique];
      
    displayCityCategory(arrayAntique, antiqueText);
}
function provinceApayao(){
    let arrayApayao = [
        "Calanasan (Bayag)",
        "Conner",
        "Flora",
        "Kabugao (Capital)",
        "Luna",
        "Pudtol",
        "Santa Marcela"
    ];
    
    let apayaoText = [...arrayApayao];
      
    displayCityCategory(arrayApayao, apayaoText);
}
function provinceAurora(){
    let arrayAurora = [
        "Baler (Capital)",
        "Casiguran",
        "Dilasag",
        "Dinalungan",
        "Dingalan",
        "Dipaculao",
        "Maria Aurora"
    ];

    let auroraText = [...arrayAurora];

    displayCityCategory(arrayAurora, auroraText);

}

function provinceBasilan(){
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
        "Ungkaya Pukan"
    ];
    let basilanText = [...arrayBasilan];
    
    displayCityCategory(arrayBasilan, basilanText);
}
function provinceBataan(){
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
        "Samal"
    ];
    let bataanText = [...arrayBataan];
    displayCityCategory(arrayBataan, bataanText);
}
function provinceBatanes(){
    let arrayBatanes = [
        "Basco (Capital)",
        "Itbayat",
        "Ivana",
        "Mahatao",
        "Sabtang",
        "Uyugan"
    ];
    let batanesText = [...arrayBatanes];
    displayCityCategory(arrayBatanes, batanesText);
}
function provinceBatangas(){
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
        "Tuy"
    ];

    let batangasText = [...arrayBatangas];
    displayCityCategory(arrayBatangas, batangasText);
}
function provinceBenguet(){
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
        "Tublay"
      ];
    
    let benguetText = [...arrayBenguet];
    displayCityCategory(arrayBenguet, benguetText);

}
function provinceBiliran(){
    let arrayBiliran = [
        "Almeria",
        "Biliran (Capital)",
        "Cabucgayan",
        "Caibiran",
        "Culaba",
        "Kawayan",
        "Maripipi",
        "Naval"
    ];
    
    let biliranText = [...arrayBiliran];
    displayCityCategory(arrayBiliran, biliranText);

}
function provinceBohol(){
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
        "Valencia"
      ];
      
    
    let boholText = [...arrayBohol];
    displayCityCategory(arrayBohol, boholText);

}
function provinceBukidnon(){
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
        "Valencia City"
      ];
      
      let bukidnonText = [...arrayBukidnon];
      displayCityCategory(arrayBukidnon, bukidnonText);
}
function provinceBulacan(){
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
        "Santa Maria"
      ];
      
    
    let bulacanText = [...arrayBulacan];
    displayCityCategory(arrayBulacan, bulacanText);

}