var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  viteStaticCopy: () => viteStaticCopy
});
module.exports = __toCommonJS(src_exports);

// src/options.ts
var resolveOptions = (options) => {
  var _a, _b, _c, _d, _e;
  return {
    targets: options.targets,
    flatten: (_a = options.flatten) != null ? _a : true,
    watch: {
      options: (_c = (_b = options.watch) == null ? void 0 : _b.options) != null ? _c : {},
      reloadPageOnChange: (_e = (_d = options.watch) == null ? void 0 : _d.reloadPageOnChange) != null ? _e : false
    }
  };
};

// node_modules/@polka/url/build.mjs
var qs = __toESM(require("querystring"), 1);
function parse2(req) {
  let raw = req.url;
  if (raw == null)
    return;
  let prev = req._parsedUrl;
  if (prev && prev.raw === raw)
    return prev;
  let pathname = raw, search = "", query;
  if (raw.length > 1) {
    let idx = raw.indexOf("?", 1);
    if (idx !== -1) {
      search = raw.substring(idx);
      pathname = raw.substring(0, idx);
      if (search.length > 1) {
        query = qs.parse(search.substring(1));
      }
    }
  }
  return req._parsedUrl = { pathname, search, query, raw };
}

// node_modules/mrmime/index.mjs
var mimes = {
  "ez": "application/andrew-inset",
  "aw": "application/applixware",
  "atom": "application/atom+xml",
  "atomcat": "application/atomcat+xml",
  "atomdeleted": "application/atomdeleted+xml",
  "atomsvc": "application/atomsvc+xml",
  "dwd": "application/atsc-dwd+xml",
  "held": "application/atsc-held+xml",
  "rsat": "application/atsc-rsat+xml",
  "bdoc": "application/bdoc",
  "xcs": "application/calendar+xml",
  "ccxml": "application/ccxml+xml",
  "cdfx": "application/cdfx+xml",
  "cdmia": "application/cdmi-capability",
  "cdmic": "application/cdmi-container",
  "cdmid": "application/cdmi-domain",
  "cdmio": "application/cdmi-object",
  "cdmiq": "application/cdmi-queue",
  "cu": "application/cu-seeme",
  "mpd": "application/dash+xml",
  "davmount": "application/davmount+xml",
  "dbk": "application/docbook+xml",
  "dssc": "application/dssc+der",
  "xdssc": "application/dssc+xml",
  "es": "application/ecmascript",
  "ecma": "application/ecmascript",
  "emma": "application/emma+xml",
  "emotionml": "application/emotionml+xml",
  "epub": "application/epub+zip",
  "exi": "application/exi",
  "fdt": "application/fdt+xml",
  "pfr": "application/font-tdpfr",
  "geojson": "application/geo+json",
  "gml": "application/gml+xml",
  "gpx": "application/gpx+xml",
  "gxf": "application/gxf",
  "gz": "application/gzip",
  "hjson": "application/hjson",
  "stk": "application/hyperstudio",
  "ink": "application/inkml+xml",
  "inkml": "application/inkml+xml",
  "ipfix": "application/ipfix",
  "its": "application/its+xml",
  "jar": "application/java-archive",
  "war": "application/java-archive",
  "ear": "application/java-archive",
  "ser": "application/java-serialized-object",
  "class": "application/java-vm",
  "js": "application/javascript",
  "mjs": "application/javascript",
  "json": "application/json",
  "map": "application/json",
  "json5": "application/json5",
  "jsonml": "application/jsonml+json",
  "jsonld": "application/ld+json",
  "lgr": "application/lgr+xml",
  "lostxml": "application/lost+xml",
  "hqx": "application/mac-binhex40",
  "cpt": "application/mac-compactpro",
  "mads": "application/mads+xml",
  "webmanifest": "application/manifest+json",
  "mrc": "application/marc",
  "mrcx": "application/marcxml+xml",
  "ma": "application/mathematica",
  "nb": "application/mathematica",
  "mb": "application/mathematica",
  "mathml": "application/mathml+xml",
  "mbox": "application/mbox",
  "mscml": "application/mediaservercontrol+xml",
  "metalink": "application/metalink+xml",
  "meta4": "application/metalink4+xml",
  "mets": "application/mets+xml",
  "maei": "application/mmt-aei+xml",
  "musd": "application/mmt-usd+xml",
  "mods": "application/mods+xml",
  "m21": "application/mp21",
  "mp21": "application/mp21",
  "mp4s": "application/mp4",
  "m4p": "application/mp4",
  "doc": "application/msword",
  "dot": "application/msword",
  "mxf": "application/mxf",
  "nq": "application/n-quads",
  "nt": "application/n-triples",
  "cjs": "application/node",
  "bin": "application/octet-stream",
  "dms": "application/octet-stream",
  "lrf": "application/octet-stream",
  "mar": "application/octet-stream",
  "so": "application/octet-stream",
  "dist": "application/octet-stream",
  "distz": "application/octet-stream",
  "pkg": "application/octet-stream",
  "bpk": "application/octet-stream",
  "dump": "application/octet-stream",
  "elc": "application/octet-stream",
  "deploy": "application/octet-stream",
  "exe": "application/octet-stream",
  "dll": "application/octet-stream",
  "deb": "application/octet-stream",
  "dmg": "application/octet-stream",
  "iso": "application/octet-stream",
  "img": "application/octet-stream",
  "msi": "application/octet-stream",
  "msp": "application/octet-stream",
  "msm": "application/octet-stream",
  "buffer": "application/octet-stream",
  "oda": "application/oda",
  "opf": "application/oebps-package+xml",
  "ogx": "application/ogg",
  "omdoc": "application/omdoc+xml",
  "onetoc": "application/onenote",
  "onetoc2": "application/onenote",
  "onetmp": "application/onenote",
  "onepkg": "application/onenote",
  "oxps": "application/oxps",
  "relo": "application/p2p-overlay+xml",
  "xer": "application/patch-ops-error+xml",
  "pdf": "application/pdf",
  "pgp": "application/pgp-encrypted",
  "asc": "application/pgp-signature",
  "sig": "application/pgp-signature",
  "prf": "application/pics-rules",
  "p10": "application/pkcs10",
  "p7m": "application/pkcs7-mime",
  "p7c": "application/pkcs7-mime",
  "p7s": "application/pkcs7-signature",
  "p8": "application/pkcs8",
  "ac": "application/pkix-attr-cert",
  "cer": "application/pkix-cert",
  "crl": "application/pkix-crl",
  "pkipath": "application/pkix-pkipath",
  "pki": "application/pkixcmp",
  "pls": "application/pls+xml",
  "ai": "application/postscript",
  "eps": "application/postscript",
  "ps": "application/postscript",
  "provx": "application/provenance+xml",
  "cww": "application/prs.cww",
  "pskcxml": "application/pskc+xml",
  "raml": "application/raml+yaml",
  "rdf": "application/rdf+xml",
  "owl": "application/rdf+xml",
  "rif": "application/reginfo+xml",
  "rnc": "application/relax-ng-compact-syntax",
  "rl": "application/resource-lists+xml",
  "rld": "application/resource-lists-diff+xml",
  "rs": "application/rls-services+xml",
  "rapd": "application/route-apd+xml",
  "sls": "application/route-s-tsid+xml",
  "rusd": "application/route-usd+xml",
  "gbr": "application/rpki-ghostbusters",
  "mft": "application/rpki-manifest",
  "roa": "application/rpki-roa",
  "rsd": "application/rsd+xml",
  "rss": "application/rss+xml",
  "rtf": "application/rtf",
  "sbml": "application/sbml+xml",
  "scq": "application/scvp-cv-request",
  "scs": "application/scvp-cv-response",
  "spq": "application/scvp-vp-request",
  "spp": "application/scvp-vp-response",
  "sdp": "application/sdp",
  "senmlx": "application/senml+xml",
  "sensmlx": "application/sensml+xml",
  "setpay": "application/set-payment-initiation",
  "setreg": "application/set-registration-initiation",
  "shf": "application/shf+xml",
  "siv": "application/sieve",
  "sieve": "application/sieve",
  "smi": "application/smil+xml",
  "smil": "application/smil+xml",
  "rq": "application/sparql-query",
  "srx": "application/sparql-results+xml",
  "gram": "application/srgs",
  "grxml": "application/srgs+xml",
  "sru": "application/sru+xml",
  "ssdl": "application/ssdl+xml",
  "ssml": "application/ssml+xml",
  "swidtag": "application/swid+xml",
  "tei": "application/tei+xml",
  "teicorpus": "application/tei+xml",
  "tfi": "application/thraud+xml",
  "tsd": "application/timestamped-data",
  "toml": "application/toml",
  "trig": "application/trig",
  "ttml": "application/ttml+xml",
  "ubj": "application/ubjson",
  "rsheet": "application/urc-ressheet+xml",
  "td": "application/urc-targetdesc+xml",
  "vxml": "application/voicexml+xml",
  "wasm": "application/wasm",
  "wgt": "application/widget",
  "hlp": "application/winhlp",
  "wsdl": "application/wsdl+xml",
  "wspolicy": "application/wspolicy+xml",
  "xaml": "application/xaml+xml",
  "xav": "application/xcap-att+xml",
  "xca": "application/xcap-caps+xml",
  "xdf": "application/xcap-diff+xml",
  "xel": "application/xcap-el+xml",
  "xns": "application/xcap-ns+xml",
  "xenc": "application/xenc+xml",
  "xhtml": "application/xhtml+xml",
  "xht": "application/xhtml+xml",
  "xlf": "application/xliff+xml",
  "xml": "application/xml",
  "xsl": "application/xml",
  "xsd": "application/xml",
  "rng": "application/xml",
  "dtd": "application/xml-dtd",
  "xop": "application/xop+xml",
  "xpl": "application/xproc+xml",
  "xslt": "application/xml",
  "xspf": "application/xspf+xml",
  "mxml": "application/xv+xml",
  "xhvml": "application/xv+xml",
  "xvml": "application/xv+xml",
  "xvm": "application/xv+xml",
  "yang": "application/yang",
  "yin": "application/yin+xml",
  "zip": "application/zip",
  "3gpp": "video/3gpp",
  "adp": "audio/adpcm",
  "amr": "audio/amr",
  "au": "audio/basic",
  "snd": "audio/basic",
  "mid": "audio/midi",
  "midi": "audio/midi",
  "kar": "audio/midi",
  "rmi": "audio/midi",
  "mxmf": "audio/mobile-xmf",
  "mp3": "audio/mpeg",
  "m4a": "audio/mp4",
  "mp4a": "audio/mp4",
  "mpga": "audio/mpeg",
  "mp2": "audio/mpeg",
  "mp2a": "audio/mpeg",
  "m2a": "audio/mpeg",
  "m3a": "audio/mpeg",
  "oga": "audio/ogg",
  "ogg": "audio/ogg",
  "spx": "audio/ogg",
  "opus": "audio/ogg",
  "s3m": "audio/s3m",
  "sil": "audio/silk",
  "wav": "audio/wav",
  "weba": "audio/webm",
  "xm": "audio/xm",
  "ttc": "font/collection",
  "otf": "font/otf",
  "ttf": "font/ttf",
  "woff": "font/woff",
  "woff2": "font/woff2",
  "exr": "image/aces",
  "apng": "image/apng",
  "avif": "image/avif",
  "bmp": "image/bmp",
  "cgm": "image/cgm",
  "drle": "image/dicom-rle",
  "emf": "image/emf",
  "fits": "image/fits",
  "g3": "image/g3fax",
  "gif": "image/gif",
  "heic": "image/heic",
  "heics": "image/heic-sequence",
  "heif": "image/heif",
  "heifs": "image/heif-sequence",
  "hej2": "image/hej2k",
  "hsj2": "image/hsj2",
  "ief": "image/ief",
  "jls": "image/jls",
  "jp2": "image/jp2",
  "jpg2": "image/jp2",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "jpe": "image/jpeg",
  "jph": "image/jph",
  "jhc": "image/jphc",
  "jpm": "image/jpm",
  "jpx": "image/jpx",
  "jpf": "image/jpx",
  "jxr": "image/jxr",
  "jxra": "image/jxra",
  "jxrs": "image/jxrs",
  "jxs": "image/jxs",
  "jxsc": "image/jxsc",
  "jxsi": "image/jxsi",
  "jxss": "image/jxss",
  "ktx": "image/ktx",
  "ktx2": "image/ktx2",
  "png": "image/png",
  "btif": "image/prs.btif",
  "pti": "image/prs.pti",
  "sgi": "image/sgi",
  "svg": "image/svg+xml",
  "svgz": "image/svg+xml",
  "t38": "image/t38",
  "tif": "image/tiff",
  "tiff": "image/tiff",
  "tfx": "image/tiff-fx",
  "webp": "image/webp",
  "wmf": "image/wmf",
  "disposition-notification": "message/disposition-notification",
  "u8msg": "message/global",
  "u8dsn": "message/global-delivery-status",
  "u8mdn": "message/global-disposition-notification",
  "u8hdr": "message/global-headers",
  "eml": "message/rfc822",
  "mime": "message/rfc822",
  "3mf": "model/3mf",
  "gltf": "model/gltf+json",
  "glb": "model/gltf-binary",
  "igs": "model/iges",
  "iges": "model/iges",
  "msh": "model/mesh",
  "mesh": "model/mesh",
  "silo": "model/mesh",
  "mtl": "model/mtl",
  "obj": "model/obj",
  "stpz": "model/step+zip",
  "stpxz": "model/step-xml+zip",
  "stl": "model/stl",
  "wrl": "model/vrml",
  "vrml": "model/vrml",
  "x3db": "model/x3d+fastinfoset",
  "x3dbz": "model/x3d+binary",
  "x3dv": "model/x3d-vrml",
  "x3dvz": "model/x3d+vrml",
  "x3d": "model/x3d+xml",
  "x3dz": "model/x3d+xml",
  "appcache": "text/cache-manifest",
  "manifest": "text/cache-manifest",
  "ics": "text/calendar",
  "ifb": "text/calendar",
  "coffee": "text/coffeescript",
  "litcoffee": "text/coffeescript",
  "css": "text/css",
  "csv": "text/csv",
  "html": "text/html",
  "htm": "text/html",
  "shtml": "text/html",
  "jade": "text/jade",
  "jsx": "text/jsx",
  "less": "text/less",
  "markdown": "text/markdown",
  "md": "text/markdown",
  "mml": "text/mathml",
  "mdx": "text/mdx",
  "n3": "text/n3",
  "txt": "text/plain",
  "text": "text/plain",
  "conf": "text/plain",
  "def": "text/plain",
  "list": "text/plain",
  "log": "text/plain",
  "in": "text/plain",
  "ini": "text/plain",
  "dsc": "text/prs.lines.tag",
  "rtx": "text/richtext",
  "sgml": "text/sgml",
  "sgm": "text/sgml",
  "shex": "text/shex",
  "slim": "text/slim",
  "slm": "text/slim",
  "spdx": "text/spdx",
  "stylus": "text/stylus",
  "styl": "text/stylus",
  "tsv": "text/tab-separated-values",
  "t": "text/troff",
  "tr": "text/troff",
  "roff": "text/troff",
  "man": "text/troff",
  "me": "text/troff",
  "ms": "text/troff",
  "ttl": "text/turtle",
  "uri": "text/uri-list",
  "uris": "text/uri-list",
  "urls": "text/uri-list",
  "vcard": "text/vcard",
  "vtt": "text/vtt",
  "yaml": "text/yaml",
  "yml": "text/yaml",
  "3gp": "video/3gpp",
  "3g2": "video/3gpp2",
  "h261": "video/h261",
  "h263": "video/h263",
  "h264": "video/h264",
  "m4s": "video/iso.segment",
  "jpgv": "video/jpeg",
  "jpgm": "image/jpm",
  "mj2": "video/mj2",
  "mjp2": "video/mj2",
  "ts": "video/mp2t",
  "mp4": "video/mp4",
  "mp4v": "video/mp4",
  "mpg4": "video/mp4",
  "mpeg": "video/mpeg",
  "mpg": "video/mpeg",
  "mpe": "video/mpeg",
  "m1v": "video/mpeg",
  "m2v": "video/mpeg",
  "ogv": "video/ogg",
  "qt": "video/quicktime",
  "mov": "video/quicktime",
  "webm": "video/webm"
};
function lookup(extn) {
  let tmp = ("" + extn).trim().toLowerCase();
  let idx = tmp.lastIndexOf(".");
  return mimes[!~idx ? tmp : tmp.substring(++idx)];
}

// src/middleware.ts
var import_node_fs = require("fs");
var import_node_path = require("path");
var FS_PREFIX = `/@fs/`;
var VALID_ID_PREFIX = `/@id/`;
var CLIENT_PUBLIC_PATH = `/@vite/client`;
var ENV_PUBLIC_PATH = `/@vite/env`;
var importQueryRE = /(\?|&)import=?(?:&|$)/;
var internalPrefixes = [
  FS_PREFIX,
  VALID_ID_PREFIX,
  CLIENT_PUBLIC_PATH,
  ENV_PUBLIC_PATH
];
var InternalPrefixRE = new RegExp(`^(?:${internalPrefixes.join("|")})`);
var isImportRequest = (url) => importQueryRE.test(url);
var isInternalRequest = (url) => InternalPrefixRE.test(url);
function viaLocal(root, fileMap, uri) {
  if (uri.endsWith("/")) {
    uri = uri.slice(-1);
  }
  const file = fileMap.get(uri);
  if (file) {
    const filepath = (0, import_node_path.resolve)(root, file);
    const stats = (0, import_node_fs.statSync)(filepath);
    const headers = toHeaders(filepath, stats);
    return { filepath, stats, headers };
  }
  return void 0;
}
function toHeaders(name, stats) {
  let ctype = lookup(name) || "";
  if (ctype === "text/html")
    ctype += ";charset=utf-8";
  const headers = {
    "Content-Length": stats.size,
    "Content-Type": ctype,
    "Last-Modified": stats.mtime.toUTCString(),
    ETag: `W/"${stats.size}-${stats.mtime.getTime()}"`,
    "Cache-Control": "no-cache"
  };
  return headers;
}
function send(req, res, file, stats, headers) {
  let code = 200;
  const opts = {};
  headers = __spreadValues({}, headers);
  for (const key in headers) {
    const tmp = res.getHeader(key);
    if (tmp)
      headers[key] = tmp;
  }
  const contentTypeHeader = res.getHeader("content-type");
  if (contentTypeHeader) {
    headers["Content-Type"] = contentTypeHeader;
  }
  if (req.headers.range) {
    code = 206;
    const [x, y] = req.headers.range.replace("bytes=", "").split("-");
    const end = (y ? parseInt(y, 10) : 0) || stats.size - 1;
    const start = (x ? parseInt(x, 10) : 0) || 0;
    opts.end = end;
    opts.start = start;
    if (start >= stats.size || end >= stats.size) {
      res.setHeader("Content-Range", `bytes */${stats.size}`);
      res.statusCode = 416;
      res.end();
      return;
    }
    headers["Content-Range"] = `bytes ${start}-${end}/${stats.size}`;
    headers["Content-Length"] = end - start + 1;
    headers["Accept-Ranges"] = "bytes";
  }
  res.writeHead(code, headers);
  (0, import_node_fs.createReadStream)(file, opts).pipe(res);
}
function serveStaticCopyMiddleware(root, fileMap) {
  return function viteServeStaticCopyMiddleware(req, res, next) {
    if (isImportRequest(req.url) || isInternalRequest(req.url)) {
      return next();
    }
    let pathname = parse2(req).pathname;
    if (pathname.includes("%")) {
      try {
        pathname = decodeURIComponent(pathname);
      } catch (err) {
      }
    }
    const data = viaLocal(root, fileMap, pathname);
    if (!data) {
      if (next) {
        next();
        return;
      }
      res.statusCode = 404;
      res.end();
      return;
    }
    if (req.headers["if-none-match"] === data.headers["ETag"]) {
      res.writeHead(304);
      res.end();
      return;
    }
    if (/\.[tj]sx?$/.test(pathname)) {
      res.setHeader("Content-Type", "application/javascript");
    }
    send(req, res, data.filepath, data.stats, data.headers);
  };
}

// src/utils.ts
var import_fast_glob = __toESM(require("fast-glob"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs_extra = __toESM(require("fs-extra"), 1);
var import_picocolors = __toESM(require("picocolors"), 1);
var collectCopyTargets = async (root, targets, flatten) => {
  const copyTargets = [];
  for (const { src, dest, rename } of targets) {
    const matchedPaths = await (0, import_fast_glob.default)(src, {
      onlyFiles: false,
      dot: true,
      cwd: root
    });
    for (const matchedPath of matchedPaths) {
      const { base, dir } = import_path.default.parse(matchedPath);
      const destDir = flatten || !flatten && !dir ? dest : dir.replace(dir.split("/")[0], dest);
      copyTargets.push({
        src: matchedPath,
        dest: import_path.default.join(destDir, rename != null ? rename : base)
      });
    }
  }
  return copyTargets;
};
var copyAll = async (rootSrc, rootDest, targets, flatten) => {
  const copyTargets = await collectCopyTargets(rootSrc, targets, flatten);
  await Promise.all(copyTargets.map(({ src, dest }) => import_fs_extra.default.copy(src, import_path.default.join(rootDest, dest))));
  return copyTargets.length;
};
var updateFileMapFromTargets = (targets, fileMap) => {
  fileMap.clear();
  for (const target of [...targets].reverse()) {
    let dest = target.dest.replace(/\\/g, "/");
    if (!dest.startsWith("/")) {
      dest = `/${dest}`;
    }
    fileMap.set(dest, target.src);
  }
};
var formatConsole = (msg) => `${import_picocolors.default.cyan("[vite-plugin-static-copy]")} ${msg}`;
var outputCollectedLog = (logger, collectCount) => {
  if (collectCount > 0) {
    logger.info(formatConsole(import_picocolors.default.green(`Collected ${collectCount} items.`)));
  } else {
    logger.warn(formatConsole(import_picocolors.default.yellow("No items found.")));
  }
};
var outputCopyLog = (logger, copyCount) => {
  if (copyCount === void 0) {
    logger.error(formatConsole(import_picocolors.default.yellow("Copy count was not set.")));
  } else if (copyCount > 0) {
    logger.info(formatConsole(import_picocolors.default.green(`Copied ${copyCount} items.`)));
  } else {
    logger.warn(formatConsole(import_picocolors.default.yellow("No items to copy.")));
  }
};

// node_modules/throttle-debounce/esm/index.js
function throttle(delay, noTrailing, callback, debounceMode) {
  var timeoutID;
  var cancelled = false;
  var lastExec = 0;
  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  }
  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  }
  if (typeof noTrailing !== "boolean") {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = void 0;
  }
  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }
    var self = this;
    var elapsed = Date.now() - lastExec;
    if (cancelled) {
      return;
    }
    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    function clear() {
      timeoutID = void 0;
    }
    if (debounceMode && !timeoutID) {
      exec();
    }
    clearExistingTimeout();
    if (debounceMode === void 0 && elapsed > delay) {
      exec();
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === void 0 ? delay - elapsed : delay);
    }
  }
  wrapper.cancel = cancel;
  return wrapper;
}
function debounce(delay, atBegin, callback) {
  return callback === void 0 ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}

// src/serve.ts
var import_chokidar = __toESM(require("chokidar"), 1);
var import_picocolors2 = __toESM(require("picocolors"), 1);
var servePlugin = ({
  targets,
  flatten,
  watch
}) => {
  let config;
  let watcher;
  const fileMap = /* @__PURE__ */ new Map();
  const collectFileMap = async () => {
    const copyTargets = await collectCopyTargets(config.root, targets, flatten);
    updateFileMapFromTargets(copyTargets, fileMap);
  };
  const collectFileMapDebounce = debounce(100, async () => {
    await collectFileMap();
  });
  return {
    name: "vite-plugin-static-copy:serve",
    apply: "serve",
    configResolved(_config) {
      config = _config;
    },
    async buildStart() {
      await collectFileMap();
    },
    configureServer({ httpServer, middlewares, ws }) {
      const reloadPage = () => {
        ws.send({ type: "full-reload", path: "*" });
      };
      watcher = import_chokidar.default.watch(targets.flatMap((target) => target.src), __spreadValues({
        cwd: config.root,
        ignoreInitial: true
      }, watch.options));
      watcher.on("add", async (path2) => {
        config.logger.info(formatConsole(`${import_picocolors2.default.green("detected new file")} ${path2}`), {
          timestamp: true
        });
        await collectFileMapDebounce();
        if (watch.reloadPageOnChange) {
          reloadPage();
        }
      });
      if (watch.reloadPageOnChange) {
        watcher.on("change", (path2) => {
          config.logger.info(formatConsole(`${import_picocolors2.default.green("file changed")} ${path2}`), {
            timestamp: true
          });
          reloadPage();
        });
        watcher.on("unlink", (path2) => {
          config.logger.info(formatConsole(`${import_picocolors2.default.green("file deleted")} ${path2}`), {
            timestamp: true
          });
          reloadPage();
        });
      }
      middlewares.use(serveStaticCopyMiddleware(config.root, fileMap));
      httpServer == null ? void 0 : httpServer.once("listening", () => {
        setTimeout(() => {
          outputCollectedLog(config.logger, fileMap.size);
        }, 0);
      });
    },
    async closeBundle() {
      await watcher.close();
    }
  };
};

// src/build.ts
var buildPlugin = ({
  targets,
  flatten
}) => {
  let config;
  let copyCount;
  return {
    name: "vite-plugin-static-copy:build",
    apply: "build",
    configResolved(_config) {
      config = _config;
    },
    async writeBundle() {
      copyCount = await copyAll(config.root, config.build.outDir, targets, flatten);
    },
    closeBundle() {
      outputCopyLog(config.logger, copyCount);
    }
  };
};

// src/index.ts
var viteStaticCopy = (options) => {
  const resolvedOptions = resolveOptions(options);
  return [servePlugin(resolvedOptions), buildPlugin(resolvedOptions)];
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  viteStaticCopy
});
