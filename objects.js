var playlist = {
  artist: "songTitle"
};
const artistName = "artist"

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle});
  
}

function removeFromPlaylist(playlist, artistName) {
 delete playlist.[artist];
 return playlist;
}