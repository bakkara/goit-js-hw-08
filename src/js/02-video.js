import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const KEY_CURRENT_TIME = "videoplayer-current-time";

const iframe = document.querySelector('iframe')

const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));


function onPlay({ seconds }) {
  localStorage.setItem(KEY_CURRENT_TIME, seconds);
}
// const savedTime = localStorage.getItem(KEY_CURRENT_TIME);
// if (savedTime !== null) {
//   player.setCurrentTime(savedTime);
// } else {
//   player.setCurrentTime(0);
// }
// player.setCurrentTime(localStorage.getItem(KEY_CURRENT_TIME)) ?? player.setCurrentTime(0)

player.setCurrentTime(localStorage.getItem(KEY_CURRENT_TIME) || 0)