const src = require('../../src');
async function route(req, res, env, port, path, http) {
  a = req.params[0].split('/');
  if (a[1] == 'favicon.ico') {
    res.header('Content-Type', 'image/ico');
    res.send(src.fs.readFileSync(src.path.join(env.rp,'/public/images/icons/favicon.ico')));
  } else if (a[1] == 'js') {
    res.header("Content-Type", "application/javascript");
    resp = await src.jsmaker(a[2],src,env);
    res.send(resp);
  } else if (a[1] == 'manifest.json') { 
    res.header("Content-Type", "application/json");
    res.send(src.fs.readFileSync(src.path.join(env.rp,'/public/json/manifest.json')));
  } else if (a[1]=='api' && routeaccept(a)) {
    if (a[2] == 'account') {
      if (a[3] == 'getAccount') {
        p = await getAccount(req.cookies, env, res);
        res.header("Content-Type", "application/json");
        res.send(p);
      }
    } else if (a[2] == 'meta') {
      res.header("Content-Type", "application/json");
      if (a[3] == 'getMeta') {
        r = {}
        r['ip'] = req.headers['cf-connecting-ip'] || req.ip;
        r['user_data'] = src.deviceDetectorParse(req.headers['user-agent']);
        if (req.body['ch-pf'] != undefined && req.body['ch-pfv'] != undefined && req.body['ch-pf'] != '' && req.body['ch-pfv'] != '') {
          pfv = req.body['ch-pfv'].split('.');
          if (req.body['ch-pf'].toLowerCase() == 'windows') {
            if (pfv[0] == '13' || pfv[0] == '14') {
              pfv = '11 Previews';
            } else if (pfv[0] == '15') {
              pfv = '11 Release';
            } else {
              pfv = pfv[0];
            }
          } else {
            pfv = pfv[0];
          }
          r['user_data']['os']['fullname'] = req.body['ch-pf'] + ' ' + pfv;
        }
        res.send(r);
      } else if (a[3] == 'getIp') {
        r = {}
        r['ip'] = req.headers['cf-connecting-ip'] || req.ip;
        res.send(r);
      }
    } else if (a[2] == 'page') {
      p = await getAccount(req.cookies, env, res);
      res.header("Content-Type", "application/json");
      p = await src.pagemaker(req.body.page, src, env, p.userData);
      res.send('m');
    } else if (a[2] == 'security') {
      if (a[3] == 'getSecCode') {
        res.header("Content-Type", "application/json");
        p = {};
        p1 = { sAlg: 'AES', sSK: '1234567890', rAlg: 'AES', rSK: '1234567890' };
        p['secCode'] = JSON.stringify(p1);
        res.send(p);
      }
    } else if (a[2] == 'sys') { 
      if (a[3] == 'cron') { 
        src.cron(req, res, src, env);
      }
    }
  } else if (a[1] == 'pc') {
    res.header("Content-Type", "application/json");
    res.send(src.circularToJSON(req));
  } else if (a[1] == 'minify') { 
    src.minify(['/public/html', '/public/css', '/public/js'], env.rp, res);
  } else {
    res.header("Content-Type", "text/html");
    res.render('index.min.html', { title: env.sn, about: env.sa });
  }
}
module.exports = {
  route: route
}
async function getAccount(a, env, res) { 
  re = {}
  try {
    if (a.accinfo == undefined || a.accData == undefined || a.accAuth == undefined || a.accinfo == '' || a.accData == '' || a.accAuth == '') {
      accSet = 0;
    } else { 
      accSet = 1;
    }
    if (accSet == 1) {
      accData = src.jwt.verify(a.accinfo+'.'+a.accData+'.'+a.accAuth, env.jwtKey);
      re.status = 'passed';
      re.status_code = 1;
      re.status_message = 'Account Valid Token';
      re.status_message_code = '616';
      re.status_message_code_message = 'Account_Valid_Token';
      re.userData=accData;
    } else if(accSet==0) {
      re.status = 'failed';
      re.status_code = 0;
      re.status_message = 'Unlogged Account';
      re.status_message_code = '614';
      re.status_message_code_message = 'Unlogged_Account';
    }
    return re;
  } catch (e) {
    if (e.message == 'invalid token') {
      re.status = 'failed';
      re.status_code = 0;
      re.status_message = 'Account Invalid Token';
      re.status_message_code = '615';
      re.status_message_code_message = 'Account_Invalid_Token';
    } else {
      re.status = 'failed';
      re.status_code = 0;
      re.status_message = 'Unlogged Account';
      re.status_message_code = '614';
      re.status_message_code_message = 'Unlogged_Account';
    }
    return re;
  }
}
async function routeaccept(a) {
  if (a[1] == 'api') {
    if (a[2] == 'account') {
      if (a[3] == 'getAccount') {
        return true;
      } else { 
        return false;
      }
    } else if (a[2] == 'meta') {
      if (a[3] == 'getMeta') {
        return true;
      } else if (a[3] == 'getIp') {
        return true;
      } else {
        return false;
      }
    } if (a[2] == 'page') {
      if (a[3] == 'getPage') {
        return true;
      } else {
        return false;
      }
    } else if (a[2] == 'security') {
      if (a[3] == 'getSecCode') {
        return true;
      } else { 
        return false;
      }
    } else if (a[2]=='sys') { 
      if (a[3] == 'cron') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
//30 0-23/1 * * *
//0 * * * *