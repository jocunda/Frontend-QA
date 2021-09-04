const xhr = new XMLHttpRequest()
xhr.open('GET', 'data/test1.json', true)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(
                JSON.parse(xhr.responseText)
            )
            alert(xhr.responseText)
        } else if (xhr.status === 404) {
            console.log('404 not found')
        }
    }
}
xhr.send(null)

// const xhr = new XMLHttpRequest()
// xhr.open('POST', '/login', true)
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             // console.log(
//             //     JSON.parse(xhr.responseText)
//             // )
//             alert(xhr.responseText)
//         } else {
//             console.log('other condition')
//         }
//     }
// }
// const postData = {
//     userName: 'zhangsan',
//     password: xxx
// }
// xhr.send(JSON.stringfy(postData))