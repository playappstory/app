function verificarNumero() {
  const numeroInput = document.getElementById("numero").value.trim();
  const numeroFormatado = numeroInput.replace(/\D/g, '');

  if (numeroFormatado.length < 10 || numeroFormatado.length > 13) {
    alert("Número inválido. Tente no formato (11) 91234-5678");
    return;
  }

  const numeroCompleto = numeroFormatado.startsWith("55") ? numeroFormatado : "55" + numeroFormatado;

  document.getElementById("loading").style.display = "block";
  document.getElementById("resultado").style.display = "none";
  document.getElementById("downloadArea").style.display = "none";

  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("num-exibido").innerText = numeroInput;

    const avatarUrl = `https://api.dicebear.com/7.x/thumbs/svg?seed=${numeroFormatado.slice(-6)}`;
    document.getElementById("fotoPerfil").src = avatarUrl;

    mostrarMensagens();
  }, 3000);
}

function mostrarMensagens() {
  const box = document.getElementById("whatsappBox");
  box.innerHTML = `
    <div class="msg received">Oi, tudo bem?</div><br/>
    <div class="msg sent">Tudo sim! E você?</div><br/>
    <div class="msg received">Pode me mandar aquelas fotos?</div>
  `;
  document.getElementById("downloadArea").style.display = "block";
}
