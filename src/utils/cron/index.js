async function cron(req, res, src, env) {
    res.send('Its working!')
}
//30 0-23/1 * * *
//0 * * * *
//2023 05 14 23 30 21 30
module.exports = {
    cron: cron
}