import { lazy } from "react";

const Dashboard = lazy(()=>import('../page/Dashboard'));
const Departments = lazy(()=>import('../page/Departments'));
const Students = lazy(()=>import('../page/Students'));

export const AllRoute = [
    {path:'/', component: Dashboard, title:'dashboard' },
    {path:'/departments', component: Departments, title:'Departments' },
    {path:'/students', component: Students, title:'Students' },
]