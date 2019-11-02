import React from 'react'
import WidgetListComponent from "../components/WidgetListComponent";
import {connect} from 'react-redux'

const stateToPropertyMapper = state => {
    return {
        widgets: state.widgets
    }
}

const dispatcherToPropertyMapper = dispatch => {
    return {
        findAllWidgets: () => {
            console.log("find all widgets")
            fetch("http://localhost:8080/api/widgets")
                .then(response => response.json())
                .then(widgets => {
                    console.log(widgets)
                    dispatch({
                        type: "FIND_ALL_WIDGETS",
                        widgets: widgets
                    })
                })
        },
        addWidget: () => {

            fetch("http://localhost:8080/api/widgets", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    type: 'HEADING',
                    size: 2,
                    text: 'New Heading'
                })
            })
                .then(response => response.json())
                .then(widgets => {
                    console.log(widgets)
                    dispatch({
                        type: "CREATE_WIDGET",
                        widgets: widgets
                    })
                })
        },
        deleteWidget: (id) => {
            dispatch({type: 'DELETE_WIDGET', widgetId: id})
        }
    }
}

const WidgetListContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)
    (WidgetListComponent)

export default WidgetListContainer;