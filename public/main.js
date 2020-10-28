getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response)
            myName.textContent = object.name
            console.log(object)
        }
    };
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())

        }
    };
    request.send()
}
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
    request.onreadystatechange = () => {
        console.log(request.readyState)
        if (request.readyState === 4) {
            console.log("下载完成")
        }
    }
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

    request.send()
}

