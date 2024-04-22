
function changeMusic(url) {
    console.log(url)
    document.querySelector('source').src = url;
    audio=document.querySelector('audio')
    audio.load(); 
    audio.play();
}

music_sring = {
    'spring (it\'s a big world outside)': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/hhlbuspwgr/05.%20Spring%20%28It%27s%20A%20Big%20World%20Outside%29.mp3',
    'spring (the valley comes alive)': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/viurfyaaom/06.%20Spring%20%28The%20Valley%20Comes%20Alive%29.mp3',
    'spring (wild horseradish jam)': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/qclkngdejf/07.%20Spring%20%28Wild%20Horseradish%20Jam%29.mp3'
}

music_summer = {
    'summer (nature\'s crescendo)': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/poxfndvnil/13.%20Summer%20%28Nature%27s%20Crescendo%29.mp3',
    'summer (the sun can bend an orange sky)': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/sqxrdhfbrj/14.%20Summer%20%28The%20Sun%20Can%20Bend%20An%20Orange%20Sky%29.mp3',
    'summer (tropicala)': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/sqxrdhfbrj/14.%20Summer%20%28The%20Sun%20Can%20Bend%20An%20Orange%20Sky%29.mp3'
}

music_fall = {
    'fall (the smell of mushrooms)': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/ecenqqbsuz/20.%20Fall%20%28The%20Smell%20Of%20Mushroom%29.mp3',
    'fall (ghost synths)': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/fnwrvmhcmq/21.%20Fall%20%28Ghost%20Synth%29.mp3',
    'fall (raven\'s descent)': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/qsyxwjqfxt/22.%20Fall%20%28Raven%27s%20Descent%29.mp3',
}

music_winter = {
    'winter (nocturne of ice)': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/lpzsraipjf/27.%20Winter%20%28Nocturne%20Of%20Ice%29.mp3',
    'winter (the wind can be still)': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/juceqdjmqp/28.%20Winter%20%28The%20Wind%20Can%20Be%20Still%29.mp3',
    'winter (ancient)': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/pjvlswgqqq/29.%20Winter%20%28Ancient%29.mp3',
}

music_seasons = { 'spring': music_sring, 'summer': music_summer, 'fall': music_fall, 'winter': music_winter }

music_event = {
    'stardew valley overture': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/fmyoveazpm/01.%20Stardew%20Valley%20Overture.mp3',
    'cloud country': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/vfmyluhnoj/02.%20Cloud%20Country.mp3',
    'fun festival': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/rbfgjddhza/10.%20Fun%20Festival.mp3',
    'dance of the moonlight jellies': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/wrcbahlldl/19.%20Dance%20Of%20The%20Moonlight%20Jellies.mp3',
    'the mermaid song': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/xbepbdtxrk/35.%20Mermaid%20Song.mp3',
}


music_place = {
    'pelican town': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/hftzorweyk/08.%20Pelican%20Town.mp3',
    'the library and museum': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/vxqntqmmtc/23.%20The%20Library%20And%20Museum.mp3',
    'country shop': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/fylybqaqnq/32.%20Country%20Shop.mp3',
    'calico desert': 'https://dl.vgmdownloads.com/soundtracks/stardew-valley/etzczccwor/36.%20Calico%20Desert.mp3'
}

ms = document.getElementById('music_seasons')
console.log(ms)
me = document.getElementById('music_event')
mp = document.getElementById('music_place')

// for (var key in music_event) {
// console.log(music_event[key])
// }

// append music to div me
for (var key in music_event) {
    var button = document.createElement('button');
    button.innerText = key;
    button.value = music_event[key];
    button.addEventListener('click', function () {
        changeMusic(this.value);
    });
    me.appendChild(button);
}

// // append music to div mp
for (var key in music_place) {
    var button = document.createElement('button');
    button.innerText = key;
    button.value = music_place[key];
    button.addEventListener('click', function () {
        changeMusic(this.value);
    });
    mp.appendChild(button);
}

// // append music to div ms
for (var key in music_seasons) {
    for (var key2 in music_seasons[key]) {
        var button = document.createElement('button');
        button.innerText = key2;
        button.value = music_seasons[key][key2];
        button.addEventListener('click', function () {
            changeMusic(this.value);
        });
        ms.appendChild(button);
    }
}
