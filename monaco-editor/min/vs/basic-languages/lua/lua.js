/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 1.9.2(48bed9874ad53f221d1b60976b2ab3b964852472)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define(
    "vs/basic-languages/lua/lua", ["require", "exports"],
    (function(e, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.conf = {
            comments: { lineComment: "--", blockComment: ["--[[", "]]"] },
            brackets: [
                ["{", "}"],
                ["[", "]"],
                ["(", ")"],
                ["do", "end"],
                ["then", "end"],
                ["repeat", "until"],
                ["else", "end"]
            ],
            autoClosingPairs: [{ open: "{", close: "}" }, { open: "[", close: "]" }, { open: "(", close: ")" }, { open: '"', close: '"' }, { open: "'", close: "'" }, { open: "do", close: "end" }, { open: "then", close: "end" }, { open: "repeat", close: "until" }],
            surroundingPairs: [{ open: "{", close: "}" }, { open: "[", close: "]" }, { open: "(", close: ")" }, { open: '"', close: '"' }, { open: "'", close: "'" }, { open: "do", close: "end" }, { open: "then", close: "end" }, { open: "repeat", close: "until" }, { open: ")", close: "end" }]
        }, n.language = {
            defaultToken: "",
            tokenPostfix: ".lua",
            keywords: ["and", "break", "do", "else", "elseif", "end", "false", "for", "function", "goto", "if", "in", "local", "nil", "not", "or", "repeat", "return", "then", "true", "until", "while"],
            brackets: [{ token: "delimiter.bracket", open: "{", close: "}" }, { token: "delimiter.array", open: "[", close: "]" }, { token: "delimiter.parenthesis", open: "(", close: ")" }, { token: "delimiter.parenthesis", open: "do", close: "end" }, { token: "delimiter.parenthesis", open: "then", close: "end" }, { token: "delimiter.parenthesis", open: "repeat", close: "until" }, { token: "delimiter.parenthesis", open: ")", close: "end" }],
            operators: ["+", "-", "*", "/", "%", "^", "#", "==", "~=", "<=", ">=", "<", ">", "=", ";", ":", ",", ".", "..", "..."],
            symbols: /[=><!~?:&|+\-*\/\^%]+/,
            escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
            tokenizer: {
                root: [
                    [/[a-zA-Z_]\w*/, { cases: { "@keywords": { token: "keyword.$0" }, "@default": "identifier" } }], { include: "@whitespace" },
                    [/(,)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/, ["delimiter", "", "key", "", "delimiter"]],
                    [/({)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/, ["@brackets", "", "key", "", "delimiter"]],
                    [/[{}()\[\]]/, "@brackets"],
                    [/@symbols/, { cases: { "@operators": "delimiter", "@default": "" } }],
                    [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
                    [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, "number.hex"],
                    [/\d+?/, "number"],
                    [/[;,.]/, "delimiter"],
                    [/"([^"\\]|\\.)*$/, "string.invalid"],
                    [/'([^'\\]|\\.)*$/, "string.invalid"],
                    [/"/, "string", '@string."'],
                    [/'/, "string", "@string.'"]
                ],
                whitespace: [
                    [/[ \t\r\n]+/, ""],
                    [/--\[([=]*)\[/, "comment", "@comment.$1"],
                    [/--.*$/, "comment"]
                ],
                comment: [
                    [/[^\]]+/, "comment"],
                    [/\]([=]*)\]/, { cases: { "$1==$S2": { token: "comment", next: "@pop" }, "@default": "comment" } }],
                    [/./, "comment"]
                ],
                string: [
                    [/[^\\"']+/, "string"],
                    [/@escapes/, "string.escape"],
                    [/\\./, "string.escape.invalid"],
                    [/["']/, { cases: { "$#==$S2": { token: "string", next: "@pop" }, "@default": "string" } }]
                ]
            }
        }
    }));