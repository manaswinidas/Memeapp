$(() => {
  $('#upload-btn').on('click', () => {
    $('#file-chooser').click();
  });

  $('#file-chooser').on('change', (event) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const canvas = $('#canvas')[0];
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = function() {
          ctx.drawImage(img,0,0);
          ctx.fillStyle = '#fff';
          ctx.font = '40pt impact';
          ctx.lineWidth = 3;
          ctx.fillText("Hello, World!",50,100);
          ctx.fillText("Hello, World!",50,500);
      };
      img.src = event.target.result;

    };
    reader.readAsDataURL(event.target.files[0]);
  });
});
