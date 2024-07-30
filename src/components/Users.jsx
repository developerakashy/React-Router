import { Outlet, useSearchParams } from "react-router-dom"

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const isUserActive = searchParams.get('filter')

    return(
        <div>
            <h1>Users</h1>
            <Outlet/>
            <div>
                <button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
                <button onClick={() => setSearchParams({})}>Reset Filter</button>
            </div>
            {
                isUserActive ? <h2>Showing Active Users</h2>
                 : <h2>Showing All Users</h2>
            }
        </div>
    )
}
