import { Loader } from "components/Loader/Loader"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Container, Header, LinkNav } from "./Layout.styled"



export const Layout =()=>{
    return (
        <Container>
            <Header>
                <nav>
                    <LinkNav to="/">
                        Home
                    </LinkNav>
                    <LinkNav to="/movies">
                        Movies
                    </LinkNav>
                </nav>
            </Header>
            <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
        </Container>
    )
}