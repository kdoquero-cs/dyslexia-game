import Vue from 'vue';
import Router from 'vue-router';
import Form from '@/components/Form';
import CompagnionChoice from '@/components/CompagnionChoice';
import EndJewelPortal from '@/components/EndJewelPortal';
import Game10 from '@/components/Game10';
import GameAssessment from '@/components/GameAssessment';
import ParentsInfo from '@/components/ParentsInfo';



import Tips from '@/components/Tips';
import DragAndDrop from '@/components/DragAndDrop';
import GameList from '@/components/GameList';
import Welcome from "@/components/Welcome";

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
      path: '/endJewelPortal',
      name: 'EndJewelPortal',
      component: EndJewelPortal
    },
    {
      path: '/compagnion',
      name: 'CompagnionChoice',
      component:CompagnionChoice
    },
    {
      path: '/game10',
      name: 'Game10',
      component:Game10
    },
    {
      path: "/gameAssessment",
      name:"GameAssessment",
      component: GameAssessment
    },
    {
      path: "/parentsInfo",
      name:"ParentsInfo",
      component: ParentsInfo
    }
  ]
})
