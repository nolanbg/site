const tracks = [
    {
        title: "Song Title 1",
        artist: "Artist Name 1",
        file: "Señor de las Caídas - Hazard Boy, Delblot - SoundLoadMate.com.mp3" // Replace with the path to your audio file
    },
    {
        title: "Song Title 2",
        artist: "Artist Name 2",
        file: "Synecdoche - Delblot, Hazard Boy - SoundLoadMate.com.mp3" // Replace with the path to your audio file
    }
    // Add more tracks as needed
];

const audioPlayer = document.getElementById('audioPlayer');
const playlistElement = document.getElementById('playlist');
let currentTrackIndex = 0;

// Function to load and play a specific track
function loadTrack(index) {
    const track = tracks[index];
    audioPlayer.src = track.file;
    audioPlayer.play();
    updatePlaylistView(index);
}

// Function to update the view (e.g., highlight the current song)
function updatePlaylistView(activeIndex) {
    playlistElement.innerHTML = ''; // Clear existing list
    tracks.forEach((track, index) => {
        const li = document.createElement('li');
        li.textContent = `${track.title} - ${track.artist}`;
        if (index === activeIndex) {
            li.classList.add('active-song'); // Add a CSS class for styling
        }
        // Add click event to switch tracks manually
        li.addEventListener('click', () => {
            currentTrackIndex = index;
            loadTrack(currentTrackIndex);
        });
        playlistElement.appendChild(li);
    });
}

// Event listener for when the current song ends
audioPlayer.addEventListener('ended', () => {
    currentTrackIndex++;
    // Loop back to the first song if at the end of the playlist
    if (currentTrackIndex >= tracks.length) {
        currentTrackIndex = 0;
    }
    loadTrack(currentTrackIndex);
});

// Initialize the playlist and load the first track
loadTrack(currentTrackIndex);