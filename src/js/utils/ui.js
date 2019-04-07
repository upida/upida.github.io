export function $(selector, parent = document) {
  return parent.querySelector(selector);
}

export function $$(selector, parent = document) {
  return parent.querySelectorAll(selector);
}

/**
 * fungsi: meng-handle klik pada children elemen suatu parent elemen
 * 		   dan melakukan aksi yaitu membuka konten tab berdasarkan 
 * 		   children (<li>) elemen yang diklik
 */
export function mapClickToAction(containerSelector) {

	// ambil referensi parent element
	// parent element yang dimaksud pada kasus ini adalah ".main-nav__list" (cek HTML)
  const containerEl = $(containerSelector);
    // ambil referensi parent element target
	// dalam kasus ini, parent element target adalah atribut target pada 
	// elemen ".main-nav__list" (cek HTML)
  const targetContainerEl = $(containerEl.dataset.target);

	// ambil elemen children dari parent element
	// (elemen-elemen <li> pada elemen ".main-nav__list")
  const children = containerEl.children;

    // loop tiap-tiap `child` pada `children`
  Array.prototype.forEach.call(children, e => {
	  // ambil value atribut `data-target` pada tiap `child` (<li data-target="blablabla">)
	  // kemudian, gunakan value tersebut untuk men-select elemen
	  // misal, pada elemen <li> yang pertama, value dari `data-target` adalah "#main-content__profile"
	  // maka select elemen yang mempunyai ID tersebut (cek elemen "main-content__content")
    const el = $(e.dataset.target);

	  // bagian kode ini menyembunyikan konten tab yang ada pada kanan sidebar
	  // konten tab yang disembunyikan merupakan konten tab yang tidak sesuai
	  // dengan apa yang diklik di sidbar

	  // jika elemen tersebut tidak mempunyai class "click-to-action-active"
    if (!el.classList.contains('click-to-action-active')) {
		// maka sembunyikan elemen tersebut
		// membuat elemen yang ada pada kanan sidebar tidak tampak di layar
      el.hidden = true;
    }
  });

	// assign `click` event handler pada parent elemen
  containerEl.addEventListener('click', e => {
	  // jika elemen yang diklik bukan elemen bertag <li>, maka jangan lakukan apa-apa
    if (e.target.tagName !== 'LI') return;

	  // jika elemen yang diklik bertag <li>, maka lakukan:

	  // ambil value `data-target` dari tag <li>
    const dataset = e.target.dataset.target;

	  // abaikan if statement ini
    if (dataset) {

		// select elemen untuk value `data-target`
      const target = $(dataset);

	    // cari children elemen dari parent element target (lihat line 19 kode ini) 
		// yang saat ini memiliki class ".click-to-action-active"
      const active = $('.click-to-action-active', targetContainerEl);

	    // jika elemen tersebut ditemukan sama dengan elemen target
		// berarti tab yang diklik pada sidebar sama dengan tab yang sedang aktif
      if (active === target) {
		  // jangan lakukan apa-apa
        return;
      }

		// jika beda, maka lakukan:

		// hilangkan konten tab aktif dari layar
      active.classList.remove('click-to-action-active');
      active.hidden = true;

	    // aktifkan konten tab yang diminta
      target.classList.add('click-to-action-active');
      target.hidden = false;

		// ambil elemen yang diklik (elemen <li> pada sidebar yang diklik)
      const elClicked = e.target;
	    // cari elemen sidebar yang aktif
      const activeElClicked = $('.active', containerEl);
	    // hilangkan class "active" pada elemen <li> pada sidebar
		// yang berarti menghilangkan background biru
      activeElClicked.classList.remove('active');

	  	// buat elemen yang diklik mempunyai class "active"
		// sehingga elemen yang diklik memiliki background biru
      elClicked.classList.add('active');
    }
  });
}
