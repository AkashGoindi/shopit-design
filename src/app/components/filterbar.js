import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { CATEGORIES, BRANDS } from "../dummyData.js";

import { getProducts, clearData } from "../actions/product.js";

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state= {
        price: '',
        category: '',
        brand: ''
    }
  }

  componentDidMount = () => {
    this.fetchQueryString();
  }

  fetchQueryString() {
    var queryString = window.location.search.substring(1);
    if (queryString) {
      const query_params = JSON.parse('{"' + decodeURI(queryString).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
      this.setState({...query_params});
    }
  }

  filter_radio = (key, value) => {
    this.setState({
      [key]: value
    },()=>{
      this.updateQueryStringParameter(key); 
    })
  }

  filter_check_box = (key, value) => {
    var existing_sizes = this.state[key];
    let sizes_array = existing_sizes.split(',');
    let status = sizes_array.includes(value);
    if(!status) {
      sizes_array.push(value);
    } else {
      const index = sizes_array.indexOf(value);
      if(index > -1) {
        sizes_array.splice(index, 1);
      }
    }
    if(sizes_array[0] === '') {
      sizes_array.shift();
    }
    let sizes_string = sizes_array.join(',')
    this.setState({
      [key]: sizes_string
    },()=>{
      this.updateQueryStringParameter(key); 
    })
  }

  updateQueryStringParameter(key) {
    this.props.clearData();
    this.fetchData();
  }

  removeQueryStringParameter(key) {
    this.props.clearData();
    this.setState({
      [key]: ""
    },()=>{
      this.fetchData();
    })
  }

  clearAllFilters = () => {
    this.props.clearData();
    this.setState({
      price: "",
      brand: "",
      category: ""
    },()=>{
      this.fetchData();
    })
  }

  fetchData = () => {
    window.setTimeout(()=>{this.props.getProducts({...this.state})}, 1000);
  }

  //-----------------Uncomment these methods to apply URL based Filtration------

  // updateQueryStringParameter(key) {
  //   const value = this.state[key];
  //   if(value){
  //     var uri = window.location.href;
  //     var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  //     var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  //     if (uri.match(re)) {
  //       window.location = uri.replace(re, '$1' + key + "=" + value + '$2');
  //     }
  //     else {
  //       window.location = uri + separator + key + "=" + value;
  //     }
  //   } else {
  //     this.removeQueryStringParameter(key);
  //   }
  // }

  // removeQueryStringParameter(key) {
  //   if(this.state[key]) {
  //     var sourceURL = window.location.href;
  //     var rtn = sourceURL.split("?")[0],
  //       param,
  //       params_arr = [],
  //       queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
  //     if (queryString !== "") {
  //       params_arr = queryString.split("&");
  //       for (var i = params_arr.length - 1; i >= 0; i -= 1) {
  //         param = params_arr[i].split("=")[0];
  //         if (param === key) {
  //           params_arr.splice(i, 1);
  //         }
  //       }
  //       if (params_arr.length) {
  //         rtn = rtn + "?" + params_arr.join("&");
  //       }
  //     }
  //     window.location = rtn;
  //   } else {
  //     return null;
  //   }
  // }

  //-----------------------------------------------

  render(){
    return(
      <div className="bg-white dark_shadow filterbar">     
        
        <div className="filter-section">
          <p className="filters_header">Multi Range</p>
          <div className="form-check filter_item">
            <input
              className="form-check-input"
              type="radio"
              checked={this.state.price === '' ? true : false}
              disabled = {this.state.price ? false : true}
              onChange={() => { this.removeQueryStringParameter("price") }}
            />
            <label className="form-check-label text-capitalize" htmlFor="exampleRadios1">
              All
            </label>
          </div>
          <div className="form-check filter_item">
            <input
              className="form-check-input"
              type="radio"
              checked={this.state.price === "0-10" ? true : false}
              onChange={() => { this.filter_radio("price", '0-10') }}
            />
            <label className="form-check-label text-capitalize" htmlFor="exampleRadios1">
              &lt;=$10
            </label>
          </div>
          <div className="form-check filter_item">
            <input
              className="form-check-input"
              type="radio"
              checked={this.state.price === '10-100' ? true : false}
              onChange={() => { this.filter_radio("price", '10-100') }}
            />
            <label className="form-check-label text-capitalize" htmlFor="exampleRadios1">
              $10 - $100
            </label>
          </div>
          <div className="form-check filter_item">
            <input
              className="form-check-input"
              type="radio"
              checked={this.state.price === '100-500' ? true : false}
              onChange={() => { this.filter_radio("price", '100-500') }}
            />
            <label className="form-check-label text-capitalize" htmlFor="exampleRadios1">
              $100 -$500
            </label>
          </div>
          <div className="form-check filter_item">
            <input
              className="form-check-input"
              type="radio"
              checked={this.state.price === '500-any' ? true : false}
              onChange={() => { this.filter_radio("price", '500-any') }}
            />
            <label className="form-check-label text-capitalize" htmlFor="exampleRadios1">
               &gt;=$500
            </label>
          </div>
        </div>

        <div className="filter-section">
          <p className="filters_header">Categories</p>
          <div className="form-check filter_item">
            <input
              className="form-check-input"
              type="radio"
              checked={this.state.category === '' ? true : false}
              disabled = {this.state.category ? false : true}
              onChange={() => { this.removeQueryStringParameter("category") }}
            />
            <label className="form-check-label text-capitalize" htmlFor="exampleRadios1">
              All
            </label>
          </div>
          {
            CATEGORIES.map((item, index)=>{
              return(
                <div key={index} className="form-check filter_item">
                  <input
                    className="form-check-input"
                    type="radio"
                    checked={this.state.category === `${item}` ? true : false}
                    onChange={() => { this.filter_radio("category", `${item}`) }}
                  />
                  <label className="form-check-label text-capitalize" htmlFor="exampleRadios1">
                    {item}
                  </label>
                </div>
              );
            })
          }
        </div>

        <div className="filter-section">
          <p className="filters_header">Brands</p>
          {
            BRANDS.map((item, index) => {
              return(
                <div key={index} className="d-flex justify-content-between" >
                  <div className="form-check filter_item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={this.state.brand === '' ? true : false}
                      checked={this.state.brand.split(',').includes(`${item.brand_name}`) ? true : false}
                      onChange={() => { this.filter_check_box("brand", `${item.brand_name}`) }}
                    />
                    <label className="form-check-label" htmlFor="exampleRadios1">
                      {item.brand_name}
                    </label>
                  </div>
                  <div>
                    ({item.products_count})
                  </div>
                </div>  
              );
            })
          }
        </div>

        <div className="filter-section">
          <p className="filters_header">Ratings</p>
          <div className="filter_item d-flex justify-content-between">
            <div className="rating_stars">
              <i style={{color: "gold"}} className="far fa-star"></i>
              <i style={{color: "gold"}} className="far fa-star"></i>
              <i style={{color: "gold"}} className="far fa-star"></i>
              <i style={{color: "gold"}} className="far fa-star"></i>
              <i className="far fa-star"></i>
              <span>&up</span>
            </div>
            <div>  
              <span>(23)</span>
            </div>  
          </div>
          <div className="filter_item d-flex justify-content-between">
            <div className="rating_stars">
              <i style={{color: "gold"}} className="far fa-star"></i>
              <i style={{color: "gold"}} className="far fa-star"></i>
              <i style={{color: "gold"}} className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <span>&up</span>
            </div>
            <div>  
              <span>(23)</span>
            </div>   
          </div>
          <div className="filter_item d-flex justify-content-between">
            <div className="rating_stars">
              <i style={{color: "gold"}} className="far fa-star"></i>
              <i style={{color: "gold"}} className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <span>&up</span>
            </div> 
            <div>  
              <span>(23)</span>
            </div>  
          </div>
          <div className="filter_item d-flex justify-content-between">
            <div className="rating_stars">
              <i style={{color: "gold"}} className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <span>&up</span>
            </div>
            <div>  
              <span>(23)</span>
            </div>   
          </div>
        </div>

        <div className="clearButton">
          <button 
            onClick={this.clearAllFilters} 
            className="btn btn-md">
            CLEAR ALL FILTERS
          </button>
        </div>

      </div>
    );  
  }
}

export default connect(null, {
  getProducts,
  clearData
})(withRouter(FilterBar));

