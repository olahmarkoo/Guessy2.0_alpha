let interval = null;
let timer = 123;
let copy = [];
let playDeck = [];
let currentTask = -1;
let audioCountdown = new Audio("sounds/countdown.mp3");
let audioStart = new Audio("sounds/start.mp3");
let audioPass = new Audio("sounds/pass.mp3");
let audioCorrect = new Audio("sounds/correct.mp3");
let score = 0;
let gameOn = true;
const playedTasksElement = document.getElementById("playedTasks");

//-----------------------------------------------

function openMenuCloseStart() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("menuPage").style.display = "flex";
}

function openEndCloseGame() {
    document.getElementById("gamePage").style.display = "none";
    document.getElementById("endPage").style.display = "flex";
    clearInterval(interval);
    let scoreText = "Pontszám: "
    document.getElementById("finalScore").textContent = scoreText.concat(score);
    score = 0;
}

function openMenuCloseGame() {
    document.getElementById("gamePage").style.display = "none";
    document.getElementById("menuPage").style.display = "flex";
    stopCountdownSound();
    clearInterval(interval);
}

function openMenuCloseEnd() {
    document.getElementById("endPage").style.display = "none";
    document.getElementById("menuPage").style.display = "flex";
    const playedTasksElement = document.getElementById("playedTasks");
    playedTasksElement.textContent = "Lejárt az idő:";
}

function itIsAPass() {
    const playedTasksElement = document.getElementById("playedTasks");
    let temp = playedTasksElement.textContent.concat("\n🥲  ",playDeck[currentTask]);
    playedTasksElement.textContent = temp;
    document.getElementById("alertPass").style.display = "flex";
    playPassSound();
    timer -= 2;
    getNewTask();
}

function itIsACorrect() {
    const playedTasksElement = document.getElementById("playedTasks");
    let temp = playedTasksElement.textContent.concat("\n🥰  ",playDeck[currentTask]);
    playedTasksElement.textContent = temp;
    document.getElementById("alertCorrect").style.display = "flex";
    playCorrectSound();
    timer += 4;
    score++;
    getNewTask();
}

function shuffle(arr) {
    let result = [];
    let i = null;
    let temp = -1;

    do{
        i = Math.floor(Math.random() * arr.length);
        result.push(arr[i]);
        temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp;
        arr.shift();
    }
    while(arr.length > 1);
    result.push(arr[0]);

    return result;
}

function getNewTask() {
    currentTask++;
    const taskElement = document.getElementById("task");
    taskElement.textContent = playDeck[currentTask];
}

function playCountdownSound() {
    audioCountdown.play();
}

// Leállítás egy eseményből
function stopCountdownSound() {
    audioCountdown.pause();      // megállítja a lejátszást
    audioCountdown.currentTime = 0; // visszaállítja az elejére
}

function playStartSound() {
    audioStart.play();
}

// Leállítás egy eseményből
function stopStartSound() {
    audioStart.pause();      // megállítja a lejátszást
    audioStart.currentTime = 0; // visszaállítja az elejére
}

function playPassSound() {
    audioPass.play();
}

// Leállítás egy eseményből
function stopPassSound() {
    audioPass.pause();      // megállítja a lejátszást
    audioPass.currentTime = 0; // visszaállítja az elejére
}

function playCorrectSound() {
    audioCorrect.play();
}

// Leállítás egy eseményből
function stopCorrectSound() {
    audioCorrect.pause();      // megállítja a lejátszást
    audioCorrect.currentTime = 0; // visszaállítja az elejére
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

//-----------------------------------------------

function openGameCloseMenu(topic) {
    score = 0;
    //copy = [...topics[topic]];
    playDeck = shuffle([...topics[topic]]);
    currentTask = -1;
    playStartSound();
    timer = 123;
    getNewTask();

    const countdownElement = document.getElementById("countdown");
    countdownElement.textContent = timer;
    document.getElementById("menuPage").style.display = "none";

    if (interval !== null) {
        clearInterval(interval);
    }

    interval = setInterval(() => {
    timer--;
    if (timer <= 120) {
        document.getElementById("gamePage").style.display = "flex";
        stopStartSound();
    }

    document.getElementById("alertCorrect").style.display = "none";
    document.getElementById("alertPass").style.display = "none";
    countdownElement.textContent = timer;

      if (timer == 9) {
        do{
        playCountdownSound();
        }while(timer <= 9 && timer < 0 && audioCountdown.currentTime == 0);
        }

      if (timer <= 0) {
        openEndCloseGame();
        }
    },1000);
}

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", (event) => {
    // landscape helyzetben az előre-hátra döntést a gamma adja
    document.getElementById("gamma").textContent = event.gamma.toFixed(1);
    let gamma = event.gamma; // -90 .. +90 között

    if (gameOn && window.getComputedStyle(document.getElementById("gamePage")).display == "flex") {
        if (gamma < 45 && gamma > 0) {  // jobbra dől (pl. előre)
            score++;
            itIsACorrect();
            gameOn = false; // várjuk vissza a középállást
        } else if (gamma > -45 && gamma < 0) { // balra dől (pl. hátra)
            score--;
            itIsAPass();
           gameOn = false;
        }
    }

        // ha visszatért középre (kb. egyenesben van), újra engedélyezünk számlálást
    if (gamma > 75 || gamma < -75) {
        stopPassSound();
        stopCorrectSound();
        gameOn = true;
        }
    });
} else {
    alert("A készülék nem támogatja a giroszkópot.");
    }

const clubs = ["Real Madrid","Barcelona","Bilbao","Sevilla","Atlético Madrid","West Ham","Tottenham","Manchester United","Liverpool",
  "Chelsea","Arsenal","Manchester City","Hoffenheim","Union Berlin","Freiburg","Mainz","Leverkusen","Bayern München","Borussia Dortmund",
  "Red Bull Salzburg","RB Leipzig","Juventus","AC Milan","Bournemouth","Sunderland","Aston Villa",
  "Internazionale","AS Roma","Fiorentina","Lazio","Parma","Torino","Napoli","PSG","Olympique Marseille","Ajax","Feyenoord",
  "Porto","Benfica","Braga","Sporting","Galatasaray","Fenerbahce","Besiktas","Celtic",
  "Rangers","Boca Juniors","River Plate","Flamengo","Santos","Corinthians",
  "LA Galaxy","Al-Ahli","Al-Hilal","Al-Nassr","Wolverhampton","Bayern München","Borussia Dortmund",
  "Al-Sadd","Zamalek","Al Ahly","Shakhtar Donetsk","Dynamo Kyiv","Spartak Moscow",
  "CSKA Moscow","Zenit","PSV Eindhoven","Everton","Fulham","Newcastle",
  "Anderlecht","Club Brugge","Basel","Grasshopper","Servette","Young Boys","Rosenborg","Molde",
  "Dinamo Zagreb","Partizan","Crvena Zvezda","Panathinaikos","Olympiakos",
  "AEK Athens","Betis","Valencia","Getafe","Espanyol","Budapest Honvéd FC","Ferencvárosi TC","MTK","Újpest FC","DVSC","Paksi FC","ETO Fc Győr"];
//---------------------------------------------------------------------------------------------------
const animals = ["oroszlán","tigris","puma","gepard","jaguár","leopárd","hiéna","farkas","róka","sakál",
    "medve","jegesmedve","panda","koala","víziló","elefánt","zsiráf","orrszarvú","bivaly","szarvas",
    "őz","antilop","gazella","zebra","ló","szamár","teve","láma","alpaka","jak",
    "bárány","juh","kecske","tehén","bika","borjú","malac","vaddisznó","nyúl","mezei nyúl",
    "hörcsög","tengerimalac","patkány","egér","mókus","csincsilla","prérikutya","delfin","bálna","kardszárnyú delfin",
    "cápa","rája","angolna","tonhal","pisztráng","lazac","ponty","harcsa","süllő","keszeg",
    "kígyó","piton","kobra","vipera","boákígyó","krokodil","aligátor","teknős","kaméleon","gekkó",
    "leguán","varánusz","béka","varangy","szalamandra","gőte","denevér","bagoly","sas","ölyv",
    "keselyű","héja","papagáj","ara","kakadú","tukán","kanári","veréb","fecske","gólya",
    "kakukk","harkály","cinege","galamb","gerle","páva","pulyka","tyúk","kakas","csirke",
    "liba","kacsa","hattyú","pingvin","siraly","pelikán","darú","flamingó","strucc","emu",
    "kivi","kolibri","szitakötő","méh","darázs","dongó","pillangó","lepke","bogár","szkarabeusz",
    "katicabogár","szarvasbogár","cserebogár","szöcske","tücsök","sáska","hangya","termit","csótány","poloska",
    "pók","tarantula","skorpió","rák","homár","garnélarák","polip","tintahal","medúza","csiga",
    "kagyló","osztriga","korall","földigiliszta","pióca","csigaház","vakond","sün","vidra",
    "hód","pézsmapocok","fóka","rozmár","dromedár","kenguru","vombat","erszényes ördög","koati","tatú",
    "pangolin","lajhár","armadillo","tapír","okapi","kudu","nyest","görény","hermelin","menyét",
    "prérifarkas","mosómedve","oposszum","oroszlánfóka","kardszarvú antilop","muskátli antilop","kék bálna","narvál","beluga","csimpánz",
    "gorilla","orangután","bonobó","makákó","mandrill","pávián","gyűrűsfarkú maki","gibbon","siamang"];
//---------------------------------------------------------------------------------------------------
const f1 = [
  "Lewis Hamilton","Michael Schumacher","Ayrton Senna","Alain Prost","Sebastian Vettel",
  "Fernando Alonso","Max Verstappen","Niki Lauda","Jackie Stewart","Juan Manuel Fangio",
  "Jim Clark","Kimi Raikkonen","Nigel Mansell",
  "Charles Leclerc","Carlos Sainz","Lando Norris","George Russell","Sergio Perez",
  "Circuit de Monaco","Monza","Silverstone","Suzuka","Hungaroring","Imola",
  "Ferrari","Mercedes","McLaren","Red Bull Racing","Williams","Lotus","Renault",
  "Pole pozíció","Boxkiállás","Safety Car","Virtual Safety Car","Sárga zászló","Piros zászló",
  "DRS","Intermediate gumi","Esőgumi","Száraz gumi (slick)","Rajtrács",
  "Gyors kör","Év újonca","Világbajnoki pont","Dobogó",
  "Kockás zászló","Team orders","Undercut","Overcut",
  "Pezsgős locsolás","Csapatrádió","Kiállási stratégia"];
//---------------------------------------------------------------------------------------------------
const cars = ["Audi","BMW","Mercedes-Benz","Volkswagen","Porsche","Opel","Ford","Chevrolet",
  "Cadillac","Dodge","Chrysler","Jeep","Tesla","Rivian","Lucid","Toyota","Honda",
  "Nissan","Mazda","Mitsubishi","Subaru","Suzuki","Hyundai","Kia","Daewoo","Genesis",
  "Lexus","Infiniti","Acura","Ferrari","Lamborghini","Maserati","Fiat","Alfa Romeo",
  "Peugeot","Renault","Citroen","DS Automobiles","Bugatti","Bentley","Rolls-Royce",
  "Aston Martin","Lotus","McLaren","Koenigsegg","Pagani","Volvo","Saab","Scania",
  "Skoda","Seat","Dacia","Mini","Land Rover","Range Rover","Jaguar","Tata","Mahindra",
  "Proton","Perodua","Chery","Geely","BYD","Nio","Great Wall","Lifan","Zotye",
  "SsangYong","Isuzu","Hino","MAN","Iveco","Foton","Piaggio","Smart","Maybach",
  "Pontiac","Oldsmobile","Saturn","Hummer","Plymouth","Studebaker","DeLorean",
  "AMC","Packard","Moszkvics","Lada","Trabant","Wartburg","Zastava","Tatra","UAZ",
  "GAZ","KAMAZ","ZIL","Daihatsu","Scion","Holden","HSV","Vauxhall"];
//---------------------------------------------------------------------------------------------------
const locals = ["Puskás Ferenc","Hajós Alfréd","Gesztesi Károly","Kulka János","Örkény István","Márai Sándor",
  "Radnóti Miklós","Ady Endre","Karinthy Frigyes","József Attila","Bartók Béla","Kodály Zoltán",
  "Erkel Ferenc","Liszt Ferenc","Zoltán Kocsis","Müller Péter","Hofi Géza","Rúzsa Magdi",
  "Korda György","Ákos","Péterfy Bori","Gáspár Laci","ByeAlex","Ganxsta Zolee","Majka",
  "Király Viktor","Radics Gigi","Berki Krisztián","Fekete Pákó","Samu Balázs","Korda György Jr.",
  "Tóth Gabi","Vastag Csaba","Hien","Rúzsa Magdi","Mészáros Árpád Zsolt","Kapitány Iván",
  "Kasza Tibi","Sebestyén Balázs","Vad Katalin","Till Attila","Stohl András",
  "Fluor Tomi","Lotfi Begi","Curtis","Puzsér Róbert","Dancsó Péter",
  "Istenes Bence","Lakatos Márk","Cooky","Rákóczi Ferenc","Pachmann Péter",
  "Varga Viktor","Caramel","Dér Heni","Csonka András","Sas József",
  "Kiss Ádám","Bödőcs Tibor","Aranyosi Péter","Kovács András Péter (KAP)","Fábry Sándor",
  "Pataki Ági","Liptai Claudia","Ördög Nóra","Gáspár Győző","Gáspár Evelin",
  "Hajdú Péter","Nacsa Olivér","Till Atilla"];
//---------------------------------------------------------------------------------------------------
const items = ["asztal","szék","ágy","kanapé","lámpa","polc","szekrény","fiók","ajtó","ablak",
    "tükör","szőnyeg","függöny","kép","óra","lábtörlő","parfüm","cipő","kalap","sál",
    "kesztyű","öv","táska","hátizsák","konyhai kés","villa","kanál","tányér","pohár","bögre",
    "teáscsésze","edény","fazék","serpenyő","sütő","mikró","hűtő","fagyasztó","tűzhely","mosógép",
    "szárítógép","vasaló","porszívó","laptop","telefon","tablet","tévé","projektor","hangszóró","fülhallgató",
    "mikrofon","billentyűzet","egér","nyomtató","fax","kamera","videokamera","drón","baba","játékautó",
    "báb","labda","foci labda","kosárlabda","teniszlabda","pingpong ütő","golyó","játékfigura","lego","kirakó",
    "kártya","sakk","dama","domino","játékkocka","ceruza","toll","radír","hegyező","füzet",
    "könyv","tankönyv","iskolatáska","füzetborító","tolltartó","írószer","naptár","jegyzetfüzet","terítő","párna",
    "papucs","cipőfűző","óraszíj","gyertya","gyufa","villanykörte","izzó","lámpabúra","lámpaernyő","lámpaállvány",
    "szerszámkészlet","kalapács","csavarhúzó","fogó","csavar","anyacsavar","csavarkulcs","fűrész","fűrészlap","csiszoló",
    "festék","ecset","henger","tolltartó","írólap","papírzsebkendő","törölköző","fürdőlepedő","szappan","sampon",
    "fogkefe","fogkrém","kéztörlő","szájvíz","borotva","borotvahab","dezodor","hajkefe","fésű","hajgumi",
    "parafadugó","borospohár","sörösüveg","kólaüveg","tea","kávé","cukor","liszt","tojás","tej",
    "vaj","sajt","felvágott","kenyér","zsemle","keksz","csokoládé","cukorka","gyümölcs","alma",
    "banán","narancs","körte","eper","málna","szeder","ribizli","dinnye","sárgadinnye","görögdinnye",
    "sajtreszelő","konyharuha","szivacs","mosogatószer","konyhai mérleg","fakanál","tányéralátét","edényfedő","gyümölcsprés","tortaszeletelő"];
//---------------------------------------------------------------------------------------------------
const heroes = ["Superman","Batman","Csodanő","Villám","Zöld Lámpás","Acélember",
  "Zöld Íjász","Shazam","Aquaman","Fekete Kanári","Cyborg","Supergirl",
  "Batgirl","Robin","Éjjeliőr","Macskanő","Harley Quinn","Joker","Lex Luthor",
  "Halálcsapás","Fekete Villám","Kék Bogár","Booster Gold","Tűzvihar","Műanyag Ember","Atom",
  "Vasember","Hulk","Thor","Fekete Özvegy","Sólyomszem","Doktor Strange",
  "Pókember","Hangya","Fekete Párduc","Amerika Kapitány","Deadpool",
  "Rozsomák","Professor X","Magneto","Jean Grey","Ciklon","Küklopsz","Bestia",
  "Vadóc","Kártyás","Vízió","Skarlát Boszorkány","Higanyszál","Tél Katonája",
  "Sólyom","Csillagúr","Groot","Rakéta Mosómedve","Gamora","Drax","Nebula","Mantis",
  "Thanos","Loki","Galactus","Venom","Doktor Octopus","Homokember","Zöld Manó","Mysterio","Kingpin",
  "Fenegyerek","Megtorló","Ezüst Utazó","Ultron","Doctor Doom","Vörös Koponya","Holdlovag","She-Hulk",
  "Mystique","Jégember","Éjjáró","Colossus",];
//---------------------------------------------------------------------------------------------------
const cities = ["Budapest","Debrecen","Szeged","Pécs","Győr","Miskolc","Nyíregyháza","Kecskemét",
  "Sopron","Szombathely","Veszprém","Eger","Esztergom","Kaposvár","Zalaegerszeg",
  "Székesfehérvár","London","Manchester","Liverpool","Birmingham","Edinburgh",
  "Dublin","Belfast","Cardiff","Párizs","Marseille","Lyon","Toulouse","Nizza","Bordeaux",
  "Berlin","München","Hamburg","Frankfurt","Köln","Stuttgart","Düsseldorf",
  "Róma","Milánó","Nápoly","Firenze","Velence","Torino","Palermo","Pisa","Bologna",
  "Madrid","Barcelona","Sevilla","Valencia","Bilbao","Granada","Lisszabon","Porto",
  "Athén","Thesszaloniki","Isztambul","Ankara","Kappadókia","Moszkva","Szentpétervár",
  "Varsó","Krakkó","Gdańsk","Wrocław","Prága","Brno","Bécs","Salzburg","Zürich",
  "Genf","Bern","Stockholm","Göteborg","Oslo","Bergen","Koppenhága","Aarhus",
  "Helsinki","Tallinn","Riga","Vilnius","Brüsszel","Antwerpen","Amszterdam","Rotterdam",
  "Hága","Luxembourg","New York","Los Angeles","Chicago","San Francisco","Miami",
  "Washington D.C.","Las Vegas","Boston","Philadelphia","Seattle","San Diego","Houston",
  "Dallas","Toronto","Vancouver","Montreál","Ottawa","Mexikóváros","Cancún","Rio de Janeiro",
  "São Paulo","Buenos Aires","Lima","Bogotá","Caracas","Havanna","Santiago","Fokváros",
  "Johannesburg","Kairó","Marrákes","Casablanca","Nairobi","Dar es Salaam",
  "Tokió","Osaka","Kiotó","Nagoja","Jokohama","Szöul","Busan","Peking","Sanghaj",
  "Hongkong","Sencsen","Szingapúr","Kuala Lumpur","Bangkok","Jakarta","Manila",
  "Sydney","Melbourne","Perth","Brisbane","Auckland","Wellington","Delhi","Mumbai",
  "Bangalore","Csennai","Karacsi","Iszlámábád","Dubaj","Abu-Dzabi","Doha","Rijád",
  "Teherán","Jeruzsálem","Amman","Bagdad"];
//---------------------------------------------------------------------------------------------------
const series = ["Trónok harca","A Vaják (The Witcher)","A mandalóri","Vikingek",
  "Az utolsó királyság","Sötétség (Dark)","Az Esernyő Akadémia","Az űr (The Expanse)",
  "Csillagkapu","Csillagközi romboló",
  "Elveszve az űrben","Stranger Things","Árnyék és csont",
  "Andor","Obi-Wan Kenobi","Loki","WandaVízió","Sólyomszem","Holdlovag","Miss Marvel","She-Hulk",
  "Breaking Bad","Better Call Saul","Peaky Blinders","Fargo","A törvény emberei",
  "La Casa de Papel","The Boys","Mindhunter",
  "Narcos","A kártyavár (House of Cards)","13 okom volt",
  "Az OA","A nyolc érzék","A 100","Szökés","Kemény motorosok",
  "A szolgálólány meséje","Csernobil","Elit alakulat","A Csendes-óceán","Maffiózók",
  "Mad Men – Reklámőrültek","Gengszterkorzó","Drót (The Wire)","Ozark",
  "Inni és élni hagyni","Dexter","Sherlock","Doktor House","Westworld",
  "Jóbarátok","Így jártam anyátokkal","Agymenők","Grace klinika","A Simpson család",
  "Family Guy","South Park","Rick és Morty","Bűbájos boszorkák","Született feleségek",
  "Szívek szállodája","Bridgerton","A vezércsel","Emily Párizsban","Gossip Girl",
  "Hazug csajok társasága","Szex és New York","Szexoktatás",
  "Orange Is the New Black","Eufória","Hatalmas kis hazugságok",
  "You – Te","Wednesday","Az ifjú ügyvédnő",
  "Dawson és a haverok",
  "Zöld íjász","A Villám","Supergirl","Gotham","Titánok","Doom Patrol",
  "Smallville","Buffy, a vámpírok réme","Lucifer","Odaát","Teen Wolf",
  "Riverdale","Vámpírnaplók"];
//---------------------------------------------------------------------------------------------------
const games = [  "Super Mario","Sonic the Hedgehog","Tetris","Pac-Man","Space Invaders","Pong",
  "Donkey Kong","Street Fighter","Mortal Kombat","Tekken","The Legend of Zelda",
  "Metin2","World of Warcraft","Diablo","Starcraft","Counter-Strike","Half-Life",
  "Portal","Minecraft","Roblox","Fortnite","League of Legends","Dota 2","Overwatch",
  "Valorant","PUBG","Call of Duty","Battlefield","Medal of Honor","GTA V","Red Dead Redemption",
  "Skyrim","Elder Scrolls Online","Fallout","Mass Effect","Dragon Age","Witcher 3",
  "Cyberpunk 2077","Assassin's Creed","Far Cry","Watch Dogs","Resident Evil","Silent Hill",
  "Final Fantasy","Kingdom Hearts","Pokémon","Animal Crossing","Splatoon","Kirby",
  "Metroid","Castlevania","Dark Souls","Demon’s Souls","Bloodborne","Elden Ring",
  "Sekiro","Monster Hunter","Persona","Shin Megami Tensei","Yakuza","Nioh",
  "Banjo-Kazooie","Crash Bandicoot","Spyro","Rayman","Halo","Gears of War"];
//---------------------------------------------------------------------------------------------------
const beauty = ["arckrém","testápoló","sampon","balzsam","dezodor","parfüm","arcpakolás","smink",
  "rúzs","szempillaspirál","szemhéjpúder","körömlakk","körömreszelő","arcmaszk","bőrradír",
  "fogkrém","fogkefe","hajkefe","fésű","hajlakk","hajformázó","naptej","arcmasszázs","szérum",
  "hajolaj","testvaj","arcvíz","tonik","szemránckrém","hidratáló krém",
  "manikűr","pedikűr","műköröm","szempilla hosszabbítás","szemöldök szedés","gyantázás",
  "arckezelés","fodrász","kozmetikus","sminktetoválás","borotválás","selfie előtti smink",
  "estélyi ruha","koktélruha","kis fekete ruha","szoknya","blúz","top","farmer",
  "kabát","zakó","öltöny","ing","póló","pulóver","ruha",
  "magassarkú","sportcipő","csizma","szandál","táska","retikül","öv","sál",
  "kalap","sapka","napszemüveg","nyaklánc","fülbevaló","gyűrű","karkötő","óra"];
//---------------------------------------------------------------------------------------------------
const movies = [  // Akció
  "Die Hard – Drágán add az életed", "Halálos iramban", "John Wick", 
  "Terminátor 2 – Az ítélet napja", "Predátor", "A sötét lovag", "Mad Max – A harag útja",
  "Indiana Jones és az elveszett frigyláda fosztogatói", "Karib-tenger kalózai", 
  "Jurassic Park", "Avatar", "Csillagok háborúja – Új remény", 
  "Bosszúállók: Végjáték", "A gyűrűk ura: A Gyűrű Szövetsége",
  "Másnaposok", "Amerikai pite", "Nagyon nagy Ő", "Ace Ventura – Állati nyomozó", 
  "Reszkessetek, betörők!", "Nagyfater elszabadul", "Hogyan veszítsünk el egy pasit 10 nap alatt",
  "Titanic", "Szerelmünk lapjai", "Bridget Jones naplója", 
  "Igazából szerelem", "Pretty Woman – Micsoda nő!", "La La Land",
  "Forrest Gump", "Remény rabjai", "A zöld mérföld", "Schindler listája", 
  "Kramer kontra Kramer", "Egy csodálatos elme", "A nyolcadik utas: a Halál",
  "Ben Hur", "Gladiátor", "A király beszéde", "12 év rabszolgaság", 
  "Get Out – Tűnj el!", "Mindenhol, mindenkor, mindenki",
  "Casablanca", "Elfújta a szél", "Aranypolgár", "A Keresztapa", "Taxisofőr", 
  "Apokalipszis most", "Volt egyszer egy vadnyugat",
  "Hetedik", "Harcosok klubja", "Eredet", "Interstellar – Csillagok között",
  "Fekete hattyú", "Shutter Island – Viharsziget", "A bárányok hallgatnak",
  "Ragyogás", "A kör", "Az – It", "Halloween – A rémület éjszakája",
  "Széttörve", "Fűrész", "Paranormal Activity", "Szellemekkel suttogó"];
//---------------------------------------------------------------------------------------------------
const stars = ["Michael Jackson","Madonna","Elvis Presley","Prince","Whitney Houston","Frank Sinatra",
    "Marilyn Monroe","Audrey Hepburn","Brad Pitt","Angelina Jolie","Tom Cruise","Leonardo DiCaprio",
    "Johnny Depp","Robert Downey Jr.","Chris Hemsworth","Scarlett Johansson","Jennifer Aniston",
    "Jennifer Lopez","Justin Bieber","Beyoncé","Rihanna","Taylor Swift","Kanye West","Elton John",
    "David Beckham","Cristiano Ronaldo","Lionel Messi","Usain Bolt","Serena Williams","Roger Federer",
    "Tiger Woods","Barack Obama","Donald Trump","Oprah Winfrey","Bill Gates","Steve Jobs","Mark Zuckerberg",
    "Elon Musk","Morgan Freeman","Denzel Washington","Will Smith","Emma Watson","Daniel Radcliffe",
    "Rupert Grint","Tom Hanks","Harrison Ford","Chris Evans","Gal Gadot","Henry Cavill","Ben Affleck",
    "Robert Pattinson","Kristen Stewart","Emma Stone","Ryan Gosling","Meryl Streep","Cate Blanchett",
    "Nicole Kidman","Hugh Jackman","Anne Hathaway","Keanu Reeves","Matt Damon","George Clooney"];
//---------------------------------------------------------------------------------------------------
const countries = ["Magyarország","Szlovákia","Románia","Ukrajna","Szerbia","Horvátország","Szlovénia","Ausztria",
  "Németország","Franciaország","Olaszország","Spanyolország","Portugália","Görögország",
  "Lengyelország","Csehország","Szlovákia","Litvánia","Lettország","Észtország","Finnország",
  "Svédország","Norvégia","Dánia","Izland","Belgium","Hollandia","Luxemburg","Svájc","Liechtenstein",
  "Monaco","Andorra","San Marino","Málta","Vatikán","Írország","Egyesült Királyság",
  "USA","Kanada","Mexikó","Brazília","Argentína","Chile","Uruguay","Peru","Kolumbia",
  "Venezuela","Bolívia","Paraguay","Ecuador","Honduras","Guatemala","Costa Rica","Panama",
  "Kuba","Dominikai Köztársaság","Jamaica","Trinidad és Tobago","Haiti","Bahama-szigetek",
  "Kína","Japán","Dél-Korea","Észak-Korea","India","Pakisztán","Banglades","Nepál",
  "Bhután","Mongólia","Thaiföld","Vietnam","Laosz","Kambodzsa","Malajzia","Indonézia",
  "Fülöp-szigetek","Szingapúr","Brunei","Srí Lanka","Ausztrália","Új-Zéland",
  "Szaúd-Arábia","Irán","Irak","Izrael","Jordánia","Szíria","Libanon","Törökország",
  "Egyiptom","Líbia","Tunézia","Marokkó","Algéria","Dél-afrikai Köztársaság","Etiópia",
  "Nigéria","Ghána","Kenya","Tanzánia","Uganda","Zimbabwe","Zambia","Mozambik",
  "Botswana","Namíbia","Mali","Szenegál","Kamerun","Kongó","Csád","Sudán",
  "Oroszország","Kazahsztán","Üzbegisztán","Türkmenisztán","Kirgizisztán","Tádzsikisztán"];
//---------------------------------------------------------------------------------------------------
const fairytails = ["Hófehérke és a hét törpe","Hamupipőke","Csipkerózsika","A kis hableány","A szépség és a szörnyeteg",
    "Piroska és a farkas","Béka királyfi","Aladdin és a csodalámpa","Ali baba és a negyven rabló","Szindbád",
    "Rút kiskacsa","Borsószem királykisasszony","Csizmás kandúr","Rapunzel","Aranyhaj és a nagy gubanc",
    "Jancsi és Juliska","A három kismalac","A farkas és a hét kecskegida","Brémai muzsikusok","Óz a csodák csodája",
    "Pinokkió","Micimackó","Tigris és Malacka","Alice Csodaországban","Tücsök és hangya",
    "Kőleves","Ludas Matyi","Egyszer volt Budán kutyavásár","A kiskakas gyémánt félkrajcárja","A só",
    "Mazsola és Tádé","Pom Pom meséi","Frakk, a macskák réme","Mézga család","Mekk Elek",
    "Vuk","Szaffi","Lolka és Bolka","Bolek és Lolek","No, megállj csak!","Hupikék törpikék",
    "Gyalogkakukk","Tom és Jerry","Donald kacsa","Mickey egér","Goofy","Kacsamesék",
    "Bambi","Dumbo","A dzsungel könyve","101 kiskutya","Aranyhaj","Jégvarázs",
    "Oroszlánkirály","Herkules","Mulan","Tarzan","Eszeveszett birodalom","Moana",
    "Encanto","Szörny Rt.","Verdák","Toy Story","Némó nyomában",
    "Szenilla nyomában","L’ecsó","Fel!","Coco","Agymanók",
    "Shrek","Shrek 2","Shrek a vége, fuss el véle","Csizmás, a kandúr","Kung Fu Panda",
    "Madagaszkár","Pingvinek a Madagaszkárból","Így neveld a sárkányodat","Turbo","Zootropolis",
    "Horton","Minyonok","Gru","Gru 2","Gru, a szupergonosz",
    "Hupikék törpikék és a falu titka","Garfield","Scooby-Doo","Flintstone család","Jetson család",
    "SpongyaBob","Ben 10","Danny, a szellemirtó","Avatar: Aang legendája","Korra legendája",
    "Dragon Ball","Dragon Ball Z","Sailor Moon","Pokémon","Digimon",
    "Yu-Gi-Oh!","Bakugan","Naruto","One Piece","Fairy Tail","Bogyó és Babóca",
    "Kérem a következőt! (Doktor Bubó)","Tévémaci","Kőműves Kelemen","Mátyás király meséi",
    "Égig érő paszuly"];
//---------------------------------------------------------------------------------------------------
const brands = ["McDonald's","Starbucks","Nike","Adidas","Puma","Reebok","Rolex","Apple","Microsoft","Intel",
    "Samsung","Sony","Netflix","Amazon","Google","Facebook","Twitter","Coca-Cola","Pepsi","Red Bull",
    "Lego","Ikea","Chanel","Gucci","Prada","Louis Vuitton","Hermès","Zara","H&M","Uniqlo","Levi's",
    "Canon","Nikon","Nestlé","Kellogg's","Oreo","Milka","Lindt","Heineken","Budweiser","Jack Daniel's",
    "Absolut","Guinness","Lipton","Nescafé","Monster Energy","Sprite","Fanta","Evian","San Pellegrino",
    "Apple Music","Spotify","Disney","Pixar","Warner Bros","Universal","Paramount","PlayStation","Xbox",
    "Nintendo","Dell","HP","Lenovo","Asus","Acer","Tesla","Boeing","Airbus","Emirates","Qatar Airways",
    "Lufthansa","British Airways","Delta Airlines","American Airlines","Hilton","Marriott","Airbnb","Booking.com",
    "Uber","Lyft","Visa","Mastercard","PayPal","Adidas Originals","Converse","Vans","North Face","Patagonia",
    "Under Armour","Estee Lauder","L’Oréal","Dior","Maybelline","MAC","Sephora","Garnier","Colgate","Oral-B",
    "Gillette","Philips","Bosch","Whirlpool","Dyson","GoPro","Tiffany & Co.","Cartier","Swarovski"];
//---------------------------------------------------------------------------------------------------
const greatplaces = ["Eiffel-torony","Louvre","Notre-Dame","Mont Saint-Michel","Versailles","Sacré-Cœur",
    "Colosseum","Római Fórum","Pantheon","Trevi-kút","Pisa tornya","Vatikán","Szent Péter-bazilika",
    "Sistine Chapel","St. Mark’s Basilica","Dózse-palota","Akropolisz","Parthenon","Delphi",
    "Szfinx","Piramisok","Luxor templom","Karnak templom","Királyok völgye","Stonehenge",
    "Big Ben","Londoni tower","Buckingham Palace","London Eye","Westminster Abbey",
    "Tower Bridge","Cambridge","Oxford","Edinburgh Castle","Loch Ness","Neuschwanstein kastély",
    "Brandenburgi kapu","Berlin fal maradványai","Reichstag","Sagrada Familia","Park Güell",
    "Casa Batlló","La Pedrera","Alhambra","Mezquita","Prága óváros","Károly híd",
    "Hradčany","Wawel","Krakkói óváros","Bécsi Stephansdom","Hofburg","Schönbrunn palota",
    "Melk apátság","Salzburg vár","Hallstatt","Luzerni híd","Bern óváros","Genfi-tó",
    "Niagara-vízesés","Grand Canyon","Yellowstone","Yosemite","Mount Rushmore","Szabadság szobor",
    "Times Square","Central Park","Hollywood","Brooklyn híd","Disneyland","Universal Studios","Golden Gate híd",
    "Las Vegas Strip","Empire State Building","Burj Khalifa","Sheikh Zayed mecset","Petra",
    "Jeruzsálem óváros","Machu Picchu","Megváltó Krisztus","Copacabana","Iguazú-vízesés",
    "Galápagos-szigetek","Victoria-vízesés","Himeji kastély",
    "Tokyo torony","Shibuya Kereszteződés","Sydney Operaház","Harbour híd",
    "Uluru","Ayers Rock","Rotorua geotermikus terület","Wellington Parlament","Auckland Sky Tower",
    "Hanoi óváros","Ha Long-öböl","Angkor Wat","Bayon templom","Ta Prohm","Borobudur",
    "Fuji hegy","Kiyosumi kert","Osaka vár","Sultan Ahmed mecset","Kapalı bazár","Hagia Sophia","Topkapi palota","Kék mecset",
    "Kappadókia","Göreme","Bosphorus híd",
    "Sharm el-Sheikh","Gízai piramisok","Kairói múzeum","Luxor","Aswan","Abu Simbel",
    "Taj Mahal","Jaipur palota","Arany templom",
    "Kilimandzsáró","Serengeti Nemzeti Park","Ngorongoro kráter","Table Mountain",
    "Robben-sziget","Szahara","Marokkói bazár","Casablanca","Essaouira"];
//---------------------------------------------------------------------------------------------------
const greatpeople = ["Nagy Sándor","Julius Caesar","Augustus","Néró","Traianus","Konstantin",
    "Attila","Dzsingisz Kán","IV. Béla","Mátyás király","Oroszlánszívű Richárd",
    "Fülöp király","VIII. Henrik","I. Erzsébet","Napóleon","XVI. Lajos",
    "Marie Antoinette","George Washington","Abraham Lincoln","Benjamin Franklin",
    "Thomas Jefferson","Theodore Roosevelt","Franklin D. Roosevelt","Winston Churchill",
    "Joszif Sztálin","Lenin","Marx Károly","Hitler","Mussolini","Mao Ce-tung",
    "Ho Si Minh","Nelson Mandela","Mahatma Gandhi","Indira Gandhi","X. Pius pápa",
    "II. János Pál pápa","XVI. Benedek pápa","Angela Merkel","Charles de Gaulle",
    "Simón Bolívar","Che Guevara","Fidel Castro","Pol Pot","Kim Ir Szen","Kim Dzsongil","Kim Dzsongun",
    "Arisztotelész","Platón","Szókratész","Galilei","Newton","Einstein",
    "Marie Curie","Nikola Tesla","Leonardo da Vinci","Michelangelo","Rembrandt",
    "Van Gogh","Picasso","Mozart","Beethoven","Bach","Liszt Ferenc",
    "Chopin","Tolsztoj","Dosztojevszkij","Shakespeare","Goethe","Homérosz",
    "Salamon király","Nagy Károly","Justinianus császár","I. Szent István",
    "II. Rákóczi Ferenc","Hunyadi János","Zrínyi Miklós","Bethlen Gábor",
    "Kolumbusz Kristóf","Amerigo Vespucci","Marco Polo","Vasco da Gama","Magellán",
    "Amundsen","Cook kapitány","Tutankhamon","II. Ramszesz","Cleopatra",
    "Szulejmán szultán","Atatürk","Sándor cár","Nagy Katalin",
    "I. Péter cár","Nagyezsda Krupszkaja","Florence Nightingale",
    "Jane Austen","Mary Shelley","Frida Kahlo","Sigmund Freud",
    "Charles Darwin","James Watt","Edison","Wright fivérek","Alexander Graham Bell",
    "Hannibál Barkasz","Scipio Africanus","Szun Ce","Csao Csao","Tokugawa Iejaszu",
    "Oda Nobunaga","Toyotomi Hidejosi","Minamoto no Joritomo","William Wallace","Robert the Bruce",
    "Jan Zizka","Oliver Cromwell","Jeanne d’Arc","Jean Lafitte","Simón Bolívar",
    "José de San Martín","Emiliano Zapata","Pancho Villa","Toussaint Louverture","Gavrilo Princip",
    "Georgij Zsukov","Erwin Rommel","Bernard Montgomery","Dwight D. Eisenhower","Douglas MacArthur",
    "George S. Patton","Horatio Nelson","Arthur Wellesley (Wellington hercege)","Francisco Franco","Subutai"];
//---------------------------------------------------------------------------------------------------
const myth = ["Zeusz","Héra","Poszeidón","Athéné","Apollón","Artemisz","Aresz","Hefaisztosz","Hermész","Afrodité",
    "Hádész","Dionüszosz","Krónosz","Gaia","Jupiter","Juno","Neptunusz","Mars","Minerva","Venus",
    "Vulcanus","Mercurius","Odin","Thor","Loki","Freya","Baldur","Tyr","Heimdall","Frigg",
    "Valhalla","Mjölnir","Yggdrasil","Ra","Ízisz","Ozirisz","Hórusz","Anubisz","Bastet","Sekhmet",
    "Cerberus","Minotaurusz","Kentaur","Szatír","Medúza","Hydra","Szirén","Chiméra","Pegazus","Főnix",
    "Szkülla","Kharübdisz","Labirintus","Olympus","Tartarusz","Elysium","Aranygyapjú",
    "Argonauták","Pandóra szelencéje","Excalibur","Avalon","Arthur király","Merlin","Camelot",
    "Sir Lancelot","Guinevere","Mordred","Pan","Nike","Nemesis","Thanatos","Hypnos","Hippogriff",
    "Hippokampusz","Tiamat","Gilgames","Ishtar","Marduk","Utnapishtim","Anu",
    "Achilleusz","Odüsszeusz","Herkules","Perseusz","Theseus","Jason",
    "Medusa fej","Gorgók","Sfinx","Griff","Ceridwen","Morrigan",
    "Dagda","Cú Chulainn","Fafnir","Fenrir","Níðhöggr","Hel",
    "Jörmungandr","Surtr","Amaterasu","Susanoo","Tsukuyomi","Raijin",
    "Indra","Vishnu","Shiva","Káli","Garuda","Hanuman"];
//---------------------------------------------------------------------------------------------------
const what = ["infláció","defláció","szubjektív","objektív","kompetencia","szinergia","szkepticizmus",
    "probléma","analízis","szabályozás","inkasszó","okkupáció","faktor","hipotézis",
    "paradigma","szociális","pszeudonim","metafora","szimptóma","diagnózis","terápia",
    "rehabilitáció","pszichózis","depresszió","ödipusz komplexus","alakváltozás","kognitív",
    "intuitív","szcenárió","sztrájk","mobilizáció","koherencia","elmélet","gyakorlati",
    "szubkultúra","elit","kapacitás","projekció","demokrácia","autokrácia","hegemonia",
    "totalitárius","országgyűlés","konferencia","protocol","analóg","digitális","szenzáció",
    "szubjektivitás","objektivitás","perspektíva","szituáció","verifikáció","kritérium",
    "kontroll","adaptáció","interpretáció","implementáció","infrastruktúra","koalíció",
    "migráció","szabvány","referencia","szindróma"];
//---------------------------------------------------------------------------------------------------
const events = ["Karácsony","Újév","Húsvét","Nagypéntek","Húsvét hétfő","Halloween","Mindenszentek",
    "Október 23","Március 15","Szent Patrik nap","Kínai újév","Hanuka","Ramadán","Diwali",
    "Hanami (cseresznyefa virágzás)","Oktoberfest","Thanksgiving","Függetlenség napja (USA)",
    "Vízkereszt","Szent Miklós nap","Valentin nap","Anyák napja","Apák napja","Farsang",
    "Advent","Pünkösd","Föld napja","Víz világnapja","Madarak és fák napja","Színház világnapja",
    "Foci világbajnokság","Olimpia","Eurovíziós Dalfesztivál","Szüreti fesztivál","Borfesztivál",
    "Szent Iván éj","Nyári napforduló","Téli napforduló","Családi nap","Egészség világnapja",
    "Könyv világnapja","Múzeumok éjszakája","Karnevál","Tavaszi napéjegyenlőség","Őszi napéjegyenlőség",
    "Húsvéti tojáskeresés","Szent István nap","Új kenyér ünnepe",
    "Pamplonai bikafuttatás","Rio karnevál","Velencei karnevál","Mardi Gras (New Orleans)",
    "Cinco de Mayo","Piñata (mexikói hagyomány)","Día de los Muertos (Halottak napja, Mexikó)",
    "La Tomatina (paradicsomdobálás, Spanyolország)","Holi fesztivál (India, színek ünnepe)",
    "Burning Man (Nevada, USA)","Coachella fesztivál","Glastonbury fesztivál","San Fermín ünnep",
    "Kanamara Matsuri (Japán, „acél fallosz” fesztivál)","Songkran (thai vízi fesztivál)",
    "Obon fesztivál (Japán)","Carnaval de Barranquilla (Kolumbia)","Inti Raymi (Nap ünnepe, Peru)",
    "Juhannus (Finnország midsummer)","Bastille nap (Franciaország, július 14.)",
    "Guy Fawkes éj (Anglia, november 5.)","Hogmanay (Skócia újév)","Ganesh Chaturthi (India)",
    "Kwanzaa","Eid al-Fitr (Ramadán vége)","Eid al-Adha (Áldozati ünnep)",
    "Nowruz (perzsa újév)","Harvest Festival (Kína, holdünnep)","Valborg (Svédország tavaszköszöntő)",
    "Loi Krathong (Thaiföld, lámpás fesztivál)"];
//-------------------------------------------------------------------------------------------------
const addictions = ["Jack Daniels","Lucky Strike","Pálinka","Whiskey","Vodka","Rum","Gin","Cognac","Sör","Borkóstolás",
    "Félkarú rabló","Black Jack","Rulett","Poker","Kártyázás","Lottó","Szerencsejáték","Koktélok","Bár",
    "Vibrátor","Misszionárius","Pornó","Strip klub","Kokain","Marihuána",
    "Dohányzás","Cigaretta","Szivar","E-cigaretta","Füves cigi","Hash","Rush","Energiaital",
    "Red Bull","Játékfüggőség","Online casino","Kocsma","Buli","Fesztivál","Részegség","Italozós este","Betyárkodás",
    "Csavargás","Éjszakai élet","Bulizás","Diszkó",
    "Shopoholizmus","Online vásárlás","Gyorsétterem","Csokoládé",
    "Netflix binge","Instagram","TikTok","Videójáték",
    "FPS lövöldözés","MMORPG","Extreme sportok","Autóverseny",
    "Motorozás","Drift","Dohányzás közben kávé",
    "Másnaposság","Rossz pickup line","Exnek írogatás éjjel","Karaoke","Csókolózás idegennel","Éjjeli kajarendelés","Kebab hajnalban",
    "McDrive 3-kor","Csocsó a kocsmában","Darts verseny részegen","Bealvás a klubbban",
    "Bealvás taxiban","Elveszett telefon","Részeg hívás anyunak","Selfie részegen",
    "Bulikép csoportba","Csínytevés","Haver elhagyása buliban","Fellépés a színpadra",
    "Sörpong","Flip cup játék","Ivós társasjáték","Táncpárbaj",
    "Lánybúcsú","Legénybúcsú","Csíny a szállodában","Éjjeli skinny dipping"];

var topics = {};
topics["clubs"] = [...clubs];
topics["animals"] = [...animals];
topics["f1"] = [...f1];
topics["cars"] = [...cars];
topics["locals"] = [...locals];
topics["heroes"] = [...heroes];
topics["items"] = [...items];
topics["cities"] = [...cities];
topics["series"] = [...series];
topics["games"] = [...games];
topics["beauty"] = [...beauty];
topics["movies"] = [...movies];
topics["stars"] = [...stars];
topics["countries"] = [...countries];
topics["fairytails"] = [...fairytails];
topics["brands"] = [...brands];
topics["greatpeople"] = [...greatpeople];
topics["greatplaces"] = [...greatplaces];
topics["myth"] = [...myth];
topics["what"] = [...what];
topics["events"] = [...events];
topics["addictions"] = [...addictions];
