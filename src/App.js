import Experience from './Experience.js';
import Category from './Category.js';
import './App.css';

var exp = [
  {title:'Agent de sécurité incendie',date:'ACP protection (2014 - 2019)',content:['Contrôle du matériel de sécurité incendie','Intervention sanitaire']},
  {title:'Formateur / Manager',date:'Mcdonald (2008 - 2014)',content:['Formation des équipiers aux normes de productions', 'Planification et gestion de l\'équipe pendant le rush', 'Surveillance de la satisfaction de la clientèle pour tous les produits et services de l\'entreprise', 'Aide à la résolution de problèmes et à la recherche de solutions aux enjeux existants.']},]
var cat = [
  {title:'SOFT SKILLS',cats:['- Esprit d\'équipe','- Gestion du stress','- Esprit d\'analyse']},
  {title:'LANGUES',cats:['- Français','- Anglais niveau B2']},
  {title:'COMPÉTENCES TECHNIQUES',cats:['- HTML & CSS','- Javascript','- React js','- Node js']},

]

let catList=[];
cat.forEach((item)=>{
  catList.push( <Category category={item} />)
})


let itemList=[];
exp.forEach((item)=>{
  itemList.push( <Experience experience={item} />)
})
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="resume">
          <div class="col_left">
            <div class="pp random" />
            { catList }
          </div>
          <div class="col_right">
            <div class="title">Lorem Ipsum</div>
            <div class="subtitle">Je suis passionné par les nouvelles
technologies et le dessin que je pratique
en traditionnel et en digital, j'aime
concevoir des projets avec le souci du
détail. Etant en reconversion en tant
que développeur web full-stack, je souhaite intégrer <b>Nom de l'entreprise</b> pour une alternance de 12
mois au rythme de 3 semaines en
entreprises et 1 semaine en cours.</div>
            {itemList}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
