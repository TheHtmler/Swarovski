import Vue from 'vue'
import Router from 'vue-router'

import Heritage from 'components/heritage/Heritage'
import PhotoBooth from 'components/photobooth/PhotoBooth'
import Workshop from 'components/workshop/Workshop'
import Inspiration from 'components/inspiration/Inspiration'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [{
        path: '/',
        redirect: '/heritage',
        name: 'Heritage',
        component: Heritage
    }, {
        path: '/heritage',
        name: 'Heritage',
        component: Heritage
    }, {
        path: '/photobooth',
        name: 'PhotoBooth',
        component: PhotoBooth
    }, {
        path: '/workshop',
        name: 'Workshop',
        component: Workshop
    }, {
        path: '/inspiration',
        name: 'Inspiration',
        component: Inspiration
    }]
})