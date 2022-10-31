export default function (location) {
    const request = new XMLHttpRequest()

    request.open("get", location + ".html", true)

    request.onreadystatechange = function() {
        document.getElementById("content").innerHTML= this.responseText;
    }

    request.send()
}