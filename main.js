const users = [
  { login: "indozer", balance: 15000 },
  { login: "lanvin", balance: 10000 },
  { login: "camel", balance: 20000 },
];

const sumBalance = users.reduce((acc, num) => {
    return acc + num.balance
}, 0);

console.log(sumBalance);

const friends = [
    {name: 'Artem', friend: 'Makar'},
    {name: 'Makar', friend: 'Artem'},
    {name: 'Vlad', friend: 'Makar'}
]

const selectedFriend = friends.reduce((acc, obj) => {
  if(obj.friend === 'Makar') {
    acc.push(obj)
  }
  return acc
}, [])
console.log(selectedFriend);

const friends2 = [
    {name: 'Artem', friend: 6},
    {name: 'Makar', friend: 9},
    {name: 'Vlad', friend: 0}
]

const sortFriend = friends2.sort((a,b) => a.friend - b.friend)
console.log(sortFriend)

const users2 = [
    { name: 'Artem', skills: ["JavaScript", "HTML", "CSS"] },
    { name: 'Makar', skills: ["Python", "CSS", "Django"] },
    { name: 'Vlad', skills: ["JavaScript", "Node.js", "Python"] }
];

const filterUsers = users2.flatMap((user) => user.skills).filter((skill, index, array) => array.indexOf(skill) === index).sort()

console.log(filterUsers)
