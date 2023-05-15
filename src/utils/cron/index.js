async function cron(req, res, src, env) {
    stime = src.getDate(330).inFixedString;
    stimeStr = stime.year + stime.month + stime.date + stime.hour + stime.minute + stime.second + stime.millisecond;
    etime = src.getDate(330).inFixedString;
    //code
    
    etimeStr = etime.year + etime.month + etime.date + etime.hour + etime.minute + etime.second + etime.millisecond;
    res.header('Content-Type', 'application/json');
    resp = { status: 'success', status_code: 1, status_message: 'Cron Job Done', status_message_code: '634', status_message_code_message: 'Cron_Job_Done', start_time: stimeStr, end_time: etimeStr };
    res.send(resp);
}
//30 0-23/1 * * *
//0 * * * *
//2023 05 14 23 30 21 30
//yyyy mm dd hh mm ss ms
module.exports = {
    cron: cron
}