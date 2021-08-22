//closure hidden data, API
function createCache() {
    const data = {} //closure data, hidden, can not be accessed by outsider
    return {
        set: function (key, val) {
            data[key] = val
        },
        get: function (key) {
            return data[key]
        }
    }
}
const c = createCache()
c.set('a', 100)
console.log(c.get('a'))