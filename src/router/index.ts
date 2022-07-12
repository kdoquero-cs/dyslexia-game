import Vue from 'vue';
import Router from 'vue-router';
import Form from '@/components/Form.vue';
import CompanionChoice from '@/components/CompanionChoice.vue';
import GameAssessment from '@/components/GameAssessment.vue';
import ParentsInfo from '@/components/ParentsInfo.vue';
import SpellingGames from '@/components/SpellingGames.vue';
import DragAndDrop from '@/components/DragAndDrop.vue';
import GameList from '@/components/GameList.vue';
import Welcome from "@/components/Welcome.vue";
import Portal from '@/components/Portal.vue';
import EndGame from '@/components/EndGame.vue';
import WordRecognition from '@/components/WordRecognition.vue';
import SyllableClassification from '@/components/SyllableClassification.vue';
import AuditiveComprehension from '@/components/AuditiveComprehension.vue';
import ReadingProfile from '@/components/ReadingProfile.vue';



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/DragAndDrop',
      name: 'DragAndDrop',
      component: DragAndDrop
    },
    {
      path: '/gamelist',
      name: 'gamelist',
      component: GameList
    },
    {
      path: '/companion',
      name: 'CompanionChoice',
      component: CompanionChoice
    },
    {
      path: "/game-assessment",
      name: "GameAssessment",
      component: GameAssessment
    },
    {
      path: "/parents-information",
      name: "ParentsInfo",
      component: ParentsInfo
    },
    {
      path: "/portal",
      name: "Portal",
      component: Portal
    }, 
    {
      path: '/word-recognition',
      name: 'WordRecognition',
      component: WordRecognition
    },
    {
      path: "/end-game",
      name: "EndGame",
      component: EndGame
    }, {
      path: "/oral-spelling",
      name: "OralSpelling",
      component: SpellingGames
    },
    {
      path: "/memory-span",
      name: "MemorySpan",
      component: SpellingGames
    },
    {
      path: '/syllable-classification',
      name: 'SyllableClassification',
      component: SyllableClassification
    },
    {
      path: '/auditive-comprehension',
      name: 'AuditiveComprehension',
      component: AuditiveComprehension
    },{
      path: '/reading-profile',
      name: 'ReadingProfile',
      component: ReadingProfile
    }
  ]
})
