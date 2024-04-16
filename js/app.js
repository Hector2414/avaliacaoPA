// Aqui está a função para pegar as metas 
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
 //checkboxLabel.appendChild(document.createTextNode("Realizado"));

  // Criar um botão de exclusão
  var botaoExcluir = document.createElement("button");
  botaoExcluir.textContent = "X";
  botaoExcluir.classList.add("botao-excluir");
  botaoExcluir.addEventListener("click", function() {
      divMetaEstabelecida.removeChild(paragrafo);
      divMetaEstabelecida.removeChild(checkboxLabel);
      divMetaEstabelecida.removeChild(botaoExcluir);
  });

  // Adicionar o parágrafo, a checkbox e o botão de exclusão à div com o ID "meta-estabelecida"
  var divMetaEstabelecida = document.getElementById("meta-estabelecida");
  divMetaEstabelecida.appendChild(paragrafo);
  divMetaEstabelecida.appendChild(checkboxLabel);
  divMetaEstabelecida.appendChild(botaoExcluir);
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

  // Adicionar o parágrafo, a checkbox e o botão de exclusão à div com o ID "habitos-estabelecidos"
  var divHabitosEstabelecidos = document.getElementById("habitos-estabelecidos");
  divHabitosEstabelecidos.appendChild(paragrafo);
  divHabitosEstabelecidos.appendChild(checkboxLabel);
  divHabitosEstabelecidos.appendChild(botaoExcluir);
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

document.getElementById("adicionar-habito").addEventListener("click", pegarHabitos);
