import { onRequestPost as __api_booking_js_onRequestPost } from "c:\\Users\\ADMIN\\taxirachgia-tmc\\functions\\api\\booking.js"

export const routes = [
    {
      routePath: "/api/booking",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_booking_js_onRequestPost],
    },
  ]