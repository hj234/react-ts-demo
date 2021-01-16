import AgencyList from "../pages/agency-list/AgencyList";
import EditAgency from "../pages/agency-list/EditAgency";
import Login from "../pages/login/Login";

export const mainRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
    
  }
];

export const adminRoutes = [
  {
    path: "/list",
    component: AgencyList,
  },
  {
    path: "/edit",
    component: EditAgency,
  },
]