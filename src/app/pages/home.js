import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button, Container, Row, Col } from 'react-bootstrap';

import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import FilterBar from "../components/filterbar";
import { PRODUCTS } from "../dummyData.js";
import "../styles/home.css";

import { getProducts } from "../actions/product.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      products: [],
      productLoader: true,
      filters: {}
    };
  }

  componentDidMount = () => {
    let filters = this.mutateQueryString()
    this.props.getProducts(filters);
  }

  componentDidUpdate = prevProps => {
    if(prevProps.products !== this.props.products) {
      this.setState({
        products: this.props.products,
        productLoader: this.props.productLoader
      })
    }
  }

  mutateQueryString() {
    var queryString = window.location.search.substring(1);
    console.log(decodeURI(queryString))
    if (queryString) {
      const query_params = JSON.parse('{"' + decodeURI(queryString).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
      return query_params;
    }
  }

  displayProducts = () => {
    const {products} = this.state;
    return (
      <Fragment>
      {
        products.length ? 
        products.map(item => {
          return(
            <div className="bg-white default-shadow product-container" key={item.id}>
              <div className="product-image">
                <img alt="product" src={item.cover_image} />
              </div>
              <div className="product_content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="product_raiting">
                    <span>
                      {item.stars}&nbsp; 
                      <i className="far fa-star"></i>
                    </span>
                  </div>
                  <div className="product_price">
                    $ {item.price}
                  </div>
                </div>
                <p className="product_name">{item.name}</p>
                <p className="product_description">{item.description}</p>
              </div>
              <div className="product_footer">
                <div className="wishlist_button">
                  <i className="far fa-heart">
                    <span className="ml-2">Wishlist</span>
                  </i>
                </div>
                <div className="addToCart-button">
                   <i className="fas fa-shopping-cart">
                    <span className="ml-2">Add To Cart</span>
                  </i>
                </div>
              </div>
            </div>
          );
        })
        : <div className="empty-container">
            <p>No Products Available! Try changing filters.</p>
          </div>
      }
      </Fragment>
    );
  }

  renderLoading = () => {
    return (
      <div className="empty-container">
        <div class="lds-ripple"><div></div><div></div></div>
      </div>
    )
  }

  renderContent = () => {
    return(
      <Container style={{padding: "0px"}} className="mt-5" fluid>
        <Row>
          <Col xs={0} md={4} lg={3}>
            <div className="content-header">
              <p>Filters</p>
            </div>
            <FilterBar />
          </Col>
          <Col xs={12} md={6} lg={9}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="content-header">
                <p>1200 products found</p>
              </div>
              <div className="content-header">
                <span className="dark_shadow">Featured</span>
                <span className="dark_shadow"><i className="fas fa-th-large"></i></span>
                <span className="dark_shadow"><i className="fas fa-list"></i></span>
              </div>
            </div>
            <div className="content_search">
              <input className="dark_shadow" type="text" placeholder="Search here" />
            </div>
              {
                !this.state.productLoader
                ?  <div className="shop-products">
                    {this.displayProducts()}
                  </div>
                : this.renderLoading()
              }
          </Col>
        </Row>
      </Container>
    );
  }

  render(){
    return(
      <Layout>
        <Breadcrumb currentPage="Shop" />
        {this.renderContent()}
      </Layout>
    );
  }
}

const mapStateToProps = ({product}) => {
  return({
    products: product.products,
    productLoader: product.productsLoding
  });
}

export default connect(mapStateToProps, {
  getProducts
})(Home);