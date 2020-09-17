function limpar(){
  document.getElementById('tela').value = '';
}
function preencher(valor){
  document.getElementById('tela').value +=valor; 
}
function calcular(){
  var resultado= 0;
  resultado = document.getElementById('tela').value;
  document.getElementById('tela').value = '';
  document.getElementById('tela').value = eval(resultado);
}