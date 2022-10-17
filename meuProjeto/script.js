

const manga1 = {
    imagem: "imagens/NarutoCapa.webp", 
    link: "https://pt.wikipedia.org/wiki/Naruto",
    titulo: "Naruto",
    nomeOriginal: "Naruto\n",
    sinopse: "Doze anos antes da história começar, a Vila oculta da folha foi atacada por um espirito conhecido  como Raposa de nove caudas. A fim de interromper a destruição e inumeras mortes causadas pelo ataque, o líder da vila, conhecido como Quarto Hokage, sacrificou sua prórpia vida para selar o demônio raposa dentro do recém-nascido Naruto Uzumaki.\n\n12 anos após os acontecimentos, o agora jovem ninja Naruto, que viveu toda sua infancia sendo marginalizado e ostracizado pela vila, a qual ainda ve o garoto como o proprio demonio raposa, busca realizar seu maior sonho: Se tornar o novo Hokage, ganhando assim o reconhecimento de todos os habitantes da Vila da folha \n",
    nomeRoteirista: "Masashi Kishimoto",
    nomeArtista: "Masashi Kishimoto",
    genero: ["Ação", "aventura", "comédia", "drama"],
    concluido: true,
    anoLancamento: 1999,
    anoEncerramento: 2015,
    numeroVolumes: 72,
    editoraOriginal: "Shueisha",
    revistaPublicada: "Weekly shonen jump",
    publicacaoBrasil: true,
    editoraBrasileira: "panini"
}

const manga2 = {
    imagem:"imagens/RealCapa.jfif",
    link: "https://pt.wikipedia.org/wiki/Real_(mang%C3%A1)",
    titulo: "Real",
    nomeOriginal: "Real\n",
    sinopse: "A história gira em torno de três adolescentes: Nomiya Tomomi, um rapaz que abandonou o ensino médio, Togawa Kiyoharu, um ex-corredor que agora joga basquete sobre cadeira de rodas e Takahashi Hisanobu, um popular líder do time de basquetebol da escola que agora está paraplegico em função de um acidente. \n\nReal apresenta um elenco de personagens que se veem marginalizados pela sociedade, mas todos unidos por uma característica comum: o desejo de jogar basquete, mesmo sem lugar para jogar. Nomiya, tendo abandonado o ensino médio, não tem expectativa de futuro. Togawa, tendo uma personalidade difícil, encontra-se constantemente brigando com seus próprios companheiros de equipe. Takahashi, antes um popular líder de equipe, agora se vê incapaz de se mover do peito para baixo.\n\nReal também lida com a realidade das deficiências físicas e a inferioridade psicológica contra a qual os personagens lutam. Os personagens rompem suas próprias barreiras psicológicas pouco a pouco. \n",
    nomeRoteirista: "Takehiko Inoue",
    nomeArtista: "Takehiko Inoue",
    genero: ["Drama", "esportes", "slice of life"],
    concluido: true,
    anoLancamento: 1999,
    anoEncerramento: "em andamento",
    numeroVolumes: 15,
    editoraOriginal: "Shueisha",
    revistaPublicada: "Shuukan young jump",
    publicacaoBrasil: true,
    editoraBrasileira: "panini"
}
const manga3 = {
    link: "https://en.wikipedia.org/wiki/Frieren",
    imagem: "imagens/FrierenCapa.jfif",
    titulo: "Frieren e a jornada para o além",
    nomeOriginal: "Sousou no Frieren\n",
    sinopse: "A aventura acabou mas a jornada continua para uma jovem elfa que apenas começou a aprender o que é a vida\n\nA elfa Frieren e seus companheiros derrotaram o Rei demonio e trouxeram paz para sua terra. após o termino da jornada, eles se separam e vão viver suas pacatas vidas, com a promessa de um dia se reencontrarem.\n\n Porém, sendo uma elfa, Frieren é praticamente imortal e viverá centenas de anos a mais que seu antigo grupo . Como ela irá lidar com a mortalidade de seus amigos? Poderá Frieren encontrar satisfação em sua vida e aprender a entender o que a vida significa para os humanos ao seu redor? Uma nova jornada se inicia para encontrar as respostas\n",
    nomeRoteirista: "Yamada Kanehiko",
    nomeArtista: "Abe Tsukasa",
    genero: ["Aventura", "comédia", "drama", "fantasia", "slice of life"],
    concluido: true,
    anoLancamento: 2020,
    anoEncerramento: "em andamento",
    numeroVolumes: 9,
    editoraOriginal: "Shogagukan",
    revistaPublicada: "Shuukan shonen sunday",
    publicacaoBrasil: true,
    editoraBrasileira: "Panini"
}

const arrayMangas = []
if(manga1.concluido===true){
    arrayMangas.push(manga1)
}else{
    alert (`o item ${manga1.titulo} não foi adicionado`)
}

if(manga2.concluido===true){
    arrayMangas.push(manga2)
}else{
    alert (`o item ${manga2.titulo} não foi adicionado`)
}

if(manga3.concluido===true){
    arrayMangas.push(manga3)
}else{
    alert (`o item ${manga3.titulo} não foi adicionado`)
}
   
    
console.log(arrayMangas)


let mediaVolumes = (arrayMangas[0].numeroVolumes + arrayMangas[1].numeroVolumes + arrayMangas[2].numeroVolumes) / 3// semana 1, item 3
console.log("a média de volumes é", mediaVolumes)

const verificaConclusao = arrayMangas[0].concluido && arrayMangas[1].concluido && arrayMangas[2].concluido   // semana 1, item 4
console.log("todos os mangás estão concluidos? :", verificaConclusao)

//semana5

let arrayObjetosEmString =""

arrayMangas.forEach(element => {
    //5-1
    arrayObjetosEmString = element.genero.join(", ")
    //5-2
    console.log (`Titulo: ${element.titulo.toUpperCase()} \nTitulo Original: ${element.nomeOriginal.toUpperCase()} \nSinopse: ${element.sinopse} \nRoteirista: ${element.nomeRoteirista} \nDesenhista: ${element.nomeArtista} \nGenero:${arrayObjetosEmString} \nConcluido: ${element.concluido} \nAno de Lançamento:${element.anoLancamento} \nAno de Encerramento: ${element.anoEncerramento} \nNumero de Volumes Compilados:${element.numeroVolumes} \nEditora Original: ${element.editoraOriginal} \nRevista Publicada: ${element.revistaPublicada} \nPublicado no Brasil: ${element.publicacaoBrasil} \nEditora Brasileira: ${element.editoraBrasileira}`)
    
});

//semana 6-1


const funcaoDevolveRelatorioEmString = (objeto) => {
    console.log(`Titulo: ${objeto.titulo.toUpperCase()} \nTitulo Original: ${objeto.nomeOriginal.toUpperCase()} \nSinopse: ${objeto.sinopse} \nRoteirista: ${objeto.nomeRoteirista} \nDesenhista: ${objeto.nomeArtista} \nGenero:${objeto.genero} \nConcluido: ${objeto.concluido} \nAno de Lançamento:${objeto.anoLancamento} \nAno de Encerramento: ${objeto.anoEncerramento} \nNumero de Volumes Compilados:${objeto.numeroVolumes} \nEditora Original: ${objeto.editoraOriginal} \nRevista Publicada: ${objeto.revistaPublicada} \nPublicado no Brasil: ${objeto.publicacaoBrasil} \nEditora Brasileira: ${objeto.editoraBrasileira}`)

}
funcaoDevolveRelatorioEmString(manga1)

// semana 6-2

// let pesquisa = prompt("qual manga").toUpperCase()

// let retornaObjetoOuAlert = (array, string) => {
//     let objetoARetronar = ""
//     for (i in array) {
//         if (array[i].titulo.toUpperCase().includes(string) || array[i].nomeOriginal.toUpperCase().includes(string) === string) {
//             objetoARetronar = console.log(array[i])
//             return objetoARetronar

//         }
//     }
//     if (objetoARetronar.includes(string) !== string) {
//         return alert("nenhum item encontrado")
//     }
// }

// retornaObjetoOuAlert(arrayMangas,pesquisa)

//semana 11


const main = document.querySelector("main")
main.setAttribute ("id", "container")
const listaDeMangas = document.createElement("section")
main.insertAdjacentElement("beforeend",listaDeMangas)
listaDeMangas.setAttribute("id", "listaDeMangas")
listaDeMangas.setAttribute("class","listaDeMangas")
const pegaLista = document.getElementById("listaDeMangas")

for (let i in arrayMangas){//criação da lista através do dom
    listaDeMangas.innerHTML+=`<section class = manga id = manga> 
    <img class = imagem id = imagem src = ${arrayMangas[i].imagem}>
    <ul>
    <li><a href= ${arrayMangas[i].link} target="_blank"> Titulo: ${arrayMangas[i].titulo}</a></li>
    <li>Nome Original: ${arrayMangas[i].nomeOriginal}</li>
    <li>Sinopse: ${arrayMangas[i].sinopse}</li>
    <li>Roteirista: ${arrayMangas[i].nomeRoteirista}</li>
    <li>Desenhista: ${arrayMangas[i].nomeArtista}</li>
    <li>Genero: ${arrayMangas[i].genero}</li>
    <li>Concluido: ${arrayMangas[i].concluido}</li>
    <li>Ano de lançamento: ${arrayMangas[i].anoLancamento}</li>
    <li>Ano de encerramento: ${arrayMangas[i].anoEncerramento}</li>
    <li>numero de volumes: ${arrayMangas[i].numeroVolumes}</li>
    <li>Editora Original: ${arrayMangas[i].editoraOriginal}</li>
    <li>Revista Publicada: ${arrayMangas[i].revistaPublicada}</li>
    <li>Publicado no Brasil: ${arrayMangas[i].publicacaoBrasil}</li>
    <li>Editora brasileira:${arrayMangas[i].editoraBrasileira}</li>
    </ul>
    
    </section>`
}



 