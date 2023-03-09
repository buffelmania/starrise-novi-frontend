import '../WistJeDat_Styles.css'


const elements = [
    { id: 1, title: "Wist je dat?", inhoud: "De maan steeds verder van de aarde gaat?\n" +
            "                            Hierdoor zal in de toekomst de zon niet\n" +
            "                            meer volledig verduisterd kunnen worden.",  content: "Dit komt door het effect van de getijdenkrachten die de maan op de aarde uitoefent. De getijdenkrachten veroorzaken een kleine verandering in de rotatie van de aarde, waardoor de energie wordt overgedragen aan de maan en deze zich langzaam van de aarde verwijdert. Deze beweging van de maan van de aarde af staat bekend als de \"maanrecessie\".\n" +
            "\n" +
            "De maanrecessie is een relatief langzaam proces en het zal nog vele miljoenen jaren duren voordat de maan zich ver genoeg van de aarde bevindt om de zonsverduisteringen onmogelijk te maken. Wetenschappers schatten dat de afstand tussen de maan en de aarde ongeveer 3,8 centimeter per jaar toeneemt. Dit betekent dat de maan zich over enkele miljarden jaren op een zodanige afstand van de aarde zal bevinden dat de zonsverduisteringen niet langer mogelijk zijn.\n" +
            "\n" +
            "Het is belangrijk op te merken dat dit proces van de maanrecessie geen bedreiging vormt voor de stabiliteit van de aarde. Hoewel het proces van de maanrecessie geleidelijk aan plaatsvindt, is het effect ervan op de aarde relatief klein en heeft het geen invloed op ons dagelijks leven." },
    { id: 2, title: "Wist je dat?", inhoud: "De zon in vergelijking met veel andere sterren\n" +
            "                            maar een hele gemiddelde ster is? En toch is de Zon\n" +
            "                            maar liefst 1.300.000 keer groter dan de aarde", content: "Sterren worden ingedeeld op basis van hun spectraalklasse, die gebaseerd is op hun oppervlaktetemperatuur. De zon behoort tot de klasse G, terwijl andere sterren kunnen variëren van zeer koele M-dwergen tot zeer hete O-sterren.\n" +
            "\n" +
            "Hoewel de zon een gemiddelde ster is, is het wel de ster die het dichtst bij de aarde staat en daardoor van groot belang voor het leven op onze planeet. De zon is verantwoordelijk voor het voorzien van licht en warmte aan onze planeet en is de drijvende kracht achter het weer en het klimaat.\n" +
            "\n" +
            "Wat betreft de grootte van de zon, is het inderdaad verbazingwekkend om te beseffen dat de zon maar liefst 1.300.000 keer groter is dan de aarde. Het is een enorme bal van heet plasma die ongeveer 99,86% van de totale massa van het zonnestelsel uitmaakt. Ondanks de enorme grootte is de zon echter nog steeds slechts een van de vele sterren in onze melkweg en zelfs in het universum als geheel. Er zijn sterren die veel groter zijn dan de zon, zoals de superreuzensterren zoals Betelgeuze en Antares, die tientallen tot honderden keren groter zijn dan de zon.\n" +
            "\n" +
            "Daarentegen zijn er ook sterren die kleiner zijn dan de zon, zoals de rode dwergsterren, die minder dan een tiende van de massa van de zon hebben. Dit type sterren komt het meest voor in het universum.\n" +
            "\n" +
            "Naast grootte zijn er ook andere eigenschappen waarmee sterren kunnen worden vergeleken, zoals temperatuur, helderheid en levensduur. Sterren variëren sterk in deze eigenschappen, afhankelijk van hun massa en evolutiestadium. Grotere sterren zijn meestal heter en helderder dan kleinere sterren en hebben ook een kortere levensduur. Kleine sterren daarentegen zijn koeler, minder helder en hebben een veel langere levensduur.\n" +
            "\n" +
            "Kortom, de zon is een middelgrote ster in het universum en bevindt zich ergens in het midden van het spectrum van sterren wat grootte en eigenschappen betreft. Er zijn veel sterren die kleiner of groter zijn dan de zon en die variëren in temperatuur, helderheid en levensduur." },
    { id: 3, title: "Wist je dat?", inhoud: "We zonder Jupiter veel meer meteoriet-inslagen zouden hebben en waarschijnlijk niet eens zouden hebben bestaan? ", content: "Jupiter is de grootste planeet in ons zonnestelsel en heeft een zeer sterke zwaartekracht. Deze zwaartekracht werkt als een soort 'stofzuiger' die alle planetoïden en kometen opzuigt die te dicht bij de planeet komen. Dit betekent dat Jupiter veel van de potentieel gevaarlijke objecten in ons zonnestelsel uit de baan van de aarde haalt voordat ze ons kunnen raken.\n" +
            "\n" +
            "Wetenschappers denken dat Jupiter een belangrijke rol heeft gespeeld in het vormen van ons zonnestelsel. Het is mogelijk dat Jupiter verantwoordelijk was voor het afbuigen van sommige objecten in ons zonnestelsel en het voorkomen van botsingen tussen planeten tijdens de vorming ervan.\n" +
            "\n" +
            "Zonder Jupiter zou ons zonnestelsel waarschijnlijk er heel anders uitzien en zou de kans op meteoriet-inslagen op de aarde veel groter zijn. Dit zou mogelijk leiden tot een heel ander ontstaansgeschiedenis van de aarde en de mogelijkheid van menselijk leven zou waarschijnlijk veel kleiner zijn." },
    { id: 4, title: "Wist je dat?", inhoud: "Als de Maan opkomt, je vaak ook Venus kunt zien? Venus is met het blote oog\n" +
            "                            te zien als een felle fonkelende ster die net boven de Horizon staat.", content: "Wanneer de maan opkomt, kun je vaak Venus zien, vooral als de planeet net boven de horizon staat. Dit komt doordat Venus dicht bij de zon staat en zich vaak in de buurt van de opkomst- of ondergangspunten van de zon bevindt. Venus reflecteert het zonlicht en zendt het vervolgens uit in de richting van de aarde, waardoor het als een heldere fonkelende ster aan de hemel verschijnt.\n" +
            "\n" +
            "Het is een prachtig gezicht om de maan en Venus samen te zien aan de hemel. Dit is vooral het geval als Venus in een bepaalde fase is, vergelijkbaar met de fasen van de maan, waardoor het eruitziet als een klein, helder maantje naast de maan. Dit kan een spectaculair gezicht zijn en het is zeker de moeite waard om te bekijken als je de kans hebt om het te zien."},
    { id: 5, title: "Wist je dat?", inhoud: "Als de Zon aan de ene kant van de Aarde staat en Maan precies aan de andere kant,\n" +
            "                            je dan springtij hebt? Door de aantrekkingskracht van zowel de Zon als de Maan\n" +
            "                            wordt het water ophoog gestuwd en krijg je springtij. Dit was een van de oorzaken\n" +
            "                            van de watersnoodramp in 1953.", content: "Zowel de Zon als de Maan hebben een aantrekkingskracht op de Aarde, die getijden veroorzaakt. Wanneer de Zon en de Maan in een rechte lijn ten opzichte van de Aarde staan (bijvoorbeeld tijdens nieuwe maan of volle maan), werken hun aantrekkingskrachten samen en ontstaat er een hoger getijverschil dan normaal. Dit heet springtij.\n" +
            "\n" +
            "Aan de andere kant, wanneer de Zon en de Maan zich in een rechte hoek ten opzichte van de Aarde bevinden (bijvoorbeeld tijdens eerste of derde kwartier), werken hun aantrekkingskrachten elkaar juist tegen en ontstaat er een lager getijverschil dan normaal. Dit heet doodtij.\n" +
            "\n" +
            "Het verschil tussen springtij en doodtij is vooral belangrijk voor gebieden met een grote getijdenbeweging, zoals bijvoorbeeld de kustgebieden. In deze gebieden kan springtij leiden tot overstromingen en andere problemen, terwijl doodtij juist minder gunstig kan zijn voor scheepvaart en andere activiteiten die afhankelijk zijn van getijden."},
    { id: 6, title: "Wist je dat?", inhoud: "De maan ook ronddraait? Wij zien alleen telkens dezelfde kant van de maan omdat de\n" +
            "                            rotatiesnelheid van de maan precies gelijk loopt met snelheid van de baan om de Aarde.", content: "Dit fenomeen wordt 'gebonden rotatie' genoemd.\n" +
            "\n" +
            "Gebonden rotatie is een veelvoorkomend fenomeen in het zonnestelsel en komt voor bij veel manen van planeten en planetoïden. Het komt voort uit het feit dat de zwaartekracht van de planeet (in dit geval de Aarde) een aantrekkingskracht uitoefent op de maan die leidt tot een vertraging in de rotatie van de maan. Hierdoor raakt de rotatiesnelheid van de maan gesynchroniseerd met de omloopsnelheid om de planeet, waardoor altijd dezelfde kant van de maan naar de planeet gericht blijft.\n" +
            "\n" +
            "Dit betekent dat er aan de andere kant van de Maan een volledig andere omgeving is dan aan de kant die wij kunnen zien vanaf de Aarde. De kant die we niet kunnen zien wordt de 'donkere kant' van de Maan genoemd en werd voor het eerst gefotografeerd door de Sovjet-Unie's Luna 3-ruimtesonde in 1959."}
];


export default elements;