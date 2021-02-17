import { addPhotos } from './data.js';

/* <template id="picture">
<a href="#" class="picture">
  <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
  <p class="picture__info">
    <span class="picture__comments"></span>
    <span class="picture__likes"></span>
  </p>
</a>
</template> */


const pictureTemplate = document.querySelector('#picture').content;
const picturesList = document.querySelector('pictures');


const picturesListData = addPhotos();

const picturesListFragment = document.createDocumentFragment();

picturesListData.forEach(({ url, likes, comments }) => {

  const photoPreview = pictureTemplate.cloneNode(true);

  photoPreview.querySelector('.picture__img').src = url;
  photoPreview.querySelector('.picture__likes').textContent = likes;
  photoPreview.querySelector('.picture__comments').textContent = comments;
  picturesListFragment.appendChild(photoPreview);

});

picturesList.appendChild(picturesListFragment);
