import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import WelcomePage from "./welcome"
import OrderPage from "./order"
import ProductPage from "./product"
import SupplierPage from "./supplier"
import FacilityPage from "./facility"
import ItemPage from "./item"

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = { display: <WelcomePage /> }
    this.displayProductPage = this.displayProductPage.bind(this)
    this.displaySupplierPage = this.displaySupplierPage.bind(this)
    this.displayWelcomePage = this.displayWelcomePage.bind(this)
    this.displayOrderPage = this.displayOrderPage.bind(this)
    this.displayFacilityPage = this.displayFacilityPage.bind(this)
    this.displayItemPage = this.displayItemPage.bind(this)
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home" onClick={this.displayWelcomePage}>
            Inventory Management
          </Navbar.Brand>
          <Nav className="nav">
            <Nav.Link
              className="nav-item"
              href="#Product"
              onClick={this.displayProductPage}
            >
              Product
            </Nav.Link>
            <Nav.Link
              className="nav-item"
              href="#Supplier"
              onClick={this.displaySupplierPage}
            >
              Supplier
            </Nav.Link>
            <Nav.Link
              className="nav-item"
              href="#Items"
              onClick={this.displayItemPage}
            >
              Items
            </Nav.Link>
            <Nav.Link
              className="nav-item"
              href="#Orders"
              onClick={this.displayOrderPage}
            >
              Orders
            </Nav.Link>
            <Nav.Link
              className="nav-item"
              href="#Facility"
              onClick={this.displayFacilityPage}
            >
              Facility
            </Nav.Link>
          </Nav>
        </Navbar>
        {this.state.display}
      </div>
    )
  }

  displayWelcomePage() {
    this.setState({ display: <WelcomePage /> })
  }

  displayProductPage() {
    this.setState({ display: <ProductPage /> })
  }

  displaySupplierPage() {
    this.setState({ display: <SupplierPage /> })
  }

  displayOrderPage() {
    this.setState({ display: <OrderPage /> })
  }

  displayFacilityPage() {
    this.setState({ display: <FacilityPage /> })
  }

  displayItemPage() {
    this.setState({ display: <ItemPage /> })
  }
}

export default Page
