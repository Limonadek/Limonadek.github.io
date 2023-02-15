export const makeRequest = (method, url, body = null, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.send();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;

        callback(JSON.parse(xhr.responseText));
    });
}
