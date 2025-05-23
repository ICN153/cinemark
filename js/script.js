const toggleButton = document.querySelector('.menu__toogle__icom');
  const menuItems = document.querySelectorAll('.nav__item.has-link');

  toggleButton.addEventListener('click', () => {
    menuItems.forEach(item => {
      item.classList.toggle('show');
    });
  });


 
// sugestões

const estados = [
  "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
  "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul",
  "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí",
  "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia",
  "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
];

const input = document.getElementById("localizacao");
const ul = document.getElementById("sugestoes");

input.addEventListener("input", function () {
  const termo = this.value.toLowerCase();
  ul.innerHTML = "";

  if (termo.length === 0) {
    ul.style.display = "none";
    return;
  }

  const filtrados = estados.filter(estado => estado.toLowerCase().includes(termo));

  filtrados.forEach(estado => {
    const li = document.createElement("li");
    li.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${estado}`;
    ul.appendChild(li);
  });

  ul.style.display = filtrados.length ? "block" : "none";
});

