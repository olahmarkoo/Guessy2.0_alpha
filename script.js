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
    stopCountdownSound();
    const playedTasksElement = document.getElementById("playedTasks");
    let temp = playedTasksElement.textContent.concat("\n🥰  ",playDeck[currentTask]);
    playedTasksElement.textContent = temp;
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
    if (timer <= 6) {
        restartCountdownSound();
    }
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
    if (timer <= 6) {
        restartCountdownSound();
    }
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

function restartCountdownSound(){
    audioCountdown.pause();
    audioCountdown.currentTime = (timer - 9) * -1;
    playCountdownSound()
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
        playCountdownSound();
      }

      if (timer <= 0) {
        openEndCloseGame();
        }
    },1000);
}

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", (event) => {
    // landscape helyzetben az előre-hátra döntést a gamma adja
    //document.getElementById("gamma").textContent = event.gamma.toFixed(1);
    let gamma = event.gamma; // -90 .. +90 között

    if (gameOn && window.getComputedStyle(document.getElementById("gamePage")).display == "flex") {
        if (gamma < 45 && gamma > 0) {  // jobbra dől (pl. előre)
            itIsACorrect();
            gameOn = false; // várjuk vissza a középállást
        } else if (gamma > -45 && gamma < 0) { // balra dől (pl. hátra)
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

const emotions = [
  "boldogság", "öröm", "megelégedettség", "büszkeség", "nyugalom", "izgatottság",
  "hála", "szeretet", "rajongás", "remény", "bizalom", "megkönnyebbülés",
  "szomorúság", "harag", "félelem", "csalódottság", "szorongás", "bűntudat",
  "irigység", "féltékenység", "tehetetlenség", "kimerültség", "magány", "fájdalom",
  "éhség", "szomjúság", "álmosság", "fáradtság", "stressz", "feszültség",
  "megnyugvás", "nehézláb érzés", "szédülés", "fájdalomérzet",
  "eufória", "extázis", "vágy", "szenvedély", "gyász", "melankólia",
  "pánik", "undor", "kétségbeesés", "zavarodottság", "tétovaság", "dühkitörés",
  "nosztalgia", "derű", "unalom", "kíváncsiság", "bizsergés", "elégedetlenség",
  "szégyenérzet", "bátortalanság", "izgalom", "várakozás",
  "ragaszkodás", "megbecsülés", "szerelem", "vágyódás", "elhagyatottság",
  "megbánás", "irgalom", "sajnálat", "empátia", "sértettség",
  "bizonytalanság", "reménytelenség", "megnyugvás", "összezavarodottság",
  "katarzis", "megvilágosodás", "belső béke", "üresség érzése",
  "apátia", "cinizmus", "elégedettség", "sztoikus nyugalom",
  "szorultságérzet", "megvetés", "önbizalomhiány", "önbizalom",
  "önfeladás", "önfeledtség", "alázat", "önvád", "önigazolás"];
//---------------------------------------------------------------------------------------------------
const greatplaces = ["Eiffel-torony","Louvre","Notre-Dame","Mont Saint-Michel","Versailles","Szent Szív-bazilika (Sacré-Cœur)",
    "Colosseum","Római Fórum","Pantheon","Trevi-kút","Pisa tornya","Vatikán","Szent Péter-bazilika",
    "Canal Grande","Sixtus-kápolna","Cinque Terre","Szent Márk-székesegyház","Taorminai görög színház","Robot teknőkös","Dózse-palota","Akropolisz","Parthenon","Delphi",
    "Szfinx","Piramisok","Luxor templom","Karnak templom","Királyok völgye","Stonehenge",
    "Big Ben","Londoni tower","Buckingham palota","London Eye","Westminsteri apátság",
    "Tower Bridge","Cambridge","Oxford","Loch Ness","Neuschwanstein kastély","Gyál Deák Ferenc utca",
    "Brandenburgi kapu","Berlin fal","Reichstag","Sagrada Familia","Park Güell","Gibraltár","Ronda",
    "Casa Batlló","La Pedrera","Alhambra","Mezquita","Károly híd",
    "Hradčany","Wawel","Krakkói piac","Bécsi Stephansdom","Hofburg","Schönbrunn palota",
    "Melk apátság","Salzburg vár","Hallstatt","Luzerni híd","Genfi-tó",
    "Niagara-vízesés","Grand Canyon","Yellowstone","Yosemite","Mount Rushmore","Szabadság szobor",
    "Times Square","Central Park","Hollywood","Brooklyn híd","Disneyland","Universal Studios","Golden Gate híd",
    "Las Vegas Strip","Empire State Building","Burj Khalifa","Sheikh Zayed mecset","Petra",
    "Jeruzsálem óváros","Machu Picchu","Megváltó Krisztus","Copacabana","Iguazú-vízesés",
    "Galápagos-szigetek","Victoria-vízesés","Himeji kastély",
    "Tokyo torony","Shibuya Kereszteződés","Sydney Operaház","Harbour híd","Auckland Sky Tower",
    "Ha Long-öböl","Angkor Wat","Bayon templom",
    "Fuji hegy","Kiyosumi kert","Osaka vár","Sultan Ahmed mecset","Kapalı bazár","Hagia Sophia","Topkapi palota","Kék mecset",
    "Kappadókia","Göreme","Bosphorus híd","Gízai piramisok","Kairói múzeum","Luxor","Aswan","Abu Simbel",
    "Taj Mahal","Jaipur palota","Arany templom",
    "Kilimandzsáró","Serengeti Nemzeti Park","Ngorongoro kráter",
    "Robben-sziget","Szahara","Marokkói bazár","Casablanca","Essaouira","Budai Vár","Halászbástya","Parlament","Hősök tere","Városliget",
    "Szent István-bazilika","Gellért-hegy","Citadella","Balaton","Tihanyi Apátság",
    "Hévízi-tó","Hortobágyi Nemzeti Park","Aggteleki cseppkőbarlang",
    "Pannonhalmi Bencés Főapátság","Esztergomi Bazilika","Visegrádi Fellegvár",
    "Eger vára","Szépasszony-völgy","Pécsi TV torony","Zsolnay Negyed",
    "Debreceni Nagytemplom","Lánchíd"];
//---------------------------------------------------------------------------------------------------
const greatpeople = ["Nagy Sándor","Julius Caesar","Augustus","Néró","Traianus","Konstantin",
    "Attila","Dzsingisz Kán","IV. Béla","Mátyás király","Oroszlánszívű Richárd",
    "Fülöp király","VIII. Henrik","I. Erzsébet","Napóleon","XVI. Lajos",
    "Marie Antoinette","George Washington","Abraham Lincoln","Benjamin Franklin",
    "Thomas Jefferson","Theodore Roosevelt","Franklin D. Roosevelt","Winston Churchill",
    "Joszif Sztálin","Lenin","Marx Károly","Hitler","Mussolini","Mao Ce-tung",
    "Ho Si Minh","Nelson Mandela","Mahatma Gandhi","I. Ferenc pápa",
    "II. János Pál pápa","XVI. Benedek pápa","Angela Merkel","Charles de Gaulle",
    "Simón Bolívar","Che Guevara","Fidel Castro","Pol Pot","Kim Ir Szen","Kim Dzsongil","Kim Dzsongun",
    "Arisztotelész","Platón","Szókratész","Galilei","Newton","Einstein",
    "Marie Curie","Nikola Tesla","Leonardo da Vinci","Michelangelo","Rembrandt",
    "Van Gogh","Picasso","Mozart","Beethoven","Bach","Liszt Ferenc",
    "Chopin","Tolsztoj","Dosztojevszkij","Shakespeare","Goethe","Homérosz",
    "Salamon király","Nagy Károly","Justinianus császár","I. Szent István",
    "II. Rákóczi Ferenc","Hunyadi János","Zrínyi Miklós","Bethlen Gábor","Szaladin",
    "Kolumbusz Kristóf","Amerigo Vespucci","Marco Polo","Vasco da Gama","Magellán",
    "Amundsen","Cook kapitány","Tutankhamon","II. Ramszesz","Kleopátra","Hernán Cortés",
    "Szulejmán szultán","Atatürk","Sándor cár","Nagy Katalin","Francisco Pizarro",
    "I. Péter cár","Giuseppe Garibaldi","Széchenyi István","Kossuth Lajos",
    "Jane Austen","Frida Kahlo","Sigmund Freud",
    "Charles Darwin","James Watt","Edison","Wright fivérek","Alexander Graham Bell",
    "Hannibál Barkasz","Scipio Africanus","Szun Ce","Tokugawa Iejaszu",
    "Oda Nobunaga","Toyotomi Hidejosi","William Wallace","Robert the Bruce",
    "Jan Zizka","Oliver Cromwell","Jeanne d’Arc","Jean Lafitte","Simón Bolívar",
    "Pancho Villa","Gavrilo Princip",
    "Georgij Zsukov","Erwin Rommel","Bernard Montgomery","Dwight D. Eisenhower","Douglas MacArthur",
    "George S. Patton","Horatio Nelson","Arthur Wellesley (Wellington hercege)","Francisco Franco"];
//---------------------------------------------------------------------------------------------------
const fairytails = ["Hófehérke és a hét törpe","Hamupipőke","Csipkerózsika","A kis hableány","A szépség és a szörnyeteg",
    "Piroska és a farkas","Béka királyfi","Aladdin és a csodalámpa","Ali baba és a negyven rabló","Szindbád",
    "Rút kiskacsa","Borsószem királykisasszony","Csizmás kandúr","Rapunzel","Aranyhaj és a nagy gubanc",
    "Jancsi és Juliska","A három kismalac","A farkas és a hét kecskegida","Brémai muzsikusok","Óz a csodák csodája",
    "Pinokkió","Micimackó","Alice Csodaországban","Tücsök és hangya",
    "Kőleves","Ludas Matyi","A kiskakas gyémánt félkrajcárja","A só",
    "Mazsola és Tádé","Pom Pom meséi","Frakk, a macskák réme","Mézga család","Mekk Elek",
    "Vuk","Szaffi","Lolka és Bolka","No, megállj csak!","Hupikék törpikék",
    "Gyalogkakukk","Tom és Jerry","Donald kacsa","Mickey egér","Goofy","Kacsamesék",
    "Bambi","Dumbo","A dzsungel könyve","101 kiskutya","Aranyhaj","Jégvarázs",
    "Oroszlánkirály","Herkules","Mulan","Tarzan","Eszeveszett birodalom","Moana",
    "Encanto","Szörny Rt.","Verdák","Toy Story","Némó nyomában",
    "Szenilla nyomában","L’ecsó","Fel!","Coco","Agymanók",
    "Shrek","Csizmás, a kandúr","Kung Fu Panda",
    "Madagaszkár","Így neveld a sárkányodat","Turbo","Zootropolis",
    "Horton","Minyonok","Gru","Szamuráj Jack",
    "Hupikék törpikék","Garfield","Scooby-Doo","Flintstone család","Jetson család",
    "SpongyaBob","Ben 10","Danny, a szellemirtó","Avatar: Aang legendája",
    "Dragon Ball","Pokémon","Naruto","Bogyó és Babóca",
    "Doktor Bubó","Tévémaci","Kőműves Kelemen","Mátyás király meséi","Égig érő paszuly"];
//---------------------------------------------------------------------------------------------------
const brands = ["McDonald's","Starbucks","Nike","Adidas","Puma","Reebok","Rolex","Apple","Microsoft","Intel",
    "Samsung","Sony","Netflix","Amazon","Google","Facebook","Twitter","Coca-Cola","Pepsi","Red Bull",
    "Lego","Ikea","Chanel","Gucci","Prada","Louis Vuitton","Hermès","Zara","H&M","Uniqlo","Levi's","Seiko",
    "Canon","Nikon","Nestlé","Kellogg's","Oreo","Milka","Lindt","Heineken","Budweiser","Jack Daniel's",
    "Absolut","Guinness","Lipton","Nescafé","Monster Energy","Sprite","Fanta","Evian","San Pellegrino",
    "Apple Music","Spotify","Disney","Pixar","Warner Bros","Universal","Paramount","PlayStation","Xbox",
    "Nintendo","Dell","HP","Lenovo","Asus","Acer","Tesla","Boeing","Airbus","Emirates","Qatar Airways",
    "Lufthansa","British Airways","Delta Airlines","American Airlines","Hilton","Marriott","Airbnb","Booking.com",
    "Uber","Lyft","Visa","Mastercard","PayPal","Adidas Originals","Converse","Vans","North Face","Patagonia",
    "Under Armour","Estee Lauder","L’Oréal","Dior","Maybelline","MAC","Sephora","Garnier","Colgate","Oral-B",
    "Gillette","Philips","Bosch","Whirlpool","Dyson","GoPro","Tiffany & Co.","Cartier","Swarovski"];
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
const stars = ["Michael Jackson","Madonna","Elvis Presley","Prince","Whitney Houston","Frank Sinatra",
    "Marilyn Monroe","Audrey Hepburn","Brad Pitt","Angelina Jolie","Tom Cruise","Leonardo DiCaprio",
    "Johnny Depp","Robert Downey Jr.","Chris Hemsworth","Scarlett Johansson","Jennifer Aniston",
    "Jennifer Lopez","Justin Bieber","Beyoncé","Rihanna","Taylor Swift","Kanye West","Elton John",
    "David Beckham","Cristiano Ronaldo","Lionel Messi","Usain Bolt","Serena Williams","Roger Federer",
    "Tiger Woods","Barack Obama","Donald Trump","Oprah Winfrey","Bill Gates","Steve Jobs","Mark Zuckerberg",
    "Elon Musk","Morgan Freeman","Denzel Washington","Will Smith","Emma Watson","Daniel Radcliffe",
    "Rupert Grint","Tom Hanks","Harrison Ford","Chris Evans","Gal Gadot","Henry Cavill","Ben Affleck",
    "Robert Pattinson","Kristen Stewart","Emma Stone","Ryan Gosling","Meryl Streep","Cate Blanchett",
    "Nicole Kidman","Hugh Jackman","Anne Hathaway","Keanu Reeves","Matt Damon","George Clooney",
    "Julia Roberts","Sandra Bullock","Reese Witherspoon","Natalie Portman","Charlize Theron","Mila Kunis",
    "Megan Fox","Jim Carrey","Eddie Murphy","Robin Williams","Jack Nicholson","Al Pacino","Robert De Niro",
    "Sylvester Stallone","Arnold Schwarzenegger","Dwayne Johnson","Vin Diesel","Jason Statham",
    "Chris Pratt","Zendaya","Ariana Grande","Lady Gaga","Shakira","Britney Spears","Katy Perry",
    "Mick Jagger","Paul McCartney","Freddie Mercury","Michael Jordan","LeBron James","Kobe Bryant",
    "Abraham Lincoln","John F. Kennedy","George Washington","Joe Biden","Warren Buffett","Jeff Bezos"];
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
  "kalap","sapka","napszemüveg","nyaklánc","fülbevaló","gyűrű","karkötő","karóra"];
//---------------------------------------------------------------------------------------------------
const games = [  "Super Mario","Sonic the Hedgehog","Tetris","Pac-Man","Space Invaders","Pong",
  "Donkey Kong","Street Fighter","Mortal Kombat","Tekken","The Legend of Zelda",
  "Metin2","World of Warcraft","Diablo","Starcraft","Counter-Strike","Half-Life",
  "Portal","Minecraft","Roblox","Fortnite","League of Legends","Dota 2","Overwatch",
  "Valorant","PUBG","Call of Duty","Battlefield","Medal of Honor","GTA V","Red Dead Redemption",
  "Skyrim","Elder Scrolls Online","Fallout","Mass Effect","Dragon Age","Witcher 3","Red alert",
  "Cyberpunk 2077","Assassin's Creed","Far Cry","Watch Dogs","Resident Evil","Silent Hill",
  "Final Fantasy","Kingdom Hearts","Pokémon","Animal Crossing","Splatoon","Kirby",
  "Metroid","Castlevania","Dark Souls","Demon’s Souls","Bloodborne","Elden Ring",
  "Sekiro","Monster Hunter","Persona","Shin Megami Tensei","Yakuza","Nioh","Guessy 2.0 :)",
  "Banjo-Kazooie","Crash Bandicoot","Spyro","Rayman","Halo","Gears of War"];
//---------------------------------------------------------------------------------------------------
const locals = ["Puskás Ferenc","Hajós Alfréd","Gesztesi Károly","Kulka János","Örkény István","Márai Sándor",
  "Radnóti Miklós","Ady Endre","Karinthy Frigyes","József Attila","Bartók Béla","Kodály Zoltán","Blaha Lujza","Kajdi Csaba","Brasch Bence",
  "Erkel Ferenc","Liszt Ferenc","Zoltán Kocsis","Müller Péter","Hofi Géza","Rúzsa Magdi","Udvaros Dorottya","Ember Márk",
  "Korda György","Ákos","Péterfy Bori","Gáspár Laci","ByeAlex","Ganxsta Zolee","Majka","Kerekes József","Baló György",
  "Király Viktor","Radics Gigi","Berki Krisztián","Fekete Pákó","Samu Balázs","Csuja Imre","Trokán Nóra","Azahriah","Geszti Péter","Nagy Feró",
  "Tóth Gabi","Vastag Csaba","Hien","Rúzsa Magdi","Mészáros Árpád Zsolt","Lengyel Tamás","Szőke Zoltán","Jákob Zoltán",
  "Kasza Tibi","Sebestyén Balázs","Vad Katalin","Till Attila","Stohl András","Bereczki Zoltán","Szabó Győző","Palvin Barbara","Mihalik Enikő",
  "Fluor Tomi","Lotfi Begi","Curtis","Puzsér Róbert","Dancsó Péter","Radics Péter","Rékasi Károly","Borbély Alexandra",
  "Istenes Bence","Lakatos Márk","Cooky","Rákóczi Ferenc","Pachmann Péter","Vadon János","Lovas Rozi","Marics Péter", "Valkusz Milán",
  "Varga Viktor","Caramel","Dér Heni","Csonka András","Sas József","TheVR","Varga Izabella","Hevér Gábor",
  "Kiss Ádám","Bödőcs Tibor","Aranyosi Péter","Kovács András Péter (KAP)","Fábry Sándor","Ónodi Eszter","Törőcsik Franciska",
  "Pataki Ági","Liptai Claudia","Ördög Nóra","Gáspár Győző","Gáspár Evelin","Ráskó Eszter","Makranczi Zalán",
  "Hajdú Péter","Nacsa Olivér","Till Atilla","Molnár Áron","Reviczky Gábor","Nagy Ervin","Lékai-Kiss Ramóna"];
//---------------------------------------------------------------------------------------------------
const cars = [
  // német
  "Audi","BMW","Mercedes-Benz","Volkswagen","Porsche","Opel","Maybach","Smart","MAN",

  // amerikai
  "Ford","Chevrolet","Cadillac","Dodge","Chrysler","Jeep","Tesla",
  "Hummer","Pontiac","Buick","Lincoln","GMC","Ram","DeLorean",

  // japán
  "Toyota","Honda","Nissan","Mazda","Mitsubishi","Subaru","Suzuki",
  "Lexus","Infiniti","Acura","Daihatsu","Isuzu",

  // dél-koreai
  "Hyundai","Kia","Genesis","SsangYong",

  // francia
  "Peugeot","Renault","Citroën","DS Automobiles","Bugatti",

  // olasz
  "Ferrari","Lamborghini","Maserati","Fiat","Alfa Romeo","Lancia","Pagani","Iveco","Piaggio",

  // brit
  "Bentley","Rolls-Royce","Aston Martin","Lotus","McLaren","Mini","Land Rover","Range Rover","Jaguar","Vauxhall",

  // svéd
  "Volvo","Saab","Scania","Koenigsegg",

  // spanyol / kelet-európai
  "Seat","Cupra","Škoda","Dacia","Zastava",

  // orosz / keleti blokk
  "Lada","Moszkvics","Trabant","Wartburg","Tatra","ZIL","GAZ","UAZ","KAMAZ",

  // ausztrál
  "Holden","HSV",

  // kínai (ismertebbek)
  "BYD","Chery","Nio",

  // indiai (ismertebb)
  "Tata"];
//---------------------------------------------------------------------------------------------------
const heroes = ["Superman","Batman","Wonderwoman","Flash - Villám","Zöld Lámpás",
  "Zöld Íjász","Shazam","Aquaman","Fekete Kanári","Cyborg","Supergirl",
  "Batgirl","Robin","Éjjeliőr","Macskanő","Harley Quinn","Joker","Lex Luthor",
  "Deathstroke","Blackbolt","Kék Bogár","Booster Gold","Tűzvihar","Műanyag Ember","Atom",
  "Vasember","Hulk","Thor","Fekete Özvegy","Sólyomszem","Doktor Strange","Yelena Belova",
  "Pókember","Hangya","Fekete Párduc","Amerika Kapitány","Deadpool","X-23","Task master",
  "Rozsomák","Professor X","Magneto","Jean Grey","Ciklon","Küklopsz","Bestia","Vörösőr",
  "Vadóc","Gambit","Vízió","Skarlát Boszorkány","Higanyszál","Tél Katonája","Nick Fury",
  "Sólyom","Csillagúr","Groot","Mordály","Gamora","Drax","Nebula","Mantis","Marvel Kapitány",
  "Thanos","Loki","Galactus","Venom","Doktor Octopus","Homokember","Zöld Manó","Mysterio","Kingpin",
  "Fenegyerek","Megtorló","Ezüst Utazó","Ultron","Doctor Doom","Vörös Koponya","Holdlovag","She-Hulk",
  "Mystique","Jégember","Éjjáró","Colossus","Reed Richards","Sue Storm","Emberi fáklya","A lény","Kang","Dr. Doom"];
//---------------------------------------------------------------------------------------------------
const f1 = [
  "Lewis Hamilton","Michael Schumacher","Ayrton Senna","Alain Prost","Sebastian Vettel",
  "Fernando Alonso","Max Verstappen","Niki Lauda","Jackie Stewart","Juan Manuel Fangio",
  "Jim Clark","Kimi Raikkonen","Nigel Mansell","Bernie Eccleston",
  "Charles Leclerc","Carlos Sainz","Lando Norris","George Russell","Sergio Perez",
  "Circuit de Monaco","Monza","Silverstone","Suzuka","Hungaroring","Imola",
  "Ferrari","Mercedes","McLaren","Red Bull Racing","Williams","Lotus","Renault",
  "Pole pozíció","Box utca","Safety Car","Sárga zászló","Piros zászló","Rajtrács",
  "Intermediate gumi","Esőgumi","Száraz gumi (slick)","Gyors kör","Év újonca","Világbajnoki pont","Dobogó",
  "Kockás zászló","Pezsgős locsolás","Csapatrádió","Kiállási stratégia","Alávágás","Gumitörmelék","Bottoming",
  "Sereghajtó","Fékerő-eloszlás","Túlkormányzás","DRS","Szabadedzés","Felvezető kör","pályabíró","Időmérő","Futam","Szél árnyék"];
//---------------------------------------------------------------------------------------------------
const animals = ["oroszlán","tigris","puma","gepard","jaguár","leopárd","hiéna","farkas","róka","sakál",
    "medve","jegesmedve","panda","koala","víziló","elefánt","zsiráf","orrszarvú","bivaly","szarvas",
    "őz","antilop","gazella","zebra","ló","szamár","teve","láma","alpaka","jak",
    "bárány","juh","kecske","tehén","bika","borjú","malac","vaddisznó","nyúl","mezei nyúl",
    "hörcsög","tengerimalac","patkány","egér","mókus","csincsilla","prérikutya","delfin","bálna","kardszárnyú delfin",
    "cápa","rája","angolna","tonhal","pisztráng","lazac","ponty","harcsa","süllő","keszeg",
    "kígyó","piton","kobra","vipera","boákígyó","krokodil","aligátor","teknős","kaméleon","gekkó",
    "leguán","varánusz","béka","varangy","szalamandra","gőte","denevér","bagoly","sas","ölyv",
    "keselyű","héja","papagáj","kakadú","tukán","kanári","veréb","fecske","gólya",
    "kakukk","harkály","cinege","galamb","gerle","páva","pulyka","tyúk","kakas","csirke",
    "liba","kacsa","hattyú","pingvin","siraly","pelikán","darú","flamingó","strucc","emu",
    "kivi","kolibri","szitakötő","méh","darázs","dongó","pillangó","lepke","bogár","szkarabeusz",
    "katicabogár","szarvasbogár","cserebogár","szöcske","tücsök","sáska","hangya","termit","csótány","poloska",
    "pók","tarantula","skorpió","rák","homár","garnélarák","polip","tintahal","medúza","csiga",
    "kagyló","osztriga","korall","földigiliszta","pióca","csigaház","vakond","sün","vidra",
    "hód","pézsmapocok","fóka","rozmár","dromedár","kenguru","vombat","erszényes ördög","koati","tatú",
    "pangolin","lajhár","armadillo","tapír","okapi","kudu","nyest","görény","hermelin","menyét",
    "prérifarkas","mosómedve","oposszum","oroszlánfóka","kék bálna","narvál","beluga","csimpánz",
    "gorilla","orangután","bonobó","makákó","mandrill","pávián","gyűrűsfarkú majom","gibbon","siamang"];
//---------------------------------------------------------------------------------------------------
const clubs = ["Real Madrid","Barcelona","Bilbao","Sevilla","Atlético Madrid","West Ham","Tottenham","Manchester United","Liverpool",
  "Chelsea","Arsenal","Manchester City","Hoffenheim","Union Berlin","Freiburg","Mainz","Leverkusen","Bayern München","Borussia Dortmund",
  "Red Bull Salzburg","RB Leipzig","Juventus","AC Milan","Bournemouth","Sunderland","Aston Villa",
  "Internazionale","AS Roma","Fiorentina","Lazio","Parma","Torino","Napoli","PSG","Olympique Marseille","Ajax","Feyenoord",
  "Porto","Benfica","Braga","Sporting","Galatasaray","Fenerbahce","Besiktas","Celtic",
  "Rangers","Boca Juniors","River Plate","Flamengo","Santos","Corinthians",
  "LA Galaxy","Al-Hilal","Al-Nassr","Wolverhampton","Bayern München","Borussia Dortmund",
  "Shakhtar Donetsk","Dynamo Kyiv","Spartak Moscow",
  "CSKA Moscow","Zenit","PSV Eindhoven","Everton","Fulham","Newcastle",
  "Anderlecht","Club Brugge","Basel","Grasshopper","Servette","Young Boys","Rosenborg","Molde",
  "Dinamo Zagreb","Partizan","Crvena Zvezda","Panathinaikos","Olympiakos",
  "AEK Athens","Betis","Valencia","Getafe","Espanyol","Budapest Honvéd FC","Ferencvárosi TC","MTK","Újpest FC","DVSC","Paksi FC","ETO Fc Győr"];
//---------------------------------------------------------------------------------------------------
const sayings = ["Ki korán kel, aranyat lel",
    "Aki mer, az nyer",
    "Sok kicsi sokra megy",
    "Lassan járj, tovább érsz",
    "Jobb félni, mint megijedni",
    "Addig nyújtózkodj, ameddig a takaród ér",
    "Kíváncsi ember hamar megöregszik",
    "Kutyából nem lesz szalonna",
    "Ki mint vet, úgy arat",
    "Nem zörög a haraszt, ha a szél nem fújja",
    "Madarat tolláról, embert barátjáról",
    "Ajándék lónak ne nézd a fogát",
    "Alkalom szüli a tolvajt",
    "Néma gyereknek anyja sem érti a szavát",
    "Nem mind arany, ami fénylik",
    "Szegény ember vízzel főz",
    "A baj nem jár egyedül",
    "Sokat akar a szarka, de nem bírja a farka",
    "Ki a kicsit nem becsüli, a nagyot nem érdemli",
    "A jó bornak nem kell cégér",
    "Kétszer ad, ki gyorsan ad",
    "Késő bánat, ebgondolat",
    "Könnyű annak, aki tudja",
    "Nem lehet mindenki juhász, kell kutya is",
    "Más kárán tanul az okos",
    "Amilyen az adjonisten, olyan a fogadjisten",
    "Addig üsd a vasat, amíg meleg",
    "Nem esik messze az alma a fájától",
    "Kecskére bízza a káposztát",
    "Ki korpa közé keveredik, megeszik a disznók",
    "Szegény embert még az ág is húzza",
    "Amit ma megtehetsz, ne halaszd holnapra",
    "Hazug embert hamarabb utolérik, mint a sánta kutyát",
    "Jó munkához idő kell",
    "Bagoly mondja verébnek, hogy nagyfejű",
    "Lassan, de biztosan",
    "Sok bába közt elvész a gyerek",
    "Nem tudja a jobb kéz, mit csinál a bal",
    "A hazugnak hamarabb lepotyog a foga, mint az igaznak",
    "Ki nem dolgozik, ne is egyék",
    "Jó pap holtig tanul",
    "Addig jár a korsó a kútra, míg el nem törik",
    "Szegény embernek ritkán áll a vásár",
    "Hamar munka ritkán jó",
    "Az idő pénz"];
//-------------------------------------------------------------------------------------------------
const dates = ["476","622","895","1000","1054","1241-1242","1291","1337-1453","1453","1492",
    "1517","1526","1541","1552","1605","1648","1686","1703-1711","1776","1789",
    "1804","1848 március 15","1848-1849","1861-1865","1867","1871","1914-1918","1917",
    "1918","1920 június 4","1929","1933","1939-1945","1941 december 7","1944 június 6",
    "1945 május 8","1945 augusztus 6","1947","1948","1949","1953","1950-1953","1955","1956 október 23",
    "1961","1963","1968","1969 július 20","1955-1975","1980","1981","1986","1989","1990",
    "1991","1991","1993","2001 szeptember 11","2004","2008","2010","2014",
    "2020","2022 február 24"];
//-------------------------------------------------------------------------------------------------
const profs = ["tanár","óvónő","orvos","ápoló","sebész","gyógyszerész","állatorvos","pszichológus",
    "mérnök","építész","informatikus","programozó","adatbázis-kezelő","rendszergazda","villamosmérnök",
    "gépészmérnök","közgazdász","könyvelő","pénzügyi tanácsadó","bankár","ügyvéd","bíró","jogász",
    "rendőr","tűzoltó","katona","határőr","pilóta","légiutas-kísérő","sofőr","buszvezető","mozdonyvezető",
    "hajóskapitány","kamionsofőr","postás","futár","tanácsadó","politikus","polgármester","miniszter",
    "elnök","titkár","menedzser","hr-es","marketinges","reklámszakember","újságíró","riporter","szerkesztő",
    "író","költő","fordító","tolmács","színész","színésznő","rendező","producer","operatőr","fotós",
    "grafikus","festő","szobrász","zenész","énekes","zeneszerző","DJ","táncos","balettművész","szobrász",
    "szakács","cukrász","pék","felszolgáló","bolti eladó","árufeltöltő","fodrász","kozmetikus","körmös",
    "masszőr","edző","testépítő","sportoló","labdarúgó","úszó","atléta","teniszező","kosárlabdázó",
    "asztalos","ács","kőműves","burkoló","villanyszerelő","vízvezeték-szerelő","hegesztő","lakatos","festő-mázoló",
    "kertész","mezőgazdász","állattenyésztő","halász","vadász","méhész","borász","pincér","idegenvezető",
    "könyvtáros","múzeológus","tanulmányi felügyelő","szociális munkás","lelkész","pap","szerzetes","rabbi",
    "imám","kutató","biológus","kémikus","fizikus","matematikus","csillagász","geológus","meteorológus",
    "tanácsadó pszichológus","terapeuta","gyógytornász","logopédus","állami tisztviselő","hivatalnok",
    "titkosügynök","nyomozó","biztonsági őr","detektív","őr","takarító","portás","recepciós"];
//-------------------------------------------------------------------------------------------------
const travel = ["check-in","beszállókártya","kézipoggyász","feladott poggyász","súlykorlát",
  "útlevél","vízum","vízuminterjú","biztosítás","utazási iroda","idegenvezető","turista",
  "turistacsapda","szálloda","hostel","apartman","Airbnb","félpanzió","teljes panzió","all inclusive",
  "booking","last minute","voucher","útiterv","látnivaló","térkép","útikönyv","útitárs",
  "nyaralás","körutazás","városnézés","kirándulás","túra","kemping","sátor","lakókocsi",
  "útiköltség","Autó bérlés","taxi","Uber","Bolt","biciklibérlés","vonatjegy",
  "menetrend","interrail","roaming","VPN","mobilinternet","helyi SIM kártya","powerbank","konnektor átalakító",
  "biztonsági öv","biztonsági ellenőrzés","folyadék limitek","duty free","vámellenőrzés","érkezési oldal","indulási oldal",
  "helyi pénznem","valutaváltás","bankkártya","érintéses fizetés","utazási költség","szuvenír","ajándékbolt","bazár",
  "tengerpart","strand","naptej","strandtörölköző","napernyő","napágy","flip-flop papucs","sznorkel","búvármaszk",
  "víz alatti kamera","selfie bot","útifotó","képeslap","turistabusz","hop-on hop-off","GetYourGuide","nyelvi nehézség",
  "elveszett poggyász","járatkésés","járattörlés","átcsatlakozás","időeltolódás","jetlag","kulturális sokk","útikaland",
  "lopásgátló törölköző","hűtőmágnes","útifilmek","útiblog","emléknapló","fapados"];
//---------------------------------------------------------------------------------------------------
const movies = [
    "Die Hard – Drágán add az életed", "Halálos iramban", "John Wick", 
    "Terminátor", "Predátor", "A sötét lovag", "Mad Max – A harag útja",
    "Indiana Jones", "Karib-tenger kalózai","Rocky","Rambó","Kincsem",
    "Jurassic Park", "Avatar", "Csillagok háborúja","Coming out",
    "Bosszúállók", "A gyűrűk ura","Igazság ligája","A tanú","Piedóne",
    "Másnaposok", "Amerikai pite", "Nagyon nagy Ő", "Ace Ventura – Állati nyomozó", 
    "Reszkessetek, betörők!", "Nagyfater elszabadul", "Hogyan veszítsünk el egy pasit 10 nap alatt",
    "Titanic", "Szerelmünk lapjai", "Bridget Jones naplója","300",
    "Igazából szerelem", "Pretty Woman – Micsoda nő!", "La La Land",
    "Forrest Gump", "Remény rabjai", "A zöld mérföld", "Schindler listája", 
    "Kramer kontra Kramer", "Egy csodálatos elme", "A nyolcadik utas: a Halál",
    "Ben Hur", "Gladiátor", "A király beszéde", "12 év rabszolgaság", "A legsötétebb óra",
    "Get Out – Tűnj el!", "Mindenhol, mindenkor, mindenki","Legnagyobb showman",
    "Casablanca", "Elfújta a szél", "Aranypolgár", "A Keresztapa", "Taxisofőr", 
    "Apokalipszis most", "Volt egyszer egy vadnyugat","Feláldozhatók","Conan a barbár",
    "Hetedik", "Harcosok klubja", "Eredet", "Interstellar – Csillagok között",
    "Fekete hattyú", "Viharsziget", "A bárányok hallgatnak",
    "Ragyogás", "A kör", "Az – It", "Halloween – A rémület éjszakája",
    "Széttörve", "Fűrész", "Paranormal Activity", "Szellemekkel suttogó"];
//-------------------------------------------------------------------------------------------------
const hobbies = [
  "foci","kosárlabda","kézilabda","röplabda","tenisz","pingpong","úszás","futás","jóga","pilates",
  "biciklizés","túrázás","hegymászás","síelés","snowboard","korcsolya","gördeszka","roller","trambulin","kajakozás",
  "horgászat","vadászat","kempingezés","paintball","airsoft","íjászat","lovaglás","motorozás","autóvezetés","gokart",
  "rajz","festés","szobrászat","fotózás","videózás","filmnézés","mozi","színház","koncertre járás","tánc",
  "ének","gitár","zongora","hegedű","dobolás","karaoke","dj-zés","zeneszerzés","kórus","beatbox",
  "olvasás","írás","naplózás","blogolás","könyvklub","költészet","novellázás","szerepjáték írás","fanfiction","calligráfia",
  "bélyeggyűjtés","érmegyűjtés","kártyagyűjtés","lego","makettezés","origami","puzzle","társasjáték","kártyajáték","sakk",
  "videójáték","asztali szerepjáték","online gaming","streamelés","VR-játék","retro gaming","LAN party","mobiljáték","szimulátor","e-sport",
  "főzés","sütés","grillezés","borászat","sörfőzés","koktélkeverés","kávékóstolás","teázás","étteremjárás","street food túra",
  "kocsmatúra","fesztiválozás","kirakodóvásár","antikvadászat","bolhapiac","gardróbvásár","geocaching","madárles","asztrológia","csillagnézés",
  "önkénteskedés","vak randi","baráti összejövetel","családi program","szerepjáték (LARP)","cosplay","fotómodellezés","tetoválás készítés","graffiti","parkour"];
//-------------------------------------------------------------------------------------------------
const what = ["infláció","defláció","szubjektív","objektív","kompetencia","szinergia","szkepticizmus",
    "probléma","analízis","inkasszó","okkupáció","faktor","hipotézis",
    "paradigma","szociális","pszeudonim","metafora","szimptóma","diagnózis","terápia",
    "rehabilitáció","pszichózis","depresszió","ödipusz komplexus","kognitív",
    "intuitív","szcenárió","sztrájk","mobilizáció","koherencia","teória","pragmatikus",
    "szubkultúra","elit","kapacitás","projekció","demokrácia","autokrácia","hegemonia",
    "totalitárius","parlament","konferencia","protocol","analóg","digitális","szenzáció",
    "perspektíva","szituáció","verifikáció","kritérium",
    "kontroll","adaptáció","interpretáció","implementáció","infrastruktúra","koalíció",
    "migráció","referencia","szindróma"];
//---------------------------------------------------------------------------------------------------
const series = ["Trónok harca","A Vaják (The Witcher)","A mandalóri","Vikingek",
  "Az utolsó királyság","Sötétség (Dark)","Az Esernyő Akadémia","Az űr (The Expanse)",
  "Csillagkapu","Csillagközi romboló",
  "Elveszve az űrben","Stranger Things","Árnyék és csont",
  "Andor","Obi-Wan Kenobi","Loki","WandaVízió","Sólyomszem","Holdlovag","Miss Marvel","She-Hulk",
  "Breaking Bad","Better Call Saul","Peaky Blinders","Fargo","A törvény emberei",
  "La Casa de Papel","The Boys","Mindhunter","Lost",
  "Narcos","A kártyavár (House of Cards)","13 okom volt",
  "Az OA","A nyolc érzék","A 100","Szökés","Kemény motorosok",
  "A szolgálólány meséje","Csernobil","Elit alakulat","A Csendes-óceán","Maffiózók",
  "Mad Men – Reklámőrültek","Gengszterkorzó","Drót (The Wire)","Ozark",
  "Inni és élni hagyni","Dexter","Sherlock","Doktor House","Westworld","Originals",
  "Jóbarátok","Így jártam anyátokkal","Agymenők","Grace klinika","A Simpson család",
  "Family Guy","South Park","Rick és Morty","Bűbájos boszorkák","Született feleségek",
  "Szívek szállodája","Bridgerton","A vezércsel","Emily Párizsban","Gossip Girl",
  "Hazug csajok társasága","Szex és New York","Szexoktatás",
  "Orange Is the New Black","Eufória","Hatalmas kis hazugságok",
  "You – Te","Wednesday","Az ifjú ügyvédnő","Ezel","Szulejmán",
  "Dawson és a haverok","Barátok közt","Jóban Rosszban",
  "Zöld íjász","A Villám","Supergirl","Gotham","Titánok","Doom Patrol",
  "Smallville","Buffy, a vámpírok réme","Lucifer","Odaát","Teen Wolf",
  "Riverdale","Vámpírnaplók"];
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
topics["travel"] = [...travel];
topics["what"] = [...what];
topics["hobbies"] = [...hobbies];
topics["emotions"] = [...emotions];
topics["dates"] = [...dates];
topics["sayings"] = [...sayings];
topics["profs"] = [...profs];
