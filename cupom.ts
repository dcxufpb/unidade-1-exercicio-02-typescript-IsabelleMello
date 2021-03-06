let dados = {
  nome_loja: "Arcos Dourados Com. de Alimentos LTDA",
  logradouro: "Av. Projetada Leste",
  numero: 500,
  complemento: "EUC F32/33/34",
  bairro: "Br. Sta Genebra",
  municipio: "Campinas",
  estado: "SP",
  cep: "13080-395",
  telefone: "(19) 3756-7408",
  observacao: "Loja 1317 (PDP)",
  cnpj: "42.591.651/0797-34",
  inscricao_estadual: "244.898.500.113"
};

function imprime_dados_loja() {
   return `${dados.nome_loja}\n` + 
  `${dados.logradouro}, ${dados.numero} ${dados.complemento}\n` + 
  `${dados.bairro} - ${dados.municipio} - ${dados.estado}\n` + 
  `CEP:${dados.cep} Tel ${dados.telefone}\n` + 
  `${dados.observacao}\n` + 
  `CNPJ: ${dados.cnpj}\n` + 
  `IE: ${dados.inscricao_estadual}\n`;

}

module.exports = {
  dados: dados,
  imprime_dados_loja:  imprime_dados_loja
};
