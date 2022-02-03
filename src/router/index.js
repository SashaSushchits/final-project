import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage'
import HeaderContacts from '@/pages/HeaderContacts'
import ProductPage from '@/pages/ProductPage'
import CartPage from '@/pages/CartPage'
import NotFoundPage from '@/pages/NotFoundPage'
import OrderPage from '@/pages/OrderPage'
import CommentsPage from '@/pages/CommentsPage'
import MapPage from '@/pages/MapPage'
import CatalogPage from '@/pages/CatalogPage'

Vue.use(VueRouter)

const routes = [
  {name: 'main', component: MainPage, path:'/'},
  {name: 'catalog', component: CatalogPage, path:'/catalog'},
  {name: 'product', component: ProductPage, path:'/product/:id'},
  {name: 'contacts', component: HeaderContacts, path:'/contacts'},
  {name: 'comments', component: CommentsPage, path:'/comments'},
  {name: 'maps', component: MapPage, path:'/maps'},
  {name: 'cart', component: CartPage, path:'/cart'},
  {name: 'order', component: OrderPage, path:'/order'},
  {name: 'notFound', component: NotFoundPage, path:'/*'},
]

const router = new VueRouter({
  routes
})

export default router
