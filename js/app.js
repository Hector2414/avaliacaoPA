// Função para pegar as metas 
function pegarMetas() {
    // Pegar o valor do input
    var meta = document.getElementById("metas").value;

    // Criar um elemento de parágrafo para a nova meta
    var paragrafo = document.createElement("p");
    paragrafo.textContent = meta;

    // Criar uma checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", atualizarProgresso);

    // Criar uma label para a checkbox
    var checkboxLabel = document.createElement("label");
    checkboxLabel.classList.add("checkbox-label");
    checkboxLabel.appendChild(checkbox);
    checkboxLabel.appendChild(document.createTextNode(""));

    // Criar um botão de exclusão
    var botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "X";
    botaoExcluir.classList.add("botao-excluir");
    botaoExcluir.addEventListener("click", function() {
        divMetaEstabelecida.removeChild(paragrafo);
        divMetaEstabelecida.removeChild(checkboxLabel);
        divMetaEstabelecida.removeChild(botaoExcluir);
    });

    // Criar um botão de edição
    var botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.classList.add("botao-editar");
    botaoEditar.addEventListener("click", function() {
        var novaMeta = prompt("Editar a meta", paragrafo.textContent);
        if (novaMeta !== null) {
            paragrafo.textContent = novaMeta;
        }
    });

    // Adicionar o parágrafo, a checkbox, o botão de exclusão e o botão de edição à div com o ID "meta-estabelecida"
    var divMetaEstabelecida = document.getElementById("meta-estabelecida");
    divMetaEstabelecida.appendChild(paragrafo);
    divMetaEstabelecida.appendChild(checkboxLabel);
    divMetaEstabelecida.appendChild(botaoExcluir);
    divMetaEstabelecida.appendChild(botaoEditar);
}

// Função para pegar os hábitos do input e adicioná-los à div
function pegarHabitos() {
    // Pegar o valor do input
    var habito = document.getElementById("habitos").value;

    // Criar um elemento de parágrafo para o novo hábito
    var paragrafo = document.createElement("p");
    paragrafo.textContent = habito;

    // Criar uma checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", atualizarProgresso);

    // Criar uma label para a checkbox
    var checkboxLabel = document.createElement("label");
    checkboxLabel.classList.add("checkbox-label");
    checkboxLabel.appendChild(checkbox);
    checkboxLabel.appendChild(document.createTextNode(""));

    // Criar um botão de exclusão
    var botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "X";
    botaoExcluir.classList.add("botao-excluir");
    botaoExcluir.addEventListener("click", function() {
        divHabitosEstabelecidos.removeChild(paragrafo);
        divHabitosEstabelecidos.removeChild(checkboxLabel);
        divHabitosEstabelecidos.removeChild(botaoExcluir);
    });

    // Criar um botão de edição
    var botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.classList.add("botao-editar");
    botaoEditar.addEventListener("click", function() {
        var novoHabito = prompt("Editar o hábito", paragrafo.textContent);
        if (novoHabito !== null) {
            paragrafo.textContent = novoHabito;
        }
    });

    // Adicionar o parágrafo, a checkbox, o botão de exclusão e o botão de edição à div com o ID "habitos-estabelecidos"
    var divHabitosEstabelecidos = document.getElementById("habitos-estabelecidos");
    divHabitosEstabelecidos.appendChild(paragrafo);
    divHabitosEstabelecidos.appendChild(checkboxLabel);
    divHabitosEstabelecidos.appendChild(botaoExcluir);
    divHabitosEstabelecidos.appendChild(botaoEditar);
}

// Função para atualizar a barra de progresso
function atualizarProgresso() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checkedCount = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedCount++;
        }
    }
    var progressBar = document.getElementById("progress-bar");
    var progressMessage = document.getElementById("mensagem-progresso");
    var progressValue = (checkedCount / checkboxes.length) * 100;
    progressBar.value = progressValue;
    if (progressValue === 100) {
        progressMessage.textContent = "Parabéns! Todas as suas metas foram atingidas e hábitos aderidos.";
    } else {
        progressMessage.textContent = "";
    }
}
// Função para adicionar lembretes sobre metas e hábitos
function adicionarLembrete(mensagem, tipo) {
    var chatLembretes = document.getElementById("chat-lembretes");
    var novaMensagem = document.createElement("div");
    novaMensagem.classList.add("mensagem-" + tipo);
    novaMensagem.innerHTML = "<p>" + mensagem + "</p>";
    chatLembretes.appendChild(novaMensagem);
}

// Função para verificar e adicionar lembretes
function verificarLembretes() {
    var metas = document.querySelectorAll('#meta-estabelecida p');
    var habitos = document.querySelectorAll('#habitos-estabelecidos p');

    if (metas.length === 0 && habitos.length === 0) {
        adicionarLembrete("Você ainda não estabeleceu metas ou hábitos. Que tal começar agora?", "bot");
    } else {
        if (metas.length === 0) {
            adicionarLembrete("Você ainda não estabeleceu metas. Que tal definir algumas?", "bot");
        } else {
            adicionarLembrete("Lembre-se de trabalhar nas suas metas diariamente!", "bot");
        }

        if (habitos.length === 0) {
            adicionarLembrete("Você ainda não estabeleceu hábitos. Que tal adquirir alguns?", "bot");
        } else {
            adicionarLembrete("Lembre-se de praticar seus hábitos diariamente!", "bot");
        }
    }
}

// Chamar a função para verificar lembretes quando a página carregar
window.onload = function() {
    verificarLembretes();
};

function verificarLembretes() {
    var metas = document.querySelectorAll('#meta-estabelecida p');
    var habitos = document.querySelectorAll('#habitos-estabelecidos p');

    if (metas.length === 0 && habitos.length === 0) {
        adicionarLembrete("Você ainda não estabeleceu metas ou hábitos. Que tal começar agora?", "bot");
    } else {
        if (metas.length === 0) {
            adicionarLembrete("Você ainda não estabeleceu metas. Que tal definir algumas?", "bot");
        } else {
            adicionarLembrete("Lembre-se de trabalhar nas suas metas diariamente!", "bot");
        }

        if (habitos.length === 0) {
            adicionarLembrete("Você ainda não estabeleceu hábitos. Que tal adquirir alguns?", "bot");
        } else {
            adicionarLembrete("Lembre-se de praticar seus hábitos diariamente!", "bot");
        }
    }
}
