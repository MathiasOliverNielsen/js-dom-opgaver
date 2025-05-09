const arrImages = [
  {
    file: 'agaeta01.jpeg',
    title: 'Agaeta By',
  },
  {
    file: 'agaeta02.jpeg',
    title: 'Agaeta Natural Pools',
  },
  {
    file: 'confital01.jpeg',
    title: 'Confitalal Beach',
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

    figure.append(img);
    figure.append(figcaption);
    div.append(figure);

    document.getElementById('gallery').append(div);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  displayGallery();

  const imgElements = Array.from(document.querySelectorAll('img'));

  const modalDiv = document.createElement('div');
  modalDiv.classList.add('lightbox');
  document.body.append(modalDiv);

  const openModal = (index) => {
    const imgClone = imgElements[index].cloneNode(true);
    modalDiv.innerHTML = '';
    modalDiv.append(imgClone);
    modalDiv.classList.add('active');
  };
  const closeModal = () => {
    modalDiv.classList.remove('active');
  };
  imgElements.forEach((img, index) => {
    img.addEventListener('click', () => openModal(index));
  });
  modalDiv.addEventListener('click', closeModal);
});

displayGallery();
