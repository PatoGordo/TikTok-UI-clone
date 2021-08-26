import { RouteRecordRaw } from "vue-router";

import Home from "@/views/Home/Index.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
];
