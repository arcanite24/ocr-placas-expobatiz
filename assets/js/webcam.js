var video = document.querySelector('#webcam');

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

if (navigator.getUserMedia) {
  navigator.getUserMedia({video: true}, function (stream) {
    video.src = window.URL.createObjectURL(stream);
  }, function (error) {
    console.log(error);
  });
}
