 $(function(){
 	//dat ten bien "$hieuung" cho  div cha ".noidung"
 	$hieuung=$('.noidung').isotope({
 		//itemSelector: Nhung phan tu con duoc lua chon de thay doi vi tri
	  itemSelector: '.khoianh',
	  // kieu masonry
	  layoutMode: 'masonry'
	});
	// layout Isotope after each image loads
	$hieuung.imagesLoaded().progress( function() {
	  $hieuung.isotope('layout');
	});
	// XU LY NUT trong div.danhmuc

	
	$('.danhmuc a').click(function(){
		$('.danhmuc a').removeClass('duocchon');
		$(this).addClass('duocchon'); //het xu ly chuyen mau
		tendanhmuc = $(this).attr('href');
		// console.log(tendanhmuc);
		// loc ra ten danh muc co huong dan tren https://isotope.metafizzy.co/filtering.html
		$hieuung.isotope({filter:tendanhmuc})
		// Kich vao $('.danhmuc a') se dung yen ,khong load lai trang web khi nhan vao
		return false;
	})
})  
 