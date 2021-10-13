import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import Tips from '@/components/Tips';
// import DragAndDrop from '@/components/DragAndDrop';
import DragAndDrop from '@/components/DragAndDrop';
import GameList from '@/components/GameList';



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
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
    }
  ]
})
