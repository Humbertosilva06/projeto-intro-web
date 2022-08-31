//1 e 2- criação do item e conjunto de itens

const manga = "Naruto"
const nomeOriginal = "Naruto"
const sinopse="Doze anos antes da história começar, a Vila oculta da folha foi atacada por um espirito conhecido  como Raposa de nove caudas. A fim de interromper a destruição e inumeras mortes causadas pelo ataque, o líder da vila, conhecido como Quarto Hokage, sacrificou sua prórpia vida para selar o demônio raposa dentro do recém-nascido Naruto Uzumaki.\n\n12 anos após os acontecimentos, o agora jovem ninja Naruto, que viveu toda sua infancia sendo marginalizado e ostracizado pela vila, a qual ainda ve o garoto como o proprio demonio raposa, busca realizar seu maior sonho: Se tornar o novo Hokage, ganhando assim o reconhecimento de todos os habitantes da Vila da folha "
const nomeRoteirista="Masashi Kishimoto"
const nomeArtista = "Masashi Kishimoto"
const genero="Ação, aventura comédia, drama"
const anoLancamento=1999
let anoEncerramento = 2015
let concluido = true
let numeroVolumes = 72
let editoraOriginal = "Shueisha"
let revistaPublicada = "Weekly shonen jump"
const publicacaoBrasil = true
let editoraBrasileira = "panini"

const manga2 = "Real"
const nomeOriginal2 = "Real"
const sinopse2="A história gira em torno de três adolescentes: Nomiya Tomomi, um rapaz que abandonou o ensino médio, Togawa Kiyoharu, um ex-corredor que agora joga basquete sobre cadeira de rodas e Takahashi Hisanobu, um popular líder do time de basquetebol da escola que agora está paraplegico em função de um acidente. \n\nReal apresenta um elenco de personagens que se veem marginalizados pela sociedade, mas todos unidos por uma característica comum: o desejo de jogar basquete, mesmo sem lugar para jogar. Nomiya, tendo abandonado o ensino médio, não tem expectativa de futuro. Togawa, tendo uma personalidade difícil, encontra-se constantemente brigando com seus próprios companheiros de equipe. Takahashi, antes um popular líder de equipe, agora se vê incapaz de se mover do peito para baixo.\n\nReal também lida com a realidade das deficiências físicas e a inferioridade psicológica contra a qual os personagens lutam. Os personagens rompem suas próprias barreiras psicológicas pouco a pouco. "
const nomeRoteirista2 = "Takehiko Inoue"
const nomeArtista2 = "Takehiko Inoue"
const genero2="Drama, esportes, slice of life"
const anoLancamento2=1999
let anoEncerramento2 = "em andamento"
let concluido2 = false
let numeroVolumes2 = 15
let editoraOriginal2 = "Shueisha"
let revistaPublicada2 = "Shuukan young jump"
const publicacaoBrasil2= true
let editoraBrasileira2="panini"

const manga3 = "Frieren e a jornada para o além"
const nomeOriginal3 = "Sousou no Frieren"
const sinopse3="A aventura acabou mas a vida continua para uma jovem elfa que apenas começou a aprender o que é a vida\n\nA elfa Frieren e seus companheiros derrotaram o Rei demonio e trouxeram paz para sua terra. após o termino da jornada, eles se separam e vão viver suas pacatas vidas, com a promessa de um dia se reencontrarem.\n\n Porém, sendo uma elfa, Frieren é praticamente imortal e viverá centenas de anos a mais que seu antigo grupo . Como ela irá lidar com a mortalidade de seus amigos? Poderá Frieren encontrar satisfação em sua vida e aprender a entender o que a vida significa para os humanos ao seu redor? Uma nova jornada se inicia para encontrar as respostas"
const nomeRoteirista3="Yamada Kanehiko"
const nomeArtista3 ="Abe Tsukasa"
const genero3="Aventura, comédia, drama, fantasia, slice of life"
const anoLancamento3=2020
let anoEncerramento3 = "em andamento"
let concluido3 = false
let numeroVolumes3 = 9
let editoraOriginal3 = "Shogagukan"
let revistaPublicada3 = "Weekly shonen jump"
const publicacaoBrasil3 = true
let editoraBrasileira3= "Panini"

//3 caulculo média volumes
let mediaVolumes = (numeroVolumes + numeroVolumes2 + numeroVolumes3)/3
console.log ("a média de volumes é", mediaVolumes)

//4 - verificação booleano

const verificaConclusao = concluido && concluido2 && concluido3
console.log(verificaConclusao)

