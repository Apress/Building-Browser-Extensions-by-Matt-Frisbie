const typedValue = "javascript";
const input = document.querySelector("#searchInput");
const form = document.querySelector("#search-form");

function typeOrSubmit(idx = 0) {
  const char = typedValue[idx];

  if (!char) {
    setTimeout(() => form.submit(), 500);
  } else {
    input.value = input.value + char;

    setTimeout(() => typeOrSubmit(++idx), 100);
  }
}

if (input && form) {
  setTimeout(() => {
    input.focus();

    typeOrSubmit();
  }, 2000);
}
