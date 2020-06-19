const churches = [
  {
    address:
      'Russel 11 Leisure Centre, Parsloes Avenue, romford, essex, united kingdom, RM9  5QT',
    lat: 51.5490005,
    lng: 0.1329193,
  },
  {
    address:
      'Greenacre School,,  Keresforth Hill Road, barnsley, south yorkshire, united kingdom, S70 6RG',
    lat: 53.5436081,
    lng: -1.5008777,
  },
  {
    address: '19A, Collingwood, witham, essex, united kingdom, CM8 2DY',
    lat: 51.8009514,
    lng: 0.6396286,
  },
  {
    address:
      'The Legacy Business Centre (Room 317), 2A Ruckholt Road, london, undefined, united kingdom, E10 5NP',
    lat: 51.5583568,
    lng: -0.0075994,
  },
  {
    address:
      'Leigh park community centre, Dunsbury way,, havant, hampshire, united kingdom, PO9 5BG',
    lat: 50.8669636,
    lng: -0.9863991,
  },
  {
    address:
      'Friends Institute, 220 Moseley Road, birmingham, west midlands, united kingdom, B12 0DG',
    lat: 52.4657115,
    lng: -1.8823755,
  },
  {
    address:
      '685-689 Old Kent Road, Old Kent Road, london,,, undefined, united kingdom, SE15 1JS',
    lat: 51.4820998,
    lng: -0.0617358,
  },
  {
    address:
      '87/89 Mesnes Stree, Wigan, wigan, lancashire, united kingdom, WN1  1QJ',
    lat: 53.5504492,
    lng: -2.6326959,
  },
  {
    address:
      'Ithaca House, 27 Romford Road, london, london, united kingdom, E15 4LJ',
    lat: 51.5426505,
    lng: 0.0061923,
  },
  {
    address: '10, Dunton Road, london, london, united kingdom, E10 7AF',
    lat: 51.5729867,
    lng: -0.0128926,
  },
  {
    address:
      'Grandstand  community centre, Carholme  Road, lincoln, lincolnshire, united kingdom, LN1 1SE',
    lat: 53.2349882,
    lng: -0.5641933,
  },
  {
    address:
      'c/o Methodist Church Barking Side, Mantle Road, ilford, essex, united kingdom, IG6  2AZ',
    lat: 51.5910085,
    lng: 0.0783342,
  },
  {
    address:
      'The Key, 15 St. Margaret’s Plain, ipswich, suffolk, united kingdom, IP4 2BB',
    lat: 52.059378,
    lng: 1.156958,
  },
  {
    address:
      'POPLAR GROVE CENTRE, WEMBLEY, london, london, united kingdom, HA9  9DB',
    lat: 51.5630524,
    lng: -0.2624451,
  },
  {
    address:
      '71-73 Beverly Road, Hull, kingston upon hull, undefined, united kingdom, HU3 1XL',
    lat: 53.7513507,
    lng: -0.3484001,
  },
  {
    address: '173, heathway, dagenham, essex, united kingdom, RM9 6AF',
    lat: 51.5377798,
    lng: 0.1480791,
  },
  {
    address:
      'Brice Memorial Hall, Queens Road, leicester, leicestershire, united kingdom, LE2 3FL',
    lat: 52.616187,
    lng: -1.115731,
  },
  {
    address:
      'Commemoration Hall, 39 High Street, huntingdon, cambridgeshire, united kingdom, PE29 3AQ',
    lat: 52.3294444,
    lng: -0.1825,
  },
  {
    address:
      'Hillsborough Sports Arena, Middlewood Road, sheffield, south yorkshire, united kingdom, S6  4HA',
    lat: 53.4042608,
    lng: -1.5032437,
  },
  {
    address:
      'Elim Pentecostal Church, Vowler Road, basildon, undefined, united kingdom, SS16 6AG',
    lat: 51.565366,
    lng: 0.423027,
  },
  {
    address:
      'Essex Room, YMCA Romford, romford essex, essex, united kingdom, RM7  0PH',
    lat: 51.564939,
    lng: 0.184396,
  },
  {
    address:
      'Rock Of Redemption House, 37-39 PECKHAM High Street, london, london, united kingdom, SE15  5EB',
    lat: 51.4735322,
    lng: -0.0716226,
  },
  {
    address:
      '92 – 94 Hopewell Drive, , chatham,kent,, undefined, united kingdom, ME5 7PY',
    lat: 51.3644464,
    lng: 0.5449862,
  },
  {
    address:
      'c/o Katherine Low Settlement Community Centre,, 108 Battersea High Street, london, london, united kingdom, SW11 3HP',
    lat: 51.472017,
    lng: -0.173596,
  },
  {
    address:
      'The Tabernacle, 69 James Street, glasgow, glasgow lanarkshire, united kingdom, G40 1BZ',
    lat: 55.8480541,
    lng: -4.2296148,
  },
  {
    address: 'Hargrave Hall, London, london, london, united kingdom, N19 5SP',
    lat: 51.5636724,
    lng: -0.1335298,
  },
  {
    address:
      'Chantry Academy School, Community Hall, ipswich, suffolk, united kingdom, IP2 9JZ',
    lat: 52.044451,
    lng: 1.12831,
  },
  {
    address:
      'Mudshute Farm, Isle of Dogs, undefined, undefined, united kingdom, E14 3HP',
    lat: 51.4921,
    lng: -0.010414,
  },
  {
    address:
      'Ellen Brown Centre, 145 Grange Road, london, london, united kingdom, SE1  3EU',
    lat: 51.4945036,
    lng: -0.0754735,
  },
  {
    address:
      'Bexleyheath Scout Hall, 85 Mayplace Road West, bexleyheath, kent, united kingdom, DA7 4JL',
    lat: 51.4576279,
    lng: 0.1511118,
  },
  {
    address:
      'Bacon’s College,, Timber Pond Road, london, london, united kingdom, SE16 6AT',
    lat: 51.5024328,
    lng: -0.0414703,
  },
  {
    address:
      'Kats Building, 1 Fountainwell Street, undefined, glasgow lanarkshire, united kingdom, G21 1RB',
    lat: 55.8737038,
    lng: -4.2383194,
  },
  {
    address:
      'THE AVENUE METHODIST CATHEDRAL, THE AVENUE, undefined, undefined, united kingdom, TS5 6PA',
    lat: 36.1438889,
    lng: -95.9844444,
  },
  {
    address:
      'Easthampstead & Wildridings Community Centre, Rectory Lane, bracknell, berkshire, united kingdom, RG12 7BH',
    lat: 51.4046809,
    lng: -0.7552191,
  },
  {
    address:
      'Ardleigh House, 42 Ardleigh Green Road, hornchurch, essex, united kingdom, RM11 2LG',
    lat: 51.5833137,
    lng: 0.2208884,
  },
  {
    address:
      'Saint George’s Road, , bolton, lancashire, united kingdom, BL1 2BY',
    lat: 53.5816065,
    lng: -2.432667,
  },
  {
    address:
      'Swanscombe Methodist Church Hall, Milton Road, swanscombe, kent, united kingdom, DA10 0AJ',
    lat: 51.4466344,
    lng: 0.3101759,
  },
  {
    address:
      'Hutton Community Centre, Harrison Close, brentwood, essex, united kingdom, C13  1LP',
    lat: 51.6344444,
    lng: 0.3513889,
  },
  {
    address:
      'Castle Hall Community Centre, Castle Road, Rayleigh Essex., rayleigh, essex, united kingdom, SS6 7QF',
    lat: 51.5819007,
    lng: 0.6066676,
  },
  {
    address:
      'Jury’s Inn,, Wellesley Road, croydon, surrey, united kingdom, CR0 9XY',
    lat: 51.3762002,
    lng: -0.097499,
  },
  {
    address:
      'Hamilton House, Trinity street, chester, undefined, united kingdom, CH1 2BH',
    lat: 53.1905615,
    lng: -2.8940842,
  },
  {
    address:
      'BERRYFIELDS CHURCH OF ENGLAND PRIMARY SCHOOL, ) PARADISE ORCHARD,, aylesbury, buckinghamshire, united kingdom, HP18 0WS',
    lat: 51.8360184,
    lng: -0.8546585,
  },
  {
    address: ', , undefined, undefined, united kingdom, ',
    lat: null,
    lng: null,
  },
  {
    address:
      'South Wing 2nd Floor, Westgate House, dartford, kent, united kingdom, DA1 2EH',
    lat: 51.4454083,
    lng: 0.2132361,
  },
  {
    address:
      'London Marriott Hotel Park Lane, 140 Park Lane, london, london, united kingdom, W1K 7AA',
    lat: 51.5130218,
    lng: -0.1579099,
  },
  {
    address:
      'Ruth Winston House, 190 Green Lanes, london, london, united kingdom, N13 5UE',
    lat: 51.6161497,
    lng: -0.1091948,
  },
  {
    address:
      'Terry Wright Community Hall,,  607 Gleadless Road, sheffield, south yorkshire, united kingdom, S2 2BT',
    lat: 53.3554445,
    lng: -1.4485994,
  },
  {
    address: '557-565, Barking Road, london, london, united kingdom, E6 2LW',
    lat: 51.5340449,
    lng: 0.0628448,
  },
  {
    address:
      'ASDA Life Community Centre, Odhams industrial Estate, watford, hertfordshire, united kingdom, WD24 7RT',
    lat: 51.6796393,
    lng: -0.390257,
  },
  {
    address:
      '355 Great Horton Road, , bradford, west yorkshire, united kingdom, BD7 3BZ',
    lat: 53.782948,
    lng: -1.7811623,
  },
  {
    address:
      '24, Crackenedge Lane, dewsbury, west yorkshire, united kingdom, WF13 1RB',
    lat: 53.6940997,
    lng: -1.6277,
  },
  {
    address:
      'Staines Methodist Church, Thames Street, staines upon thames staines, undefined, united kingdom, TW18 4SD',
    lat: 51.4326532,
    lng: -0.5130093,
  },
  {
    address:
      'Glory Community Centre, 50 Nelson Street, bradford, west yorkshire, united kingdom, BD5  0DD',
    lat: 53.7887741,
    lng: -1.7518343,
  },
  {
    address:
      'Pottery Bank Community Centre, Yelverton Crescent, Walker, undefined, undefined, united kingdom, NE6  3SW',
    lat: 54.963385,
    lng: -1.552903,
  },
  {
    address:
      'Imperial crown hotel, , bradford, west yorkshire, united kingdom, HX1 1QE',
    lat: 53.7213003,
    lng: -1.8555122,
  },
  {
    address:
      'Scout Hall, 23 Kielder Close, ilford, essex, united kingdom, IG6 3ER',
    lat: 51.6069224,
    lng: 0.1054889,
  },
  {
    address:
      'Pontefract, West Yorkshire,, undefined, undefined, united kingdom, WF7 7FW',
    lat: 53.6442958,
    lng: -1.3494796,
  },
  {
    address:
      'Noak Hill Sports Complex, Noak Hill Road,, undefined, undefined, united kingdom, RM3 7YA',
    lat: 51.611521,
    lng: 0.2090523,
  },
  {
    address: 'Unit 1A, 2 to 6, hainault, essex, united kingdom, IG6 3UT',
    lat: 51.607981,
    lng: 0.1241038,
  },
  {
    address:
      'Units 50/51 Agora Shopping Mall, Church Street,, milton keynes, buckinghamshire, united kingdom, MK12 5LG',
    lat: 52.0416018,
    lng: -0.758278,
  },
  {
    address:
      'Brenda Blakemore Community Centre,, Davies Close(Behind Police Station), rainham, essex, united kingdom, RM13 9JL',
    lat: 51.5215949,
    lng: 0.2056432,
  },
  {
    address:
      'ST ANDREWS BUILDING, BROWNLEY ROAD, manchester, undefined, united kingdom, M22 0DW',
    lat: 53.3768313,
    lng: -2.2582541,
  },
  {
    address:
      'Kingswood Community Centre, , undefined, undefined, united kingdom, BS15 4AB',
    lat: 51.4623468,
    lng: -2.5045981,
  },
  {
    address:
      '19b PENPARK ROAD, South Mead, bristol, gloucestershire, united kingdom, BS10  5SD',
    lat: 51.5017916,
    lng: -2.5924308,
  },
  {
    address:
      '220, Hawthorn Drive, undefined, undefined, united kingdom, CO3 3HY',
    lat: 51.885437,
    lng: 0.8866745,
  },
  {
    address:
      'Woodman Community Centre,, Woodman Street, london, london, united kingdom, E16 2NF',
    lat: 51.5013668,
    lng: 0.0668898,
  },
  {
    address: ', , undefined, undefined, united kingdom, ',
    lat: null,
    lng: null,
  },
  {
    address:
      '64-70 Mabgate, Leeds, ,,leeds, undefined, united kingdom, LS9 7DZ',
    lat: 53.8019966,
    lng: -1.5305872,
  },
  {
    address:
      'Unit 10 Fountayne House, Fountayne Road,, london, london, united kingdom, N15 2QL',
    lat: 51.5841819,
    lng: -0.063431,
  },
  {
    address:
      '27 Cray road, Off Rectory Lane, london, london, united kingdom, DA14 5BU',
    lat: 51.4184938,
    lng: 0.1178175,
  },
  {
    address:
      '1294-1296 Ashton Old Road, , manchester,,, undefined, united kingdom, M11 1JG',
    lat: 53.4727517,
    lng: -2.1632778,
  },
  {
    address:
      'Saint Johns Methodist Church Hall, Woodside road, amersham, buckinghamshire, united kingdom, HP6 6AJ',
    lat: 51.6774813,
    lng: -0.6013996,
  },
  {
    address:
      'Chesham Youth Centre, Chesham, chesham, buckinghamshire, united kingdom, HP5 2HA',
    lat: 51.7077492,
    lng: -0.613008,
  },
  {
    address:
      'Christ Church Hall, Erith, undefined, undefined, united kingdom, DA8 3AN',
    lat: 51.4797106,
    lng: 0.1765779,
  },
  {
    address:
      '57, Silverlace Avenue, manchester,,, undefined, united kingdom, M11 1JE',
    lat: 53.4745757,
    lng: -2.15842,
  },
  {
    address:
      'Holiday Inn Express Hotel, Tempus Ten, Tempus Drive, walsall, west midlands, united kingdom, WS2 8TJ',
    lat: 52.5844809,
    lng: -2.0127364,
  },
  {
    address:
      'Shephall Green Community Centre, , stevenage, hertfordshire, united kingdom, SG2 9XR',
    lat: 51.8910713,
    lng: -0.1787147,
  },
  {
    address:
      'Somerstown  Central, Rivers street Somerstown, portsmouth, hampshire, united kingdom, PO5 4EZ',
    lat: 50.7953159,
    lng: -1.0863527,
  },
  {
    address:
      '1, The Farrows, walton on thames, surrey, united kingdom, KT12 3JQ',
    lat: 51.3822972,
    lng: -0.3997273,
  },
  {
    address:
      'Regal Community Centre, Ridgefield Road, oxford, oxfordshire, united kingdom, OX4 3BY',
    lat: 51.7406869,
    lng: -1.2252518,
  },
  {
    address:
      'Northbourne Centre, Church St, didcot, oxfordshire, united kingdom, OX11 8DG',
    lat: 51.6054775,
    lng: -1.2366219,
  },
  {
    address:
      'Haydon Wick, Parish Council, swindon, wiltshire, united kingdom, SN25 1QQ',
    lat: 51.5922956,
    lng: -1.8077295,
  },
  {
    address:
      'Gordon Hall,, Clay Hill Road and Bardfield Road, basildon, essex, united kingdom, SS16 4JN',
    lat: 51.5648016,
    lng: 0.4853821,
  },
  {
    address:
      'East Ham Working Men’s Club, 2 Boleyn Road, london, london, united kingdom, E6 1QE',
    lat: 51.531475,
    lng: 0.0418139,
  },
  {
    address:
      'Unit BC The Paddocks, 347 Cherry Hinton Road, cambridge, cambridgeshire, united kingdom, CB1 8DH',
    lat: 52.2014084,
    lng: 0.1568846,
  },
  {
    address:
      'Canterbury Baptist Church, St. George’s Place, canterbury,,, undefined, united kingdom, CT1 1UT',
    lat: 51.2760171,
    lng: 1.0854065,
  },
  {
    address: '46, Lowfield Street, dartford, dartford, united kingdom, DA1 1HJ',
    lat: 51.4420241,
    lng: 0.2160818,
  },
  {
    address:
      '161 Summer Road, Peckham, london, london, united kingdom, SE15 6JL',
    lat: 51.4775823,
    lng: -0.0735296,
  },
  {
    address:
      'Potters Bar Baptist Church, Barnet Road, potters bar, hertfordshire, united kingdom, EN6 2QU',
    lat: 51.6898839,
    lng: -0.1783186,
  },
  {
    address:
      'Coombes Community Centre, Burns Road, royston, hertfordshire, united kingdom, SG8 5PT',
    lat: 52.0584898,
    lng: -0.021062,
  },
  {
    address:
      'Unit 3&4 The Plaza, Stevenage, undefined, hertfordshire,,, united kingdom, SG1 1PF',
    lat: 51.9003377,
    lng: -0.2023113,
  },
  {
    address:
      '24 Camberwell Road, Camberwell, london, london, united kingdom, SE5 0EN',
    lat: 51.4837974,
    lng: -0.0943949,
  },
  {
    address:
      'Unit 11, Studlands Park Avenue, newmarket,,, undefined, united kingdom, CB8 7AU',
    lat: 52.2604355,
    lng: 0.3891976,
  },
  {
    address:
      '21/23 Wanlip Street, Leicester, leicester, leicestershire, united kingdom, LE1 2JS',
    lat: 52.6432382,
    lng: -1.1255275,
  },
  {
    address:
      'Academy Sports Hall, 240 Lynton Road, london, london, united kingdom, SE1 5LA',
    lat: 51.4893189,
    lng: -0.0644946,
  },
  {
    address:
      'Golden Lion Hotel, 8 -10 King Street, stirling, stirling stirlingshire, united kingdom, FK8  1BD',
    lat: 56.1179717,
    lng: -3.9373064,
  },
  {
    address:
      '210 Kennedy Street, Townhead, glasgow, glasgow lanarkshire, united kingdom, G4  0BQ',
    lat: 55.8668582,
    lng: -4.2424992,
  },
  {
    address:
      'Grace Tabernacle, 105 Wellington Street, peterborough, cambridgeshire, united kingdom, PE1 5DU',
    lat: 52.5755382,
    lng: -0.2321279,
  },
  {
    address:
      'The Mercy Centre, Rose Street, northfleet, kent, united kingdom, DA11 9EQ',
    lat: 51.4455004,
    lng: 0.327485,
  },
  {
    address:
      'Conference Centre, Barking Learning Centre (BLC), 2 Town Square, barking, essex, united kingdom, IG11 7NB',
    lat: 51.536136,
    lng: 0.0796217,
  },
  {
    address:
      '4 Young Place, , inverness-shire, undefined, united kingdom, PH33 6HW',
    lat: 56.8170595,
    lng: -5.1012245,
  },
  {
    address:
      'Horley Town Council, 92 Albert Road, horley,,, undefined, united kingdom, RH6 7HZ',
    lat: 51.1751129,
    lng: -0.1655618,
  },
  {
    address:
      'Cosmos Community Centre, Abbey Walk, st. andrews, fife, united kingdom, KY16 9LB',
    lat: 56.3368604,
    lng: -2.7877517,
  },
  {
    address:
      'South Street Arts Centre, 21 South Street, reading,,, Berkshire, united kingdom, RG1 4QU',
    lat: 51.4523514,
    lng: -0.9662765,
  },
  {
    address:
      ' 1st Floor, 1C Woolwich New Road, london, london, united kingdom, SE 18 6EX',
    lat: 51.4909808,
    lng: 0.070008,
  },
  {
    address:
      'St Pauls Peel Community Hall, Manchester Road West, little hulton manchester, greater manchester, united kingdom, M38 9EG',
    lat: 53.5313287,
    lng: -2.4254438,
  },
  {
    address:
      ', Beside St. Mary Pry. School, ashford, kent, united kingdom, TN23 1ND',
    lat: 51.1516978,
    lng: 0.8648847,
  },
  {
    address:
      'Mill End Community Centre, Church Lane, rickmansworth rickmansworth, hertfordshire, united kingdom, WD3  8HD',
    lat: 51.6369122,
    lng: -0.4918429,
  },
  {
    address:
      'IWHC, 1 Irish Town Way, off Queens Road, manchester, greater manchester, united kingdom, M8 0RY',
    lat: 53.5005,
    lng: -2.2297321,
  },
  {
    address:
      '13, Smithfield Road, Aberdeen, aberdeen, aberdeenshire, united kingdom, AB24 5NR',
    lat: 57.170195,
    lng: -2.1291031,
  },
  {
    address:
      '6-8 Old Street, Ashton Town Centre, undefined, undefined, united kingdom, OL6 6LB',
    lat: 53.4886943,
    lng: -2.0908552,
  },
  {
    address:
      'Stamford Hill Library, Portland Avenue, london, london, united kingdom, N16 SSB',
    lat: 51.5704374,
    lng: -0.0724679,
  },
  {
    address:
      'Unit 1 Restwell House, Coldhams Road, cambridge, cambridgeshire, united kingdom, CB1  3EW',
    lat: 52.2106095,
    lng: 0.1498497,
  },
  {
    address:
      'THE TREADMILL (FIRST FLOOR), RAILWAY ROAD, sheerness, kent, united kingdom, ME12 1PU',
    lat: 51.439472,
    lng: 0.7572181,
  },
  {
    address:
      'Within St Andrews United Reformed Church, Montpelier Street, cheltenham, gloucestershire, united kingdom, GL50 1SX',
    lat: 51.8965416,
    lng: -2.0814923,
  },
  {
    address:
      'Cranfield University Chapel, Cranfield, buckingham bukingham, buckinghamshire, united kingdom, MK43 0AL',
    lat: 52.0744953,
    lng: -0.6275209,
  },
  {
    address:
      'The Pearson Center for the Young, 2 Nuart Road, nottingham, nottinghamshire, united kingdom, NG9 2NH',
    lat: 52.9283984,
    lng: -1.2179562,
  },
  {
    address:
      'WELLINGTON PARK HOTEL,, 21, MALONE ROAD, undefined, belfast,,, united kingdom, BT9 6RU',
    lat: 54.581501,
    lng: -5.938851,
  },
  {
    address:
      'Old Village Community Center, High Street, corby,,, undefined, united kingdom, NN17 1UX',
    lat: 52.4914456,
    lng: -0.6802002,
  },
  {
    address:
      'Froud Community Centre,  1, Toronto Avenue, london, london, united kingdom, E12 5JF',
    lat: 51.553825,
    lng: 0.0560041,
  },
  {
    address:
      'John Storer House, Wards End, loughborough, leicestershire, united kingdom, LE11 3HA',
    lat: 52.7685143,
    lng: -1.2086285,
  },
  {
    address:
      'Hazelwick School, South Hall, Three Bridges, crawley, west sussex, united kingdom, RH19 1SX',
    lat: 51.1253128,
    lng: -0.1642181,
  },
  {
    address:
      'High Street, Beside Nationwide Bank, sittingbourne, kent, united kingdom, ME10 4AJ',
    lat: 51.3399702,
    lng: 0.735558,
  },
  {
    address:
      '25 Edgehill Road, , leicester, leicestershire, united kingdom, LE4 9EA',
    lat: 52.6530465,
    lng: -1.0971689,
  },
  {
    address:
      'Ebenezer Baptist Church, Ashby Road, leicester, leicestershire, united kingdom, LE67 3LF',
    lat: 52.7254595,
    lng: -1.3765012,
  },
  {
    address: '487, Blackfen Road, sidcup, undefined, united kingdom, DA15 9NP',
    lat: 51.4483722,
    lng: 0.1178127,
  },
  {
    address:
      '25-26 Park Street, Hull, hull,  yorkshire, united kingdom, HU2 8RR.',
    lat: 53.7457061,
    lng: -0.3523026,
  },
  {
    address:
      'Avenue Business Centre, 17 New Road Avenue,  kent, chatham, united kingdom, ME4 6BA',
    lat: 51.3823204,
    lng: 0.5214177,
  },
  {
    address:
      'Holiday Inn Express, 106 University Street, belfast, antrim, united kingdom, BT7 1HP',
    lat: 54.5863977,
    lng: -5.9266862,
  },
  {
    address:
      'C/O St. Lukes C of E Centre, Great Colmore Street, birmingham, west midlands, united kingdom, B15 2AT',
    lat: 52.4712221,
    lng: -1.9035898,
  },
  {
    address:
      'Land of Wonders, Upper Spon Street, coventry, west midlands, united kingdom, CV1 3BL',
    lat: 52.4085566,
    lng: -1.5225688,
  },
  {
    address:
      'Christs Church, Normanton/Burton Road, derby, derbyshire, united kingdom, DE1  2GP',
    lat: 52.9211212,
    lng: -1.4884283,
  },
  {
    address:
      'Club Dudley Social Club Centre, Waterloo Street, dudley, west midlands staffordshire, united kingdom, DY1  2BN',
    lat: 52.5069813,
    lng: -2.0970189,
  },
  {
    address:
      'Carnegie Leisure Centre, 46 Pilmuir Street, dunfermline, fife, united kingdom, KY12 0QE',
    lat: 56.0740784,
    lng: -3.4605422,
  },
  {
    address:
      'Crown Wood College, Stationers Crown Woods College Academy, london, london, united kingdom, SE9  2PT',
    lat: 51.4521573,
    lng: 0.0769365,
  },
  {
    address:
      'Six Ways Baptist Church, Woodend Rd, birmingham, west midlands, united kingdom, B24 8AD',
    lat: 52.5214527,
    lng: -1.8432542,
  },
  {
    address:
      'Moat House Leisure & Neighbourhood Centre, Winston Avenue, coventry, west midlands, united kingdom, CV2  1EA',
    lat: 52.4352778,
    lng: -1.4636111,
  },
  {
    address:
      'Youth & Community Centre, 610 Kingstanding Road, Birmingham, birmingham, west midlands, united kingdom, B44 9SH',
    lat: 52.5472978,
    lng: -1.8853452,
  },
  {
    address:
      '75, Raleigh Street, nottingham, nottinghamshire, united kingdom, NG7 4DL',
    lat: 52.9595792,
    lng: -1.161525,
  },
  {
    address:
      '44-44A, Lozells Road, birmingham, west midlands, united kingdom, B19 2TH',
    lat: 52.5022432,
    lng: -1.9018388,
  },
  {
    address:
      'St Francis of Assisi, 78 Links Road, warwickshire, warwickshire, united kingdom, CV6 3DL',
    lat: 52.4312764,
    lng: -1.5194178,
  },
  {
    address:
      'St Albans Community Association, , smethwick, sandwell, united kingdom, B67 7NL',
    lat: 52.4983499,
    lng: -1.9785147,
  },
  {
    address:
      'St Albans Community Association, St Albans Road, sandwell, west midlands, united kingdom, B67 7NL',
    lat: 52.4983499,
    lng: -1.9785147,
  },
  {
    address:
      'Bournbrook & Selly Oak Social Club (Opposite Aldi Stores, Bristol Road), 13A Hubert Road, birmingham, west midlands, united kingdom, B29 6DX',
    lat: 52.4446075,
    lng: -1.935363,
  },
  {
    address:
      'Lyndon Methodist Church, Melton Avenue, ,birmingham,, ,birmingham,, united kingdom, B92 7QX',
    lat: 52.4512888,
    lng: -1.7903618,
  },
  {
    address:
      'Blue Bell Hill Community Centre, Denette Close, nottingham, nottinghamshire, united kingdom, NG3 2GL',
    lat: 52.9596268,
    lng: -1.1351911,
  },
  {
    address:
      'Vesta Tilley House Lowesmoor, Lowesmoor terrace, worcester, worcestershire, united kingdom, WR1 2RS',
    lat: 52.1952539,
    lng: -2.2161475,
  },
  {
    address:
      'Lutlley Community Centre, Brookwillow Road, birmingham, ,birmingham,, united kingdom, B63  1BU',
    lat: 52.4403067,
    lng: -2.0762515,
  },
  {
    address:
      'Forest Lane Lodge, Forest lane Park, undefined, undefined, united kingdom, E7 9DE',
    lat: 51.5484116,
    lng: 0.0169264,
  },
  {
    address:
      '304, Maryhill Road, Lanarkshire, glasgow , united kingdom, G20 7YE',
    lat: 55.8764146,
    lng: -4.2709233,
  },
  {
    address: '38-40 Parson’s mead, , croydon, surrey, united kingdom, CR0 3SL',
    lat: 51.3790434,
    lng: -0.1057198,
  },
  {
    address:
      'The Only Connect Theatre, 32  Cubitt Street, London, London, united kingdom, WC1X 0ND',
    lat: 51.5280418,
    lng: -0.1160626,
  },
  {
    address:
      'Braunstone Frith Recreation Centre, Sharmon Crescent,, leicester, leicestershire, united kingdom, LE3 6NW',
    lat: 52.6370958,
    lng: -1.1909397,
  },
  {
    address:
      'University of Wolverhampton, Chaplaincy Centre, wolverampton, west midlands, united kingdom, WV1 1AD',
    lat: 52.588177,
    lng: -2.1274393,
  },
  {
    address:
      'Novotel Hotel, Greenwich, london, london, united kingdom, SE10  5AT',
    lat: 51.4779234,
    lng: -0.0138196,
  },
  {
    address:
      'Coston Primary School, Oldfield Lane South, Greenford, Greenford, united kingdom, UB6 9JU',
    lat: 51.5338148,
    lng: -0.3505793,
  },
  {
    address:
      'Unit 48, Cable Street, wolverhampton,,, undefined, united kingdom, WV2 2HX',
    lat: 52.5761295,
    lng: -2.1100487,
  },
  {
    address:
      '77-79 Clarence Street, Portsmouth, portsmouth, hampshire, united kingdom, PO1 4AY',
    lat: 50.8038195,
    lng: -1.0896796,
  },
  {
    address:
      'Aspland and Marcon Community Hall, Marcon Place, undefined, undefined, united kingdom, E8 1LN',
    lat: 51.5486472,
    lng: -0.0586565,
  },
  {
    address:
      'DCC HOUSE, Alpine Street, Basford, nottingham, nottinghamshire, united kingdom, NG15 8HJ',
    lat: 52.9802981,
    lng: -1.1810374,
  },
  {
    address:
      'Rock Community Centre, 238 Anthony Road, birmingham, west midlands, united kingdom, B8 3AN',
    lat: 52.4877755,
    lng: -1.8455785,
  },
  {
    address:
      'Adams Road, Community Centre, london, london, united kingdom, N17 6HE',
    lat: 51.595546,
    lng: -0.084292,
  },
  {
    address:
      'Vue Cinema, The Brewery, Romford, undefined, united kingdom, RM1 1AU',
    lat: 51.5748919,
    lng: 0.1794831,
  },
  {
    address:
      'Bells Lane Community Centre, 194 Amesbury Circus, nottingham, nottinghamshire, united kingdom, NG8 6DD',
    lat: 52.9836422,
    lng: -1.2071009,
  },
  {
    address:
      'First Floor, 54 Tooting High Street, london, london, united kingdom, SW17 0RN',
    lat: 51.4280054,
    lng: -0.1684052,
  },
  {
    address:
      '2 LISTON STREET, off Bedford road by County road, liverpool, lancashire, united kingdom, L4 5RT',
    lat: 53.4461831,
    lng: -2.9687841,
  },
  {
    address:
      '2B GLOUCESTER ROAD, Tuebook, liverpool, lancashire, united kingdom, L6 4DS',
    lat: 53.4239107,
    lng: -2.9372044,
  },
  {
    address:
      '36/38 park road, town centre, peterborough, peterborough cambridgeshire, united kingdom, PE1 2TG',
    lat: 52.5760359,
    lng: -0.2422247,
  },
  {
    address:
      '505 Hertford road, Enfield, london,,, london, united kingdom, EN5 1HX',
    lat: 51.6676922,
    lng: -0.0412758,
  },
  {
    address:
      '25 Spring Grove Road, Hounslow, Middlesex, london, london, united kingdom, TW3 4BE',
    lat: 51.477116,
    lng: -0.3620961,
  },
  {
    address:
      'Haberdasher Askes, College Hall, london, london, united kingdom, SE14 5SF',
    lat: 51.467545,
    lng: -0.043017,
  },
  {
    address:
      'The Olive Place, Unit 1, Rochester, undefined, united kingdom, ME2 2JH',
    lat: 14.589638,
    lng: 121.0385801,
  },
  {
    address:
      'Winston Church Hall, Manor Farm Site,, london, london, united kingdom, ',
    lat: 51.5787764,
    lng: -0.4287386,
  },
  {
    address:
      '1st Floor, Cooperative Building, 200/202 Elm Park Avenue, hornchurch, essex, united kingdom, RM12 4SD',
    lat: 51.5509881,
    lng: 0.1994467,
  },
  {
    address:
      '41-42 Inverleith Gardens, Ferry Road, edinburgh, midlothian, united kingdom, EH3 5PR',
    lat: 55.9705364,
    lng: -3.2141031,
  },
  {
    address:
      'Laichmoray Hotel,  Maisondieu Road, elgin, moray, united kingdom, IV30 1QR',
    lat: 57.6440219,
    lng: -3.3083369,
  },
  {
    address:
      '2ND FLOOR, 48 CRANBROOK ROAD, ilford, greater london, united kingdom, IG1 4NF',
    lat: 51.5601272,
    lng: 0.0699564,
  },
  {
    address:
      'Westfield Community Centre, severn crescent slough, slough,,, undefined, united kingdom, SL3 8UX',
    lat: 51.4921657,
    lng: -0.5368321,
  },
  {
    address:
      'St Peter’s Avenue Kettering, , kettering,,, undefined, united kingdom, NN16 0EE',
    lat: 52.3972307,
    lng: -0.7225342,
  },
  {
    address:
      '163 – 169,  Donegall Road, belfast, antrim, united kingdom, BT12 5NA',
    lat: 54.5889478,
    lng: -5.9423897,
  },
  {
    address:
      'Eastlea Community School, Pretoria Road, london,,, london, united kingdom, E16 4NP',
    lat: 51.5227699,
    lng: 0.0098762,
  },
  {
    address:
      'WYMINGTON ROAD, SOUTH – END SCHOOLS, rushden rushden, northamptonshire, united kingdom, NN10 9JU',
    lat: 52.281648,
    lng: -0.598659,
  },
  {
    address:
      '19A Cheapside, Cheapside, wakefield, west yorkshire, united kingdom, WF1 2SD',
    lat: 53.6831359,
    lng: -1.5026291,
  },
  {
    address:
      'ROOM 103 RON COOKE HUB, HESLINGTON, UNIVERSITY OF YORK YO10 5GE, 75 North Parkway, york, undefined, united kingdom, YO10 5GE',
    lat: 53.9472652,
    lng: -1.029899,
  },
  {
    address:
      'Land of Mercy, 15-17 Walter Street, yorkshire, leeds , united kingdom, LS4 2BB',
    lat: 53.804616,
    lng: -1.578571,
  },
  {
    address:
      'The Clinton Centre, Seaford, Seadford, East Sussex, united kingdom, BN25 1NP',
    lat: 50.7732925,
    lng: 0.1019724,
  },
  {
    address:
      '731-735 London road, Thornton heath, surrey,,, undefined, united kingdom, CR7 6AU',
    lat: 51.3933386,
    lng: -0.1144848,
  },
  {
    address:
      'Hermitage Primary School, Uxbridge, Uxbridge, undefined, united kingdom, UB8 1RB',
    lat: 51.5495199,
    lng: -0.4740752,
  },
  {
    address:
      '108 Brookehowse Road, Bellingham Catford, london, london, united kingdom, SE6 3TW',
    lat: 51.4311612,
    lng: -0.0218872,
  },
  {
    address:
      '21/22 Praque Place (Off Lyham Road), Brixton Hill, london, london, united kingdom, SW2 5ED',
    lat: 51.4555511,
    lng: -0.1271571,
  },
  {
    address:
      'Crayford Community Centre, 176 Townhall Square, kent, Crayford, united kingdom, DA1 4ER',
    lat: 51.4499816,
    lng: 0.1798975,
  },
  {
    address:
      'Steepleview Memorial Hall, Willowfeilds , Steepleview,Laindon, basildon, essex, united kingdom, SS15 4EQ',
    lat: 51.586298,
    lng: 0.430184,
  },
  {
    address:
      'BRANDLES SCHOOL, WESTON WAY, baldock, hertfordshire, united kingdom, SG7 6EY',
    lat: 51.9853967,
    lng: -0.1922793,
  },
  {
    address:
      '1st Floor – Old Baths, 39 Wells Way, Off Albany Road, Camberwell, london, london, united kingdom, SE5 0PX',
    lat: 51.482395,
    lng: -0.085801,
  },
  {
    address:
      'Belmont Village hall, Parker road, grays, essex, united kingdom, RM17 5YW',
    lat: 51.4783564,
    lng: 0.3120279,
  },
  {
    address:
      'Ludwick Family Club, Hall Grove, undefined, undefined, united kingdom, AL7 4PH',
    lat: 51.7889296,
    lng: -0.1786445,
  },
  {
    address:
      'Irish Centre, 96-104 Chatham Street, reading,,, undefined, united kingdom, RG1 7HT',
    lat: 51.4565571,
    lng: -0.9813106,
  },
  {
    address:
      'London Marriott Hotel, 147 Cromwell Road, london, london, united kingdom, SW5 0TH',
    lat: 51.4943667,
    lng: -0.1898977,
  },
  {
    address:
      '517, Paisley Road West, glasgow, scotland, united kingdom, G51 1RW',
    lat: 55.8500336,
    lng: -4.3037641,
  },
  {
    address:
      'Beckenham Public Hall, 4 Bromley Road, london, london, united kingdom, BR3 5JE',
    lat: 51.4085977,
    lng: -0.0245028,
  },
  {
    address: '256, Main Street, camelon, falkirk, united kingdom, FK1 4DY',
    lat: 56.0030221,
    lng: -3.8119245,
  },
  {
    address: ', , undefined, undefined, united kingdom, ',
    lat: null,
    lng: null,
  },
  {
    address:
      'Meeting Point House, Southwater, telford, shropshire, united kingdom, TF2 4HS',
    lat: 52.6741075,
    lng: -2.4471613,
  },
  {
    address:
      '19, Gomer Street, wolverhampton, Willenhall, united kingdom, WV13 2NS',
    lat: 52.584853,
    lng: -2.0579545,
  },
  {
    address:
      'St John’s Clouster, St John Square, wolverampton, west midlands, united kingdom, WV2 4AT',
    lat: 52.5816497,
    lng: -2.1271412,
  },
  {
    address:
      'Bernie Grant Art Centre, Town Hall Approach, london, london, united kingdom, N15 4RX',
    lat: 51.5875933,
    lng: -0.0724062,
  },
  {
    address:
      'Rear unit of 85-91, East Street, braintree, essex, united kingdom, CM7 3LL',
    lat: 51.879878,
    lng: 0.5623054,
  },
  {
    address:
      'Queens Hall Chipping Hall, , essex, essex, united kingdom, CM7 2BX',
    lat: 51.9456614,
    lng: 0.6410061,
  },
  {
    address:
      'Elmgreen School, Elmcourt Road, london, london, united kingdom, SE27 9BZ',
    lat: 51.4386244,
    lng: -0.10265,
  },
  {
    address:
      '15 Howardsgate, Welwyn Garden City, welwyn garden city, hertfordshire, united kingdom, AL8 6AL',
    lat: 51.8021179,
    lng: -0.2073524,
  },
  {
    address:
      'Ronac house, Selinas lane, Dagenham,,, undefined, united kingdom, RM8 1QH',
    lat: 51.5676308,
    lng: 0.1416422,
  },
  {
    address:
      'Heathfield Community Centre, West Sanquhar Road, Ayrshire, undefined, united kingdom, KA8 9HP',
    lat: 55.4732058,
    lng: -4.6164507,
  },
  {
    address:
      'William Ford Village Infant School,, Ford Road, dagenham, essex, united kingdom, RM10 9JS',
    lat: 51.5386121,
    lng: 0.1527821,
  },
  {
    address:
      '31 Palmerston Road, Aberdeen, aberdeen, aberdeenshire, united kingdom, AB11 5QP',
    lat: 57.1421694,
    lng: -2.0933036,
  },
  {
    address:
      'JIC Link Up Building,, Albert Street, fraserburgh, aberdeenshire, united kingdom, AB43 9JL',
    lat: 57.6935413,
    lng: -2.0136568,
  },
  {
    address:
      '205-217, Drumry Road East, ,glasgow,, undefined, united kingdom, G15 8NS',
    lat: 55.9081102,
    lng: -4.3776006,
  },
  {
    address:
      'Community Hall,, Garioch Sports Centre, inverurie, aberdeenshire, united kingdom, AB51 4GY',
    lat: 57.2834774,
    lng: -2.3788062,
  },
  {
    address:
      'Christiandom House, 383 Barking Road, london, london, united kingdom, E13 3AL',
    lat: 51.5227847,
    lng: 0.0233357,
  },
  {
    address: '254, Katherine Road, london, london, united kingdom, E7 8PM',
    lat: 51.539467,
    lng: 0.0405003,
  },
  {
    address:
      '395 High Street, North Manor Park, london, london, united kingdom, E12 6PG',
    lat: 51.5455166,
    lng: 0.0489689,
  },
  {
    address:
      'The Eight Scout Letchworth Group, Sparhawke,, letchworth, hertfordshire, united kingdom, SG6 4PY',
    lat: 51.9955568,
    lng: -0.2236696,
  },
  {
    address:
      'Eastwood View (Springwell Gardens), Rotherham,, rotherham, south yorkshire, united kingdom, S65 1NH',
    lat: 53.4391117,
    lng: -1.329452,
  },
  {
    address:
      'Freedom Connections Peterborough, Hampton Vale, peterborough, undefined, united kingdom, PE7 8NJ',
    lat: 52.5326373,
    lng: -0.2757848,
  },
  {
    address:
      'Tree Estate Communuty Centre, Cedar Road, dartford, kent, united kingdom, DA1 2RS',
    lat: 51.4357935,
    lng: 0.2107992,
  },
  {
    address:
      '21, Dundas Street, undefined, undefined, united kingdom, EH19 3AT',
    lat: 55.8743753,
    lng: -3.1048713,
  },
  {
    address:
      '2 Barmeston Road, Catford, london, london, united kingdom, SE6 3BH',
    lat: 51.4387595,
    lng: -0.0200084,
  },
  {
    address:
      'DoubleTree Hotel, Docklands Riverside, london, london, united kingdom, SE16 5HW',
    lat: 51.5042724,
    lng: -0.0340215,
  },
  {
    address:
      'Fruitful land Centre, Civic Square, tilbury, essex, united kingdom, RM18 8ED',
    lat: 51.4619185,
    lng: 0.3659506,
  },
  {
    address:
      ', Tilbury Civic Sq., essex, canvey island, united kingdom, RM18 8AD',
    lat: 51.4620937,
    lng: 0.3653266,
  },
  {
    address:
      '37 Eastern Esplanade, ,  canvey island, essex, united kingdom, SS8 7DN',
    lat: 51.5128265,
    lng: 0.5977091,
  },
  {
    address:
      '14, Woodstreet, manchester, west midlands, united kingdom, M24 5TF',
    lat: 53.5503064,
    lng: -2.1993191,
  },
  {
    address:
      'Christs Church Tonbridge, Tonbridge, tonbridge, kent, united kingdom, TN9  1SG',
    lat: 51.192697,
    lng: 0.2725634,
  },
  {
    address:
      'East Tilbury Community Sports Hall, East Tilbury Junior School, east tilbury, essex, united kingdom, RM18  8SB',
    lat: 51.4792117,
    lng: 0.42103,
  },
  {
    address:
      'St. Dunstans Church, Earle Road, liverpool, merseyside lancashire, united kingdom, L7 6HD',
    lat: 53.3988337,
    lng: -2.9436829,
  },
  {
    address:
      'Unit 1 Clydesmuir Industrial Estate, Clydesmuir Road, cardiff, undefined, united kingdom, CF24 2QS',
    lat: 51.4909428,
    lng: -3.1439149,
  },
  {
    address:
      'Rear of Malden Centre, , undefined, undefined, united kingdom, KT3 4TA',
    lat: 51.4002581,
    lng: -0.2526632,
  },
  {
    address:
      'Oxford House, Derbyshire Street,, london, undefined, united kingdom, E2 6HG',
    lat: 51.5264639,
    lng: -0.0614951,
  },
  {
    address:
      '129A Stafford Road, Wallington, sutton, surrey, united kingdom, SM6 9BN',
    lat: 51.3590775,
    lng: -0.1409361,
  },
  {
    address:
      '97, East Barnet Road, new barnet, hertfordshire hertfordshire, united kingdom, EN4 8RF',
    lat: 51.6486296,
    lng: -0.1688257,
  },
  {
    address:
      'West Denton Community Centre, hill Head Road, newcastle, tyne and wear, united kingdom, NE5  1DN',
    lat: 54.9915736,
    lng: -1.709585,
  },
  {
    address:
      'Woosehill Community Centre, (Behind Morrison Superstore), wokingham, berkshire, united kingdom, RG41 2TS',
    lat: 51.4144717,
    lng: -0.8544589,
  },
  {
    address: '140 PINHOE ROAD, , exeter, devon, united kingdom, EX4 7HJ',
    lat: 50.730835,
    lng: -3.5079184,
  },
  {
    address:
      '21-23 Stokes Croft, Bristol, bristol, gloucestershire, united kingdom, BS1 3PY',
    lat: 51.4614344,
    lng: -2.5910234,
  },
  {
    address:
      'HUNGERFORD COMMUNITY CENTRE, HUNGERFORD ROAD, bath, gloucestershire, united kingdom, BS4 5EX',
    lat: 51.426476,
    lng: -2.543603,
  },
  {
    address:
      'Eggington Village Hall, Eggington, leighton buzzard, bedfordshire, united kingdom, LU7 9QL',
    lat: 51.9171496,
    lng: -0.6090938,
  },
  {
    address:
      '227 – 229, Gascogin Road, london, undefined, united kingdom, IG11 7LN',
    lat: 51.5291466,
    lng: 0.0837034,
  },
  {
    address:
      'Marlborough Primary School, Draycott Avenue, undefined, undefined, united kingdom, SW3 3AP',
    lat: 51.4931602,
    lng: -0.166124,
  },
  {
    address:
      'St James Hall,, Cannon Street, avon, gloucestershire, united kingdom, BS1 3LP',
    lat: 51.4591422,
    lng: -2.5923573,
  },
  {
    address:
      'Monmouth Community hall, Yeovil, undefined, undefined, united kingdom, BA21 5NP',
    lat: 50.9521126,
    lng: -2.6171068,
  },
  {
    address:
      'The Youth Hall, Caterham High School, Clayhall, london, united kingdom, IG5 0QW',
    lat: 51.5936371,
    lng: 0.0623009,
  },
  {
    address:
      '23 Village Way East, Rainers lane, Harrow, undefined, united kingdom, HA2 7LX',
    lat: 51.5773301,
    lng: -0.3692966,
  },
  {
    address:
      'Lutterworth College, Bitteswell Road, lutterworth, leicestershire, united kingdom, LE17 4EW',
    lat: 52.460128,
    lng: -1.207135,
  },
  {
    address:
      'Woollard Centre, Roding View, buckhurst hill, essex, united kingdom, IG9 6AD',
    lat: 51.629383,
    lng: 0.0485636,
  },
  {
    address:
      'Suit 110: Jury’s Inn Glasgow, 80 Jamaica Street, glasgow,  lanarkshire, united kingdom, G1 4QG',
    lat: 55.8565601,
    lng: -4.2578669,
  },
  {
    address:
      'Number not going through, , undefined, undefined, united kingdom, ',
    lat: null,
    lng: null,
  },
  {
    address:
      '61, Kellner Road, Off Nathan Way, london, london, united kingdom, SE28 0AX',
    lat: 51.4952217,
    lng: 0.1004641,
  },
  {
    address:
      'Jackmans Community Centre, Jackmans Estate, letchworth garden city letchworth, hertfordshire, united kingdom, SG6 2NL',
    lat: 51.9702176,
    lng: -0.2111365,
  },
  {
    address:
      'Forest Road Meeting Hall,  121 Forest Road, colchester, undefined, united kingdom, CO4 3XG',
    lat: 51.8865423,
    lng: 0.9370787,
  },
  {
    address:
      '342 Oldham Road,, Miles Platting, manchester, greater manchester, united kingdom, M40 7NS',
    lat: 53.4902091,
    lng: -2.220167,
  },
  {
    address:
      '170 sicey Avenue. S5 0RN, , sheffield, undefined, united kingdom, S5 0RN',
    lat: 53.426272,
    lng: -1.4475261,
  },
  {
    address:
      'Oakfield Community Centre, 245 Brettell lane, brierley hill,,, undefined, united kingdom, DY5 3LT',
    lat: 52.4732431,
    lng: -2.1435046,
  },
  {
    address:
      'Eynsford Village Hall, Eynsford High Street, dartford,,, undefined, united kingdom, DA4 0AA',
    lat: 51.369711,
    lng: 0.2130787,
  },
  {
    address:
      '89, New Square, chesterfield, derbyshire, united kingdom, S40 1PH',
    lat: 53.2358994,
    lng: -1.4311196,
  },
  {
    address:
      '171 Rushmore Road, off Chatsworth Road, london, london, united kingdom, E5 0HA',
    lat: 51.5550905,
    lng: -0.042791,
  },
  {
    address:
      '66 Romanby Road, Northallerton, undefined, undefined, united kingdom, DL7 8NQ',
    lat: 54.3375326,
    lng: -1.4378178,
  },
  {
    address:
      'Ballymena North Business and Recreation Centre, 120 Cushendall Road, ballymena, county antrim, united kingdom, BT43 6HB',
    lat: 54.878925,
    lng: -6.270163,
  },
  {
    address:
      'Brighton Aldridge Community Academy, Lewes road, brighton, east sussex, united kingdom, BN1 9PW',
    lat: 50.8582682,
    lng: -0.0918826,
  },
  {
    address:
      '2 Kingsway Highway, plumstead, london, london, united kingdom, SE18  2NL',
    lat: 51.4802498,
    lng: 0.0909435,
  },
  {
    address:
      'John Bunyan Baptish Church, Basement Hall, kingston upon, undefined, united kingdom, KT2 6RN',
    lat: 51.4118431,
    lng: -0.2966912,
  },
  {
    address:
      'St Thomas Church,  68 Langley Rd, watford, hertfordshire, united kingdom, WD17 4PN',
    lat: 51.6649167,
    lng: -0.4043606,
  },
  {
    address:
      'Temple Hill Baptist Church, St. Edmunds Road, dartford,,, undefined, united kingdom, DA1 5ND',
    lat: 51.453197,
    lng: 0.228781,
  },
  {
    address:
      'Unit D, Croydon House Business Centre, london, london, united kingdom, CR0  3EX',
    lat: 51.3884734,
    lng: -0.1216229,
  },
  {
    address:
      'Kaimhill School, Pitmedden Terrace, aberdeen, aberdeenshire, united kingdom, AB10 7HR',
    lat: 57.1230474,
    lng: -2.1297661,
  },
  {
    address:
      'CAPITAL HOUSE 2nd Floor, 43-47 rushey green, london, london, united kingdom, SE6 4AS',
    lat: 51.4485154,
    lng: -0.0169545,
  },
  {
    address:
      'Hassenbrook Academy, hassenbrook Road, standford,,, undefined, united kingdom, SS17 0NS',
    lat: 51.5171535,
    lng: 0.4356239,
  },
  {
    address:
      'Deptford Lounge Library, Giffin Street, Deptford, london,,, london,,, united kingdom, SE13 7JA',
    lat: 51.4777708,
    lng: -0.0246898,
  },
  {
    address:
      'Salvation Army Welling, 124 Welling High Street, welling, kent, united kingdom, DA16  1TJ',
    lat: 51.4622509,
    lng: 0.1084849,
  },
  {
    address:
      'University of Sunderland (Canary Wharf Campus), 197 Marsh Wall, london, london,,, united kingdom, E14 9SG',
    lat: 51.5001645,
    lng: -0.0142346,
  },
  {
    address:
      'Young People’s Service, Brook Street, preston, lancashire, united kingdom, PR1 7NB',
    lat: 53.757992,
    lng: -2.702419,
  },
  {
    address:
      'URC Christian Centre, Saunders Rise Park, Lewes Road, brighton, east sussex, united kingdom, BN2 4EU',
    lat: 50.839788,
    lng: -0.1229774,
  },
  {
    address:
      'Colombo House, Colombo Street, derby,,, undefined, united kingdom, DE23 8LW',
    lat: 52.9061369,
    lng: -1.4668352,
  },
  {
    address:
      'Lea Valley High School, Bullsmoor Lane, enfield, middlesex, united kingdom, EN3 6TW',
    lat: 51.6803828,
    lng: -0.0421093,
  },
  {
    address:
      'RCCG Green Pastures House, Jarrom Street , Leicester, 101 Jarrom Street, leicester,,, undefined, united kingdom, LE2 7DX',
    lat: 52.6270304,
    lng: -1.1400809,
  },
  {
    address:
      'Hadleigh Junior School, Church Road, hadleigh,,, undefined, united kingdom, SS7 2DQ',
    lat: 51.5533369,
    lng: 0.6133886,
  },
  {
    address:
      'Abbey Community Centre, Cowbridge lane, undefined, undefined, united kingdom, IG11 8LF',
    lat: 51.5401238,
    lng: 0.0717799,
  },
  {
    address:
      '440 Cathall Road, Leytonstone, london,,, undefined, united kingdom, E11 4LA',
    lat: 51.5599334,
    lng: 0.0037991,
  },
  {
    address:
      'St Roberts Center,, Roberts Street, harrogate, north yorkshire, united kingdom, YO7 1RN',
    lat: 53.9891121,
    lng: -1.5369966,
  },
  {
    address:
      'Sandon Road Baptist Church, 317 Sandon Road, stafford, staffordshire, united kingdom, ST16 3HW',
    lat: 52.823357,
    lng: -2.107731,
  },
  {
    address:
      '231 Plashet Road., Plaistow, Newham, London, united kingdom, E13 0QU',
    lat: 51.5376969,
    lng: 0.0328524,
  },
  {
    address:
      '35-37 Albert Street (Rugby), , Rugby, Warwichshire, united kingdom, CV21 2SG',
    lat: 52.3744202,
    lng: -1.2595049,
  },
  {
    address:
      'Units 15 / 17, Oakham Court Avehnam Lane, preston, lancashire, united kingdom, PR1 3XP',
    lat: 53.7575577,
    lng: -2.6942274,
  },
  {
    address:
      'Eastfield Primary School, Eastfield Road, Enfield, london, united kingdom, EN3 5UX',
    lat: 51.6658848,
    lng: -0.0391745,
  },
  {
    address:
      'Park View Academy, West Green Road, london, london, united kingdom, N15 3RB',
    lat: 51.5865434,
    lng: -0.0887302,
  },
  {
    address:
      'Church at Crosfield street, Warrington, warrington, cheshire, united kingdom, WA1 1UD',
    lat: 53.391374,
    lng: -2.602354,
  },
  {
    address:
      'Hitchin Town Hall, 33 Brand Street, hitchin, hertfordshire, united kingdom, SG5 1JE',
    lat: 51.9494987,
    lng: -0.2794656,
  },
  {
    address:
      '58-60, Windmill Road, undefined, undefined, united kingdom, CR0 2XP',
    lat: 51.384955,
    lng: -0.1004877,
  },
  {
    address:
      'St Margaret Church Hall, Lime Avenue, leigh on sea, essex, united kingdom, SS9 3PA',
    lat: 51.5484426,
    lng: 0.6437883,
  },
  {
    address:
      'Great Linford Primary School, Saint Leger Drive, keynes, buckinghamshire, united kingdom, MK14 5BL',
    lat: 52.0682608,
    lng: -0.7583365,
  },
  {
    address:
      'Lunt Community Centre,, Lunt Road, bilston wolverampton, west midlands, united kingdom, WV14 7HF',
    lat: 52.5689225,
    lng: -2.0607512,
  },
  {
    address:
      'Hilton Dartford Bridge Hotel, Masthead Close, dartford, kent, united kingdom, DA2 6QF',
    lat: 51.4528958,
    lng: 0.2453883,
  },
  {
    address:
      '26 Lyng Lane, , west bromwich, west midlands, united kingdom, B70 7RP',
    lat: 52.5157795,
    lng: -1.9959228,
  },
  {
    address:
      'Bromley and Downham Youth Club, 41 Valeswood Road, bromley, greater london, united kingdom, BR1 4RD',
    lat: 51.4218674,
    lng: 0.0077883,
  },
  {
    address:
      'Hilton, Elton Way, watford,,, undefined, united kingdom, WD25 8HA',
    lat: 51.66515,
    lng: -0.360714,
  },
  {
    address:
      'Goldsmiths Community Centre, Castillon Road, Catford, london, united kingdom, SE6 1QD',
    lat: 51.4348966,
    lng: 0.0023186,
  },
  {
    address:
      'Ashingdon & East, Hawkwell Memorial Hall, rochford, undefined, united kingdom, SS4 3HF',
    lat: 51.607396,
    lng: 0.6919525,
  },
  {
    address:
      'Unit 20 Bellingham Trading Estate, Franthorne Way, Catford, london, united kingdom, SE6 3BX',
    lat: 51.4334585,
    lng: -0.0193294,
  },
  {
    address:
      '210a Jamaica Road, Rotherhithe, ROTHERHITE, london, united kingdom, SE16 4RT',
    lat: 51.498495,
    lng: -0.0604191,
  },
  {
    address:
      'Kenmont Primary School Hall, Valliere Road, london, london, united kingdom, NW10 6AL',
    lat: 51.531665,
    lng: -0.235452,
  },
  {
    address:
      'Langham Hall, Langham Crescent, billericay, undefined, united kingdom, CM12 9RD',
    lat: 51.615112,
    lng: 0.4259744,
  },
  {
    address:
      '34 Bow Street, Off Yorkshire Street, oldham manchester, greater manchester, united kingdom, OL1 1SJ',
    lat: 53.5416984,
    lng: -2.1076992,
  },
  {
    address:
      'HIS House, 33 Hilton Street, salford manchester, lancashire, united kingdom, M7  2DH',
    lat: 53.5036269,
    lng: -2.2603268,
  },
  {
    address:
      'Vue Cinema, Lakeside, west thurrock,,, undefined, united kingdom, RM20 2ZW',
    lat: 51.4879335,
    lng: 0.280727,
  },
  {
    address:
      'RCCG His Royal Majesty House, Main Road, Kent, undefined, united kingdom, BR5 3HQ',
    lat: 51.4018685,
    lng: 0.1171518,
  },
  {
    address:
      'St John’s Church Hall, Church Road, undefined, undefined, united kingdom, DA14 4AP',
    lat: 51.424059,
    lng: 0.104902,
  },
  {
    address:
      'John White community Centre, Grange Avenue, binley, west midlands, united kingdom, CV3 2ED',
    lat: 52.3907,
    lng: -1.4461,
  },
  {
    address:
      'Waterloo Road, Methodist Church, blackpool, lancashire, united kingdom, FY4 4BJ',
    lat: 53.8006804,
    lng: -3.032694,
  },
  {
    address:
      'St Stephen Community Hall,, Tenterden Drive, canterbury, kent, united kingdom, CT2 7BN',
    lat: 51.2960652,
    lng: 1.0831197,
  },
  {
    address:
      'Danesholme Community Centre, 4 Danesholme Centre, corby, northamptonshire, united kingdom, NN18 9EJ',
    lat: 52.470744,
    lng: -0.733835,
  },
  {
    address:
      '8 Albert Street, Hillfields, coventry, west midlands, united kingdom, CV1  5HA',
    lat: 52.4138521,
    lng: -1.4982209,
  },
  {
    address: ', , undefined, undefined, united kingdom, ',
    lat: null,
    lng: null,
  },
  {
    address:
      'Gateway Resource Centre, Mill Road, northampton, northamptonshire, united kingdom, NN2  6AX',
    lat: 52.2450878,
    lng: -0.9010907,
  },
  {
    address:
      'The Reay Primary School,, Caldwell Street, london, london, united kingdom, SW9 0EN',
    lat: 51.4776095,
    lng: -0.1148625,
  },
  {
    address:
      'The SYDNI Centre,  Cottage Square, Leamington Spa, undefined, united kingdom, CV31 1PT',
    lat: 52.2813144,
    lng: -1.5143049,
  },
  {
    address:
      '1st Floor, Christ Temple of Worship, 20 Shannon Street, leeds,,, undefined, united kingdom, LS9 8SS',
    lat: 53.7972222,
    lng: -1.5241667,
  },
  {
    address:
      '685-689 Old Kent Road, London, london, london, united kingdom, SE15 1JS',
    lat: 51.4820998,
    lng: -0.0617358,
  },
  {
    address:
      'Harben House, Tickford Street, newport pagnell, milton keynes, united kingdom, MK16 9EY',
    lat: 52.0830495,
    lng: -0.7143834,
  },
  {
    address:
      '19 Abington Square, , northampton, northamptonshire, united kingdom, NN1 4AE',
    lat: 52.2402425,
    lng: -0.8883284,
  },
  {
    address:
      'The Church Hall, Chatham Street, norwich, norfolk, united kingdom, NR3  3DN',
    lat: 52.6357365,
    lng: 1.2911105,
  },
  {
    address: 'Chess Centre, 460, nuneaton, undefined, united kingdom, CV10 9DN',
    lat: 52.5313202,
    lng: -1.5064755,
  },
  {
    address:
      'Peppermint Centre, Franklin Way, croydon, surrey, united kingdom, CR0  4YD',
    lat: 51.3827711,
    lng: -0.12811,
  },
  {
    address:
      'Drama Studio, Myton School, warwick, warwick, united kingdom, CV32 6PJ',
    lat: 52.279955,
    lng: -1.56557,
  },
  {
    address:
      'The Tithe Barn, The Tithe barn road , behind Morrisson store, wellingborough, northamptonshire, united kingdom, NN8 1 DH',
    lat: 52.3004665,
    lng: -0.6942416,
  },
  {
    address:
      'The Lightbox, Chobham Road, woking, surrey, united kingdom, GU21 4AA',
    lat: 51.321646,
    lng: -0.558806,
  },
  {
    address:
      'William Torbitt Primary School, East Avenue, illford, essex, united kingdom, IG2 7SS',
    lat: 51.5785616,
    lng: 0.0989966,
  },
  {
    address:
      'Sobell Centre, Hornsey Road, undefined, london, united kingdom, N7 7NY',
    lat: 51.5590045,
    lng: -0.1123255,
  },
  {
    address:
      'St. Peters Church, Earle Street, crewe, cheshire, united kingdom, CW1 2AG',
    lat: 53.0982409,
    lng: -2.4332067,
  },
  {
    address:
      'Clements Hall, Nunthorpe Road, york, north yorkshire, united kingdom, YO23 1BW',
    lat: 53.9528347,
    lng: -1.0892898,
  },
  {
    address:
      '958-960, Stockport Road, Manchester, manchester, lancashire, united kingdom, M19 3NN',
    lat: 53.4435667,
    lng: -2.1917816,
  },
  {
    address:
      'AGE CONCERN BUILDING, 17 COTTAGE PLACE, chelmsford, essex, united kingdom, CM1 1NL',
    lat: 51.736,
    lng: 0.471706,
  },
  {
    address:
      'NORTH ROAD COMMUNITY CENTRE, 230 BURNT OAK BROADWAY, undefined, london, united kingdom, HA8 0AP',
    lat: 51.6044097,
    lng: -0.2714839,
  },
  {
    address:
      'UNIT 4, CROSS STREET INDUSTRIAL ESTATE, CROSS STREET-NORTH,, wolverhampton,,, undefined, united kingdom, WV1 1PP',
    lat: 52.5942424,
    lng: -2.1244191,
  },
  {
    address:
      'Buttermere Road, St Pauls Cray Primary School, orpington, kent, united kingdom, BR5  3WD',
    lat: 51.3969859,
    lng: 0.1213853,
  },
  {
    address:
      'The Club Pavilion, Blackheath Hockey & Catford and Cyphers Cricket Club, Catford, london, united kingdom, SE6 4DH',
    lat: 51.4354349,
    lng: -0.0305457,
  },
  {
    address:
      'The Beacon, 104 New Road, dagenham, essex, united kingdom, RM9 6PE',
    lat: 51.5288789,
    lng: 0.1549745,
  },
  {
    address:
      'Alice Croft House, Cornfield Lane, eastbourne, east sussex, united kingdom, BN21 4NE',
    lat: 50.7661408,
    lng: 0.2845263,
  },
  {
    address:
      'St. Mary’s Church Hall, 9-11 Hatton Road, Bedfont, london, united kingdom, TW14 8JR',
    lat: 51.451702,
    lng: -0.4403422,
  },
  {
    address:
      'Church on wheels, Church on wheels, undefined, undefined, united kingdom, ',
    lat: 36.9487893,
    lng: -120.0886785,
  },
  {
    address:
      'Northampton High School, Newport Pagnell Road, northampton, northamptonshire, united kingdom, NN4 6UU',
    lat: 52.2096247,
    lng: -0.8868818,
  },
  {
    address:
      'Asian Cultural Centre, Manzil Way, oxford, oxfordshire, united kingdom, OX4 1GH',
    lat: 51.747879,
    lng: -1.230028,
  },
  {
    address:
      'Bonnydowns Church Hall, Darwell Close, london, undefined, united kingdom, E6 5BT',
    lat: 51.5287707,
    lng: 0.061492,
  },
  {
    address:
      'Tranent Town Hall, Church Street, tranent,,, undefined, united kingdom, EH33 1AD',
    lat: 55.9459396,
    lng: -2.9543982,
  },
  {
    address:
      'The Mallard, Uttoxeter New Road, derby, derbyshire, united kingdom, DE22 3HN',
    lat: 52.9127887,
    lng: -1.5137236,
  },
  {
    address:
      'Toland Square Clubroom, South Eastwood Est, london, london, united kingdom, SW15 5PA',
    lat: 51.4565721,
    lng: -0.2414065,
  },
  {
    address:
      'Toland Square Clubroom, South Eastwood Est, london, london, united kingdom, SW15 5PA',
    lat: 51.4565721,
    lng: -0.2414065,
  },
  {
    address:
      '148, Clayton Crown Hotel, london, london, united kingdom, NW2 3ED',
    lat: 51.5562286,
    lng: -0.2144185,
  },
  {
    address:
      'Ashmole Estate, Tenants Hall, london, london, united kingdom, SW8  1QB',
    lat: 51.4827946,
    lng: -0.1175958,
  },
  {
    address:
      'RCCG HOUSE OF JOY FOR ALL NATIONS, 11/13 MASONS AVENUE, london, undefined, united kingdom, HA3 5AH',
    lat: 51.5928722,
    lng: -0.3343146,
  },
  {
    address:
      'Manchester Academy,  Moss Lane East, manchester, greater manchester, united kingdom, M14 4PX',
    lat: 53.4587193,
    lng: -2.232715,
  },
  {
    address:
      'Kedermister Park  Hall, Reddington Drive, langley slough, berkshire, united kingdom, SL3 7QQ',
    lat: 51.4998877,
    lng: -0.5578896,
  },
  {
    address:
      '79 William Barefoot, Eltham, london, undefined, united kingdom, SE9 3JD',
    lat: 51.4312828,
    lng: 0.0582914,
  },
  {
    address:
      'Aylesford Village Community Centre, 25 Forstal Road, aylesford, kent, united kingdom, ME20 7AU',
    lat: 51.3037473,
    lng: 0.4834629,
  },
  {
    address:
      'XCEL Leisure Centre, Mitchell Avenue (Off Charter Avenue), , coventry, west midlands, united kingdom, CV4 8DY',
    lat: 52.3909787,
    lng: -1.5711629,
  },
  {
    address:
      'Arlesey Community Centre, High Street, arlesey, hertfordshire, united kingdom, SG15 6SN',
    lat: 52.0119335,
    lng: -0.2619371,
  },
  {
    address:
      'Aylesbury Vale Multicultural Centre,  Friarscroft Way, ayelsbury, buckinghamshire, united kingdom, HP20 2TE',
    lat: 51.8150505,
    lng: -0.8198235,
  },
  {
    address:
      'Unit 8 – 10, Alfall Road, coventry,,, undefined, united kingdom, CV2 3GA',
    lat: 52.4190131,
    lng: -1.4784359,
  },
  {
    address:
      'LIBERAL CLUB, QUEEN VICTORIA ROAD, high wycombe, buckinghamshire, united kingdom, HP 11 IBG',
    lat: 51.6274067,
    lng: -0.750236,
  },
  {
    address:
      'Unit 10, Lyndean Industrial Estate, 139 Felixstowe Road, london, london, united kingdom, SE2 9SG',
    lat: 51.492097,
    lng: 0.1184426,
  },
  {
    address:
      'c/o Dominion Arts Education Centre,  112 The Green, london, undefined, united kingdom, UB2 4BQ',
    lat: 51.5025009,
    lng: -0.3816701,
  },
  {
    address:
      'Barnsley road, Off Hagley road, birmingham, west-midlands, united kingdom, B178ED',
    lat: 52.4743477,
    lng: -1.9657203,
  },
  {
    address:
      'House of Praise Camberwell, 254-270 Camberwell Rd, london, undefined, united kingdom, SE5 0DP',
    lat: 51.4763975,
    lng: -0.0941056,
  },
  {
    address:
      ' 145 Kingsway East, Pitkerro Drive, dundee, angus, united kingdom, DD4 8AA',
    lat: 56.479557,
    lng: -2.94438,
  },
  {
    address: '1, Passey Place, london, undefined, united kingdom, SE9 5DA',
    lat: 51.4503863,
    lng: 0.0543556,
  },
  {
    address:
      'Former Mecca Bingo, Quarry Hill, grays,,, undefined, united kingdom, RM17 5BT',
    lat: 51.4787703,
    lng: 0.3219295,
  },
  {
    address:
      'OneSpace Youth and Community Centre, Kidbrooke Park Road, london, undefined, united kingdom, SE28 0JP',
    lat: 51.459282,
    lng: 0.027026,
  },
  {
    address:
      '251 Windsor street., Junction Of Great Lister, birmingham, undefined, united kingdom, B7 4NG',
    lat: 52.489645,
    lng: -1.8825518,
  },
  {
    address:
      '61 st. francis way, St. Francis Way, chadwell st. mary, grays,,, undefined, united kingdom, RM16 4RB',
    lat: 51.4874866,
    lng: 0.3780969,
  },
  {
    address:
      'Stapleton Road Chapel, Newton Street, bristol, bristol, united kingdom, BS5 0QZ',
    lat: 51.4599093,
    lng: -2.575617,
  },
  {
    address:
      'The Beaver Centre,,  Selinas lane,, dagenham, essex, united kingdom, RM8 1QH',
    lat: 51.568263,
    lng: 0.1402502,
  },
  {
    address:
      '217-219 Ashton Old’, Beswick, manchester, lancashire, united kingdom, M11 3WU',
    lat: 53.4750292,
    lng: -2.2083308,
  },
  {
    address:
      '16 QUALITY  STREET LANE., , edinburgh, midlothian, united kingdom, EH4 5BU',
    lat: 55.9650499,
    lng: -3.2737855,
  },
  {
    address:
      'Portlethen Academy, Bruntland Road, portlethen, aberdeenshire, united kingdom, AB12 4QL',
    lat: 57.0574996,
    lng: -2.136239,
  },
  {
    address:
      'Woodlands Edge, Broxburn Parade, south ockendon ockendon, undefined, united kingdom, RM15 5QZ',
    lat: 51.5037152,
    lng: 0.2866328,
  },
  {
    address:
      'Hackney Picture House, 270, london, london, united kingdom, E8 1HE',
    lat: 51.5447222,
    lng: -0.055,
  },
  {
    address:
      'Belhus golf park and country club, Aveley bypass, south ockendon, essex, united kingdom, RM15 5ER',
    lat: 51.5068918,
    lng: 0.263995,
  },
  {
    address:
      'Shenley BrookEnd Comm Centre, Tesco by the Burnt Oak/, milton keynes, buckinghamshire, united kingdom, MK5 7HH',
    lat: 52.0143719,
    lng: -0.7812591,
  },
  {
    address:
      'Bredgar Village Hall, Bexon Lane, Sittinbourne, Kent, united kingdom, ME9 8HB',
    lat: 51.3102542,
    lng: 0.6974993,
  },
  {
    address:
      'Unit 3 Victoria Industrial Estate, Victoria Road, dartford, kent, united kingdom, DA1 5AJ',
    lat: null,
    lng: null,
  },
  {
    address:
      'Bicester Leisure Centre, Bicester Towm, bicester, oxfordshire, united kingdom, OX26 2NR',
    lat: 51.9009302,
    lng: -1.158961,
  },
  {
    address:
      'Plot 2-10, Jupiter Street, , motherwell,  lanarkshire, united kingdom, ML1 3XW',
    lat: 55.8028303,
    lng: -3.9990124,
  },
  {
    address: '182b, High Street, Beckenham, undefined, united kingdom, BR3 IEW',
    lat: 51.407128,
    lng: -0.02851,
  },
  {
    address:
      'Riverside Community Centre,, 113, Carshalton, london, united kingdom, SM5 2FJ',
    lat: 51.3790852,
    lng: -0.1646367,
  },
  {
    address:
      'Coopersale Village Hall, Epping, Epping, undefined, united kingdom, CM16 7QY',
    lat: 51.7047631,
    lng: 0.1341568,
  },
  {
    address:
      '81 – 83 St Vincents Road, Dartford, dartford, kent, united kingdom, DA1  1XA',
    lat: 51.4449828,
    lng: 0.2320821,
  },
  {
    address:
      'The boys scout (Temporary) 10th Dover Scout Headquarters,, Northbournew Playing Fields,, dover, kent, united kingdom, CT17 0BY',
    lat: 51.129017,
    lng: 1.2944495,
  },
  {
    address:
      '14-16 Michael Stree, Folkestone, folkestone, kent, united kingdom, CT20  1LL',
    lat: 51.0823112,
    lng: 1.1833382,
  },
  {
    address:
      'Blackbush Spring Community Hall, Harlow, undefined, ,,essex, united kingdom, CM20 3DY',
    lat: 51.7722204,
    lng: 0.1164554,
  },
  {
    address:
      '2nd Floor, 54 – 80 Ossory Road, london, london, united kingdom, SE1 5AN',
    lat: 51.4834921,
    lng: -0.0710982,
  },
  {
    address:
      'Waterside Play & Youth Project, 50 Dame Street, london,,, london, united kingdom, N1 7FR',
    lat: 51.533811,
    lng: -0.095515,
  },
  {
    address:
      'Pettswood Memorial Hall, 200 Pettswood Road, croydon, undefined, united kingdom, BR5 1LA',
    lat: 51.3904042,
    lng: 0.0737856,
  },
  {
    address: '111, Wells Park Road, london, london, united kingdom, SE26 6AD',
    lat: 51.4307465,
    lng: -0.0657777,
  },
  {
    address:
      'The Resurrection Life Community Resource Centre, Rear of 31 – 35 High Road, heath, essex, united kingdom, RM6 6QJ',
    lat: 51.571506,
    lng: 0.1317216,
  },
  {
    address:
      'Saint Luke church, Wellesway, Bath, Sommerset, united kingdom, BA2 2BD',
    lat: 51.3683319,
    lng: -2.3667056,
  },
  {
    address:
      'Duke Aldridge Academy, Turlock Road, london, london, united kingdom, N17 0PG',
    lat: 51.6048495,
    lng: -0.0626625,
  },
  {
    address:
      'Riverside Youth Hub, Bath, bath,,, undefined, united kingdom, BA1 6AE',
    lat: 51.3910644,
    lng: -2.3517425,
  },
  {
    address:
      'Riverside Community Centre, Rosemoor Gardens, newbury, berkshire, united kingdom, RG14  2FG',
    lat: 51.40642,
    lng: -1.303585,
  },
  {
    address:
      'Unit 4 Sterling Works Industrial  Estate, Rainham Road South, essex, essex, united kingdom, RM10 8TX',
    lat: 51.5490015,
    lng: 0.1597778,
  },
  {
    address:
      'Heronsgate Primary School, Whinchat Road, undefined, undefined, united kingdom, SE28 0E',
    lat: 51.493498,
    lng: 0.083585,
  },
  {
    address:
      '20, Holburn Street, ,aberdeen,, undefined, united kingdom, AB10 6BT',
    lat: 57.1423713,
    lng: -2.1125088,
  },
  {
    address:
      'Carnegie Hall, Skene Place, aberdeen, aberdeenshire, united kingdom, AB21 7AY',
    lat: 57.2052163,
    lng: -2.1901668,
  },
  {
    address: '32 Union Street, , inverness, undefined, united kingdom, IV1 1PX',
    lat: 57.4786554,
    lng: -4.2253039,
  },
  {
    address:
      '112 Brent Terrace, Brent Cross, london, london, united kingdom, NW2 1LT',
    lat: 51.5717387,
    lng: -0.2264896,
  },
  {
    address:
      '191, Victoria Road, aberdeen, aberdeenshire, united kingdom, AB11 9NE',
    lat: 57.1367958,
    lng: -2.0824805,
  },
  {
    address:
      'G03 Kingsley House, 37 – 47 Balmoral Road, gillingham, kent, united kingdom, ME7 4NT',
    lat: 51.3864231,
    lng: 0.5506101,
  },
  {
    address:
      '42, UNION/BOND STREET, nxt to Leigh Judo Club, leigh, lancashire, united kingdom, WN7 1AT',
    lat: 53.471882,
    lng: -2.558959,
  },
  {
    address:
      '  Greenwich Community College,   Plumstead Road, london, undefined, united kingdom, SE18 7DQ',
    lat: 51.4907973,
    lng: 0.0787054,
  },
  {
    address:
      'Unit 19, Midas Business Centre, dagenham, essex, united kingdom, RM10 8PS',
    lat: 51.5489956,
    lng: 0.1560259,
  },
  {
    address:
      'Royal Docks Learning & Activity Centre, Albert Road, Newham, london, united kingdom, E16 2JB',
    lat: 51.500721,
    lng: 0.058342,
  },
  {
    address:
      '20 Lavender Road, Clapham Junction, london, london, united kingdom, SW11 2UG',
    lat: 51.4663671,
    lng: -0.1518015,
  },
  {
    address:
      'Glades Bromley, The Pavilion, bromley, kent, united kingdom, BR1 3EF',
    lat: 51.4038327,
    lng: 0.0181556,
  },
  {
    address:
      'Manor Park Methodist Church, Herbert Road, london, london, united kingdom, E12 6AJ',
    lat: 51.5507073,
    lng: 0.049905,
  },
  {
    address:
      'Unit M5, KG Business Centre, northampton, northamptonshire, united kingdom, NN5 7QS',
    lat: 52.2525744,
    lng: -0.9180211,
  },
  {
    address:
      'Sue Bramley Children Centre, Bastable Avenue, barking, essex, united kingdom, IG11 0LH',
    lat: 51.527901,
    lng: 0.1045536,
  },
  {
    address:
      '18 Stanley Street, , sheffield, south yorkshire, united kingdom, S3 8HJ',
    lat: 53.3875533,
    lng: -1.4639317,
  },
  {
    address:
      '203 main Road, Dovercourt, harwich, essex, united kingdom, CO12 3PH',
    lat: 51.9361676,
    lng: 1.2769212,
  },
  {
    address:
      'Emerson Park Community Association Hall, Slywin Road, hornchurch, essex, united kingdom, ',
    lat: 51.5751646,
    lng: 0.2135214,
  },
  {
    address: '108, Marr Terrace, thurso, caithness, united kingdom, KW14 7DZ',
    lat: 58.5875572,
    lng: -3.5406973,
  },
  {
    address:
      'Flamstead End Hall, Albemarle Avenue, cheshunt, hertfordshire, united kingdom, EN8 0EY',
    lat: 51.7121321,
    lng: -0.0505164,
  },
  {
    address:
      '32 – 42 East Street Hill Fields, , coventry, west midlands, united kingdom, CV1 5LS',
    lat: 52.4099529,
    lng: -1.4957768,
  },
  {
    address:
      '129 Gough Street, Wolverhampton, wolverhampton, west midlands, united kingdom, WV1 3DD',
    lat: 52.5852179,
    lng: -2.1193119,
  },
  {
    address:
      '384 High Road, Off Redgate lane, manchester, greater manchester, united kingdom, M12  4SA',
    lat: 53.4658205,
    lng: -2.2004452,
  },
  {
    address:
      'Mile End stadium, london, undefined, undefined, united kingdom, E3 4HL',
    lat: 51.5192054,
    lng: -0.0321641,
  },
  {
    address:
      'Park Inn  Hotel, By Radisson Bedford, Bedford, Bedfordshire, united kingdom, MK42 0AR',
    lat: 52.1338744,
    lng: -0.4658097,
  },
  {
    address:
      '111-115 North Street, Romford,, Romford, undefined, united kingdom, RM1 1ES',
    lat: 51.5813119,
    lng: 0.1769468,
  },
  {
    address:
      'Mill House, 20-22 Railway Road, undefined, coleraine,,, united kingdom, BT52 1PD',
    lat: 55.1327013,
    lng: -6.6656297,
  },
  {
    address:
      'Blessed Hope SDA Church,  Priory Hill, dartford, kent, united kingdom, DA1 2ES',
    lat: 51.4458602,
    lng: 0.2116918,
  },
  {
    address:
      '32-33, St Peters Community Centre, St peters road, leicester, leicestershire, united kingdom, LE2 1DA',
    lat: 52.630131,
    lng: -1.1164816,
  },
  {
    address:
      'Mardyke Community Centre, South Street, rainham, essex, united kingdom, RM13 8PJ',
    lat: 51.5284799,
    lng: 0.1694111,
  },
  {
    address:
      'Bath City Football Stadium, Twerton, bath,,, undefined, united kingdom, BA2 1DB',
    lat: 51.3788205,
    lng: -2.3951602,
  },
  {
    address: '2/4 Whalebone Lane, , dagenham, essex, united kingdom, RM8 1BJ',
    lat: 51.5617512,
    lng: 0.1476747,
  },
  {
    address:
      'Assembly Hall Hilltop, Bolsover, undefined, derbyshire,,, united kingdom, S44 6NG',
    lat: 53.231651,
    lng: -1.2932917,
  },
  {
    address:
      '66-80, Arundel Road, luton, bedfordshire, united kingdom, LU4 8DY',
    lat: 51.8945965,
    lng: -0.4464508,
  },
  {
    address:
      'Youth & Community Centre, 252 Northumberland, undefined, undefined, united kingdom, RG2 7QA',
    lat: 51.4327592,
    lng: -0.9625285,
  },
  {
    address:
      'Technology House, West Road, brighton, east sussex, united kingdom, BN41 1QH',
    lat: 50.833132,
    lng: -0.221728,
  },
  {
    address:
      '27 Shotton Walk, Doncaster, doncaster, south yorkshire, united kingdom, DN1 3RH',
    lat: 53.5168938,
    lng: -1.1356788,
  },
  {
    address:
      '287 Fore Street, Edmonton, undefined, london, united kingdom, N9 0PD',
    lat: 51.6187841,
    lng: -0.0632564,
  },
  {
    address:
      'Melbourne Centre, Escrick Street, york, undefined, united kingdom, YO10 4AW',
    lat: 53.9521854,
    lng: -1.0747962,
  },
  {
    address:
      'Bishop’s Hatfield Girls’ School Hall, Wood Avenue, hatfield, hertfordshire, united kingdom, AL10 8NL',
    lat: 51.7587996,
    lng: -0.226604,
  },
  {
    address:
      'Mackintosh Sports Club, 38 Keppoch Street, Roath, Cardiff, cardiff, undefined, united kingdom, CF24 3JW',
    lat: 51.4915863,
    lng: -3.1676486,
  },
  {
    address:
      'The Round Chapel, 2, POWERSCROFT ROAD, london, london, united kingdom, E5 0PU',
    lat: 51.5522426,
    lng: -0.0521096,
  },
  {
    address:
      'Royal Docks Community School, Docklands, london, london, united kingdom, E16 3HS',
    lat: 51.5109699,
    lng: 0.0349122,
  },
  {
    address:
      '240-242 Plumstead High Street, Plumstead, london, london, united kingdom, SE18 1JL',
    lat: 51.4863971,
    lng: 0.0972267,
  },
  {
    address:
      'Aurora House, Deltic Avenue, rooksley, milton keynes, united kingdom, MK13 8LW',
    lat: 52.040497,
    lng: -0.7817847,
  },
  {
    address:
      'Holy Cross Church Hall,  Borehamwood, borehamwood, hertfordshire, united kingdom, WD6 2QU',
    lat: 51.6521571,
    lng: -0.2551697,
  },
  {
    address:
      '1st Floor,,  24 Holmethorpe Avenue, redhill, surrey, united kingdom, RH1 2NL',
    lat: 51.2497592,
    lng: -0.1590079,
  },
  {
    address:
      'Unit 5 Swan Wharf, Waterloo Road, Uxbridge, london, united kingdom, UB8 2RA',
    lat: 51.5387521,
    lng: -0.4874247,
  },
  {
    address:
      'Church of the Nazarene, Newsham Road, lancaster, lancashire, united kingdom, LA1 4DH',
    lat: 54.0368574,
    lng: -2.7923097,
  },
  {
    address:
      'The Brian Charity, Norton Street,, liverpool, merseyside, united kingdom, L3 8LR',
    lat: 53.409686,
    lng: -2.9752599,
  },
  {
    address:
      '90 southdown road, Harpenden, undefined, undefined, united kingdom, AL5 1DS',
    lat: 51.8072275,
    lng: -0.3451382,
  },
  {
    address:
      'Liberty House, Clarks Road, ilford, essex, united kingdom, IG1 1FT',
    lat: 51.561649,
    lng: 0.08952,
  },
  {
    address:
      'Royals Youth Centre, Viking Way, rainham, essex, united kingdom, RM13 9YG',
    lat: 51.5191667,
    lng: 0.1908333,
  },
  {
    address: '59 Carfax Road, Hayes, hayes, middlesex, united kingdom, UB3 4RD',
    lat: 51.493437,
    lng: -0.417138,
  },
  {
    address: 'St Clements Close, , gravesend, kent, united kingdom, DA11 7RU',
    lat: 51.4253619,
    lng: 0.3529094,
  },
  {
    address:
      'Walton Le Dale, Preston, undefined, lancashire,,, united kingdom, PR5 4AW',
    lat: 53.7484403,
    lng: -2.6775035,
  },
  {
    address:
      'Darenth Community Primary School, Green Street, undefined, undefined, united kingdom, DA2 8DH',
    lat: 51.4153277,
    lng: 0.2634251,
  },
  {
    address:
      'The Net Youth Centre, Stratton Way Abingdon, abingdon, oxfordshire, united kingdom, OX14 3RG',
    lat: 51.671098,
    lng: -1.2855057,
  },
  {
    address:
      'Unit 7B Bison House entrance by Sedgwick Street, 150-164 Homerton High Street Hackney, undefined, london, united kingdom, E9 6AA',
    lat: 51.5480959,
    lng: -0.0435926,
  },
  {
    address:
      'SACRED HEART,(ROMAN CATHOLIC, SAWPIT ROAD, oxford, oxfordshire, united kingdom, OX4  6BD',
    lat: 51.7240911,
    lng: -1.1977314,
  },
  {
    address:
      'Station Approach, Caravan Park, banbury, oxfordshire, united kingdom, OX16 5AB',
    lat: 52.0593923,
    lng: -1.3270525,
  },
  {
    address:
      'Congress Hall, 3-5 Park Crescent Terrace, brighton, west sussex, united kingdom, BN2 3HD',
    lat: 50.8322883,
    lng: -0.1327934,
  },
  {
    address:
      'Clydebank East Community Centre, Fleming Avenue, glasgow, lanarkshire, united kingdom, G81  1AJ',
    lat: 55.8983075,
    lng: -4.3880577,
  },
  {
    address:
      'No 19, Corn Market Exchange, witney,,, undefined, united kingdom, OX28 6AB',
    lat: 51.7843386,
    lng: -1.4847505,
  },
  {
    address:
      '23, Thane Court, milton keynes, undefined, united kingdom, MK14 6AL',
    lat: 52.064831,
    lng: -0.7734267,
  },
  {
    address:
      'Grand Stand Way. Off Dabbs Hill Lane, Northolt. London, london, middlesex, united kingdom, UB5 4FL',
    lat: 51.5534458,
    lng: -0.371143,
  },
  {
    address:
      '1 Newbury Terrace, Great Coates, grimsby, lincolnshire, united kingdom, DN37 9NF',
    lat: 53.5756981,
    lng: -0.1279067,
  },
  {
    address: '3, Park Lane, gateshead,,, undefined, united kingdom, NE8 3JW',
    lat: 54.9618022,
    lng: -1.5996675,
  },
  {
    address:
      '94-102 Blandford street, , newcastle upon tyne, undefined, united kingdom, NE1 3BT',
    lat: 54.9679552,
    lng: -1.6245338,
  },
  {
    address:
      'Holbrook Community Centre, School Lane, horsham, west sussex, united kingdom, RH12 5 PP',
    lat: 51.0851271,
    lng: -0.3144885,
  },
  {
    address:
      'Wonderland, 26 Thames Road, barking, essex, united kingdom, IG11 0HZ',
    lat: 51.5248583,
    lng: 0.1052185,
  },
  {
    address:
      '29 gateley House, Coston Walk, london, london, united kingdom, SE4 2JF',
    lat: 51.4599527,
    lng: -0.0447908,
  },
  {
    address:
      'Bethel Place, 3 Robinson Street, south tyneside, undefined, united kingdom, NE33 4PR',
    lat: 54.9916191,
    lng: -1.4283666,
  },
  {
    address:
      'VAUX BREWERY WAY, , sunderland, undefined, united kingdom, SR5 1SN',
    lat: 54.915458,
    lng: -1.3884618,
  },
  {
    address:
      'RAVENA ROOM, WESTGATE LIESURE CENTRE, chichester, west sussex, united kingdom, PO19 1RJ',
    lat: 50.8329527,
    lng: -0.7868264,
  },
  {
    address:
      'St Michael and all Angels, Gordon Hill, enfield, middlesex, united kingdom, EN2 0QP',
    lat: 51.6612479,
    lng: -0.0871424,
  },
  {
    address:
      '35 Nursery Road, Hockley, birmingham, west midlands, united kingdom, B19 2XN',
    lat: 52.4973925,
    lng: -1.9127176,
  },
  {
    address:
      'House of Grace, Frankland Lane, Durham, undefined, united kingdom, DH1 5TA',
    lat: 54.786157,
    lng: -1.5659891,
  },
  {
    address:
      'Lighthouse Christian Fellowship Centre, Manor Road (Concord), washington, tyne and wear, united kingdom, NE37 2DT',
    lat: 54.9132262,
    lng: -1.5208178,
  },
  {
    address:
      'Central Community centre, Lindum street, scunthorpe, north lincolnshire, united kingdom, DN15 6QU',
    lat: 53.5901577,
    lng: -0.6437369,
  },
  {
    address:
      'Praise Hall, Pallion Road(Beside Gulf Petrol Station), sunderland, tyne and wear, united kingdom, SR4 6LR',
    lat: 54.9050553,
    lng: -1.413574,
  },
  {
    address:
      '21Prince Regent Street,  Stockton On Tees, stockton on tees, durham, united kingdom, TS 18 1DB',
    lat: 54.5634014,
    lng: -1.3149323,
  },
  {
    address:
      'Braemar Avenue Baptist Church, Bounds Green, london, london, united kingdom, N22 7BY',
    lat: 51.6007247,
    lng: -0.1174217,
  },
  {
    address:
      'Ellon Academy Community Campus, Kellie Pearl Way, ellon ellon, aberdeenshire, united kingdom, AB41 8LF',
    lat: 57.3591194,
    lng: -2.0539102,
  },
  {
    address:
      '125 Marton Road, Second Floor, middlesborough, north yorkshire, united kingdom, TS1  2DU',
    lat: 54.5733268,
    lng: -1.2266777,
  },
  {
    address:
      '169 – 171 Haydons Road, South Wimbledon, London, london, london, united kingdom, SW19 8TB',
    lat: 51.4209954,
    lng: -0.1872077,
  },
  {
    address:
      'Redemption Community Hub, 79 London Road, stoke-on-trent, staffordshire, united kingdom, ST4 7PZ',
    lat: 53.0023292,
    lng: -2.1869353,
  },
  {
    address:
      'Saint James and Church Hall, Rhosddu Road, Wrexham, North Wales, united kingdom, LL11 2NW',
    lat: 53.0535437,
    lng: -2.9973827,
  },
  {
    address:
      'Living Word Liberation Centre, 21-25 St Mary’s Place, southampton, hampshire, united kingdom, S014 3HY',
    lat: 50.904115,
    lng: -1.397119,
  },
  {
    address:
      'York Centre, 42 York Road, maidenhead, berkshire, united kingdom, SL6 1SH',
    lat: 51.5209531,
    lng: -0.7173879,
  },
  {
    address:
      'Living Word Centre, Eggleston View, darlington, durham, united kingdom, DL3 9SH',
    lat: 54.5378457,
    lng: -1.5984273,
  },
  {
    address:
      'Sidney Walter Centre, Sussex Road, worthing, west sussex, united kingdom, BN11 1DS',
    lat: 50.8164415,
    lng: -0.3692625,
  },
  {
    address:
      'Mercure Livingston Hotel, Almondview, livingston, west lothian, united kingdom, EH54 6QB',
    lat: 55.8862544,
    lng: -3.5041665,
  },
  {
    address:
      '3 HARROWBY  STREET, FARNWORTH, bolton, greater manchester, united kingdom, BL 4 7BU',
    lat: 53.5488772,
    lng: -2.4022117,
  },
  {
    address:
      'ST OSMUND CHURCH, LONDON ROAD, derby, derbyshire, united kingdom, DE24 9NE',
    lat: 52.90409,
    lng: -1.446435,
  },
  {
    address:
      'The Haigh Building, Maryland Street, liverpool, lancashire, united kingdom, L1  9DE',
    lat: 53.4023515,
    lng: -2.9719228,
  },
  {
    address:
      'Lettsom T & RA Hall, 114, london, london, united kingdom, SE5 8PQ',
    lat: 51.4705501,
    lng: -0.0853137,
  },
  {
    address:
      '23 Peel Precinct, Carlton Vale, london, london, united kingdom, NW6  5BS',
    lat: 51.5341563,
    lng: -0.1990901,
  },
  {
    address:
      'Beckton Community Centre, East Manor Way, london, london, united kingdom, E6 5NG',
    lat: 51.5102254,
    lng: 0.0630166,
  },
  {
    address:
      '1 Longbridge Lane, Birmingham, birmingham, west midlands, united kingdom, B31 2TW',
    lat: 52.3961554,
    lng: -1.9860229,
  },
  {
    address:
      'Pitsea Leisure Centre,  2 Northlands Pavement, basildon, essex, united kingdom, SS13 3DU',
    lat: 51.5669719,
    lng: 0.5042091,
  },
  {
    address: '451 Sunleigh Road, , london, london, united kingdom, HA0  4NF',
    lat: 51.5397453,
    lng: -0.2954452,
  },
  {
    address:
      'Runnymede hall, Castle point borough council, benfleet, essex, united kingdom, SS7 1TF',
    lat: 51.5621851,
    lng: 0.585494,
  },
  {
    address:
      'Vue Cinema Altrincham, Denmark St, altrincham manchester, undefined, united kingdom, WA14 2WG',
    lat: 53.3847877,
    lng: -2.3490735,
  },
  {
    address: 'Rush Green, , romford, essex, united kingdom, RM7 0RJ',
    lat: 51.5648121,
    lng: 0.1777755,
  },
  {
    address:
      'The Broughton Pavilion, 139 Tanfield Lane Broughton, milton keynes, buckinghamshire, united kingdom, MK10 9NJ',
    lat: 52.0494144,
    lng: -0.6958465,
  },
  {
    address:
      'Waverly Community Centre, Church Lane, doncaster, undefined, united kingdom, DN4 0UQ',
    lat: 53.5042252,
    lng: -1.1707115,
  },
  {
    address:
      '195 Powers Court, Portsmouth, portsmouth, hampshire, united kingdom, PO2  7JH',
    lat: 50.8120887,
    lng: -1.0712047,
  },
  {
    address:
      'Snodland Community  Centre, Paddlesworth Road, snodland, kent, united kingdom, ME6 5BF',
    lat: 51.3324806,
    lng: 0.4347501,
  },
  {
    address:
      '1st Bromford Community Centre, Bromford, birmingham, west midlands, united kingdom, B36 8UB',
    lat: 52.5060876,
    lng: -1.8184449,
  },
  {
    address:
      'Hiltop Community Centre, Crest Road,, high wycombe, buckinghamshire, united kingdom, HP11 1UA',
    lat: 51.6118162,
    lng: -0.7756455,
  },
  {
    address:
      'North Street, New Bradwell,, keynes, buckinghamshire, united kingdom, MK13 0EE',
    lat: 52.065765,
    lng: -0.7880654,
  },
  {
    address:
      'Ladybrook Community Centre, Ladybrook Lane, mansfield,,, undefined, united kingdom, NG18 5JJ',
    lat: 53.1457229,
    lng: -1.2153166,
  },
  {
    address:
      '17 wordsworth road, london, london, london, united kingdom, SE1 5TX',
    lat: 51.4906388,
    lng: -0.0744568,
  },
  {
    address:
      'Melville South Church Hall Montrose, Castle street Montrose, undefined, undefined, united kingdom, DD 10 8AX',
    lat: 56.7083905,
    lng: -2.4709337,
  },
  {
    address:
      'St. John The Evangelist Church Hall, 1, london, london, united kingdom, N13 4DA',
    lat: 51.6236601,
    lng: -0.1047664,
  },
  {
    address:
      '280 Lanark Road West, Edinburgh, edinburgh,,, undefined, united kingdom, EH14 5RU',
    lat: 55.894408,
    lng: -3.31597,
  },
  {
    address: '275, Old Kent Road, undefined, Kent, united kingdom, SE1 5LU',
    lat: 51.4892999,
    lng: -0.078276,
  },
  {
    address:
      'Mountbatten House, 56 High Street, dunstable, bedfordshire, united kingdom, LU6 3HD',
    lat: 51.5160269,
    lng: -0.1390885,
  },
  {
    address:
      '32-34 Duncan Street, Salford, salford, greater manchester, united kingdom, M5 3SQ',
    lat: 53.4778244,
    lng: -2.2705712,
  },
  {
    address:
      '32-34 Duncan Street, Salford, salford, greater manchester, united kingdom, M5 3SQ',
    lat: 53.4778244,
    lng: -2.2705712,
  },
  {
    address:
      'Roundhouse Hotel, 1 Meyrick Road, bournemouth,,, undefined, united kingdom, BH1 2PR',
    lat: 50.7212882,
    lng: -1.8665748,
  },
  {
    address:
      '1A Chequer Lane, Littleport, undefined, cambridgeshire cambridgeshire, united kingdom, CB7 4LN',
    lat: 52.399845,
    lng: 0.2641751,
  },
  {
    address:
      '123 Station Road, Ellesmere Port, ellesmere port, cheshire, united kingdom, CH65 4BW',
    lat: 53.2832136,
    lng: -2.8955689,
  },
  {
    address:
      'Jubilation Community Centre,  Moulton Avenue, bedford, bedfordshire, united kingdom, MK42  0JD',
    lat: 52.124068,
    lng: -0.449608,
  },
  {
    address:
      'Estate Community Centre, Fern Grove Bletchley, milton keynes, buckinghamshire, united kingdom, MK2 3HQ',
    lat: 51.9812966,
    lng: -0.7284112,
  },
  {
    address:
      '150 Middlepark Avenue, Eltham, london, undefined, united kingdom, SE9 5SD',
    lat: 51.445872,
    lng: 0.0389222,
  },
  {
    address:
      '15 CHATLEY STREET,, CHEETHAMHILL STREET, manchester,,, undefined, united kingdom, M3 1HU',
    lat: 53.4925681,
    lng: -2.2420999,
  },
  {
    address:
      'St. Teresa’s Catholic Primary School, Brook Road, borehamwood, hertfordshire, united kingdom, WD6 5HL',
    lat: 51.6625332,
    lng: -0.2751757,
  },
  {
    address:
      '1C & D Carlisle Road, Kingsbury, undefined, London, united kingdom, NW9 0HD',
    lat: 51.5950193,
    lng: -0.2675165,
  },
  {
    address:
      'Barnfield South Academy, Rotheram Avenue, luton, bedfordshire, united kingdom, LU1 5PP',
    lat: 51.869825,
    lng: -0.435701,
  },
  {
    address:
      'The Mixed Centre, 1A Cumberland Road, london, london, united kingdom, E13 8LH',
    lat: 51.5234447,
    lng: 0.0261194,
  },
  {
    address:
      'Discovery Centre, 6, bexleyheath, undefined, united kingdom, DA6 7DY',
    lat: 51.4565872,
    lng: 0.1466801,
  },
  {
    address:
      '30, Mere Green Road, sutton,coldfield,, undefined, united kingdom, B75 5BT',
    lat: 52.5869878,
    lng: -1.8256194,
  },
  {
    address: 'Units 2 & 3, 1st Floor, london, london, united kingdom, E6 6EJ',
    lat: 51.5314727,
    lng: -0.1247063,
  },
  {
    address:
      'Lionel Road Community Hall, Eltham, london, london, united kingdom, SE9 6DH',
    lat: 51.4551002,
    lng: 0.0397565,
  },
  {
    address:
      'Higherland Methodist Church, Higherland, newcastle under lyme, staffordshire, united kingdom, ST5 2TF',
    lat: 53.008409,
    lng: -2.2310695,
  },
  {
    address:
      'Peggotty Road Community Centre, Peggotty Road, great yarmouth, norfolk, united kingdom, NR30 3EF',
    lat: 52.592457,
    lng: 1.7311881,
  },
  {
    address:
      'Kingsnorth Recreation Centre, Ashford, undefined, Kent, united kingdom, TN23 3NZ',
    lat: 51.1209533,
    lng: 0.8632566,
  },
  {
    address:
      'Freemantle Community Centre, Randolph Street, southampton, hampshire, united kingdom, SO15 3HE',
    lat: 50.9174134,
    lng: -1.429486,
  },
  {
    address:
      'Dove lodge, 49 Beach road, littlehampton,,, undefined, united kingdom, BN17 5JG',
    lat: 50.8071136,
    lng: -0.538488,
  },
  {
    address:
      'Redden Court School, Cotswold Road, undefined, Essex, united kingdom, RM3 0TS',
    lat: 51.5864645,
    lng: 0.2315161,
  },
  {
    address:
      'St Machar Academy, St Machar Drive, aberdeen, aberdeenshire, united kingdom, AB24 3YZ',
    lat: 57.1661064,
    lng: -2.1114248,
  },
  {
    address:
      'Phoenix House,, Dudley Street West,, oldbury, west midlands, united kingdom, B69 2PJ',
    lat: 52.5145919,
    lng: -2.0436238,
  },
  {
    address:
      '29 Main Street, Romford, romford, essex, united kingdom, RM1  3DD',
    lat: 51.582651,
    lng: 0.188043,
  },
  {
    address:
      'The Basildon Centre, St Georges Suite – 1st Floor, basildon, essex, united kingdom, SS14  1DL',
    lat: 51.5704141,
    lng: 0.4545431,
  },
  {
    address: '40, Lincoln road, blackburn, lancashire, united kingdom, Bb1 1tp',
    lat: 53.7442942,
    lng: -2.4604315,
  },
  {
    address:
      'Old Church Hall, Western Road, tring,,, undefined, united kingdom, HP23 4BT',
    lat: 51.7929287,
    lng: -0.6662374,
  },
  {
    address:
      'Moss Hall Junior School, Nether Street, london, london, united kingdom, N3 1NR',
    lat: 51.6096611,
    lng: -0.1858449,
  },
  {
    address:
      '13 Graham Street, Dundee, dundee, angus, united kingdom, DD4  9AD',
    lat: 56.4786218,
    lng: -2.9688668,
  },
  {
    address:
      '194-198 Broadfields Avenue, Edgware, london, middlesex, united kingdom, HA8 8TF',
    lat: 51.6287526,
    lng: -0.2722965,
  },
  {
    address:
      '75a Harvester Way, Edinburgh, edinburgh, midlothian, united kingdom, EH14 3JH',
    lat: 55.9145311,
    lng: -3.2819258,
  },
  {
    address:
      'Carlton Centre, Carlton Terrace, halifax, west yorkshire, united kingdom, HX1 2AD',
    lat: 53.7206693,
    lng: -1.8618245,
  },
  {
    address:
      '91 Bishops Rise, Hatfield, hatfield, hertfordshire, united kingdom, AL10 9BZ',
    lat: 51.7480268,
    lng: -0.2348264,
  },
  {
    address:
      'Purway close, Luton, luton, bedfordshire, united kingdom, LU3 3SR',
    lat: 51.9179208,
    lng: -0.4533978,
  },
  {
    address:
      'Age UK Thanet Raldolph House, Zion Place, ,margate,, undefined, united kingdom, CT9 1RT',
    lat: 51.3910661,
    lng: 1.3878175,
  },
  {
    address:
      'Redemption House, Victoria Gardens, fife, fife, united kingdom, KY1 1DJ',
    lat: 56.114988,
    lng: -3.1627935,
  },
  {
    address:
      '197 Firpark Street, Glasgow, glasgow,,, undefined, united kingdom, G31 2RH',
    lat: 55.8650772,
    lng: -4.2296821,
  },
  {
    address:
      'St Richard’s Centre, Swallowfield Road, undefined, london, united kingdom, SE7 7NR',
    lat: 51.4850943,
    lng: 0.0291424,
  },
  {
    address:
      'Hazel Road Community Hall,  Hazel Road,, london, london, united kingdom, NW10 5PP',
    lat: 51.5305187,
    lng: -0.2270592,
  },
  {
    address: ', 218-224 Heathway, dagenham, essex, united kingdom, RM10 8QS',
    lat: 51.540946,
    lng: 0.1482152,
  },
  {
    address:
      'Doggett coats and Badge, 1 Blackfriars road, london, london, united kingdom, SE1 9UD',
    lat: 51.5084305,
    lng: -0.1048341,
  },
  {
    address:
      '110-112 (112A Sat Nav), Norton Road, Durham, undefined, united kingdom, TS20 2AQ',
    lat: 54.5731359,
    lng: -1.3105787,
  },
  {
    address:
      '8 Kingfishers Square, Clyde Street, london, london, united kingdom, SE8 5TW',
    lat: 51.4813203,
    lng: -0.0294096,
  },
  {
    address:
      'Avonmouth Community Centre, 257 Avonmouth Road, undefined, undefined, united kingdom, BS11 9EN',
    lat: 51.5001642,
    lng: -2.6983837,
  },
  {
    address:
      'Trinity Place 5 to 13, Alfred Street, bristol, gloucestershire, united kingdom, BS2 0RF',
    lat: 51.4536775,
    lng: -2.5741019,
  },
  {
    address:
      'Buckingham Community Centre, Cornwalls, meadow,,, undefined, united kingdom, MK18 1RP',
    lat: 52.000833,
    lng: -0.9844726,
  },
  {
    address:
      '42 Cob Hill, Purton, swindon,,, undefined, united kingdom, SN5 4FR',
    lat: 51.5816789,
    lng: -1.8325317,
  },
  {
    address:
      'Chesterton Primary School Hall, Apsley Road, cirencester,,, undefined, united kingdom, GL7 1SS',
    lat: 51.7068234,
    lng: -1.9705404,
  },
  {
    address:
      'Parry Hall, Parry Road, gloucester, gloucestershire, united kingdom, GL1 4RZ',
    lat: 51.8490582,
    lng: -2.2377437,
  },
  {
    address:
      'Bowerhill, Villagehall Hallfax Road, melksham,,, undefined, united kingdom, SN12 6SN',
    lat: 51.357226,
    lng: -2.124625,
  },
  {
    address:
      'Davie Hall, 1 Clifton Place, plymouth, Sommerset, united kingdom, PL4 8HY',
    lat: 50.3782687,
    lng: -4.1347648,
  },
  {
    address:
      'Overcomers House, Deacon street, swindon, wiltshire, united kingdom, SN1 5NA',
    lat: 51.5571049,
    lng: -1.7879555,
  },
  {
    address:
      'YMCA Taunton, Leisure Way, Tauton,, Sommerset, united kingdom, TA1 2LB',
    lat: 51.0153202,
    lng: -3.083318,
  },
  {
    address:
      'Church Hall, Christchurch Ellayombe, torquay, undefined, united kingdom, TQ1 1LR',
    lat: 50.4690116,
    lng: -3.5331533,
  },
  {
    address:
      'Castle Batch Count Centre, Bishop Avenue, weston-super-mare, undefined, united kingdom, BS22  7PQ',
    lat: 51.3665124,
    lng: -2.917074,
  },
  {
    address:
      'Rooms 21/22, Methodist Central Building, manchester, undefined, united kingdom, M1 1JQ',
    lat: 53.4823192,
    lng: -2.235832,
  },
  {
    address:
      '147 High Road, New Southgate Conservative Club, building, undefined, undefined, united kingdom, N11 1PP',
    lat: 51.6150144,
    lng: -0.1408191,
  },
  {
    address:
      'St Francis Hall, Nightingale Avenue, undefined, undefined, united kingdom, SO50 9JB',
    lat: 50.9639331,
    lng: -1.3741148,
  },
  {
    address:
      'Unit 10, May Avenue Industrial Estate, gravesend, kent, united kingdom, DA11  8RU',
    lat: 51.434899,
    lng: 0.3523242,
  },
  {
    address:
      'Jackson Hall, Burford Street, hoddesdon,,, undefined, united kingdom, EN11 8JA',
    lat: 51.7661933,
    lng: -0.0077067,
  },
  {
    address:
      '11 to 15, High Street, strood medway, kent, united kingdom, ME2 4AB',
    lat: 51.3911177,
    lng: 0.5026599,
  },
  {
    address: 'St John  Hall, West Street, erith, kent, united kingdom, DA81AN',
    lat: 51.4867736,
    lng: 0.1706033,
  },
  {
    address:
      '50 Nuxley Road, Belvedere, Belvedere, Kent, united kingdom, DA17 5JG',
    lat: 51.4822505,
    lng: 0.1455562,
  },
  {
    address:
      'c/o Christ Church, 10 Emery Street, stoke on trent, undefined, united kingdom, ST6 2JJ',
    lat: 53.0357245,
    lng: -2.2111131,
  },
  {
    address: '18, Northend Road, erith, kent, united kingdom, DA8 3QE',
    lat: 51.4682036,
    lng: 0.1806725,
  },
  {
    address:
      'The Sanctuary , Tangmere Road, Castle Vale, birmingham, west midlands west midlands, united kingdom, B1 2UH',
    lat: 52.518997,
    lng: -1.7897282,
  },
  {
    address:
      'St EDWARD (CoE) HALL, St KEVERNE ROAD, MOTTINGHAM, BROMLEY, london, united kingdom, SE9 4AX',
    lat: 51.4271342,
    lng: 0.0481215,
  },
  {
    address:
      'National Christian Outreach Centre Complex, Riggs Road, perth, perthshire, united kingdom, PH1  1PR',
    lat: 56.396538,
    lng: -3.4471381,
  },
  {
    address:
      '31-33 (Valley Church Building), Bridge Street, winchester, hampshire, united kingdom, SP10 1BE',
    lat: 51.20637,
    lng: -1.480493,
  },
  {
    address:
      '8th Franborough Air Scouts Hall, Priory Street,, franborough, hampshire, united kingdom, GU14 7HX',
    lat: 51.2956414,
    lng: -0.7427551,
  },
  {
    address:
      'Ringway Centre, 268 Baring Road, london, london, united kingdom, SE12 0DS',
    lat: 51.4358069,
    lng: 0.019024,
  },
  {
    address:
      'Moulsecoomb Leisure Centre, Brighton, brighton, east sussex, united kingdom, BN2 4PB',
    lat: 50.8510288,
    lng: -0.1081414,
  },
  {
    address: '30 Holly street, London, london, london, united kingdom, E8 3XW',
    lat: 51.5421347,
    lng: -0.071475,
  },
  {
    address:
      'Blackstaff Chambers, 2 Amelia Street, belfast, antrim, united kingdom, BT2 7GS',
    lat: 54.5945433,
    lng: -5.9334818,
  },
  {
    address:
      '47B Westbury Street, Swansea, swansea, undefined, united kingdom, SA1 4JW',
    lat: 51.61765,
    lng: -3.9589014,
  },
  {
    address:
      '7-8 The Oval, Off Hackney Road, undefined, london, united kingdom, E2 9DT',
    lat: 51.5332835,
    lng: -0.0589246,
  },
  {
    address:
      '44, Laura Street, pontypridd, undefined, united kingdom, CF37 1NW',
    lat: 51.5971946,
    lng: -3.333666,
  },
  {
    address:
      'Kidlington Band Hall, High Street Kidlington, oxford, oxfordshire, united kingdom, OX5  2DN',
    lat: 51.823116,
    lng: -1.287508,
  },
  {
    address:
      'CONNECTION POINT,, 236 Meanwood Road, undefined, leeds yorkshire, united kingdom, LS7 2AH',
    lat: 53.8134708,
    lng: -1.5434567,
  },
  {
    address:
      'Knowle Methodist Church, Redcatch Road, bristol, gloucestershire, united kingdom, BS4 2TP',
    lat: 51.435261,
    lng: -2.5678175,
  },
  {
    address:
      'Midsomer Norton, Town Hall Approach, midsomer norton, undefined, united kingdom, BA3 2HQ',
    lat: 51.2854161,
    lng: -2.482911,
  },
  {
    address:
      'Ist Floor, 1 Russell Way, chelmsford, essex, united kingdom, CM1 3AA',
    lat: 51.7217807,
    lng: 0.4487913,
  },
  {
    address:
      '7a Scotts Passage, Woolwich, undefined, london, united kingdom, SE18 6AX',
    lat: 51.4905558,
    lng: 0.0702931,
  },
  {
    address:
      'Downham Health & Leisure Centre, 5-9 Moorside Road Downham, bromley, greater london, united kingdom, BR1 5EP',
    lat: 51.426176,
    lng: 0.0122851,
  },
  {
    address:
      '2nd Floor,  26-42 Plumstead High Street, undefined, london, united kingdom, SE18 1SL',
    lat: 51.4886789,
    lng: 0.0878702,
  },
  {
    address:
      'Trinity Church Sanctuary, Gaynes/Station Road, upminster, essex, united kingdom, RM14 2SJ',
    lat: 38.0712,
    lng: -97.931,
  },
  {
    address:
      'Holiday Inn, Grove Road, basingstoke, hampshire, united kingdom, RG21  3EE',
    lat: 51.2536831,
    lng: -1.0799915,
  },
  {
    address:
      '33a Bexley Road, Erith, bromley, greater london, united kingdom, DA8  1SH',
    lat: 51.480228,
    lng: 0.178309,
  },
  {
    address:
      'Chalvey Community Centre, The Green, slough,,, undefined, united kingdom, SL1 2SP',
    lat: 51.506001,
    lng: -0.6100956,
  },
  {
    address:
      'Vue Cinema, Northampton, northampton, undefined, united kingdom, NN1 2RN',
    lat: 52.2372845,
    lng: -0.9019705,
  },
  {
    address:
      '1 Marsh Road, Wembley, middlesex, middlesex, united kingdom, HA1 0ES',
    lat: 51.534217,
    lng: -0.301491,
  },
  {
    address: 'NO ANSWER, , undefined, undefined, united kingdom, ',
    lat: null,
    lng: null,
  },
  {
    address:
      '6 Harthill Street, , manchester, greater manchester, united kingdom, M8 8AG',
    lat: 53.4981966,
    lng: -2.2465558,
  },
  {
    address:
      'St Margaret Millenium Centre, Gatekeeper Chase, rainham, kent, united kingdom, ME8 9BH',
    lat: 51.3623833,
    lng: 0.6075194,
  },
  {
    address:
      'Dorking Christian, Centre, dorking,,, undefined, united kingdom, RH4 1DW',
    lat: 51.2325293,
    lng: -0.3326282,
  },
  {
    address: '37, The Oval, stevenage, hertfordshire, united kingdom, SG1 5RD',
    lat: 51.9188711,
    lng: -0.1791354,
  },
  {
    address:
      'Park Academy, West London, Park View Road, undefined, middlesex, united kingdom, UB8 3GA',
    lat: 51.5183311,
    lng: -0.4601161,
  },
  {
    address:
      'Wardley Community Centre, 30 Ash Drive, swinton, south yorkshire, united kingdom, M27 9RS',
    lat: 53.5193272,
    lng: -2.3573585,
  },
  {
    address:
      'Chain Lane Community Centre, Hinckley Road, st helens, merseyside, united kingdom, WA11 9HT',
    lat: 53.4679156,
    lng: -2.7136334,
  },
  {
    address:
      '25 Ley Avenue,, Dagenham, dagenham, kent, united kingdom, RM10 9YP',
    lat: 51.5347665,
    lng: 0.1681149,
  },
  {
    address:
      '49 Grange Park Road, Leyton, undefined, london, united kingdom, E10 5ER',
    lat: 51.5647421,
    lng: -0.0131591,
  },
  {
    address:
      'Baptist Chapel, 37 Station Road, surrey, surrey, united kingdom, RH1 1QH',
    lat: 51.2406046,
    lng: -0.1690406,
  },
  {
    address:
      'Hilton Dartford Bridge Hotel, Masterhead Close, dartford,,, undefined, united kingdom, DA2 6QF',
    lat: 51.4528958,
    lng: 0.2453883,
  },
  {
    address:
      '24A Green Street,, Enfield, Enfield, ,London, united kingdom, EN3 7HQ',
    lat: 51.6572866,
    lng: -0.0461182,
  },
  {
    address:
      '101, Reddish Lane, stockport, Manchester, united kingdom, M34 2NF',
    lat: 53.4546029,
    lng: -2.158051,
  },
  {
    address:
      'Popley Fields Community Centre, Popley, basingstoke,,, undefined, united kingdom, RG24 9AE',
    lat: 51.2872478,
    lng: -1.0764473,
  },
  {
    address:
      'St. Mary’s Parish centre, Devonshire Road, chorley,,, undefined, united kingdom, PR7 2SR',
    lat: 53.6522726,
    lng: -2.634817,
  },
  {
    address:
      'St Paul’s Centre,  405B, Belchers Lane, birmingham, west midlands, united kingdom, B5 9SY',
    lat: 52.4795526,
    lng: -1.833916,
  },
  {
    address:
      'St John’s Deaf Community Centre, 258 Green Lanes, london, london, united kingdom, N4 2HE',
    lat: 51.5699272,
    lng: -0.0948726,
  },
  {
    address:
      'ST.MARY MAGDALENE CENTRE, EVERSHOLT STREET, london, london, united kingdom, NW1 1BN',
    lat: 51.5313642,
    lng: -0.1348028,
  },
  {
    address:
      'St Olaves Church Hall, Woodberry Down, london, london, united kingdom, N4  2TW',
    lat: 51.5711606,
    lng: -0.0936615,
  },
  {
    address:
      '11A Broadway, Tilbury, undefined, ,essex,, united kingdom, RM18 7BP',
    lat: 51.4627609,
    lng: 0.3549663,
  },
  {
    address: 'Osmani Centre, 58, undefined, undefined, united kingdom, E1 5AW',
    lat: 51.5209833,
    lng: -0.0642449,
  },
  {
    address:
      'Restoration House, 1st Floor, Unit 1, castle upon tyne, undefined, united kingdom, NE29 7AR',
    lat: 55.0047495,
    lng: -1.476334,
  },
  {
    address:
      'Stone Haven Community Education Centre, Bath Street, stone haven, undefined, united kingdom, AB39 2DH',
    lat: 56.9673579,
    lng: -2.2112774,
  },
  {
    address:
      'Charteris Play Centre, Normanton Road, peterborough, cambridgeshire, united kingdom, PE1 4XE',
    lat: 52.5954397,
    lng: -0.2181233,
  },
  {
    address: '80-82, Rowan Road, undefined, undefined, united kingdom, DA7 4BN',
    lat: 51.4604812,
    lng: 0.1327807,
  },
  {
    address:
      'Unit 5 Birch Walk, Birch house, undefined, Kent, united kingdom, DA8 2HB',
    lat: 51.4807692,
    lng: 0.1661789,
  },
  {
    address:
      'Holiday Inn Express, 275 Old Street, ,london,, london, united kingdom, EC1V 9LN',
    lat: 51.5268013,
    lng: -0.0828939,
  },
  {
    address:
      '96 Clive Road, West Dulwich, london, london, united kingdom, SE21 8BU',
    lat: 51.4317125,
    lng: -0.0906919,
  },
  {
    address:
      'Revive Centre,, 47 London Road, enfield, middlesex, united kingdom, EN2 6DS',
    lat: 51.6495142,
    lng: -0.0802624,
  },
  {
    address:
      'The Revive Centre,, 4 Raven Road,, undefined, undefined, united kingdom, E18 1HB',
    lat: 51.594677,
    lng: 0.0361774,
  },
  {
    address: ', , undefined, undefined, united kingdom, ',
    lat: null,
    lng: null,
  },
  {
    address:
      'Vue Cinema, Two Rivers, stains, undefined, united kingdom, TW18 4BL',
    lat: 51.4342848,
    lng: -0.5136731,
  },
  {
    address:
      'St. John The Divine, 522 Goresbrook Road, dagenham, essex, united kingdom, RM 9 4XA',
    lat: 51.5345889,
    lng: 0.1188707,
  },
  {
    address:
      'The Community Venue, O2 Centre, 225 Finchley Road, london, london, united kingdom, NW3 6LP',
    lat: 51.5478286,
    lng: -0.1814281,
  },
  {
    address:
      'Thamesmere Leisure Centre, Thamesmere Drive, london, london, united kingdom, SE28 8RE',
    lat: 51.5075784,
    lng: 0.1088455,
  },
  {
    address:
      'Unit 6, Block 1 Woolwich Dockyard Industrial Estate,, Woolwich Church Street, london, london, united kingdom, SE18 5PQ',
    lat: 51.4929893,
    lng: 0.0502059,
  },
  {
    address: '41, King Charles Road, surbiton, surrey, united kingdom, KT5 8PF',
    lat: 51.3929172,
    lng: -0.2944028,
  },
  {
    address:
      '319, Camberwell Rd, undefined, undefined, united kingdom, SE5 0HQ',
    lat: 51.4756572,
    lng: -0.0933962,
  },
  {
    address:
      '150-160 Grove Road, Chadwell Heath, essex, essex, united kingdom, RM6 4XB',
    lat: 51.5740479,
    lng: 0.1208781,
  },
  {
    address:
      'Destiny House, 95 Camberwell  Station Road, undefined, london, united kingdom, SE5 9JJ',
    lat: 51.4727519,
    lng: -0.0984688,
  },
  {
    address:
      'IBIS Styles Hotels, London EXCEL, london, london, united kingdom, E16  3BY',
    lat: 51.5100936,
    lng: 0.0273623,
  },
  {
    address:
      'Walthew House, 112 Shawheath Road, Stockport, undefined, united kingdom, SK2 6QS',
    lat: 53.4000372,
    lng: -2.1595573,
  },
  {
    address:
      'Manor Farm Community Association, King George Crescent, walsall, west midlands, united kingdom, WS4 1EU',
    lat: 52.6029269,
    lng: -1.9587277,
  },
  {
    address:
      'Chamber Hall, Town Council Offices, sevenoaks, kent, united kingdom, TN13 3QG',
    lat: 51.2867436,
    lng: 0.1891527,
  },
  {
    address: 'The HUB, 90 Monier Road, london, london, united kingdom, E3 2ND',
    lat: 51.5398666,
    lng: -0.0220597,
  },
  {
    address:
      'University Of Northampton, Grendon Lecture Theatre, northampton, northamptonshire, united kingdom, NN2 7AL',
    lat: 52.2304878,
    lng: -0.8869889,
  },
  {
    address:
      'Media house, 31 Freehold street, northampton, northamptonshire, united kingdom, NN2 6EW',
    lat: 52.2500219,
    lng: -0.8961912,
  },
  {
    address:
      'Unit 3 Granyte House, Delamare road, undefined, undefined, united kingdom, EN8 9SP',
    lat: 51.706048,
    lng: -0.0239082,
  },
  {
    address:
      'North Reddish Community Centre Hall, Reddish, reddish, undefined, united kingdom, SK5 6EZ',
    lat: 53.446123,
    lng: -2.158341,
  },
  {
    address:
      '28B, Villiers Street, sunderland,,, undefined, united kingdom, SR1 2AN',
    lat: 54.9059797,
    lng: -1.3752225,
  },
  {
    address:
      'Holy Trinity Church building, Traverse street Fingerpost, st helens, merseyside, united kingdom, WA9 1BW',
    lat: 53.4535607,
    lng: -2.7201695,
  },
  {
    address:
      'Chatenden Community Centre, Swintonm Avenue, rochester, undefined, united kingdom, ME3 8PH',
    lat: 51.4243834,
    lng: 0.5249525,
  },
  {
    address:
      'Didcot Girls’ School, Manor Crescent, didcot, oxfordshire, united kingdom, OX11 7AJ',
    lat: 51.6072044,
    lng: -1.2551419,
  },
  {
    address:
      '58 – 60 Westminster Road, Handsworth, birmingham, west midlands, united kingdom, B20 3LJ',
    lat: 52.5102154,
    lng: -1.9065403,
  },
  {
    address:
      '47-49, Trafalgar House, dudley, undefined, united kingdom, DY2 8PS',
    lat: 52.508434,
    lng: -2.084503,
  },
  {
    address:
      '127-129 ,, Highfield Road, birmingham, undefined, united kingdom, B28 0HS',
    lat: 52.4262523,
    lng: -1.8468719,
  },
  {
    address:
      'Our Lady of Fatima Church Hall, Higgins Lane, Quinton, birmingham, west midlands west midlands, united kingdom, B32 1LL',
    lat: 52.457041,
    lng: -1.993258,
  },
  {
    address:
      '142 LEA VILLAGE, KITTS GREEN, birmingham, west midlands, united kingdom, B33 9SL',
    lat: 52.4830589,
    lng: -1.778793,
  },
  {
    address:
      '1st Floor, 1A Menin Works, mitcham, surrey, united kingdom, CR4 3HG',
    lat: 51.4081847,
    lng: -0.1660948,
  },
  {
    address:
      'St Peter’s Church, Brockley, london, london, united kingdom, SE4 1LT',
    lat: 51.4650742,
    lng: -0.0306318,
  },
  {
    address:
      'Crook Log Leisure Centre, Brampton Road, undefined, undefined, united kingdom, DA7 4HH',
    lat: 51.4602778,
    lng: 0.125,
  },
  {
    address: '9 Bridge Close, Romford, romford, essex, united kingdom, RM7 0AU',
    lat: 51.5730407,
    lng: 0.1813231,
  },
  {
    address:
      '77 Bodmin Close, Battlehill, Wallsend Tyne, undefined, united kingdom, NE28 9SQ',
    lat: 55.0098823,
    lng: -1.5140533,
  },
  {
    address:
      'Hacton Hall, Haydock Close, hornchurch, essex, united kingdom, RM12 6EA',
    lat: 51.5511577,
    lng: 0.2306132,
  },
  {
    address:
      'Pimlico Academy, Lupus Street, london, london, united kingdom, SW1V 3AT',
    lat: 51.4881092,
    lng: -0.1376093,
  },
  {
    address:
      'The Arbroath Community Centre, 40 Marketgate, arbroath, angus, united kingdom, DD11 1AT',
    lat: 56.5570569,
    lng: -2.58292,
  },
  {
    address:
      '447 Hertford Road, London, london, london, united kingdom, N9 7DH',
    lat: 51.6390877,
    lng: -0.0484538,
  },
  {
    address:
      'Shenfield Parish Hall, 60 Hutton Road, brentwood, essex, united kingdom, CM15 8LB',
    lat: 51.6294083,
    lng: 0.3227597,
  },
  {
    address:
      'Luncies Hall, Luncies Road, basildon, essex, united kingdom, SS14 15A',
    lat: null,
    lng: null,
  },
  {
    address:
      '55 Woods Lane, Off Abbey Street, derby, derbyshire, united kingdom, DE22 3UD',
    lat: 52.9165341,
    lng: -1.4841113,
  },
  {
    address:
      'Solution House, 29 Welbeck Road, newcastle, undefined, united kingdom, NE6 2HU',
    lat: 54.9737132,
    lng: -1.5691754,
  },
  {
    address:
      'Lings Forum Leisure Centre, Weston Favell (Off Wellingborough Road), northampton, northamptonshire, united kingdom, NN3 8JR',
    lat: 52.2567091,
    lng: -0.8336097,
  },
  {
    address:
      '1042 Ashton New Road, Gorton, manchester,,, undefined, united kingdom, M12 5WX',
    lat: 53.4810681,
    lng: -2.1683024,
  },
  {
    address:
      'Palmer Avenue, Gravesend, undefined, kent,,, united kingdom, DA12 5DQ',
    lat: 51.4199623,
    lng: 0.379658,
  },
  {
    address:
      'Lewisham Methodist Church, Lewisham, london, london, united kingdom, SE13 6BT',
    lat: 51.4606994,
    lng: -0.0096503,
  },
  {
    address:
      'Diamond Centre, Neville Road, sprowston, norfolk, united kingdom, NR7 8TR',
    lat: 52.6531325,
    lng: 1.3092646,
  },
  {
    address:
      'Nevendon Play Centre, Nevendon Road, undefined, undefined, united kingdom, SS12 0LN',
    lat: 51.6093597,
    lng: 0.5190004,
  },
  {
    address:
      'Brenda Blakemore Community Centre,  Davis Close, rainham, essex, united kingdom, RM13 9JL',
    lat: 51.5215949,
    lng: 0.2056432,
  },
  {
    address:
      'Rehoboth Community Centre, 22 High Street, grays, essex, united kingdom, RM17 7LU',
    lat: 51.479409,
    lng: 0.284864,
  },
  {
    address:
      'Marlborough Science Academy, Watling Street, st albans, hertfordshire, united kingdom, AL1 2QA',
    lat: 51.7387057,
    lng: -0.349495,
  },
  {
    address:
      'The Oak Tree Centre, St Anne, colchester, undefined, united kingdom, CO4 3DH',
    lat: 51.8959876,
    lng: 0.9298077,
  },
  {
    address:
      'Units 1, 2 & 2A Sadd’s Yard, Skelmersdale Road, clacton, essex, united kingdom, CO15  6BP',
    lat: 51.7943926,
    lng: 1.1560683,
  },
  {
    address:
      'Rehoboth Community centre, Heath House, Grange Business Park,  Grange way,, colchester, essex, united kingdom, co2 8GU',
    lat: 51.8738289,
    lng: 0.9264154,
  },
  {
    address:
      '923-929, Oldham Road, manchester, greater manchester, united kingdom, M40 2EB',
    lat: 53.50196,
    lng: -2.1908515,
  },
  {
    address:
      '39 Crab Lane, Blackley, manchester, greater manchester, united kingdom, M9 8NB',
    lat: 53.5297582,
    lng: -2.2311863,
  },
  {
    address: '11A Church Lane, , oldham, lancashire, united kingdom, OL1 3AN',
    lat: 53.5425744,
    lng: -2.1116905,
  },
  {
    address:
      'Putteridge High School and Community College, Stopsley, luton,,, undefined, united kingdom, LU2 8HJ',
    lat: 51.9056968,
    lng: -0.3818859,
  },
  {
    address:
      'Gilbert Wakefield House, Warrington Business Centre, warrington, cheshire, united kingdom, WA2 7JQ',
    lat: 53.3926017,
    lng: -2.5964274,
  },
  {
    address:
      'Poppleton Road Memorial Hall, Oak Street, undefined, holgate yorkshire, united kingdom, YO26 4SE',
    lat: 53.961447,
    lng: -1.112592,
  },
  {
    address: 'Fant Hall, Fant Lane, maidstone, kent, united kingdom, ME16 8NN',
    lat: 51.2659524,
    lng: 0.4899954,
  },
  {
    address:
      'St Mary’s Community Complex Association, 180, london, london, united kingdom, SE9 1BJ',
    lat: 51.4506041,
    lng: 0.0570874,
  },
  {
    address:
      'Sale High School, Dorris Road, sale, lancs lancs, united kingdom, M33 3JR',
    lat: 53.4144617,
    lng: -2.3047374,
  },
  {
    address:
      'Bedford Square Community Centre, Tithe Farm Road, houghton regis, central bedfordshire, united kingdom, LU5 5ES',
    lat: 51.9057495,
    lng: -0.5196022,
  },
  {
    address: '9 Bridge Close, Romford, romford, essex, united kingdom, RM7 0AU',
    lat: 51.5730407,
    lng: 0.1813231,
  },
  {
    address:
      'Wykeham Room, Guildhall Winchester, winchester, undefined, united kingdom, SO23 9GH',
    lat: 51.0613889,
    lng: -1.3102778,
  },
  {
    address:
      '301 Long Riding, Basildon, basildon, essex, united kingdom, SS14 1QR',
    lat: 51.5719994,
    lng: 0.4760405,
  },
  {
    address:
      '20-21 Hockley Hill, Hockley, birmingham, west midlands, united kingdom, B18 5AH',
    lat: 52.4932903,
    lng: -1.9140152,
  },
  {
    address:
      'Apogee Studios , Unit 17, Bryant Industrial Estate, Bryant Avenue, undefined, Essex, united kingdom, RM3 0BY',
    lat: 51.5924,
    lng: 0.2169623,
  },
  {
    address:
      'Wednesbury Road, Hilltop, birmingham, west midlands, united kingdom, B70 0SB',
    lat: 52.575476,
    lng: -1.9910399,
  },
  {
    address:
      '120 Aberdeen Street, Winson Green, birmingham, west midlands, united kingdom, B18 7DL',
    lat: 52.4886203,
    lng: -1.9358394,
  },
  {
    address:
      'The Ressurection & Learning Centre, Brockley Road (besides Travis Perkins), chelmsford, essex, united kingdom, CM2 6HQ',
    lat: 51.7320253,
    lng: 0.4818405,
  },
  {
    address:
      'Chadderton Wellbeing Centre, Burnley Street, oldham, greater manchester, united kingdom, OL9  0JW',
    lat: 53.5461444,
    lng: -2.142495,
  },
  {
    address:
      'Purple Hall, Sladegreen & Howbury Community Centre, erith, kent, united kingdom, DA8 2EL',
    lat: 51.4735146,
    lng: 0.1909571,
  },
  {
    address:
      'Royal Greenwich Trust School, 765 Woolwich Road, london, london, united kingdom, SE7 8LJ',
    lat: 51.491304,
    lng: 0.0410861,
  },
  {
    address:
      'At St John’s Church, 386 Clapham Road, london, london, united kingdom, SW9 9AR',
    lat: 51.4675,
    lng: -0.1091667,
  },
  {
    address:
      'DUSSINDALE CENTRE, POUND LANE, norwich, norfolk, united kingdom, NR7 0RW',
    lat: 52.6308141,
    lng: 1.3605596,
  },
  {
    address:
      'Warren School Sports Centre, Whalebone Lane North, london,,, london, united kingdom, RM6 6SB',
    lat: 51.5773587,
    lng: 0.143646,
  },
  {
    address:
      'ST ANNE’S CHURCH HALL, COLMAN ROAD/THE AVENUES, norwich, norfolk, united kingdom, NR4 7HA',
    lat: 52.6260623,
    lng: 1.2594557,
  },
  {
    address:
      '98A Withington Road, Manchester, manchester, lancashire, united kingdom, M16  8FA',
    lat: 53.4533814,
    lng: -2.2576673,
  },
  {
    address:
      '14 Pratt Mews, Off Pratt Street, london, london, united kingdom, NW1 0AD',
    lat: 51.5370976,
    lng: -0.1405977,
  },
  {
    address: '193, Crayford Road, Crayford, undefined, united kingdom, DA1 4HA',
    lat: 51.4515039,
    lng: 0.1789757,
  },
  {
    address:
      '685-689 Old Kent Road, Old Kent Road, london, london, united kingdom, SE15 1JS',
    lat: 51.4820998,
    lng: -0.0617358,
  },
  {
    address: '1, Thorpe Close, ,,london, london, united kingdom, W10 5XL',
    lat: 51.5182059,
    lng: -0.2099516,
  },
  {
    address:
      'Holy Trinity, Hartland Road, london, london, united kingdom, NW1 8DE',
    lat: 51.5441218,
    lng: -0.1457605,
  },
  {
    address:
      '41st Medway (Scout Hall), Mafekin Road, ,chatham, kent, united kingdom, ME5 9HG',
    lat: 51.3399774,
    lng: 0.5230639,
  },
  {
    address: '4 Warwick Way, , ,dartford,, undefined, united kingdom, DA1 1NQ',
    lat: 51.4329184,
    lng: 0.2177561,
  },
  {
    address:
      'Rima House, Ripple Road, barking, essex, united kingdom, IG11 0RH',
    lat: 51.5742447,
    lng: 0.4856781,
  },
  {
    address:
      'St Edwards Church Hall, Cleves Crescent, croydon, surrey, united kingdom, CR0 0DL',
    lat: 51.3387962,
    lng: -0.0137799,
  },
  {
    address: ', , undefined, undefined, united kingdom, ',
    lat: null,
    lng: null,
  },
  {
    address:
      'The Refresh Centre, 129, east molesey, undefined, united kingdom, KT8 0DX',
    lat: 51.400791,
    lng: -0.3571548,
  },
  {
    address:
      'Queensbridge Sports Centre, 30, Holly Street, london, london, united kingdom, E8 3XW',
    lat: 51.542135,
    lng: -0.071475,
  },
  {
    address: ', , undefined, undefined, united kingdom, ',
    lat: null,
    lng: null,
  },
  {
    address:
      'The Pavilion, Kings Centre, Moat Road, east grinstead, west sussex, united kingdom, RH19 3LN',
    lat: 51.128075,
    lng: -0.010679,
  },
  {
    address:
      'St Andrews Parish Church, Bostall Heath, undefined, Kent, united kingdom, DA7 5SF',
    lat: 51.4757344,
    lng: 0.1254897,
  },
  {
    address:
      'Unit 5, Blenhein Business Centre, 22 Locks Lane, undefined, surrey, united kingdom, CR4 2JX',
    lat: 51.4099133,
    lng: -0.1613414,
  },
  {
    address:
      'Age concerns building, Haywards Heath, undefined, undefined, united kingdom, ',
    lat: 50.9991543,
    lng: -0.1188189,
  },
  {
    address:
      '341, The Imperium House, birmingham, undefined, united kingdom, DY4 7PP',
    lat: 52.5249127,
    lng: -2.0476229,
  },
  {
    address:
      '142, Blackfen Road, undefined, undefined, united kingdom, DA15 8PT',
    lat: 51.4514227,
    lng: 0.0957995,
  },
  {
    address:
      '1st Floor, 75-85 Summerstown,  Tooting, london, london, united kingdom, SW17 0BQ',
    lat: 51.4319422,
    lng: -0.1842942,
  },
  {
    address:
      'Fairstead Community Centre,  Fairstead Estate, Kings Lynn, Norfolk, united kingdom, PE30 4SR',
    lat: 52.752723,
    lng: 0.4384131,
  },
  {
    address:
      'ASTHON PLAYING FIELD, 598 CHIGWELL ROAD, ,woodford bridge,, undefined, united kingdom, IG8 8AA',
    lat: 51.6055422,
    lng: 0.0503839,
  },
  {
    address:
      'Walthamstow School for Girls, Church Hill, undefined, london, united kingdom, E17 9RZ',
    lat: 51.5851026,
    lng: -0.013507,
  },
  {
    address:
      'Jack Cornwell Community Centre, Jack Cornwell Street, london, london, united kingdom, E12  5NN',
    lat: 51.5523841,
    lng: 0.0621887,
  },
  {
    address:
      'Darenth community primary school, Green street, green road, undefined, Kent, united kingdom, DA2 8DH',
    lat: 51.4153277,
    lng: 0.2634251,
  },
  {
    address:
      'Windmill Hill, Golf Centre, Bletchly, undefined, united kingdom, MK3 7RB',
    lat: 51.996499,
    lng: -0.770832,
  },
  {
    address:
      '5 to 7, Peter Street, bury, greater manchester, united kingdom, BL9 6AB',
    lat: 53.5974219,
    lng: -2.2886828,
  },
  {
    address:
      'Marksgate Community Complex, Rose Lane, romford, undefined, united kingdom, RM6  5HP',
    lat: 51.584385,
    lng: 0.1357024,
  },
  {
    address:
      '157A Stoke Newington Road, Stoke Newington, london, undefined, united kingdom, N16 8BP',
    lat: 51.5570168,
    lng: -0.0748052,
  },
  {
    address:
      '234, Dallow Learning Community Centre, luton,,, undefined, united kingdom, LU1 1TB',
    lat: 51.8831301,
    lng: -0.440234,
  },
  {
    address:
      'Vine Centre Ward Hatch, Mowbray Road, harlow, essex, united kingdom, CM20 2NB',
    lat: 51.7798226,
    lng: 0.119848,
  },
  {
    address:
      ' Great Pandon Community Center, Harlow, harlow, essex, united kingdom, CM18 6YJ',
    lat: 51.7552447,
    lng: 0.0903445,
  },
  {
    address:
      'TMS Tuition & Resource Centre, Bradley House, 194, romford, essex, united kingdom, RM7 0JU',
    lat: 51.5656541,
    lng: 0.1753034,
  },
  {
    address:
      '101 – 105 Portland Road, South Norwood, undefined, london, united kingdom, SE25 4UN',
    lat: 51.3968845,
    lng: -0.069746,
  },
  {
    address:
      'GORTON EDUCATION VILLAGE, 50 WEMBLEY ROAD, manchester, undefined, united kingdom, M18 7DT',
    lat: 53.4504585,
    lng: -2.1752055,
  },
  {
    address:
      'West End, Youth Community Centre, blackburn, lancashire, united kingdom, BB2 2ED',
    lat: 53.7466036,
    lng: -2.4841799,
  },
  {
    address:
      'Orford Community Hub, Festival Avenue, warrington, undefined, united kingdom, WA2 9EP',
    lat: 53.4102453,
    lng: -2.5785355,
  },
  {
    address:
      'Redemption Place(Ark Royal), 1  Lathbury Road, manchester, greater manchester, united kingdom, M9 5SY',
    lat: 53.5053443,
    lng: -2.2173563,
  },
  {
    address:
      'Feltham Community College, Browells Lane, feltham, middlesex, united kingdom, TW13 7EF',
    lat: 51.4444236,
    lng: -0.4007317,
  },
  {
    address:
      'St. Mary’s Neighbourhood Centre, Upper Street, london, london, united kingdom, N1 2TX',
    lat: 51.538728,
    lng: -0.101902,
  },
  {
    address:
      '32, Niddrie Mains Road, Edinburgh, edinburgh, midlothian, united kingdom, EH16 4BG',
    lat: 55.9323611,
    lng: -3.1395803,
  },
  {
    address:
      'Bushmead Community Hub, Hancock drive, luton,,, undefined, united kingdom, LU2 7SF',
    lat: 51.9087154,
    lng: -0.4124325,
  },
  {
    address:
      'Lewis Suite, Resource for London, london, london, united kingdom, N7 6PA',
    lat: 51.5556887,
    lng: -0.1160094,
  },
  {
    address:
      'Was formerly @  The Bell Hotel Epping, Nil, undefined, undefined, united kingdom, Nil',
    lat: 51.6921501,
    lng: 0.09623,
  },
  {
    address:
      'Chapel town library, 1 Nether Ley Avenue, sheffield, south yorkshire, united kingdom, S57db',
    lat: 53.4618131,
    lng: -1.4693503,
  },
  {
    address:
      'Knebworth Village Hall, Park Lane, knebworth, hertfordshire, united kingdom, SG3 6PD',
    lat: 51.8666255,
    lng: -0.1890659,
  },
  {
    address:
      'Brushes Community Centre, West Quadrant (Firth Park), sheffield, south yorkshire, united kingdom, S5 6QE',
    lat: 53.4173206,
    lng: -1.4496788,
  },
  {
    address:
      'Claremont Centre, 24-27 White lion street, london, london, united kingdom, N1 9PD',
    lat: 51.5325774,
    lng: -0.1083723,
  },
  {
    address: '8A Queensbury street, , london, london, united kingdom, N1 3AD',
    lat: 51.5398675,
    lng: -0.0938038,
  },
  {
    address:
      'Tom Allen Centre, Grove Crescent Road, undefined, london, united kingdom, E15 1BJ',
    lat: 51.5446485,
    lng: 0.0034328,
  },
  {
    address:
      'Allestree Memorial Hall, 1 Cornhill, derby, undefined, united kingdom, DE22 2GG',
    lat: 52.9541573,
    lng: -1.484858,
  },
  {
    address:
      'Phoenix Fitness Centre & Janet Adegoke Swimming Pool, Bloemfontein Road, london, london, united kingdom, W12 7DB',
    lat: 51.5126357,
    lng: -0.2363301,
  },
  {
    address:
      'The Vale Community Centre,  1 Pentland Road, london, london, united kingdom, NW6 5RT',
    lat: 51.5317261,
    lng: -0.1963337,
  },
  {
    address:
      'North Romford Community Centre, Clock house Lane, romford, essex, united kingdom, RM5 3QJ',
    lat: 51.6005556,
    lng: 0.1636111,
  },
  {
    address:
      'The Rampant Lion Complex, 17, manchester, undefined, united kingdom, M14 5BZ',
    lat: 53.4565443,
    lng: -2.21563,
  },
  {
    address:
      'Fred Paton Centre, 19A Carrington Street, undefined, glasgow lanarkshire, united kingdom, G4 9AJ',
    lat: 55.8715374,
    lng: -4.2718153,
  },
  {
    address:
      '6, Union Place, wisbech, cambridgeshire, united kingdom, PE13 1EH',
    lat: 52.664521,
    lng: 0.1596953,
  },
  {
    address: '56, Stock Street, paisley, undefined, united kingdom, PA2 6NL',
    lat: 55.8350765,
    lng: -4.4222983,
  },
  {
    address:
      'Unit 9, St Marks Business Centre, corby, undefined, united kingdom, NN18 8LY',
    lat: 52.4858213,
    lng: -0.6854708,
  },
  {
    address:
      '39, Elmsleigh Drive, southend-on-sea, undefined, united kingdom, SS9 3DW',
    lat: 51.5497223,
    lng: 0.6550726,
  },
  {
    address:
      'Straight Road Community Centre, 329 Straight Road, Colchester, essex, united kingdom, CO3 9EF',
    lat: 51.8745404,
    lng: 0.857893,
  },
  {
    address:
      'Gadebride community centre,,  Galley Hill, hemel hempstead, hertfordshire, united kingdom, HP1 3LG',
    lat: 51.7645268,
    lng: -0.4899275,
  },
  {
    address:
      'The Discovery Centre, Jenkins Lane, barking, essex, united kingdom, IG11 0AD',
    lat: 51.525654,
    lng: 0.079986,
  },
  {
    address:
      'Holiday Inn, Rochester, Chatham, undefined, united kingdom, ME5 9SF',
    lat: 51.3490037,
    lng: 0.5075434,
  },
  {
    address:
      'BICC Church Hall, 12, Arnott Close, london, london, united kingdom, SE28 8BG',
    lat: 51.5040624,
    lng: 0.1167065,
  },
  {
    address:
      'KURDISH AND TURKISH COMMUNITY CENTRE, 31-33 DALSTON LANE, london, london, united kingdom, E8 3SF',
    lat: 51.5463912,
    lng: -0.0724289,
  },
  {
    address:
      'Trinity Praise Centre, Charles Street, ipswitch, suffolk, united kingdom, IP1 3JG',
    lat: 52.0607894,
    lng: 1.152895,
  },
  {
    address: '49, Riverside Gardens, undefined, london, united kingdom, W6 9LE',
    lat: 51.4918113,
    lng: -0.2333276,
  },
  {
    address:
      'Goldcrest Youth Centre, 1 Goldcrest Way, croydon, surrey, united kingdom, CR0 0PL',
    lat: 51.3507391,
    lng: -0.0107365,
  },
  {
    address:
      'Willow Rooms Function Suite,, Willow Street (Off Mawnev Road), romford, essex, united kingdom, RM7 7JH',
    lat: 51.5793341,
    lng: 0.1719905,
  },
  {
    address: 'King William Walk, , ,london,, london, united kingdom, SE10 9HU',
    lat: 51.4814572,
    lng: -0.008305,
  },
  {
    address:
      'Rear of 2A, Bensham Manor Road, croydon, surrey, united kingdom, CR7 7AA',
    lat: 51.3948183,
    lng: -0.0938161,
  },
  {
    address:
      'Jeneses Church Hall, 45 Linden Road,, bognor regis, west sussex, united kingdom, PO21  2AP',
    lat: 50.7877567,
    lng: -0.6796138,
  },
  {
    address:
      'The Pump House, Market Place, Faringdon, undefined, united kingdom, SN7 7HL',
    lat: 51.6585374,
    lng: -1.58344,
  },
  {
    address: 'Unit 71A, BSS House, swindon, wiltshire, united kingdom, SN2 2PJ',
    lat: 51.572004,
    lng: -1.8046352,
  },
  {
    address:
      'Oak Grove Leisue Centre, Brick Hill, milton keynes, buckinghamshire, united kingdom, MK10 9JQ.',
    lat: 52.0387102,
    lng: -0.7094044,
  },
  {
    address:
      '113 Harts Lane, Barking, barking, essex, united kingdom, IG11 8LY',
    lat: 51.5418223,
    lng: 0.0702491,
  },
  {
    address:
      '1-7 Jamesson Road, Winton, bournemouth, dorset, united kingdom, BH9 2QD',
    lat: 50.7478391,
    lng: -1.878324,
  },
  {
    address:
      'Function Hall Kangley Bridge, Leisure Centre, Kangley Bridge, london, london, united kingdom, SE26 5AQ',
    lat: 51.426396,
    lng: -0.0354711,
  },
  {
    address:
      'Woodside Community Centre, 48, The Brow, watford, hertfordshire, united kingdom, WD25 7ET',
    lat: 51.6963463,
    lng: -0.3989627,
  },
  {
    address:
      'Warmsworth Community Centre, Low Road West Doncaster, undefined, undefined, united kingdom, DN4 9LE',
    lat: 53.4983904,
    lng: -1.1785526,
  },
  {
    address:
      'Abundant Life Arena, Dock Road, chatham, undefined, united kingdom, ME4 4TX',
    lat: 51.3873989,
    lng: 0.5247593,
  },
  {
    address:
      'Green Park Conference Centre, 100 Londwater Avenue, reading, west berkshire, united kingdom, RG2 6GP',
    lat: 51.4263155,
    lng: -0.9873945,
  },
  {
    address:
      'Banchory Primary School Hall, Arbaedie Road, banchory, aberdeenshire, united kingdom, AB31 4EH',
    lat: 57.0532078,
    lng: -2.4938547,
  },
  {
    address:
      'Mercure Hotel, 119 NORFOLK STREET, sheffield, south yorkshire, united kingdom, S1 2JE',
    lat: 53.3799033,
    lng: -1.4689211,
  },
  {
    address:
      '367A FOOTSCRAY ROAD, NEW ELTHAM, ,london,, london, united kingdom, SE9 2DR',
    lat: 51.4385244,
    lng: 0.0714748,
  },
  {
    address:
      'St Mary’s Guildhall, 385 High Street, lincoln, lincolnshire, united kingdom, LN5 7SJ',
    lat: 53.2222234,
    lng: -0.5440016,
  },
  {
    address:
      '2 – 4 Mill Street, Luton, luton, bedfordshire, united kingdom, LU1 2NA',
    lat: 51.8826616,
    lng: -0.417908,
  },
  {
    address:
      'Malmarc house, 116 Dewsbury Road, leeds, west yorkshire, united kingdom, LS11  6XD',
    lat: 53.7808586,
    lng: -1.5448145,
  },
  {
    address:
      '59/59A Plumstead Common Road, Plumstead, london, london, united kingdom, SE18 3AS',
    lat: 51.4822084,
    lng: 0.0701965,
  },
  {
    address:
      'Chadwick Hall, Headington, oxford, oxfordshire, united kingdom, OX3 7QH',
    lat: null,
    lng: null,
  },
  {
    address:
      'Pinetress Community Centre, Pinehurst Road, swindon, wiltshire, united kingdom, SN2 1QR',
    lat: 51.5815272,
    lng: -1.7800011,
  },
  {
    address:
      'Methodist Community Hall, Ablewell Street (Close to Jet Petrol Station), walsall, west midlands, united kingdom, WS1 2EQ',
    lat: null,
    lng: null,
  },
  {
    address:
      'Vue Cinema, Fesival Place, basingstoke, hampshire, united kingdom, RG21 7BB',
    lat: 51.265345,
    lng: -1.0839684,
  },
  {
    address:
      '138/140,  Upper Wickham Lane, kent, kent, united kingdom, DA16 3DP',
    lat: 51.4671363,
    lng: 0.1102624,
  },
  {
    address:
      'Thistle Hill Community Centre, 2 Lauren Road, Minster, sheerness, kent, united kingdom, ME12 3FG',
    lat: 51.4137597,
    lng: 0.7982088,
  },
  {
    address:
      '5 Congreve Street, Off Old kent Rd, london, london, united kingdom, SE17 1TJ',
    lat: 51.4913802,
    lng: -0.0837441,
  },
  {
    address:
      'Unit 2, Liley Street, rochdale, greater manchester, united kingdom, OL16  2AS',
    lat: 53.615235,
    lng: -2.14855,
  },
  {
    address:
      'Central Methodist Church Hall, Hargreaves Street, burnley, lancashire, united kingdom, BB11 1DU',
    lat: 53.7883151,
    lng: -2.2446102,
  },
  {
    address: '1a, walton road, harrow, middlesex, united kingdom, HA1 4UX',
    lat: 51.592157,
    lng: -0.3440059,
  },
  {
    address:
      'Unit 4 & 5 Victoria Wharf, Victoria Road, dartford, kent, united kingdom, DA1 5AJ',
    lat: 51.4487737,
    lng: 0.2176503,
  },
  {
    address:
      '186A Deptford High Street, Deptford, london, london, united kingdom, SE8 3PR',
    lat: 51.4804435,
    lng: -0.0260908,
  },
  {
    address:
      'Mount joy Centre Mountjoy Street, Newport South Wales, undefined, newport south, united kingdom, NP20 2FA',
    lat: 51.5806492,
    lng: -2.9914685,
  },
  {
    address:
      '11 Lime Close, Romford, undefined, ,essex,, united kingdom, RM7 7BD',
    lat: 51.5801744,
    lng: 0.164683,
  },
  {
    address:
      'Kings Centre, Simpson Road, milton keynes, buckinghamshire, united kingdom, MK63 AL',
    lat: 52.0144384,
    lng: -0.7160769,
  },
  {
    address:
      'King George V1, Day Centre, windsor, undefined, united kingdom, SL4 5AR',
    lat: 51.4803715,
    lng: -0.6209128,
  },
  {
    address: 'Shop 294, Brixton Road, london, london, united kingdom, SW9 6AG',
    lat: 51.4703143,
    lng: -0.1126865,
  },
  {
    address:
      'Perseid School, Middleton Road, undefined, undefined, united kingdom, SM4 6RU',
    lat: 51.389979,
    lng: -0.1957881,
  },
  {
    address:
      'Vinters Park community centre, 3, Maidstone, undefined, united kingdom, ME14 5QF',
    lat: 51.2815429,
    lng: 0.5413547,
  },
  {
    address:
      'Thomas Tallis School, No154,  Kidbrooke Park Road, london,,, london, united kingdom, SE3 9PX',
    lat: 51.4657889,
    lng: 0.026622,
  },
  {
    address:
      'Marriott Bexleyheath Hotel, 1 Broadway Bexleyheath, bexleyheath, kent, united kingdom, DA6 7JZ',
    lat: 51.4545302,
    lng: 0.1520873,
  },
  {
    address:
      'Eaglestone Activity Centre, 8 Harrier Court, milton keynes, buckinghamshire, united kingdom, MK6 5BZ',
    lat: 52.0320559,
    lng: -0.7407531,
  },
  {
    address:
      'Diamond Dancentre, 61/63 North Lane Aldershot, aldershot, surrey, united kingdom, GU12 4QF',
    lat: null,
    lng: null,
  },
  {
    address:
      'Guildford grove Primary School, Southway, guildford, surrey, united kingdom, GU2 8YD',
    lat: 51.243909,
    lng: -0.60928,
  },
  {
    address:
      'Westlands Grove, Portchester, fareham, fareham fareham, united kingdom, PO16 9AD',
    lat: 50.8445608,
    lng: -1.1341255,
  },
  {
    address:
      'Swale Community Centres, The Phoenix House, sittingbourne, kent, united kingdom, ME10 4BX',
    lat: 51.338874,
    lng: 0.734932,
  },
  {
    address:
      'Unit 14 Leegate Centre, Leyland Road, london, london, united kingdom, SE12 8SS',
    lat: 51.4557652,
    lng: 0.0120834,
  },
  {
    address:
      'White Oak Leisure Centre, Hilda May Avenue, swanley, kent, united kingdom, BR8  7BT',
    lat: 51.401401,
    lng: 0.170641,
  },
  {
    address:
      'Room 3, 63 Streatham High Road, london, london, united kingdom, SW16 1PN',
    lat: 51.4316457,
    lng: -0.129037,
  },
  {
    address:
      '30 Wagner Street, Off Ilderton Road, london, london, united kingdom, SE15 1NN',
    lat: 51.4790626,
    lng: -0.0543675,
  },
  {
    address:
      'Townley Grammar School for Girls, Townley Road, bexleyheath, kent, united kingdom, DA6 7AB',
    lat: 51.4505044,
    lng: 0.1401541,
  },
  {
    address:
      'Stonecross Lea Community Centre,, Stonecross Lea, Chatham, kent, kent, united kingdom, ME5 0BL',
    lat: 51.3658993,
    lng: 0.5416808,
  },
  {
    address:
      'Rehoboth House, Brent Way, undefined, ,,kent, united kingdom, DA2 6DA',
    lat: 51.4439217,
    lng: 0.2375259,
  },
  {
    address:
      '149 Milton Road, Gravesend, gravesend, kent, united kingdom, DA12 2RG',
    lat: 51.4415769,
    lng: 0.3727605,
  },
  {
    address:
      'Trinity Methodist Church, Mannock Drive, loughton, essex, united kingdom, IG10 2JD',
    lat: 51.654948,
    lng: 0.082868,
  },
  {
    address:
      'Comfort Inn, Station Street, birmingham, west midlands, united kingdom, B5  4DY',
    lat: 52.4767866,
    lng: -1.8981551,
  },
  {
    address:
      '3 catterick road, lords wood, undefined, ,kent,, united kingdom, me58px',
    lat: 51.3374772,
    lng: 0.5473439,
  },
  {
    address:
      '41 Byron Street, Eccles, salford, west midlands, united kingdom, M30 0GS',
    lat: 53.4847839,
    lng: -2.3491859,
  },
  {
    address:
      'Village Hall Boreham, Main Road, boreham, essex, united kingdom, CM3 3JD',
    lat: 51.7629613,
    lng: 0.5447605,
  },
  {
    address:
      'St. Mellitus centre for Deaf people, 12, Oakhurst street, southend on sea, essex, united kingdom, SS2 5DT',
    lat: 51.4934324,
    lng: -0.1876346,
  },
  {
    address:
      'Harris C of E Academy, Harris Drive, rugby, undefined, united kingdom, CV22 6EA',
    lat: 52.3628462,
    lng: -1.2710545,
  },
  {
    address:
      '9-15 Galena Street, Hammersmith, london,,, london, united kingdom, W6  0LT',
    lat: 51.4934815,
    lng: -0.2328551,
  },
  {
    address:
      '106 Doreen Ramsey Court, The Cut, london, london, united kingdom, SE1 8LN',
    lat: 51.5026632,
    lng: -0.1088995,
  },
  {
    address: ', , undefined, undefined, united kingdom, ',
    lat: null,
    lng: null,
  },
  {
    address:
      '346, Uxbridge Street, burton, staffordshire, united kingdom, DE14 3JS',
    lat: 52.8018156,
    lng: -1.6386792,
  },
  {
    address:
      'Boys Brigade Hall, 174b Broadway, bexleyheath, kent, united kingdom, DA6 7BT',
    lat: 51.4574791,
    lng: 0.1416396,
  },
];
