import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
let sortarr=[]
  let name = ''
if (Array.isArray(members)===false){return false}

  members.map((member=>
   {
    if(typeof member!=="string"){return}
    let nn =  member.trim()
    sortarr.push(nn)
    return member}
    ))

sortarr.sort().forEach(member=>{

    let firtL = member.slice(0,1).toUpperCase()
    name+=firtL
  })

  return name
}
