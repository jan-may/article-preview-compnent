document.getElementById("share").addEventListener("click", myFunction)


function myFunction() {
    console.log("test");
    var x = document.getElementById("share-wrapper");
    console.log(x);
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }
