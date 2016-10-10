//list of actions (click events etc)

//action creator is the function

//action is make up of two parts, a type (a string that explains func, second what params is passed, the payload)

//////////LOGIN CONTAINER//////////
export const updateUsername = (username) => {
  return {
    type: 'UPDATE_USERNAME',
    username,
  };
};

export const updatePassword = (password) => {
  return {
    type: 'UPDATE_PASSWORD',
    password,
  };
};

export const updateMessage = (message) => {
  return {
    type: 'UPDATE_MESSAGE',
    message,
  };
};

export const updateLandingArticles = (landingArticles) => {
  return {
    type: 'CACHE_LANDING_ARTICLES',
    landingArticles,
  };
};

export const openModal = () => {
  return {
    type: 'OPEN_MODAL'
  };
};

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'
  };
};

//////////SIGNUP CONTAINER//////////

export const updateSignupUsername = (username) => {
  return {
    type: 'UPDATE_SIGNUP_USERNAME',
    username,
  };
};

export const updateSignupPassword = (password) => {
  return {
    type: 'UPDATE_SIGNUP_PASSWORD',
    password,
  };
};

export const updateSignupMessage = (message) => {
  return {
    type: 'UPDATE_SIGNUP_MESSAGE',
    message,
  };
};

//////////HOME CONTAINER//////////

export const getUser = (user) => {
  return {
    type: 'GET_USER',
    user, 
  };
};

export const updateAllArticles = (allArticles) => {
  return {
    type: 'UPDATE_ALL_ARTICLES',
    allArticles,
  };
};

export const sortArticles = (userArticles, articlesFromFriends) => {
  return {
    type: 'SORT_ARTICLES',
    userArticles,
    articlesFromFriends,
  };
};

export const updateFriends = (userFriendsList) => {
  return {
    type: 'UPDATE_FRIENDS',
    userFriendsList,
  };
};

//////////     //////////

const addLink = (link) => {
  return {
    type: 'ADD_LINK',
    link,
  };
};