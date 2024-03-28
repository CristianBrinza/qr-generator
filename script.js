function htmlEncode(value) {
  return $('<div/>').text(value).html();
}

$(function() {
  $("#generate").click(function() {
    var qrCodeURL = "https://chart.googleapis.com/chart?cht=qr&chl=" + htmlEncode($("#content").val()) + "&chs=540x540&chld=L|0";
    $(".qr-code").attr("src", qrCodeURL);

    // Set the href for the download link and make it visible
    $("#download").attr("href", qrCodeURL).show();
  });
});
