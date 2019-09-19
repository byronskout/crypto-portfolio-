import React from "react";
import "./Portfolio.css";
import ReactMinimalPieChart from "react-minimal-pie-chart";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'BTC', 'ETH', 'XRP'
];
const defaultOption = options[0];

const coinList = [
  {
    id: 1,
    value: "BTC"
  },
  {
    id: 2,
    value: "ETH"
  },
  {
    id: 3,
    value: "XRP"
  },
  {
    id: 4,
    value: "NANAS"
  }
];

function Options({ options }) {
  return options.map(option => (
    <option key={option.id} value={option.value}>
      {option.value}
    </option>
  ));
}

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <p>My Portfolio</p>
        <div>
        <Dropdown options={options} style={{width: "30%"}} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
        </div>
        <div className="select">
        <select name="coins" className="form-control">
          <Options options={coinList} />
        </select>
        </div>
        <div className="pie">
          <ReactMinimalPieChart
            data={[
              {
                title: "One",
                value: 10,
                color: "#E38627"
              },
              {
                title: "Two",
                value: 15,
                color: "#C13C37"
              },
              {
                title: "Three",
                value: 20,
                color: "#6A2135"
              }
            ]}
            animate
            label
            labelStyle={{
              fontSize: "5px",
              fontFamily: "sans-serif"
            }}
            radius={42}
            labelPosition={112}
            style={{ width: "25%" }}
          />
        </div>
      </div>
    );
  }
}

export default Portfolio;
