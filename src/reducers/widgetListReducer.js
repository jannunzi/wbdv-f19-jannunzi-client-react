
const initialState = {
    widgets: [
        {type:"LIST", ordered:true, text: "Item 1\nItem 2\nItem 3", id: 123},
        {type:"HEADING", size:6, text: "Hello from Redux", id: 234},
        {type:"PARAGRAPH", text: "Hello from Redux paragraph", id: 345}
    ]
}

const initialDonuts = {
    donuts: [
        {id: "123", flavor: "Chocolate"},
        {id: "234", flavor: "Boston Cream"},
        {id: "345", flavor: "Coffee"}
    ]
}

const donutReducer = (state = initialDonuts, action) => {
    switch (action.type) {
        case 'DELETE_DONUT':
            return {
                donuts: state.donuts.filter(donut => donut.id !== action.donutId)
            }
    }
}

const widgetListReducer = (state = initialState, action) => {

    console.log(action)

    switch (action.type) {
        case 'FIND_ALL_WIDGETS':
            return {
                widgets: action.widgets
            }
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case 'CREATE_WIDGET':
            return {
                widgets: action.widgets
            }
        default:
            return state
    }




}

export default widgetListReducer;