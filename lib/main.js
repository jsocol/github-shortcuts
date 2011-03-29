/**
 * Github Shortcuts
 *
 * @version 1.0
 * @author James Socol <james@mozilla.com>
 * @copyright 2011 James Socol
 * @license MIT/X11
 *
 * Adds some very basic, global navigation shortcuts to Github.
 * Hit 'g' and then one of these keys to go...
 *   'h' - home, to the dashboard,
 *   'n' - to your notifications,
 *   'i' - to your inbox,
 *   'y' - to your actions,
 *   'p' - to your pull requests.
 */
var pageMod = require('page-mod');
pageMod.PageMod({
    include: ['*.github.com'],
    contentScriptWhen: 'ready',
    contentScript:
        '(function() {' +
        'function githubUser () {' +
        '    return github_user;' +
        '}' +
        'var SHORTCUTS = {' +
        '        "h": "/",' +
        '        "n": "/inbox/notifications",' +
        '        "i": "/inbox",' +
        '        "y": "/dashboard/yours",' +
        '        "p": "/dashboard/pulls",' +
        '        "r": function() {' +
        '            if (!githubUser()) return;' +
        '            var input = document.createElement("input");' +
        '            input.style.cssText = "display: block; position: absolute; top: 0; left: 0";' +
        '            input.addEventListener("keyup", function(e) {' +
        '                if (e.keyCode == 13) {' +  // 13 = Enter
        '                    var path = "/" + githubUser() + "/" + this.value;' +
        '                    window.location = path;' +
        '                } else if (e.keyCode == 27) {' +  // 27 = Escape
        '                    this.blur();' +
        '                    document.body.removeChild(this);' +
        '                }' +
        '            }, true);' +
        '            document.body.appendChild(input);' +
        '            input.focus();' +
        '        },' +
        '    },' +
        '    ACTIVE = false;' +
        'document.addEventListener("keyup", function(e) {' +
        '    var tag = e.target.tagName && e.target.tagName.toLowerCase();' +
        '    if (tag == "input" || tag == "textarea") { return; }' +
        '    var key = String.fromCharCode(e.keyCode).toLowerCase();' +
        '    if (key == "g") {' +
        '        ACTIVE = true;' +
        '    } else if (ACTIVE) {' +
        '        ACTIVE = false;' +
        '        if (typeof SHORTCUTS[key] == "string") {' +
        '            window.location = SHORTCUTS[key];' +
        '            return false;' +
        '        } else if (typeof SHORTCUTS[key] == "function") {' +
        '            SHORTCUTS[key]();' +
        '            return false;' +
        '        }' +
        '    }' +
        '}, true);' +
        '})();',
});
