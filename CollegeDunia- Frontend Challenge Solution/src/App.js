import React, { Component } from "react";
import "./styles.css";
import College from "./College/College";
import data from "./Json/colleges.json";

class App extends Component {
  //intial state is set to have 10 colleges
  constructor(props) {
    super(props);
    this.state = {
      index: 10,
      colleges: data.colleges.slice(0, 10)
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.currOffsetHeight = 0;
    this.colleges = this.state.colleges;
    this.newColleges = [];
  }
  
  //Handler function for scroll, fucnctions appends 10 pictures to existing college array
  handleScroll() {
    const offsetHeight = document.body.offsetHeight;

    if (
      window.innerHeight + document.documentElement.scrollTop >=
      offsetHeight
    ) {
      this.currOffsetHeight = offsetHeight;
      this.newColleges = data.colleges.slice(
        this.state.index,
        this.state.index + 10
      );
      this.colleges = [...this.colleges, ...this.newColleges];
      this.setState({
        index: this.state.index + 10,
        colleges: this.colleges
      });
      console.log(this.state.index);
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll();
  }

  render() {
    return (
      <div className="App">
        <h1>Colleges in India</h1>

        <College Colleges={this.state.colleges} />
      </div>
    );
  }
}

export default App;
