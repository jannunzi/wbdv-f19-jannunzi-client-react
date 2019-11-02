import React from 'react';
import logo from './logo.svg';
import Hello from "./components/Hello";
import WhiteBoard from "./components/WhiteBoard"
import DataTable from "./generic/table/DataTable";
import dataTableReducer from "./generic/table/DataTableReducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import DataTableContainer from "./generic/table/DataTableContainer";
const store = createStore(dataTableReducer)
function App() {
  return (
      <Provider store={store}>
        <div className="container-fluid">
            <WhiteBoard/>
        </div>
      </Provider>
  );
}

export default App;
