import Vue from 'vue';
import Router from 'vue-router';
import Form from '@/components/Form';
import CompagnionChoice from '@/components/CompagnionChoice';
import EndJewelPortal from '@/components/EndJewelPortal';

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
      path: '/start',
      name: 'Play',
      component: Tips
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
    }
  ]
})
