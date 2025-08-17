const clubs = [  "Real Madrid","Barcelona","Manchester United","Liverpool","Chelsea","Arsenal",
  "Manchester City","Bayern München","Borussia Dortmund","Juventus","AC Milan",
  "Inter Milan","AS Roma","Napoli","PSG","Olympique Marseille","Ajax","Feyenoord",
  "Porto","Benfica","Sporting","Galatasaray","Fenerbahce","Besiktas","Celtic",
  "Rangers","Boca Juniors","River Plate","Flamengo","Santos","Corinthians",
  "LA Galaxy","New York Red Bulls","Toronto FC","Seattle Sounders","Atlanta United",
  "Club América","Chivas","Monterrey","Pachuca","Al-Ahli","Al-Hilal","Al-Nassr",
  "Al-Sadd","Zamalek","Al Ahly","Shakhtar Donetsk","Dynamo Kyiv","Spartak Moscow",
  "CSKA Moscow","Zenit","Red Bull Salzburg","RB Leipzig","PSV Eindhoven",
  "Anderlecht","Club Brugge","Basel","Young Boys","Rosenborg","Molde",
  "Dinamo Zagreb","Partizan","Crvena Zvezda","Panathinaikos","Olympiakos",
  "AEK Athens","Shenzhen FC","Guangzhou Evergrande","Beijing Guoan","Sydney FC",
  "Melbourne Victory","Perth Glory","Kaizer Chiefs","Orlando Pirates","Mamelodi Sundowns",
  "FC Tokyo","Kawasaki Frontale","Urawa Red Diamonds","Yokohama F. Marinos"];

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
    "kagyló","osztriga","korall","szivacs","földigiliszta","pióca","csigaház","vakond","sün","vidra",
    "hód","pézsmapocok","fóka","rozmár","dromedár","kenguru","vombat","erszényes ördög","koati","tatú",
    "pangolin","lajhár","armadillo","tapír","okapi","kudu","nyest","görény","hermelin","menyét",
    "prérifarkas","mosómedve","oposszum","oroszlánfóka","kardszarvú antilop","muskátli antilop","kék bálna","narvál","beluga","csimpánz",
    "gorilla","orangután","bonobó","makákó","mandrill","pávián","maki","gyűrűsfarkú maki","gibbon","siamang"];

//---------------------------------------------------------------------------------------------------

const f1 = ["Lewis Hamilton","Michael Schumacher","Ayrton Senna","Alain Prost","Sebastian Vettel",
  "Fernando Alonso","Max Verstappen","Niki Lauda","Jackie Stewart","Nelson Piquet",
  "Jim Clark","Juan Manuel Fangio","Emerson Fittipaldi","Mika Hakkinen","Kimi Raikkonen",
  "Nigel Mansell","Jenson Button","Damon Hill","Jacques Villeneuve","Mario Andretti",
  "Jochen Rindt","James Hunt","Clay Regazzoni","Riccardo Patrese","Gerhard Berger",
  "Rubens Barrichello","Felipe Massa","Sergio Perez","Charles Leclerc","Carlos Sainz",
  "Daniel Ricciardo","Valtteri Bottas","George Russell","Lando Norris","Esteban Ocon",
  "Pierre Gasly","Yuki Tsunoda","Oscar Piastri","Zhou Guanyu","Kevin Magnussen",
  "Nico Hulkenberg","Ralf Schumacher","Jarno Trulli","Heinz-Harald Frentzen",
  "David Coulthard","Mark Webber","Pastor Maldonado","Jean Alesi","Eddie Irvine",
  "Giancarlo Fisichella","Nick Heidfeld","Takuma Sato","Kamui Kobayashi","Robert Kubica",
  "Alex Zanardi","Andrea de Cesaris","Carlos Reutemann","Patrick Tambay","Gilles Villeneuve",
  "Didier Pironi","Johnny Herbert","Martin Brundle","Anthony Davidson","Paul di Resta",
  "Stirling Moss","Jack Brabham","Phil Hill","Dan Gurney","John Surtees","Mike Hawthorn",
  "Graham Hill","Peter Revson","Ronnie Peterson","Tom Pryce","Alan Jones",
  "Circuit de Monaco","Monza","Silverstone","Spa-Francorchamps","Suzuka",
  "Hungaroring","Imola","Nürburgring","Hockenheim","Red Bull Ring",
  "Yas Marina","Bahrain International Circuit","Singapore Marina Bay","Austin COTA",
  "Mexico City Autodrome","Interlagos","Jeddah Street Circuit","Las Vegas GP",
  "Ferrari","Mercedes","McLaren","Red Bull Racing","Williams","Lotus",
  "Brabham","Tyrrell","Ligier","Jordan","Sauber","Toro Rosso","Alfa Romeo Racing",
  "Renault","Benetton","Haas F1","Force India","Arrows","Minardi"];

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
//NEM JÓ
const dogs = ["labrador","golden retriever","német juhász","beagle","bulldog","mopsz","jack russell","cocker spániel",
    "uszkár","rottweiler","doberman","shih tzu","szamojéd","husky","dalmatiner","border collie",
    "malamut","terrier","boxer","vizsla","magyar agár","komondor","puli","pumi","mudi","kuvasz",
    "bichon frisé","cairn terrier","west highland white terrier","chihuahua","dachshund","french bulldog"];

//---------------------------------------------------------------------------------------------------

const locals = ["Puskás Ferenc","Hajós Alfréd","Gesztesi Károly","Kulka János","Örkény István","Márai Sándor",
    "Radnóti Miklós","Ady Endre","Karinthy Frigyes","József Attila","Bartók Béla","Kodály Zoltán",
    "Erkel Ferenc","Liszt Ferenc","Zoltán Kocsis","Müller Péter","Hofi Géza","Rúzsa Magdi",
    "Korda György","Ákos","Péterfy Bori","Gáspár Laci","ByeAlex","Ganxsta Zolee","Majka",
    "Király Viktor","Radics Gigi","Berki Krisztián","Fekete Pákó","Samu Balázs","Korda György Jr.",
    "Tóth Gabi","Vastag Csaba","Hien","Rúzsa Magdi","Mészáros Árpád Zsolt","Kapitány Iván"];

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

const heroes = ["Superman","Batman","Wonder Woman","Flash","Zöld Lámpás","Acélember","Vasember","Hulk",
    "Thor","Fekete Özvegy","Hawkeye","Doktor Strange","Pókember","Kapcsolat nélküli Pókember",
    "Ant-Man","Hangya","Fekete Párduc","Captain America","Amerika Kapitány","Deadpool",
    "Wolverine","X-Men","Professor X","Magneto","Jean Grey","Cyclops","Storm","Beast",
    "Rogue","Gambit","Green Arrow","Shazam","Aquaman","Black Canary","Cyborg","Supergirl",
    "Batgirl","Robin","Nightwing","Catwoman","Harley Quinn","Joker","Lex Luthor","Loki",
    "Thanos","Galactus","Venom","Doctor Octopus","Sandman","Green Goblin","Mysterio","Kingpin",
    "Daredevil","Punisher","Silver Surfer","Deadshot","Arrow","Hawkgirl","Hawkman","Black Adam",
    "Shocker","Electro","Kraven","Vulture","Rhino","Scorpion","Taskmaster","Black Manta","Ultron",
    "Winter Soldier","Falcon","Vision","Scarlet Witch","Quicksilver","Star-Lord","Groot",
    "Rocket Raccoon","Gamora","Drax","Nebula","Mantis","Doctor Doom","Red Skull","Iron Fist",
    "Luke Cage","Jessica Jones","Moon Knight","She-Hulk","Mystique","Iceman","Nightcrawler",
    "Colossus","Beast Boy","Raven","Starfire","Cyborg (Teen Titans)","Terra","Aqualad","Speedy",
    "Kid Flash","Red Tornado","Hawkman (CW)","Vixen","Black Lightning","Blue Beetle","Booster Gold",
    "Firestorm","Plastic Man","Atom","Captain Marvel","Shazam","Black Adam"
];

//---------------------------------------------------------------------------------------------------

const cities = [  "Budapest","Debrecen","Szeged","Pécs","Győr","Miskolc","Nyíregyháza","Kecskemét",
  "Sopron","Szombathely","Veszprém","Eger","Esztergom","Kaposvár","Zalaegerszeg",
  "Székesfehérvár","London","Manchester","Liverpool","Birmingham","Edinburgh",
  "Dublin","Belfast","Cardiff","Paris","Marseille","Lyon","Toulouse","Nice","Bordeaux",
  "Berlin","Munich","Hamburg","Frankfurt","Cologne","Stuttgart","Düsseldorf",
  "Rome","Milan","Naples","Florence","Venice","Turin","Palermo","Pisa","Bologna",
  "Madrid","Barcelona","Seville","Valencia","Bilbao","Granada","Lisbon","Porto",
  "Athens","Thessaloniki","Istanbul","Ankara","Cappadocia","Moscow","Saint Petersburg",
  "Warsaw","Krakow","Gdansk","Wroclaw","Prague","Brno","Vienna","Salzburg","Zurich",
  "Geneva","Bern","Stockholm","Gothenburg","Oslo","Bergen","Copenhagen","Aarhus",
  "Helsinki","Tallinn","Riga","Vilnius","Brussels","Antwerp","Amsterdam","Rotterdam",
  "The Hague","Luxembourg","New York","Los Angeles","Chicago","San Francisco","Miami",
  "Washington D.C.","Las Vegas","Boston","Philadelphia","Seattle","San Diego","Houston",
  "Dallas","Toronto","Vancouver","Montreal","Ottawa","Mexico City","Cancun","Rio de Janeiro",
  "São Paulo","Buenos Aires","Lima","Bogota","Caracas","Havana","Santiago","Cape Town",
  "Johannesburg","Cairo","Marrakesh","Casablanca","Nairobi","Dar es Salaam",
  "Tokyo","Osaka","Kyoto","Nagoya","Yokohama","Seoul","Busan","Beijing","Shanghai",
  "Hong Kong","Shenzhen","Singapore","Kuala Lumpur","Bangkok","Jakarta","Manila",
  "Sydney","Melbourne","Perth","Brisbane","Auckland","Wellington","Delhi","Mumbai",
  "Bangalore","Chennai","Karachi","Islamabad","Dubai","Abu Dhabi","Doha","Riyadh",
  "Tehran","Jerusalem","Amman","Baghdad"];

//---------------------------------------------------------------------------------------------------

const series = ["Trónok harca","Breaking Bad","Better Call Saul","The Walking Dead","Stranger Things",
    "The Witcher","Westworld","The Mandalorian","Vikingek","Dexter","Sherlock","House",
    "Lost","Friends","How I Met Your Mother","The Big Bang Theory","Grey's Anatomy",
    "NCIS","The Simpsons","Family Guy","South Park","Rick és Morty","Arrow","The Flash",
    "Supergirl","Gotham","Titans","Doom Patrol","Smallville","Buffy, a vámpírok réme",
    "Charmed","Született feleségek","Desperate Housewives","Gilmore Girls","The Crown",
    "Mindhunter","Narcos","Breaking Bad: El Camino","Better Call Saul","Peaky Blinders",
    "Fargo","True Detective","Money Heist","La Casa de Papel","The Boys","The Umbrella Academy",
    "The Expanse","Star Trek","Star Trek: Discovery","Star Trek: Picard","Star Trek: Strange New Worlds",
    "Stargate","Stargate Atlantis","Stargate Universe","Battlestar Galactica","Lost in Space",
    "House of Cards","13 Reasons Why","The OA","Sense8","Stranger Things","Dark","The 100",
    "Prison Break","Sons of Anarchy","Vikings: Valhalla","The Last Kingdom","Peaky Blinders",
    "The Handmaid's Tale","Westworld","Fargo","Chernobyl","Band of Brothers","The Pacific",
    "The Sopranos","Mad Men","Boardwalk Empire","The Wire","Ozark","Breaking Bad","Better Call Saul",
    "True Blood","The Vampire Diaries","Supernatural","Teen Wolf","Riverdale","Lucifer",
    "Shadow and Bone","Bridgerton","The Queen's Gambit","Emily in Paris","The Mandalorian",
    "Andor","Obi-Wan Kenobi","Loki","WandaVision","Hawkeye","Moon Knight","Ms. Marvel","She-Hulk"];

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
//NEM JÓ
const beauty = ["arckrém","testápoló","sampon","balzsam","dezodor","parfüm","arcpakolás","smink","rúzs","szempillaspirál",
    "szemhéjpúder","körömlakk","körömreszelő","arcmaszk","bőrradír","fogkrém","fogkefe","hajkefe","fésű","hajlakk",
    "hajformázó","sunscreen","arcmasszázs","szérum","hajolaj","testvaj","arcvíz","tonik","szemránckrém","hidratáló krém"];

//---------------------------------------------------------------------------------------------------
//NEM JÓ
const movies = ["kutya1","kutya2","kutya3"];

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
    "Yu-Gi-Oh!","Bakugan","Naruto","One Piece","Fairy Tail",
    "Bogyó és Babóca","Boribon","Kippkopp","Manó Benedek","Rumcájsz",
    "Sebaj Tóbiás","Kukori és Kotkoda","Kérem a következőt! (Doktor Bubó)","Tévémaci","Cirmos cica haj",
    "A három pillangó","A kóró és a kismadár","A kismalac és a farkasok","Az aranyszőrű bárány","A szegény ember szőlője",
    "A rest macska","A kerek kő","Az égig érő fa","Kacor király","Világszép Nádszálkisasszony",
    "Tündérszép Ilona","Fehérlófia","Kőmorzsoló","Kőműves Kelemen","Mátyás király meséi",
    "Égig érő paszuly","A favágó és a vízitündér","A háromágú tölgyfa tündére","A székely és az ördög","Szegény legény szerencséje",
    "A csillagszemű juhász","A halász és az aranyhal","Holle anyó","A vasfüggönyös ház","Az okos lány",
    "Az aranyhalacska","Az aranymadár","A hűséges juhász","A varázsló inasa","A sárkányölő királyfi",
    "A fekete bika","A fehérló","Az aranyszőrű paripa","Táltos paripa","A világ legszegényebb embere",
    "A rózsaszál","A rézfaszú bagoly (népmesei tréfás változat, poén)","A három kívánság","A két bors ökröcske","A hét holló",
    "Az égig érő fa","A kígyókirály","A kőleves másképp","A muzsikus kecskebéka","A világszép lány",
    "A vad hattyúk","A kis gyufaárus lány","A hókirálynő","Az ólomkatona","A piros cipellők",
    "A császár új ruhája","A rendíthetetlen ólomkatona","Az aranygolyó","A hableány története","A három királyfi"];

//---------------------------------------------------------------------------------------------------
//NEM JÓ
const brands = ["McDonald's","Starbucks","Nike","Adidas","Puma","Reebok","Rolex","Apple","Microsoft","Intel",
    "Samsung","Sony","Netflix","Amazon","Google","Facebook","Twitter","Coca-Cola","Pepsi","Red Bull",
    "Lego","Ikea","Toyota","BMW","Mercedes-Benz","Volkswagen","Audi","Ferrari","Lamborghini","Chanel",
    "Gucci","Prada","Louis Vuitton","Hermès","Zara","H&M","Uniqlo","Levi's","Canon","Nikon"];

//---------------------------------------------------------------------------------------------------

const greatplaces = ["Eiffel-torony","Louvre","Notre-Dame","Mont Saint-Michel","Versailles","Sacré-Cœur",
    "Colosseum","Római Fórum","Pantheon","Trevi-kút","Pisa tornya","Vatikán","Szent Péter-bazilika",
    "Sistine Chapel","St. Mark’s Basilica","Dózse-palota","Akropolisz","Parthenon","Delphi",
    "Szfinx","Piramisok","Luxor templom","Karnak templom","Valley of the Kings","Stonehenge",
    "Big Ben","Tower of London","Buckingham Palace","London Eye","Westminster Abbey",
    "Tower Bridge","Cambridge","Oxford","Edinburgh Castle","Loch Ness","Neuschwanstein kastély",
    "Brandenburgi kapu","Berlin fal maradványai","Reichstag","Sagrada Familia","Park Güell",
    "Casa Batlló","La Pedrera","Alhambra","Mezquita","Prága óváros","Károly híd",
    "Hradčany","Wawel","Krakkói óváros","Bécsi Stephansdom","Hofburg","Schönbrunn palota",
    "Melk apátság","Salzburg vár","Hallstatt","Luzerni híd","Bern óváros","Genfi-tó",
    "Niagara-vízesés","Grand Canyon","Yellowstone","Yosemite","Mount Rushmore","Statue of Liberty",
    "Times Square","Central Park","Hollywood","Disneyland","Universal Studios","Golden Gate híd",
    "Las Vegas Strip","Empire State Building","Burj Khalifa","Sheikh Zayed mecset","Petra",
    "Jeruzsálem óváros","Machu Picchu","Christ the Redeemer","Copacabana","Iguazú-vízesés",
    "Pantanal","Salar de Uyuni","Galápagos-szigetek","Victoria-vízesés","Table Mountain",
    "Robben-sziget","Kiyomizu-dera","Fushimi Inari-taisha","Kinkaku-ji","Himeji kastély",
    "Tokyo torony","Shibuya Crossing","Sydney Opera House","Harbour Bridge","Great Barrier Reef",
    "Uluru","Ayers Rock","Rotorua geotermikus terület","Wellington Parlament","Auckland Sky Tower",
    "Hanoi óváros","Ha Long-öböl","Angkor Wat","Bayon templom","Ta Prohm","Borobudur",
    "Prambanan","Mount Fuji","Kiyosumi kert","Osaka vár","Gyeongbokgung","Changdeokgung",
    "Seoraksan Nemzeti Park","DMZ","Petronas Towers","Batu Caves","Marina Bay Sands","Gardens by the Bay",
    "Sentosa","Sultan Ahmed mecset","Kapalı bazár","Hagia Sophia","Topkapi palota","Blue Mosque",
    "Epheszosz","Pamukkale","Cappadocia","Göreme","Istanbul óváros","Bosphorus híd",
    "Sharm el-Sheikh","Gízai piramisok","Kairói múzeum","Luxor","Aswan","Abu Simbel",
    "Taj Mahal","Jaipur palota","Hawa Mahal","Agra","Golden Temple","Varanasi","Khajuraho",
    "Himeji kastély","Fushimi Inari","Kinkaku-ji","Gion","Arashiyama bambuszliget",
    "Mount Kilimanjaro","Serengeti Nemzeti Park","Ngorongoro kráter","Victoria Falls","Table Mountain",
    "Robben-sziget","Káprázatos Szahara","Marokkói bazár","Casablanca","Marrakech medina","Essaouira"];

//---------------------------------------------------------------------------------------------------

const greatpeople = [  "Nagy Sándor","Julius Caesar","Augustus","Néró","Traianus","Konstantin",
  "Attila","Dzsingisz Kán","IV. Béla","Mátyás király","Oroszlánszívű Richárd",
  "Fülöp király","VIII. Henrik","I. Erzsébet","Napóleon","XVI. Lajos",
  "Marie Antoinette","George Washington","Abraham Lincoln","Benjamin Franklin",
  "Thomas Jefferson","Theodore Roosevelt","Franklin D. Roosevelt","Winston Churchill",
  "Joseph Stalin","Lenin","Karl Marx","Hitler","Mussolini","Mao Ce-tung",
  "Ho Si Minh","Nelson Mandela","Gandhi","Indira Gandhi","X. Pius pápa","II. János Pál pápa",
  "XVI. Benedek pápa","Angela Merkel","Charles de Gaulle","Simón Bolívar",
  "Che Guevara","Castro","Pol Pot","Kim Ir Szen","Kim Dzsongil","Kim Dzsongun",
  "Arisztotelész","Platón","Szókratész","Galilei","Newton","Einstein",
  "Marie Curie","Nikola Tesla","Leonardo da Vinci","Michelangelo","Rembrandt",
  "Van Gogh","Picasso","Mozart","Beethoven","Bach","Liszt Ferenc",
  "Chopin","Tolsztoj","Dosztojevszkij","Shakespeare","Goethe","Homer"];

//---------------------------------------------------------------------------------------------------

const myth = ["Zeusz","Héra","Poszeidón","Athéné","Apollón","Artemisz","Aresz","Hefaisztosz","Hermész","Afrodité",
    "Hádész","Dionüszosz","Krónosz","Gaia","Jupiter","Juno","Neptunusz","Mars","Minerva","Venus",
    "Vulcanus","Mercurius","Odin","Thor","Loki","Freya","Baldur","Tyr","Heimdall","Frigg",
    "Valhalla","Mjölnir","Yggdrasil","Ra","Ízisz","Ozirisz","Hórusz","Anubisz","Bastet","Sekhmet",
    "Cerberus","Minotaurusz","Kentaur","Szatír","Medúza","Hydra","Szirén","Chiméra","Pegazus","Főnix",
    "Szkülla","Kharübdisz","Labirintus","Mount Olympus","Tartarusz","Elysium","Aranygyapjú",
    "Argonauták","Pandóra szelencéje","Excalibur","Avalon","Arthur király","Merlin","Camelot",
    "Sir Lancelot","Guinevere","Mordred","Pan","Nike","Nemesis","Thanatos","Hypnos","Hippogriff",
    "Hippokampusz","Tiamat","Gilgames","Ishtar","Marduk","Utnapishtim","Anu"];

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
    "migráció","szabvány","szakértő","referencia","szindróma"];

//---------------------------------------------------------------------------------------------------

const events = ["Karácsony","Újév","Húsvét","Nagypéntek","Húsvét hétfő","Halloween","Mindenszentek",
    "Október 23","Március 15","Szent Patrik nap","Kínai újév","Hanuka","Ramadán","Diwali",
    "Hanami (cseresznyefa virágzás)","Oktoberfest","Thanksgiving","Függetlenség napja (USA)",
    "Függetlenség napja (Magyarország)","Vízkereszt","Szent Miklós nap","Bálint nap","Anyák napja",
    "Apák napja","Farsang","Mikulás","Advent első vasárnapja","Advent második vasárnapja",
    "Advent harmadik vasárnapja","Advent negyedik vasárnapja","Pünkösd","Máriák napja",
    "Szent György nap","Mikulás napja","Búcsú","Márton nap","Húsvéti locsolkodás","Bábos nap",
    "Föld napja","Víz világnapja","Madarak és fák napja","Színház világnapja","Tánc világnapja",
    "Foci világbajnokság","Olimpia","Eurovíziós Dalfesztivál","Szüreti fesztivál","Borfesztivál",
    "Szent Iván éj","Nyári napforduló","Téli napforduló","Szent András nap","Szent Márton nap",
    "Családi nap","Egészség világnapja","Könyv világnapja","Múzeumok éjszakája","Színházi fesztivál",
    "Karnevál","Maszkabál","Tavaszi napéjegyenlőség","Őszi napéjegyenlőség","Halloween party",
    "Húsvéti tojáskeresés","Szent László nap","Szent István nap","Új kenyér ünnepe"
];

//-------------------------------------------------------------------------------------------------

const addictions = ["Jack Daniels","Lucky Strike","Pálinka","Whiskey","Vodka","Rum","Gin","Cognac","Sör","Borkóstolás",
    "Félkarú rabló","Black Jack","Rulett","Poker","Kártyázás","Lottó","Szerencsejáték","Koktélok","Bár",
    "Vibrátor","Misszionárius","Szexjátékok","Pornó","Strip klub","Erotikus filmek","Kokain","Marihuána",
    "Dohányzás","Cigaretta","Szivar","E-cigaretta","Füves cigi","Hash","Energiaital","Koffein","Kávé",
    "Red Bull","Fekete tea","Játékfüggőség","Mobiljáték","Online casino","Szerencsejáték app","Alkoholizmus",
    "Italozás","Piálás","Sörözés","Kocsma","Buli","Fesztivál","Részegség","Italozós este","Betyárkodás",
    "Csavargás","Éjszakai élet","Bulizás","Diszkó","Szórakozóhely","Napozás (mellékhatásokkal)","Szolárium",
    "Shopoholizmus","Online vásárlás","Fogyasztói mánia","Gyorsétterem","Csipsz","Üdítő","Édesség","Csokoládé",
    "Ételkényeztetés","Netflix binge","Szelfizés","Instagram","TikTok","YouTube","Videójáték","FPS játék",
    "FPS lövöldözés","MMORPG","Szabadidő eltékozlás","Hobbyfüggőség","Sportfüggőség","Extreme sportok","Autóverseny",
    "Motorozás","Drift","Kávészünet","Dohányzás közben kávé","Éjszakai túrázás"]

clubs, animals, f1, cars, dogs, locals, items, heroes, cities, series, games, beauty, movies, stars, countries, fairytails,
brands, greatpeople, greatplaces, myth, what, events, addictions

const topics = {};
topics["clubs"] = [...clubs];
topics["animals"] = [...animals];
topics["f1"] = [...f1];
topics["cars"] = [...cars];
topics["dogs"] = [...dogs];
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