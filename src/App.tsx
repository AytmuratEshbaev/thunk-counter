import "./App.css";
import { connect } from "react-redux";
import { incrementValue, decrementValue } from "./actions";

const mapStateToProps = (state: any) => {
  return {
    value: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    plus: (num: number) => {
      dispatch(incrementValue(num));
    },
    minus: (num: number) => {
      dispatch(decrementValue(num));
    },
  };
};

const App = ({ plus, minus, value }: any) => (
  <div className="counter">
    <p className="display">{value}</p>
    <div className="control">
      <button onClick={() => plus(1)}>+1</button>
      <button onClick={() => minus(1)}>-1</button>
    </div>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
