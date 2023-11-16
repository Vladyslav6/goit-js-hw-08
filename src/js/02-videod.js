import Player from '@vimeo/player';

import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    console.log(data);
  }, 1000)
);
const TimePlayer = localStorage.getItem('videoplayer-current-time') || 0;
player.setCurrentTime(TimePlayer);

// const onPlay = function (data) {
//   throttle(
//     localStorage.setItem('videoplayer-current-time', data.seconds),
//     console.log(data)
//   );
// };
// // player.on('timeupdate', onPlay);
// player.on('timeupdate', throttle(onPlay, 2000));
