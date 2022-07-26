/**
 * @author José Rafael Gutierrez
 * @param key
 * @return {any|*[]}
 */
const readFromLocalStorage = key => JSON.parse(localStorage.getItem(key)) || null

/**
 * @author José Rafael Gutierrez
 * @param key
 * @param value
 */
const writeInLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export {
    readFromLocalStorage,
    writeInLocalStorage
}