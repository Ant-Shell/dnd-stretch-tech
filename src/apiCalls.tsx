
export const fetchMonsters = (): any => {
    return fetch('https://www.dnd5eapi.co/api/monsters')
    .then(response => {
        if (!response.ok) {
            throw new Error('Unable to access server!')
        } else {
            return response.json()
        }
    })
}