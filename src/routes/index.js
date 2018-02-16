import React from 'react'
import Home from './Home'
import Classic from './Classic'
  
const ModernResume = () => (
<div className="h-100 p-4">
    <h2>Under contruction</h2>
</div>
)

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/classic',
        component: Classic
    },
    {
        path: '/modern',
        component: ModernResume
    }
]

export default routes