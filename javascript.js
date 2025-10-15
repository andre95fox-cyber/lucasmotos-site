// 🕒 Configura o horário de funcionamento
const ABRE = 8;   // 8h da manhã
const FECHA = 18; // 18h (6h da tarde)

// Exibe o banner "Aberto / Fechado"
function mostrarStatusAbertura() {
  const agora = new Date();
  const hora = agora.getHours();
  const aberto = hora >= ABRE && hora < FECHA;

  const banner = document.createElement('div');
  banner.style.cssText = `
    position: fixed;
    top: 0; left: 0; right: 0;
    padding: 10px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    z-index: 9999;
    color: #fff;
    background: ${aberto ? '#28a745' : '#c0392b'};
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  `;
  banner.textContent = aberto
    ? '🏍️ Estamos ABERTOS — Venha nos visitar!'
    : '😴 Estamos FECHADOS — Atendimento das 08:00 às 18:00';

  document.body.prepend(banner);
  document.body.style.paddingTop = banner.offsetHeight + 'px';
}

// 💬 Cria o botão flutuante do WhatsApp
function criarBotaoWhatsApp() {
  const numero = '5593991093861'; // Seu número (formato internacional)
  const mensagem = encodeURIComponent('Olá! Vim pelo site da Lucas Motos e gostaria de agendar um serviço.');
  const link = `https://wa.me/${numero}?text=${mensagem}`;

  const botao = document.createElement('a');
  botao.href = link;
  botao.target = '_blank';
  botao.innerHTML = `
    <svg width="22" height="22" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 .5A15.47 15.47 0 0 0 3.43 24.07L2 30l6.1-1.59A15.46 15.46 0 1 0 16 .5ZM8.88 26.32l-.39.11 1.08-3.9-.25-.39A12.92 12.92 0 1 1 16 28.93a12.83 12.83 0 0 1-7.12-2.1Zm11.13-7.49c-.31-.16-1.84-.9-2.13-1s-.5-.16-.72.16-.82 1-1 1.2-.38.23-.7.08a10.64 10.64 0 0 1-3.13-1.93 11.7 11.7 0 0 1-2.17-2.67c-.23-.39 0-.59.17-.74s.39-.43.58-.65a2.32 2.32 0 0 0 .39-.65.67.67 0 0 0-.03-.63c-.08-.16-.72-1.72-1-2.36s-.53-.54-.72-.55h-.62a1.17 1.17 0 0 0-.84.39A3.52 3.52 0 0 0 8 12.73a6.07 6.07 0 0 0 .31 2.27 13.69 13.69 0 0 0 2.17 4.07 15.29 15.29 0 0 0 5.28 4.6 9.1 9.1 0 0 0 4.56 1.41 3.9 3.9 0 0 0 2.52-.82 2.92 2.92 0 0 0 .61-1.86c.08-.16.03-.31-.14-.39Z"/>
    </svg>
    WhatsApp
  `;

  botao.style.cssText = `
    position: fixed;
    right: 20px;
    bottom: 20px;
    background: #25D366;
    color: #fff;
    font-weight: bold;
    border-radius: 50px;
    padding: 14px 20px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 6px 18px rgba(0,0,0,0.3);
    z-index: 9999;
    transition: transform 0.2s;
  `;

  botao.addEventListener('mouseenter', () => botao.style.transform = 'scale(1.1)');
  botao.addEventListener('mouseleave', () => botao.style.transform = 'scale(1)');

  document.body.appendChild(botao);
}

// 🚀 Executa tudo quando o site carregar
window.addEventListener('load', () => {
  mostrarStatusAbertura();
  criarBotaoWhatsApp();
});
