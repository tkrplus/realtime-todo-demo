const EDIT_SEARCH_TEXT = 'TicketTool/EDIT_SEARCH_TEXT'
const EDIT_SEARCH_CATEGORIES = 'TicketTool/EDIT_SEARCH_CATEGORIES'

export const editSearchText = (text) => ({
  type: EDIT_SEARCH_TEXT,
  text
})

export const editSearchCategories = (categories) => ({
  type: EDIT_SEARCH_CATEGORIES,
  categories
})

const initialState = {
  searchText: null,
  searchCategories: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_SEARCH_TEXT:
      return {
        ...state,
        searchText: !action.text ? null : action.text
      }
    case EDIT_SEARCH_CATEGORIES:
      return {
        ...state,
        searchCategories: action.categories
      }
    default:
      return state
  }
}
