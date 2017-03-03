/* ................  .. .. ..   ... .    .                .       .       ..........................
............................. .....      .. .. .. . ...  . . .    .. .. ............................
....................................................................................................
........................ ..... . ................................... ... ..   ......................
......................+??++++++?+,...... .. ......... .. .........,+??++++++?+. ....................
.................. ,?+=~~:::::~~=+?~.   .. ....... ......... ...~?+=~~:::::~~=+?: ..................
.................,?+~::,,......,,:~+?:  ..     .    .      . .:?+~:,,.......,::=+?, ................
................~?=~:,...........,,:=++  .  ... .  . ....  ..++=:,,...........,,~=?~................
.......... ....++~:,.. ............,,~+?.............. .....?+~:,...............,:~++. .............
..............++~:,.. .... ..  .. ..,,~+?..  . .... . .....?=~,,....  . .........,:~++..............
............ ++~:,....................,~+?. .. ...........?=~,...... .. ..........,:~++ ............
............~+~:,......................,~++..    ..     .++~,,....   .    .........,:=+~ ...........
...........,?=:,.... .. .  .. .. . ....,:=?:  ..    .   :?~:,.. .    . .. ..........,:=?............
...........++~,... .....................,:=?. ...... ...?=:,..  .... ............. ..,~+?...........
..........:+~:,.... .............. ......,~+~ .........=+~,,.........................,:~?, .........
..........?=~,...........................,:=?..........?=:,...........................,~=?..........
.........,?=:,.. ........... .............,~+~ .......~+~:............................,:=?, ........
.........++~,.. ........... ... ....  ....,:=+  .... .?=:,..........   . ..............,~+=.........
.........?=:,...,=++~,....................,:=?.......,?=:,...:=?+=,....................,:=? ........
.........?=:,+8D8D8888D8$..... ............:~+:......,+~:.?8DD88888D87.. ..............,:=?,........
........:+~=D8I~+O88888DDDO......... ......,~+=......=+~?D$~:=O888888DDO................:~?~ .......
........~+?DO,...:8NDD8DDDDD~ .............,~++......++7D+....:DNNND8888D:..............,~+=........
........++DD?....,8NNNNND88DD~  .. .... ...,:=?......?ID$.  ..~DNNNNND888D:.............,~++ .......
........+O88O:..,ZNNNNNNND88DD.............,:=?......IDD8~...~8NNNNNNND8888.............,~+? .......
........?DD8NNDDNNNNNNNNNN888D+............,:=?......7DDDN8ODNNNNNNNNNN8OO8~ ...........,~+? .......
........?D8DNNNNNNNNNNNNNNDOO87............,:=?......$DDNNNNNNNNNNNNNNNNOOOI............,~+? .......
........+D8DNNNNNNNNNNNNNNNZOO7............,:=+......$D8NNNNNNNNNNNNNNNNZZO7............,~++........
........=D8DNNNNNNNNNNNNNND$Z8?............,:++......ID8DNNNNNNNNNNNNNNN7$O+............,~+= .......
........:888NNNNNNNNNNNNNM$7$8:............,~++ .....=D88NNNNNNNNNNNNNMZ7$Z.............:~+~ .......
.........$8OONNNNNNNNNNNM$I7Z7.............,~+: .....:$88ONNNNNNNNNNNM$?I$I............,:=?,........
.........?OOZ$8NMNNNNNM8??I$O.............,:=?.......,?8OOZDMMNNNNNM8???7$.............,:=?.........
.........++$OZ$77$ZZ$I???IZI..............,~=+ ...... ?=Z8Z$77$ZZ7?+??IZ?..............,~+= ........
.........,?==OZ$77IIIII7Z$................:~+~........~+~+8O$77IIIII7Z$...............,:=?, ........
..........++~,.IZZZZZ$I,.. ..............,:=?. ........?=:,.?ZOOOZ$?.. ...............,~=?..........
..........:?~:,..........................,~+=..........=+~:..........................,:~?, .........
...........++~,.........................,:=?............?=:,.. ......................,~+?...........
...........,?=:,.......................,:~?:............~+~:,.......................,:=?. ..........
............~?~:,......................,~++..............++~,,.. ..................,:~+~ ...........
............ ++~:,.. .................,~=?................?+~,... ................,:~++.............
..............?+~:,... ..............,~=?..................?=~,,.. ..............,:~++..............
...............++~:,...............,:~+?. ..................?+~:,...............,:~++  .............
................=?=~,,............,:=++......................?+~:,,.... ......,,~=?= ...............
................ ,?+=~:,.......,,:~+?:  ..................... :?+~::,,.....,,:~=+?. ................
...................:?+=~~::::::~=+?=............................=?+=~~:::::~~=+?: ..................
......................=??++++++?+,................................,???+++++??=......................
....................... ..,,,.. .................................... .,,,,..........................
..................................... ..............................................................
....................................................................................................
..........................................................................     . .      . . .  . .*/

const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');

const pusher = new Pusher({
  appId: '308897',
  key: '376e191843d5a9dfbb33',
  secret: '676e4b3284f800aa87a7',
  cluster: 'eu',
  encrypted: true
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/pusher/auth', function(req, res) {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});

const port = process.env.PORT || 5000;
app.listen(port);
