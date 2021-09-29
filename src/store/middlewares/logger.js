export const logger = (store) => (next) => (action) => {
    console.log('___________Logger avalible___________')
    console.log('dispatching', action)
    console.log('past state', store.getState())
    const sendnext = next(action)
    console.log('next state', store.getState())
    console.log('___________End of action___________')
    return sendnext
}