var playlist = {
  artist: "songTitle"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle});
  
}

function removeFromPlaylist(playlist, artistName) {
 Object.assign({}, playlist, { [artistName]: songTitle});
 delete playlist.artistName;
 return playlist;
}