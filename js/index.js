
$("#pop").on("click", function() {
    $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
    $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
 });

 $(function () {
    $(".pop").on("click", function () {
      $(".imagepreview").attr("src", $(this).find("img").attr("src"));
      $("#imagemodal").modal("show");
    });
  });

function closeWin() { 
    var potfolio= window();
    potfolio.close(); 
} 