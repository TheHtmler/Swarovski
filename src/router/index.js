import Vue from 'vue'
import Router from 'vue-router'

import Home from 'components/home/Home'
import Heritage from 'components/heritage/Heritage'
import PhotoBooth from 'components/photobooth/PhotoBooth'
import Workshop from 'components/workshop/Workshop'
import Inspiration from 'components/inspiration/Inspiration'
import Detail from 'components/details/Detail'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        /* {
                    path: '/',
                    redirect: '/heritage',
                    name: 'Heritage',
                    component: Heritage
                }, */
        {
            path: '/',
            name: 'Home',
            component: Home,
            children: [{
                    path: '/heritage',
                    name: 'Heritage',
                    component: Heritage
                },
                {
                    path: '/photobooth',
                    name: 'PhotoBooth',
                    component: PhotoBooth
                },
                {
                    path: '/workshop',
                    name: 'Workshop',
                    component: Workshop
                },
                {
                    path: '/inspiration',
                    name: 'Inspiration',
                    component: Inspiration
                }
            ]

        },
        {
            path: '/detail',
            name: 'Detail',
            component: Detail
        }
    ]
})