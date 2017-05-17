var video = document.querySelector('#webcam');

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

if (navigator.getUserMedia) {
  navigator.getUserMedia({video: true}, function (stream) {
    video.src = window.URL.createObjectURL(stream);
  }, function (error) {
    console.log(error);
  });
}

$(function () {

  $('#form-upload').submit(function (e) {
    e.preventDefault();
    $(this).ajaxSubmit({
      error: function (err) {
        console.log(err);
      },
      success: function (data) {
        console.log(data);
        $('#output-placa').text(data.output.results[0].plate);
      }
    });
    return false;
  });

  $('#input-file').change(function () {
    /*
    var formData = new FormData($('#form-upload')[0]);
    console.log(formData);
    $.ajax({
        url: '/leer',
        data: formData,
        cache: false,
        contentType: 'multipart/form-data;boundary=abc',
        processData: false,
        type: 'POST'
    }).done(function (data) {
      console.log(data);
    });
    */
    $('#form-upload').submit();
  });

});
