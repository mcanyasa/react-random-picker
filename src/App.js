import React from "react";
/* import { Container, Row, Col } from "react-bootstrap"; */
class App extends React.Component {
  state = {
    items: [],
    item: "",
    addBtnClicked: false,
    rdnmItm: "",
  };
  onItemChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  addItem = (e) => {
    e.preventDefault();
    this.setState({
      items: this.state.items.concat(this.state.item),
      item: "",
    });

    if (this.state.items.length > 0) {
      console.log("this.state.items.length", this.state.items.length);
      this.setState({
        addBtnClicked: true,
      });
    }
  };
  randomIt = (e) => {
    const rItems = this.state.items;
    console.log("rItems", rItems);

    const randomItem = rItems[Math.floor(Math.random() * rItems.length)];
    console.log("randomItems", randomItem);

    this.setState({
      rdnmItm: randomItem,
    });
  };
  render() {
    const submitDisabled = !this.state.item;
    const addBtnClicked = !this.state.addBtnClicked;
    return (
      <div className="ui text container mt-5" id="app">
        {" "}
        <table className="ui selectable structured large table">
          <thead>
            <tr>
              <th>Random Pick</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item, idx) => (
              <tr key={idx}>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>
                <form className="ui form" onSubmit={this.addItem}>
                  <div className="field">
                    <input
                      className="prompt"
                      type="text"
                      placeholder="Add item..."
                      value={this.state.item}
                      onChange={this.onItemChange}
                    />
                  </div>
                  <button
                    className="ui button primary lg col-sm-12 mb-3"
                    type="submit"
                    disabled={submitDisabled}
                  >
                    Add item
                  </button>
                  <button
                    className="ui button secondary lg col-sm-12 mb-3"
                    type="button"
                    disabled={addBtnClicked}
                    onClick={(e) => this.randomIt(e, "value")}
                  >
                    RandomIt
                  </button>
                </form>
              </th>
            </tr>
            <tr>
              <td>Random Picked Item</td>
            </tr>
            <tr>
              <td>{this.state.rdnmItm}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
export default App;
