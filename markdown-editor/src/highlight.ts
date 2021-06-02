import 'highlight.js/styles/googlecode.css';
import hljs from 'highlight.js/lib/core'

export default hljs

import accesslog from 'highlight.js/lib/languages/accesslog'
import actionscript from 'highlight.js/lib/languages/actionscript'
import apache from 'highlight.js/lib/languages/apache'
import applescript from 'highlight.js/lib/languages/applescript'
import bash from 'highlight.js/lib/languages/bash'
import basic from 'highlight.js/lib/languages/basic'
import cmake from 'highlight.js/lib/languages/cmake'
import coffeescript from 'highlight.js/lib/languages/coffeescript'
import cpp from 'highlight.js/lib/languages/cpp'
import css from 'highlight.js/lib/languages/css'
import dart from 'highlight.js/lib/languages/dart'
import delphi from 'highlight.js/lib/languages/delphi'
import diff from 'highlight.js/lib/languages/diff'
import django from 'highlight.js/lib/languages/django'
import dns from 'highlight.js/lib/languages/dns'
import dockerfile from 'highlight.js/lib/languages/dockerfile'
import dos from 'highlight.js/lib/languages/dos'
import dust from 'highlight.js/lib/languages/dust'
import erlang from 'highlight.js/lib/languages/erlang'
import excel from 'highlight.js/lib/languages/excel'
import fortran from 'highlight.js/lib/languages/fortran'
import fsharp from 'highlight.js/lib/languages/fsharp'
import go from 'highlight.js/lib/languages/go'
import gradle from 'highlight.js/lib/languages/gradle'
import groovy from 'highlight.js/lib/languages/groovy'
import haskell from 'highlight.js/lib/languages/haskell'
import http from 'highlight.js/lib/languages/http'
import java from 'highlight.js/lib/languages/java'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import kotlin from 'highlight.js/lib/languages/kotlin'
import less from 'highlight.js/lib/languages/less'
import lisp from 'highlight.js/lib/languages/lisp'
import livescript from 'highlight.js/lib/languages/livescript'
import llvm from 'highlight.js/lib/languages/llvm'
import lua from 'highlight.js/lib/languages/lua'
import makefile from 'highlight.js/lib/languages/makefile'
import markdown from 'highlight.js/lib/languages/markdown'
import matlab from 'highlight.js/lib/languages/matlab'
import moonscript from 'highlight.js/lib/languages/moonscript'
import nginx from 'highlight.js/lib/languages/nginx'
import objectivec from 'highlight.js/lib/languages/objectivec'
import perl from 'highlight.js/lib/languages/perl'
import php from 'highlight.js/lib/languages/php'
import plaintext from 'highlight.js/lib/languages/plaintext'
import powershell from 'highlight.js/lib/languages/powershell'
import profile from 'highlight.js/lib/languages/profile'
import prolog from 'highlight.js/lib/languages/prolog'
import protobuf from 'highlight.js/lib/languages/protobuf'
import python from 'highlight.js/lib/languages/python'
import r from 'highlight.js/lib/languages/r'
import ruby from 'highlight.js/lib/languages/ruby'
import rust from 'highlight.js/lib/languages/rust'
import scala from 'highlight.js/lib/languages/scala'
import scheme from 'highlight.js/lib/languages/scheme'
import scss from 'highlight.js/lib/languages/scss'
import shell from 'highlight.js/lib/languages/shell'
import smali from 'highlight.js/lib/languages/smali'
import smalltalk from 'highlight.js/lib/languages/smalltalk'
import sql from 'highlight.js/lib/languages/sql'
import stylus from 'highlight.js/lib/languages/stylus'
import swift from 'highlight.js/lib/languages/swift'
import taggerscript from 'highlight.js/lib/languages/taggerscript'
import typescript from 'highlight.js/lib/languages/typescript'
import vbscript from 'highlight.js/lib/languages/vbscript'
import vim from 'highlight.js/lib/languages/vim'
import xml from 'highlight.js/lib/languages/xml'
import yaml from 'highlight.js/lib/languages/yaml'

const supportedLangMap = new Map([
  ['accesslog', accesslog],
  ['actionscript', actionscript],
  ['apache', apache],
  ['applescript', applescript],
  ['bash', bash],
  ['basic', basic],
  ['cmake', cmake],
  ['coffeescript', coffeescript],
  ['cpp', cpp],
  ['css', css],
  ['dart', dart],
  ['delphi', delphi],
  ['diff', diff],
  ['django', django],
  ['dns', dns],
  ['dockerfile', dockerfile],
  ['dos', dos],
  ['dust', dust],
  ['erlang', erlang],
  ['excel', excel],
  ['fortran', fortran],
  ['fsharp', fsharp],
  ['go', go],
  ['gradle', gradle],
  ['groovy', groovy],
  ['haskell', haskell],
  ['http', http],
  ['java', java],
  ['javascript', javascript],
  ['json', json],
  ['kotlin', kotlin],
  ['less', less],
  ['lisp', lisp],
  ['livescript', livescript],
  ['llvm', llvm],
  ['lua', lua],
  ['makefile', makefile],
  ['markdown', markdown],
  ['matlab', matlab],
  ['moonscript', moonscript],
  ['nginx', nginx],
  ['objectivec', objectivec],
  ['perl', perl],
  ['php', php],
  ['plaintext', plaintext],
  ['powershell', powershell],
  ['profile', profile],
  ['prolog', prolog],
  ['protobuf', protobuf],
  ['python', python],
  ['r', r],
  ['ruby', ruby],
  ['rust', rust],
  ['scala', scala],
  ['scheme', scheme],
  ['scss', scss],
  ['shell', shell],
  ['smali', smali],
  ['smalltalk', smalltalk],
  ['sql', sql],
  ['stylus', stylus],
  ['swift', swift],
  ['taggerscript', taggerscript],
  ['typescript', typescript],
  ['vbscript', vbscript],
  ['vim', vim],
  ['xml', xml],
  ['yaml', yaml],
])

supportedLangMap.forEach((lang, name) => hljs.registerLanguage(name, lang))

export const supportedLangNames = new Set(supportedLangMap.keys())
