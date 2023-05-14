async function cron(req, res, src, env) {
    res.send('Its working!')
}
module.exports = {
    cron: cron
}