isServer: false,
requestCert: true,        rejectUnauthorized: true,
session: undefined,        NPNProtocols: undefined,
ALPNProtocols: undefined,
requestOCSP: undefined },
_secureEstablished: true,     _securePending: false,
_newSessionPending: false,     _controlReleased: true,
_SNICallback: null,     servername: 'api.twitter.com',     npnProtocol: false,
alpnProtocol: false,     authorized: true,     authorizationError: null,
encrypted: true,
_events:      { close: [Array],        end: [Function],
finish: [Function: onSocketFinish],
_socketEnd: [Function: onSocketEnd],        secure: [Function: onConnectSecure],        free: [Function: onFree],        agentRemove: [Function: onRemove],
drain: [Function: ondrain],        error: [Function: socketErrorListener] },
_eventsCount: 9,     connecting: false,
_hadError: false,     _handle: null,
_parent: null,     _host: 'api.twitter.com',
_readableState:
ReadableState {
objectMode: false,
highWaterMark: 16384,
buffer: [BufferList],
length: 0,
pipes: null,
pipesCount: 0,
flowing: true,
ended: false,
endEmitted: false,
reading: true,
sync: false,
needReadable: true,
emittedReadable: false,
readableListening: false,
resumeScheduled: false,
destroyed: true,
defaultEncoding: 'utf8',
awaitDrain: 0,
readingMore: true,
decoder: null,
encoding: null },
readable: false,
_maxListeners: undefined,
_writableState:
WritableState {
objectMode: false,
highWaterMark: 16384,
finalCalled: false,
needDrain: false,
ending: true,
ended: true,
finished: true,
destroyed: true,
decodeStrings: false,
defaultEncoding: 'utf8',
length: 0,
writing: false,
corked: 0,
sync: false,
bufferProcessing: false,
onwrite: [Function: bound onwrite],
writecb: null,
writelen: 0,
bufferedRequest: null,
lastBufferedRequest: null,
pendingcb: 0,
prefinished: true,
errorEmitted: false,
bufferedRequestCount: 0,
corkedRequestsFree: [Object] },
writable: false,
allowHalfOpen: false,
_bytesDispatched: 504,
_sockname: null,
_pendingData: null,
_pendingEncoding: '',
server: undefined,
_server: null,
ssl: null,
_requestCert: true,
_rejectUnauthorized: true,
parser: null,
_httpMessage:
ClientRequest {
_events: [Object],
_eventsCount: 5,
_maxListeners: undefined,
output: [],
outputEncodings: [],
outputCallbacks: [],
outputSize: 0,
writable: true,
_last: true,
upgrading: false,
chunkedEncoding: false,
shouldKeepAlive: false,
useChunkedEncodingByDefault: false,
sendDate: false,
_removedConnection: false,
_removedContLen: false,
_removedTE: false,
_contentLength: 0,
_hasBody: true,
_trailer: '',
finished: true,
_headerSent: true,
socket: [Circular],
connection: [Circular],
_header: 'GET /1.1/statuses/user_timeline.json?screen_name=robertpope6789&count=2 HTTP/1.1\r\nAccept: */*\r\nConnection: close\r\nUser-Agent: node-twitter/1.7.1\r\nhost: api.twitter.com\r\nAuthorization: OAuth oauth_consumer_key="2RM5mFnqXVz6KjYEFpNv1DyXh",oauth_nonce="4a97740b14a741dbb22074539271f876",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1524694907",oauth_token="986659389665873920-XtYoL9byTORpqZhjA1gVrAksZ16M2Sp",oauth_version="1.0",oauth_signature="VE5TAU72Di1cw4wNDTp3LwStKD8%3D"\r\ncontent-length: 0\r\n\r\n',
_onPendingData: [Function: noopPendingOutput],
agent: [Agent],
socketPath: undefined,
timeout: undefined,
method: 'GET',
path: '/1.1/statuses/user_timeline.json?screen_name=robertpope6789&count=2',
_ended: true,
res: [Circular],
aborted: undefined,
timeoutCb: null,
upgradeOrConnect: false,
parser: null,
maxHeadersCount: null,
[Symbol(isCorked)]: false,
[Symbol(outHeadersKey)]: [Object] },
_idleNext: null,
_idlePrev: null,
_idleTimeout: -1,
[Symbol(res)]:
TLSWrap {
_parent: [TCP],
_parentWrap: undefined,
_secureContext: [SecureContext],
reading: true,
owner: [Circular],
onread: [Function: noop],
onhandshakestart: [Function: noop],
onhandshakedone: [Function: bound ],
onocspresponse: [Function: onocspresponse],
onerror: [Function: onerror] },
[Symbol(asyncId)]: 10,
[Symbol(lastWriteQueueSize)]: 0,
[Symbol(bytesRead)]: 4959,
[Symbol(connect-options)]:
{ rejectUnauthorized: true,
ciphers: 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
checkServerIdentity: [Function: checkServerIdentity],
minDHSize: 1024,
encoding: null,
_agentKey: 'api.twitter.com:443::::::::::::::::',
href: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=robertpope6789&count=2',
_started: true,
agent: [Agent],
agentClass: [Function],
httpModule: [Object],
path: null,
url: [Url],
host: 'api.twitter.com',
port: 443,
_jar: undefined,
_disableCookies: true,
originalCookieHeader: undefined,
setHost: true,
tunnel: true,
proxy: null,
uri: [Url],
_callback: [Function],
__isRequestRequest: true,
dests: [],
pool: {},
localAddress: undefined,
removeHeader: [Function],
getHeader: [Function],
hasHeader: [Function],
setHeader: [Function],
_tunnel: [Tunnel],
_redirect: [Redirect],
_multipart: [Multipart],
_oauth: [OAuth],
_auth: [Auth],
_qs: [Querystring],
explicitMethod: true,
writable: true,
readable: true,
callback: [Function],
method: 'get',
headers: [Object],
_maxListeners: undefined,
_eventsCount: 3,
_events: [Object],
_defaultAgent: [Agent],
servername: 'api.twitter.com',
singleUse: true } },
httpVersionMajor: 1,
httpVersionMinor: 1,
httpVersion: '1.1',
complete: true,
headers:
{ 'cache-control': 'no-cache, no-store, must-revalidate, pre-check=0, post-check=0',
connection: 'close',
'content-disposition': 'attachment; filename=json.json',
'content-length': '3829',
'content-type': 'application/json;charset=utf-8',
date: 'Wed, 25 Apr 2018 22:21:47 GMT',
expires: 'Tue, 31 Mar 1981 05:00:00 GMT',
'last-modified': 'Wed, 25 Apr 2018 22:21:47 GMT',
pragma: 'no-cache',
server: 'tsa_b',
'set-cookie':
[ 'personalization_id="v1_SQAAqGP/I8JSq+DBc80xug=="; Expires=Fri, 24 Apr 2020 22:21:47 GMT; Path=/; Domain=.twitter.com',
'lang=en; Path=/',
'guest_id=v1%3A152469490767239037; Expires=Fri, 24 Apr 2020 22:21:47 GMT; Path=/; Domain=.twitter.com' ],
status: '200 OK',
'strict-transport-security': 'max-age=631138519',
'x-access-level': 'read-write',
'x-connection-hash': 'e57ffbc13dca0f32316ee396f0f1f56a',
'x-content-type-options': 'nosniff',
'x-frame-options': 'SAMEORIGIN',
'x-rate-limit-limit': '900',
'x-rate-limit-remaining': '898',
'x-rate-limit-reset': '1524695772',
'x-response-time': '159',
'x-transaction': '0050d05900c480e1',
'x-twitter-response-tags': 'BouncerCompliant',
'x-xss-protection': '1; mode=block; report=https://twitter.com/i/xss_report' },
rawHeaders:
[ 'cache-control',
'no-cache, no-store, must-revalidate, pre-check=0, post-check=0',
'connection',
'close',
'content-disposition',
'attachment; filename=json.json',
'content-length',
'3829',
'content-type',
'application/json;charset=utf-8',
'date',
'Wed, 25 Apr 2018 22:21:47 GMT',
'expires',
'Tue, 31 Mar 1981 05:00:00 GMT',
'last-modified',
'Wed, 25 Apr 2018 22:21:47 GMT',
'pragma',
'no-cache',
'server',
'tsa_b',
'set-cookie',
'personalization_id="v1_SQAAqGP/I8JSq+DBc80xug=="; Expires=Fri, 24 Apr 2020 22:21:47 GMT; Path=/; Domain=.twitter.com',
'set-cookie',
'lang=en; Path=/',
'set-cookie',
'guest_id=v1%3A152469490767239037; Expires=Fri, 24 Apr 2020 22:21:47 GMT; Path=/; Domain=.twitter.com',
'status',
'200 OK',
'strict-transport-security',
'max-age=631138519',
'x-access-level',
'read-write',
'x-connection-hash',
'e57ffbc13dca0f32316ee396f0f1f56a',
'x-content-type-options',
'nosniff',
'x-frame-options',
'SAMEORIGIN',
'x-rate-limit-limit',
'900',
'x-rate-limit-remaining',
'898',
'x-rate-limit-reset',
'1524695772',
'x-response-time',
'159',
'x-transaction',
'0050d05900c480e1',
'x-twitter-response-tags',
'BouncerCompliant',
'x-xss-protection',
'1; mode=block; report=https://twitter.com/i/xss_report' ],
trailers: {},
rawTrailers: [],
upgrade: false,
url: '',
method: null,
statusCode: 200,
statusMessage: 'OK',
client:
TLSSocket {
_tlsOptions:
{ pipe: false,
secureContext: [SecureContext],
isServer: false,
requestCert: true,
rejectUnauthorized: true,
session: undefined,
NPNProtocols: undefined,
ALPNProtocols: undefined,
requestOCSP: undefined },
_secureEstablished: true,
_securePending: false,
_newSessionPending: false,
_controlReleased: true,
_SNICallback: null,
servername: 'api.twitter.com',
npnProtocol: false,
alpnProtocol: false,
authorized: true,
authorizationError: null,
encrypted: true,
_events:
{ close: [Array],
end: [Function],
finish: [Function: onSocketFinish],
_socketEnd: [Function: onSocketEnd],
secure: [Function: onConnectSecure],
free: [Function: onFree],
agentRemove: [Function: onRemove],
drain: [Function: ondrain],
error: [Function: socketErrorListener] },
_eventsCount: 9,
connecting: false,
_hadError: false,
_handle: null,
_parent: null,
_host: 'api.twitter.com',
_readableState:
ReadableState {
objectMode: false,
highWaterMark: 16384,
buffer: [BufferList],
length: 0,
pipes: null,
pipesCount: 0,
flowing: true,
ended: false,
endEmitted: false,
reading: true,
sync: false,
needReadable: true,
emittedReadable: false,
readableListening: false,
resumeScheduled: false,
destroyed: true,
defaultEncoding: 'utf8',
awaitDrain: 0,
readingMore: true,
decoder: null,
encoding: null },
readable: false,
_maxListeners: undefined,
_writableState:
WritableState {
objectMode: false,
highWaterMark: 16384,
finalCalled: false,
needDrain: false,
ending: true,
ended: true,
finished: true,
destroyed: true,
decodeStrings: false,
defaultEncoding: 'utf8',
length: 0,
writing: false,
corked: 0,
sync: false,
bufferProcessing: false,
onwrite: [Function: bound onwrite],
writecb: null,
writelen: 0,
bufferedRequest: null,
lastBufferedRequest: null,
pendingcb: 0,
prefinished: true,
errorEmitted: false,
bufferedRequestCount: 0,
corkedRequestsFree: [Object] },
writable: false,
allowHalfOpen: false,
_bytesDispatched: 504,
_sockname: null,
_pendingData: null,
_pendingEncoding: '',
server: undefined,
_server: null,
ssl: null,
_requestCert: true,
_rejectUnauthorized: true,
parser: null,
_httpMessage:
ClientRequest {
_events: [Object],
_eventsCount: 5,
_maxListeners: undefined,
output: [],
outputEncodings: [],
outputCallbacks: [],
outputSize: 0,
writable: true,
_last: true,
upgrading: false,
chunkedEncoding: false,
shouldKeepAlive: false,
useChunkedEncodingByDefault: false,
sendDate: false,
_removedConnection: false,
_removedContLen: false,
_removedTE: false,
_contentLength: 0,
_hasBody: true,
_trailer: '',
finished: true,
_headerSent: true,
socket: [Circular],
connection: [Circular],
_header: 'GET /1.1/statuses/user_timeline.json?screen_name=robertpope6789&count=2 HTTP/1.1\r\nAccept: */*\r\nConnection: close\r\nUser-Agent: node-twitter/1.7.1\r\nhost: api.twitter.com\r\nAuthorization: OAuth oauth_consumer_key="2RM5mFnqXVz6KjYEFpNv1DyXh",oauth_nonce="4a97740b14a741dbb22074539271f876",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1524694907",oauth_token="986659389665873920-XtYoL9byTORpqZhjA1gVrAksZ16M2Sp",oauth_version="1.0",oauth_signature="VE5TAU72Di1cw4wNDTp3LwStKD8%3D"\r\ncontent-length: 0\r\n\r\n',
_onPendingData: [Function: noopPendingOutput],
agent: [Agent],
socketPath: undefined,
timeout: undefined,
method: 'GET',
path: '/1.1/statuses/user_timeline.json?screen_name=robertpope6789&count=2',
_ended: true,
res: [Circular],
aborted: undefined,
timeoutCb: null,
upgradeOrConnect: false,
parser: null,
maxHeadersCount: null,
[Symbol(isCorked)]: false,
[Symbol(outHeadersKey)]: [Object] },
_idleNext: null,
_idlePrev: null,
_idleTimeout: -1,
[Symbol(res)]:
TLSWrap {
_parent: [TCP],
_parentWrap: undefined,
_secureContext: [SecureContext],
reading: true,
owner: [Circular],
onread: [Function: noop],
onhandshakestart: [Function: noop],
onhandshakedone: [Function: bound ],
onocspresponse: [Function: onocspresponse],
onerror: [Function: onerror] },
[Symbol(asyncId)]: 10,
[Symbol(lastWriteQueueSize)]: 0,
[Symbol(bytesRead)]: 4959,
[Symbol(connect-options)]:
{ rejectUnauthorized: true,
ciphers: 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
checkServerIdentity: [Function: checkServerIdentity],
minDHSize: 1024,
encoding: null,
_agentKey: 'api.twitter.com:443::::::::::::::::',
href: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=robertpope6789&count=2',
_started: true,
agent: [Agent],
agentClass: [Function],
httpModule: [Object],
path: null,
url: [Url],
host: 'api.twitter.com',
port: 443,
_jar: undefined,
_disableCookies: true,
originalCookieHeader: undefined,
setHost: true,
tunnel: true,
proxy: null,
uri: [Url],
_callback: [Function],
__isRequestRequest: true,
dests: [],
pool: {},
localAddress: undefined,
removeHeader: [Function],
getHeader: [Function],
hasHeader: [Function],
setHeader: [Function],
_tunnel: [Tunnel],
_redirect: [Redirect],
_multipart: [Multipart],
_oauth: [OAuth],
_auth: [Auth],
_qs: [Querystring],
explicitMethod: true,
writable: true,
readable: true,
callback: [Function],
method: 'get',
headers: [Object],
_maxListeners: undefined,
_eventsCount: 3,
_events: [Object],
_defaultAgent: [Agent],
servername: 'api.twitter.com',
singleUse: true } },
_consuming: true,
_dumped: false,
req:
ClientRequest {
_events:
{ socket: [Function],
response: [Function: bound ],
error: [Function: bound ],
drain: [Function],
prefinish: [Function: requestOnPrefinish] },
_eventsCount: 5,
_maxListeners: undefined,
output: [],
outputEncodings: [],
outputCallbacks: [],
outputSize: 0,
writable: true,
_last: true,
upgrading: false,
chunkedEncoding: false,
shouldKeepAlive: false,
useChunkedEncodingByDefault: false,
sendDate: false,
_removedConnection: false,
_removedContLen: false,
_removedTE: false,
_contentLength: 0,
_hasBody: true,
_trailer: '',
finished: true,
_headerSent: true,
socket:
TLSSocket {
_tlsOptions: [Object],
_secureEstablished: true,
_securePending: false,
_newSessionPending: false,
_controlReleased: true,
_SNICallback: null,
servername: 'api.twitter.com',
npnProtocol: false,
alpnProtocol: false,
authorized: true,
authorizationError: null,
encrypted: true,
_events: [Object],
_eventsCount: 9,
connecting: false,
_hadError: false,
_handle: null,
_parent: null,
_host: 'api.twitter.com',
_readableState: [ReadableState],
readable: false,
_maxListeners: undefined,
_writableState: [WritableState],
writable: false,
allowHalfOpen: false,
_bytesDispatched: 504,
_sockname: null,
_pendingData: null,
_pendingEncoding: '',
server: undefined,
_server: null,
ssl: null,
_requestCert: true,
_rejectUnauthorized: true,
parser: null,
_httpMessage: [Circular],
_idleNext: null,
_idlePrev: null,
_idleTimeout: -1,
[Symbol(res)]: [TLSWrap],
[Symbol(asyncId)]: 10,
[Symbol(lastWriteQueueSize)]: 0,
[Symbol(bytesRead)]: 4959,
[Symbol(connect-options)]: [Object] },
connection:
TLSSocket {
_tlsOptions: [Object],
_secureEstablished: true,
_securePending: false,
_newSessionPending: false,
_controlReleased: true,
_SNICallback: null,
servername: 'api.twitter.com',
npnProtocol: false,
alpnProtocol: false,
authorized: true,
authorizationError: null,
encrypted: true,
_events: [Object],
_eventsCount: 9,
connecting: false,
_hadError: false,
_handle: null,
_parent: null,
_host: 'api.twitter.com',
_readableState: [ReadableState],
readable: false,
_maxListeners: undefined,
_writableState: [WritableState],
writable: false,
allowHalfOpen: false,
_bytesDispatched: 504,
_sockname: null,
_pendingData: null,
_pendingEncoding: '',
server: undefined,
_server: null,
ssl: null,
_requestCert: true,
_rejectUnauthorized: true,
parser: null,
_httpMessage: [Circular],
_idleNext: null,
_idlePrev: null,
_idleTimeout: -1,
[Symbol(res)]: [TLSWrap],
[Symbol(asyncId)]: 10,
[Symbol(lastWriteQueueSize)]: 0,
[Symbol(bytesRead)]: 4959,
[Symbol(connect-options)]: [Object] },
_header: 'GET /1.1/statuses/user_timeline.json?screen_name=robertpope6789&count=2 HTTP/1.1\r\nAccept: */*\r\nConnection: close\r\nUser-Agent: node-twitter/1.7.1\r\nhost: api.twitter.com\r\nAuthorization: OAuth oauth_consumer_key="2RM5mFnqXVz6KjYEFpNv1DyXh",oauth_nonce="4a97740b14a741dbb22074539271f876",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1524694907",oauth_token="986659389665873920-XtYoL9byTORpqZhjA1gVrAksZ16M2Sp",oauth_version="1.0",oauth_signature="VE5TAU72Di1cw4wNDTp3LwStKD8%3D"\r\ncontent-length: 0\r\n\r\n',
_onPendingData: [Function: noopPendingOutput],
agent:
Agent {
_events: [Object],
_eventsCount: 1,
_maxListeners: undefined,
defaultPort: 443,
protocol: 'https:',
options: [Object],
requests: {},
sockets: [Object],
freeSockets: {},
keepAliveMsecs: 1000,
keepAlive: false,
maxSockets: Infinity,
maxFreeSockets: 256,
maxCachedSessions: 100,
_sessionCache: [Object] },
socketPath: undefined,
timeout: undefined,
method: 'GET',
path: '/1.1/statuses/user_timeline.json?screen_name=robertpope6789&count=2',
_ended: true,
res: [Circular],
aborted: undefined,
timeoutCb: null,
upgradeOrConnect: false,
parser: null,
maxHeadersCount: null,
[Symbol(isCorked)]: false,
[Symbol(outHeadersKey)]:
{ accept: [Array],
connection: [Array],
'user-agent': [Array],
host: [Array],
authorization: [Array],
'content-length': [Array] } },
request:
Request {
_events:
{ error: [Function: bound ],
complete: [Function: bound ],
pipe: [Function],
data: [Function],
end: [Function] },
_eventsCount: 5,
_maxListeners: undefined,
headers:
{ Accept: '*/*',
Connection: 'close',
'User-Agent': 'node-twitter/1.7.1',
Authorization: 'OAuth oauth_consumer_key="2RM5mFnqXVz6KjYEFpNv1DyXh",oauth_nonce="4a97740b14a741dbb22074539271f876",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1524694907",oauth_token="986659389665873920-XtYoL9byTORpqZhjA1gVrAksZ16M2Sp",oauth_version="1.0",oauth_signature="VE5TAU72Di1cw4wNDTp3LwStKD8%3D"',
'content-length': 0 },
method: 'get',
callback: [Function],
readable: true,
writable: true,
explicitMethod: true,
_qs:
Querystring {
request: [Circular],
lib: [Object],
useQuerystring: undefined,
parseOptions: {},
stringifyOptions: {} },
_auth:
Auth {
request: [Circular],
hasAuth: false,
sentAuth: false,
bearerToken: null,
user: null,
pass: null },
_oauth: OAuth { request: [Circular], params: [Object] },
_multipart:
Multipart {
request: [Circular],
boundary: 'fa8c8fdb-cc71-4448-94ae-a8f4fe3cb4d9',
chunked: false,
body: null },
_redirect:
Redirect {
request: [Circular],
followRedirect: true,
followRedirects: true,
followAllRedirects: false,
followOriginalHttpMethod: false,
allowRedirect: [Function],
maxRedirects: 10,
redirects: [],
redirectsFollowed: 0,
removeRefererHeader: false },
_tunnel:
Tunnel {
request: [Circular],
proxyHeaderWhiteList: [Array],
proxyHeaderExclusiveList: [] },
setHeader: [Function],
hasHeader: [Function],
getHeader: [Function],
removeHeader: [Function],
localAddress: undefined,
pool: {},
dests: [],
__isRequestRequest: true,
_callback: [Function],
uri:
Url {
protocol: 'https:',
slashes: true,
auth: null,
host: 'api.twitter.com',
port: null,
hostname: 'api.twitter.com',
hash: null,
search: '?screen_name=robertpope6789&count=2',
query: 'screen_name=robertpope6789&count=2',
pathname: '/1.1/statuses/user_timeline.json',
path: '/1.1/statuses/user_timeline.json?screen_name=robertpope6789&count=2',
href: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=robertpope6789&count=2' },
proxy: null,
tunnel: true,
setHost: true,
originalCookieHeader: undefined,
_disableCookies: true,
_jar: undefined,
port: 443,
host: 'api.twitter.com',
url:
Url {
protocol: 'https:',
slashes: true,
auth: null,
host: 'api.twitter.com',
port: null,
hostname: 'api.twitter.com',
hash: null,
search: '?screen_name=robertpope6789&count=2',
query: 'screen_name=robertpope6789&count=2',
pathname: '/1.1/statuses/user_timeline.json',
path: '/1.1/statuses/user_timeline.json?screen_name=robertpope6789&count=2',
href: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=robertpope6789&count=2' },
path: '/1.1/statuses/user_timeline.json?screen_name=robertpope6789&count=2',
httpModule:
{ Agent: [Function],
globalAgent: [Agent],
Server: [Function],
createServer: [Function: createServer],
get: [Function: get],
request: [Function: request] },
agentClass: { [Function: Agent] super_: [Function] },
agent:
Agent {
_events: [Object],
_eventsCount: 1,
_maxListeners: undefined,
defaultPort: 443,
protocol: 'https:',
options: [Object],
requests: {},
sockets: [Object],
freeSockets: {},
keepAliveMsecs: 1000,
keepAlive: false,
maxSockets: Infinity,
maxFreeSockets: 256,
maxCachedSessions: 100,
_sessionCache: [Object] },
_started: true,
href: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=robertpope6789&count=2',
req:
ClientRequest {
_events: [Object],
_eventsCount: 5,
_maxListeners: undefined,
output: [],
outputEncodings: [],
outputCallbacks: [],
outputSize: 0,
writable: true,
_last: true,
upgrading: false,
chunkedEncoding: false,
shouldKeepAlive: false,
useChunkedEncodingByDefault: false,
sendDate: false,
_removedConnection: false,
_removedContLen: false,
_removedTE: false,
_contentLength: 0,
_hasBody: true,
_trailer: '',
finished: true,
_headerSent: true,
socket: [TLSSocket],
connection: [TLSSocket],
_header: 'GET /1.1/statuses/user_timeline.json?screen_name=robertpope6789&count=2 HTTP/1.1\r\nAccept: */*\r\nConnection: close\r\nUser-Agent: node-twitter/1.7.1\r\nhost: api.twitter.com\r\nAuthorization: OAuth oauth_consumer_key="2RM5mFnqXVz6KjYEFpNv1DyXh",oauth_nonce="4a97740b14a741dbb22074539271f876",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1524694907",oauth_token="986659389665873920-XtYoL9byTORpqZhjA1gVrAksZ16M2Sp",oauth_version="1.0",oauth_signature="VE5TAU72Di1cw4wNDTp3LwStKD8%3D"\r\ncontent-length: 0\r\n\r\n',
_onPendingData: [Function: noopPendingOutput],
agent: [Agent],
socketPath: undefined,
timeout: undefined,
method: 'GET',
path: '/1.1/statuses/user_timeline.json?screen_name=robertpope6789&count=2',
_ended: true,
res: [Circular],
aborted: undefined,
timeoutCb: null,
upgradeOrConnect: false,
parser: null,
maxHeadersCount: null,
[Symbol(isCorked)]: false,
[Symbol(outHeadersKey)]: [Object] },
ntick: true,
response: [Circular],
originalHost: 'api.twitter.com',
originalHostHeaderName: 'host',
responseContent: [Circular],
_destdata: true,
_ended: true,
_callbackCalled: true },
toJSON: [Function: responseToJSON],
caseless:
Caseless {
dict:
{ 'cache-control': 'no-cache, no-store, must-revalidate, pre-check=0, post-check=0',
connection: 'close',
'content-disposition': 'attachment; filename=json.json',
'content-length': '3829',
'content-type': 'application/json;charset=utf-8',
date: 'Wed, 25 Apr 2018 22:21:47 GMT',
expires: 'Tue, 31 Mar 1981 05:00:00 GMT',
'last-modified': 'Wed, 25 Apr 2018 22:21:47 GMT',
pragma: 'no-cache',
server: 'tsa_b',
'set-cookie': [Array],
status: '200 OK',
'strict-transport-security': 'max-age=631138519',
'x-access-level': 'read-write',
'x-connection-hash': 'e57ffbc13dca0f32316ee396f0f1f56a',
'x-content-type-options': 'nosniff',
'x-frame-options': 'SAMEORIGIN',
'x-rate-limit-limit': '900',
'x-rate-limit-remaining': '898',
'x-rate-limit-reset': '1524695772',
'x-response-time': '159',
'x-transaction': '0050d05900c480e1',
'x-twitter-response-tags': 'BouncerCompliant',
'x-xss-protection': '1; mode=block; report=https://twitter.com/i/xss_report' } },
read: [Function],
body: '[{"created_at":"Mon Apr 23 23:16:23 +0000 2018","id":988557224380379136,"id_str":"988557224380379136","text":"#Facebook  don\'t sell my data, \\nwell maybe its too late to ask","truncated":false,"entities":{"hashtags":[{"text":"Facebook","indices":[0,9]}],"symbols":[],"user_mentions":[],"urls":[]},"source":"\\u003ca href=\\"http:\\/\\/twitter.com\\" rel=\\"nofollow\\"\\u003eTwitter Web Client\\u003c\\/a\\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":986659389665873920,"id_str":"986659389665873920","name":"robert","screen_name":"robertpope6789","location":"","description":"","url":null,"entities":{"description":{"urls":[]}},"protected":false,"followers_count":2,"friends_count":11,"listed_count":0,"created_at":"Wed Apr 18 17:35:04 +0000 2018","favourites_count":1,"utc_offset":null,"time_zone":null,"geo_enabled":false,"verified":false,"statuses_count":2,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"F5F8FA","profile_background_image_url":null,"profile_background_image_url_https":null,"profile_background_tile":false,"profile_image_url":"http:\\/\\/pbs.twimg.com\\/profile_images\\/986662106140479489\\/wnUxWRzw_normal.jpg","profile_image_url_https":"https:\\/\\/pbs.twimg.com\\/profile_images\\/986662106140479489\\/wnUxWRzw_normal.jpg","profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profileWaleeds-MacBook-Pro:liri-node-app waleedhamza$ node liri.js my-tweets/Users/waleedhamza/Desktop/home_work/liri-node-app/liri.js:51    console.log( response.statuses[0].created_at[0])                                  ^TypeError: Cannot read property '0' of undefined    at /Users/waleedhamza/Desktop/home_work/liri-node-app/liri.js:51:35    at Request._callback (/Users/waleedhamza/Desktop/home_work/liri-node-app/node_modules/twitter/lib/twitter.js:227:5)    at Request.self.callback (/Users/waleedhamza/Desktop/home_work/liri-node-app/node_modules/request/request.js:186:22)    at Request.emit (events.js:127:13)    at Request.<anonymous> (/Users/waleedhamza/Desktop/home_work/liri-node-app/node_modules/request/request.js:1163:10)    at Request.emit (events.js:127:13)    at IncomingMessage.<anonymous> (/Users/waleedhamza/Desktop/home_work/liri-node-app/node_modules/request/request.js:1085:12)    at Object.onceWrapper (events.js:219:13)    at IncomingMessage.emit (events.js:132Waleeds-MacBook-Pro:liri-node-app waleedhamza$
