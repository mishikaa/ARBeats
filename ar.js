const guitar = new Howl({
        src: ['./audio/guitar.mp3'],
        volume: 1,
        loop: true,
        autoplay: false
      });
      
      const mic = new Howl({
        src: ['./audio/mic.mp3'],
        volume: 1,
        loop: true,
        autoplay: false
      });
      
      const drums = new Howl({
        src: ['./audio/drums.mp3'],
        volume: 1,
        loop: true,
        autoplay: false
      });
      
      const piano = new Howl({
        src: ['./audio/piano.mp3'],
        volume: 1,
        loop: true,
        autoplay: false
      });
      
      const audioMap = {
        'guitar': guitar,
        'drums': drums,
        'piano': piano,
        'mic': mic
      };
      
      function playAll() {
        guitar.play();
        mic.play();
        drums.play();
        piano.play();
      }
      
      function stopAll() {
        guitar.stop();
        mic.stop();
        drums.stop();
        piano.stop();
      }
      
      window.onload = function () {
        const arMarkers = document.getElementsByClassName('ar-marker');
      
        Array.from(arMarkers).forEach(function (arMarker) {
          const name = arMarker.getAttribute('name');
          const imageElement = arMarker.querySelector('a-image');
      
          arMarker.addEventListener('markerFound', function () {
            audioMap[name].mute(false);
            if (imageElement) {
              imageElement.setAttribute('color', 'green');
            }
          });
      
          arMarker.addEventListener('markerLost', function () {
            audioMap[name].mute(true);
            if (imageElement) {
              imageElement.setAttribute('color', 'red');
            }
          });
        });
      
        document.getElementById('guitarVolume').addEventListener('input', function (event) {
          guitar.volume(event.target.value);
        });
      
        document.getElementById('micVolume').addEventListener('input', function (event) {
          mic.volume(event.target.value);
        });
      
        document.getElementById('drumsVolume').addEventListener('input', function (event) {
          drums.volume(event.target.value);
        });
      
        document.getElementById('pianoVolume').addEventListener('input', function (event) {
          piano.volume(event.target.value);
        });
      };
      