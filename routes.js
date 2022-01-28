const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
if (url ==='/') {
    res.write('<html>');
    res.write('<head><title>You Made It</title></head>');
    res.write('<body><h1>Hello!</h1></body>');
    res.write('</html>');
    return res.end();
}
};

module.exports.handler = requestHandler;