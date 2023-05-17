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
async function isInStatic(a) { 
  staticPageArray = ['home', 'about', 'contact', 'privacy', 'terms', 'help', 'faq', 'support', 'sitemap', 'services'];
  if (staticPageArray.includes(a)) { 
    return true;
  } else {
    return false;
  }
}
async function pagemakerStatic(a, src, env, ud) { 
  if (isInStatic(a)) {
    htmlcode = encodeURIComponent(src.fs.readFileSync(src.path.join(env.rp, '/public/html/static/' + a + '.min.html'), 'utf8'));
    csscode = encodeURIComponent(src.fs.readFileSync(src.path.join(env.rp, '/public/css/static/' + a + '.min.css'), 'utf8'));
    jscode = encodeURIComponent(src.fs.readFileSync(src.path.join(env.rp, '/public/js/static/' + a + '.min.js'), 'utf8'));
    p = { html: htmlcode, css: csscode, js: jscode };
    return p;
  } else {
    htmlcode = '<h1>404</h1>';
    csscode = 'h1{text-align:center;}';
    jscode = '';
    p = { html: encodeURIComponent(htmlcode), css: encodeURIComponent(csscode), js: encodeURIComponent(jscode) }
    return p;
  }
}
module.exports = {
  jsmaker: jsmaker,
  pagemakerStatic: pagemakerStatic,
  isInStatic: isInStatic
}
