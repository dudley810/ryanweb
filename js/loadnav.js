function LoadNav() {
    document.getElementById("navbar").innerHTML =
        '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">' +
        '<a class="navbar-brand" href="index.html">RYANS APP</a>' +
        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">' +
        ' <span class="navbar-toggler-icon"></span>' +
        '</button>' +
        ' <div class="collapse navbar-collapse" id="navbarText">' +
        '    <ul class="navbar-nav mr-auto">' +
        '       <li class="nav-item">' +
        '          <a class="nav-link" href="index.html">Home</a>' +
        '      </li>' +
        '      <li class="nav-item">' +
        '          <a class="nav-link" href="contactus.html">Contact</a>' +
        '      </li>' +
        '      <li class="nav-item">' +
        '          <a class="nav-link" href="about.html">About Us</a>' +
        '      </li>' +
        '   </ul>' +
        ' </div>' +
        '</nav>';
};