import { createRouter, createWebHistory } from "vue-router"
import EventList from "../views/EventList.vue"
import About from "../views/About.vue"
import OrganizerOnly from "../views/OrganizerOnly.vue"

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/organizer",
    name: "Organizer",
    component: OrganizerOnly
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
