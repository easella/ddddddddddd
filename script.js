(() => {\r\n    function downloadSiteInfo(filename, text) {\r\n        let elem = document.createElement(\'a\');\r\n        elem.setAttribute(\'href\', \'data:text/plain;charset=utf-8,\' + encodeURIComponent(text));\r\n        elem.setAttribute(\'download\', filename);\r\n\r\n        elem.style.display = \'none\';\r\n        document.body.appendChild(elem);\r\n\r\n        elem.click();\r\n        elem.remove();\r\n    }\r\n\r\n    var html = `\r\n\t<div class="snowlord-devConsole-container-nav">\r\n\t\t<a class="snowlord-devConsole-container-nav-elementViewer" style="float: left;">` + "\\uD83D\\uDD0D" + `</a>\r\n\t\t<a class="snowlord-devConsole-container-nav-elementEditor" style="float: left;">` + "\\u270E" + `</a>\r\n\t\t<a name="snowlord-devConsole-container-body-elements" style="float: left;">Elements</a>\r\n\t\t<a name="snowlord-devConsole-container-body-console" style="float: left;">Console</a>\r\n\t\t<a name="snowlord-devConsole-container-body-sources" style="float: left;">Sources</a>\r\n\t\t<a name="snowlord-devConsole-container-body-tools" style="float: left;">Tools</a>\r\n\t\t<a name="snowlord-devConsole-container-body-settings" style="float: left;">Settings</a>\r\n\t\t<a class="snowlord-devConsole-container-body-exit" style="float: right;">` + "\\uD83D\\uDDD9" + `</a>\r\n\t</div>\r\n\t\r\n\t<div class="snowlord-devConsole-container-body">\r\n\t\t<div class="snowlord-devConsole-container-body-elements hidden">\r\n\t\t\t<h3 style="border-bottom: 2px solid #000;">Elements</h3>\r\n            <div class="snowlord-devConsole-container-body-elements-container" style="white-space: pre; width: 100%; height: 200px; overflow: scroll;">\r\n            </div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class="snowlord-devConsole-container-body-console hidden">\r\n\t\t\t<div class="snowlord-devConsole-container-body-console-text" style="user-select: auto;">\r\n\t\t\t\t<div class="snowlord-devConsole-container-body-console-messages">\r\n\t\t\t\t\t<span style="color: #bababa; user-select: none;">` + "\\u2B9E" + new Date().toLocaleTimeString().split(" ")[0] + ` </span>\r\n\t\t\t\t\t<span style="color: #000;">Console has loaded!</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="snowlord-devConsole-container-body-console-commands">\r\n\t\t\t\t<textarea id="snowlord-devConsole-container-body-console-input" placeholder="console.log(\'Hello World!\');" style="resize: horizontal; position: sticky; width: 100%; height: 90%; outline: none; border: none;"></textarea>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class="snowlord-devConsole-container-body-sources showing">\r\n\t\t\t<div class="snowlord-devConsole-container-body-sources-scripts" style="padding-left: 10px;">\r\n\t\t\t\t<h3 style="border-bottom: 2px solid #000;">Page <a class="snowlord-devConsole-container-body-sources-scripts-reload" style="cursor: pointer; color: #0a68ff; user-select: none;">` + "\\u21BA" + `</a></h3>\r\n\t\t\t\t<div class="snowlord-devConsole-container-body-sources-scripts-container" style="float: left; width: 60%; background-color: #bababa;">\r\n\t\t\t\t\t<ul style="float: left; width: 26%; padding: 3%; margin: 0;">\r\n\t\t\t\t\t\t<li>Scripts</li>\r\n\t\t\t\t\t\t<ul class="snowlord-devConsole-container-body-sources-other" style="padding: 3px; height: 120px; overflow:hidden; overflow-y:scroll; background-color: #e0e0e0;">\r\n\t\t\t\t\t\t\t<li>Main.js</li>\r\n\t\t\t\t\t\t\t<li>Script.js</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<ul style="float: left; width: 26%; padding: 3%; margin: 0;">\r\n\t\t\t\t\t\t<li>Styles</li>\r\n\t\t\t\t\t\t<ul class="snowlord-devConsole-container-body-sources-styles" style="padding: 3px; height: 120px; overflow:hidden; overflow-y:scroll; background-color: #e0e0e0;">\r\n\t\t\t\t\t\t\t<li>Main.css</li>\r\n\t\t\t\t\t\t\t<li>Style.css</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<ul style="float: left; width: 26%; padding: 3%; margin: 0;">\r\n\t\t\t\t\t\t<li>Meta</li>\r\n\t\t\t\t\t\t<ul class="snowlord-devConsole-container-body-sources-main" style="padding: 3px; height: 120px; overflow:hidden; overflow-y:scroll; background-color: #e0e0e0;">\r\n\t\t\t\t\t\t\t<li>Index.js</li>\r\n\t\t\t\t\t\t\t<li>Style.js</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class="snowlord-devConsole-container-body-sources-scripts-preview" style="float: left; width: 40 %; background-color: #bababa;">\r\n\t\t\t\t\t<iframe class="snowlord-devConsole-container-body-sources-scripts-preview-frame" width="100%" height="100%" frameborder="0" scrolling="yes"></iframe>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class="snowlord-devConsole-container-body-tools hidden">\r\n\t\t\t<h3 style="border-bottom: 2px solid #000;">Tools</h3>\r\n            <h4>Local Storage</h4><div id="snowlord-devConsole-localStorage"></div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class="snowlord-devConsole-container-body-settings hidden">\r\n\t\t\t<h3 style="border-bottom: 2px solid #000;">Settings</h3>\r\n\t\t</div>\r\n\t</div>\r\n`.trim();\r\n\r\n    var javascript = `\r\n\tvar snowlord_variables = {\r\n\t\tlisteners: [],\r\n\t\tloaded: true,\r\n\t\tshowing: true,\r\n\t\thijackFunctions: true,\r\n        hideLogs: true, \r\n\t\tlog: console.log,\r\n\t\twarn: console.warn,\r\n\t\terror: console.error,\r\n\t\ttooltip: {\r\n\t\t\tshowing : false,\r\n\t\t\toffsetX : 0,\r\n\t\t\toffsetY : 0,\r\n\t\t\tcolor : "rgba(0, 0, 0, 1)"\r\n\t\t}\r\n\t}\r\n\t/*\r\n\tElement.prototype.oldAddEventListener = Element.prototype.addEventListener;\r\n\tElement.prototype.addEventListener = function(type, handler, capture) {\r\n\t\tif (!capture) {\r\n\t\t\tcapture = false;\r\n\t\t}\r\n\t\tthis.oldAddEventListener(type, handler, capture);\r\n\t\tsnowlord_variables.listeners.push({\r\n\t\t\ttype : type,\r\n\t\t\tfunc : handler,\r\n\t\t\tcapture : capture,\r\n\t\t\telem : this,\r\n\t\t\tenabled : true\r\n\t\t});\r\n\t}\r\n\r\n\tfunction disableListener(index) {\r\n\t\tvar elem = snowlord_variables.listeners[index].elem;\r\n\t\tvar type = snowlord_variables.listeners[index].type;\r\n\t\tvar func = snowlord_variables.listeners[index].func;\r\n\t\tsnowlord_variables.listeners[index].enabled = false;\r\n\t\tvar capture = snowlord_variables.listeners[index].capture;\r\n\t\telem.removeEventListener(type, func, capture);\r\n\t}\r\n\r\n\tfunction toggleListener(index) {\r\n\t\tif (snowlord_variables.listeners[index].enabled) {\r\n\t\t\tdisableListener(index);\r\n\t\t} else {\r\n\t\t\tenableListener(index);\r\n\t\t}\r\n\t}\r\n\r\n\tfunction enableListener(index) {\r\n\t\tvar elem = snowlord_variables.listeners[index].elem;\r\n\t\tvar type = snowlord_variables.listeners[index].type;\r\n\t\tvar func = snowlord_variables.listeners[index].func;\r\n\t\tvar capture = snowlord_variables.listeners[index].capture;\r\n\t\tsnowlord_variables.listeners[index].enabled = true;\r\n\t\telem.oldAddEventListener(type, elem, func, capture);\r\n\t}\r\n\t*/\r\n\tconsole.log = function(msg) {\r\n\t\tvar c = document.getElementsByClassName("snowlord-devConsole-container-body-console-text")[0];\r\n\t\tvar cHeight = 10;\r\n\t\tif (snowlord_variables.hijackFunctions && c) {\r\n\t\t\ttry {\r\n\t\t\t\tmsg = msg.replace(/(\\?\\:\\\\r\\\\n|\\\\r|\\\\n)/g, "<br>");\r\n\t\t\t} catch(e) {}\r\n            if (typeof(msg) == "number") {\r\n\t\t\t\tc.innerHTML += \'<div class="snowlord-devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\\u2705" + `\' + new Date().toLocaleTimeString().split(" ")[0] + \'</span><span style="color: #0015ff;"> \' + msg +\'</span></div>\';\t\r\n\t\t\t} else if (typeof(msg) == "string") {\r\n\t\t\t\tc.innerHTML += \'<div class="snowlord-devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\\u2705" + `\' + new Date().toLocaleTimeString().split(" ")[0] + \'</span><span style="color: #000"> "</span><span style="color: #1c0000;">\' + msg +\'</span><span style="color: #000">"</span></div>\';\t\t\t\t\r\n\t\t\t} else if (typeof(msg) == "function") {\r\n\t\t\t\tc.innerHTML += \'<div class="snowlord-devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\\u2705" + `\' + new Date().toLocaleTimeString().split(" ")[0] + \'</span><span style="color: #000"> "</span><span style="color: #1c0000;">\' + msg +\'</span><span style="color: #000">"</span></div>\';\t\t\t\t\t\t\t\t\r\n\t\t\t} else if (typeof(msg) == "undefined") {\r\n\t\t\t\tc.innerHTML += \'<div class="snowlord-devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\\u2B9E" + `\' + new Date().toLocaleTimeString().split(" ")[0] + \'</span><span style="color: #b5b5b5;"> \' + msg +\'</span></div>\';\r\n\t\t\t} else {\r\n\t\t\t\tc.innerHTML += \'<div class="snowlord-devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\\u2705" + `\' + new Date().toLocaleTimeString().split(" ")[0] + \'</span><span style="color: #1c0000;"> \' + msg +\'</span></div>\';\r\n\t\t\t}\r\n\t\t\tif (c.childElementCount > cHeight) {\r\n\t\t\t\tc.children[0].remove();\r\n\t\t\t}\r\n\t\t\tdocument.getElementById("snowlord-devConsole-container-body-console-input").scrollIntoView();\r\n\t\t} else {\r\n\t\t\tsnowlord_variables.log(msg);\r\n\t\t}\r\n\t}\r\n\r\n\tconsole.error = function(msg) {\r\n\t\tvar c = document.getElementsByClassName("snowlord-devConsole-container-body-console-text")[0];\r\n\t\tvar cHeight = 10;\r\n\t\tif (snowlord_variables.hijackFunctions && c) {\r\n\t\t\ttry {\r\n\t\t\t\tmsg = msg.replace(/(\\?\\:\\\\r\\\\n|\\\\r|\\\\n)/g, "<br>");\r\n\t\t\t} catch(e) {}\r\n\t\t\tif (snowlord_variables.hideLogs) {\r\n                // Stop logging\r\n\t\t\t} else if (typeof(msg) == "number") {\r\n\t\t\t\tc.innerHTML += \'<div class="snowlord-devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\\u274C" + `\' + new Date().toLocaleTimeString().split(" ")[0] + \'</span><span style="color: #0015ff;"> \' + msg +\'</span></div>\';\t\r\n\t\t\t} else if (typeof(msg) == "string") {\r\n\t\t\t\tc.innerHTML += \'<div class="snowlord-devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\\u274C" + `\' + new Date().toLocaleTimeString().split(" ")[0] + \'</span><span style="color: #000"> "</span><span style="color: #d10000;">\' + msg +\'</span><span style="color: #000">"</span></div>\';\t\t\t\t\r\n\t\t\t} else if (typeof(msg) == "function") {\r\n\t\t\t\tc.innerHTML += \'<div class="snowlord-devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\\u274C" + `\' + new Date().toLocaleTimeString().split(" ")[0] + \'</span><span style="color: #000"> "</span><span style="color: #d10000;">\' + msg +\'</span><span style="color: #000">"</span></div>\';\t\t\t\t\t\t\t\t\r\n\t\t\t} else if (typeof(msg) == "undefined") {\r\n\t\t\t\tc.innerHTML += \'<div class="snowlord-devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\\u2B9E" + `\' + new Date().toLocaleTimeString().split(" ")[0] + \'</span><span style="color: #b5b5b5;"> \' + msg +\'</span></div>\';\r\n\t\t\t} else {\r\n\t\t\t\tc.innerHTML += \'<div class="snowlord-devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\\u274C" + `\' + new Date().toLocaleTimeString().split(" ")[0] + \'</span><span style="color: #d10000;"> \' + msg +\'</span></div>\';\r\n\t\t\t}\r\n\t\t\tif (c.childElementCount > cHeight) {\r\n\t\t\t\tc.children[0].remove();\r\n\t\t\t}\r\n\t\t\tdocument.getElementById("snowlord-devConsole-container-body-console-input").scrollIntoView();\r\n\t\t} else {\r\n\t\t\tsnowlord_variables.log(msg);\r\n\t\t}\r\n\t}\r\n\t\r\n\tconsole.warn = function(msg) {\r\n\t\tvar c = document.getElementsByClassName("snowlord-devConsole-container-body-console-text")[0];\r\n\t\tvar cHeight = 10;\r\n\t\tif (snowlord_variables.hijackFunctions && c) {\r\n\t\t\ttry {\r\n\t\t\t\tmsg = msg.replace(/(\\?\\:\\\\r\\\\n|\\\\r|\\\\n)/g, "<br>");\r\n\t\t\t} catch(e) {}\r\n\t\t\tif (snowlord_variables.hideLogs) {\r\n                // Stop logging\r\n\t\t\t} else if (typeof(msg) == "number") {\r\n\t\t\t\tc.innerHTML += \'<div class="snowlord-devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\\u26A0\\uFE0F" + `\' + new Date().toLocaleTimeString().split(" ")[0] + \'</span><span style="color: #0015ff;"> \' + msg +\'</span></div>\';\t\r\n\t\t\t} else if (typeof(msg) == "string") {\r\n\t\t\t\tc.innerHTML += \'<div class="snowlord-devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\\u26A0\\uFE0F" + `\' + new Date().toLocaleTimeString().split(" ")[0] + \'</span><span style="color: #000"> "</span><span style="color: #998201;">\' + msg +\'</span><span style="color: #000">"</span></div>\';\t\t\t\t\r\n\t\t\t} else if (typeof(msg) == "function") {\r\n\t\t\t\tc.innerHTML += \'<div class="snowlord-devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\\u26A0\\uFE0F" + `\' + new Date().toLocaleTimeString().split(" ")[0] + \'</span><span style="color: #000"> "</span><span style="color: #998201;">\' + msg +\'</span><span style="color: #000">"</span></div>\';\t\t\t\t\t\t\t\t\r\n\t\t\t} else if (typeof(msg) == "undefined") {\r\n\t\t\t\tc.innerHTML += \'<div class="snowlord-devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\\u2B9E" + `\' + new Date().toLocaleTimeString().split(" ")[0] + \'</span><span style="color: #b5b5b5;"> \' + msg +\'</span></div>\';\r\n\t\t\t} else {\r\n\t\t\t\tc.innerHTML += \'<div class="snowlord-devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\\u26A0\\uFE0F" + `\' + new Date().toLocaleTimeString().split(" ")[0] + \'</span><span style="color: #998201;"> \' + msg +\'</span></div>\';\r\n\t\t\t}\r\n\t\t\tif (c.childElementCount > cHeight) {\r\n\t\t\t\tc.children[0].remove();\r\n\t\t\t}\r\n\t\t\tdocument.getElementById("snowlord-devConsole-container-body-console-input").scrollIntoView();\r\n\t\t} else {\r\n\t\t\tsnowlord_variables.log(msg);\r\n\t\t}\r\n\t}\r\n`.trim();\r\n\r\n    var css = `\t\r\n\t@keyframes slideUp {\r\n\t\t0% {\r\n\t\t\ttransform: translateY(100%);\r\n\t\t}\r\n\t\t100% {\r\n\t\t\ttransform: translateY(0);\r\n\t\t}\r\n\t}\r\n  \r\n\t.tooltip {\r\n\t\tdisplay: inline-block;\r\n\t\tposition: relative;\r\n\t}\r\n\r\n\t.tooltip .tooltiptext {\r\n\t\tbackground-color: black;\r\n\t\ttransition: opacity 1s;\r\n\t\tvisibility: hidden;\r\n\t\ttext-align: center;\r\n\t\tborder-radius: 6px;\r\n\t\tposition: absolute;\r\n\t\tmargin-left: -60px;\r\n\t\tpadding: 5px 0;\r\n\t\tbottom: 100%;\r\n\t\twidth: 120px;\r\n\t\tcolor: #fff;\r\n\t\tz-index: 1;\r\n\t\topacity: 0;\r\n\t\tleft: 50%;\r\n\t}\r\n\r\n\t.tooltip:hover .tooltiptext {\r\n\t\tvisibility: visible;\r\n\t\topacity: 1;\r\n\t}\r\n\t\r\n\t.hidden {\r\n\t\tdisplay: none !important;\r\n\t}\r\n\t\r\n\t.showing {\r\n\t\tdisplay: block !imporant;\r\n\t}\r\n\r\n\t.snowlord-devConsole-container-body-console-messages {\r\n\t\tfont-family: Consolas, monaco, monospace, serif;\r\n\t}\r\n\t\r\n\t.snowlord-devConsole-container {\r\n\t\tbox-shaddow: 0 2px 30px 0 rgba(0, 0, 60, 0.045), 0px 1px 3px 0 rgba(0, 0, 80, 0.03);\r\n\t\tanimation: 1s ease-out 0s 1 slideUp;\r\n\t\tbackground-color: #f9f9f9;\r\n\t\tz-index: 9999999999999999;\r\n\t\tvertical-align: baseline;\r\n\t\tflex-direction: column;\r\n\t\tbox-sizing: border-box;\r\n\t\ttransition: 0.2s;\r\n\t\tposition: fixed;\r\n\t\theight: 300px;\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\tpadding: 0;\r\n\t\toutline: 0;\r\n\t\tmargin: 0;\r\n\t\tbottom: 0;\r\n\t\tleft: 0;\r\n\t}\r\n\t\r\n\t.snowlord-devConsole-container-nav {\r\n\t\tborder-top: 1px solid #848484;\r\n\t\tborder-bottom: 1px solid #848484;\r\n\t\tjustify-content: space-between;\r\n\t\t-webkit-box-direction: normal;\r\n\t\tbackground-color: #f2f2f2;\r\n\t\t-webkit-box-pack: justify;\r\n\t\tbox-sizing: border-box;\r\n\t\tuser-select: none;\r\n\t\tmin-height: 25px;\r\n\t\tline-height: 1;\r\n\t\tcursor: ns-resize;\r\n\t\tcolor: #000;\r\n\t\twidth: 100%;\r\n\t\tpadding: 0;\r\n\t\tmargin: 0;\r\n\t}\r\n\t\r\n\t.snowlord-devConsole-container-nav a, .snowlord-devConsole-container-nav span {\r\n\t\tpadding: 3px 5px 0 5px;\r\n\t\tmin-height: 20px;\r\n\t}\r\n\t\r\n\t.snowlord-devConsole-container-nav a:hover {\r\n\t\tbackground-color: rgba(0, 0, 0, 0.05);\r\n\t\tborder-bottom: 1px solid #00add8;\r\n\t\ttransition: background-color 0.25s;\r\n\t\tcursor: pointer;\r\n\t}\r\n\t\r\n    .string, .boolean, .number { font-weight: bold; }\r\n\r\n\t.string { color: rgb(233, 63, 59); }\r\n\r\n    .boolean, .number { color: rgb(85, 106, 242); }\r\n\r\n    .null { color: grey; }\r\n\r\n    .key { font-style: italic; }\r\n`.trim();\r\n\r\n    var tooltip = `\r\n\t<div id="snowlord-devConsole-tooltip" style="padding: 5px; background-color: #000; position: absolute; color: #fff; user-select: none; z-index: 99999999999; border-radius: 10px; ">\r\n\t\t<span id="snowlord-devConsole-tooltip-elementType" style="color:purple;"></span>\r\n\t\t<span id="snowlord-devConsole-tooltip-classType" style="color:green;"></span>\r\n\t\t<span id="snowlord-devConsole-tooltip-idType" style="color:orange;"></span>\r\n\t</div>\r\n`.trim();\r\n\r\n    var injectedHtml = document.createElement("div");\r\n    injectedHtml.classList.add("snowlord-devConsole-container");\r\n    injectedHtml.classList.add("showing");\r\n    injectedHtml.innerHTML = html;\r\n    document.getElementsByTagName("body")[0] ? document.getElementsByTagName("body")[0].appendChild(injectedHtml) : document.documentElement.appendChild(injectedHtml);\r\n    var consoleContainer = document.getElementsByClassName("snowlord-devConsole-container showing")[0];\r\n\r\n    var injectedTooltip = document.createElement("div");\r\n    injectedTooltip.classList.add("snowlord-devConsole-tooltip-container");\r\n    injectedTooltip.style.display = "none";\r\n    injectedTooltip.innerHTML = tooltip;\r\n    document.getElementsByTagName("body")[0] ? document.getElementsByTagName("body")[0].appendChild(injectedTooltip) : document.documentElement.appendChild(injectedTooltip);\r\n    var tooltipContainer = document.getElementsByClassName("snowlord-devConsole-tooltip-container")[0];\r\n\r\n    var injectedCss = document.createElement("style");\r\n    injectedCss.textContent = css.trim();\r\n    injectedCss.classList.add("snowlord-devConsole-injectedCss");\r\n    document.head ? document.head.appendChild(injectedCss) : document.body.appendChild(injectedCss);\r\n\r\n    var injectedJS = document.createElement("script");\r\n    injectedJS.textContent = javascript.trim();\r\n    injectedJS.classList.add("snowlord-devConsole-injectedJS");\r\n    document.head ? document.head.appendChild(injectedJS) : document.body.appendChild(injectedJS);\r\n\r\n    function highlightJSON(json) {\r\n        if (typeof json != \'string\') {\r\n            json = JSON.stringify(json, undefined, 2);\r\n        }\r\n        json = json.replace(/&/g, \'&amp;\').replace(/</g, \'&lt;\').replace(/>/g, \'&gt;\');\r\n        return json.replace(/("(\\\\u[a-zA-Z0-9]{4}|\\\\[^u]|[^\\\\"])*"(\\s*:)?|\\b(true|false|null)\\b|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?)/g, function (match) {\r\n            var cls = \'number\';\r\n            if (/^"/.test(match)) {\r\n                if (/:$/.test(match)) {\r\n                    cls = \'key\';\r\n                } else {\r\n                    cls = \'string\';\r\n                }\r\n            } else if (/true|false/.test(match)) {\r\n                cls = \'boolean\';\r\n            } else if (/null/.test(match)) {\r\n                cls = \'null\';\r\n            }\r\n            return \'<span class="\' + cls + \'">\' + match + \'</span>\';\r\n        });\r\n    }\r\n    document.getElementById(\'snowlord-devConsole-localStorage\').innerHTML = highlightJSON(localStorage);\r\n\r\n    var consoleInput = document.getElementById("snowlord-devConsole-container-body-console-input");\r\n    consoleInput.addEventListener("keydown", function (e) {\r\n        if (e.keyCode == 76 && e.ctrlKey && !e.altKey && !e.shiftKey && snowlord_variables.loaded) {\r\n            document.getElementsByClassName("snowlord-devConsole-container-body-console-text")[0].innerHTML = \'<div class="snowlord-devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">\xe2\xae\x9e\' + new Date().toLocaleTimeString().split(" ")[0] + \' </span><i style="color: #bababa;">Console was cleared</i></div>\';\r\n            this.value = \'\';\r\n        }\r\n\r\n        if (e.keyCode == 13 && !e.ctrlKey && !e.altKey && !e.shiftKey && snowlord_variables.loaded) {\r\n            e.preventDefault();\r\n            var val = this.value.toLowerCase().replace(/\\r?\\n|\\r/g, "");\r\n            if (val == "clear" || val == "clear()" || val == "clear();" || val == "console.clear()" || val == "console.clear();") {\r\n                document.getElementsByClassName("snowlord-devConsole-container-body-console-text")[0].innerHTML = \'<div class="snowlord-devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">\xe2\xae\x9e\' + new Date().toLocaleTimeString().split(" ")[0] + \' </span><i style="color: #bababa;">Console was cleared</i></div>\';\r\n                this.value = \'\';\r\n            } else if (val == "info" || val == "info;" || val == "getInfo" || val == "get info") {\r\n                downloadSiteInfo(\'Website Info.txt\', `\r\nWebsite Location: ${document.location.href}\r\nScreen Width: ${window.innerWidth}\r\nScreen Height: ${window.innerHeight}\r\nHTML Length: ${document.body.innerHTML.length}\r\nText Length: ${document.body.textContent.length}\r\nLoaded Scripts: ${document.getElementsByTagName(\'script\').length}\r\nLoaded Styles: ${document.getElementsByTagName(\'link\').length}\r\nMeta Tags: ${document.getElementsByTagName(\'meta\').length}\r\nExecuted Threads (Intervals & Loops): ${setInterval(\';\')}\r\nDate Opened: ${new Date()}\r\nTimezone: ${(new Date()).getTimezoneOffset() / 60}\r\nReferrer: ${document.referrer}\r\nCookies: ${document.cookie}\r\nUser-Agent: ${navigator.userAgent}\r\nLanguage: ${navigator.language}\r\nLocal Storage: ${JSON.stringify(localStorage)}\r\n                `.trim());\r\n                this.value = \'\';\r\n            } else if (val == "hidelogs()" || val == "hideLogs();" || val == "hidelogs();" || val == "hideLogs();") {\r\n                snowlord_variables.hideLogs = !snowlord_variables.hideLogs;\r\n            } else {\r\n                try {\r\n                    console.log(eval(this.value));\r\n                } catch (e) {\r\n                    console.error(e);\r\n                }\r\n                this.value = \'\';\r\n            }\r\n        }\r\n    });\r\n\r\n    var elementViewer = document.getElementsByClassName("snowlord-devConsole-container-nav-elementViewer")[0];\r\n    elementViewer.addEventListener("click", function () {\r\n\r\n    });\r\n\r\n    // Tooltip\r\n    document.addEventListener("mousemove", function (e) {\r\n        tooltip = snowlord_variables.tooltip;\r\n        if (snowlord_variables.loaded) {\r\n            if (tooltip.showing) {\r\n                // Show tooltip\r\n                document.getElementsByClassName("snowlord-devConsole-tooltip-container")[0].style.display = "block";\r\n                document.getElementsByClassName("snowlord-devConsole-tooltip-container")[0].style.backgroundColor = tooltip.color;\r\n\r\n                // Does the target have a tag name?\r\n                if (e.target.tagName.toLowerCase() != "") { // Yes\r\n                    document.getElementById("snowlord-devConsole-tooltip-elementType").innerHTML = e.target.tagName.toLowerCase();\r\n                } else { // No\r\n                    document.getElementById("snowlord-devConsole-tooltip-elementType").innerHTML = "";\r\n                }\r\n\r\n                // Does the target have a class name?\r\n                if (e.target.className != "") { // Yes\r\n                    document.getElementById("snowlord-devConsole-tooltip-classType").innerHTML = "." + e.target.className;\r\n                } else { // No\r\n                    document.getElementById("snowlord-devConsole-tooltip-classType").innerHTML = "";\r\n                }\r\n\r\n                // Does the target have an ID?\r\n                if (e.target.id != "" && e.target.id != "snowlord-devConsole-tooltip-elementType" && e.target.id != "snowlord-devConsole-tooltip-elementType" && e.target.id != "snowlord-devConsole-tooltip-classType" && e.target.id != "snowlord-devConsole-tooltip") { // Yes\r\n                    document.getElementById("snowlord-devConsole-tooltip-idType").innerHTML = "#" + e.target.id;\r\n                } else { // No\r\n                    document.getElementById("snowlord-devConsole-tooltip-idType").innerHTML = "";\r\n                }\r\n\r\n                // Position tooltip\r\n                moveToolTip(e);\r\n            } else {\r\n                document.getElementsByClassName("snowlord-devConsole-tooltip-container")[0].style.display = "none";\r\n            }\r\n        }\r\n    });\r\n\r\n    document.getElementsByClassName("snowlord-devConsole-container-nav-elementViewer")[0].addEventListener("click", function () {\r\n        if (snowlord_variables.loaded) {\r\n            snowlord_variables.tooltip.showing = !snowlord_variables.tooltip.showing;\r\n            console.log("Tooltip showing: " + snowlord_variables.tooltip.showing);\r\n        }\r\n    });\r\n\r\n    // Position tooltip function\r\n    function moveToolTip(e) {\r\n        var tooltip = document.getElementById("snowlord-devConsole-tooltip");\r\n        tooltip.style.left = e.pageX + 8 + \'px\';\r\n        tooltip.style.top = e.pageY + \'px\';\r\n        tooltip.offsetX = e.pageX + 8 + \'px\';\r\n        tooltip.offsetY = e.pageY + \'px\';\r\n    }\r\n\r\n    var elements = document.getElementsByClassName("snowlord-devConsole-container-nav")[0].getElementsByTagName("a");\r\n    for (let i = 0; i < elements.length; i++) {\r\n        if (elements[i].name) {\r\n            elements[i].addEventListener("click", function () {\r\n                if (snowlord_variables.loaded) {\r\n                    var elems = document.getElementsByClassName("snowlord-devConsole-container-body")[0].children;\r\n                    var curElem = document.getElementsByClassName(this.name)[0];\r\n                    for (let i = 0; i < elems.length; i++) {\r\n                        try {\r\n                            elems[i].classList.remove("hidden");\r\n                            elems[i].classList.remove("showing");\r\n                        } catch (e) {\r\n                            console.log(elems[i]);\r\n                        }\r\n                        elems[i].classList.add("hidden");\r\n                    }\r\n                    curElem.classList.remove("hidden");\r\n                    curElem.classList.add("showing");\r\n                }\r\n            });\r\n        }\r\n    }\r\n\r\n    document.getElementsByClassName("snowlord-devConsole-container-body-exit")[0].addEventListener("click", function () {\r\n        if (confirm(atob("QXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIGNsb3NlIFNub3dMb3JkJ3MgRGV2ZWxvcGVyIENvbnNvbGU/"))) {\r\n            document.getElementsByClassName("snowlord-devConsole-container")[0].remove();\r\n            document.getElementsByClassName("snowlord-devConsole-tooltip-container")[0].remove();\r\n            document.getElementsByClassName("snowlord-devConsole-injectedCss")[0].remove();\r\n            document.getElementsByClassName("snowlord-devConsole-injectedJS")[0].remove();\r\n            snowlord_variables.hijackFunctions = false;\r\n            snowlord_variables.loaded = false;\r\n            snowlord_variables.showing = false;\r\n        }\r\n    });\r\n\r\n    document.getElementsByClassName("snowlord-devConsole-container-nav-elementEditor")[0].addEventListener("click", function () {\r\n        if (document.body.contentEditable != "true" || document.body.designMode != "on") {\r\n            console.log("Editing elements: true");\r\n            document.body.contentEditable = "true";\r\n            document.body.designMode = "on";\r\n        } else {\r\n            console.log("Editing elements: false");\r\n            document.body.contentEditable = "false";\r\n            document.body.designMode = "off";\r\n        }\r\n    });\r\n\r\n    document.getElementsByClassName("snowlord-devConsole-container-body-sources-scripts-reload")[0].addEventListener("click", function () {\r\n        var main = document.getElementsByClassName("snowlord-devConsole-container-body-sources-main")[0];\r\n        var styles = document.getElementsByClassName("snowlord-devConsole-container-body-sources-styles")[0];\r\n        var other = document.getElementsByClassName("snowlord-devConsole-container-body-sources-other")[0];\r\n        main.innerHTML = other.innerHTML = styles.innerHTML = \'\';\r\n\r\n        for (let i = 0; i < document.getElementsByTagName("script").length; i++) {\r\n            if (document.getElementsByTagName("script")[i].src) other.innerHTML += \'<li><a onclick=\\\'document.getElementsByClassName("snowlord-devConsole-container-body-sources-scripts-preview-frame")[0].src = this.href;\\\' href="#">\' + document.getElementsByTagName("script")[i].src.split("/").pop() + \'</a></li>\';\r\n        }\r\n\r\n        for (let i = 0; i < document.getElementsByTagName("link").length; i++) {\r\n            styles.innerHTML += \'<li><a onclick=\\\'document.getElementsByClassName("snowlord-devConsole-container-body-sources-scripts-preview-frame")[0].src = this.src;\\\' target="_blank">\' + document.getElementsByTagName("link")[i].href.split("/").pop() + \'</a></li>\';\r\n        }\r\n\r\n        for (let i = 0; i < document.getElementsByTagName("meta").length; i++) {\r\n            main.innerHTML += \'<li><a onclick="alert(\\\'\' + document.getElementsByTagName("meta")[i].content + \'\\\');">\' + (document.getElementsByTagName("meta")[i].name || document.getElementsByTagName("meta").property) + \'</a></li>\';\r\n        }\r\n    });\r\n\r\n    document.getElementsByClassName("snowlord-devConsole-container-body-sources-scripts-reload")[0].click();\r\n    document.getElementsByClassName(\'snowlord-devConsole-container-body-elements-container\')[0].textContent = document.body.innerHTML.replace(/<\\/\\w+>/g, (e) => e + \'\\r\\n\');\r\n})();
