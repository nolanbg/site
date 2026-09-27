const tracks = [
    {
        title: "Señor de las Caídas",
        artist: "Delblot, Hazard Boy",
        file: "assets/audio/Señor de las Caídas - Hazard Boy, Delblot - SoundLoadMate.com.mp3", // Replace with the path to your audio file
        image: "assets/images/biden blast cover.png" // Path to your first image
    },
    {
        title: "Synecdoche",
        artist: "Delblot, Hazard Boy",
        file: "assets/audio/Synecdoche - Delblot, Hazard Boy - SoundLoadMate.com.mp3", // Replace with the path to your audio file
        image: "assets/images/synecdocheart.0.png" // Path to your second image
    },
    {
        title: "Amaranth",
        artist: "Delblot, Ayamsine, Hazard Boy",
        file: "assets/audio/Ayamsine & Delblot - Amaranth (Hazard Boy Remix) - Hazard Boy - SoundLoadMate.com.mp3", // Replace with the path to your audio file
        image: "assets/images/Ayamsine & Delblot - Amaranth (Hazard Boy Remix) - Hazard Boy - SoundLoadMate.com.jpeg" // Path to your second image
    },
    {
        title: "Wait For Me",
        artist: "Delblot, Hazard Boy",
        file: "assets/audio/6wait 4 me.wav", // Replace with the path to your audio file
        image: "assets/images/knifetreecover.png" // Path to your second image
    },
    // Add more tracks as needed
];

const audioPlayer = document.getElementById('audioPlayer');
const playlistElement = document.getElementById('playlist');
let currentTrackIndex = 0;

// Function to load and play a specific track
function loadTrack(index) {
    const track = tracks[index];
    audioPlayer.src = track.file;
    // 2. Update the image source here
    if (albumArt && track.image) {
        albumArt.src = track.image;
        albumArt.alt = `Album art for ${track.title}`;
    }

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
