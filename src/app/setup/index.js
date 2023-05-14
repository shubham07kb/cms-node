const fs = require("fs");
const path = require('path');
var os = require("os");
class SetupError extends Error {
  constructor(message) {
    super(message);
    this.name = 'SetupError';
  }
}
function mse(err) {
  throw new SetupError(err);
}
async function isjson(myObject) {
  if (typeof myObject === 'object' && !Array.isArray(myObject)) {
    return true;
  } else {
    return false;
  }
}
function commansqlcheck(c, env) {
  if (typeof c.db.host == 'string' && c.db.host != '') {
    env.dbhost = c.db.host;
  } else if (typeof c.db.host == 'string') {
    mse('db.host must be a not empty');
  } else {
    mse('site.sitename must be a not empty and string');
  }
  if (typeof c.db.name == 'string' && c.db.name != '') {
    env.dbname = c.db.name;
  } else if (typeof c.db.name == 'string') {
    mse('db.name must be a not empty');
  } else {
    mse('db.name must be a not empty and string');
  }
  if (typeof c.db.user == 'string' && c.db.user != '') {
    env.dbuser = c.db.user;
  } else if (typeof c.db.user == 'string') {
    mse('db.user must be a not empty');
  } else {
    mse('db.user must be a not empty and string');
  }
  if (typeof c.db.pass == 'string' && c.db.pass != '') {
    env.dbpass = c.db.pass;
  } else if (typeof c.db.pass == 'string') {
    mse('db.pass must be a not empty');
  } else {
    mse('db.pass must be a not empty and string');
  }
}
function validemail(email) {
  const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
}
function dbpfv(str) {
  const dbpfvRegex = /^[a-zA-Z0-9_]{1,10}$/;
  if (dbpfvRegex.test(str)) {
    return true;
  } else {
    return false;
  }
}
aafed = ['', 'AES', 'DES'];
async function run(env) {
  try {
    c = JSON.parse(fs.readFileSync(path.join(env.rp, 'config.json'), 'utf8').toString());
  } catch (e) {
    mse('Json parse error: ' + e.message);
  }
  if (isjson(c.site)) {
    if (typeof c.site.sitename == 'string' && c.site.sitename != '') {
      env.sn = c.site.sitename;
    } else if (typeof c.site.sitename == 'string' && c.site.sitename == '') {
      mse('site.sitename must be a not empty');
    } else {
      mse('site.sitename must be a defined and must be string');
    }
    if (typeof c.site.about == 'string' && c.site.about != '') {
      env.sa = c.site.about;
    } else if (typeof c.site.about == 'string' && c.site.about == '') {
      mse('site.about must be a not empty');
    } else {
      mse('site.about must be a defined and must be string');
    }
    if (typeof c.site.hoston == 'number' && (c.site.hoston == 0 || c.site.hoston == 1)) {
      env.ho = c.site.hoston;
    } else if (typeof c.site.hoston == 'number') {
      mse('site.hoston must be a 0 for localhost or 1 for online');
    } else {
      mse('site.hoston must be a defined and must be number and must be a 0 for localhost or 1 for online');
    }
    if (typeof c.site.url == 'string' && c.site.url != '') {
      env.ho = c.site.url;
    } else if (typeof c.site.url == 'string' && c.site.url == '') {
      mse('site.url must be a not empty');
    } else {
      mse('site.hoston must be a defined and must be string');
    }
    if (typeof c.site.isssl == 'boolean') {
      !0 == c.site.isssl ? env.ssl = "y" : !1 == c.site.isssl && (env.ssl = "n");
    } else {
      mse('site.isssl must be a defined and must be true or false in boolean');
    }
  } else {
    mse('In config.json, site must be in JSON format(Object)');
  }
  if (isjson(c.db)) {
    if (typeof c.db.type == 'string' && (c.db.type == 'mongodb' || c.db.type == 'mysql' || c.db.type == 'postgre')) {
      env.dbt = c.db.type;
      if (c.db.type == 'mongodb') {
        if (typeof c.db.url == 'string' && (c.db.url.startsWith('mongodb://') || c.db.url.startsWith('mongodb+srv://'))) {
          env.dburl = c.db.url;
        } else if (typeof c.db.url == 'string') {
          mse('db.url mongodb url must begin with "mongodb://" or "mongodb+srv://"');
        } else {
          mse('db.url mongodb url must be set to a string and must begin with "mongodb://" or "mongodb+srv://"');
        }
      } else if (c.db.type == 'mysql') {
        commansqlcheck(c, env);
      } else if (c.db.type == 'postgre') {
        commansqlcheck(c, env);
        if (typeof c.db.port == 'number') {
          env.dbport = c.db.port;
        } else {
          mse('db.port must be a not empty and number');
        }
      }
    } else if (typeof c.db.type == 'string') {
      mse('db.type must be a "mongodb" or "mysql" or "postgre"');
    } else {
      mse('db.type must be a defined and must be string and must be a "mongodb" or "mysql" or "postgre"');
    }
    if (dbpfv(c.db.prefix)) {
      env.dbpf = c.db.prefix;
    } else {
      mse('db.prefix must be a defined and must be string and non empty');
    }
  } else {
    mse('In config.json, db must be in JSON format(Object)');
  }
  if (isjson(c.email)) {
    if (typeof c.email.isset == 'boolean') {
      if (c.email.isset == true) {
        service = 0;
        auth = 0;
        if (typeof c.email.type == 'string' && (c.email.type == 'service' || c.email.type == 'smtp')) {
          service = 1;
        } else if (typeof c.email.type == 'string') {
          mse('email.type must be "service" or "smtp"');
        } else {
          mse('email.type must be a defined and must be "service" or "smtp" in string');
        }
        if (typeof c.email.auth == 'string' && (c.email.auth == 'pass' || c.email.auth == 'outh2')) {
          auth = 1;
        } else if (typeof c.email.auth == 'string') {
          mse('email.auth must be "pass" or "outh2"');
        } else {
          mse('email.auth must be a defined and must be "pass" or "outh2" in string');
        }
        if (isjson(c.email.options) && service == 1 && auth == 1) {
          if (c.email.type == 'service') {
            sa = ['gmail', 'yahoo', 'hotmail', 'outlook', 'aol', 'zoho', 'protonmail', 'fastmail', 'mail.com', 'gmx', 'yandex', 'icloud'];
            if (typeof c.email.options.service == 'string' && sa.includes(c.email.options.service)) {
              service = 2;
            }
          } else if (c.email.type == 'smtp') {
            pa = [25, 465, 587, 2525]
            if ((typeof c.email.options.host == 'string' && c.email.options.host != '')) {
              if (typeof c.email.options.port == 'number' && pa.includes(c.email.options.port)) {
                if (typeof c.email.options.secure == 'boolean' && (c.email.options.secure == true || c.email.options.secure == false)) {
                  service = 2;
                } else {
                  mse('email.options.secure must be true or false');
                }
              } else {
                mse('email.options.port must be number and only from options 25, 465, 587, and 2525');
              }
            } else {
              mse('email.options.host must be string and not empty');
            }
          }
          if (isjson(c.email.options.auth))
            if (c.email.auth == 'pass') {
              if (validemail(c.email.options.auth.user)) {
                if (typeof c.email.options.auth.pass == 'string' && c.email.options.auth.pass != '') {
                  auth=2
                } else {
                  mse('c.email.options.auth.pass must be string and not empty');
                }
              } else {
                mse('c.email.options.auth.user must be a valid email address');
              }
            } else if (c.email.auth == 'outh2') {
              if (typeof c.email.options.auth.type == 'string' && c.email.options.auth.type == 'OAuth2') {
                if (validemail(c.email.options.auth.user)) {
                  if (typeof c.email.options.auth.clientId == 'string' && c.email.options.auth.clientId != '') {
                    if (typeof c.email.options.auth.clientSecret == 'string' && c.email.options.auth.clientSecret != '') {
                      if (typeof c.email.options.auth.refreshToken == 'string' && c.email.options.auth.refreshToken != '') {
                        auth = 2;
                      } else {
                        mse('c.email.options.auth.refreshToken must be string and not empty');
                      }
                    } else {
                      mse('c.email.options.auth.clientSecret must be string and not empty');
                    }
                  } else {
                    mse('c.email.options.auth.clientId must be string and not empty');
                  }
                } else {
                  mse('c.email.options.auth.user must be a valid email address');
                }
              } else {
                mse('email.options.auth.type must be OAuth2 in string');
              }
            } else {
              mse('email.options.auth must be json formatted');
            }
        }
        if (service == 2 && auth == 2) {
          env.isem = 'y';
          env.ems = c.email.type;
          env.ema = c.email.auth;
          env.emo = JSON.stringify(c.email.options);
        }
      } else {
        env.isem = 'n';
      }
    } else {
      mse('email.isset must be a defined and must be true or false in boolean');
    }
  } else {
    mse('In config.json, security must be in JSON format(Object)');
  }




  if (isjson(c.security)) {
    if (typeof c.security.data_t_algo == 'string') {

    }
  } else {
    mse('In config.json, security must be in JSON format(Object)');
  }
}
module.exports = {
  run
}