import '../actions/index';

const initialState = {
  username: '',
  password: '',
  message: 'please choose a username and password',
};

export default function SignupReducer(state = initialState, action) {
  // console.log('hi, in login reducer?>>>>'); //check
  switch (action.type) {
    case 'UPDATE_SIGNUP_USERNAME':
      return {...state, username: action.username}
    case 'UPDATE_SIGNUP_PASSWORD':
      return {...state, password: action.password}
    case 'UPDATE_SIGNUP_MESSAGE':
      return {...state, message: action.message}
    default: 
      return state
  }
}
