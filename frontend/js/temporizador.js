let total = 0;
let timer = null;

const audio = new Audio("audio/den-den-mushi meloboom.mp3");
function startTimer() {
  if (timer) return;

  // Se ainda não começou, pega o valor dos inputs
  if (total === 0) {
    const hrs = parseInt(document.getElementById("hours").value) || 0;
    const mins = parseInt(document.getElementById("min").value) || 0;
    const secs = parseInt(document.getElementById("seg").value) || 0;
    total = hrs * 3600 + mins * 60 + secs;
  }

  timer = setInterval(() => {
    if (total <= 0) {
      clearInterval(timer);
      timer = null;
      audio.play().catch((erro) => {
        console.error("Erro ao tocar áudio:", erro);
      });
      return;
    }

    total--;
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;

    document.getElementById("display").innerText =
      `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;

  audio.pause();
}

function resetTimer() {
  pauseTimer();
  total = 0;
  document.getElementById("display").innerText = "00:00:00";
}
