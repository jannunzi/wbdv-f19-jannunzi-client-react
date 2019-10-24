import React from 'react'
import CourseCard from "./CourseCard";
import Message from "./Message";
import Add from "./Add";
import CourseList from "./CourseList";
import CourseEditor from "./CourseEditor";
import Page1 from "./Page1";
import Page2 from "./Page2";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import WidgetListComponent from "./WidgetListComponent";
import WidgetListContainer from "../containers/WidgetListContainer";
import widgetListReducer from "../reducers/widgetListReducer";
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(widgetListReducer)

export default class WhiteBoard extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>White Board</h1>
                    <Provider store={store}>
                        <WidgetListContainer/>
                    </Provider>

                    <Link to='/editor'>Editor</Link>
                    <Link to='/list'>List</Link>

                    <Route path='/editor/:courseId' component={CourseEditor}/>
                    <Route path='/list' component={CourseList}/>
                    <hr/>
                    <Link to='/page1'>Page 1</Link>
                    <Link to='/page2'>Page 2</Link>
                    <Route path='/page1' component={Page1}/>
                    <Route path='/page2' component={Page2}/>
                    <Page1/>
                    <Page2/>
                </div>
            </Router>
        )
    }
}
