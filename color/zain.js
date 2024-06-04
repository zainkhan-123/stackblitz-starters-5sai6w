const zain = document.querySelectorAll('#yellow');
const body = document.querySelector('body');

zain.forEach(function (yellow) {
  console.log(yellow);
  yellow.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id == 'ellow') {
      body.style.backgroundColor = 'red';
    } else {
      body.style.backgroundColor = 'green';
    }
  });
});
// this is the code for the color changer