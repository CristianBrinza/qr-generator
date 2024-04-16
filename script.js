function htmlEncode(value) {
  return $('<div/>').text(value).html();
}

function downloadImage(url, filename) {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      // Create a URL for the blob object
      let blobUrl = window.URL.createObjectURL(blob);

      // Set the download link href to the blob URL and simulate a click to download
      let downloadLink = document.getElementById('download');
      downloadLink.href = blobUrl;
      downloadLink.download = filename;
      downloadLink.style.display = 'block';  // Ensure the download link is visible
    })
    .catch(error => console.error('Error downloading the image:', error));
}

$(function() {
  $("#generate").click(function() {
    var content = $("#content").val();
    var qrCodeURL = "https://quickchart.io/chart?cht=qr&chl=" + htmlEncode(content) + "&chs=540x540&chld=L|0";
    $(".qr-code").attr("src", qrCodeURL);

    // Generate the downloadable link
    downloadImage(qrCodeURL, 'QRCode.png');
  });
});
