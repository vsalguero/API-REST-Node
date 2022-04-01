const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key;
        if (apiKey === 'vladimir-01') {
            next();
        } else {
            res.send({ error: "Api key no es correcta" });
        }
        next();
    } catch (e) {
        res.status(403);
        res.send({ error: "Ocurrio un error en custom header" });
    }
}