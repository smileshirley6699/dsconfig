function getXHR () {
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        // eslint-disable-next-line no-undef
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhr;
}
function getConfig (options) {
    if (!options.url) {
        return;
    }
    return new Promise((resovle, reject) => {
        let xhr = getXHR();
        let method = options.method || "POST";
        let async = options.async || true;
        xhr.open(method, options.url, async);
        let headers = options.headers;
        if (headers) {
            for (let key in headers) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
        let data = options.data;
        let paramArr = [];
        if (data) {
            for (let key in data) {
                paramArr.push(`${key}=${data[key]}`);
            }
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 304 || (xhr.status >= 200 && xhr.status < 300)) {
                    try {
                        resovle(xhr.responseText ? JSON.parse(xhr.responseText) : null);
                    } catch (e) {
                        reject(xhr);
                    }

                } else {
                    reject(xhr);
                }
            }
        };
        xhr.send(paramArr.join("&"));
    });
}
export default getConfig
