import '../actions/index';

const initialState = {
  username: '',
  password: '',
  message: 'please enter username and password',
  landingArticles: [],
  modalIsOpen: false,
};

export default function LoginReducer(state = initialState, action) {
  // console.log('hi, in login reducer?>>>>'); //check
  switch (action.type) {
    case 'UPDATE_USERNAME':
      return {...state, username: action.username}
    case 'UPDATE_PASSWORD':
      return {...state, password: action.password}
    case 'UPDATE_MESSAGE':
      return {...state, message: action.message}
    case 'CACHE_LANDING_ARTICLES':
      return {...state, landingArticles: action.landingArticles}
    case 'OPEN_MODAL':
      return {...state, modalIsOpen: true}
    case 'CLOSE_MODAL':
      return {...state, modalIsOpen: false}
    default: 
      return state
  }
}
