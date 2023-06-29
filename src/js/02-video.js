import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');

const KEY_CURRENT_TIME = "videoplayer-current-time";

const iframe = document.querySelector('iframe')

const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));


function onPlay({ seconds }) {
  localStorage.setItem(KEY_CURRENT_TIME, seconds);
}

player.setCurrentTime(localStorage.getItem(KEY_CURRENT_TIME)) ?? player.setCurrentTime(0)