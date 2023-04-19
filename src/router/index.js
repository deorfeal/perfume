import {
    createWebHistory,
    createRouter
} from "vue-router";

import About from "@/views/About.vue";
import Families from "@/views/Families.vue";

const routes = [{
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/families",
        name: "families",
        component: Families,
    },
];

const router = createRouter({
    history: createWebHistory('/perfume/'),
    routes,
});

export default router;