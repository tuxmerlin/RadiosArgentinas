/*#########################################################################
#                                                                         #
#   Simple script for testing the scriptable service browser              #
#   by creating a simple static browser with some cool radio              #
#   streams. URLs shamelessly stolen from Cool-Streams.xml.               #
#                                                                         #
#   Copyright                                                             #
#   (C) 2007, 2008 Nikolaj Hald Nielsen  <nhnFreespirit@gmail.com>        #
#   (C)       2008 Peter ZHOU <peterzhoulei@gmail.com>                    #
#   (C)       2008 Mark Kretschmann <kretschmann@kde.org>                 #
#                                                                         #
#   This program is free software; you can redistribute it and/or modify  #
#   it under the terms of the GNU General Public License as published by  #
#   the Free Software Foundation; either version 2 of the License, or     #
#   (at your option) any later version.                                   #
#                                                                         #
#   This program is distributed in the hope that it will be useful,       #
#   but WITHOUT ANY WARRANTY; without even the implied warranty of        #
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         #
#   GNU General Public License for more details.                          #
#                                                                         #
#   You should have received a copy of the GNU General Public License     #
#   along with this program; if not, write to the                         #
#   Free Software Foundation, Inc.,                                       #
#   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.         #
##########################################################################*/

function Station( name, url, website )
{
    this.name = name;
    this.url = url;
    this.website = website;
}

// Radios recompiladas por Gonzalo Brusco. 

// Comentarios generales acerca de las radios:
// Las radios cuyos reproductores son basados en flash generalmente no pueden ser reproducidos con Amarok debido a que son streams del tipo rtmp. No hay solución para esto.
// Hay algunos streams (particularmente, todos los que salen del servidor 186.153.1.2) que cada vez que uno reproduce el stream desde la página genera una especie de hash. 
// Este hash aparentemente es temporal y al tiempo (de no visitar la página supongo) queda invalidado. Es por eso que todos los streams de este tipo fueron comentados.
// Desconzco si este problema tiene solución. Creería que no. Parece estar hecho a propósito para evitar que dejemos de visitar su web.

// Quedan muchisimas más radios. Pero por ahora puse las más conocidas. Hubiera querido que fueran más, pero muchas no funcionan o no son compatibles con Amarok. 

var stationArray = new Array (
    new Station( "Metro (FM 95.1 Buenos Aires)",            "mmsh://201.212.5.144/metro?MSWMExt=.asf", "http://www.metro951.com/"),
    //new Station( "Rock & Pop (FM 95.9 Buenos Aires)",     "mmsh://201.212.5.144/audio959-rockandpop?MSWMExt=.asf", "http://www.fmrockandpop.com/"),
    new Station( "Mega (FM 98.3 Buenos Aires)",             "mmsh://mega.telecomdatacenter.com.ar/mega?MSWMExt=.asf", "http://mega.10musica.com/" ),
    new Station( "Vale (FM 97.5 Buenos Aires)",             "mmsh://200.43.193.190/vale?MSWMExt=.asf", "http://www.radio-vale975.com.ar/" ),
    new Station( "Radio Mitre (AM 790 Buenos Aires)",       "http://buecrplb01.cienradios.com.ar/Mitre790.mp3", "http://www.cienradios.com.ar/argentina/Mitre_AM790/home" ),
    new Station( "Radio Mitre (AM 810 Cordoba)",            "http://buecrplb01.cienradios.com.ar/mitre810.mp3", "http://www.cienradios.com.ar/argentina/Mitre_Cordoba/home" ),
    new Station( "La 100 (FM 99.9 Buenos Aires)",           "http://buecrplb01.cienradios.com.ar/la100.mp3", "http://www.cienradios.com.ar/argentina/La_100/home" ),
    new Station( "Mía (FM 104.1 Córdoba)",                  "http://buecrplb01.cienradios.com.ar/Mia.mp3", "http://www.cienradios.com.ar/argentina/mia/home" ),
    new Station( "FM Del Lago (FM 92.1 Bariloche)",         "http://buecrplb01.cienradios.com.ar/Del_Lago_64.mp3", "http://www.cienradios.com.ar/argentina/FM_Del_Lago/home" ),
    new Station( "Radio X (FM 88.3 Mar del Plata)",         "http://buecrplb01.cienradios.com.ar/Radio_X_64.mp3", "http://www.cienradios.com.ar/argentina/Radio_X/home" ),
    new Station( "Radio 10 (AM 710 Buenos Aires)",          "http://www.radio10.am:8000/radio10.mp3", "http://radio10.infobae.com/" ),
    new Station( "Radio Rivadavia (AM 630 Buenos Aires)",   "http://streamer5.towebs.com:56661/rivadavia.mp3", "http://www.rivadavia.com.ar/" ),    
    new Station( "Pop Radio (FM 101.5 Buenos Aires)",       "mmsh://200.43.193.190/popradio?MSWMExt=.asf", "http://www.pop-radio.com.ar/" ),
    new Station( "Radio TKM (FM 103.7 Buenos Aires)",       "mms://200.43.193.190/radiotkm", "http://radiotkm.mundotkm.com/" ),
    //new Station( "Radio UBA (FM 87.9 Buenos Aires)",      "mmsh://186.153.1.2:80/5daaqaibaqmuai2ec0modyeiesmge0qi?MSWMExt=.asf", "http://www.uba.ar/radiouba/" ),
    new Station( "Radio Continental (AM 590  Buenos Aires)","http://208.80.54.20/CONTINENTALAAC", "http://www.continental.com.ar/" ),
    new Station( "Radio Nacional (AM 870 Buenos Aires)",    "http://37.59.19.104:8010/;stream.nsv", "http://www.radionacional.com.ar/" ),
    //new Station( "Radio La Red (AM 910 Buenos Aires)",    "rtmp://vivolared.multimediosamerica.com.ar/streamlared", "http://www.radiolared.multimediosamerica.com.ar/home" ), // Amarok no soporta rtmp
    //new Station( "Radio Del Plata (AM 1030 Buenos Aires)","mmsh://186.153.1.2/5daaqaibaqmuai2ewzmeeyeie0mityii?MSWMExt=.asf", "http://www.amdelplata.com/" ),
    new Station( "Aspen (FM 102.3 Buenos Aires)",           "mms://200.89.168.16/aspen", "http://www.fmaspen.com/"),
    new Station( "ESPN (FM 107.9 Buenos Aires)",            "mms://a183.l1318236841.c13182.l.lm.akamaistream.net/D/183/13182/v0001/reflector:36841", "http://www.espn1079.fm/")
    //new Station( "La 2x4 (FM 97.2 Buenos Aires)",         "mmsh://186.153.1.2/5daaqaibaqmuai2efcmodyeie0meeyei?MSWMExt=.asf", "http://www.la2x4.gov.ar/")
);

function RadiosArgentinas()
{
    ScriptableServiceScript.call( this, "Radios Argentinas", 1, "Colección de las mejores radios argentinas", "Colección de las mejores radios argentinas", false );
}

function onPopulating( level, callbackData, filter )
{
    Amarok.debug( " Populating station level..." );
    //add the station streams as leaf nodes
    for ( i = 0; i < stationArray.length; i++ )
    {
        item = Amarok.StreamItem;
        item.level = 0;
        item.callbackData = "";
        item.itemName = stationArray[i].name;
        item.playableUrl = stationArray[i].url;
        item.infoHtml = stationArray[i].website;
	item.artist = "Online Radio";
        script.insertItem( item );
    }
    script.donePopulating();
}

script = new RadiosArgentinas();
script.populate.connect( onPopulating );
