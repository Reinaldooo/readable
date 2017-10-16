import { combineReducers } from 'redux';

export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function posts(state = {}, action) {
    switch (action.type) {
        case 'POSTS_FETCH_DATA_SUCCESS':
        return action.posts

        case 'RATEUP':
        return state.posts[action.index].voteScore + 1

        default:
            return state;
    }
}


export default combineReducers({
    posts,
    itemsHasErrored,
    itemsIsLoading
});
