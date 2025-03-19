const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function resetNull() {
    dead.textContent = 0;
    lost.textContent = 0;
  }

for (let i = 1; i < 10; i++) {
  const hole = document.getElementById(`hole${i}`);
  hole.onclick = () => {

    let holeHasMole = hole.classList.contains( 'hole_has-mole' )
    
    if (Number(dead.textContent) === 3) {
        alert('Вы победили!')
        resetNull()
    } else if (holeHasMole) {
        dead.textContent++;
      }

    if (Number(lost.textContent) === 4) {
        alert('Вы проиграли!');
        resetNull()
    } else if (!holeHasMole ) {
        lost.textContent++;
      }
  };
}