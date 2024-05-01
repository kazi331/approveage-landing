import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Navbar from '../components/Navbar'

export const Route = createRootRoute({
    component: () => (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <footer>footer</footer>
            <TanStackRouterDevtools position="bottom-right" />
        </>
    ),
})
