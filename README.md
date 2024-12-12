# ZDF Keys

Ein Chrome Addon. Steuert den Player der ZDFmediathek mit der Tastatur.

## Funktionen

- **Lautstärkeregler**: Ermöglicht die Steuerung der Lautstärke mit „U“ (lauter) und „D“ (leiser).
- **Mute/Unmute**: Schaltet den Ton mit „M“ stumm oder wieder ein.
- **Fullscreen umschalten**: Mit der Taste „F“ kann zwischen Vollbildmodus und normaler Ansicht gewechselt werden.
- **Play/Pause**: Startet oder pausiert die Wiedergabe mit der Taste „P“.
- **Video spulen**: Mit den Pfeiltasten ← und → kann 10 Sekunden zurück- oder vorgespult werden.
- Visualisiert die Lautstärke mit einer Fortschrittsanzeige.

## Code-Details

### Hauptmethoden

- `toggleMute()`:
  - Schaltet den Ton ein oder aus und aktualisiert die Darstellung der Mute-Schaltfläche.

- `toggleFullscreen()`:
  - Aktiviert oder deaktiviert den Vollbildmodus des Videoplayers.

- `togglePlayPause()`:
  - Startet oder pausiert die Videowiedergabe.

- `adjustVolume(change)`:
  - Passt die Lautstärke des Videos an und aktualisiert die Lautstärkeanzeige entsprechend.

- `updateVolumeBar(newVolume)`:
  - Visualisiert die aktuelle Lautstärke mit einer Fortschrittsanzeige.
 
## Lizenz

Dieses Projekt steht unter der MIT-Lizenz.

## Fell free to send pull requests or make forks and have fun
