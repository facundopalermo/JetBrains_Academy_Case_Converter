"use strict"

const btn_upper_case = document.getElementById('upper-case');
const btn_lower_case = document.getElementById('lower-case');
const btn_proper_case = document.getElementById('proper-case');
const btn_sentence_case = document.getElementById('sentence-case');
const btn_save_text_file = document.getElementById('save-text-file');
const text_area = document.getElementById('textarea');

btn_upper_case.addEventListener('click', function(){
    text_area.value = text_area.value.toUpperCase();
});

btn_lower_case.addEventListener('click', function (){
    text_area.value = text_area.value.toLowerCase();
});

btn_proper_case.addEventListener('click', function (){
    text_area.value = toProperCase(text_area.value);
});

btn_sentence_case.addEventListener('click', function (){
    text_area.value = toSentenceCase(text_area.value);
});

btn_save_text_file.addEventListener('click', function(){
    download("text.txt",text_area.value);
});

function toProperCase(string) {
    return string.toLowerCase().replace(/^(.)|\s(.)/g,
        function($1) { return $1.toUpperCase(); });
}

function toSentenceCase(string){
    return string.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,
        function($1){ return $1.toUpperCase(); });
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
