import Vue from 'vue';
import Router from 'vue-router';
import Form from '@/components/Form';
import CompanionChoice from '@/components/CompanionChoice';
import GameAssessment from '@/components/GameAssessment';
import ParentsInfo from '@/components/ParentsInfo';
import SpellingGames from '@/components/SpellingGames';
import DragAndDrop from '@/components/DragAndDrop';
import GameList from '@/components/GameList';
import Welcome from "@/components/Welcome";
import Portal from '@/components/Portal';
import EndGame from '@/components/EndGame';
import WordRecognition from '@/components/WordRecognition';
import SyllableClassification from '@/components/SyllableClassification';
import AuditiveComprehension from '@/components/AuditiveComprehension';
import ReadingProfile from '@/components/ReadingProfile';



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
