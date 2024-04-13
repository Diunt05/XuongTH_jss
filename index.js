var arrSP = [
    {
      src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqzozacadk0p75",
      tenSP: "Sữa Rửa Mặt SVR",
      motaSP: "Sữa Rửa Mặt SVR là sản phẩm sữa rửa mặt dành cho làn da dầu mụn đến từ thương hiệu dược mỹ phẩm SVR",
      giaSP: 500000,
    },
    {
      src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lt6cw4h088g439",
      tenSP: "Gel dưỡng ẩm sáng da",
      motaSP: "Gel dưỡng ẩm làm sáng da MSH Niacinamide, kết cấu nhẹ, thẩm thấu nhanh và kiềm dầu tốt.",
      giaSP: 400000,
    },
    {
      src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lry89d7p58rda2",
      tenSP: "Dầu tẩy trang Cocoon",
      motaSP: "Dầu tẩy trang hoa hồng cocoon (rose cleansing oil) giúp làm sạch sâu lớp trang điểm, bụi bẩn,...",
      giaSP: 300000,
    },
    {
      src: "https://down-vn.img.susercontent.com/file/c43e61c398d1e27afa05567b8f3577dd",
      tenSP: "Bộ 10 Mỹ Phẩm Trang Điểm",
      motaSP: "PINKFLASH Bộ 10 Mỹ Phẩm Trang Điểm Kèm Túi Đựng Dùng Làm Quà Tặng Độc Đáo",
      giaSP: 200000,
    },
    {
      src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqiit95vg5djfa",
      tenSP: "Bộ trang điểm đầy đủ 6 món KISS BEAUTY ",
      motaSP: "Kem BB che khuyết điểm quốc dân, được giới trẻ yêu thích (Phong cách được gửi ngẫu nhiên)",
      giaSP: 100000,
    },
    {
      src: "https://down-vn.img.susercontent.com/file/sg-11134201-7r9bn-llluv2rlhr0af9",
      tenSP: "Gegebear Son Bóng Màu Nhung Lì",
      motaSP: "Nó rất giàu các thành phần dinh dưỡng và phục hồi, và hiệu quả trang điểm mềm mại,...",
      giaSP: 90000,
    },
    {
      src: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-odsa621nkdlvb3",
      tenSP: "Serum - Tinh chất mọc tóc",
      motaSP: "Serum Vỏ Bưởi và Bồ Kết Herbario giúp giảm rụng tóc, cung cấp dưỡng chất giúp tóc mọc chắc khỏe,",
      giaSP: 90000,
    },
    {
      src: "https://down-vn.img.susercontent.com/file/sg-11134201-7rblv-loxuu5xmseqi0d",
      tenSP: "Bộ Mỹ Phẩm Trang Điểm Phấn Mắt",
      motaSP: "Bảng Phấn Mắt 9 Màu Phấn Phủ Kẻ Mắt Chống Thấm Nước Mascara Lip Glaze Blush Bộ Cọ Trang",
      giaSP: 100000,
    },
    
  ];


  var dem = 0;
  for (let i = 0; i < arrSP.length; i++) {
    if (dem % 4 == 0) {
      var row = document.createElement("div");
      row.classList.add("row");
      document.getElementById("product-list").appendChild(row);
    }
  
    var cot = document.createElement("div");
    cot.classList.add("col-lg-3");
    row.appendChild(cot);

    var theSP = document.createElement("div");
    theSP.classList.add("card");
    theSP.style.width = "15rem";
    cot.appendChild(theSP);

    var anhSP = document.createElement("img");
    anhSP.src = arrSP[i].src;
    anhSP.classList.add("card-img-top");
    anhSP.alt = "Ảnh lỗi";
    theSP.appendChild(anhSP);

    var thanSP = document.createElement("div");
    thanSP.classList.add("card-body");
    thanSP.style.textAlign = "center";
    theSP.appendChild(thanSP);

    var tenSP = document.createElement("h5");
    tenSP.classList.add("card-title");
    tenSP.style.textAlign = "center";
    tenSP.textContent = arrSP[i].tenSP;
    thanSP.appendChild(tenSP);

    var motaSP = document.createElement("p");
    motaSP.classList.add("card-text");
    motaSP.textContent = arrSP[i].motaSP;
    thanSP.appendChild(motaSP);

    var giaSP = document.createElement("h4");
    giaSP.style.textAlign = "center";
    giaSP.textContent = arrSP[i].giaSP;
    thanSP.appendChild(giaSP);
    
    var nutThem = document.createElement("a");
    nutThem.classList.add("btn");
    nutThem.classList.add("btn-primary");
    nutThem.textContent = "Thêm vào giỏ hàng";
    thanSP.appendChild(nutThem);
    dem++;
    }

    //lọc giá sp:

    function locGia(){
    var canXoa = document.getElementById('product-list').childNodes;
    var xoa = canXoa.length
      for (let i = 0; i < xoa; i++)
      {
        canXoa[0].remove();
      }

      var arrLoc = []
      for(let i = 0; i < arrLoc.length; i++)
      {
        if( Number(arr[i].gia) >= Number(document.getElementById('locGia1'). value) && Number(arr[i].gia) >= Number(document.getElementById('locGia2'). value))
        {
          arrLoc.push(arr[i])
          console.log(arr[i].gia)
        }
      }
        var dem = 0;
        for (let i = 0; i < arrLoc.length; i++) {
          if (dem % 3 == 0) 
          {
            var row = document.createElement("div");
            row.classList.add("row");
            document.getElementById("product-list").appendChild(row);
          }

            var cot = document.createElement("div");
            cot.classList.add("col-lg-4");
            row.appendChild(cot);

            var theSP = document.createElement("div");
            theSP.classList.add("card");
            theSP.style.width = "18rem";
            cot.appendChild(theSP);

            var anhSP = document.createElement("img");
            anhSP.src = arrLoc[i].src;
            anhSP.classList.add("card-img-top");
            anhSP.alt = "Ảnh lỗi";
            theSP.appendChild(anhSP);

            var thanSP = document.createElement("div");
            thanSP.classList.add("card-body");
            thanSP.style.textAlign = "center";
            theSP.appendChild(thanSP);

            var tenSP = document.createElement("h5");
            tenSP.classList.add("card-title");
            tenSP.style.textAlign = "center";
            tenSP.textContent = arrLoc[i].tenSP;
            thanSP.appendChild(tenSP);

            var motaSP = document.createElement("p");
            motaSP.classList.add("card-text");
            motaSP.textContent = arrLoc[i].motaSP;
            thanSP.appendChild(motaSP);

            var giaSP = document.createElement("h4");
            giaSP.style.textAlign = "center";
            giaSP.textContent = arrLoc[i].giaSP;
            thanSP.appendChild(giaSP);
            
            var nutThem = document.createElement("a");
            nutThem.classList.add("btn");
            nutThem.classList.add("btn-primary");
            nutThem.textContent = "Thêm vào giỏ hàng";
            thanSP.appendChild(nutThem);
            dem++;
      }
    }