/*
 byte-data
 Bytes to and from numbers and strings.
 Copyright (c) 2017 Rafael da Silva Rocha.
 https://github.com/rochars/byte-data

 byte-data is licensed as follows:

Copyright (c) 2017 Rafael da Silva Rocha.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


int-bits is licensed as follows:

The MIT License (MIT) Copyright (c) 2015 Jam3

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
(function(c){function h(g){if(f[g])return f[g].a;var a=f[g]={P:g,A:!1,a:{}};c[g].call(a.a,a,a.a,h);a.A=!0;return a.a}var f={};h.O=c;h.L=f;h.b=function(c,a){h.c(c)||Object.defineProperty(c,"a",{configurable:!1,enumerable:!0,get:a})};h.M=function(c){var a=c&&c.K?function(){return c["default"]}:function(){return c};h.b(a,a);return a};h.c=function(c){return Object.prototype.hasOwnProperty.call(c,"a")};h.N="";return h(h.R=1)})([function(c){function h(d){g[0]=d;return a[0]}var f=new Int8Array(4),g=new Int32Array(f.buffer,
0,1),a=new Float32Array(f.buffer,0,1);c.a=h;c.a.B=h;c.a.J=function(d){a[0]=d;return g[0]}},function(c,h,f){c=f(2);f=f(3);window.floatTo8Bytes=c.i;window.floatTo4Bytes=c.h;window.intTo4Bytes=c.w;window.intTo3Bytes=c.v;window.intTo2Bytes=c.u;window.intTo1Byte=c.s;window.stringToBytes=c.D;window.intFrom1Byte=f.j;window.uIntFrom1Byte=f.F;window.intFrom2Bytes=f.l;window.uIntFrom2Bytes=f.G;window.intFrom3Bytes=f.m;window.uIntFrom3Bytes=f.H;window.intFrom4Bytes=f.o;window.uIntFrom4Bytes=f.I;window.floatFrom4Bytes=
f.f;window.floatFrom8Bytes=f.g;window.stringFromBytes=f.C},function(c,h,f){var g=f(0);c.a.i=function(a){for(var d=0,b=0,m=a.length,e=[];d<m;){if(0==a[d])e[b++]=0,e[b++]=0,e[b++]=0,e[b++]=0,e[b++]=0,e[b++]=0,e[b++]=0,e[b++]=0;else{var c=a[d],f=0;0>=c&&(f=2147483648,c=-c);var h=Math.floor(Math.log(c)/Math.log(2)),g=Math.floor(c/Math.pow(2,h)*Math.pow(2,52));c=g&4294967295;g/=Math.pow(2,32);f=f|h+1023<<20|g&1048575;a[d]=[f,c];e[b++]=a[d][1]&255;e[b++]=a[d][1]>>8&255;e[b++]=a[d][1]>>16&255;e[b++]=a[d][1]>>
24&255;e[b++]=a[d][0]>>32&255;e[b++]=a[d][0]>>40&255;e[b++]=a[d][0]>>48&255;e[b++]=a[d][0]>>56&255}d++}return e};c.a.h=function(a){for(var d=0,b=0,c=a.length,e=[];d<c;)a[d]=g.J(a[d]),e[b++]=a[d]&255,e[b++]=a[d]>>8&255,e[b++]=a[d]>>16&255,e[b++]=a[d]>>24&255,d++;return e};c.a.w=function(a){for(var d=0,b=0,c=a.length,e=[];d<c;)e[b++]=a[d]&255,e[b++]=a[d]>>8&255,e[b++]=a[d]>>16&255,e[b++]=a[d]>>24&255,d++;return e};c.a.v=function(a){for(var d=0,b=0,c=a.length,e=[];d<c;)e[b++]=a[d]&255,e[b++]=a[d]>>8&
255,e[b++]=a[d]>>16&255,d++;return e};c.a.u=function(a){for(var d=0,b=0,c=a.length,e=[];d<c;)e[b++]=a[d]&255,e[b++]=a[d]>>8&255,d++;return e};c.a.s=function(a){for(var d=0,b=0,c=a.length,e=[];d<c;)e[b++]=a[d]&255,d++;return e};c.a.D=function(a){for(var d=0,b=0,c=a.length,e=[];d<c;)e[b++]=a.charCodeAt(d),d++;return e}},function(c,h,f){var g=f(0);c.a.j=function(a){for(var d=[],b=0;b<a.length;)d[b]=a[b],127<d[b]&&(d[b]-=256),b+=1;return d};c.a.F=function(a){return a.slice()};c.a.l=function(a){for(var d=
[],b=0,c=0;b<a.length;)d[c]=a[1+b]<<8|a[b],a[1+b]&128&&(d[c]|=4294901760),c++,b+=2;return d};c.a.G=function(a){for(var d=[],b=0,c=0;b<a.length;)d[c]=a[1+b]<<8|a[b],c++,b+=2;return d};c.a.m=function(a){for(var d=[],b=0,c=0;b<a.length;)d[c]=a[2+b]<<16|a[1+b]<<8|a[b],d[c]=0<(d[c]&8388608)?d[c]|4278190080:d[c]&16777215,c++,b+=3;return d};c.a.H=function(a){for(var d=[],b=0,c=0;b<a.length;)d[c]=a[2+b]<<16|a[1+b]<<8|a[b],c++,b+=3;return d};c.a.o=function(a){for(var d=[],b=0,c=0;b<a.length;)d[c]=a[3+b]<<
24|a[2+b]<<16|a[1+b]<<8|a[b],0>(d[c]&2147483648)&&(d[c]&=4294967295),c++,b+=4;return d};c.a.I=function(a){for(var d=[],b=0,c=0;b<a.length;)d[c]=a[3+b]<<24|a[2+b]<<16|a[1+b]<<8|a[b],d[c]>>>=0,c++,b+=4;return d};c.a.f=function(a){for(var d=[],b=0,c=0;b<a.length;)d[c]=g.B(a[3+b]<<24|a[2+b]<<16|a[1+b]<<8|a[b]),c++,b+=4;return d};c.a.g=function(a){for(var c=[],b=0,f=0;b<a.length;){var e,h=[a[b],a[1+b],a[2+b],a[3+b],a[4+b],a[5+b],a[6+b],a[7+b]];if("0,0,0,0,0,0,0,0"==h.toString())var g=0;else{g="";for(var k=
0,l=h.length;k<l;){for(e=h[k].toString(2);8>e.length;)e="0"+e;g=e+g;k++}e="1"+g.substr(12,52);h=1;for(k=l=0;k<e.length;)l+=h*parseInt(e.charAt(k),10),h/=2,k++;g=("1"==g.charAt(0)?-1:1)*l*Math.pow(2,parseInt(g.substr(1,11),2)-1023);g=2===g?0:g}c[f]=g;f++;b+=8}return c};c.a.C=function(a){for(var c="",b=0;b<a.length;)c+=String.fromCharCode(a[b]),b++;return c}}]);
