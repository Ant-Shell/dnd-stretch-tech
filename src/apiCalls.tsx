
export const fetchMonsters = (): any => {
    return fetch('https://www.dnd5eapi.co/api/monsters')
    .then(response => response.json())
}