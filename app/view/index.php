<?php
require 'inc/header.php';
?>
<div class="c">
    <div class="r">
        <div class="g4">

        </div>
        <div class="g4">
            <!-- https://www.keshikan.net/fonts-e.html -->
            <div id="display"></div>
            <table id="buttons">
                <tr>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>+</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>/</td>
                </tr>
                <tr>
                    <td>.</td>
                    <td>0</td>
                    <td>=</td>
                    <td>x</td>
                </tr>
            </table>
            <br>
            <center>
                <label for="mute" id="lblMute">
                    Som ativado:
                </label>
                <label class="switch">
                    <input id="mute" type="checkbox" checked>
                    <span class="slider round"></span>
                </label>
            </center>
        </div>
        <div class="g4">
            <h1>Calculadora Ajax</h1>
            <p>Interface simples de calculadora com processamento no back-end (PHP).</p>
            <h2>Créditos:</h2>
            <ul>
                <li>
                    Efeito sonoro:
                    <a href="https://www.soundjay.com/" target="_blank">
                        Sound Jay
                    </a>
                </li>
                <li>
                    Fonte do display:
                    <a href="https://www.keshikan.net/fonts-e.html" target="_blank">
                        DSEG
                    </a>
                </li>
                <li>
                    Framework:
                    <a href="https://demolidor.github.io/" target="_blank">
                        Demolidor
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
<?php
require 'inc/footer.php';
?>
