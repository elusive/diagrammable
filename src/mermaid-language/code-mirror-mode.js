import { keywords, types } from './specification';
import { CodeMirror } from 'codemirror';

const words = (str) => {
    var obj = {}, words = str.split(' ');
    for (var i = 0; i < words.length; ++i) {
        obj[ words[i] ] = true;
    }
    return obj;
};

CodeMirror.defineSimpleMode(
    "mermaid",
    {
        start: [
            {regex: /"(?:[^\\]|\\.)*?(?:"|$)/, token: "string"},

        ]
    }
)
