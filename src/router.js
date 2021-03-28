import Vue from 'vue'
import Router from "vue-router"
import Product1 from './components/Product1'
// import Detail from './components/Detail'
import Products from './components/Products'
import NewProduct from './components/NewProduct'

Vue.use(Router)


const routes = [
  {
    path:'/',
    component:Products
  },
  {
    path:'/new',
    component:NewProduct
  },
  {
    path: '/product1',
    component: Product1
  },
]

const router = new Router({
  routes: routes
})

export default router
