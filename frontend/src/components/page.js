import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import displays from './display';
import WelcomePage from './welcome';

class Page extends React.Component{

    constructor(props) {
        super(props)
        this.state = {display: <WelcomePage/>}
        this.displayProductPage = this.displayProductPage.bind(this)
        this.displayWelcomePage = this.displayWelcomePage.bind(this)
        this.displayOrderPage = this.displayOrderPage.bind(this)
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home" onClick={this.displayWelcomePage}>
                        Inventory Management
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#" onClick={this.displayProductPage}>Product</Nav.Link>
                        <Nav.Link href="#">Supplier</Nav.Link>
                        <Nav.Link href="#">Items</Nav.Link>
                        <Nav.Link href="#" onClick={this.displayOrderPage}>Orders</Nav.Link>
                    </Nav>
                </Navbar>
                {this.state.display}
            </div>
        )
    }

    displayWelcomePage (){
        this.setState({display: <WelcomePage />})
    }

    displayProductPage () {
        this.setState({display: displays.product})
    }

    displayOrderPage (){
        this.setState({display: displays.order})
    }

}

export default Page