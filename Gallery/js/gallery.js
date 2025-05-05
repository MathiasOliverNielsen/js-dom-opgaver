const arrImages = [
  {
    file: 'agaeta01.jpeg',
    title: 'Agaeta By',
  },
  {
    file: 'agaeta02.jpeg',
    title: 'Agaeta Natural Pools',
  },
];
const displayGallery = () => {
  for (let item of arrImages) {
    const div = document.createElement('div');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');
    figcaption.innerText = item.title;
    img.src = `images/gallery/small/${item.file}`;
    img.alt = `${item.title}`;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    div.appendChild(figure);

    document.getElementById(gallery).append(div);
  }
};
displayGallery();
