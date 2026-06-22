/* =============================================
   MAIN.JS — WHZ GAMeS Hub
   Dark Mode, Mobile Menu, Scroll Effects
   ============================================= */

/* =============================================
   TEAMS — Quelle für eSport-Statistiken.
   active: false = ehemals aktiv (kein Zählen)
   ============================================= */
var TEAMS = [
  { id: 'formula1',          name_de: 'F1',                name_en: 'F1',                playerCount: 3, active: true,  org: 'wireheadz' },
  { id: 'league-of-legends', name_de: 'League of Legends', name_en: 'League of Legends', playerCount: 5, active: true,  org: 'wireheadz' },
  { id: 'rocket-league',     name_de: 'Rocket League',     name_en: 'Rocket League',     playerCount: 4, active: true,  org: 'wireheadz' },
  { id: 'valorant',          name_de: 'Valorant',          name_en: 'Valorant',          playerCount: 0, active: false, org: 'wireheadz' }
];

var _activeTeams  = TEAMS.filter(function(t) { return t.active; });
var _teamCount    = _activeTeams.length;
var _playerCount  = _activeTeams.reduce(function(s, t) { return s + t.playerCount; }, 0);

function _gameList(lang) {
  var names = _activeTeams.map(function(t) { return lang === 'en' ? t.name_en : t.name_de; });
  if (names.length === 0) return '';
  if (names.length === 1) return names[0];
  return names.slice(0, -1).join(', ') + ' & ' + names[names.length - 1];
}


/* =============================================
   EVENTS — alle Events, Reihenfolge egal.
   Einfach neue Events eintragen. JavaScript
   entscheidet anhand des heutigen Datums
   automatisch: Datum in der Zukunft → kommend,
   Datum in der Vergangenheit → vergangen.
   ============================================= */
var EVENTS = [
  {
    slug:          'lange-nacht-technik-2026',
    date_de:       '19.06.2026',
    date_en:       '19.06.2026',
    isoDate:       '2026-06-19T18:00:00',
    title_de:      'Lange Nacht der Technik 2026',
    title_en:      'Long Night of Technology 2026',
    img:           'assets/images/events/lange-nacht-technik-2026-1.jpg',
    images:        ['assets/images/events/lange-nacht-technik-2026-1.jpg'],
    location_de:   'Westsächsische Hochschule Zwickau',
    location_en:   'West Saxon University of Applied Sciences Zwickau',
    categories:    [{de:'Forschung', en:'Research'}, {de:'Technologie', en:'Technology'}],
    desc_de:       'Die Nachwuchsforschergruppe „Game Change“ präsentiert aktuelle Projekte zu Gamification, Fachkräfteentwicklung und nachhaltiger Transformation. Mit E-Racing-Simulator und Austausch mit Forschenden.',
    desc_en:       "The junior research group 'Game Change' presents current projects on gamification, talent development and sustainable transformation. Featuring an e-racing simulator and exchange with researchers.",
    desc_ls_de:    'Die Gruppe „Game Change“ zeigt ihre Forschungs-Projekte. Es geht um Gamification und Fachkräfte. Es gibt einen E-Racing-Simulator.',
    desc_ls_en:    "The 'Game Change' group shows their research projects. The topics are gamification and talent. There is an e-racing simulator.",
    modal_desc_de: 'Zur Langen Nacht der Technik präsentiert die Nachwuchsforschergruppe „Game Change“ ihre aktuellen Forschungsprojekte rund um Gamification, Fachkräfteentwicklung und nachhaltige Transformation. Besucherinnen und Besucher erhalten praxisnahe Einblicke, wie spielbasierte Ansätze Innovationen fördern und komplexe Veränderungen verständlicher machen können.',
    modal_desc_en: 'At the Long Night of Technology, the junior research group "Game Change" presents its current research projects on gamification, talent development and sustainable transformation. Visitors receive hands-on insights into how game-based approaches drive innovation and make complex change more understandable.',
    highlights_de: ['Vorstellung der Forschungsgruppe „Game Change“', 'Einblicke in aktuelle Forschungsprojekte', 'E-Racing-Simulator für energieeffizientes Fahren', 'Gamification für Lernen und Transformation', 'Austausch mit Forschenden und Studierenden'],
    highlights_en: ['Presentation of the "Game Change" research group', 'Insights into current research projects', 'E-racing simulator for energy-efficient driving', 'Gamification for learning and transformation', 'Exchange with researchers and students'],
    partners:      []
  },
  {
    slug:          'viele-wege-festival-2026',
    date_de:       '30.05.2026',
    date_en:       '30.05.2026',
    title_de:      'Viele Wege Festival 2026',
    title_en:      'Viele Wege Festival 2026',
    img:           'assets/images/events/viele-wege-festival-2026-1.jpg',
    images:        ['assets/images/events/viele-wege-festival-2026-1.jpg', 'assets/images/events/viele-wege-festival-2026-2.jpg'],
    location_de:   'Innenstadt Zwickau',
    location_en:   'Zwickau City Centre',
    categories:    [{de:'Community', en:'Community'}],
    desc_de:       'Der GAMeS Hub der WHZ präsentierte sich mit interaktiven Gaming- und Forschungsangeboten einem breiten Publikum und machte die Potenziale von Gaming für Bildung und Innovation erlebbar.',
    desc_en:       'GAMeS Hub WHZ presented interactive gaming and research activities to a wide audience, making the potential of gaming for education and innovation tangible.',
    desc_ls_de:    'Der GAMeS Hub war beim Viele Wege Festival. Viele Menschen konnten Gaming ausprobieren. Wir haben gezeigt: Gaming hilft beim Lernen.',
    desc_ls_en:    'The GAMeS Hub was at the Viele Wege Festival. Many people could try gaming. We showed: gaming helps with learning.',
    modal_desc_de: 'Beim Viele Wege Festival präsentierte sich das GAMeS Hub der WHZ mit interaktiven Gaming- und Forschungsangeboten einem breiten Publikum. Ziel war es, die Potenziale von Gaming für Bildung, Innovation und gesellschaftlichen Wandel erlebbar zu machen und mit Besucherinnen und Besuchern ins Gespräch zu kommen.',
    modal_desc_en: 'At the Viele Wege Festival, GAMeS Hub WHZ presented interactive gaming and research activities to a wide audience. The aim was to make the potential of gaming for education, innovation and social change tangible and to engage with visitors.',
    highlights_de: ['Interaktive Gaming-Stationen', 'Präsentation von Forschungsprojekten', 'Einblicke in Gamification und Esports', 'Mitmachangebote für alle Altersgruppen', 'Austausch mit der Zwickauer Community'],
    highlights_en: ['Interactive gaming stations', 'Presentation of research projects', 'Insights into gamification and eSports', 'Activities for all age groups', 'Exchange with the Zwickau community'],
    partners:      []
  },
  {
    slug:          'hochschulinformationstag-2026',
    date_de:       '15.03.2026',
    date_en:       '15.03.2026',
    title_de:      'Hochschulinformationstag 2026',
    title_en:      'University Open Day 2026',
    img:           'assets/images/events/hochschulinformationstag-2026-1.jpg',
    images:        ['assets/images/events/hochschulinformationstag-2026-1.jpg', 'assets/images/events/hochschulinformationstag-2026-2.jpg', 'assets/images/events/hochschulinformationstag-2026-3.jpg'],
    location_de:   'Westsächsische Hochschule Zwickau',
    location_en:   'West Saxon University of Applied Sciences Zwickau',
    categories:    [{de:'Lehre', en:'Teaching'}, {de:'Forschung', en:'Research'}],
    desc_de:       'Studieninteressierte erhielten Einblicke in Gaming, Esports und angewandte Forschung an der WHZ. Mit Gaming-Stationen, Simulatoren und Vorstellung der Forschungsgruppe „Game Change“.',
    desc_en:       "Prospective students gained insights into gaming, eSports and applied research at WHZ. Featuring gaming stations, simulators and a presentation of the 'Game Change' research group.",
    desc_ls_de:    'Schüler konnten die WHZ besuchen. Sie haben Gaming und eSport kennengelernt. Die Gruppe „Game Change“ hat sich vorgestellt.',
    desc_ls_en:    "Students could visit WHZ. They learned about gaming and eSport. The 'Game Change' group presented itself.",
    modal_desc_de: 'Der Hochschulinformationstag bot Studieninteressierten spannende Einblicke in die Welt von Gaming, Esports und angewandter Forschung an der WHZ. Besucherinnen und Besucher konnten moderne Gaming-Technologien ausprobieren und sich über die Verbindung von Lehre, Forschung und digitalen Innovationen informieren.',
    modal_desc_en: 'The university open day offered prospective students exciting insights into the world of gaming, eSports and applied research at WHZ. Visitors could try modern gaming technologies and learn about the connection between teaching, research and digital innovation.',
    highlights_de: ['Gaming- und Simulationsstationen', 'Einblicke in das GAMeS Hub', 'Vorstellung der Forschungsgruppe „Game Change“', 'Austausch mit Studierenden und Forschenden', 'Informationen zu Studiengängen der WHZ'],
    highlights_en: ['Gaming and simulation stations', 'Insights into the GAMeS Hub', 'Presentation of the "Game Change" research group', 'Exchange with students and researchers', 'Information on WHZ degree programmes'],
    partners:      []
  },
  {
    slug:          'tag24-2025',
    date_de:       '18.10.2025',
    date_en:       '18.10.2025',
    title_de:      'TAG24 Talentgame 2025',
    title_en:      'TAG24 Talentgame 2025',
    img:           'https://images.prismic.io/wireheadz/aA-b7_IqRLdaBrTe_Screenshot2024-09-15211516.png?auto=format%2Ccompress&fit=max&w=400',
    images:        ['https://images.prismic.io/wireheadz/aA-b7_IqRLdaBrTe_Screenshot2024-09-15211516.png?auto=format%2Ccompress&fit=max&w=1920'],
    location_de:   'Cinestar Roter Turm, Chemnitz',
    location_en:   'Cinestar Roter Turm, Chemnitz',
    categories:    [{de:'Kooperation', en:'Partnership'}, {de:'Turnier', en:'Tournament'}],
    desc_de:       'Die 2. Auflage des Talentgames in Kooperation mit TAG24. Turnier mit Firmenpräsenzen, Gaming-Wettkampf und Networking im Cinestar Chemnitz.',
    desc_en:       'The 2nd edition of the Talentgame in partnership with TAG24. Tournament with company booths, gaming competition and networking at Cinestar Chemnitz.',
    desc_ls_de:    'Das war das 2. TAG24 Talentgame. Es gab ein Turnier und viele Firmen. Das Event war im Cinestar Chemnitz.',
    desc_ls_en:    'This was the 2nd TAG24 Talentgame. There was a tournament and many companies. The event was at Cinestar Chemnitz.',
    modal_desc_de: 'Die 2. Auflage des Talentgames in Kooperation mit TAG24. 20 Aussteller präsentierten sich im Cinestar Roter Turm in Chemnitz. Neben einem Rocket-League-Turnier und Super-Mario-Runden gab es ein Freispielareal in den Kinosälen sowie Gewinnspiele.',
    modal_desc_en: 'The 2nd edition of the Talentgame in partnership with TAG24. 20 exhibitors presented themselves at Cinestar Roter Turm in Chemnitz. Alongside a Rocket League tournament and Super Mario rounds, there was a free-play area in the cinema halls plus prize giveaways.',
    highlights_de: ['20 Aussteller', 'Rocket League Turnier', 'Super Mario Gaming', 'Freispielareal in Kinosälen', 'Gewinnspiele'],
    highlights_en: ['20 exhibitors', 'Rocket League tournament', 'Super Mario gaming', 'Free-play area in cinema halls', 'Prize giveaways'],
    partners:      ['TAG24']
  },
  {
    slug:          'fc25-cfc',
    date_de:       '06.09.2025',
    date_en:       '06.09.2025',
    title_de:      'FC25 Community Turnier im CFC Stadion',
    title_en:      'FC25 Community Tournament at CFC Stadium',
    img:           'https://images.prismic.io/wireheadz/aA-Yc_IqRLdaBrQj_0b8a6cbb-eb95-4ade-b6a0-b20b158f7744.png?auto=format%2Ccompress&fit=max&w=400',
    images:        ['https://images.prismic.io/wireheadz/aA-Yc_IqRLdaBrQj_0b8a6cbb-eb95-4ade-b6a0-b20b158f7744.png?auto=format%2Ccompress&fit=max&w=1920'],
    location_de:   'CFC Stadion, Chemnitz',
    location_en:   'CFC Stadium, Chemnitz',
    categories:    [{de:'Community', en:'Community'}, {de:'Turnier', en:'Tournament'}],
    desc_de:       'Gaming trifft Fußball-Atmosphäre: FC25 Community-Turnier direkt im Stadion des Chemnitzer FC mit echtem Stadion-Flair.',
    desc_en:       'Gaming meets football atmosphere: FC25 community tournament directly in Chemnitzer FC stadium with real stadium vibes.',
    desc_ls_de:    'Wir haben FC25 im Fußball-Stadion gespielt. Das Stadion gehört dem Chemnitzer FC. Es war ein Community-Turnier.',
    desc_ls_en:    'We played FC25 in a football stadium. The stadium belongs to Chemnitzer FC. It was a community tournament.',
    modal_desc_de: 'WireHeadZ und Sports United Chemnitz luden zum FC25 Community-Turnier direkt im CFC Stadion ein. Anmeldung über den Sporty2025-Discord-Server. Gaming trifft Fußball-Atmosphäre im echten Profistadion.',
    modal_desc_en: 'WireHeadZ and Sports United Chemnitz hosted the FC25 community tournament directly at CFC Stadium. Registration via the Sporty2025 Discord server. Gaming meets football atmosphere in a real professional stadium.',
    highlights_de: ['Gaming im echten Fußballstadion', 'Community-Turnier', 'Anmeldung via Discord (Sporty2025)'],
    highlights_en: ['Gaming in a real football stadium', 'Community tournament', 'Registration via Discord (Sporty2025)'],
    partners:      ['Sports United Chemnitz', 'Chemnitzer FC']
  },
  {
    slug:          'gaming-mittelstand',
    date_de:       '06.11.2024',
    date_en:       '06.11.2024',
    title_de:      'Gaming trifft Mittelstand',
    title_en:      'Gaming Meets SMEs',
    img:           'https://images.prismic.io/wireheadz/aA-IQPIqRLdaBrDQ_b5852097-5107-4a7b-b6fe-eaac850e4383.webp?auto=format%2Ccompress&fit=max&w=400',
    images:        ['https://images.prismic.io/wireheadz/aA-IQPIqRLdaBrDQ_b5852097-5107-4a7b-b6fe-eaac850e4383.webp?auto=format%2Ccompress&fit=max&w=1920', 'https://images.prismic.io/wireheadz/aA-IP_IqRLdaBrDO_d3e99d58-f2ab-4bf4-9273-014f8af854ab.webp?auto=format,compress', 'https://images.prismic.io/wireheadz/aA-IP_IqRLdaBrDP_fafd5539-2e64-4a86-81a4-5d0267afd3be.webp?auto=format,compress', 'https://images.prismic.io/wireheadz/aA-IQfIqRLdaBrDR_840c5e5c-aaf5-49ce-979a-562c284fec69.webp?auto=format,compress'],
    location_de:   'Ubineum, Zwickau',
    location_en:   'Ubineum, Zwickau',
    categories:    [{de:'Business', en:'Business'}],
    desc_de:       'Gamification und eSport als Fachkräfteinstrument. Mit Expertenvorträgen, eSport-Livestream und Gründung des WireHeadZ Business Clubs.',
    desc_en:       'Gamification and eSport as a talent tool. With expert talks, an eSport livestream and the founding of the WireHeadZ Business Club.',
    desc_ls_de:    'Experten haben über Gaming für Unternehmen gesprochen. Wir haben den WireHeadZ Business Club gegründet. Es gab einen Live-eSport-Wettkampf.',
    desc_ls_en:    'Experts talked about gaming for companies. We founded the WireHeadZ Business Club. There was a live eSport match.',
    modal_desc_de: 'Im Rahmen des Forschungsprojekts „Wandel durch Gamification und eSport" zeigten V.-Prof. Dr. Manuela Sachse und Prof. Dr. Paul Goldmann, wie KMU Gamification und eSport für Marketing und Personalgewinnung nutzen können. Höhepunkt: die offizielle Gründung des WireHeadZ Business Clubs.',
    modal_desc_en: 'As part of the research project "Change through Gamification and eSport," Prof. Dr. Sachse and Prof. Dr. Goldmann showed how SMEs can use gamification and eSport for marketing and talent acquisition. Highlight: the official founding of the WireHeadZ Business Club.',
    highlights_de: ['Expertenvorträge: Prof. Dr. Sachse & Prof. Dr. Goldmann', 'Live Rocket League Match', 'Gründung des WireHeadZ Business Clubs', 'Kooperation mit Fachkräfteallianz Landkreis Zwickau'],
    highlights_en: ['Expert talks: Prof. Dr. Sachse & Prof. Dr. Goldmann', 'Live Rocket League match', 'Founding of the WireHeadZ Business Club', 'Partnership with Fachkräfteallianz Landkreis Zwickau'],
    partners:      ['N+P Informationssysteme GmbH', 'FSV Zwickau eSport', 'TAG24 NEWS Deutschland GmbH', 'Marketing Club Zwickau e.V.']
  },
  {
    slug:          'sporty-2024',
    date_de:       '07.09.2024',
    date_en:       '07.09.2024',
    title_de:      'Demonstrationsevent eSport – Sporty 2024',
    title_en:      'eSport Demo Event – Sporty 2024',
    img:           'https://images.prismic.io/wireheadz/aA-Yc_IqRLdaBrQj_0b8a6cbb-eb95-4ade-b6a0-b20b158f7744.png?auto=format%2Ccompress&fit=max&w=400',
    images:        ['https://images.prismic.io/wireheadz/aA-Yc_IqRLdaBrQj_0b8a6cbb-eb95-4ade-b6a0-b20b158f7744.png?auto=format%2Ccompress&fit=max&w=1920', 'https://images.prismic.io/wireheadz/aA-YzPIqRLdaBrQy_1728466014146.jpg?auto=format,compress', 'https://images.prismic.io/wireheadz/aA-YqPIqRLdaBrQr_1728466009174.jpg?auto=format,compress'],
    location_de:   'CFC Stadion, Chemnitz',
    location_en:   'CFC Stadium, Chemnitz',
    categories:    [{de:'Community', en:'Community'}],
    desc_de:       'EA FC24 und Rocket League zum Sporty 2024 im CFC Stadion – digitale und analoge Spielerlebnisse vereint, eSport live erlebbar.',
    desc_en:       'EA FC24 and Rocket League at Sporty 2024 in CFC Stadium – digital and analogue gaming combined, eSport made tangible.',
    desc_ls_de:    'Wir haben eSport im CFC Stadion gezeigt. Wir haben EA FC24 und Rocket League gespielt. eSport war live zu sehen.',
    desc_ls_en:    'We showed eSport at CFC Stadium. We played EA FC24 and Rocket League. eSport was live to watch.',
    modal_desc_de: 'Im Rahmen von SPORTS UNITED 2024 zeigte WireHeadZ beim „Sporty“ im CFC Stadion, dass eSport mehr ist als Gaming. EA FC24 und Rocket League wurden live präsentiert – Teil des Programms von Chemnitz als Europäische Kulturhauptstadt 2025.',
    modal_desc_en: 'As part of SPORTS UNITED 2024, WireHeadZ demonstrated at “Sporty” in CFC Stadium that eSport is more than gaming. EA FC24 and Rocket League were presented live – part of Chemnitz European Capital of Culture 2025 programme.',
    highlights_de: ['EA FC24 Live-Demo', 'Rocket League Showcase', 'Teil von Chemnitz Kulturhauptstadt 2025', 'Digitale und analoge Spielerlebnisse vereint'],
    highlights_en: ['EA FC24 live demo', 'Rocket League showcase', 'Part of Chemnitz European Capital of Culture 2025', 'Digital and analogue gaming experiences combined'],
    partners:      ['Sports United Chemnitz', 'Chemnitzer FC']
  },
  {
    slug:          'tag24-2024',
    date_de:       '31.08.2024',
    date_en:       '31.08.2024',
    title_de:      'TAG24 Talentgame 2024',
    title_en:      'TAG24 Talentgame 2024',
    img:           'https://images.prismic.io/wireheadz/Z912OjxkOkZ2kInd_1728465079572.jpeg?auto=format%2Ccompress&fit=max&w=400',
    images:        ['https://images.prismic.io/wireheadz/Z912OjxkOkZ2kInd_1728465079572.jpeg?auto=format%2Ccompress&fit=max&w=1920'],
    location_de:   'Cinestar Roter Turm, Chemnitz',
    location_en:   'Cinestar Roter Turm, Chemnitz',
    categories:    [{de:'Kooperation', en:'Partnership'}, {de:'Turnier', en:'Tournament'}],
    desc_de:       'Das erste TAG24 Talentgame: 64 Spieler im FC24-Turnier, 15 Firmenstände mit Event-Quests. Der Auftakt einer erfolgreichen Kooperation.',
    desc_en:       'The first TAG24 Talentgame: 64 players in the FC24 tournament, 15 company booths with event quests. The start of a successful partnership.',
    desc_ls_de:    'Das war das 1. TAG24 Talentgame. 64 Spieler haben FC24 gespielt. 15 Firmen waren dabei.',
    desc_ls_en:    'This was the 1st TAG24 Talentgame. 64 players played FC24. 15 companies took part.',
    modal_desc_de: 'Die erfolgreiche Premiere der ersten Ausbildungs- und Recruitingmesse mit TAG24. 64 Spieler traten im FC24-Turnier auf der großen Kinoleinwand an, 15 Unternehmen präsentierten sich mit interaktiven Firmenständen und Event-Quests.',
    modal_desc_en: 'The successful premiere of the first training and recruiting fair with TAG24. 64 players competed in the FC24 tournament on the big cinema screen, while 15 companies presented themselves with interactive booths and event quests.',
    highlights_de: ['64 Spieler im FC24-Turnier', '15 Firmenstände mit Event-Quests', 'FC24 auf der Kinoleinwand', 'Auftakt einer langfristigen Partnerschaft'],
    highlights_en: ['64 players in FC24 tournament', '15 company booths with event quests', 'FC24 on the cinema screen', 'Start of a long-term partnership'],
    partners:      ['TAG24']
  },
  {
    slug:          'gamescom-2024',
    date_de:       '21.–23.08.2024',
    date_en:       '21.–23.08.2024',
    title_de:      'WireHeadZ x Gamescom 2024',
    title_en:      'WireHeadZ x Gamescom 2024',
    img:           'https://images.prismic.io/wireheadz/aBTr4PIqRLdaB1Es_Screenshot2025-05-02174239.png?auto=format%2Ccompress&fit=max&w=400',
    images:        ['https://images.prismic.io/wireheadz/aBTr4PIqRLdaB1Es_Screenshot2025-05-02174239.png?auto=format%2Ccompress&fit=max&w=1920'],
    location_de:   'Koelnmesse, Köln',
    location_en:   'Koelnmesse, Cologne',
    categories:    [{de:'Messe', en:'Expo'}],
    desc_de:       'Das WireHeadZ-Team auf Europas größter Gaming-Messe. Einblicke in die internationale Gaming-Branche und Kontakte für die Zukunft des Hubs.',
    desc_en:       "The WireHeadZ team at Europe's largest gaming expo. Insights into the international gaming industry and contacts for the future of the hub.",
    desc_ls_de:    'WireHeadZ war auf der Gamescom in Köln. Die Gamescom ist die größte Gaming-Messe in Europa. Wir haben viele Kontakte gemacht.',
    desc_ls_en:    'WireHeadZ was at Gamescom in Cologne. Gamescom is the largest gaming expo in Europe. We made many contacts.',
    modal_desc_de: 'WireHeadZ debütierte auf der Gamescom 2024 – Europas größter Gaming-Messe. Das Team repräsentierte die WHZ mit einem eigenen Stand, führte Interviews und Gaming-Sessions durch. Besonderes Highlight: Vizekanzler Robert Habeck besuchte den Stand persönlich.',
    modal_desc_en: "WireHeadZ made their Gamescom debut in 2024 – Europe's largest gaming expo. The team represented WHZ with their own booth, conducting interviews and gaming sessions. Special highlight: Vice Chancellor Robert Habeck visited the stand personally.",
    highlights_de: ['Besuch von Vizekanzler Robert Habeck', 'Treffen mit Creatorn Zarbex, Max Schradin & Rewinside', 'Eigener WHZ-Stand auf der Gamescom', '"Gaming muss ernstzunehmender Teil von Bildung werden!"'],
    highlights_en: ['Visit by Vice Chancellor Robert Habeck', 'Meetings with creators Zarbex, Max Schradin & Rewinside', 'Own WHZ booth at Gamescom', '"Gaming must become a serious part of education!"'],
    partners:      ['Westsächsische Hochschule Zwickau']
  },
  {
    slug:          'fc24-community',
    date_de:       '11.08.2024',
    date_en:       '11.08.2024',
    title_de:      'FC24 Community Turnier',
    title_en:      'FC24 Community Tournament',
    img:           'https://images.prismic.io/wireheadz/Z-2RyndAxsiBwPfy_1723445785713.jpeg?auto=format%2Ccompress&fit=max&w=400',
    images:        ['https://images.prismic.io/wireheadz/Z-2RyndAxsiBwPfy_1723445785713.jpeg?auto=format%2Ccompress&fit=max&w=1920'],
    location_de:   'Espitas Chillybeach, Zwickau',
    location_en:   'Espitas Chillybeach, Zwickau',
    categories:    [{de:'Community', en:'Community'}, {de:'Turnier', en:'Tournament'}],
    desc_de:       'Community-Turnier im Rahmen des TAG24-Sommerkinos. FC24 unter freiem Himmel – Gaming trifft Sommerstimmung.',
    desc_en:       'Community tournament as part of the TAG24 summer cinema. FC24 in the open air – gaming meets summer vibes.',
    desc_ls_de:    'Wir haben ein FC24-Turnier gespielt. Das war beim TAG24-Sommerkino. Wir haben draußen gespielt.',
    desc_ls_en:    'We played an FC24 tournament. It was at the TAG24 summer cinema. We played outdoors.',
    modal_desc_de: 'Das Finale des Zwickauer Arcaden FC24 Community-Turniers am Espitas Chillybeach – entspannte Atmosphäre mit Pool, Sand und Erfrischungen. Gaming auf der großen Leinwand, Sonne im Rücken.',
    modal_desc_en: 'The final of the Zwickauer Arcaden FC24 Community Tournament at Espitas Chillybeach – relaxed atmosphere with pool, sand and refreshments. Gaming on a large screen, sun in the background.',
    highlights_de: ['Sieger: Sascha Hendel (FSV Zwickau eSport, sahexfc24)', 'Gaming auf großer Leinwand', 'Beach-Atmosphäre mit Pool & Erfrischungen'],
    highlights_en: ['Winner: Sascha Hendel (FSV Zwickau eSport, sahexfc24)', 'Gaming on large screen', 'Beach atmosphere with pool & refreshments'],
    partners:      ['TAG24 NEWS Deutschland GmbH', 'Zwickauer Arcaden']
  },
  {
    slug:          'fortnite-2024',
    date_de:       '01.06.2024',
    date_en:       '01.06.2024',
    title_de:      'Fortnite Turnier zum Kindertag',
    title_en:      "Fortnite Tournament for Children's Day",
    img:           'https://images.prismic.io/wireheadz/Z-2Qu3dAxsiBwPfP_0bac933f-6c1c-4c76-8f94-e398e3f38e2f.avif?auto=format%2Ccompress&fit=max&w=400',
    images:        ['https://images.prismic.io/wireheadz/Z-2Qu3dAxsiBwPfP_0bac933f-6c1c-4c76-8f94-e398e3f38e2f.avif?auto=format%2Ccompress&fit=max&w=1920'],
    location_de:   'Schüler-Lab der WHZ, Zwickau',
    location_en:   'WHZ Student Lab, Zwickau',
    categories:    [{de:'Turnier', en:'Tournament'}],
    desc_de:       'Fortnite-Turnier im Schüler-Lab der WHZ zum Kindertag. Gaming als Erlebnis für eine jüngere Zielgruppe direkt auf dem Campus.',
    desc_en:       "Fortnite tournament in the WHZ student lab for Children's Day. Gaming as an experience for a younger audience right on campus.",
    desc_ls_de:    'Wir haben ein Fortnite-Turnier zum Kindertag gemacht. Kinder und Jugendliche haben mitgespielt. Das Event war an der WHZ.',
    desc_ls_en:    "We held a Fortnite tournament for Children's Day. Children and young people took part. The event was at WHZ.",
    modal_desc_de: 'Das erste offizielle Kindertag-Fortnite-Turnier mit pädagogischem Fokus: 24 Teilnehmer zwischen 12 und 20 Jahren traten an – begleitet von Mario Kart, 3D-Druck-Demos und dem Serious Game „Path Out”. Eltern wurden aktiv in Gespräche über Gaming-Chancen und -Risiken eingebunden.',
    modal_desc_en: "The first official Children's Day Fortnite tournament with an educational focus: 24 participants aged 12–20 competed, accompanied by Mario Kart, 3D printing demos and the serious game \"Path Out\". Parents were actively engaged in discussions about gaming risks and opportunities.",
    highlights_de: ['24 Teilnehmer (12–20 Jahre)', 'Begleitprogramm: Mario Kart & 3D-Druck', 'Serious Game „Path Out“ (Alter Gasometer)', 'Elterngespräche zu Gaming-Risiken & -Chancen'],
    highlights_en: ['24 participants (ages 12–20)', 'Side programme: Mario Kart & 3D printing', 'Serious game "Path Out" (Alter Gasometer)', 'Parent discussions on gaming risks & opportunities'],
    partners:      ['Alter Gasometer', 'Spinnwebe Zwickau']
  },
  {
    slug:          'gaming-weihnacht',
    date_de:       '13.12.2022',
    date_en:       '13.12.2022',
    title_de:      'Gaming-Weihnacht',
    title_en:      'Gaming Christmas',
    img:           'https://images.prismic.io/wireheadz/Z-2RX3dAxsiBwPfc_707eb631-5f61-420c-ac5b-8fcf4346cb1e.avif?auto=format%2Ccompress&fit=max&w=400',
    images:        ['https://images.prismic.io/wireheadz/Z-2RX3dAxsiBwPfc_707eb631-5f61-420c-ac5b-8fcf4346cb1e.avif?auto=format%2Ccompress&fit=max&w=1080'],
    location_de:   'WHZ, Zwickau',
    location_en:   'WHZ, Zwickau',
    categories:    [{de:'Community', en:'Community'}],
    desc_de:       'Gaming-Weihnachtsfeier des Hochschul-eSport-Teams. Der erste gesellschaftliche Event des WireHeadZ-Teams an der WHZ.',
    desc_en:       'Gaming Christmas celebration of the university eSport team. The first social event of the WireHeadZ team at WHZ.',
    desc_ls_de:    'Wir haben eine Gaming-Weihnachtsfeier gemacht. Das war das 1. gesellschaftliche Event von WireHeadZ. Alle von der WHZ waren eingeladen.',
    desc_ls_en:    'We held a gaming Christmas party. That was the 1st social event of WireHeadZ. Everyone from WHZ was invited.',
    modal_desc_de: 'Das WHZ-eSport-Team lud alle Hochschulangehörigen zur Gaming-Weihnachtsfeier ein. Besucherinnen und Besucher konnten den eigenen eSport-Teams (Rocket League und Valorant) über die Schulter schauen und natürlich selbst mitspielen.',
    modal_desc_en: "The WHZ eSport team invited all university members to a gaming Christmas celebration. Visitors could watch the university's Rocket League and Valorant teams in action – and join in themselves.",
    highlights_de: ['WHZ Rocket League Team live', 'WHZ Valorant Team live', 'Offen für alle Hochschulangehörigen', 'Erster gesellschaftlicher Event des WireHeadZ-Teams'],
    highlights_en: ['WHZ Rocket League team live', 'WHZ Valorant team live', 'Open to all university members', 'First social event of the WireHeadZ team'],
    partners:      ['Westsächsische Hochschule Zwickau']
  }
];

/* Automatische Aufteilung nach heutigem Datum */
function _parseEventDate(str) {
  var m = str.match(/(\d{2})\.(\d{2})\.(\d{4})/);
  return m ? new Date(m[3], m[2] - 1, m[1]) : new Date(0);
}
var _today = new Date(); _today.setHours(0, 0, 0, 0);
var UPCOMING_EVENTS = EVENTS.filter(function(e) { return _parseEventDate(e.date_de) >= _today; });
var PAST_EVENTS     = EVENTS.filter(function(e) { return _parseEventDate(e.date_de) <  _today; });

/* ============================================
   PARTNERS — Zentrale Pflege
   Logo-Strip wird per Injection befüllt.
   ============================================ */
var PARTNERS = [
  { logo: 'logo-tag24.svg',          alt: 'TAG24 NEWS Deutschland GmbH',    url: 'https://www.tag24.de' },
  { logo: 'logo-fsv-zwickau.svg',    alt: 'FSV Zwickau eSport',             url: 'https://www.fsv-zwickau.de' },
  { logo: 'logo-np.svg',             alt: 'N+P Informationssysteme GmbH',   url: 'https://www.nupis.de' },
  { logo: 'logo-mlp.svg', logoLight: 'logo-mlp-2.svg', alt: 'MLP Finanzberatung', url: 'https://www.mlp.de' },
  { logo: 'logo-chemnitz-center.svg',alt: 'Chemnitz Center',                url: 'https://www.chemnitz-center.de' },
  { logo: 'logo-sos-kinderdorf.svg', alt: 'SOS-Kinderdorf e.V.',            url: 'https://www.sos-kinderdorf.de' },
  { logo: 'logo-heinrich-schmid.svg',alt: 'Heinrich Schmid GmbH & Co. KG', url: 'https://www.heinrich-schmid.de' },
  { logo: 'logo-mentor-zwickau.png', alt: 'Hochschulverein Mentor e.V.',   url: 'https://mentor-zwickau.de' },
];

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Nav Injection (zentrale Definition) ---- */
  (function() {
    var isSubpage = window.location.pathname.indexOf('/esports/') !== -1;
    var pre = isSubpage ? '../' : '';
    var vereinHref = isSubpage ? 'wireheadz-ev.html' : 'esports/wireheadz-ev.html';
    var path = window.location.pathname;

    function activeClass(filename) {
      var bare = filename.split('/').pop();
      if (path.endsWith('/' + bare) || path.endsWith(bare)) return ' nav__item--active';
      if (bare === 'index.html' && (path.endsWith('/') || path === '')) return ' nav__item--active';
      return '';
    }

    var chevron = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

    var desktopLi =
      '<li class="nav__item' + activeClass('index.html') + '">' +
        '<a href="' + pre + 'index.html" data-de="Start" data-en="Home" data-ls-de="Start" data-ls-en="Home">Start</a>' +
      '</li>' +
      '<li class="nav__item nav__item--dropdown' + activeClass('games-hub.html') + '">' +
        '<a href="' + pre + 'games-hub.html" data-de="GAMeS Hub" data-en="GAMeS Hub" data-ls-de="GAMeS Hub" data-ls-en="GAMeS Hub">GAMeS Hub</a>' +
        '<div class="nav__dropdown" role="menu">' +
          '<a href="' + pre + 'games-hub.html#casual-gaming" role="menuitem" data-de="Casual Gaming" data-en="Casual Gaming" data-ls-de="Casual Gaming" data-ls-en="Casual Gaming">Casual Gaming</a>' +
          '<a href="' + pre + 'games-hub.html#esport" role="menuitem" data-de="eSport" data-en="eSport" data-ls-de="eSport" data-ls-en="eSport">eSport</a>' +
          '<a href="' + pre + 'games-hub.html#projektorganisation" role="menuitem" data-de="Projektorganisation" data-en="Project Organisation" data-ls-de="Projekte" data-ls-en="Projects">Projektorganisation</a>' +
          '<a href="' + pre + 'games-hub.html#lehre" role="menuitem" data-de="Lehre" data-en="Teaching" data-ls-de="Lernen" data-ls-en="Learning">Lehre</a>' +
          '<a href="' + pre + 'games-hub.html#forschung" role="menuitem" data-de="Forschung" data-en="Research" data-ls-de="Forschung" data-ls-en="Research">Forschung</a>' +
        '</div>' +
      '</li>' +
      '<li class="nav__item nav__item--dropdown' + activeClass('partner.html') + '">' +
        '<a href="' + pre + 'partner.html" data-de="für Unternehmen" data-en="For Companies" data-ls-de="Firmen" data-ls-en="Companies">für Unternehmen</a>' +
        '<div class="nav__dropdown" role="menu">' +
          '<a href="' + pre + 'partner.html#kooperationen" role="menuitem" data-de="Kooperationen" data-en="Cooperations" data-ls-de="Zusammenarbeit" data-ls-en="Partnerships">Kooperationen</a>' +
          '<a href="' + pre + 'partner.html#business-club" role="menuitem" data-de="Business Club" data-en="Business Club" data-ls-de="Business Club" data-ls-en="Business Club">Business Club</a>' +
          '<a href="' + pre + 'partner.html#sponsoren" role="menuitem" data-de="Sponsoren" data-en="Sponsors" data-ls-de="Sponsoren" data-ls-en="Sponsors">Sponsoren</a>' +
        '</div>' +
      '</li>' +
      '<li class="nav__item' + activeClass('wireheadz-ev.html') + '">' +
        '<a href="' + vereinHref + '" data-de="Verein" data-en="Club" data-ls-de="Verein" data-ls-en="Club">Verein</a>' +
      '</li>' +
      '<li class="nav__item' + activeClass('events.html') + '">' +
        '<a href="' + pre + 'events.html" data-de="Events" data-en="Events" data-ls-de="Events" data-ls-en="Events">Events</a>' +
      '</li>' +
      '<li class="nav__item nav__item--dropdown' + activeClass('mitmachen.html') + '">' +
        '<a href="' + pre + 'mitmachen.html" data-de="Mitmachen" data-en="Join" data-ls-de="Mitmachen" data-ls-en="Join">Mitmachen</a>' +
        '<div class="nav__dropdown" role="menu">' +
          '<a href="' + pre + 'mitmachen.html#discord" role="menuitem" data-de="Discord" data-en="Discord" data-ls-de="Discord" data-ls-en="Discord">Discord</a>' +
          '<a href="' + pre + 'mitmachen.html#team-beitreten" role="menuitem" data-de="Team beitreten" data-en="Join Team" data-ls-de="Team beitreten" data-ls-en="Join Team">Team beitreten</a>' +
          '<a href="' + pre + 'mitmachen.html#faq" role="menuitem" data-de="FAQ" data-en="FAQ" data-ls-de="Fragen & Antworten" data-ls-en="Questions & Answers">FAQ</a>' +
          '<a href="' + pre + 'kontakt.html" role="menuitem" data-de="Kontakt" data-en="Contact" data-ls-de="Kontakt" data-ls-en="Contact">Kontakt</a>' +
        '</div>' +
      '</li>';

    function mobileActiveClass(filename) {
      return activeClass(filename).replace('nav__item--active', 'nav__mobile-item--active');
    }

    var mobileLi =
      '<li class="nav__mobile-item' + mobileActiveClass('index.html') + '">' +
        '<a href="' + pre + 'index.html" data-de="Start" data-en="Home" data-ls-de="Start" data-ls-en="Home">Start</a>' +
      '</li>' +
      '<li class="nav__mobile-item nav__mobile-item--dropdown' + mobileActiveClass('games-hub.html') + '">' +
        '<div class="nav__mobile-row">' +
          '<a href="' + pre + 'games-hub.html" data-de="GAMeS Hub" data-en="GAMeS Hub" data-ls-de="GAMeS Hub" data-ls-en="GAMeS Hub">GAMeS Hub</a>' +
          '<button class="nav__mobile-expand" aria-expanded="false" aria-label="Untermenü öffnen">' + chevron + '</button>' +
        '</div>' +
        '<ul class="nav__mobile-sub">' +
          '<li><a href="' + pre + 'games-hub.html#casual-gaming" data-de="Casual Gaming" data-en="Casual Gaming" data-ls-de="Casual Gaming" data-ls-en="Casual Gaming">Casual Gaming</a></li>' +
          '<li><a href="' + pre + 'games-hub.html#esport" data-de="eSport" data-en="eSport" data-ls-de="eSport" data-ls-en="eSport">eSport</a></li>' +
          '<li><a href="' + pre + 'games-hub.html#projektorganisation" data-de="Projektorganisation" data-en="Project Organisation" data-ls-de="Projekte" data-ls-en="Projects">Projektorganisation</a></li>' +
          '<li><a href="' + pre + 'games-hub.html#lehre" data-de="Lehre" data-en="Teaching" data-ls-de="Lernen" data-ls-en="Learning">Lehre</a></li>' +
          '<li><a href="' + pre + 'games-hub.html#forschung" data-de="Forschung" data-en="Research" data-ls-de="Forschung" data-ls-en="Research">Forschung</a></li>' +
        '</ul>' +
      '</li>' +
      '<li class="nav__mobile-item nav__mobile-item--dropdown' + mobileActiveClass('partner.html') + '">' +
        '<div class="nav__mobile-row">' +
          '<a href="' + pre + 'partner.html" data-de="für Unternehmen" data-en="For Companies" data-ls-de="Firmen" data-ls-en="Companies">für Unternehmen</a>' +
          '<button class="nav__mobile-expand" aria-expanded="false" aria-label="Untermenü öffnen">' + chevron + '</button>' +
        '</div>' +
        '<ul class="nav__mobile-sub">' +
          '<li><a href="' + pre + 'partner.html#kooperationen" data-de="Kooperationen" data-en="Cooperations" data-ls-de="Zusammenarbeit" data-ls-en="Partnerships">Kooperationen</a></li>' +
          '<li><a href="' + pre + 'partner.html#business-club" data-de="Business Club" data-en="Business Club" data-ls-de="Business Club" data-ls-en="Business Club">Business Club</a></li>' +
          '<li><a href="' + pre + 'partner.html#sponsoren" data-de="Sponsoren" data-en="Sponsors" data-ls-de="Sponsoren" data-ls-en="Sponsors">Sponsoren</a></li>' +
        '</ul>' +
      '</li>' +
      '<li class="nav__mobile-item' + mobileActiveClass('wireheadz-ev.html') + '">' +
        '<a href="' + vereinHref + '" data-de="Verein" data-en="Club" data-ls-de="Verein" data-ls-en="Club">Verein</a>' +
      '</li>' +
      '<li class="nav__mobile-item' + mobileActiveClass('events.html') + '">' +
        '<a href="' + pre + 'events.html" data-de="Events" data-en="Events" data-ls-de="Events" data-ls-en="Events">Events</a>' +
      '</li>' +
      '<li class="nav__mobile-item nav__mobile-item--dropdown' + mobileActiveClass('mitmachen.html') + '">' +
        '<div class="nav__mobile-row">' +
          '<a href="' + pre + 'mitmachen.html" data-de="Mitmachen" data-en="Join" data-ls-de="Mitmachen" data-ls-en="Join">Mitmachen</a>' +
          '<button class="nav__mobile-expand" aria-expanded="false" aria-label="Untermenü öffnen">' + chevron + '</button>' +
        '</div>' +
        '<ul class="nav__mobile-sub">' +
          '<li><a href="' + pre + 'mitmachen.html#discord" data-de="Discord" data-en="Discord" data-ls-de="Discord" data-ls-en="Discord">Discord</a></li>' +
          '<li><a href="' + pre + 'mitmachen.html#team-beitreten" data-de="Team beitreten" data-en="Join Team" data-ls-de="Team beitreten" data-ls-en="Join Team">Team beitreten</a></li>' +
          '<li><a href="' + pre + 'mitmachen.html#faq" data-de="FAQ" data-en="FAQ" data-ls-de="Fragen & Antworten" data-ls-en="Questions & Answers">FAQ</a></li>' +
          '<li><a href="' + pre + 'kontakt.html" data-de="Kontaktformular" data-en="Contact Form" data-ls-de="Kontaktformular" data-ls-en="Contact Form">Kontaktformular</a></li>' +
        '</ul>' +
      '</li>';

    var desktopEl = document.querySelector('[data-nav-desktop]');
    var mobileEl  = document.querySelector('[data-nav-mobile-links]');
    if (desktopEl) desktopEl.innerHTML = desktopLi;
    if (mobileEl)  mobileEl.innerHTML  = mobileLi;
  })();

  /* ---- Events Teaser (zentrale Definition) ---- */
  (function() {
    var el = document.querySelector('[data-events-teaser]');
    if (!el) return;
    var isSubpage = window.location.pathname.indexOf('/esports/') !== -1;
    var pre = isSubpage ? '../' : '';

    if (UPCOMING_EVENTS.length === 0) {
      el.innerHTML =
        '<article class="event-teaser-card event-teaser-card--tba">' +
          '<div class="event-teaser-card__img" style="aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;background:var(--color-bg-alt);border-radius:var(--radius-sm);">' +
            '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="opacity:.4;">' +
              '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>' +
            '</svg>' +
          '</div>' +
          '<div class="event-teaser-card__body">' +
            '<span class="event-teaser-card__date" data-de="Demnächst" data-en="Coming Soon">Demnächst</span>' +
            '<h3 class="event-teaser-card__title" data-de="Events in Planung" data-en="Events in Planning">Events in Planung</h3>' +
            '<p style="font-size:var(--text-small);color:var(--color-text-secondary);margin-top:.25rem;" data-de="Folge uns auf Discord für Updates." data-en="Follow us on Discord for updates.">Folge uns auf Discord für Updates.</p>' +
          '</div>' +
        '</article>';
      return;
    }

    el.innerHTML = UPCOMING_EVENTS.slice(0, 3).map(function(ev) {
      var imgSrc = pre + ev.img;
      return (
        '<article class="event-teaser-card">' +
          '<div class="event-teaser-card__img">' +
            '<img src="' + imgSrc + '" alt="' + ev.title_de + '" loading="lazy" />' +
          '</div>' +
          '<div class="event-teaser-card__body">' +
            '<span class="event-teaser-card__date" data-de="' + ev.date_de + '" data-en="' + ev.date_en + '">' + ev.date_de + '</span>' +
            '<h3 class="event-teaser-card__title" data-de="' + ev.title_de + '" data-en="' + ev.title_en + '">' + ev.title_de + '</h3>' +
          '</div>' +
        '</article>'
      );
    }).join('');
  })();

  /* ---- Events Preview Startseite (kommende + vergangene) ---- */
  (function() {
    var el = document.querySelector('[data-events-preview]');
    if (!el) return;

    var upcoming = UPCOMING_EVENTS.slice().sort(function(a, b) {
      return _parseEventDate(a.date_de) - _parseEventDate(b.date_de);
    }).slice(0, 3);
    var remaining = 3 - upcoming.length;
    var past = PAST_EVENTS.slice().sort(function(a, b) {
      return _parseEventDate(b.date_de) - _parseEventDate(a.date_de);
    }).slice(0, remaining);
    var combined = upcoming.concat(past);

    el.innerHTML = combined.map(function(ev, i) {
      var isPast = i >= upcoming.length;
      var label = isPast
        ? '<span style="font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:var(--color-text-secondary);opacity:.7;" data-de="Vergangen" data-en="Past">Vergangen</span> '
        : '';
      return (
        '<a href="events.html" class="event-row">' +
          '<img src="' + ev.img + '" alt="' + ev.title_de + '" class="event-row__image" loading="lazy" />' +
          '<div class="event-row__content">' +
            '<p class="event-row__date">' + label + '<span data-de="' + ev.date_de + '" data-en="' + ev.date_en + '">' + ev.date_de + '</span></p>' +
            '<p class="event-row__title" data-de="' + ev.title_de + '" data-en="' + ev.title_en + '">' + ev.title_de + '</p>' +
          '</div>' +
        '</a>'
      );
    }).join('');
  })();

  /* ---- Events-Seite: Karten dynamisch aus EVENTS rendern ---- */
  (function () {
    var upcomingGrid = document.querySelector('#kommende-events .events-grid');
    var archiveGrid  = document.querySelector('#archiv .events-grid');
    if (!upcomingGrid || !archiveGrid) return;

    var CLOCK_SVG = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
    var PIN_SVG   = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';

    function fmtTime(iso) {
      if (!iso) return '';
      var m = /T(\d{2}):(\d{2})/.exec(iso);
      if (!m || (m[1] === '00' && m[2] === '00')) return '';
      return m[1] + ':' + m[2];
    }

    function renderCard(ev, isArchive) {
      var t        = fmtTime(ev.isoDate);
      var dateAttr = ev.isoDate ? ' data-event-date="' + ev.isoDate + '"' : '';
      var timePart = t ? '<span class="event-card__time">' + CLOCK_SVG + ' ' + t + ' Uhr</span>' : '';
      var dateCls  = isArchive ? ' event-card__date--archive' : '';
      var cardCls  = isArchive ? 'event-card event-card--archive' : 'event-card';
      var badgeHtml = (isArchive ? '<span class="event-card__badge event-card__badge--archive" data-de="Archiv" data-en="Archive">Archiv</span>' : '');
      (ev.categories || []).forEach(function (c) {
        badgeHtml += '<span class="event-card__badge event-card__badge--category" data-de="' + c.de + '" data-en="' + c.en + '">' + c.de + '</span>';
      });
      return (
        '<article class="' + cardCls + '" data-event="' + (ev.slug || '') + '"' + dateAttr + '>' +
          '<div class="event-card__img">' +
            '<img src="' + ev.img + '" alt="' + ev.title_de + '" loading="lazy" />' +
            '<div class="event-card__badges">' + badgeHtml + '</div>' +
          '</div>' +
          '<div class="event-card__body">' +
            '<p class="event-card__date' + dateCls + '">' + ev.date_de + timePart + '</p>' +
            (isArchive ? '' : '<div class="event-card__countdown"></div>') +
            '<h3 class="event-card__title" data-de="' + ev.title_de + '" data-en="' + ev.title_en + '">' + ev.title_de + '</h3>' +
            '<p class="event-card__location">' + PIN_SVG +
              '<span data-de="' + (ev.location_de || '') + '" data-en="' + (ev.location_en || '') + '">' + (ev.location_de || '') + '</span>' +
            '</p>' +
            '<p class="event-card__desc"' +
              ' data-de="' + (ev.desc_de || '').replace(/"/g, '&quot;') + '"' +
              ' data-en="' + (ev.desc_en || '').replace(/"/g, '&quot;') + '"' +
              ' data-ls-de="' + (ev.desc_ls_de || '').replace(/"/g, '&quot;') + '"' +
              ' data-ls-en="' + (ev.desc_ls_en || '').replace(/"/g, '&quot;') + '">' +
              (ev.desc_de || '') +
            '</p>' +
          '</div>' +
          '<div class="event-card__footer">' +
            '<span class="event-card__details-link" data-de="Details anzeigen" data-en="Show details">Details anzeigen</span>' +
          '</div>' +
        '</article>'
      );
    }

    /* Upcoming: chronologisch aufsteigend */
    var upcoming = UPCOMING_EVENTS.slice().sort(function (a, b) {
      return _parseEventDate(a.date_de) - _parseEventDate(b.date_de);
    });
    if (upcoming.length === 0) {
      upcomingGrid.innerHTML =
        '<p style="color:var(--color-text-secondary);padding:var(--space-lg) 0;"' +
        ' data-de="Derzeit sind keine kommenden Events geplant. Schau bald wieder vorbei."' +
        ' data-en="No upcoming events planned right now. Check back soon.">' +
        'Derzeit sind keine kommenden Events geplant. Schau bald wieder vorbei.</p>';
    } else {
      upcomingGrid.className = upcoming.length === 1 ? 'events-grid events-grid--single' : 'events-grid';
      upcomingGrid.innerHTML = upcoming.map(function (ev) { return renderCard(ev, false); }).join('');
    }

    /* Archiv: chronologisch absteigend */
    var past = PAST_EVENTS.slice().sort(function (a, b) {
      return _parseEventDate(b.date_de) - _parseEventDate(a.date_de);
    });
    archiveGrid.innerHTML = past.map(function (ev) { return renderCard(ev, true); }).join('');

    /* Modal-Logik ---- */
    var modal    = document.getElementById('event-modal');
    if (!modal) return;
    var panel    = modal.querySelector('.event-modal__panel');
    var btnClose = document.getElementById('modal-close');
    var track    = document.getElementById('modal-gallery-track');
    var btnPrev  = document.getElementById('modal-prev');
    var btnNext  = document.getElementById('modal-next');
    var dotsWrap = document.getElementById('modal-dots');
    var elDate   = document.getElementById('modal-date');
    var elTitle  = document.getElementById('modal-title');
    var elLocTxt = document.getElementById('modal-location-text');
    var elBadges = document.getElementById('modal-badges');
    var elDesc   = document.getElementById('modal-desc');
    var elHlBlk  = document.getElementById('modal-highlights-block');
    var elHlList = document.getElementById('modal-highlights');
    var elPaBlk  = document.getElementById('modal-partners-block');
    var elPaList = document.getElementById('modal-partners');

    var activeSlug = null;
    var slide = 0;
    var total = 0;

    function getLang() {
      return document.documentElement.lang || localStorage.getItem('lang') || 'de';
    }

    function renderModal(slug) {
      var ev = EVENTS.filter(function (e) { return e.slug === slug; })[0];
      if (!ev) return;
      var lang   = getLang();
      var isEN   = lang === 'en';
      elDate.textContent    = isEN ? ev.date_en   : ev.date_de;
      elTitle.textContent   = isEN ? ev.title_en  : ev.title_de;
      elLocTxt.textContent  = isEN ? (ev.location_en || '') : (ev.location_de || '');
      elDesc.textContent    = isEN ? (ev.modal_desc_en || ev.desc_en || '') : (ev.modal_desc_de || ev.desc_de || '');
      elBadges.innerHTML    = (ev.categories || []).map(function (c) {
        return '<span class="event-card__badge event-card__badge--category">' + (isEN ? c.en : c.de) + '</span>';
      }).join('');
      var hl = isEN ? (ev.highlights_en || []) : (ev.highlights_de || []);
      if (hl.length) {
        elHlList.innerHTML = hl.map(function (h) { return '<li>' + h + '</li>'; }).join('');
        elHlBlk.hidden = false;
      } else { elHlBlk.hidden = true; }
      if (ev.partners && ev.partners.length) {
        elPaList.innerHTML = ev.partners.map(function (p) {
          return '<span class="event-modal__partner-tag">' + p + '</span>';
        }).join('');
        elPaBlk.hidden = false;
        var paLabel = elPaBlk.querySelector('.event-modal__section-label');
        if (paLabel) paLabel.textContent = isEN ? 'Partners' : 'Partner';
      } else { elPaBlk.hidden = true; }
      track.innerHTML = '';
      dotsWrap.innerHTML = '';
      (ev.images || [ev.img]).forEach(function (url, i) {
        var s   = document.createElement('div');
        s.className = 'event-modal__gallery-slide';
        var img = document.createElement('img');
        img.src = url; img.alt = isEN ? ev.title_en : ev.title_de;
        img.loading = i === 0 ? 'eager' : 'lazy';
        s.appendChild(img); track.appendChild(s);
        var dot = document.createElement('button');
        dot.className = 'event-modal__dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Bild ' + (i + 1));
        dot.addEventListener('click', function () { goTo(i); });
        dotsWrap.appendChild(dot);
      });
      total = (ev.images || [ev.img]).length;
      slide = 0; updateGallery();
      btnPrev.style.display = total <= 1 ? 'none' : '';
      btnNext.style.display = total <= 1 ? 'none' : '';
      dotsWrap.style.display = total <= 1 ? 'none' : '';
    }

    function goTo(n) { slide = (n + total) % total; updateGallery(); }
    function updateGallery() {
      track.style.transform = 'translateX(-' + (slide * 100) + '%)';
      Array.prototype.slice.call(dotsWrap.querySelectorAll('.event-modal__dot')).forEach(function (d, i) {
        d.classList.toggle('active', i === slide);
      });
    }
    function openModal(slug) {
      activeSlug = slug; renderModal(slug);
      modal.classList.add('open'); document.body.style.overflow = 'hidden';
      if (btnClose) btnClose.focus();
    }
    function closeModal() {
      modal.classList.remove('open'); document.body.style.overflow = ''; activeSlug = null;
    }

    if (btnClose) btnClose.addEventListener('click', closeModal);
    if (btnPrev)  btnPrev.addEventListener('click', function () { goTo(slide - 1); });
    if (btnNext)  btnNext.addEventListener('click', function () { goTo(slide + 1); });
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function (e) {
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape')     closeModal();
      if (e.key === 'ArrowLeft')  goTo(slide - 1);
      if (e.key === 'ArrowRight') goTo(slide + 1);
    });

    /* Sprach-Neurendering wenn Modal offen */
    ['lang-toggle', 'lang-toggle-mobile'].forEach(function (id) {
      var btn = document.getElementById(id);
      if (btn) btn.addEventListener('click', function () {
        if (modal.classList.contains('open') && activeSlug) setTimeout(function () { renderModal(activeSlug); }, 0);
      });
    });

    /* Klick-Handler für Karten (delegiert, da Karten dynamisch gerendert) */
    document.addEventListener('click', function (e) {
      if (!e.target.closest('a, button')) {
        var card = e.target.closest('.event-card[data-event]');
        if (card && card.closest('#kommende-events, #archiv')) openModal(card.dataset.event);
      }
    });
  })();

  /* ---- Partner-Logo-Strip Injection ---- */
  (function () {
    var strips = document.querySelectorAll('[data-partner-logos]');
    if (!strips.length) return;
    var isSubpage = window.location.pathname.indexOf('/esports/') !== -1;
    var pre = isSubpage ? '../' : '';
    var logoItems = PARTNERS.map(function (p) {
      // Strip liegt immer auf dunklem Hintergrund → immer p.logo (= dunkle/weiße Variante)
      var imgs = '<img src="' + pre + 'assets/logos/sponsors/' + p.logo + '" alt="' + p.alt + '" class="partner-logo" loading="lazy" />';
      return '<a href="' + p.url + '" target="_blank" rel="noopener" class="partner-logo-wrap" aria-label="' + p.alt + '">' + imgs + '</a>';
    }).join('');
    // 4× Logos → garantiert genug Breite für jeden Viewport; -25% = genau 1 Set weit
    var track = '<div class="partners__track" aria-hidden="false">' + logoItems + logoItems + logoItems + logoItems + '</div>';
    strips.forEach(function (el) { el.innerHTML = track; });
  }());

  /* ---- Footer Injection (zentrale Definition) ---- */
  (function() {
    var el = document.querySelector('[data-footer-grid]');
    if (!el) return;
    var isSubpage = window.location.pathname.indexOf('/esports/') !== -1;
    var pre = isSubpage ? '../' : '';
    var vereinHref = isSubpage ? 'wireheadz-ev.html' : 'esports/wireheadz-ev.html';

    el.innerHTML =

      /* Brand */
      '<div>' +
        '<a href="' + pre + 'index.html">' +
          '<img src="' + pre + 'assets/logos/logo-games-hub.png" alt="WHZ GAMeS Hub" class="footer__brand-logo" />' +
        '</a>' +
        '<p class="footer__claim" data-de="Gaming. eSport. Forschung. An der WHZ." data-en="Gaming. eSport. Research. At WHZ." data-ls-de="Wir spielen. Wir treiben eSport. Wir forschen. Wir sind an der Hochschule in Zwickau." data-ls-en="We play. We do eSport. We do research. We are at the university in Zwickau.">' +
          'Gaming. eSport. Forschung. An der WHZ.' +
        '</p>' +
        '<div class="footer__social" aria-label="Social Media">' +
          '<a href="https://www.instagram.com/whz_esports" target="_blank" rel="noopener" class="footer__social-link" aria-label="Instagram">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>' +
          '</a>' +
          '<a href="https://discord.gg/zs48PfpJJF" target="_blank" rel="noopener" class="footer__social-link" aria-label="Discord">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/></svg>' +
          '</a>' +
          '<a href="https://www.youtube.com/channel/UC2PGpb8SXPiudL2v7LtBuXw" target="_blank" rel="noopener" class="footer__social-link" aria-label="YouTube">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--color-ui-primary)"/></svg>' +
          '</a>' +
          '<a href="https://www.linkedin.com/company/wireheadz-esports/" target="_blank" rel="noopener" class="footer__social-link" aria-label="LinkedIn">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>' +
          '</a>' +
          '<a href="https://www.twitch.tv/WireHeadZ_GAMeS_Hub" target="_blank" rel="noopener" class="footer__social-link" aria-label="Twitch">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 2H3v16h5v4l4-4h5l4-4V2z"/><line x1="11" y1="7" x2="11" y2="11"/><line x1="16" y1="7" x2="16" y2="11"/></svg>' +
          '</a>' +
          '<a href="https://www.tiktok.com/@wireheadz" target="_blank" rel="noopener" class="footer__social-link" aria-label="TikTok">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.87a8.18 8.18 0 0 0 4.78 1.52V6.9a4.85 4.85 0 0 1-1.01-.21z"/></svg>' +
          '</a>' +
        '</div>' +
      '</div>' +

      /* Navigation */
      '<nav aria-label="Footer Navigation">' +
        '<p class="footer__heading" data-de="Navigation" data-en="Navigation" data-ls-de="Navigation" data-ls-en="Navigation">Navigation</p>' +
        '<ul class="footer__links">' +
          '<li><a href="' + pre + 'index.html" data-de="Start" data-en="Home" data-ls-de="Start" data-ls-en="Home">Start</a></li>' +
          '<li><a href="' + pre + 'games-hub.html" data-de="GAMeS Hub" data-en="GAMeS Hub" data-ls-de="GAMeS Hub" data-ls-en="GAMeS Hub">GAMeS Hub</a></li>' +
          '<li><a href="' + pre + 'partner.html" data-de="für Unternehmen" data-en="For Companies" data-ls-de="Firmen" data-ls-en="Companies">für Unternehmen</a></li>' +
          '<li><a href="' + vereinHref + '" data-de="Verein" data-en="Club" data-ls-de="Verein" data-ls-en="Club">Verein</a></li>' +
          '<li><a href="' + pre + 'events.html" data-de="Events" data-en="Events" data-ls-de="Events" data-ls-en="Events">Events</a></li>' +
          '<li><a href="' + pre + 'mitmachen.html" data-de="Mitmachen" data-en="Get Involved" data-ls-de="Mitmachen" data-ls-en="Get Involved">Mitmachen</a></li>' +
        '</ul>' +
      '</nav>' +

      /* Kontakt */
      '<nav aria-label="Kontakt">' +
        '<p class="footer__heading" data-de="Kontakt" data-en="Contact" data-ls-de="Kontakt" data-ls-en="Contact">Kontakt</p>' +
        '<ul class="footer__links">' +
          '<li><a href="mailto:esports@whz.de">esports@whz.de</a></li>' +
          '<li><a href="https://discord.gg/zs48PfpJJF" target="_blank" rel="noopener" data-de="Discord beitreten" data-en="Join Discord" data-ls-de="Discord beitreten" data-ls-en="Join Discord">Discord beitreten</a></li>' +
          '<li><a href="' + pre + 'kontakt.html" data-de="Kontaktformular" data-en="Contact Form" data-ls-de="Kontaktformular" data-ls-en="Contact Form">Kontaktformular</a></li>' +
        '</ul>' +
      '</nav>' +

      /* Rechtliches */
      '<nav aria-label="Rechtliche Links">' +
        '<p class="footer__heading" data-de="Rechtliches" data-en="Legal" data-ls-de="Recht" data-ls-en="Legal">Rechtliches</p>' +
        '<ul class="footer__links">' +
          '<li><a href="' + pre + 'impressum.html" data-de="Impressum" data-en="Imprint" data-ls-de="Impressum" data-ls-en="Imprint">Impressum</a></li>' +
          '<li><a href="' + pre + 'datenschutz.html" data-de="Datenschutz" data-en="Privacy Policy" data-ls-de="Datenschutz" data-ls-en="Privacy Policy">Datenschutz</a></li>' +
          '<li><a href="' + pre + 'mitmachen.html#faq" data-de="FAQ" data-en="FAQ" data-ls-de="Fragen & Antworten" data-ls-en="Questions & Answers">FAQ</a></li>' +
        '</ul>' +
      '</nav>';

    var bottom = document.querySelector('[data-footer-bottom]');
    if (bottom) bottom.innerHTML =
      '<span>© 2025 WHZ GAMeS Hub</span>' +
      '<span data-de="Westsächsische Hochschule Zwickau" data-en="West Saxon University of Applied Sciences Zwickau" data-ls-de="Hochschule Zwickau" data-ls-en="University Zwickau">Westsächsische Hochschule Zwickau</span>';
  })();

  /* ---- Showcase Slider ---- */
  (function () {
    var prevBtn = document.getElementById('showcase-prev');
    var nextBtn = document.getElementById('showcase-next');

    /* --- Events slide: 0 Events → entfernen | 1 → Einzelslide | n → Liste --- */
    (function () {
      var evtSlide = document.querySelector('[data-slide="2"]');
      var evtDot   = document.querySelector('.showcase__dot[data-target="2"]');
      if (!evtSlide) return;

      /* Uhrzeit aus isoDate (z.B. ...T18:00) ziehen; Mitternacht = keine Zeit angegeben */
      function fmtTime(iso) {
        if (!iso) return '';
        var m = /T(\d{2}):(\d{2})/.exec(iso);
        if (!m || (m[1] === '00' && m[2] === '00')) return '';
        return m[1] + ':' + m[2];
      }

      var sorted = UPCOMING_EVENTS.slice().sort(function (a, b) {
        return _parseEventDate(a.date_de) - _parseEventDate(b.date_de);
      });

      if (sorted.length === 0) {
        evtSlide.parentNode.removeChild(evtSlide);
        if (evtDot) evtDot.parentNode.removeChild(evtDot);
        /* Dots neu nummerieren damit goTo-Indizes stimmen */
        document.querySelectorAll('.showcase__dot').forEach(function (d, i) {
          d.setAttribute('data-target', i);
        });
        return;
      }

      /* Hintergrund immer erstes Event */
      var bgEl = evtSlide.querySelector('.showcase__bg--event');
      if (bgEl) bgEl.style.backgroundImage = 'url(' + sorted[0].img + ')';

      var container = evtSlide.querySelector('.container');
      if (!container) return;

      if (sorted.length === 1) {
        var ev = sorted[0];
        var t  = fmtTime(ev.isoDate);
        var dDe = ev.date_de + (t ? ' · ' + t + ' Uhr' : '');
        var dEn = ev.date_en + (t ? ' · ' + t : '');
        var titleEl = container.querySelector('.showcase__event-title');
        var dateEl  = container.querySelector('.showcase__event-date');
        if (titleEl) { titleEl.setAttribute('data-de', ev.title_de); titleEl.setAttribute('data-en', ev.title_en); titleEl.textContent = ev.title_de; }
        if (dateEl)  { dateEl.setAttribute('data-de', dDe); dateEl.setAttribute('data-en', dEn); dateEl.textContent = dDe; }
        if (ev.isoDate) evtSlide.dataset.eventDate = ev.isoDate;
      } else {
        /* Mehrere Events: Label anpassen + Liste bauen */
        var labelEl = container.querySelector('.showcase__label');
        if (labelEl) { labelEl.setAttribute('data-de', 'Kommende Events'); labelEl.setAttribute('data-en', 'Upcoming Events'); labelEl.textContent = 'Kommende Events'; }

        var titleEl = container.querySelector('.showcase__event-title');
        if (titleEl) titleEl.parentNode.removeChild(titleEl);

        var dateEl = container.querySelector('.showcase__event-date');
        if (dateEl) {
          var listHtml = sorted.map(function (ev) {
            var t   = fmtTime(ev.isoDate);
            var dDe = ev.date_de + (t ? ' · ' + t + ' Uhr' : '');
            var dEn = ev.date_en + (t ? ' · ' + t : '');
            return '<div class="showcase-event-item">' +
              '<span class="showcase-event-item__date" data-de="' + dDe + '" data-en="' + dEn + '">' + dDe + '</span>' +
              '<span class="showcase-event-item__title" data-de="' + ev.title_de + '" data-en="' + ev.title_en + '">' + ev.title_de + '</span>' +
            '</div>';
          }).join('');
          var listEl = document.createElement('div');
          listEl.className = 'showcase-event-list';
          listEl.innerHTML = listHtml;
          dateEl.parentNode.replaceChild(listEl, dateEl);
        }
      }
    })();

    /* slides + dots nach Events-Setup lesen (ggf. wurde slide[2] entfernt) */
    var slides  = document.querySelectorAll('.showcase__slide');
    var dots    = document.querySelectorAll('.showcase__dot');
    if (!slides.length) return;

    var current = 0;
    var total   = slides.length;
    var DURATION = 6000;
    var timer   = null;

    /* --- Slide transition --- */
    function goTo(newIdx) {
      if (newIdx === current) return;

      slides.forEach(function (s, i) {
        s.classList.remove('showcase__slide--active', 'showcase__slide--left');
        if (i < newIdx)        s.classList.add('showcase__slide--left');
        else if (i === newIdx) s.classList.add('showcase__slide--active');
      });

      dots.forEach(function (d, i) {
        d.classList.toggle('showcase__dot--active', i === newIdx);
      });

      current = newIdx;
      resetTimer();
    }

    /* --- Auto-advance --- */
    function resetTimer() {
      clearTimeout(timer);
      timer = setTimeout(function () { goTo((current + 1) % total); }, DURATION);
    }

    /* --- Arrows --- */
    if (prevBtn) prevBtn.addEventListener('click', function () { goTo((current - 1 + total) % total); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo((current + 1) % total); });

    /* --- Dot clicks --- */
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () { goTo(parseInt(dot.getAttribute('data-target'), 10)); });
    });

    /* --- Pause on hover --- */
    var section = document.getElementById('showcase');
    if (section) {
      section.addEventListener('mouseenter', function () { clearTimeout(timer); });
      section.addEventListener('mouseleave', resetTimer);
    }

    /* --- Swipe --- */
    var touchStartX = 0;
    if (section) {
      section.addEventListener('touchstart', function (e) { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
      section.addEventListener('touchend',   function (e) {
        var dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) goTo(dx < 0 ? (current + 1) % total : (current - 1 + total) % total);
      }, { passive: true });
    }

    resetTimer();
  })();

  /* ---- Dark Mode ---- */
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const allThemeToggles = document.querySelectorAll('.nav__theme-toggle');
  const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  allThemeToggles.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
    });
  });

  function updateThemeIcon(theme) {
    const iconName = theme === 'dark' ? 'sun' : 'moon';
    const iconHtml = '<i data-lucide="' + iconName + '" style="width:18px;height:18px;pointer-events:none;"></i>';
    allThemeToggles.forEach(function(btn) {
      btn.innerHTML = iconHtml;
      btn.removeAttribute('style');
      btn.style.cssText = '';
    });
    if (window.lucide) lucide.createIcons();
  }


  /* ---- Language Toggle (inkl. Leichte Sprache) ---- */
  const langToggle = document.getElementById('lang-toggle');
  const langToggleMobile = document.getElementById('lang-toggle-mobile');
  let currentLang = localStorage.getItem('lang') || ((navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'de');
  let isLS = localStorage.getItem('ls') === 'true';

  function applyLang(lang, ls) {
    if (lang !== undefined) currentLang = lang;
    if (ls  !== undefined) isLS = ls;
    localStorage.setItem('lang', currentLang);
    localStorage.setItem('ls', String(isLS));

    const label = currentLang.toUpperCase();
    if (langToggle) langToggle.textContent = label;
    if (langToggleMobile) langToggleMobile.textContent = label;
    document.documentElement.lang = currentLang;

    document.querySelectorAll('.nav__ls-toggle').forEach(btn => {
      btn.classList.toggle('nav__ls-toggle--active', isLS);
      btn.setAttribute('aria-pressed', String(isLS));
    });

    const sa = v => (v !== null && v.charCodeAt(0) === 0x201D) ? null : v;
    document.querySelectorAll('[data-de]').forEach(el => {
      const text = isLS
        ? (sa(el.getAttribute('data-ls-' + currentLang)) || sa(el.getAttribute('data-' + currentLang)) || el.dataset.initial || null)
        : (sa(el.getAttribute('data-' + currentLang)) || el.dataset.initial || null);
      if (!text) return;
      if (/<[a-z][\s\S]*?>/i.test(text)) {
        // Übersetzung enthält Markup (z.B. Inline-Link) → als HTML rendern, damit der Link
        // in JEDER Sprache (DE / EN / Leichte Sprache) erhalten bleibt.
        if (el.innerHTML !== text) el.innerHTML = text;
      } else if (el.children.length === 0) {
        el.textContent = text;
      } else {
        // Kind-Elemente ohne Text (z.B. Icons/SVGs) → nur den ersten Text-Node aktualisieren
        let updated = false;
        for (const node of el.childNodes) {
          if (node.nodeType === 3 && node.textContent.trim()) {
            node.textContent = text;
            updated = true;
            break;
          }
        }
        if (!updated) el.insertBefore(document.createTextNode(text), el.firstChild);
      }
    });

    document.querySelectorAll('[data-src-de]').forEach(el => {
      const src = currentLang === 'en' ? el.getAttribute('data-src-en') : el.getAttribute('data-src-de');
      if (src && el.src !== src) el.src = src;
    });
  }

  // LS-Toggle-Buttons dynamisch in Nav einfügen
  (function () {
    function makeLSBtn(id) {
      const btn = document.createElement('button');
      btn.className = 'nav__ls-toggle' + (isLS ? ' nav__ls-toggle--active' : '');
      if (id) btn.id = id;
      btn.setAttribute('aria-label', 'Leichte Sprache umschalten');
      btn.setAttribute('aria-pressed', String(isLS));
      btn.textContent = 'LS';
      btn.addEventListener('click', () => applyLang(undefined, !isLS));
      return btn;
    }
    const controls = document.querySelector('.nav__controls');
    if (controls && !controls.querySelector('.nav__ls-toggle')) {
      controls.insertBefore(makeLSBtn('ls-toggle'), controls.firstChild);
    }
    const mobileControls = document.querySelector('.nav__mobile-controls');
    if (mobileControls && !mobileControls.querySelector('.nav__ls-toggle')) {
      mobileControls.insertBefore(makeLSBtn(), mobileControls.firstChild);
    }
  })();

  // Initialtext jedes [data-de]-Elements speichern — Fallback wenn Attribut-Delimiter kaputt (z.B. U+201D statt ASCII-")
  document.querySelectorAll('[data-de]').forEach(el => {
    const t = el.textContent.trim();
    if (t) el.dataset.initial = t;
  });

  // Gespeicherten Zustand beim Laden wiederherstellen
  if (currentLang !== 'de' || isLS) applyLang(currentLang, isLS);

  function toggleLang() { applyLang(currentLang === 'de' ? 'en' : 'de', isLS); }

  if (langToggle) langToggle.addEventListener('click', toggleLang);
  if (langToggleMobile) langToggleMobile.addEventListener('click', toggleLang);


  /* ---- Navigation Scroll Shadow ---- */
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });


  /* ---- Mobile Menu ---- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      mobileMenu.classList.remove('open');
    }
  });


  /* ---- Mobile Accordion ---- */
  document.querySelectorAll('.nav__mobile-expand').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = btn.closest('.nav__mobile-item--dropdown');
      const isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
    });
  });


  /* ---- Timeline Scroll Animation ---- */
  const timelineItems = document.querySelectorAll('.timeline__item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 120);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  timelineItems.forEach(item => observer.observe(item));


  /* ---- Init Lucide Icons ---- */
  if (window.lucide) lucide.createIcons();


  /* ---- Index: eSport Team Cards (aus TEAMS generiert) ---- */
  (function () {
    var grid = document.getElementById('esports-highlights__grid');
    if (!grid) return;
    var lang = currentLang;

    _activeTeams.forEach(function (t) {
      var org = t.org || 'wireheadz';
      var orgClass = org === 'ev' ? 'wireheadz-ev' : 'wireheadz';
      var brandDe = org === 'ev' ? 'WireHeadZ e.V.' : 'WireHeadZ';
      var brandEn = brandDe;
      var teamPage = 'esports/' + (org === 'ev' ? 'wireheadz-ev' : 'wireheadz') + '.html#' + t.id;

      var card = document.createElement('div');
      card.className = 'game-card game-card--' + orgClass + ' game-card--' + t.id;

      var playersDe = t.playerCount + ' Spieler';
      var playersEn = t.playerCount + ' Players';
      var nameDe = t.name_de;
      var nameEn = t.name_en;

      card.innerHTML =
        '<div class="game-card__bg" aria-hidden="true"></div>' +
        '<div class="game-card__content">' +
          '<span class="game-card__brand" data-de="' + brandDe + '" data-en="' + brandEn + '">' + (lang === 'en' ? brandEn : brandDe) + '</span>' +
          '<h3 class="game-card__game" data-de="' + nameDe + '" data-en="' + nameEn + '">' + (lang === 'en' ? nameEn : nameDe) + '</h3>' +
          '<div class="game-card__meta">' +
            '<span data-de="' + playersDe + '" data-en="' + playersEn + '">' + (lang === 'en' ? playersEn : playersDe) + '</span>' +
            '<span class="game-card__status" data-de="Aktiv" data-en="Active">' + (lang === 'en' ? 'Active' : 'Aktiv') + '</span>' +
          '</div>' +
          '<a href="' + teamPage + '" class="btn btn--secondary" style="align-self:flex-start;margin-top:auto;" data-de="Zum Kader" data-en="Meet the Squad" data-ls-de="Zum Team" data-ls-en="To the Team">' + (lang === 'en' ? 'Meet the Squad' : 'Zum Kader') + '</a>' +
        '</div>';

      grid.appendChild(card);
    });

    if (window.lucide) lucide.createIcons();
  })();


  /* ---- eSport Stats Injection (games-hub.html) ---- */
  (function () {
    var lang = document.documentElement.lang || 'de';

    var fills = {
      'tab-desc': {
        de:    'Das kompetitive eSport-Team der WHZ. Aktiv in ' + _gameList('de') + ': regelmäßiges Training und Turnierbetrieb.',
        en:    'The competitive eSport team of WHZ. Active in ' + _gameList('en') + ': regular training and tournament play.',
        ls_de: 'WireHeadZ ist das eSport-Team der WHZ. Wir spielen ' + _gameList('de') + '. Wir trainieren regelmäßig und nehmen an Turnieren teil.',
        ls_en: 'WireHeadZ is the eSport team of WHZ. We play ' + _gameList('en') + '. We train regularly and take part in tournaments.'
      },
      'tab-metric': {
        de:    _teamCount + ' aktive Teams · ' + _playerCount + ' Spieler',
        en:    _teamCount + ' active teams · ' + _playerCount + ' players',
        ls_de: _teamCount + ' Teams · ' + _playerCount + ' Spieler',
        ls_en: _teamCount + ' teams · ' + _playerCount + ' players'
      },
      'section-desc': {
        de:    'WireHeadZ ist das kompetitive eSport-Team der WHZ. Aktiv in ' + _gameList('de') + ' treten wir in nationalen Uniligen an.',
        en:    'WireHeadZ is the competitive eSport team of WHZ. Active in ' + _gameList('en') + ', we compete in national university leagues.',
        ls_de: 'WireHeadZ spielt eSport an der WHZ. Wir spielen ' + _gameList('de') + '. Wir spielen in nationalen Uniligen.',
        ls_en: 'WireHeadZ plays eSport at WHZ. We play ' + _gameList('en') + '. We compete in national university leagues.'
      },
      'team-count': {
        de:    _teamCount + ' aktive Teams: ' + _gameList('de'),
        en:    _teamCount + ' active teams: ' + _gameList('en'),
        ls_de: _teamCount + ' Teams: ' + _gameList('de'),
        ls_en: _teamCount + ' teams: ' + _gameList('en')
      },
      'player-count': {
        de:    _playerCount + ' Spieler, regelmäßiges Training',
        en:    _playerCount + ' players, regular training',
        ls_de: _playerCount + ' Spieler. Wir trainieren regelmäßig.',
        ls_en: _playerCount + ' players. We train regularly.'
      }
    };

    document.querySelectorAll('[data-esport-fill]').forEach(function (el) {
      var key = el.getAttribute('data-esport-fill');
      var texts = fills[key];
      if (!texts) return;
      el.setAttribute('data-de', texts.de);
      el.setAttribute('data-en', texts.en);
      if (texts.ls_de) el.setAttribute('data-ls-de', texts.ls_de);
      if (texts.ls_en) el.setAttribute('data-ls-en', texts.ls_en);
      el.textContent = lang === 'en' ? texts.en : texts.de;
    });

    var sp = document.querySelector('[data-stats-esport-players]');
    if (sp) sp.textContent = _playerCount;
    var st = document.querySelector('[data-stats-esport-teams]');
    if (st) st.textContent = _teamCount;
  })();


  /* ---- Roster CTA + eSport Join: ganzer Bereich klickbar ---- */
  document.querySelectorAll('.roster-cta, .esports-join__half').forEach(function (cta) {
    var link = cta.querySelector('a');
    if (!link) return;
    cta.addEventListener('click', function (e) {
      if (!e.target.closest('a')) window.location.href = link.href;
    });
  });


  /* ---- Player Card Lightbox ---- */
  (function () {
    var lb = document.createElement('div');
    lb.className = 'player-lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Spieler-Detailansicht');
    lb.innerHTML =
      '<div class="player-lightbox__wrap">' +
        '<button class="player-lightbox__nav player-lightbox__nav--prev" aria-label="Vorheriger Spieler">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>' +
        '</button>' +
        '<div class="player-lightbox__card">' +
          '<button class="player-lightbox__close" aria-label="Schließen">' +
            '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
          '</button>' +
          '<img class="player-lightbox__img" src="" alt="" />' +
          '<div class="player-lightbox__info">' +
            '<p class="player-lightbox__name"></p>' +
            '<p class="player-lightbox__study"></p>' +
            '<p class="player-lightbox__counter"></p>' +
          '</div>' +
        '</div>' +
        '<button class="player-lightbox__nav player-lightbox__nav--next" aria-label="Nächster Spieler">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>' +
        '</button>' +
      '</div>';
    document.body.appendChild(lb);

    var lbImg     = lb.querySelector('.player-lightbox__img');
    var lbName    = lb.querySelector('.player-lightbox__name');
    var lbStudy   = lb.querySelector('.player-lightbox__study');
    var lbCounter = lb.querySelector('.player-lightbox__counter');
    var lbPrev    = lb.querySelector('.player-lightbox__nav--prev');
    var lbNext    = lb.querySelector('.player-lightbox__nav--next');
    var lbClose   = lb.querySelector('.player-lightbox__close');

    var currentPlayers = [];
    var currentIndex = 0;

    function lbRender() {
      var p = currentPlayers[currentIndex];
      lbImg.src = p.src;
      lbImg.alt = p.name;
      lbName.textContent = p.name;
      lbStudy.textContent = p.study || '';
      lbCounter.textContent = (currentIndex + 1) + ' / ' + currentPlayers.length;
      lbPrev.style.visibility = currentPlayers.length <= 1 ? 'hidden' : '';
      lbNext.style.visibility = currentPlayers.length <= 1 ? 'hidden' : '';
    }

    function lbOpen(players, index) {
      currentPlayers = players;
      currentIndex = index;
      lbRender();
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
      lbClose.focus();
    }

    function lbClose_fn() {
      lb.classList.remove('open');
      document.body.style.overflow = '';
    }

    lbPrev.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + currentPlayers.length) % currentPlayers.length;
      lbRender();
    });

    lbNext.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % currentPlayers.length;
      lbRender();
    });

    lbClose.addEventListener('click', lbClose_fn);

    lb.addEventListener('click', function (e) {
      if (e.target === lb) lbClose_fn();
    });

    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') lbClose_fn();
      if (e.key === 'ArrowLeft') { currentIndex = (currentIndex - 1 + currentPlayers.length) % currentPlayers.length; lbRender(); }
      if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % currentPlayers.length; lbRender(); }
    });

    document.querySelectorAll('.player-grid').forEach(function (grid) {
      var cards = Array.from(grid.querySelectorAll('.player-card'));
      var players = cards.map(function (card) {
        var img   = card.querySelector('.player-card__bg');
        var name  = card.querySelector('.player-card__name');
        var study = card.querySelector('.player-card__study');
        return {
          src:   img   ? img.src   : '',
          name:  name  ? name.textContent.trim()  : '',
          study: study ? study.textContent.trim() : ''
        };
      });

      cards.forEach(function (card, i) {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.addEventListener('click', function () { lbOpen(players, i); });
        card.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); lbOpen(players, i); }
        });
      });
    });
  })();


  /* ---- Organigramm (WireHeadZ e.V.) ---- */
  const orgNodes = document.querySelectorAll('.org-node');
  const orgPrompt = document.getElementById('org-detail-prompt');
  const orgCard   = document.getElementById('org-detail-card');

  if (orgNodes.length && orgPrompt && orgCard) {

    const orgPeople = {
      'vorsitzende': {
        photo: 'https://www.whz.de/fileadmin/_processed_/6/f/csm_Sachse_37ec47ae78.jpg',
        de: { role: '1. Vorsitzende', name: 'Prof. Dr. Manuela Sachse', meta: 'Vertr.-Professorin für Marketing · WHZ', desc: 'Vertretungsprofessorin für ABWL, insbesondere Marketing an der WHZ. Forschungsschwerpunkte in Konsumentenverhaltensforschung, Sportmarketing und Kommunikationspolitik. Seit 2011 an der WHZ, promoviert an der TU Chemnitz (summa cum laude).' },
        en: { role: '1st Chair',      name: 'Prof. Dr. Manuela Sachse', meta: 'Assoc. Professor of Marketing · WHZ',        desc: 'Associate Professor of Business Administration with a focus on Marketing at WHZ. Research specialisations in consumer behaviour, sports marketing and communication policy. At WHZ since 2011, PhD from TU Chemnitz (summa cum laude).' },
        ls: { role: '1. Vorsitzende', name: 'Prof. Dr. Manuela Sachse', meta: 'Professorin für Marketing · WHZ', desc: 'Sie leitet den Verein. Sie vertritt den Verein nach außen. Sie ist Professorin an der WHZ.' }
      },
      'vorsitzende-2': {
        de: { role: '2. Vorsitzende', name: 'Vorname Nachname', meta: 'Beruf / Studiengang', desc: 'Unterstützt den 1. Vorsitzenden und übernimmt bei Abwesenheit die Vertretung. Koordiniert interne Vereinsangelegenheiten und begleitet Projekte.' },
        en: { role: '2nd Chair',      name: 'First Last Name',  meta: 'Profession / Field',   desc: 'Supports the 1st chair and acts as deputy when absent. Coordinates internal club affairs and accompanies projects.' },
        ls: { role: '2. Vorsitzende', name: 'Vorname Nachname', meta: 'Beruf / Studiengang', desc: 'Sie hilft der 1. Vorsitzenden. Sie übernimmt die Leitung bei Abwesenheit. Sie koordiniert Projekte.' }
      },
      'kassiererin': {
        de: { role: 'Kassiererin', name: 'Vorname Nachname', meta: 'Beruf / Studiengang', desc: 'Verantwortlich für Finanzen, Mitgliedsbeiträge und Jahresabschlüsse. Erstellt Finanzberichte und präsentiert diese bei der Mitgliederversammlung.' },
        en: { role: 'Treasurer',   name: 'First Last Name',  meta: 'Profession / Field',   desc: 'Responsible for finances, membership fees and annual accounts. Prepares financial reports and presents them at general meetings.' },
        ls: { role: 'Kassiererin', name: 'Vorname Nachname', meta: 'Beruf / Studiengang', desc: 'Sie verwaltet das Geld des Vereins. Sie verwaltet die Mitgliedsbeiträge. Sie macht den Jahresabschluss.' }
      },
      'schriftfuehrer': {
        de: { role: 'Schriftführer', name: 'Vorname Nachname', meta: 'Beruf / Studiengang', desc: 'Führt Protokolle, verwaltet die Mitgliederliste und bearbeitet die offizielle Vereinskommunikation nach außen.' },
        en: { role: 'Secretary',     name: 'First Last Name',  meta: 'Profession / Field',   desc: 'Keeps minutes, manages membership lists and handles official external club communications.' },
        ls: { role: 'Schriftführer', name: 'Vorname Nachname', meta: 'Beruf / Studiengang', desc: 'Er schreibt Protokolle. Er verwaltet die Mitgliederliste. Er kümmert sich um die Vereins-Kommunikation.' }
      },
      'beisitzer-1': {
        de: { role: 'Beisitzer', name: 'Vorname Nachname', meta: 'Beruf / Studiengang', desc: 'Berät den Vorstand, bringt eigene Schwerpunkte in die Vereinsarbeit ein und unterstützt bei der Umsetzung von Projekten und Events.' },
        en: { role: 'Advisor',   name: 'First Last Name',  meta: 'Profession / Field',   desc: 'Advises the board, contributes own focus areas to club activities and supports the execution of projects and events.' },
        ls: { role: 'Beisitzer', name: 'Vorname Nachname', meta: 'Beruf / Studiengang', desc: 'Er berät den Vorstand. Er hilft bei Projekten und Events.' }
      },
      'beisitzerin-2': {
        de: { role: 'Beisitzerin', name: 'Vorname Nachname', meta: 'Beruf / Studiengang', desc: 'Berät den Vorstand, bringt eigene Schwerpunkte in die Vereinsarbeit ein und unterstützt bei der Umsetzung von Projekten und Events.' },
        en: { role: 'Advisor',     name: 'First Last Name',  meta: 'Profession / Field',   desc: 'Advises the board, contributes own focus areas to club activities and supports the execution of projects and events.' },
        ls: { role: 'Beisitzerin', name: 'Vorname Nachname', meta: 'Beruf / Studiengang', desc: 'Sie berät den Vorstand. Sie hilft bei Projekten und Events.' }
      }
    };

    let activePersonId = null;

    const orgDetailPhoto = document.getElementById('org-detail-photo');
    const placeholderSVG = '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>';

    function renderOrgDetail(personId, lang) {
      const person = orgPeople[personId];
      if (!person) return;
      const base = person[lang] || person['de'];
      const ls   = person['ls'] || null;
      const d    = (isLS && ls) ? { ...base, role: ls.role, desc: ls.desc } : base;
      orgCard.querySelector('.org-detail__role').textContent = d.role;
      orgCard.querySelector('.org-detail__name').textContent = d.name;
      orgCard.querySelector('.org-detail__meta').textContent = d.meta;
      orgCard.querySelector('.org-detail__desc').textContent = d.desc;
      if (orgDetailPhoto) {
        orgDetailPhoto.innerHTML = person.photo
          ? `<img src="${person.photo}" alt="${d.name}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" />`
          : placeholderSVG;
      }
      orgPrompt.hidden = true;
      orgCard.hidden = false;
    }

    orgNodes.forEach(node => {
      node.addEventListener('click', function () {
        activePersonId = this.dataset.person;
        orgNodes.forEach(n => { n.classList.remove('org-node--active'); n.setAttribute('aria-pressed', 'false'); });
        this.classList.add('org-node--active');
        this.setAttribute('aria-pressed', 'true');
        renderOrgDetail(activePersonId, currentLang);
      });
    });

    // Sprache wechseln → Detailpanel aktualisieren (nach applyLang, da toggleLang zuerst registriert war)
    const orgLangSync = () => { if (activePersonId) renderOrgDetail(activePersonId, currentLang); };
    if (langToggle)       langToggle.addEventListener('click', orgLangSync);
    if (langToggleMobile) langToggleMobile.addEventListener('click', orgLangSync);
  }

  /* ---- Scroll Reveal ---- */
  (function () {
    if (!('IntersectionObserver' in window)) return;
    var sel = '.event-card, .team-card, .partner-card, .game-card, .feature-card, .stats-block__item, .entry-card, .news-card, .spec-card, .persona-card, .logo-grid__item, .accordion__item, .research-card, .game-change-block, .mission__text, .mission__body > *, .section-header';
    var els = document.querySelectorAll(sel);
    els.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      // Alle sichtbaren Einträge dieses Batches nach DOM-Reihenfolge sortieren
      var visible = entries.filter(function (e) { return e.isIntersecting; });
      visible.sort(function (a, b) {
        var ay = a.boundingClientRect.top, by = b.boundingClientRect.top;
        if (Math.abs(ay - by) > 20) return ay - by;         // andere Zeile → nach Y
        return a.boundingClientRect.left - b.boundingClientRect.left; // gleiche Zeile → nach X
      });
      visible.forEach(function (e, i) {
        setTimeout(function () { e.target.classList.add('reveal--in'); }, i * 70);
        io.unobserve(e.target);
      });
    }, { threshold: 0.1 });
    els.forEach(function (el) { io.observe(el); });
  }());

  /* ---- Stats Count-up ---- */
  (function () {
    if (!('IntersectionObserver' in window)) return;
    var nums = document.querySelectorAll('.stats-block__number');
    if (!nums.length) return;
    nums.forEach(function (el) {
      var raw = el.textContent.trim();
      var num = parseInt(raw, 10);
      if (isNaN(num) || num > 999) return; // Jahreszahlen etc. überspringen
      var suffix = raw.replace(/[0-9]/g, '');
      el.dataset.countTarget = num;
      el.dataset.countSuffix = suffix;
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var target = parseInt(el.dataset.countTarget, 10);
        if (isNaN(target)) return;
        var suffix = el.dataset.countSuffix || '';
        var duration = Math.min(1200, Math.max(600, target * 40));
        var start = performance.now();
        function step(now) {
          var progress = Math.min((now - start) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          el.textContent = Math.round(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (el) { if (el.dataset.countTarget) io.observe(el); });
  }());

  /* ---- Back to Top ---- */
  (function () {
    var btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.setAttribute('aria-label', 'Nach oben scrollen');
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';
    document.body.appendChild(btn);
    window.addEventListener('scroll', function () {
      btn.classList.toggle('back-to-top--visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }());

  /* ---- Countdown für bevorstehende Events ---- */
  (function () {
    function pad(n) { return String(n).padStart(2, '0'); }
    function renderCountdown(el, diff, isShowcase) {
      var d = Math.floor(diff / 86400000);
      var h = Math.floor((diff % 86400000) / 3600000);
      var m = Math.floor((diff % 3600000) / 60000);
      var s = Math.floor((diff % 60000) / 1000);
      var mod = isShowcase ? ' countdown__unit--light' : '';
      var dayLabel = currentLang === 'en' ? 'Days' : 'Tage';
      el.innerHTML =
        '<div class="countdown__unit' + mod + '"><span class="countdown__value">' + d + '</span><span class="countdown__label">' + dayLabel + '</span></div>' +
        '<div class="countdown__unit' + mod + '"><span class="countdown__value">' + pad(h) + '</span><span class="countdown__label">h</span></div>' +
        '<div class="countdown__unit' + mod + '"><span class="countdown__value">' + pad(m) + '</span><span class="countdown__label">min</span></div>' +
        '<div class="countdown__unit' + mod + '"><span class="countdown__value">' + pad(s) + '</span><span class="countdown__label">s</span></div>';
    }
    function tick() {
      var now = Date.now();
      document.querySelectorAll('[data-event-date]').forEach(function (container) {
        var target = new Date(container.dataset.eventDate).getTime();
        var diff = target - now;
        var isShowcase = container.classList.contains('showcase__slide');
        var elSelector = isShowcase ? '.showcase__countdown' : '.event-card__countdown';
        var el = container.querySelector(elSelector);
        if (!el) return;
        if (diff <= 0) { el.innerHTML = ''; return; }
        renderCountdown(el, diff, isShowcase);
      });
    }
    tick();
    setInterval(tick, 1000);
  }());

  /* ---- Skip-to-Content ---- */
  (function () {
    var skip = document.createElement('a');
    skip.href = '#main-content';
    skip.className = 'skip-link';
    skip.textContent = currentLang === 'en' ? 'Skip to content' : 'Zum Inhalt springen';
    document.body.insertBefore(skip, document.body.firstChild);
    var main = document.querySelector('main');
    if (main && !main.id) main.id = 'main-content';
  }());

  /* ---- Page Transition Fade ---- */
  (function () {
    var overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay);

    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href]');
      if (!a) return;
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#' || href.startsWith('mailto') || href.startsWith('tel') || a.target === '_blank') return;
      if (href.startsWith('http') && !href.startsWith(location.origin)) return;
      e.preventDefault();
      var dest = a.href;
      overlay.classList.add('page-transition-overlay--active');
      setTimeout(function () { window.location.href = dest; }, 220);
    });
  }());

  /* ---- Typed Text (Startseite Showcase Slide 0) ---- */
  (function () {
    var slide0 = document.querySelector('.showcase__slide[data-slide="0"]');
    if (!slide0) return;
    var title = slide0.querySelector('.showcase__title');
    if (!title) return;

    var wordsDe = ['Spielen.', 'Lernen.', 'Forschen.', 'Vernetzen.', 'Gewinnen.'];
    var wordsEn = ['Playing.', 'Learning.', 'Researching.', 'Connecting.', 'Winning.'];

    var line = document.createElement('p');
    line.className = 'showcase__typed-line';
    line.setAttribute('aria-hidden', 'true');
    line.innerHTML = '<span class="showcase__typed-text"></span><span class="showcase__typed-cursor"></span>';
    title.insertAdjacentElement('afterend', line);

    var textEl = line.querySelector('.showcase__typed-text');
    var wordIdx = 0, charIdx = 0, deleting = false, delay = 120;

    function tick() {
      var words = currentLang === 'en' ? wordsEn : wordsDe;
      var word = words[wordIdx % words.length];
      if (deleting) {
        charIdx--;
        textEl.textContent = word.slice(0, charIdx);
        if (charIdx === 0) { deleting = false; wordIdx++; delay = 400; }
        else delay = 55;
      } else {
        charIdx++;
        textEl.textContent = word.slice(0, charIdx);
        if (charIdx === word.length) { deleting = true; delay = 1800; }
        else delay = 115;
      }
      setTimeout(tick, delay);
    }
    setTimeout(tick, 1000);
  }());

  /* ---- Events Archive Filter ---- */
  (function () {
    var archiveSection = document.getElementById('archiv');
    if (!archiveSection) return;
    var grid = archiveSection.querySelector('.events-grid');
    if (!grid) return;

    var cats = [];
    grid.querySelectorAll('.event-card__badge--category').forEach(function (badge) {
      var label = (badge.getAttribute('data-de') || badge.textContent).trim();
      if (cats.indexOf(label) === -1) cats.push(label);
    });
    if (!cats.length) return;

    var bar = document.createElement('div');
    bar.className = 'events-filter';
    bar.setAttribute('role', 'group');
    bar.setAttribute('aria-label', 'Filter nach Kategorie');

    function makeBtn(label, filter) {
      var btn = document.createElement('button');
      btn.className = 'events-filter__btn';
      btn.dataset.filter = filter;
      btn.textContent = label;
      return btn;
    }

    var allBtn = makeBtn(currentLang === 'en' ? 'All' : 'Alle', 'all');
    allBtn.classList.add('events-filter__btn--active');
    bar.appendChild(allBtn);
    cats.forEach(function (cat) { bar.appendChild(makeBtn(cat, cat)); });
    grid.parentNode.insertBefore(bar, grid);

    function applyFilter(active) {
      bar.querySelectorAll('.events-filter__btn').forEach(function (b) {
        b.classList.toggle('events-filter__btn--active', b.dataset.filter === active);
      });
      grid.querySelectorAll('.event-card--archive').forEach(function (card) {
        if (active === 'all') { card.style.display = ''; return; }
        var cardCats = Array.from(card.querySelectorAll('.event-card__badge--category')).map(function (b) {
          return (b.getAttribute('data-de') || b.textContent).trim();
        });
        card.style.display = cardCats.indexOf(active) !== -1 ? '' : 'none';
      });
    }

    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('.events-filter__btn');
      if (btn) applyFilter(btn.dataset.filter);
    });
  }());

  /* ---- Showcase Event-Dot "Neu"-Indikator ---- */
  (function () {
    /* Nur anzeigen wenn der Event-Slide noch existiert (sonst wurden Dots umnummeriert) */
    if (UPCOMING_EVENTS.length === 0) return;
    var eventDot = document.querySelector('.showcase__dot[data-target="2"]');
    if (!eventDot) return;
    var badge = document.createElement('span');
    badge.className = 'showcase__dot-badge';
    badge.setAttribute('aria-hidden', 'true');
    eventDot.style.position = 'relative';
    eventDot.appendChild(badge);
  }());

  /* ---- Discord Copy Button (mitmachen.html) ---- */
  (function () {
    if (!navigator.clipboard) return;
    var target = document.querySelector('.discord-feature__cta-card a[href*="discord.gg"]');
    if (!target) return;
    var copyBtn = document.createElement('button');
    copyBtn.className = 'btn btn--ghost discord-copy-btn';
    copyBtn.setAttribute('aria-label', 'Discord-Einladungslink kopieren');
    copyBtn.innerHTML =
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>' +
      '<span>' + (currentLang === 'en' ? 'Copy link' : 'Link kopieren') + '</span>';
    target.insertAdjacentElement('afterend', copyBtn);
    copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText('https://discord.gg/zs48PfpJJF').then(function () {
        var span = copyBtn.querySelector('span');
        span.textContent = currentLang === 'en' ? 'Copied!' : 'Kopiert!';
        copyBtn.classList.add('discord-copy-btn--success');
        setTimeout(function () {
          span.textContent = currentLang === 'en' ? 'Copy link' : 'Link kopieren';
          copyBtn.classList.remove('discord-copy-btn--success');
        }, 2000);
      });
    });
  }());

  /* ---- Partner Card: "Website besuchen" Link ---- */
  (function () {
    document.querySelectorAll('.partner-card').forEach(function (card) {
      var logoLink = card.querySelector('.partner-card__logo a');
      if (!logoLink) return;
      var visitLink = document.createElement('a');
      visitLink.href = logoLink.href;
      visitLink.target = '_blank';
      visitLink.rel = 'noopener';
      visitLink.className = 'partner-card__visit-link';
      visitLink.setAttribute('data-de', 'Website besuchen');
      visitLink.setAttribute('data-en', 'Visit website');
      visitLink.innerHTML = (currentLang === 'en' ? 'Visit website' : 'Website besuchen') +
        ' <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>';
      card.appendChild(visitLink);
    });
  }());

  /* ---- Game-Card: Gradient-Winkel exakt zur Diagonale berechnen ---- */
  (function () {
    function updateDiagAngle() {
      var card = document.querySelector('.game-card');
      if (!card) return;
      var w = card.offsetWidth, h = card.offsetHeight;
      if (!w || !h || w < 100) return; // skip for tiny/invisible cards (fallback to CSS default)
      // Diagonale (64%,0)→(52%,100%): Richtung (-0.12w, h).
      // Senkrecht dazu (CW): (h, 0.12w). CSS-Winkel = atan2(h, -0.12w).
      var angle = Math.atan2(h, -0.12 * w) * 180 / Math.PI;
      document.documentElement.style.setProperty('--diag-gradient-angle', angle.toFixed(1) + 'deg');
    }
    updateDiagAngle();
    window.addEventListener('resize', updateDiagAngle);
  }());

  /* ---- Transparent Nav on hero pages ---- */
  (function () {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    /* Alle Seiten starten mit transparenter Nav — jede Seite hat eine Hero-Sektion */

    var THRESHOLD = 80;
    function update() {
      nav.classList.toggle('nav--transparent', window.scrollY < THRESHOLD);
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
  }());

  /* ---- Showcase pause class for progress bar ---- */
  (function () {
    var section = document.getElementById('showcase');
    if (!section) return;
    section.addEventListener('mouseenter', function () { section.classList.add('showcase--paused'); });
    section.addEventListener('mouseleave', function () { section.classList.remove('showcase--paused'); });
  }());

  /* ---- Dynamische Galerien — jede [data-gallery] liest images.json im Ordner ----
     Pfad steht im data-gallery-Attribut (relativ zur Seite).
     Bilder werden aus images.json geladen (Array von Dateinamen, z.B. ["1.png","2.jpg"]).
     Reihenfolge = Reihenfolge in der JSON. Erstes Bild wird breit (--wide).
     Fehlende/leere JSON → Section ausblenden. */
  (function () {
    var grids = document.querySelectorAll('[data-gallery]');
    if (!grids.length) return;

    function hide(grid) {
      var sec = grid.closest('section');
      (sec || grid).style.display = 'none';
    }

    Array.prototype.forEach.call(grids, function (grid) {
      var base = grid.getAttribute('data-gallery') || '';
      if (base && base.charAt(base.length - 1) !== '/') base += '/';

      fetch(base + 'images.json')
        .then(function (r) {
          if (!r.ok) throw new Error('images.json not found');
          return r.json();
        })
        .then(function (files) {
          if (!Array.isArray(files) || !files.length) { hide(grid); return; }

          var frag = document.createDocumentFragment();
          files.forEach(function (file, i) {
            var img = document.createElement('img');
            img.src = base + file;
            img.loading = 'lazy';
            img.alt = file.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ').trim();
            img.className = 'gallery-grid__img' + (i === 0 ? ' gallery-grid__img--wide' : '');
            img.tabIndex = 0;
            img.setAttribute('role', 'button');
            img.title = 'Vergrößern';
            frag.appendChild(img);
          });
          grid.innerHTML = '';
          grid.appendChild(frag);
        })
        .catch(function () { hide(grid); });
    });
  }());

  /* ---- Galerie-Lightbox: Bild groß ansehen + per Pfeile durchblättern ----
     Funktioniert für ALLE Galerien (Delegation auf .gallery-grid__img).
     Blättert innerhalb der angeklickten Galerie. Schließen: X / Overlay / Esc.
     Tastatur: ← → blättern, Esc schließt, Enter/Space öffnet ein fokussiertes Bild. */
  (function () {
    if (!document.querySelector('.gallery-grid')) return;

    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Galerie-Bildansicht');
    lb.innerHTML =
      '<div class="lightbox__overlay"></div>' +
      '<button class="lightbox__close" aria-label="Schließen"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>' +
      '<button class="lightbox__nav lightbox__nav--prev" aria-label="Vorheriges Bild"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>' +
      '<img class="lightbox__img" src="" alt="" />' +
      '<button class="lightbox__nav lightbox__nav--next" aria-label="Nächstes Bild"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>' +
      '<div class="lightbox__nav-bar">' +
        '<button class="lightbox__bar-btn lightbox__bar-prev" aria-label="Vorheriges Bild"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>' +
        '<button class="lightbox__bar-btn lightbox__bar-next" aria-label="Nächstes Bild"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>' +
      '</div>';
    document.body.appendChild(lb);

    var lbImg    = lb.querySelector('.lightbox__img');
    var btnPrev  = lb.querySelector('.lightbox__nav--prev');
    var btnNext  = lb.querySelector('.lightbox__nav--next');
    var barPrev  = lb.querySelector('.lightbox__bar-prev');
    var barNext  = lb.querySelector('.lightbox__bar-next');
    var btnClose = lb.querySelector('.lightbox__close');
    var overlay  = lb.querySelector('.lightbox__overlay');

    var items = [];
    var idx = 0;

    function render() {
      var it = items[idx];
      if (!it) return;
      lbImg.src = it.src;
      lbImg.alt = it.alt || '';
      var multi = items.length > 1;
      btnPrev.style.display = multi ? '' : 'none';
      btnNext.style.display = multi ? '' : 'none';
      barPrev.style.visibility = multi ? '' : 'hidden';
      barNext.style.visibility = multi ? '' : 'hidden';
    }
    function openFrom(img) {
      var grid = img.closest('.gallery-grid');
      if (!grid) return;
      var all = Array.prototype.slice.call(grid.querySelectorAll('.gallery-grid__img'));
      items = all.map(function (im) { return { src: im.currentSrc || im.src, alt: im.alt }; });
      if (!items.length) return;
      idx = all.indexOf(img);
      render();
      lb.classList.add('lightbox--open');
      document.body.style.overflow = 'hidden';
      btnClose.focus();
    }
    function close() {
      lb.classList.remove('lightbox--open');
      document.body.style.overflow = '';
    }
    function go(d) {
      if (!items.length) return;
      idx = (idx + d + items.length) % items.length;
      render();
    }

    document.addEventListener('click', function (e) {
      var img = e.target && e.target.closest ? e.target.closest('.gallery-grid__img') : null;
      if (img) openFrom(img);
    });
    document.addEventListener('keydown', function (e) {
      var img = e.target && e.target.closest ? e.target.closest('.gallery-grid__img') : null;
      if (img && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openFrom(img); }
    });

    btnPrev.addEventListener('click', function () { go(-1); });
    btnNext.addEventListener('click', function () { go(1); });
    barPrev.addEventListener('click', function () { go(-1); });
    barNext.addEventListener('click', function () { go(1); });
    btnClose.addEventListener('click', close);
    overlay.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('lightbox--open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
    });

    var touchStartX = 0;
    var touchPointers = 0;
    lb.addEventListener('touchstart', function (e) {
      touchPointers = e.touches.length;
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      if (touchPointers > 1) return;
      if (window.visualViewport && window.visualViewport.scale > 1.05) return;
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    });
  }());

  /* ---- 3D-Tilt auf Karten (Tier 3, interaktionsgesteuert) ---- */
  (function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    var MAX = 6;
    var cards = document.querySelectorAll('.area-card, .game-card');
    cards.forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transition = 'transform 90ms ease-out';
        el.style.transform = 'perspective(900px) rotateX(' + (-py * MAX).toFixed(2) +
          'deg) rotateY(' + (px * MAX).toFixed(2) + 'deg) translateY(-4px)';
      });
      el.addEventListener('pointerleave', function () {
        el.style.transition = 'transform 320ms ease';
        el.style.transform = '';
      });
    });
  }());

  /* ---- Sanfter Scroll-Parallax auf Subpage-Hero-Bildern (Tier 3) ----
     Bewusst NICHT auf der Index-Showcase: die hat bereits Slide- +
     Zoom-Animation; Parallax obendrauf würde unruhig wirken. */
  (function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var els = Array.prototype.slice.call(document.querySelectorAll('.tab-hero__bg, .hero__bg'));
    if (!els.length) return;
    els.forEach(function (el) { el.style.willChange = 'transform'; });
    var ticking = false;
    function update() {
      var vh = window.innerHeight;
      els.forEach(function (el) {
        var r = el.getBoundingClientRect();
        var off = (r.top + r.height / 2 - vh / 2) * -0.08;
        el.style.transform = 'translate3d(0,' + off.toFixed(1) + 'px,0) scale(1.12)';
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }());

  /* ---- Interaktiver Cursor-Spot: Raster reagiert auf die Maus ---- */
  (function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    var areas = document.querySelectorAll('.footer, .discord-cta, .stats-block, .section--dark');
    areas.forEach(function (area) {
      var spot = document.createElement('span');
      spot.className = 'whz-spot';
      spot.setAttribute('aria-hidden', 'true');
      area.insertBefore(spot, area.firstChild);
      var raf = null, mx = 0, my = 0;
      area.addEventListener('pointermove', function (e) {
        var r = area.getBoundingClientRect();
        mx = e.clientX - r.left;
        my = e.clientY - r.top;
        if (raf) return;
        raf = window.requestAnimationFrame(function () {
          spot.style.setProperty('--mx', mx + 'px');
          spot.style.setProperty('--my', my + 'px');
          raf = null;
        });
      });
      area.addEventListener('pointerenter', function () { spot.classList.add('is-hot'); });
      area.addEventListener('pointerleave', function () { spot.classList.remove('is-hot'); });
    });
  }());

});
