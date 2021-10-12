import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import Tips from '@/components/Tips';
// import DragAndDrop from '@/components/DragAndDrop';
import DragAndDrop2 from '@/components/DragAndDrop2';
import Page4 from '@/components/Page4';



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
    // {
    //   path: '/DragAndDrop1',
    //   name: 'DragAndDrop1',
    //   component: DragAndDrop1
    // },
    {
      path: '/DragAndDrop2',
      name: 'DragAndDrop2',
      component: DragAndDrop2
    },
    {
      path: '/page4',
      name: 'Page4',
      component: Page4
    }
  ]
})
