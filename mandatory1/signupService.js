export function checkIfUserExists(users, email) {
    if (users.find(user => user.email === email)) {
        return true
      } else {
        return false
      }
}