const createCapturePhoto = function (width, canvasHeight) {
  let height = 0;
  let streaming = false;
  let showing = false;

  const $video = document.getElementById("video");
  const $canvas = document.getElementById("canvas-capture");
  const $photoBtn = document.getElementById("photo-btn");
  const $capturePhotoModal = document.getElementById("capture-photo-modal");
  const $cancelBtn = document.getElementById("cancel-btn");
  const btn = document.getElementById("take-btn");
  const $counter = document.getElementById("counter");

  $canvas.width = width;
  $canvas.height = canvasHeight;

  $photoBtn.addEventListener("click", function (ev) {
    if (!showing) {
      showing = true;
      $capturePhotoModal.style.display = "block";
    }
  });
  $cancelBtn.addEventListener("click", function (ev) {
    if (showing) {
      showing = false;
      $capturePhotoModal.style.display = "none";
    }
  });

  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: false,
    })
    .then(function (stream) {
      video.srcObject = stream;
      video.play();
    })
    .catch(function (err) {
      console.log("An error occurred: " + err);
    });

  $video.addEventListener(
    "canplay",
    function (ev) {
      if (!streaming) {
        height = $video.videoHeight / ($video.videoWidth / width);
        if (isNaN(height)) {
          height = width / (16 / 9);
        }

        $video.setAttribute("width", width);
        $video.setAttribute("height", height);
        streaming = true;
      }
    },
    false
  );

  /*

  function takepicture() {
    //  var context = canvas.getContext("2d");
    if (width && height) {
      //    context.drawImage(video, 0, 0, width, height);
      //  var data = canvas.toDataURL("image/png");
    }
  }
  */
  const getPhoto = function () {
    showing = false;
    $capturePhotoModal.style.display = "none";
    var context = $canvas.getContext("2d");
    context.drawImage($video, 0, 0, width, height);
    var src = $canvas.toDataURL("image/png");
    return src;
  };

  return {
    btn,
    getPhotoRetarded: function (callback) {
      $counter.style.display = "grid";
      let counter = 3;
      $counter.innerHTML = counter;
      let interval = setInterval(() => {
        if (counter > 1) {
          counter--;
          $counter.innerHTML = counter;
        } else {
          callback(getPhoto());
          $counter.style.display = "none";
          clearInterval(interval);
        }
      }, 1000);
    },
  };
};

export default createCapturePhoto;
