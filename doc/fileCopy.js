const nodeCommon = require("./common/nodeCommon");
nodeCommon.deleteFile("doc/out/fonts");
nodeCommon.deleteFile("doc/out/img");
nodeCommon.deleteFile("doc/out/scripts");
nodeCommon.deleteFile("doc/out/styles");
nodeCommon.copyFile("doc/docstrap/template/static/","doc/out/");