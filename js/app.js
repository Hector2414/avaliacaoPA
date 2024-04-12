 // Função para pegar as metas do input e adicioná-las à div
 function pegarMetas() {
  // Pegar o valor do input
  var meta = document.getElementById("metas").value;

  // Criar um elemento de parágrafo para a nova meta
  var paragrafo = document.createElement("p");
  paragrafo.textContent = meta;

  // Adicionar o parágrafo à div com o ID "meta-estabelecida"
  var divMetaEstabelecida = document.getElementById("meta-estabelecida");
  divMetaEstabelecida.appendChild(paragrafo);
}

// Adicionar um evento de clique ao botão
function pegarHabitos() {
  // Pegar o valor do input
  var habito = document.getElementById("habitos").value;

  // Criar um elemento de parágrafo para o novo hábito
  var paragrafo = document.createElement("p");
  paragrafo.textContent = habito;

  // Adicionar o parágrafo à div com o ID "habitos-estabelecidos"
  var divHabitosEstabelecidos = document.getElementById("habitos-estabelecidos");
  divHabitosEstabelecidos.appendChild(paragrafo);
}

document.getElementById("adicionar-habito").addEventListener("click", pegarHabitos);