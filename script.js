// --- 1. TRÊS PERSONAGENS PIXEL ART ---
const canvasBoneca = document.getElementById('canvas-boneca');
const ctxBoneca = canvasBoneca ? canvasBoneca.getContext('2d') : null;

const personagensConfig = [
    {
        nome: 'Maga Pixel',
        cores: {
            'P': '#1e162b',
            'R': '#5b2c6f',
            'L': '#7d3c98',
            'V': '#c0392b',
            'C': '#271407',
            'B': '#cf8f56',
            'M': '#fadbd8',
            'O': '#17202a'
        },
        parada: [
            "..........PP............",
            ".........PRLP...........",
            "........PRLLRP..........",
            ".......PRLLLRP..........",
            "......PRLLLLLRP.........",
            ".....PRLLLLLLLRP........",
            "....PRLLLLLLLLLRP.......",
            "...PRRRRRRRRRRRRRP......",
            "...PVVVVVVVVVVVVVVP.....",
            "..PRRRRRRRRRRRRRRRP.....",
            ".PPPPPPPPPPPPPPPPPPP....",
            ".....PCCCBBBBBBCCP......",
            ".....PCBBOBBBBOOBCP.....",
            ".....PCCCBBBBBBBCP......",
            "....PCCCCBBBBBBCCP......",
            "....PP.CCCCCCCCCC.PP....",
            "....PP.PRRRRRRRRP.PBBP..",
            "......PRLRRLVVLRRP.PBBP.",
            "......PRLRRLVVLRRP..PP..",
            "......PRRLLLLLLRRP......",
            ".....PRRLLLLLLLLRRP.....",
            ".....PRRVVVVVVVVRRP.....",
            "......PP.PP...PP.PP.....",
            "......PP.PP...PP.PP....."
        ],
        andando: [
            "..........PP............",
            ".........PRLP...........",
            "........PRLLRP..........",
            ".......PRLLLRP..........",
            "......PRLLLLLRP.........",
            ".....PRLLLLLLLRP........",
            "....PRLLLLLLLLLRP.......",
            "...PRRRRRRRRRRRRRP......",
            "...PVVVVVVVVVVVVVVP.....",
            "..PRRRRRRRRRRRRRRRP.....",
            ".PPPPPPPPPPPPPPPPPPP....",
            ".....PCCCBBBBBBCCP......",
            ".....PCBBOBBBBOOBCP.....",
            ".....PCCCBBBBBBBCP......",
            "....PCCCCBBBBBBCCP......",
            "....PP.CCCCCCCCCC.PP....",
            "....PP.PRRRRRRRRP..PBBP.",
            "......PRLRRLVVLRRP.PBBP.",
            "......PRLRRLVVLRRP..PP..",
            "......PRRLLLLLLRRP......",
            ".....PRRLLLLLLLLRRP.....",
            ".....PRRVVVVVVVVRRP.....",
            "....PP.PP.......PP.PP...",
            "....PP.PP.......PP.PP..."
        ]
    },
    {
        nome: 'Maria',
        cores: {
            'P': '#1a1514',
            'C': '#4a2e1b',
            'H': '#6e472b',
            'B': '#cf8f56',
            'S': '#d99b72',
            'R': '#f28b82',
            'O': '#141110',
            'W': '#e5e7eb',
            'G': '#cbd5e1',
            'M': '#222428',
            'J': '#7ea1c4',
            'L': '#a5c2de',
            'D': '#537496',
            'U': '#5b2c6f',
            'V': '#7d3c98',
            'F': '#ffd166'
        },
        parada: [
            "...............PP...............",
            "..............PVVP..............",
            ".............PVVVVP.............",
            "............PVVUUUUP............",
            "...........PVVVUUUUUP...........",
            "..........PVVVVUUUUUUP..........",
            ".........PVVVVVUUUUUUUP.........",
            "........PFFFFFFFFFFFFFFP........",
            "......PPPPPPPPPPPPPPPPPPPP......",
            ".........PCCHHHHHHHHCCP.........",
            "........PCCHHCCCCCCCHHCP........",
            "........PCCHCCBBBBCCCHCP........",
            ".......PCCHCCBBBBBBCCCHCP.......",
            ".......PCCHCBBBBBBBBCHCCP.......",
            ".......PCCHBBBBBBBBBBHCCP.......",
            "......PPCCHBOBBBBBBOBHCCP......",
            "......PCCHBRRBBBBBBBRRHCCP......",
            "......PCCHHBBBBBBBBBBHHCCP......",
            ".....PPCCHH.PSSSSSSP.HHCCPP.....",
            ".....PCCH.PPMWWWWWWMPP.HCCP.....",
            "....PCCH.PMMMWWWWWWMMMP.HCCP....",
            "....PCCH.PMMMWWGGWWMMMP.HCCP....",
            "....PCCH.PMMMWWGGWWMMMP.HCCP....",
            "....PCCH.PMMMWWWWGJJMMP.HCCP....",
            ".....PCP.PMMPWWGJJJJMMP.PCP.....",
            ".........PBBPJJJJJJJPP..PBBP....",
            "..........PP.PJJDDJJP....PP.....",
            ".............PJJDDJJP...........",
            "............PJLJDDJLJP..........",
            "............PJLJPPJLJP..........",
            "...........PJLJJP.PJJLP.........",
            "...........PJLJJP.PJJLP........."
        ],
        andando: [
            "...............PP...............",
            "..............PVVP..............",
            ".............PVVVVP.............",
            "............PVVUUUUP............",
            "...........PVVVUUUUUP...........",
            "..........PVVVVUUUUUUP..........",
            ".........PVVVVVUUUUUUUP.........",
            "........PFFFFFFFFFFFFFFP........",
            "......PPPPPPPPPPPPPPPPPPPP......",
            ".........PCCHHHHHHHHCCP.........",
            "........PCCHHCCCCCCCHHCP........",
            "........PCCHCCBBBBCCCHCP........",
            ".......PCCHCCBBBBBBCCCHCP.......",
            ".......PCCHCBBBBBBBBCHCCP.......",
            ".......PCCHBBBBBBBBBBHCCP.......",
            "......PPCCHBOBBBBBBOBHCCP......",
            "......PCCHBRRBBBBBBBRRHCCP......",
            "......PCCHHBBBBBBBBBBHHCCP......",
            ".....PPCCHH.PSSSSSSP.HHCCPP.....",
            ".....PCCH.PPMWWWWWWMPP.HCCP.....",
            "....PCCH.PMMMWWWWWWMMMP.HCCP....",
            "....PCCH.PMMMWWGGWWMMMP.HCCP....",
            "....PCCH.PMMMWWGGWWMMMP.HCCP....",
            "....PCCH.PMMMWWWWGJJMMP.HCCP....",
            ".....PCP.PMMPWWGJJJJMMP.PCP.....",
            "..........PBBPJJJJJJPP..PBBP....",
            "...........PP.PJJDDJP....PP.....",
            "..............PJJDDJP...........",
            "............PPJLJ.PJLJPP........",
            "...........PJLJJP..PJJLLP.......",
            "..........PJLJJLP...PJLJLP......",
            ".........PJLJJLP.....PJLJLP....."
        ]
    },
    {
        nome: 'Gran Mago',
        escalaExtra: 1.12,
        cores: {
            'P': '#111820',
            'R': '#1e3a4c',
            'L': '#2d5368',
            'C': '#cbd5e1',
            'G': '#8b95a5',
            'B': '#e5a97c',
            'O': '#18181b',
            'V': '#8a4b24',
            'M': '#fde047',
            'Y': '#f59e0b'
        },
        parada: [
            ".......PPPPPP...........",
            "......PRLLLRRP..........",
            ".....PRLLLLLRRP.........",
            ".....PRLLLLLRRP.........",
            "....PRRRLLLLLRRP........",
            "...PRRRLPPLLLLLLRP......",
            "..PRRRLPPPLLLLLLLLRP....",
            ".PRRRRRRRRRRRRRRRRRRP...",
            "PPPPPPPPPPPPPPPPPPPP....",
            "......PCBBBBCP.PBBP.....",
            "......PCBOOBCP.PYYYP....",
            "......PCCCCCP.PYMMMYP...",
            "......PCCGGCP.PYMMMYP...",
            "......PCCGGCP..PYYYP....",
            ".....PRRGGGRRP.PVVP.....",
            "...PRRLLLLLLRRPPVVP.....",
            "..PRRLLLLLLRRP.PVVP.....",
            "P.PRRLLLLLLRRP.PVVP.....",
            "PBPRRLLLLLLRRP.PVVP.....",
            "PPPRRLLLLLLRRP.PVVP.....",
            ".PRRLLLPPLLRRP.PVVP.....",
            ".PRRLLLPPLLRRP.PVVP.....",
            ".PPRRPPPPPRRPP.PVVP.....",
            "..PPPPPPPPPPPP.PPPP....."
        ],
        andando: [
            ".......PPPPPP...........",
            "......PRLLLRRP..........",
            ".....PRLLLLLRRP.........",
            ".....PRLLLLLRRP.........",
            "....PRRRLLLLLRRP........",
            "...PRRRLPPLLLLLLRP......",
            "..PRRRLPPPLLLLLLLLRP....",
            ".PRRRRRRRRRRRRRRRRRRP...",
            "PPPPPPPPPPPPPPPPPPPP....",
            "......PCBBBBCP.PBBP.....",
            "......PCBOOBCP.PYYYP....",
            "......PCCCCCP.PYMMMYP...",
            "......PCCGGCP.PYMMMYP...",
            "......PCCGGCP..PYYYP....",
            ".....PRRGGGRRP.PVVP.....",
            "...PRRLLLLLLRRPPVVP.....",
            "..PRRLLLLLLRRP.PVVP.....",
            "P.PRRLLLLLLRRP.PVVP.....",
            "PBPRRLLLLLLRRP.PVVP.....",
            "PPPRRLLLLLLRRP.PVVP.....",
            ".PRRLLLPPLLRRP.PVVP.....",
            ".PRRLLLPPLLRRP..PVVP....",
            ".PPRRPPPPPRRPP..PVVP....",
            "..PPPPPPPPPPPP..PPPP...."
        ]
    }
];

let personagemSelecionadoIndex = 0;
let estaAndando = false;
let olhandoEsquerda = false;
let contadorFrame = 0;

function desenharMatrizNoContexto(ctxAlvo, larguraCanvas, config, frameNum, animarPassos, virarEsquerda) {
    if (!ctxAlvo || !config) return;
    ctxAlvo.clearRect(0, 0, larguraCanvas, larguraCanvas);

    const alternarPasso = animarPassos && (Math.floor(frameNum / 6) % 2 === 1);
    const matriz = alternarPasso ? config.andando : config.parada;
    const tamanhoGrade = matriz.length;
    const multiplicador = config.escalaExtra || 1;
    const escala = (larguraCanvas / tamanhoGrade) * multiplicador;

    const larguraTotalSprite = matriz[0].length * escala;
    const alturaTotalSprite = tamanhoGrade * escala;
    const offsetY = larguraCanvas - alturaTotalSprite;
    const offsetX = (larguraCanvas - larguraTotalSprite) / 2;

    const deveVirar = virarEsquerda ? !config.inverterDirecao : Boolean(config.inverterDirecao);

    ctxAlvo.save();
    if (deveVirar) {
        ctxAlvo.translate(larguraCanvas, 0);
        ctxAlvo.scale(-1, 1);
    }

    for (let y = 0; y < matriz.length; y++) {
        const linha = matriz[y];
        for (let x = 0; x < linha.length; x++) {
            const char = linha[x];
            if (char !== '.' && config.cores[char]) {
                ctxAlvo.fillStyle = config.cores[char];
                ctxAlvo.fillRect(
                    Math.round(offsetX + x * escala),
                    Math.round(offsetY + y * escala),
                    Math.ceil(escala),
                    Math.ceil(escala)
                );
            }
        }
    }

    if (config.cores['M'] && config.nome === 'Maga Pixel') {
        const pulsoY = Math.round(Math.sin(frameNum * 0.12) * 1);
        const baseX = 22;
        const baseY = 16 + pulsoY;

        ctxAlvo.fillStyle = config.cores['M'];
        const pixelsBrilho = [
            [baseX, baseY],
            [baseX, baseY - 1],
            [baseX, baseY + 1],
            [baseX - 1, baseY],
            [baseX + 1, baseY]
        ];

        pixelsBrilho.forEach(([px, py]) => {
            if (px >= 0 && px < tamanhoGrade && py >= 0 && py < tamanhoGrade) {
                ctxAlvo.fillRect(
                    Math.round(offsetX + px * escala),
                    Math.round(offsetY + py * escala),
                    Math.ceil(escala),
                    Math.ceil(escala)
                );
            }
        });
    }

    if (config.cores['M'] && (config.nome === 'Mago da Floresta' || config.nome === 'Gran Mago')) {
        const pulsoY = Math.round(Math.sin(frameNum * 0.14) * 1);
        const pulsoX = Math.round(Math.cos(frameNum * 0.1) * 1);
        const baseX = 17 + pulsoX;
        const baseY = 10 + pulsoY;

        ctxAlvo.fillStyle = config.cores['M'];
        const pixelsBrilhoCajado = [
            [baseX, baseY],
            [baseX, baseY - 1],
            [baseX + 1, baseY],
            [baseX - 1, baseY - 1]
        ];

        pixelsBrilhoCajado.forEach(([px, py]) => {
            if (px >= 0 && px < tamanhoGrade && py >= 0 && py < tamanhoGrade) {
                ctxAlvo.fillRect(
                    Math.round(offsetX + px * escala),
                    Math.round(offsetY + py * escala),
                    Math.ceil(escala),
                    Math.ceil(escala)
                );
            }
        });
    }

    ctxAlvo.restore();
}

const previewsCanvas = document.querySelectorAll('.preview-personagem');
previewsCanvas.forEach((canvasPreview, idx) => {
    const ctxPreview = canvasPreview.getContext('2d');
    if (personagensConfig[idx]) {
        desenharMatrizNoContexto(ctxPreview, canvasPreview.width, personagensConfig[idx], 0, false, false);
    }
});

function loopPersonagemMapa() {
    contadorFrame++;
    if (ctxBoneca && canvasBoneca) {
        const configAtiva = personagensConfig[personagemSelecionadoIndex] || personagensConfig[0];
        desenharMatrizNoContexto(
            ctxBoneca,
            canvasBoneca.width,
            configAtiva,
            contadorFrame,
            estaAndando,
            olhandoEsquerda
        );
    }
    requestAnimationFrame(loopPersonagemMapa);
}
loopPersonagemMapa();

// --- 2. BOTÕES DA TELA INICIAL (MENU, START, EXIT) ---
const btnStart = document.getElementById('btn-start');
const btnMenu = document.getElementById('btn-menu');
const btnExit = document.getElementById('btn-exit');
const seletorPersonagens = document.getElementById('seletor-personagens');
const menuRapido = document.getElementById('menu-rapido');
const cardsPersonagem = document.querySelectorAll('.card-personagem');
const btnConfirmarPersonagem = document.getElementById('btn-confirmar-personagem');

cardsPersonagem.forEach((card, idx) => {
    const labelSpan = card.querySelector('span');
    if (labelSpan && personagensConfig[idx]) {
        labelSpan.textContent = personagensConfig[idx].nome;
    }

    card.addEventListener('click', () => {
        cardsPersonagem.forEach((c) => c.classList.remove('selecionado'));
        card.classList.add('selecionado');
        personagemSelecionadoIndex = Number(card.dataset.personagem);
    });
});

if (btnStart && seletorPersonagens) {
    btnStart.addEventListener('click', () => {
        seletorPersonagens.classList.toggle('seletor-oculto');
        if (menuRapido) menuRapido.classList.add('menu-oculto');
    });
}

if (btnMenu && menuRapido) {
    btnMenu.addEventListener('click', () => {
        menuRapido.classList.toggle('menu-oculto');
        if (seletorPersonagens) seletorPersonagens.classList.add('seletor-oculto');
    });
}

if (btnExit) {
    btnExit.addEventListener('click', () => {
        if (seletorPersonagens) seletorPersonagens.classList.add('seletor-oculto');
        if (menuRapido) menuRapido.classList.add('menu-oculto');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

if (btnConfirmarPersonagem) {
    btnConfirmarPersonagem.addEventListener('click', () => {
        if (seletorPersonagens) seletorPersonagens.classList.add('seletor-oculto');
        const fase1 = document.getElementById('fase-1');
        if (fase1) fase1.scrollIntoView({ behavior: 'smooth' });
    });
}

// --- 3. CONTROLE DE ROLAGEM (SCROLL) E MOVIMENTO NO MAPA ---
const personagem = document.getElementById('personagem');
const spanPorcentagem = document.getElementById('porcentagem');
const chao = document.getElementById('chao-jogo');

let ultimoScroll = window.scrollY;
let timerParado;

window.addEventListener('scroll', () => {
    const scrollAtual = window.scrollY;
    const alturaMaxima = document.documentElement.scrollHeight - window.innerHeight;
    const progresso = alturaMaxima > 0 ? Math.min(1, Math.max(0, scrollAtual / alturaMaxima)) : 0;
    const porcentagem = Math.round(progresso * 100);

    if (spanPorcentagem) spanPorcentagem.textContent = porcentagem;

    if (scrollAtual > ultimoScroll) {
        olhandoEsquerda = false;
    } else if (scrollAtual < ultimoScroll) {
        olhandoEsquerda = true;
    }
    ultimoScroll = scrollAtual;

    estaAndando = true;
    if (personagem) {
        personagem.classList.add('andando');
        clearTimeout(timerParado);
        timerParado = setTimeout(() => {
            estaAndando = false;
            personagem.classList.remove('andando');
        }, 150);

        const larguraPersonagemPx = personagem.offsetWidth || 96;
        const margemSeguraPercent = Math.min(28, ((larguraPersonagemPx + 24) / window.innerWidth) * 100);
        const alcanceHorizontal = Math.max(20, 90 - margemSeguraPercent);
        const posicaoHorizontal = 8 + (progresso * (alcanceHorizontal - 8));
        personagem.style.left = `${posicaoHorizontal}%`;
    }

    if (chao) {
        chao.style.backgroundPositionX = `${-scrollAtual * 1.2}px`;
    }
});

window.addEventListener('keydown', (e) => {
    const tagAtiva = document.activeElement && document.activeElement.tagName;
    if (tagAtiva === 'INPUT' || tagAtiva === 'TEXTAREA' || tagAtiva === 'SELECT') {
        if (e.key === 'Escape') fecharModal();
        return;
    }

    if (e.key === 'Escape') {
        fecharModal();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        window.scrollBy({ top: 120, behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        window.scrollBy({ top: -120, behavior: 'smooth' });
    }
});

// --- 4. QUESTIONÁRIO DO BOTÃO "ENVIAR MENSAGEM" ---
const btnAbrirForm = document.getElementById('btn-abrir-form');
const modalContato = document.getElementById('modal-contato');
const btnFecharForm = document.getElementById('btn-fechar-form');
const formMensagem = document.getElementById('form-mensagem');
const feedbackEnvio = document.getElementById('feedback-envio');

function abrirModal() {
    if (!modalContato) return;
    if (feedbackEnvio) feedbackEnvio.textContent = '';
    modalContato.classList.add('aberto');
    modalContato.setAttribute('aria-hidden', 'false');
    const campoNome = document.getElementById('nome');
    if (campoNome) campoNome.focus();
}

function fecharModal() {
    if (!modalContato) return;
    modalContato.classList.remove('aberto');
    modalContato.setAttribute('aria-hidden', 'true');
}

if (btnAbrirForm) btnAbrirForm.addEventListener('click', abrirModal);
if (btnFecharForm) btnFecharForm.addEventListener('click', fecharModal);

if (modalContato) {
    modalContato.addEventListener('click', (e) => {
        if (e.target === modalContato) fecharModal();
    });
}

if (formMensagem) {
    formMensagem.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value.trim();
        const assunto = document.getElementById('assunto').value;

        if (feedbackEnvio) {
            feedbackEnvio.textContent = `Obrigada, ${nome}! Sua mensagem sobre "${assunto}" foi registrada por aqui.`;
        }
        formMensagem.reset();
    });
}

// --- 5. EFEITO DE CURSOR BRILHANTE ---
const canvas = document.getElementById('canvas-brilho');
const ctx = canvas ? canvas.getContext('2d') : null;

if (canvas && ctx) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    const particulas = [];
    let matiz = 0;

    window.addEventListener('mousemove', (e) => {
        for (let i = 0; i < 3; i++) {
            particulas.push(new Particula(e.clientX, e.clientY));
        }
    });

    class Particula {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.tamanho = Math.random() * 5 + 2;
            this.velocidadeX = Math.random() * 2 - 1;
            this.velocidadeY = Math.random() * 2 - 1;
            this.cor = `hsl(${matiz}, 100%, 50%)`;
        }

        atualizar() {
            this.x += this.velocidadeX;
            this.y += this.velocidadeY;
            if (this.tamanho > 0.2) this.tamanho -= 0.1;
        }

        desenhar() {
            ctx.fillStyle = this.cor;
            ctx.shadowBlur = 15;
            ctx.shadowColor = this.cor;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.tamanho, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function animarBrilho() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particulas.length; i++) {
            particulas[i].atualizar();
            particulas[i].desenhar();

            if (particulas[i].tamanho <= 0.3) {
                particulas.splice(i, 1);
                i--;
            }
        }

        matiz += 2;
        requestAnimationFrame(animarBrilho);
    }

    animarBrilho();
}

// --- 6. CENÁRIO ANIMADO: MODO CLARO (SOL) / MODO ESCURO (LUA BRILHANTE) ---
const canvasCenario = document.getElementById('canvas-cenario');
const btnTema = document.getElementById('btn-tema');

let modoEscuro = false;

function atualizarBotaoTema() {
    if (!btnTema) return;
    document.body.classList.toggle('modo-escuro', modoEscuro);
    btnTema.textContent = modoEscuro ? '☀️ DIA' : '🌙 NOITE';
}

if (btnTema) {
    btnTema.addEventListener('click', () => {
        modoEscuro = !modoEscuro;
        atualizarBotaoTema();
    });
}
atualizarBotaoTema();

if (canvasCenario) {
    const ctxCenario = canvasCenario.getContext('2d');

    function ajustarCenario() {
        canvasCenario.width = window.innerWidth;
        canvasCenario.height = window.innerHeight;
    }

    ajustarCenario();
    window.addEventListener('resize', ajustarCenario);

    const nuvens = Array.from({ length: 6 }, (_, i) => ({
        x: (i * 290) % Math.max(800, window.innerWidth),
        y: 55 + (i % 3) * 48,
        escala: 0.9 + (i % 3) * 0.28,
        velocidade: 0.2 + (i % 4) * 0.07
    }));

    const estrelas = Array.from({ length: 45 }, (_, i) => ({
        xRatio: ((i * 53) % 100) / 100,
        yRatio: 0.05 + (((i * 29) % 42) / 100),
        fase: i * 0.7,
        grande: i % 5 === 0
    }));

    const coresFolhas = ['#aacc00', '#80b918', '#f9c74f', '#f28482', '#52b788'];
    const folhas = Array.from({ length: 36 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        tamanho: Math.floor(Math.random() * 3) + 4,
        velocidadeY: 0.65 + Math.random() * 1.05,
        balancoFase: Math.random() * Math.PI * 2,
        balancoVel: 0.025 + Math.random() * 0.025,
        cor: coresFolhas[Math.floor(Math.random() * coresFolhas.length)]
    }));

    const vagalumes = Array.from({ length: 22 }, (_, i) => ({
        xRatio: ((i * 37) % 100) / 100,
        yRatio: 0.25 + (((i * 23) % 55) / 100),
        fase: i * 0.9,
        dourado: i % 3 !== 0
    }));

    let frameCenario = 0;

    function desenharSolBrilhante(tempo) {
        const solX = Math.round(canvasCenario.width * 0.8);
        const solY = 105;
        const pulso = Math.sin(tempo * 0.05) * 5;
        const raioSol = 26 + Math.round(pulso * 0.3);

        ctxCenario.save();

        const gradienteLuz = ctxCenario.createRadialGradient(
            solX, solY, raioSol * 0.35,
            solX, solY, raioSol * 3.4 + pulso
        );
        gradienteLuz.addColorStop(0, 'rgba(255, 243, 176, 0.85)');
        gradienteLuz.addColorStop(0.5, 'rgba(255, 209, 102, 0.28)');
        gradienteLuz.addColorStop(1, 'rgba(255, 209, 102, 0)');

        ctxCenario.fillStyle = gradienteLuz;
        ctxCenario.beginPath();
        ctxCenario.arc(solX, solY, raioSol * 3.4 + pulso, 0, Math.PI * 2);
        ctxCenario.fill();

        ctxCenario.fillStyle = '#ffd166';
        const anguloBase = tempo * 0.012;
        for (let i = 0; i < 8; i++) {
            const ang = anguloBase + (i * Math.PI) / 4;
            const dist = raioSol + 12 + Math.sin(tempo * 0.08 + i) * 3;
            const rx = Math.round(solX + Math.cos(ang) * dist);
            const ry = Math.round(solY + Math.sin(ang) * dist);
            ctxCenario.fillRect(rx - 3, ry - 3, 6, 6);
        }

        ctxCenario.fillStyle = '#ffb703';
        ctxCenario.beginPath();
        ctxCenario.arc(solX, solY, raioSol, 0, Math.PI * 2);
        ctxCenario.fill();

        ctxCenario.fillStyle = '#fff3b0';
        ctxCenario.beginPath();
        ctxCenario.arc(solX - 4, solY - 4, raioSol * 0.52, 0, Math.PI * 2);
        ctxCenario.fill();

        ctxCenario.restore();
    }

    function desenharLuaBrilhante(tempo) {
        const luaX = Math.round(canvasCenario.width * 0.8);
        const luaY = 105;
        const pulso = Math.sin(tempo * 0.04) * 4;
        const raioLua = 26 + Math.round(pulso * 0.25);

        ctxCenario.save();

        estrelas.forEach((est) => {
            const ex = Math.round(est.xRatio * canvasCenario.width);
            const ey = Math.round(est.yRatio * canvasCenario.height);
            const alpha = 0.3 + 0.7 * Math.abs(Math.sin(tempo * 0.05 + est.fase));
            ctxCenario.fillStyle = `rgba(240, 249, 255, ${alpha.toFixed(2)})`;
            const tam = est.grande ? 4 : 3;
            ctxCenario.fillRect(ex, ey, tam, tam);
        });

        const gradLua = ctxCenario.createRadialGradient(
            luaX, luaY, raioLua * 0.3,
            luaX, luaY, raioLua * 3.6 + pulso
        );
        gradLua.addColorStop(0, 'rgba(240, 249, 255, 0.9)');
        gradLua.addColorStop(0.5, 'rgba(125, 211, 252, 0.28)');
        gradLua.addColorStop(1, 'rgba(125, 211, 252, 0)');

        ctxCenario.fillStyle = gradLua;
        ctxCenario.beginPath();
        ctxCenario.arc(luaX, luaY, raioLua * 3.6 + pulso, 0, Math.PI * 2);
        ctxCenario.fill();

        ctxCenario.fillStyle = '#f8fafc';
        ctxCenario.beginPath();
        ctxCenario.arc(luaX, luaY, raioLua, 0, Math.PI * 2);
        ctxCenario.fill();

        ctxCenario.fillStyle = '#cbd5e1';
        ctxCenario.fillRect(luaX - 9, luaY - 6, 6, 6);
        ctxCenario.fillRect(luaX + 5, luaY + 4, 7, 5);
        ctxCenario.fillRect(luaX - 2, luaY + 9, 4, 4);

        ctxCenario.restore();
    }

    function desenharNuvemPixel(nuvem) {
        const s = 5 * nuvem.escala;
        const x = Math.round(nuvem.x);
        const y = Math.round(nuvem.y);

        const blocos = [
            [2, 0], [3, 0], [4, 0],
            [1, 1], [2, 1], [3, 1], [4, 1], [5, 1],
            [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2]
        ];

        ctxCenario.save();
        ctxCenario.fillStyle = modoEscuro
            ? 'rgba(148, 163, 184, 0.28)'
            : 'rgba(224, 251, 252, 0.72)';
        blocos.forEach(([bx, by]) => {
            ctxCenario.fillRect(
                Math.round(x + bx * s),
                Math.round(y + by * s),
                Math.ceil(s),
                Math.ceil(s)
            );
        });
        ctxCenario.restore();
    }

    function desenharArvoreSinuosa(xBase, chaoY, alturaTronco, virarEsquerda) {
        const px = 5;
        const passos = Math.floor(alturaTronco / px);

        const corContorno = '#17110e';
        const corTroncoEscuro = modoEscuro ? '#24160e' : '#3b2314';
        const corTroncoMedio = modoEscuro ? '#3d2618' : '#633c22';
        const corTroncoClaro = modoEscuro ? '#573723' : '#8c5833';
        const corCipo = modoEscuro ? '#0b1d19' : '#14241e';

        ctxCenario.save();
        if (virarEsquerda) {
            ctxCenario.translate(xBase * 2, 0);
            ctxCenario.scale(-1, 1);
        }

        ctxCenario.fillStyle = corCipo;
        const cipos = [
            [-6, 0, 14], [-3, 0, 22], [2, 0, 10], [8, 0, 18],
            [14, 18, 16], [17, 18, 24], [-10, 28, 12]
        ];
        cipos.forEach(([cx, cy, altPx]) => {
            ctxCenario.fillRect(
                Math.round(xBase + cx * px),
                Math.round(cy * px),
                px,
                Math.round(altPx * px)
            );
        });

        for (let i = 0; i <= passos; i++) {
            const t = i / Math.max(1, passos);
            const curva = Math.round(Math.sin(t * Math.PI * 1.6) * 3);
            const larguraBase = Math.round((1 - t) * 5 + 3);
            const yPixel = chaoY - i * px;
            const xPixel = xBase + (curva - Math.floor(larguraBase / 2)) * px;

            ctxCenario.fillStyle = corContorno;
            ctxCenario.fillRect(Math.round(xPixel - px), Math.round(yPixel), Math.round((larguraBase + 2) * px), px);

            ctxCenario.fillStyle = corTroncoEscuro;
            ctxCenario.fillRect(Math.round(xPixel), Math.round(yPixel), Math.round(larguraBase * px), px);

            ctxCenario.fillStyle = corTroncoMedio;
            ctxCenario.fillRect(Math.round(xPixel + px), Math.round(yPixel), Math.round(Math.max(1, larguraBase - 2) * px), px);

            ctxCenario.fillStyle = corTroncoClaro;
            ctxCenario.fillRect(Math.round(xPixel + px), Math.round(yPixel), px, px);
        }

        const galhoY = chaoY - Math.round(alturaTronco * 0.62);
        const galhoX = xBase + 2 * px;
        ctxCenario.fillStyle = corContorno;
        ctxCenario.fillRect(galhoX, galhoY - px, 8 * px, 3 * px);
        ctxCenario.fillStyle = corTroncoMedio;
        ctxCenario.fillRect(galhoX + px, galhoY, 6 * px, px);

        ctxCenario.restore();
    }

    function desenharFlorestaReferencia(scrollY, tempo) {
        const w = canvasCenario.width;
        const h = canvasCenario.height;
        const alturaChao = w <= 700 ? 42 : 50;
        const chaoY = h - alturaChao;
        const px = 5;

        ctxCenario.save();

        const gradFundo = ctxCenario.createLinearGradient(0, 0, 0, chaoY);
        if (modoEscuro) {
            gradFundo.addColorStop(0, '#070d1f');
            gradFundo.addColorStop(0.55, '#0f293a');
            gradFundo.addColorStop(1, '#0b1f1c');
        } else {
            gradFundo.addColorStop(0, '#184e54');
            gradFundo.addColorStop(0.55, '#2b7a78');
            gradFundo.addColorStop(1, '#1b4332');
        }
        ctxCenario.fillStyle = gradFundo;
        ctxCenario.fillRect(0, 0, w, chaoY);

        const feixeLuz = ctxCenario.createRadialGradient(
            w * 0.5, chaoY * 0.42, 20,
            w * 0.5, chaoY * 0.42, Math.max(w, h) * 0.55
        );
        feixeLuz.addColorStop(
            0,
            modoEscuro ? 'rgba(125, 211, 252, 0.14)' : 'rgba(153, 246, 228, 0.34)'
        );
        feixeLuz.addColorStop(1, 'rgba(24, 78, 84, 0)');
        ctxCenario.fillStyle = feixeLuz;
        ctxCenario.fillRect(0, 0, w, chaoY);

        const passoFundo = 44;
        const deslocFundo = -((scrollY * 0.18) % passoFundo);
        for (let x = deslocFundo - passoFundo; x < w + passoFundo; x += passoFundo) {
            const tx = Math.round(x);
            ctxCenario.fillStyle = modoEscuro
                ? 'rgba(7, 16, 28, 0.65)'
                : 'rgba(18, 53, 59, 0.55)';
            ctxCenario.fillRect(tx, 0, 14, chaoY - 16);
            ctxCenario.fillStyle = modoEscuro
                ? 'rgba(56, 189, 248, 0.10)'
                : 'rgba(72, 169, 166, 0.22)';
            ctxCenario.fillRect(tx + 4, 0, 5, chaoY - 16);
        }

        const cicloArvores = w <= 700 ? 280 : 420;
        const deslocArvores = -((scrollY * 0.45) % cicloArvores);
        const alturaArvore = Math.min(340, Math.max(180, Math.round(chaoY * 0.58)));

        for (let base = deslocArvores - cicloArvores; base < w + cicloArvores; base += cicloArvores) {
            if (w <= 700) {
                desenharArvoreSinuosa(Math.round(base + 55), chaoY - 12, alturaArvore, false);
                desenharArvoreSinuosa(Math.round(base + 195), chaoY - 12, Math.round(alturaArvore * 0.88), true);
            } else {
                desenharArvoreSinuosa(Math.round(base + 70), chaoY - 12, alturaArvore, false);
                desenharArvoreSinuosa(Math.round(base + 235), chaoY - 12, Math.round(alturaArvore * 0.85), true);
                desenharArvoreSinuosa(Math.round(base + 365), chaoY - 12, Math.round(alturaArvore * 0.95), false);
            }
        }

        vagalumes.forEach((v) => {
            const vx = Math.round((((v.xRatio * w - scrollY * 0.25) % w) + w) % w);
            const vy = Math.round(v.yRatio * (chaoY - 40) + Math.sin(tempo * 0.04 + v.fase) * 10);
            const alpha = (modoEscuro ? 0.55 : 0.35) + 0.45 * Math.abs(Math.sin(tempo * 0.06 + v.fase));
            ctxCenario.fillStyle = v.dourado
                ? `rgba(255, 224, 102, ${alpha.toFixed(2)})`
                : `rgba(167, 243, 208, ${alpha.toFixed(2)})`;
            ctxCenario.fillRect(vx, vy, px, px);
        });

        const passoArbusto = 36;
        const deslocArbusto = -((scrollY * 0.55) % passoArbusto);
        for (let x = deslocArbusto - passoArbusto; x < w + passoArbusto; x += passoArbusto) {
            const ax = Math.round(x);
            const ay = chaoY - 24;
            ctxCenario.fillStyle = modoEscuro ? '#0f2922' : '#1b4332';
            ctxCenario.fillRect(ax, ay, 38, 16);
            ctxCenario.fillStyle = modoEscuro ? '#194235' : '#2d6a4f';
            ctxCenario.fillRect(ax + 4, ay - 8, 28, 12);
            ctxCenario.fillStyle = modoEscuro ? '#265c48' : '#40916c';
            ctxCenario.fillRect(ax + 8, ay - 12, 16, 6);
        }

        const passoFlores = 220;
        const deslocFlores = -((scrollY * 0.55) % passoFlores);
        for (let x = deslocFlores - passoFlores; x < w + passoFlores; x += passoFlores) {
            const fx1 = Math.round(x + 55);
            const fy1 = chaoY - 14;
            ctxCenario.fillStyle = '#ffd166';
            ctxCenario.fillRect(fx1, fy1, px, px);
            ctxCenario.fillRect(fx1 - px, fy1 + px, 3 * px, px);
            ctxCenario.fillRect(fx1, fy1 + 2 * px, px, px);

            const fx2 = Math.round(x + 145);
            ctxCenario.fillStyle = '#ef476f';
            ctxCenario.fillRect(fx2, fy1, px, px);
            ctxCenario.fillRect(fx2 - px, fy1 + px, 3 * px, px);
            ctxCenario.fillRect(fx2, fy1 + 2 * px, px, px);
        }

        const passoGrama = 16;
        const deslocGrama = -((scrollY * 0.7) % passoGrama);
        ctxCenario.fillStyle = '#1e1610';
        ctxCenario.fillRect(0, chaoY - 6, w, 10);

        for (let x = deslocGrama - passoGrama; x < w + passoGrama; x += passoGrama) {
            const gx = Math.round(x);
            const dente = ((Math.abs(Math.round(gx / passoGrama)) % 3) + 1) * 3;
            ctxCenario.fillStyle = modoEscuro ? '#588157' : '#a7c957';
            ctxCenario.fillRect(gx, chaoY - 12, passoGrama + 1, 7 + dente);
            ctxCenario.fillStyle = modoEscuro ? '#3a5a40' : '#6a994e';
            ctxCenario.fillRect(gx, chaoY - 5 + dente, passoGrama + 1, 4);
        }

        ctxCenario.restore();
    }

    function animarCenario() {
        frameCenario++;
        ctxCenario.clearRect(0, 0, canvasCenario.width, canvasCenario.height);

        const scrollAtual = window.scrollY || 0;

        desenharFlorestaReferencia(scrollAtual, frameCenario);

        if (modoEscuro) {
            desenharLuaBrilhante(frameCenario);
        } else {
            desenharSolBrilhante(frameCenario);
        }

        nuvens.forEach((nuvem) => {
            nuvem.x += nuvem.velocidade;
            const larguraNuvem = 7 * 5 * nuvem.escala;
            if (nuvem.x > canvasCenario.width + 40) {
                nuvem.x = -larguraNuvem - 20;
            }
            desenharNuvemPixel(nuvem);
        });

        folhas.forEach((folha) => {
            folha.y += folha.velocidadeY;
            folha.balancoFase += folha.balancoVel;
            const swayX = Math.sin(folha.balancoFase) * 1.1;
            folha.x += swayX;

            if (folha.y > canvasCenario.height - 54) {
                folha.y = -12;
                folha.x = Math.random() * canvasCenario.width;
            }
            if (folha.x < -15) folha.x = canvasCenario.width + 10;
            if (folha.x > canvasCenario.width + 15) folha.x = -10;

            ctxCenario.save();
            ctxCenario.fillStyle = modoEscuro ? '#40916c' : folha.cor;
            const fx = Math.round(folha.x);
            const fy = Math.round(folha.y);
            const t = folha.tamanho;

            ctxCenario.fillRect(fx, fy, t, Math.max(3, Math.floor(t * 0.65)));
            ctxCenario.fillRect(
                fx + Math.floor(t * 0.5),
                fy + 2,
                Math.max(2, Math.floor(t * 0.5)),
                Math.max(2, Math.floor(t * 0.5))
            );
            ctxCenario.restore();
        });

        requestAnimationFrame(animarCenario);
    }

    animarCenario();
}

// --- 7. MOSTRAR / ESCONDER PROJETOS EM DESTAQUE ---
const btnVerProjetos = document.getElementById('btn-ver-projetos');
const listaProjetos = document.getElementById('lista-projetos');

if (btnVerProjetos && listaProjetos) {
    btnVerProjetos.addEventListener('click', (e) => {
        e.preventDefault();
        const vaiAbrir = listaProjetos.classList.contains('oculta');
        listaProjetos.classList.toggle('oculta', !vaiAbrir);
        btnVerProjetos.setAttribute('aria-expanded', String(vaiAbrir));
        btnVerProjetos.textContent = vaiAbrir ? 'ESCONDER PROJETOS' : 'VER PROJETOS';
    });
}

// --- 8. COPIAR LINK NA SEÇÃO DE ACESSO A LINKS ---
const btnCopiarLink = document.getElementById('btn-copiar-link');
const feedbackLink = document.getElementById('feedback-link');

if (btnCopiarLink && feedbackLink) {
    btnCopiarLink.addEventListener('click', async () => {
        const urlAtual = window.location.href;
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(urlAtual);
            } else {
                const inputTemp = document.createElement('input');
                inputTemp.value = urlAtual;
                document.body.appendChild(inputTemp);
                inputTemp.select();
                document.execCommand('copy');
                document.body.removeChild(inputTemp);
            }
            feedbackLink.textContent = 'Link copiado para a área de transferência!';
        } catch (err) {
            feedbackLink.textContent = `Link do site: ${urlAtual}`;
        }
    });
}

// --- 9. GARANTIR DIRECIONAMENTO SUAVE PARA LINKS INTERNOS (#fase-...) ---
document.querySelectorAll('a[href^="#"]').forEach((linkInterno) => {
    linkInterno.addEventListener('click', (e) => {
        const destinoId = linkInterno.getAttribute('href');
        if (!destinoId || destinoId === '#') return;
        const secaoDestino = document.querySelector(destinoId);
        if (secaoDestino) {
            e.preventDefault();
            if (menuRapido) menuRapido.classList.add('menu-oculto');
            secaoDestino.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});