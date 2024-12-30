//your JS code here. If required.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sorted Articles</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 20px;
    }
    ul {
      list-style-type: square;
      padding: 0;
    }
    li {
      margin: 5px 0;
    }
  </style>
</head>
<body>
  <h1>Sorted Articles</h1>
  <ul id="band"></ul>

  <script>
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
    ];

    function stripArticle(name) {
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
  </script>
</body>
</html>
