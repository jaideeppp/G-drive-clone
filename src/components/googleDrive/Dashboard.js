import React from 'react'
import NavbarComponent from './NavbarComponent'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'

export default function Dashboard() {
    return (
        <div>
            <NavbarComponent />
            <Container fluid>
                <AddFolderButton />
            </Container>
        </div>
    )
}
