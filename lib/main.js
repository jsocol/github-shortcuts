/**
 * Github Shortcuts
 *
 * @version 3.0
 * @author James Socol <james@mozilla.com>
 * @copyright 2012 James Socol
 * @license MIT/X11
 *
 * Adds some very basic, global navigation shortcuts to Github.
 * Hit 'g' and then one of these keys to go...
 *   'h' - home, to the dashboard,
 *   'n' - to your notifications,
 *   'y' - to your actions,
 *   'p' - to your pull requests.
 */
var pageMod = require('page-mod'),
    data = require('self').data;

pageMod.PageMod({
    include: ['*.github.com'],
    contentScriptWhen: 'ready',
    contentScriptFile: data.url('js/shortcuts.js')
});
