const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];https://www.svgrepo.com/show/345221/three-dots.svg

const stripArticle(name) {export
  return name.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.slice().sort((a, b) => {
  return stripArticle(a).localeCompare(stripArticle(b));
});

const bandList = document.getElementById('band');
sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  bandList.appendChild(li);
});
