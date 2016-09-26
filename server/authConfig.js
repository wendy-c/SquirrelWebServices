module.exports.options = function(id, name){
  return {
    method: 'POST',
    uri: 'http://localhost:8888/login/' + id,
    body: {
        userID: id,
        name: name || undefined,
    },
    json: true // Automatically stringifies the body to JSON
  }
}

module.exports.profileFields = [
    'id',
    'displayName',
    'first_name',
    'last_name',
    'email',
    'bio',
    'work',
    'education',
    'location',
    'birthday',
    'cover',
    'picture.type(large)',
    'gender',
    'interested_in',
    'link', // FB timeline 
    'website',
    'is_verified'
  ]