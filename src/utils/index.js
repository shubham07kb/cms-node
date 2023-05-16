async function jsmaker(a, src, env) {
    resp = '';
  if (a == 'app.js' || a == 'app.min.js') {
    resp += 'sitename=`' + env.sn + '`;';
    resp += 'isssl=`' + env.ssl + '`;';
    resp += 'secon=`' + 'y' + '`;';
    resp += 'headhtml=`' + src.fs.readFileSync(src.path.join(env.rp, '/public/html/component/header.min.html')) + '`;';
    resp += 'foothtml=`' + src.fs.readFileSync(src.path.join(env.rp, '/public/html/component/footer.min.html')) + '`;';
    resp += 'skeletonhtml=`' + src.fs.readFileSync(src.path.join(env.rp, '/public/html/component/skeleton.min.html')) + '`;';
    resp += 'headcss=`' + src.fs.readFileSync(src.path.join(env.rp, '/public/css/component/header.min.css')) + '`;';
    resp += 'footcss=`' + src.fs.readFileSync(src.path.join(env.rp, '/public/css/component/footer.min.css')) + '`;';
    resp += 'skeletonccss=`' + src.fs.readFileSync(src.path.join(env.rp, '/public/css/component/skeleton.min.css')) + '`;';
    resp += 'skeletonlcss=`' + src.fs.readFileSync(src.path.join(env.rp, '/public/css/component/skeleton.light.min.css')) + '`;';
    resp += 'skeletondcss=`' + src.fs.readFileSync(src.path.join(env.rp, '/public/css/component/skeleton.dark.min.css')) + '`;';
    resp += 'headjs=`' + src.fs.readFileSync(src.path.join(env.rp, '/public/js/component/header.min.js')) + '`;';
    resp += 'footjs=`' + src.fs.readFileSync(src.path.join(env.rp, '/public/js/component/footer.min.js')) + '`;';
    
    resp+=src.fs.readFileSync(src.path.join(env.rp, '/public/js/features/crypto.min.js'));
    if (a == 'app.min.js') {
      resp += src.fs.readFileSync(src.path.join(env.rp, '/public/js/app.min.js'));
    } else if (a == 'app.js') { 
      resp += src.fs.readFileSync(src.path.join(env.rp, '/public/js/app.js'));
    }
  } else {
    resp += '//no javascript found!';
  }
  return resp;
}
async function pagemaker(a, src, env, ud) { 
  if (a == 'home') {
    htmlcode = src.fs.readFileSync(src.path.join(env.rp, '/public/html/home.min.html'));
    csscode = src.fs.readFileSync(src.path.join(env.rp, '/public/css/home.min.css'));
    jscode = src.fs.readFileSync(src.path.join(env.rp, '/public/js/home.min.js'));
    return
  }
  htmlcode = '<h1>404</h1>';
  csscode = 'h1{text-align:center;}';
  jscode = '';
  return 
}
module.exports = {
  jsmaker: jsmaker,
  pagemaker: pagemaker,
}
