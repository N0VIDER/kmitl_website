document.addEventListener('DOMContentLoaded', function() {
    var backgroundVideo = document.getElementById('backgroundVideo');
    backgroundVideo.playbackRate = 0.8; // Slow down the video to half its original speed

    document.getElementById('catalogueButton').addEventListener('click', function() {
        console.log("Button clicked");
        var img = document.createElement('img');
        img.src = 'catalogue.png'; // Replace with your image path
        document.body.appendChild(img);
    });
});
