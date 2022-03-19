import { CodeMirror } from 'codemirror';

CodeMirror.defineSimpleMode(
    "mermaid",
    {
        start: [
            {regex: /"(?:[^\\]|\\.)*?(?:"|$)/, token: "string"},

        ]
    }
)
