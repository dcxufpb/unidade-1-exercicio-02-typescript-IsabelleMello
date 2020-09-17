const cupom = require('./cupom');

test('Exercício 1', () => {
  expect(cupom.imprime_dados_loja()).toBe(
    `Arcos Dourados Com. de Alimentos LTDA
Av. Projetada Leste, 500 EUC F32/33/34
Br. Sta Genebra - Campinas - SP
CEP:13080-395 Tel (19) 3756-7408
Loja 1317 (PDP)
CNPJ: 42.591.651/0797-34
IE: 244.898.500.113
`);
});

test('Exercício 2 - tudo vazio', () => {

  cupom.dados.nome_loja = "";
  cupom.dados.logradouro = "";
  cupom.dados.numero = 0;
  cupom.dados.complemento = "";
  cupom.dados.bairro = "";
  cupom.dados.municipio = "";
  cupom.dados.estado = "";
  cupom.dados.cep = "";
  cupom.dados.telefone = "";
  cupom.dados.observacao = "";
  cupom.dados.cnpj = "";
  cupom.dados.inscricao_estadual = "";

expect(cupom.imprime_dados_loja()).toBe(
`
, 0 
 -  - 
CEP: Tel 

CNPJ: 
IE: 
`);
});

test('Exercício 2 - customizado', () => {

  // Defina seus próprios valores para as variáveis a seguir

  cupom.dados.nome_loja = "Boa vista Flores"; 
  cupom.dados.logradouro = "Rua Jardim Peres"; 
  cupom.dados.numero = 122; 
  cupom.dados.complemento = "EUC F30/31/44"; 
  cupom.dados.bairro = "Centro"; 
  cupom.dados.municipio = "Monteiro"; 
  cupom.dados.estado = "PB"; 
  cupom.dados.cep = "58500000"; 
  cupom.dados.telefone = "(99) 9999-9999"; 
  cupom.dados.observacao = "Loja"; 
  cupom.dados.cnpj = "22.300.551/0110-56"; 
  cupom.dados.inscricao_estadual = "432.118.667.777"; 

  //E atualize o texto esperado abaixo
  expect(cupom.imprime_dados_loja()).toBe(
    `Boa vista Flores
Rua Jardim Peres, 122 EUC F30/31/44
Centro - Monteiro - PB
CEP:58500000 Tel (99) 9999-9999
Loja
CNPJ: 22.300.551/0110-56
IE: 432.118.667.777
`);
});
