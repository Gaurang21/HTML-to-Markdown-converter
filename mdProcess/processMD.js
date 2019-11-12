import commonmark from "commonmark";
import hljs from 'highlight.js';
import 'highlight.js/styles/idea.css';

window.onload=function(){
document.getElementById("button").addEventListener("click",convert);
}
function convert()
{
var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();

var html = document.getElementById("ta_1").value;
var parsed = reader.parse(html);
var result = writer.render(parsed);

var render = document.getElementById("html_div");
render.innerHTML = result;
hljs.highlightBlock(document.querySelector('div'));
}
