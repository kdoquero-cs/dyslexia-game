<template>
<div class="main-container">
        <h1 class="h1">
            <span>Bilan de dépistage</span><span class="mockup"> MOCKUP</span>
        </h1>
        <img src="https://contentsquare-foundation.org/wp-content/themes/tribes-foundations/public/assets/images/rebrand/logo.svg?tv=1.0.0"
            alt="LogoContentsquareFoundation">
        <div id="banner" class="banner">
            <div class="print">
                <h2 class="h2">Vos informations</h2>
                <button primary class="action" @click="print()">Imprimer le rapport</button>
            </div>
            <div>
                <ul class="ul">
                    <li class="listitem">
                        <span class="kidDetail">Nom :</span>
                        <span>
                            <span class="tempText">{{ user.name}}</span>
                            <!-- here goes the variable for the kid's name -->
                        </span>
                    </li>
                    <li class="listitem">
                        <span class="kidDetail">Age:</span>
                        <span>
                            <!-- here goes the variable for the kid's year -->
                            <span class="tempText">{{user.years}}</span>
                            <span> ans et </span>
                        </span>
                        <span class="kidmonth">
                            <!-- here goes the variable for the kid's month -->
                            <span class="tempText">{{user.months}}</span>
                            <span> mois.</span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div id="banner" class="banner">
            <div class="print">
                <h2 class="h2">Introduction</h2>
            </div>
            <p> Ceci est un test de dépistage. <br>
                Cela ne fait pas office de diagnostic. Quel que soit les résultats obtenus, ils ne pourraient remplacer
                l’avis d’un professionnel. <br>
                Il s’agit d’une indication, mais nous vous invitons à vous rendre chez un spécialiste du langage pour
                obtenir un diagnostic réel en cas de besoin. <br>
                <br>
                Les résultats des jeux permettent d’avoir une vue d’ensemble sur les compétences langagières et
                cognitives de votre enfant et ainsi dépister d’éventuels troubles pouvant indiquer une dyslexie.<br>
                <br>
                La structure de bilan s’articule de cette manière :<br>
                Pour chaque exercice, vous trouverez une description de la tâche ainsi que des compétences évaluées.
                <br>
                Un tableau vous présentera ensuite les résultats obtenus, accompagnés d’une explication de ces
                résultats.<br>
                Les résultats sont comparés à une norme, fondée sur les scores obtenus par des enfants de la même
                tranche d’âge, ne présentant pas de dyslexie.
            </p>
            <div id="banner" class="banner">
                <div class="print">
                    <h2 class="h2">Qu'est ce que la dyslexie ?</h2>
                </div>
                <p> La dyslexie fait partie de la famille des troubles neurodéveloppemental des apprentissages, tout
                    comme la dyspraxie, la dysgraphie ou encore la dyscalculie. Il s’agit d’un trouble du développement
                    touchant environ 10% de la population française dont 3 fois plus de garçons que de filles. Son
                    dépistage est donc un enjeu majeur de santé publique. <br>

                    La dyslexie se manifeste par des difficultés lors de l’acquisition du langage écrit. La vitesse, la
                    précision et l’automatisation de la lecture sont touchés en priorité, mais cela peut également nuire
                    à la compréhension d’un texte écrit. Les personnes atteintes de dyslexie peuvent aussi montrer des
                    troubles au niveau de la perception des sons et de leur production. <br>

                    On distingue deux types de dyslexie : <br>
                <ul>
                    <li>La dyslexie phonologique, définie par des difficultés à associer une lettre à un son, rencontrée
                        dans 60% des cas.</li>
                    <li>La dyslexie lexicale, caractérisée par une difficulté à reconnaître les mots visuellement, les
                        décomposer lettre par lettre et les visualiser dans sa tête. On observe cette dyslexie chez 30%
                        des personnes touchées. </li>
                    <li>Enfin la dyslexie mixte associe les deux formes.</li>
                </ul>
                L’enjeu de ce trouble du neurodéveloppement réside avant tout dans son dépistage. En effet, pour être
                diagnostiqué comme dyslexique, l’enfant doit présenter un retard d’acquisition du langage d’au moins 18
                mois, malgré un quotient intellectuel dans la norme et sans troubles visuels auditifs ou attentionnels
                associés.<br>
                Ainsi, proposer un dépistage dès les premiers signes de suspicion et dans l’attente souvent longue d’un
                bilan orthophonique permettrait pour les parents de confirmer ou non leur suspicion mais surtout de
                mettre en place des activités et d’aménager les temps et méthodes d’apprentissage autour des difficultés
                de l’enfant. <br>

                Dans l’attente d’un diagnostic, nous pouvons vous inviter à être vigilants aux éventuelles difficultés
                suivantes : <br>
                <ul>
                    <li>Des difficultés à se concentrer</li>
                    <li>Des difficultés à différencier des mots graphiquement proches</li>
                    <li>Des difficultés à différencier des lettres graphiquement proches</li>
                    <li>Des difficultés à manipuler les unités phonologiques et graphologiques</li>
                    <li>Difficultés à épeler des mots inconnus ou trop longs</li>
                    <li>Des troubles de motricité, de coordination et de mémoire.</li>
                </ul>
                </p>
                <div id="assessment">
                    <h2 class="h2">Description des tâches et Résultats</h2>
                </div>
                <div class="print">
                    <h3 class="h3">1. Tâche de reconnaissance de mots :</h3>
                </div>
                <p id="wordsTask"><span class="task">Description :</span> Lors de cet exercice, deux séries de 6 mots
                    fréquents sont présentées. Ils sont à classer selon 3 catégories : <br>
                <ul>
                    <li>Mots réguliers : l’association graphème-phonème est cohérente, c’est-à-dire que chaque lettre
                        correspond au son attendu. Il n’y a pas de piège.</li>
                    <li>Mots irréguliers : l’association graphème-phonème n’est pas cohérente. </li>
                    <li>Mots non existants : des mots respectant la structure et les règles de la langue française mais
                        n’existants pas.</li>
                </ul>
                </p>
                <p id="wordsTask"><span class="task">Compétences évaluées :</span> Cet exercice permet d’évaluer les
                    compétences orthographique, phonologique et sémantique. Soit la capacité à associer à un mot un son,
                    un sens et une représentation visuelle.
                </p>
                <div class="print">
                    <table class="table" aria-labelledby="wordsTableTitle" aria-describedby="wordsTask">
                        <tbody>
                            <tr>
                                <th scope="col" class="colHeader"><span class="sr-only">Score types</span>
                                </th>
                                <th scope="col" class="colHeader">Mots réguliers</th>
                                <th scope="col" class="colHeader">Mots irréguliers</th>
                                <th scope="col" class="colHeader">Mots non existants</th>
                            <tr>
                            <tr>
                                <th scope="row" class="rowHeader">Score</th>
                                <td class="row result">
                                    <span class="result">
                                        <span class="tempText">{{gameResults.WORD_RECOGNITION ? gameResults.WORD_RECOGNITION.GeneralWords : 0}}</span>
                                        <!-- here goes the variable for the kid's Regular word error percentage -->
                                    </span>
                                </td>
                                <td class="row result">
                                    <span class="result">
                                        <span class="tempText">{{gameResults.WORD_RECOGNITION ? gameResults.WORD_RECOGNITION.IrregularWords : 0}}</span>
                                        <!-- here goes the variable for the kid's Irregular word error percentage -->
                                    </span>
                                </td>
                                <td class="row result">
                                    <span class="result">
                                        <span class="tempText">{{gameResults.WORD_RECOGNITION.WordsWithNoMeaning || 0}}</span>
                                        <!-- here goes the variable for the kid's Logatoma error percentage -->
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="rowHeader">Moyenne norme
                                </th>
                                <td class="row">
                                    <span class="result">
                                        3
                                        <!-- here goes the variable for the Regular word norm rate -->
                                    </span>
                                </td>
                                <td class="row">
                                    <span class="result">
                                        3
                                        <!-- here goes the variable for the Irregular word norm rate -->
                                    </span>
                                </td>
                                <td class="row">
                                    <span class="result">
                                        3.5
                                        <!-- here goes the variable for the Logatoma norm rate -->
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="rowHeader">Ecart-type
                                </th>
                                <td class="row">
                                    <span class="result">
                                        1
                                        <!-- here goes the variable for the Regular word Standard error rate -->
                                    </span>
                                </td>
                                <td class="row">
                                    <span class="result">
                                        1
                                        <!-- here goes the variable for the Regular word Standard error rate -->
                                    </span>
                                </td>
                                <td class="row">
                                    <span class="result">
                                        0.5
                                        <!-- here goes the variable for the Regular word Standard error rate -->
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p id="wordsTask"><span class="task">Interpretation :</span>
                    <p v-if="gameResults.WORD_RECOGNITION.GeneralWords < norms.WordRecognition.GeneralWords || gameResults.WORD_RECOGNITION.IrregularWords < norms.WordRecognition.IrregularWords || gameResults.WORD_RECOGNITION.WordsWithNoMeaning < norms.WordRecognition.WordsWithNoMeaning">Les résultats obtenus par votre enfant indiquent des performances inférieures pour certaines ou
                    toutes les compétences évaluées à celles attendues pour un enfant de son âge pour ce type
                    d’exercice.</p>
                    <p v-else >Les résultats obtenus par votre enfant indiquent des performances en cohérence avec celles attendues
                    pour un enfant de son âge pour ce type d’exercice.
					</p>
    
                <div class="print">
                    <h3 class="h3">2. Tâche de reconnaissance de syllabes :</h3>
                </div>
                <p id="wordsTask"><span class="task">Description :</span> Lors de cet exercice, deux séries de 6
                    syllabes sont présentées. Elles sont à classer selon 2 catégories : <br>
                <ul>
                    <li>Mots monosyllabiques : des mots existant composés d’une seule syllabe.</li>
                    <li>Syllabe unique de mots plurisyllabiques : des syllabes extraites de mots plurisyllabiques, mais
                        ne pouvant constituer un mot à elle seule. </li>
                </ul>
                </p>
                <p id="wordsTask"><span class="task">Compétences évaluées :</span> Cet exercice permet d’évaluer les
                    compétences orthographique, phonologique, ainsi que la conscience phonologique. Soit la capacité à
                    associer à un mot un son et une représentation visuelle, mais également à le manipuler pour en créer
                    un nouveau.
                </p>
                <div class="print">
                    <table class="table" aria-labelledby="wordsTableTitle" aria-describedby="wordsTask">
                        <tbody>
                            <tr>
                                <th scope="col" class="colHeader"><span class="sr-only">Score types</span>
                                </th>
                                <th scope="col" class="colHeader">Mots</th>
                                <th scope="col" class="colHeader">Syllabes</th>
                            <tr>
                            <tr>
                                <th scope="row" class="rowHeader">Score</th>
                                <td class="row result">
                                    <span class="result">
                                        <span class="tempText">{{gameResults.SYLLABLE_CLASSIFICATION.Words|| 0}}</span>
                                        <!-- here goes the variable for the kid's Regular word error percentage -->
                                    </span>
                                </td>
                                <td class="row result">
                                    <span class="result">
                                        <span class="tempText">{{gameResults.SYLLABLE_CLASSIFICATION.Syllables|| 0}}</span>
                                        <!-- here goes the variable for the kid's Irregular word error percentage -->
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="rowHeader">Moyenne norme
                                </th>
                                <td class="row">
                                    <span class="result">
                                        5.5
                                        <!-- here goes the variable for the word norm rate -->
                                    </span>
                                </td>
                                <td class="row">
                                    <span class="result">
                                        5.5
                                        <!-- here goes the variable for the syllabes norm rate -->
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="rowHeader">Ecart-type
                                </th>
                                <td class="row">
                                    <span class="result">
                                        0.5
                                        <!-- here goes the variable for the word Standard error rate -->
                                    </span>
                                </td>
                                <td class="row">
                                    <span class="result">
                                        0.5
                                        <!-- here goes the variable for the Syllabes Standard error rate -->
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p id="wordsTask"><span class="task">Interpretation :</span>
                    <p v-if="gameResults.SYLLABLE_CLASSIFICATION < norms.SyllableRecognition">Les résultats obtenus par votre enfant indiquent des performances inférieures pour certaines ou
                    toutes les compétences évaluées à celles attendues pour un enfant de son âge pour ce type
                    d’exercice.</p>
                    <p v-else>Les résultats obtenus par votre enfant indiquent des performances en cohérence avec celles attendues
                    pour un enfant de son âge pour ce type d’exercice.</p> 
        
                <div class="print">
                    <h3 class="h3">3. Tâche de compréhension auditivo-verbale :</h3>
                </div>
                <p id="wordsTask"><span class="task">Description :</span>Lors de cet exercice, le participant écoute une
                    histoire, puis doit répondre à un ensemble de questions de compréhension. <br>
                </p>
                <p id="wordsTask"><span class="task">Compétences évaluées :</span> Cette tâche fait appel à la capacité
                    de compréhension et nous sert ici de tâche contrôle. Nous nous attendons à ce qu’elle soit réussie
                    par tous les participants car les personnes dyslexiques ne présentent généralement pas de
                    difficultés de compréhension associées.
                </p>
                <div class="print">
                    <h4 class="h4">Résultats :</h4>
                </div>
                <div> <ul>
                    <li> Score : {{gameResults.AUDITIVE_COMPREHENSION || 0}} </li>
                    <li> Moyenne : 90 </li>
                    <li> Ecart-type : 10 </li>
                    </ul>
                </div>
                <p id="wordsTask"><span class="task">Interpretation :</span>
                   <p v-if="gameResults.AUDITIVE_COMPREHENSION < norms.Comprehension.Mean" >  Les résultats obtenus par votre enfant indiquent des performances inférieures pour certaines ou
                    toutes les compétences évaluées à celles attendues pour un enfant de son âge pour ce type
                    d’exercice.</p>
                    <p v-else>Les résultats obtenus par votre enfant indiquent des performances en cohérence avec celles attendues
                    pour un enfant de son âge pour ce type d’exercice.</p> 
                <div class="print">
                    <h3 class="h3">4. Tâche de mots épelés à reconstituer :</h3>
                </div>
                <p id="wordsTask"><span class="task">Description :</span>Lors de cet exercice, le participant entend une
                    liste de 6 mots épelés lettre après lettre, la moitié étant réguliers et l’autre étant irréguliers.
                    Le participant doit les reconstituer et les énoncer à l’oral l’un après l’autre. <br>
                </p>
                <p id="wordsTask"><span class="task">Compétences évaluées :</span> Cette tâche fait appel à des
                    compétences d’orthographe, de phonologie, d’imagerie mentale et de conscience phonologique. Soit la
                    capacité à analyser et manipuler mentalement un ensemble de graphèmes dans sa globalité pour
                    reconnaître et constituer un mot.
                </p>
                <div class="print">
                    <h4 class="h4">Résultats :</h4>
                </div>
                <div>
                    <ul>
                        <li> Score : {{gameResults.ORAL_SPELLING || 0}} </li>
                        <li> Moyenne : 90 </li>
                        <li> Ecart-type : 10 </li>
                    </ul>
                </div>
                <p id="wordsTask"><span class="task">Interpretation :</span>
                    <p v-if="gameResults.ORAL_SPELLING < norms.Spelling.Mean"> Les résultats obtenus par votre enfant indiquent des performances inférieures pour certaines ou
                    toutes les compétences évaluées à celles attendues pour un enfant de son âge pour ce type
                    d’exercice.</p>
                    <p v-else> Les résultats obtenus par votre enfant indiquent des performances en cohérence avec celles attendues
                    pour un enfant de son âge pour ce type d’exercice.</p>
                <div class="print">
                    <h3 class="h3">Conclusion générale</h3>
                </div>
                <p>Pour rappel, ce jeux est un dépistage et non un diagnostique. Pour des résultats plus précis, nous
                    vous recommandons d'aller voir un spécialiste. <br>
                    Les résultats suggèrent que tout va bien mais vous pouvez toujours prendre rendez-vous chez un
                    spécilaiste si vous le souhaitez.<br>
                    A la suite des résultats, nous vous conseillons de prendre rendez-vous chez un spécialiste pour
                    établir un bilan plus complet.<br>
                </p>
            </div>

            <div id="banner" class="banner">
            </div>
            <div class="print">
                <h2 class="h2">Recommandations complémentaires</h2>
            </div>
            <div class="print">
                <h3 class="h3">Recommandation pour les parents</h3>
            </div>
            <p> Nous pouvons également vous recommander de proposer à votre enfant les aménagements suivants : </p>
            <ul>
                <li>Favoriser les activités autour de la musique (également en parascolaire).</li>
                <li>Proposer des activités autour du sport et de la danse pour développer la coordination.</li>
                <li>Utilisation de l’extension Readapt adaptant le texte selon le profil et les difficultés de l’enfant.
                </li>
                <li>Ateliers langage proposés en ludothèques.</li>
            </ul>
            <div class="print">
                <h3 class="h3">Recommandation pour les enseignants</h3>
            </div>
            <p> De la même manière, des recommandations auprès des instituteurs peuvent participer à aider votre enfant
                à progresser à son rythme. En voici quelques-unes :</p>
            <ul>
                <li>Dicter les consignes à l’oral.</li>
                <li>Éviter de faire lire un texte à haute voix.</li>
                <li>Réduire la taille des textes à lire.</li>
                <li>Rallonger le temps allouer à l’enfant pour l’exercice.</li>
                <li>Lui apprendre à surligner les mots clés.</li>
                <li>Ne pas insister sur l’entrainement à la copie.</li>
                <li>Proposer du matériel ludique et aéré en réduisant les blocs de texte.</li>
                <li>Évaluer à l’oral autant que possible.</li>
                <li>Créer autant que possible un environnement bienveillant.</li>
            </ul>
            <div class="print">
                <h3 class="h3">Idées de jeux à proposer</h3>
            </div>
            <p> Dans l’attente d’un diagnostic, et en complément de ces aménagements, l’utilisation de jeux éducatifs,
                notamment grâce à un support matériel et concret permet de mieux appréhender des concepts abstraits et
                de faciliter les apprentissages. <br>
                Voici une liste de jeux à reproduire facilement selon les compétences à travailler:</p>
            <ul>
                <li>Associer des personnages ou figurines aux lettres de l’alphabet. L’enfant peut créer une histoire et
                    des mots avec ses personnages et ainsi manipuler et visualiser les lettres autrement 🡪 conscience
                    phonologique, imagerie mentale, sémantique, phonologie et orthographe.</li>
                <li>Créer des anagrammes à reconstituer 🡪 imagerie mentale et orthographe.</li>
                <li>Couper plusieurs mots en deux ou trois syllabes. Les disposer des deux côtés de la feuille et
                    demander à l’enfant de relier les deux parties du mot 🡪 imagerie mentale, conscience phonologique
                    et orthographe.</li>
                <li>Disposer plusieurs cartes représentant des objets et d’autres cartes avec les 26 lettres de
                    l’alphabet. Demander à l’enfant de donner tous les mots commençant ou se terminant par une lettre
                    piochée dans le tas de cartes « alphabet »🡪 phonologie, orthographe, sémantique et conscience
                    phonologique.</li>
                <li>Disposer plusieurs syllabes en vrac et demander à l’enfant de constituer autant de mots possibles en
                    chenilles ou en scrabble 🡪 orthographe conscience phonologique, sémantique et imagerie mentale.
                </li>
                <li>Donner le dernier phonème d’un mot énoncé puis créer un mot commençant par ce phonème. 🡪 conscience
                    phonologique, imagerie mentale et orthographe.</li>
                <li>Donner la dernière syllabe d’un mot énoncé puis créer un mot commençant par cette syllabe. 🡪
                    conscience phonologique, imagerie mentale et orthographe.</li>
                <li>Faire deviner un mot par son sens 🡪 Sémantique et orthographe.</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { computed } from "@vue/composition-api";
import SpellingGames from "./SpellingGames.vue";
import store from "../store";
import json from "../assets/norms/default-norms.json";

export default {
  components: { SpellingGames },
  name: "GameAssessment",
  setup: function () {

    const user = computed(() => store.user.value);
    const gameResults = computed(() => store.gamesResults.value);
    const norms = computed(()=> json);
    return {
      print: () => window.print(),
      user,
      gameResults,
      norms,
    };
  },
};
</script>

<style scoped>
.background {
  background-color: #ffffff;
}
.print {
  display: flex;
  justify-content: space-between;
}

.ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.tempText {
  font-style: italic;
}

.kidDetail {
  font-weight: bold;
}

.table {
  border: 1px solid #666;
  border-collapse: collapse;
}

.rowHeader {
  padding: 0.5rem;
  border: 1px solid #666;
  text-align: left;
}

.colHeader {
  padding: 0.5rem;
  border: 1px solid #666;
  text-align: left;
  background-color: #e0e0e0;
}

.row {
  padding: 0.5rem;
  border: 1px solid #666;
  text-align: left;
}

.tableTitle {
  text-align: left;
}
.task {
  font-weight: bold;
}
.link {
  color: #143250;
  cursor: pointer;
  text-decoration: underline;
}
.h1 {
  font-size: 32px;
  font-weight: bold;
}
.h2 {
  font-size: 24px;
  font-weight: bold;
}
.h3 {
  font-size: 18px;
  font-weight: bold;
}
.h4 {
  font-size: 16px;
  font-weight: bold;
}

.main-container {
  padding: 5% 10%;
  background-color: var(--colors-gray-white);
  overflow: auto;
  text-align: left;
}
.mockup {
  color: red;
}
</style>
