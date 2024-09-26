document.addEventListener('keydown', function(event) {
    const video = document.querySelector('video');
    if (!video) return; // Wenn kein Video geladen ist, beenden
  
    const volumeBarContainer = document.querySelector('.volume-bar-container-3YdaF1');
    const volumeBarProgressBackground = document.querySelector('.volume-bar-progress-background-o2G-h1');
    const volumeBarProgress = document.querySelector('.volume-bar-progress-31Mnq3');
  
    // Setze die Breite des Containers auf 64 Pixel
    if (volumeBarContainer) {
        volumeBarContainer.style.width = '64px';
        volumeBarContainer.style.overflow = 'visible'; // Setze overflow sichtbar
    }
  
    // Setze die Sichtbarkeit des Fortschrittsbalkenhintergrunds auf immer sichtbar
    if (volumeBarProgressBackground) {
        volumeBarProgressBackground.style.opacity = '1'; // Setze Opacity immer auf 1
    }
  
    // Aktualisiere die Lautstärkebalken
    function updateVolumeBar(newVolume) {
        // Sicherstellen, dass der neue Lautstärkewert zwischen 10 und 100 liegt
        newVolume = Math.max(10, Math.min(100, Math.round(newVolume)));
  
        // Aktualisieren der aria-valuenow-Eigenschaft und des data-volume-Attributs
        if (volumeBarContainer) {
            volumeBarContainer.setAttribute('aria-valuenow', newVolume);
        }
        if (volumeBarProgressBackground) {
            volumeBarProgressBackground.setAttribute('data-volume', newVolume);
        }
  
        // Berechnen und Aktualisieren der Breite des Fortschrittsbalkens
        if (volumeBarContainer && volumeBarProgress) {
            const maxWidth = 64;
            let progressWidth = (newVolume / 100) * maxWidth;
            volumeBarProgress.style.width = `${progressWidth}px`;
        }
    }
  
    function toggleMute() {
        video.muted = !video.muted;
        const muteButton = document.querySelector('.mute-button-2GO3av .zdfplayer-button-icon');
        if (muteButton) {
            muteButton.classList.toggle('zdfplayer-icon-mute');
            muteButton.classList.toggle('zdfplayer-icon-unmute');
            muteButton.closest('button').setAttribute('aria-label', video.muted ? 'Ton anschalten' : 'Ton abschalten');
        }
    }
  
    function toggleFullscreen() {
        const videoContainer = document.querySelector('.zdfplayer');
        if (!videoContainer) return;
  
        if (!document.fullscreenElement) {
            if (videoContainer.requestFullscreen) {
                videoContainer.requestFullscreen();
            } else if (videoContainer.mozRequestFullScreen) {
                videoContainer.mozRequestFullScreen();
            } else if (videoContainer.webkitRequestFullscreen) {
                videoContainer.webkitRequestFullscreen();
            } else if (videoContainer.msRequestFullscreen) {
                videoContainer.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }
  
    function togglePlayPause() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
  
    function adjustVolume(change) {
        video.volume = Math.max(0, Math.min(1, video.volume + change));
        updateVolumeBar(video.volume * 100); // Update volume bar
    }
  
    // Initialisiere die Breite des Fortschrittsbalkens zu Beginn
    updateVolumeBar(video.volume * 100);
  
    switch (event.key.toLowerCase()) {
        case 'm':
            toggleMute();
            break;
        case 'f':
            toggleFullscreen();
            break;
        case 'p':
            togglePlayPause();
            break;
        case 'arrowleft':
            video.currentTime = Math.max(0, video.currentTime - 10);
            break;
        case 'arrowright':
            video.currentTime = Math.min(video.duration, video.currentTime + 10);
            break;
        case 'u':
            adjustVolume(0.1);
            break;
        case 'd':
            adjustVolume(-0.1);
            break;
    }
  });  