import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'',
      component: ()=>import('@/pages/TheMainPage.vue'),
      children: [
        {
          path:'users',
          component: ()=> import ('@/pages/TheUsers.vue')
        },
        {
          path:'add',
          component: ()=> import ('@/pages/TheAddUserForm.vue')
                }
      ]
    }
  ]
})

export default router
