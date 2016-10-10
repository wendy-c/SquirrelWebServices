import '../actions/index';

const initialState = {
  user: '',
  allArticles: '',
  userArticles: [],
  userFriendsList: [{fbid: '0', fbname: 'Friends'}],
  articlesFromFriends: [],
};

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_USER':
      return {...state, user: action.user}
    case 'UPDATE_ALL_ARTICLES':
      return {...state, allArticles: action.allArticles}
    case 'SORT_ARTICLES':
      return {...state, userArticles: action.userArticles, articlesFromFriends: action.articlesFromFriends}
    case 'UPDATE_FRIENDS':
      return {...state, userFriendsList: action.userFriendsList}
    default:
      return state
  }
}