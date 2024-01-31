const form = document.getElementById('form-atividade');
const imgaprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>'
const imgreprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado"/>'
const spanaprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanreprovado = '<span class="resultado reprovado">Reprovado</span>'
let somatorio = 0;
const atividades = [];
let linhas = '';

form.addEventListener('submit', function(e){
  e.preventDefault();

  adiciona_linha();
  atualiza_tabela();
  atualiza_media();
})

function adiciona_linha(){
  const nome = document.getElementById('nome-atividade');
  const nota = document.getElementById('nota-atividade');

  if(atividades.includes(nome.value)){
    alert('Essa atividade já foi inserida previamente!');
  }else{
    somatorio += parseFloat(nota.value);
    atividades.push(nome.value);
  
    let linha = '<tr>';
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${nota.value}</td>`;
    linha += `<td>${nota.value >= 7 ? imgaprovado:imgreprovado}</td>`;
    linha += '</tr>';
  
    linhas += linha;
    nome.value = '';
    nota.value = '';
  }
}

function atualiza_tabela(){
  const tabela_corpo = document.querySelector('tbody');
  tabela_corpo.innerHTML = linhas;
}

function atualiza_media(){
  let media = (somatorio/atividades.length).toFixed(1);
  document.getElementById('media_final').innerHTML = media;
  document.getElementById('resultado_final').innerHTML = media >= 7 ? spanaprovado:spanreprovado;
}