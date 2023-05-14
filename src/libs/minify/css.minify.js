const fs = require('fs');
async function minifycss(e) {
    e = e.replace(/(\r\n|\n|\r)/gm, "");
    e = e.replace(/\s+/g, ' ').trim();
    e = e.replace('\t', '');
    f = '';
    k = 0;
    for (let i = 0; i < e.length; i++) { 
        if (e.length - 3 > 2) {
            if (e[i] == '/' && e[i + 1]=='*') {
                k = 3;
                continue;
            }
        }
        if (k == 3 && e[i] == '*' && e[i + 1] == '/') { 
            k = 4;
            continue;
        }
        if (k == 4 && e[i] == '/') {
            k = 0;
            continue;
        }
        if (e[i] == '"' && k == 0) {
            k = 1;
            f += '"';
            continue;
        } else if (e[i] == "'" && k == 0) { 
            k = 2;
            f += "'";
            continue;
        }
        if (k == 1 || k == 2) {
            f += e[i];
        } else if (k == 0 && e[i]!=' ') { 
            f += e[i];
        }
        if (e[i] == '"' && k == 1) {
            k = 0;
        } else if (e[i] == "'" && k == 2) {
            k = 0;
        }
    }
    return f;
}
module.exports = {
    cssminify:minifycss
}