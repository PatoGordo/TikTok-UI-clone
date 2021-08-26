import { RouteRecordRaw } from "vue-router";

import Home from "@/views/Home.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
];
