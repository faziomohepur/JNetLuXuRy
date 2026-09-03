import { onRequestPost as __api_booking_js_onRequestPost } from "E:\\#Repo-Local\\JNetLuXuRy\\functions\\api\\booking.js"

export const routes = [
    {
      routePath: "/api/booking",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_booking_js_onRequestPost],
    },
  ]