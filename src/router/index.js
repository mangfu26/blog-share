import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld"
import TestView from "@/views/TestView"
// 导入子路由组件
import P1 from "@/components/P1"
import P2 from "@/components/P2"
import P3 from "@/components/P3"


const routes = [
    {
        name: "index",
        path: "/",
        component: HelloWorld
    }, {
        name: "testView",
        path: "/tv",
        component: TestView,
        // setps组件子路由
        children: [
            {path: 'p1', component: P1},
            {path: 'p2', component: P2},
            {path: 'p3', component: P3},
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;