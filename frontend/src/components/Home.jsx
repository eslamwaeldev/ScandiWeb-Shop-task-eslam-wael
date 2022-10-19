import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryName from "./CategoryName";
import Navbar from "./Navbar";
import AllItems from "./AllItems";
import TechItems from "./TechItems";
import ClothesItems from "./ClothesItems";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAll: true,
      isTech: false,
      isClothes: false,
      isUSD: true,
      isEUR: false,
      isJPY: false,
      currencyClicked: false,
      modal: false,
      itemsIDs: [],
    };
    this.handleUSDSelected = this.handleUSDSelected.bind(this);
    this.handleEURSelected = this.handleEURSelected.bind(this);
    this.handleJPYSelected = this.handleJPYSelected.bind(this);
    this.handleAllSelected = this.handleAllSelected.bind(this);
    this.handleTechSelected = this.handleTechSelected.bind(this);
    this.handleClothesSelected = this.handleClothesSelected.bind(this);
    this.controlModal = this.controlModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleCurrencyClicked = this.handleCurrencyClicked.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
  addToCart(id) {
    console.log("🚀 ~ file: Home.jsx ~ line 35 ~ Home ~ addToCart ~ id", id);
    this.setState({
      ...this.state,
      itemsIDs: this.state.itemsIDs.concat([id]),
    });
    console.log("🚀 ~ file: Home.jsx ~ line 39 ~ Home ~ addToCart ~ itemsIDs", this.state.itemsIDs);
  }
  handleUSDSelected() {
    this.setState({
      ...this.state,
      isUSD: true,
      isEUR: false,
      isJPY: false,
    });
  }
  handleEURSelected() {
    this.setState({
      ...this.state,
      isUSD: false,
      isEUR: true,
      isJPY: false,
    });
  }
  handleJPYSelected() {
    this.setState({
      ...this.state,
      isUSD: false,
      isEUR: false,
      isJPY: true,
    });
  }

  handleAllSelected() {
    this.setState({
      ...this.state,
      isAll: true,
      isTech: false,
      isClothes: false,
    });
  }
  handleTechSelected() {
    this.setState({
      ...this.state,
      isAll: false,
      isTech: true,
      isClothes: false,
    });
  }
  handleClothesSelected() {
    this.setState({
      ...this.state,
      isAll: false,
      isTech: false,
      isClothes: true,
    });
  }
  controlModal() {
    this.setState({
      ...this.state,
      modal: !this.state.modal,
    });
  }
  closeModal(e) {
    if (e.target.id === "myModal") {
      this.setState({
        ...this.state,
        modal: false,
      });
    }
  }
  handleCurrencyClicked() {
    this.setState({
      ...this.state,
      currencyClicked: !this.state.currencyClicked,
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <Navbar
            isAll={this.state.isAll}
            handleAll={this.handleAllSelected}
            isTech={this.state.isTech}
            handleTech={this.handleTechSelected}
            isClothes={this.state.isClothes}
            handleClothes={this.handleClothesSelected}
            controlModal={this.controlModal}
            isUSD={this.state.isUSD}
            handleUSD={this.handleUSDSelected}
            isEUR={this.state.isEUR}
            handleEUR={this.handleEURSelected}
            isJPY={this.state.isJPY}
            handleJPY={this.handleJPYSelected}
            currencyClicked={this.state.currencyClicked}
            handleCurrency={this.handleCurrencyClicked}
            modal={this.state.modal}
            closeModal={this.closeModal}
            USD={this.state.isUSD}
            EUR={this.state.isEUR}
            JPY={this.state.isJPY}
            itemsIDs={this.state.itemsIDs}
          />

          <CategoryName isAll={this.state.isAll} isTech={this.state.isTech} isClothes={this.state.isClothes} />
          {this.state.isAll && (
            <AllItems
              USD={this.state.isUSD}
              EUR={this.state.isEUR}
              JPY={this.state.isJPY}
              addToCart={this.addToCart}
            />
          )}
          {this.state.isTech && (
            <TechItems
              USD={this.state.isUSD}
              EUR={this.state.isEUR}
              JPY={this.state.isJPY}
              addToCart={this.addToCart}
            />
          )}
          {this.state.isClothes && (
            <ClothesItems
              USD={this.state.isUSD}
              EUR={this.state.isEUR}
              JPY={this.state.isJPY}
              addToCart={this.addToCart}
            />
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
