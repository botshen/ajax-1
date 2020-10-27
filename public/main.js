getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        const script = document.createElement("script")
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
    }
    request.send()
}
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onload = () => {
        console.log('request.response')
        console.log(request.response)
        //创建style标签
        const style = document.createElement("style")
        //填写style内容
        style.innerHTML = request.response
        //插到头里
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}

