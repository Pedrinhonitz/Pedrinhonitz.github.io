document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmationMessage').style.display = 'block';
    document.getElementById('contactForm').reset();
});

function changeLanguage() {
    var currentLang = document.documentElement.lang;
    var newLang = (currentLang === 'pt-br') ? 'en' : 'pt-br';

    document.documentElement.lang = newLang;

    updateContent(newLang);
}

function updateContent(lang) {
    var elements = document.querySelectorAll('[data-lang]');

    elements.forEach(function(element) {
        var key = element.getAttribute('data-lang');
        if (translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
        }
    });
}

var translations = {
    'switchLanguage': {
        'pt-br': 'Trocar Idioma',
        'en': 'Switch Language'
    }
};

updateContent(document.documentElement.lang);

function toggleIcon() {
    var langToggle = document.getElementById('lang-toggle');
    var currentSrc = langToggle.querySelector('img').getAttribute('src');
    var newSrc = currentSrc === 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJ0lEQVR4nO1ZWWtTQRS+uD346PLk8idEsajU3dYZnUkxWhUEV3zSF7E2DxZFWx/0RS2p2BYUfKlkRrppUVxoRVxQapUqFmtrXdumgSo2RTlyrk1N4k3vzNw0KuTAgcBN7pzvO+ucWFZWspIVz+Kv8U+kgucQyQJUshAR/DkVPEwlG7ZV8DAR/Jn9TLLAupBvYUlJyQTrbwuTbA4V/AQVvIdKDnrK3hLJyvJCvtkZNzyvxj+TSn6OSBbVNzxRiWRRIlmQ1tIZGTGeSraFStbv1XAHIH0k5CscN8PnndszmQh+Pt2G02QgglfgWWk1ntbSqUSyxvE2nsZU8AY8M33MZ9J4OQriur/GP8UzgEyEDU2dF0Fvxod8W00P31q/Hprbl8ODl8tgW8N6D0DYJiPjueDTieC9JoeeaM6HyPslAL2LbB38sBjO3sszBdBvVGKxzpuyHjM8WU29QQQv1zIeu6Nuk0pmPZWaeIOgLbV0rjr7OB6kifV0eYNIVqZkPA5ZOKeYsh5+vRoqzwdg575qWFN4xdZd+6qgsjJgPzP2huA9ODSqsJ9jyvqtazshf7OEXF+Do+Kz2027jL1BBF/gCuDXSKwf62j80oL6lMbHFL/jBGJQxRuCH1LxgNCN9YE3BRA43gJFxx5CoPQR7D7QAgU7bsDSAmcQa7cIGOhcpZ8bgl9294B98dCrME8e3wQnGR7+Ac9ehOGS6IC9B+8mAKqqLNavVII/dfdA3KisWmHu3u+Ax2190PLgIzxq7YX2VxEIDwz9Aai75wucCrbBqo1X7cQGzUqFjVUlB6I6dR01r9A5cfn2G1Bc+hBqm7ogHImOAnn38SscOXlP6d0J3hB8SBnA0Ttrof+dGoCxKk9MV2xohLLTrdDZPWiD+Db0XendSCKSqQwgPoQK6xhcbVvhegjWfDcAMV2+oREqLrZDR+cn1/di+GIY64WQQxK7eQOblCqAmF68cFiNde0kTlFGx/IGdliVMPpdRkMQ6VypxLp+GXVpZKm8gc1JtZHdadqhzrpMmIeKXAHg0smtpafyBoLAJjUW807GN4/FeryGfPOVhjkieLfKgOXkDeyw2KR276+2yysqfq6uKv4jbCIKrMclcJfyNg9HV5WX6lQqY9ZlTFmpNZ4XGtW+ocM6/Z28Q6SOzFIGMOKFoNYhCt7QZ53H2D9j6crqGv8000t9sjeMWJejlafPeG+Ku0qTQ+MHQXPW+Ujy+vxGxo+CELzC9HCvSiQ7a3kVvIcSwWXmAbD63Fu5k6x0CC5a7YVr5pivS9tyN2nJG8xE2OSmi3knwV2laXVyCZnPnhNWc29ajg3Gs+EC38HOYNm2Mi3YHXHsUJ2dEkLF/g0r1e6w4yEjA+AC3NvgzI4XD7zZjfyBF7U/C96Kz3Akxqnyn/ibNStZsf5/+Qnxba1rX03dBwAAAABJRU5ErkJggg=='
        ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiklEQVR4nO1ZS2jUQAAN1ipKFcUPevAiCIIehG1GLJrQTG0tiCbVKlY9eBFE0YMHpfg/qSBUUESlXsRKBVspiW39i1YvrVap+MPLlq22iclkMyuo6EiiK3Xbbn6bZJF98CADOby3897M7ISiCiigAN+orb1WxPBtyxhBqmcF6ToriK9YQVJZXvzGClKKFcQ4I0jPWUFqZgRxdzkvxqh8wIq1HfNYXjpeXdeZaLjQR1hBslhd10mGj3fVP7GYHps0ODphQPpIko3NDF34uSuvFtzvGnhx4ETP98qNHeT1e0RMHDrZQzLHW3Y+ILrxzaL5nDaAIbBoQPoL5sCpQZYtCUU8UyPVNTa9Td19PED4bXcsMecvvyHZxuLtuMXhM5A2gNNGODqRrCitCUx4bHt3McOLF4eL8ENF00elrKHThJCi3Ipf3TZ59dbOW9lybjfO7MFYBhSL6AYhZEJuxG/vLq7a1N6ZLedeepDdgE4UFbUSQop9G0jHxi7nbnuQ2QE8Gjlw2pf4FcLNzbnKfCYdGYCAJDmw3pN4yLfMYARJ9pJ3J/uAUwMYAjm5asks1wYePh146SXvTvcB2w5o//ThhCvxO/Y/mt9xr/+H17w72QdcGdD0pKZp0xwbMI8HQWXfowGiqKjemfrDh8cxvNjvN/d2PXDRAfJ7pwYfHOk3T5V+c++kB24NYHNFqowttDfw+0jsO/c52QfgiPPSXlsDLC+1BJ1/Tx3QLF51ECGxL+j8ezUga6jL1kDlhnY16Px7N6D3O4nQ16Dz770D4KsjA2F0IDADjCAp+WoAc0CxNaCo+jOPK0TwVPUeWwOyii5FLlQbo8QqanQyA3vyeAZ22xowVpYu9pTPEGiU04soJ8AQ9EUtFo8s8GtH4i0DHDgUuWCYSfqgYwMfDWO2+Sci8sxrf4mHhvBcyg1kTT+WN6uPph+l3GJwcLBEUdGnqMUrKhpSFGUq5QVJuHRd1Nk3ysEmyg8wB85GWNwzlF+Q2toiA4KW0H95jhYJy46ncoF3hEyUVb05xNy3xuNkEpVLmFfe5tW3rKKfga02Kvopa6gh59frw/EZoSpFQ4kgVhtZ1ddQYUAuK5uCOXofhnTSf9ZByoDgOFq+fDoVNnBVbK65xWOOfudaPAfeYkgfwCw9h8oHpCroUoNbugdDusmAdK8B6X7zA94fms+9mANXzHfMd6PWW0AB/wt+AUd01b5eH9N0AAAAAElFTkSuQmCC'
        : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJ0lEQVR4nO1ZWWtTQRS+uD346PLk8idEsajU3dYZnUkxWhUEV3zSF7E2DxZFWx/0RS2p2BYUfKlkRrppUVxoRVxQapUqFmtrXdumgSo2RTlyrk1N4k3vzNw0KuTAgcBN7pzvO+ucWFZWspIVz+Kv8U+kgucQyQJUshAR/DkVPEwlG7ZV8DAR/Jn9TLLAupBvYUlJyQTrbwuTbA4V/AQVvIdKDnrK3hLJyvJCvtkZNzyvxj+TSn6OSBbVNzxRiWRRIlmQ1tIZGTGeSraFStbv1XAHIH0k5CscN8PnndszmQh+Pt2G02QgglfgWWk1ntbSqUSyxvE2nsZU8AY8M33MZ9J4OQriur/GP8UzgEyEDU2dF0Fvxod8W00P31q/Hprbl8ODl8tgW8N6D0DYJiPjueDTieC9JoeeaM6HyPslAL2LbB38sBjO3sszBdBvVGKxzpuyHjM8WU29QQQv1zIeu6Nuk0pmPZWaeIOgLbV0rjr7OB6kifV0eYNIVqZkPA5ZOKeYsh5+vRoqzwdg575qWFN4xdZd+6qgsjJgPzP2huA9ODSqsJ9jyvqtazshf7OEXF+Do+Kz2027jL1BBF/gCuDXSKwf62j80oL6lMbHFL/jBGJQxRuCH1LxgNCN9YE3BRA43gJFxx5CoPQR7D7QAgU7bsDSAmcQa7cIGOhcpZ8bgl9294B98dCrME8e3wQnGR7+Ac9ehOGS6IC9B+8mAKqqLNavVII/dfdA3KisWmHu3u+Ax2190PLgIzxq7YX2VxEIDwz9Aai75wucCrbBqo1X7cQGzUqFjVUlB6I6dR01r9A5cfn2G1Bc+hBqm7ogHImOAnn38SscOXlP6d0J3hB8SBnA0Ttrof+dGoCxKk9MV2xohLLTrdDZPWiD+Db0XendSCKSqQwgPoQK6xhcbVvhegjWfDcAMV2+oREqLrZDR+cn1/di+GIY64WQQxK7eQOblCqAmF68cFiNde0kTlFGx/IGdliVMPpdRkMQ6VypxLp+GXVpZKm8gc1JtZHdadqhzrpMmIeKXAHg0smtpafyBoLAJjUW807GN4/FeryGfPOVhjkieLfKgOXkDeyw2KR276+2yysqfq6uKv4jbCIKrMclcJfyNg9HV5WX6lQqY9ZlTFmpNZ4XGtW+ocM6/Z28Q6SOzFIGMOKFoNYhCt7QZ53H2D9j6crqGv8000t9sjeMWJejlafPeG+Ku0qTQ+MHQXPW+Ujy+vxGxo+CELzC9HCvSiQ7a3kVvIcSwWXmAbD63Fu5k6x0CC5a7YVr5pivS9tyN2nJG8xE2OSmi3knwV2laXVyCZnPnhNWc29ajg3Gs+EC38HOYNm2Mi3YHXHsUJ2dEkLF/g0r1e6w4yEjA+AC3NvgzI4XD7zZjfyBF7U/C96Kz3Akxqnyn/ibNStZsf5/+Qnxba1rX03dBwAAAABJRU5ErkJggg==';

    langToggle.querySelector('img').setAttribute('src', newSrc);
}

document.getElementById('lang-toggle').addEventListener('click', function() {
    toggleIcon(); 
});

document.getElementById("downloadButton").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "pdf/curriculo.pdf"; 
    link.download = "curriculo.pdf";
    link.click();
});