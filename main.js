function main() {
    if (window.innerWidth <= 1150) {
        $('pre').css('display', 'block');
        $('pre').css('width', '100%');
        $('#cos16demo').css('width', '100%');;
    } else {
        $('pre').css('display', 'inline-block');
        $('pre').css('width', 'calc(50% - 12px)');
        $('#cos16demo').css('width', 'calc(50% - 12px)');;
    }
}


$(document).ready(() => {
    main();
    $(window).on('resize', main);
});


// Email
let user = 'pj1024.mc';
let domain = 'gmail.com';
$('#email').attr('href', 'mailto:' + user + '@' + domain);


// Ofc i do
console.log("I use arch, btw");


// Language
lang = 'pl';
$('nav').children().eq(0).html(langs[lang]['title.home']);
$('nav').children().eq(1).html(langs[lang]['title.projects']);
$('nav').children().eq(2).html(langs[lang]['title.contact']);

if (document.URL.search('projects')!=-1) {
    $('title').html(langs[lang]['title.projects']);
} else if (document.URL.search('contact')!=-1) {
    $('title').html(langs[lang]['title.contact']);
} else {
    $('title').html(langs[lang]['title.home']);
    $('main').html(langs[lang]['main'])
}

$('.cos16>p').html(langs[lang]['projects.cos16.description']+' <a href="https://github.com/CosmicBit128/Cos16" target="_blank">GitHub</a>')
$('.r3d>p').html(langs[lang]['projects.r3d.description']+' <a href="https://github.com/CosmicBit128/R3D" target="_blank">GitHub</a>')