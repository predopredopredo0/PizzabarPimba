/* Cardápio público do Canto da Pizza (Wappi). Itens com item_ativo = S. */
export type Flavor = {
  id: string
  name: string
  desc: string
  kind: "salgada" | "doce"
  grande: number | null
  broto: number | null
}

export type MenuItem = {
  id: string
  name: string
  price: number | null
  group: "porcao" | "bebida"
}

export type Borda = { id: string; name: string; price: number }
export type Neighborhood = { name: string; fee: number }

export const flavors: Flavor[] = [
  {
    "id": "f-costela",
    "name": "Costela",
    "desc": "Costela bovina,pasta de alho,cebola,mussarela e pimenta biquinho",
    "kind": "salgada",
    "grande": 80.0,
    "broto": 70.0
  },
  {
    "id": "f-alamare",
    "name": "Alamare",
    "desc": "Atum, cebola, mussarela e palmito",
    "kind": "salgada",
    "grande": 58.0,
    "broto": 48.0
  },
  {
    "id": "f-alho",
    "name": "Alho",
    "desc": "Mussarela e alho dourado",
    "kind": "salgada",
    "grande": 50.0,
    "broto": 40.0
  },
  {
    "id": "f-americana",
    "name": "Americana",
    "desc": "Presunto, mussarela e bacon",
    "kind": "salgada",
    "grande": 58.0,
    "broto": 48.0
  },
  {
    "id": "f-atum",
    "name": "Atum",
    "desc": "Atum e cebola",
    "kind": "salgada",
    "grande": 54.0,
    "broto": 44.0
  },
  {
    "id": "f-atum-esp-solido",
    "name": "Atum Esp. Sólido",
    "desc": "Atum, palmito, ovos, tomate fatiado, mussarela e bacon",
    "kind": "salgada",
    "grande": 62.0,
    "broto": 52.0
  },
  {
    "id": "f-bacon",
    "name": "Bacon",
    "desc": "Mussarela e bacon",
    "kind": "salgada",
    "grande": 55.0,
    "broto": 45.0
  },
  {
    "id": "f-baiana",
    "name": "Baiana",
    "desc": "Calabresa moída, pimenta, cebola, ovos e parmesão",
    "kind": "salgada",
    "grande": 48.0,
    "broto": 38.0
  },
  {
    "id": "f-batata-frita",
    "name": "Batata Frita",
    "desc": "Batata frita e mussarela",
    "kind": "salgada",
    "grande": 57.0,
    "broto": 47.0
  },
  {
    "id": "f-batata-frita-com-cheddar",
    "name": "Batata Frita com Cheddar",
    "desc": "Batata frita, cheddar e bacon",
    "kind": "salgada",
    "grande": 60.0,
    "broto": 50.0
  },
  {
    "id": "f-batata-palha",
    "name": "Batata Palha",
    "desc": "Mussarela, batata palha e catupiry",
    "kind": "salgada",
    "grande": 57.0,
    "broto": 47.0
  },
  {
    "id": "f-bauru",
    "name": "Bauru",
    "desc": "Presunto, tomate e mussarela",
    "kind": "salgada",
    "grande": 55.0,
    "broto": 45.0
  },
  {
    "id": "f-bolinha",
    "name": "Bolinha",
    "desc": "Presunto, mussarela, ervilha, champignon e catupiry",
    "kind": "salgada",
    "grande": 59.0,
    "broto": 49.0
  },
  {
    "id": "f-brocolis",
    "name": "Brocolis",
    "desc": "Brócolis, bacon e mussarela",
    "kind": "salgada",
    "grande": 56.0,
    "broto": 46.0
  },
  {
    "id": "f-brocolis-especial",
    "name": "Brocolis Especial",
    "desc": "Brócolis, mussarela, catupiry, bacon e alho frito",
    "kind": "salgada",
    "grande": 60.0,
    "broto": 50.0
  },
  {
    "id": "f-caipira",
    "name": "Caipira",
    "desc": "Frango desfiado, catupiry e milho",
    "kind": "salgada",
    "grande": 57.0,
    "broto": 47.0
  },
  {
    "id": "f-calabresa",
    "name": "Calabresa",
    "desc": "Calabresa e cebola",
    "kind": "salgada",
    "grande": 48.0,
    "broto": 38.0
  },
  {
    "id": "f-calabria",
    "name": "Calabria",
    "desc": "Calabresa, cebola e catupiry",
    "kind": "salgada",
    "grande": 54.0,
    "broto": 54.0
  },
  {
    "id": "f-camarao-especial",
    "name": "Camarão Especial",
    "desc": "Camarão e mussarela",
    "kind": "salgada",
    "grande": 75.0,
    "broto": 65.0
  },
  {
    "id": "f-canadense",
    "name": "Canadense",
    "desc": "Lombo, palmito e mussarela",
    "kind": "salgada",
    "grande": 57.0,
    "broto": 47.0
  },
  {
    "id": "f-canto-da-pizza",
    "name": "Canto da Pizza",
    "desc": "Presunto, calabresa, mussarela e bacon",
    "kind": "salgada",
    "grande": 61.0,
    "broto": 51.0
  },
  {
    "id": "f-carne-seca",
    "name": "Carne Seca",
    "desc": "Carne seca, cebola e mussarela",
    "kind": "salgada",
    "grande": 62.0,
    "broto": 52.0
  },
  {
    "id": "f-catufrango",
    "name": "Catufrango",
    "desc": "Frango desfiado e catupiry",
    "kind": "salgada",
    "grande": 57.0,
    "broto": 47.0
  },
  {
    "id": "f-catum",
    "name": "Catum",
    "desc": "Atum, catupiry e cebola",
    "kind": "salgada",
    "grande": 58.0,
    "broto": 48.0
  },
  {
    "id": "f-cecilia",
    "name": "Cecilia",
    "desc": "Atum, palmito, catupiry, milho e bacon",
    "kind": "salgada",
    "grande": 62.0,
    "broto": 52.0
  },
  {
    "id": "f-cinco-estacoes",
    "name": "Cinco Estações",
    "desc": "Presunto, mussarela, ervilha, palmito, bacon, ovos e cebola",
    "kind": "salgada",
    "grande": 60.0,
    "broto": 50.0
  },
  {
    "id": "f-cinco-queijos",
    "name": "Cinco Queijos",
    "desc": "Provolone, gorgonzola, catupiry, parmesão e mussarela",
    "kind": "salgada",
    "grande": 62.0,
    "broto": 52.0
  },
  {
    "id": "f-da-final",
    "name": "Da Final",
    "desc": "Peito de peru, palmito, milho, champignon e requeijão",
    "kind": "salgada",
    "grande": 61.0,
    "broto": 51.0
  },
  {
    "id": "f-descontrole",
    "name": "Descontrole",
    "desc": "Lombo, cebola e catupiry",
    "kind": "salgada",
    "grande": 56.0,
    "broto": 46.0
  },
  {
    "id": "f-dois-queijos",
    "name": "Dois Queijos",
    "desc": "Catupiry e mussarela",
    "kind": "salgada",
    "grande": 53.0,
    "broto": 43.0
  },
  {
    "id": "f-doritos",
    "name": "Doritos",
    "desc": "Mussarela, cheddar e doritos",
    "kind": "salgada",
    "grande": 56.0,
    "broto": 46.0
  },
  {
    "id": "f-escarola",
    "name": "Escarola",
    "desc": "Mussarela, escarola e bacon",
    "kind": "salgada",
    "grande": 54.0,
    "broto": 44.0
  },
  {
    "id": "f-florenca",
    "name": "Florença",
    "desc": "Calabresa, cebola, mussarela e catupiry",
    "kind": "salgada",
    "grande": 58.0,
    "broto": 48.0
  },
  {
    "id": "f-florentina",
    "name": "Florentina",
    "desc": "Calabresa, atum, ervilha, palmito, milho e mussarela",
    "kind": "salgada",
    "grande": 60.0,
    "broto": 50.0
  },
  {
    "id": "f-fornalha",
    "name": "Fornalha",
    "desc": "Catupiry,palmito,milho,ovos,ervilha e mussarela",
    "kind": "salgada",
    "grande": 58.0,
    "broto": 48.0
  },
  {
    "id": "f-frango-com-cream-cheese",
    "name": "Frango com Cream Cheese",
    "desc": "Frango desfiado e cream cheese",
    "kind": "salgada",
    "grande": 57.0,
    "broto": 47.0
  },
  {
    "id": "f-frango-crocante",
    "name": "Frango Crocante",
    "desc": "Frango desfiado, catupiry e batata palha",
    "kind": "salgada",
    "grande": 58.0,
    "broto": 48.0
  },
  {
    "id": "f-frango-especial",
    "name": "Frango Especial",
    "desc": "Frango, bacon e cheddar",
    "kind": "salgada",
    "grande": 59.0,
    "broto": 49.0
  },
  {
    "id": "f-frangolino",
    "name": "Frangolino",
    "desc": "Frango, mussarela, catupiry e bacon",
    "kind": "salgada",
    "grande": 60.0,
    "broto": 50.0
  },
  {
    "id": "f-galeto",
    "name": "Galeto",
    "desc": "Frango e mussarela",
    "kind": "salgada",
    "grande": 54.0,
    "broto": 44.0
  },
  {
    "id": "f-jaqueline",
    "name": "Jaqueline",
    "desc": "Lombo, milho, bacon e catupiry",
    "kind": "salgada",
    "grande": 57.0,
    "broto": 47.0
  },
  {
    "id": "f-jardineira",
    "name": "Jardineira",
    "desc": "Frango, tomate, mussarela e bacon",
    "kind": "salgada",
    "grande": 59.0,
    "broto": 49.0
  },
  {
    "id": "f-lombinho",
    "name": "Lombinho",
    "desc": "Lombo, bacon e mussarela",
    "kind": "salgada",
    "grande": 57.0,
    "broto": 47.0
  },
  {
    "id": "f-lombo-especial",
    "name": "Lombo Especial",
    "desc": "Lombo, ovos, palmito , mussarela e bacon",
    "kind": "salgada",
    "grande": 60.0,
    "broto": 50.0
  },
  {
    "id": "f-lombocheddar",
    "name": "Lombocheddar",
    "desc": "Lombo, cebola, cheddar e bacon",
    "kind": "salgada",
    "grande": 59.0,
    "broto": 49.0
  },
  {
    "id": "f-maracatum",
    "name": "Maracatum",
    "desc": "Atum, mussarela e cebola",
    "kind": "salgada",
    "grande": 57.0,
    "broto": 47.0
  },
  {
    "id": "f-marguerita",
    "name": "Marguerita",
    "desc": "Mussarela, manjericão e tomate",
    "kind": "salgada",
    "grande": 51.0,
    "broto": 41.0
  },
  {
    "id": "f-mexicana",
    "name": "Mexicana",
    "desc": "Calabresa, milho verde, ovos e musssarela",
    "kind": "salgada",
    "grande": 57.0,
    "broto": 47.0
  },
  {
    "id": "f-milho-verde",
    "name": "Milho Verde",
    "desc": "Milho verde e catupiry ou mussarela",
    "kind": "salgada",
    "grande": 53.0,
    "broto": 43.0
  },
  {
    "id": "f-mineira",
    "name": "Mineira",
    "desc": "Calabresa, cebola e mussarela",
    "kind": "salgada",
    "grande": 55.0,
    "broto": 45.0
  },
  {
    "id": "f-moda-da-casa",
    "name": "Moda da Casa",
    "desc": "Bacon, ovos, cebola, mussarela e calabresa",
    "kind": "salgada",
    "grande": 59.0,
    "broto": 49.0
  },
  {
    "id": "f-moda-do-chefe",
    "name": "Moda do Chefe",
    "desc": "Presunto, tomate, milho, catupiry, bacon e ovos",
    "kind": "salgada",
    "grande": 59.0,
    "broto": 49.0
  },
  {
    "id": "f-moda-do-cliente",
    "name": "Moda do Cliente",
    "desc": "Presunto, palmito, mussarela, catupiry e bacon",
    "kind": "salgada",
    "grande": 60.0,
    "broto": 50.0
  },
  {
    "id": "f-moda-do-pizzaiolo",
    "name": "Moda do Pizzaiolo",
    "desc": "Frango, presunto, milho, mussarela e bacon",
    "kind": "salgada",
    "grande": 59.0,
    "broto": 49.0
  },
  {
    "id": "f-mussarela",
    "name": "Mussarela",
    "desc": "Mussarela e tomate",
    "kind": "salgada",
    "grande": 48.0,
    "broto": 38.0
  },
  {
    "id": "f-napolitana",
    "name": "Napolitana",
    "desc": "Mussarela, tomate fatiado e parmesão",
    "kind": "salgada",
    "grande": 52.0,
    "broto": 42.0
  },
  {
    "id": "f-palmito",
    "name": "Palmito",
    "desc": "Palmito e mussarela",
    "kind": "salgada",
    "grande": 53.0,
    "broto": 43.0
  },
  {
    "id": "f-paulistana",
    "name": "Paulistana",
    "desc": "Calabresa, frango, palmito, mussarela e bacon",
    "kind": "salgada",
    "grande": 56.0,
    "broto": 46.0
  },
  {
    "id": "f-peito-de-peru",
    "name": "Peito de Peru",
    "desc": "Peito de peru, mussarela e bacon",
    "kind": "salgada",
    "grande": 61.0,
    "broto": 51.0
  },
  {
    "id": "f-peperone",
    "name": "Peperone",
    "desc": "Peperone e mussarela",
    "kind": "salgada",
    "grande": 59.0,
    "broto": 49.0
  },
  {
    "id": "f-peperone-especial",
    "name": "Peperone Especial",
    "desc": "Peperone e cream cheese",
    "kind": "salgada",
    "grande": 61.0,
    "broto": 51.0
  },
  {
    "id": "f-pernambucana",
    "name": "Pernambucana",
    "desc": "Mussarela, carne seca, catupiry, champignon e bacon",
    "kind": "salgada",
    "grande": 68.0,
    "broto": 58.0
  },
  {
    "id": "f-peruana",
    "name": "Peruana",
    "desc": "Calabresa, ovos, catupiry, champignon e bacon",
    "kind": "salgada",
    "grande": 59.0,
    "broto": 49.0
  },
  {
    "id": "f-philadelphia",
    "name": "Philadelphia",
    "desc": "Peito de peru, cream cheese, e tomate seco",
    "kind": "salgada",
    "grande": 62.0,
    "broto": 52.0
  },
  {
    "id": "f-pizza-jj",
    "name": "Pizza Jj",
    "desc": "Frango, catupiry, champignon e milho",
    "kind": "salgada",
    "grande": 57.0,
    "broto": 47.0
  },
  {
    "id": "f-portuguesa",
    "name": "Portuguesa",
    "desc": "Presunto, mussarela, cebola e ovos",
    "kind": "salgada",
    "grande": 56.0,
    "broto": 46.0
  },
  {
    "id": "f-presunto",
    "name": "Presunto",
    "desc": "Presunto e mussarela",
    "kind": "salgada",
    "grande": 54.0,
    "broto": 44.0
  },
  {
    "id": "f-quatro-queijos",
    "name": "Quatro Queijos",
    "desc": "Provolone, catupiry, mussarela e parmesão",
    "kind": "salgada",
    "grande": 59.0,
    "broto": 49.0
  },
  {
    "id": "f-romanesca",
    "name": "Romanesca",
    "desc": "Presunto, champignon, catupiry e bacon",
    "kind": "salgada",
    "grande": 59.0,
    "broto": 49.0
  },
  {
    "id": "f-siciliana",
    "name": "Siciliana",
    "desc": "Mussarela, champignon, bacon e tomate fatiado",
    "kind": "salgada",
    "grande": 59.0,
    "broto": 49.0
  },
  {
    "id": "f-strogonoff",
    "name": "Strogonoff",
    "desc": "Frango, requeijão, creme de leite e batata palha",
    "kind": "salgada",
    "grande": 58.0,
    "broto": 48.0
  },
  {
    "id": "f-tomate-seco",
    "name": "Tomate Seco",
    "desc": "Rúcula, tomate seco e mussarela",
    "kind": "salgada",
    "grande": 54.0,
    "broto": 44.0
  },
  {
    "id": "f-tomatelli",
    "name": "Tomatelli",
    "desc": "Escarola, tomate seco,alho frito e mussarela",
    "kind": "salgada",
    "grande": 57.0,
    "broto": 47.0
  },
  {
    "id": "f-toscana",
    "name": "Toscana",
    "desc": "Calabresa moida, mussarela e parmesão",
    "kind": "salgada",
    "grande": 54.0,
    "broto": 44.0
  },
  {
    "id": "f-tres-queijos",
    "name": "Tres Queijos",
    "desc": "Mussarela, catupiry e parmesão",
    "kind": "salgada",
    "grande": 56.0,
    "broto": 46.0
  },
  {
    "id": "f-tropical",
    "name": "Tropical",
    "desc": "Mussarela, carne seca, milho, palmito e bacon",
    "kind": "salgada",
    "grande": 66.0,
    "broto": 56.0
  },
  {
    "id": "f-vegetariana",
    "name": "Vegetariana",
    "desc": "Brócolis, milho, ervilha e palmito",
    "kind": "salgada",
    "grande": 48.0,
    "broto": 38.0
  },
  {
    "id": "f-oreo",
    "name": "Oreo",
    "desc": "Chocolate ao leite e biscoito óreo",
    "kind": "doce",
    "grande": 60.0,
    "broto": null
  },
  {
    "id": "f-ouro-branco",
    "name": "Ouro Branco",
    "desc": "Chocolate ao leite e bombom ouro branco",
    "kind": "doce",
    "grande": 60.0,
    "broto": null
  },
  {
    "id": "f-predileta",
    "name": "Predileta",
    "desc": "Peito de peru, requeijão, mussarela, bacon, tomate e cebola",
    "kind": "salgada",
    "grande": 65.0,
    "broto": 55.0
  },
  {
    "id": "f-thunnus",
    "name": "Thunnus",
    "desc": "Atum, requeijão, mussarela e bacon",
    "kind": "salgada",
    "grande": 62.0,
    "broto": 52.0
  },
  {
    "id": "f-nordestina",
    "name": "Nordestina",
    "desc": "Carne seca, cebola roxa, cream cheese e pimenta biquinho",
    "kind": "salgada",
    "grande": 69.0,
    "broto": 59.0
  },
  {
    "id": "f-banana",
    "name": "Banana",
    "desc": "Leite condensado, banana fatiada, canela e mussarela",
    "kind": "doce",
    "grande": 52.0,
    "broto": 42.0
  },
  {
    "id": "f-banana-especial",
    "name": "Banana Especial",
    "desc": "Banana com chocolate",
    "kind": "doce",
    "grande": 54.0,
    "broto": 44.0
  },
  {
    "id": "f-brigadeiro",
    "name": "Brigadeiro",
    "desc": "Chocolate e granulado",
    "kind": "doce",
    "grande": 52.0,
    "broto": null
  },
  {
    "id": "f-prestigio",
    "name": "Prestigio",
    "desc": "Chocolate com coco ralado",
    "kind": "doce",
    "grande": 52.0,
    "broto": null
  },
  {
    "id": "f-romeu-e-julieta",
    "name": "Romeu e Julieta",
    "desc": "Queijo e goiabada",
    "kind": "doce",
    "grande": 54.0,
    "broto": 44.0
  },
  {
    "id": "f-m-m-s",
    "name": "M&M's",
    "desc": "Chocolate com m&ms",
    "kind": "doce",
    "grande": 60.0,
    "broto": 50.0
  },
  {
    "id": "f-mesclada",
    "name": "Mesclada",
    "desc": "Chocolate branco e chocolate preto",
    "kind": "doce",
    "grande": 55.0,
    "broto": 45.0
  },
  {
    "id": "f-kitkat",
    "name": "KitKat",
    "desc": "Chocolate e kit kat",
    "kind": "doce",
    "grande": 55.0,
    "broto": 45.0
  },
  {
    "id": "f-sonho-de-valsa",
    "name": "Sonho de Valsa",
    "desc": "Chocolate ao leite e bombons",
    "kind": "doce",
    "grande": 60.0,
    "broto": 50.0
  },
  {
    "id": "f-uva-verde",
    "name": "Uva Verde",
    "desc": "Uva com chocolate",
    "kind": "doce",
    "grande": 55.0,
    "broto": 45.0
  },
  {
    "id": "f-prestigio-2",
    "name": "Prestígio",
    "desc": "Chocolate com coco ralado",
    "kind": "salgada",
    "grande": null,
    "broto": 42.0
  }
]

export const menuItems: MenuItem[] = [
  {
    "id": "73344",
    "name": "Porção Batata Frita Simples",
    "price": 40.0,
    "group": "porcao"
  },
  {
    "id": "73345",
    "name": "Porção de Batata Frita c/ Cheddar e Bacon",
    "price": 50.0,
    "group": "porcao"
  },
  {
    "id": "73346",
    "name": "Porção de Calabresa Acebolada",
    "price": 50.0,
    "group": "porcao"
  },
  {
    "id": "73473",
    "name": "Dolly Guaraná 2 L",
    "price": 9.0,
    "group": "bebida"
  },
  {
    "id": "73475",
    "name": "Dolly Limão 2 L",
    "price": 8.0,
    "group": "bebida"
  },
  {
    "id": "73482",
    "name": "Draft",
    "price": 15.0,
    "group": "bebida"
  },
  {
    "id": "73488",
    "name": "Fanta Laranja 2 L",
    "price": 16.0,
    "group": "bebida"
  },
  {
    "id": "73489",
    "name": "Fanta Laranja 350 ml",
    "price": 8.0,
    "group": "bebida"
  },
  {
    "id": "73491",
    "name": "Fanta Uva 2 L",
    "price": 16.0,
    "group": "bebida"
  },
  {
    "id": "73492",
    "name": "Fanta Uva 350 ml",
    "price": 8.0,
    "group": "bebida"
  },
  {
    "id": "73499",
    "name": "Guaraná Antarctica 350 ml",
    "price": 8.0,
    "group": "bebida"
  },
  {
    "id": "73500",
    "name": "Guaraná Antarctica 600 ml",
    "price": 10.0,
    "group": "bebida"
  },
  {
    "id": "73501",
    "name": "Guaraviton",
    "price": 6.0,
    "group": "bebida"
  },
  {
    "id": "73502",
    "name": "H2o Limão",
    "price": 8.0,
    "group": "bebida"
  },
  {
    "id": "73503",
    "name": "H2o Limoneto",
    "price": 8.0,
    "group": "bebida"
  },
  {
    "id": "73504",
    "name": "Heineken 0 Alcool Long Neck",
    "price": 12.0,
    "group": "bebida"
  },
  {
    "id": "73506",
    "name": "Heineken Long Neck",
    "price": 12.0,
    "group": "bebida"
  },
  {
    "id": "73513",
    "name": "Petra 269 ml",
    "price": 6.0,
    "group": "bebida"
  },
  {
    "id": "73517",
    "name": "Schweppes Lata",
    "price": 8.0,
    "group": "bebida"
  },
  {
    "id": "73519",
    "name": "Skol 269 ml",
    "price": 6.0,
    "group": "bebida"
  },
  {
    "id": "73523",
    "name": "Smirnoff Ice",
    "price": 15.0,
    "group": "bebida"
  },
  {
    "id": "73525",
    "name": "Sprite 2 L",
    "price": 16.0,
    "group": "bebida"
  },
  {
    "id": "73529",
    "name": "Stella Long Neck",
    "price": 12.0,
    "group": "bebida"
  },
  {
    "id": "73531",
    "name": "Suco Caixa - 1 L",
    "price": 10.0,
    "group": "bebida"
  },
  {
    "id": "73536",
    "name": "Suco Lata 350 ml",
    "price": 7.0,
    "group": "bebida"
  },
  {
    "id": "73538",
    "name": "Sukita Laranja 2 L",
    "price": 10.0,
    "group": "bebida"
  },
  {
    "id": "73541",
    "name": "Sukita Tubaina 2 L",
    "price": 10.0,
    "group": "bebida"
  },
  {
    "id": "73542",
    "name": "Sukita Uva 2 L",
    "price": 10.0,
    "group": "bebida"
  },
  {
    "id": "73544",
    "name": "Vinho da Casa Seco",
    "price": 25.0,
    "group": "bebida"
  },
  {
    "id": "73545",
    "name": "Vinho da Casa Suave",
    "price": 25.0,
    "group": "bebida"
  },
  {
    "id": "73448",
    "name": "Água c/ Gás",
    "price": 5.0,
    "group": "bebida"
  },
  {
    "id": "73449",
    "name": "Água S/ Gás",
    "price": 5.0,
    "group": "bebida"
  },
  {
    "id": "73450",
    "name": "Agua Tonica 350 ml",
    "price": 8.0,
    "group": "bebida"
  },
  {
    "id": "73452",
    "name": "Amistel",
    "price": 6.0,
    "group": "bebida"
  },
  {
    "id": "73453",
    "name": "Batida Jurupinga",
    "price": 20.0,
    "group": "bebida"
  },
  {
    "id": "73457",
    "name": "Brahma Duplo Malte 350 ml",
    "price": 7.0,
    "group": "bebida"
  },
  {
    "id": "73459",
    "name": "Budweiser Long Neck",
    "price": 12.0,
    "group": "bebida"
  },
  {
    "id": "73460",
    "name": "Caipirinha - Cachaça",
    "price": 20.0,
    "group": "bebida"
  },
  {
    "id": "73461",
    "name": "Caipirinha - Saquê",
    "price": 25.0,
    "group": "bebida"
  },
  {
    "id": "73463",
    "name": "Coca Cola 1 L",
    "price": 12.0,
    "group": "bebida"
  },
  {
    "id": "73464",
    "name": "Coca Cola 2 L",
    "price": 17.0,
    "group": "bebida"
  },
  {
    "id": "73465",
    "name": "Coca Cola 350 ml",
    "price": 8.0,
    "group": "bebida"
  },
  {
    "id": "73466",
    "name": "Coca Cola 600 ml",
    "price": 10.0,
    "group": "bebida"
  },
  {
    "id": "73467",
    "name": "Coca Cola Zero 1 L",
    "price": 12.0,
    "group": "bebida"
  },
  {
    "id": "73468",
    "name": "Coca Cola Zero 2 L",
    "price": 17.0,
    "group": "bebida"
  },
  {
    "id": "73469",
    "name": "Coca Cola Zero 350 ml",
    "price": 8.0,
    "group": "bebida"
  },
  {
    "id": "73470",
    "name": "Coca Cola Zero 600 ml",
    "price": 8.0,
    "group": "bebida"
  },
  {
    "id": "73471",
    "name": "Corona Long Neck",
    "price": 12.0,
    "group": "bebida"
  }
]

export const bordas: Borda[] = [
  {
    "id": "73336",
    "name": "Borda de Catupiry Original",
    "price": 15.0
  },
  {
    "id": "73337",
    "name": "Borda de Chedder",
    "price": 15.0
  },
  {
    "id": "73338",
    "name": "Borda de Cream Cheese",
    "price": 15.0
  },
  {
    "id": "73339",
    "name": "Borda Mussarela",
    "price": 15.0
  },
  {
    "id": "73341",
    "name": "Borda de Chocolate",
    "price": 15.0
  },
  {
    "id": "73342",
    "name": "Borda Romeu e Julieta",
    "price": 15.0
  }
]

export const neighborhoods: Neighborhood[] = [
  {
    "name": "Butantã",
    "fee": 15.0
  },
  {
    "name": "Campo Limpo",
    "fee": 15.0
  },
  {
    "name": "Caxingui",
    "fee": 15.0
  },
  {
    "name": "Chacara Agrindus",
    "fee": 15.0
  },
  {
    "name": "Cidade Intercap",
    "fee": 12.0
  },
  {
    "name": "Cidade São Francisco",
    "fee": 20.0
  },
  {
    "name": "Cidade Universitária",
    "fee": 20.0
  },
  {
    "name": "Cohab Raposo Tavares",
    "fee": 15.0
  },
  {
    "name": "Fazenda Morumbi",
    "fee": 20.0
  },
  {
    "name": "Instituto de Previdência",
    "fee": 12.0
  },
  {
    "name": "Jaguaré",
    "fee": 30.0
  },
  {
    "name": "Jardim Alvorada",
    "fee": 5.0
  },
  {
    "name": "Jardim Amaralina",
    "fee": 15.0
  },
  {
    "name": "Jardim Ampliação",
    "fee": 15.0
  },
  {
    "name": "Jardim América",
    "fee": 10.0
  },
  {
    "name": "Jardim Arpoador",
    "fee": 15.0
  },
  {
    "name": "Jardim Batalha",
    "fee": 12.0
  },
  {
    "name": "Jardim Boa Vista",
    "fee": 15.0
  },
  {
    "name": "Jardim Bom Tempo",
    "fee": 15.0
  },
  {
    "name": "Jardim Bonfiglioli",
    "fee": 10.0
  },
  {
    "name": "Jardim Cambará",
    "fee": 15.0
  },
  {
    "name": "Jardim Cambará Ii",
    "fee": 15.0
  },
  {
    "name": "Jardim Celeste",
    "fee": 5.0
  },
  {
    "name": "Jardim Claudia",
    "fee": 8.0
  },
  {
    "name": "Jardim Clementino",
    "fee": 20.0
  },
  {
    "name": "Jardim Colombo",
    "fee": 15.0
  },
  {
    "name": "Jardim Conceição",
    "fee": 20.0
  },
  {
    "name": "Jardim D'abril",
    "fee": 15.0
  },
  {
    "name": "Jardim das Esmeraldas",
    "fee": 9.0
  },
  {
    "name": "Jardim das Palmas",
    "fee": 15.0
  },
  {
    "name": "Jardim das Vertentes",
    "fee": 7.0
  },
  {
    "name": "Jardim do Lago",
    "fee": 15.0
  },
  {
    "name": "Jardim Dracena",
    "fee": 5.0
  },
  {
    "name": "Jardim Educandário",
    "fee": 12.0
  },
  {
    "name": "Jardim Esmeralda",
    "fee": 12.0
  },
  {
    "name": "Jardim Ester",
    "fee": 12.0
  },
  {
    "name": "Jardim Ester Yolanda",
    "fee": 12.0
  },
  {
    "name": "Jardim Ferreira",
    "fee": 7.0
  },
  {
    "name": "Jardim Frei Galvão",
    "fee": 8.0
  },
  {
    "name": "Jardim Gilda Maria",
    "fee": 15.0
  },
  {
    "name": "Jardim Guaraú",
    "fee": 8.0
  },
  {
    "name": "Jardim Guayana",
    "fee": 8.0
  },
  {
    "name": "Jardim Guedala",
    "fee": 15.0
  },
  {
    "name": "Jardim Helena",
    "fee": 15.0
  },
  {
    "name": "Jardim Henriqueta",
    "fee": 15.0
  },
  {
    "name": "Jardim Jaqueline",
    "fee": 3.0
  },
  {
    "name": "Jardim João Xxiii",
    "fee": 15.0
  },
  {
    "name": "Jardim Jussara",
    "fee": 8.0
  },
  {
    "name": "Jardim Kuabara",
    "fee": 8.0
  },
  {
    "name": "Jardim Leonor - Taboão da Serra",
    "fee": 15.0
  },
  {
    "name": "Jardim Londrina",
    "fee": 9.0
  },
  {
    "name": "Jardim Luiza",
    "fee": 7.0
  },
  {
    "name": "Jardim Maria do Carmo",
    "fee": 6.0
  },
  {
    "name": "Jardim Maria Duarte",
    "fee": 15.0
  },
  {
    "name": "Jardim Maria Luiza",
    "fee": 12.0
  },
  {
    "name": "Jardim Maria Rosa",
    "fee": 15.0
  },
  {
    "name": "Jardim Monte Alegre",
    "fee": 9.0
  },
  {
    "name": "Jardim Monte Kemel",
    "fee": 8.0
  },
  {
    "name": "Jardim Olimpia",
    "fee": 5.0
  },
  {
    "name": "Jardim Olinda",
    "fee": 12.0
  },
  {
    "name": "Jardim Oliveiras",
    "fee": 20.0
  },
  {
    "name": "Jardim Ouro Preto",
    "fee": 8.0
  },
  {
    "name": "Jardim Paulo Vi",
    "fee": 15.0
  },
  {
    "name": "Jardim Pazini",
    "fee": 8.0
  },
  {
    "name": "Jardim Peri Peri",
    "fee": 8.0
  },
  {
    "name": "Jardim Pinheiros",
    "fee": 12.0
  },
  {
    "name": "Jardim Raposo Tavares",
    "fee": 8.0
  },
  {
    "name": "Jardim Rosa Maria",
    "fee": 8.0
  },
  {
    "name": "Jardim Santa Rosa",
    "fee": 9.0
  },
  {
    "name": "Jardim Santa Terezinha - Taboão da Serra",
    "fee": 10.0
  },
  {
    "name": "Jardim Santos Dumont",
    "fee": 15.0
  },
  {
    "name": "Jardim Sarah",
    "fee": 20.0
  },
  {
    "name": "Jardim São Jorge",
    "fee": 15.0
  },
  {
    "name": "Jardim Trussardi",
    "fee": 9.0
  },
  {
    "name": "Jardim Umarizal",
    "fee": 15.0
  },
  {
    "name": "Morumbi",
    "fee": 20.0
  },
  {
    "name": "Paineiras do Morumbi",
    "fee": 20.0
  },
  {
    "name": "Paraisópolis",
    "fee": 20.0
  },
  {
    "name": "Parque Assunção",
    "fee": 9.0
  },
  {
    "name": "Parque Esmeralda",
    "fee": 15.0
  },
  {
    "name": "Parque Ipe",
    "fee": 15.0
  },
  {
    "name": "Parque Laguna",
    "fee": 15.0
  },
  {
    "name": "Parque Monte Alegre - Taboão da Serra",
    "fee": 10.0
  },
  {
    "name": "Parque Pinheiros",
    "fee": 22.0
  },
  {
    "name": "Parque Rebouças",
    "fee": 20.0
  },
  {
    "name": "Parque Taboão",
    "fee": 15.0
  },
  {
    "name": "Portal do Morumbi",
    "fee": 20.0
  },
  {
    "name": "Rio Pequeno",
    "fee": 15.0
  },
  {
    "name": "Vila Alba",
    "fee": 15.0
  },
  {
    "name": "Vila Albano",
    "fee": 4.0
  },
  {
    "name": "Vila Andrade",
    "fee": 15.0
  },
  {
    "name": "Vila Dalva",
    "fee": 15.0
  },
  {
    "name": "Vila Gomes",
    "fee": 12.0
  },
  {
    "name": "Vila Indiana",
    "fee": 15.0
  },
  {
    "name": "Vila Morse",
    "fee": 12.0
  },
  {
    "name": "Vila Nova Alba",
    "fee": 15.0
  },
  {
    "name": "Vila Santa Luzia",
    "fee": 10.0
  },
  {
    "name": "Vila Suzana",
    "fee": 15.0
  },
  {
    "name": "Vila Sônia",
    "fee": 9.0
  },
  {
    "name": "Vila Sônia do Taboão",
    "fee": 15.0
  }
]
