header = `
<h1>
    <a href="/" style="text-decoration: none; color: inherit;">
        <img src="/figure/icon.png" alt="Article SAVE Logo" style="height: 50px; vertical-align: middle; margin-right: 10px;">Article SAVE
    </a>
</h1>
`;

footer = `
<p>
    © 2026 <a href="https://github.com/elecbug">elecbug</a> in <a href="https://github.com/kmu-save">KMU SAVE</a>. All rights reserved.
</p>
`;

nav = `
<p style="margin-top: 0px;margin-bottom: 10px; text-align: center; font-weight: bold; font-size: 1.2em;">
    MENU
</p>
<div class="nav-separator"></div>
<div>
<table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
    <tr>
        <td><button class="menu-button" id="home-button">Home</button></td>
    </tr>
    <tr>
        <td><button class="menu-button" id="submission-procedure-button">Submission Procedure</button></td>
    </tr>
    <tr>
        <td><button class="menu-button" id="article-college-button"><b>Article</b> - College</button></td>
    </tr>
    <tr>
        <td><button class="menu-button" id="article-computer-button"><b>Article</b> - Computer</button></td>
    </tr>
</table>
</div>
`;

document.getElementById('header').innerHTML = header;
document.getElementById('footer').innerHTML = footer;
document.getElementById('nav').innerHTML = nav;

// Navigation button event listeners
document.getElementById('home-button').addEventListener('click', function() {
    window.location.href = '/';
});

document.getElementById('submission-procedure-button').addEventListener('click', function() {
    window.location.href = '/submission-procedure';
});

document.getElementById('article-college-button').addEventListener('click', function() {
    window.location.href = '/article/college/overview';
});

document.getElementById('article-computer-button').addEventListener('click', function() {
    window.location.href = '/article/computer/overview';
});