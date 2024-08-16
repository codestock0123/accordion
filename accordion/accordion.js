'use strict';

const accordionWrap = document.querySelectorAll('[data-accordion="wrap"]');

//アコーディオンのDOMを追加する処理
window.addEventListener('DOMContentLoaded', function() {
  if (accordionWrap.length === 0) return;

  const currentPage = window.location.pathname;

  accordionWrap.forEach((wrap, index) => {
    const headDiv = document.createElement('div');
    headDiv.classList.add('p-areaMenu__head');
    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('p-areaMenu__body');
    const bodyDivInner = document.createElement('div');
    bodyDivInner.classList.add('p-areaMenu__bodyInner');
    const bodyDivGrid = document.createElement('div');
    bodyDivGrid.classList.add('p-areaMenu__bodyGrid');
    wrap.appendChild(headDiv);
    wrap.appendChild(bodyDiv);
    wrap.querySelector('.p-areaMenu__body').appendChild(bodyDivInner);
    wrap.querySelector('.p-areaMenu__bodyInner').appendChild(bodyDivGrid);
  
    const items = wrap.querySelectorAll('[data-accordion="item"]');
  
    items.forEach((item, i) => {
      if (currentPage === '/newsArchive.html') {
        console.log('archive')
        // アーカイブページ用の設定
        if (i < 3) {
          wrap.querySelector('.p-areaMenu__head').appendChild(item);
        } else {
          wrap.querySelector('.p-areaMenu__bodyGrid').appendChild(item);
        }
      } else {
        // menuページ用の設定
        if (index < 2) {
          if (i < 6) {
            wrap.querySelector('.p-areaMenu__head').appendChild(item);
          } else {
            wrap.querySelector('.p-areaMenu__bodyGrid').appendChild(item);
          }
        } else {
          if (i < 10) {
            wrap.querySelector('.p-areaMenu__head').appendChild(item);
          } else {
            wrap.querySelector('.p-areaMenu__bodyGrid').appendChild(item);
          }
        }
      }
    });

    //itemsの数によりボタンを非表示にする設定
    if (currentPage === '/newsArchive.html') {
      if (items.length < 4) {
        wrap.nextElementSibling.remove();
      }
    } else {
      if (index < 2) {
        if (items.length < 7) {
          wrap.nextElementSibling.remove();
        }
      } else {
        if (items.length < 11) {
          wrap.nextElementSibling.remove();
        }
      }
    }
  });
});

//アコーディオンを開く関数
const accordionOpen = (e, item) => {
  document.getElementById(item).classList.add('is-open');
  e.currentTarget.style.opacity = '0';
  e.currentTarget.style.visibility = 'hidden';
}