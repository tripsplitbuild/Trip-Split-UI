const showMembers = document.querySelector('.team-btn')
const members = document.querySelector('.members')
let membersIsShown = false
showMembers.addEventListener('click', (e) => {
  if (membersIsShown) {
    membersIsShown = false
    members.style.display = 'none'
  } else {
    membersIsShown = true
    members.style.display = 'block'
  }
})