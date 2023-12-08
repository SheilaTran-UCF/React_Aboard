import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function SecondCompoent() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch(`http://localhost:8888/api/tour/`);
  //     const dataAPI = await res.json();
  //     setData(dataAPI);
  //   };
  //   getData();
  // }, []);

  const data = [
    {
      listCustomer: [],
      _id: "6556b10507b48bd6661d2339",
      name: "Tour Hàn Quốc 5N4Đ: Đảo Nami - Seoul - Everland Mùa Thu",
      time: "2 ngày 1 đêm",
      dateStart: "15/02/2023",
      locationStart: "Hà Tĩnh",
      plant: "Máy bay",
      maxGuest: 20,
      oldGuest: 10,
      childGuest: 10,
      locationEnd: "Cà Mau",
      des: "dsjfhjsahasjhlkd",
      childrenPrice: 100000,
      oldPrice: 1000000,
      imgDetail: [
        "https://cdn2.ivivu.com/2018/05/11/17/ivivu-cuu-trai-cau-750x390.jpg",
      ],
      detailLocation: ["Khánh Hoà, Phú Yên, Đà Nẵng"],
      category: "654e0b0fc00fb16bbcf3ae7a",
      status: "pending",
      createdAt: "2023-11-17T00:17:09.035Z",
      updatedAt: "2023-11-18T05:19:50.238Z",
      __v: 5,
    },
    {
      _id: "6556b11607b48bd6661d233b",
      name: "Tour Nhật Bản 5N5Đ: Mùa Thu Cung Đường Vàng Osaka - Kyoto - Yamanashi - Tokyo",
      time: "2 ngày 1 đêm",
      dateStart: "15/02/2023",
      locationStart: "Hà Tĩnh",
      plant: "Máy bay",
      maxGuest: 20,
      oldGuest: 10,
      childGuest: 10,
      locationEnd: "Cà Mau",
      des: "dsjfhjsahasjhlkd",
      childrenPrice: 100000,
      oldPrice: 1000000,
      imgDetail: [
        "https://cdn2.ivivu.com/2018/05/11/17/ivivu-cuu-trai-cau-750x390.jpg",
      ],
      detailLocation: ["Khánh Hoà, Phú Yên, Đà Nẵng"],
      category: "654e0b0fc00fb16bbcf3ae7a",
      status: "pending",
      createdAt: "2023-11-17T00:17:26.056Z",
      updatedAt: "2023-11-18T07:38:27.552Z",
      __v: 4,
      listCustomer: ["sadasds", "Văn hùng"],
      idGuide: "65581e47833b7272a7d95477",
    },
    {
      listCustomer: [],
      _id: "6556b14f07b48bd6661d2341",
      name: "Tour Châu Âu 9N8Đ: Đức - Hà Lan - Bỉ - Pháp - Thụy Sỹ - Bay Thẳng VNA",
      time: "2 ngày 1 đêm",
      dateStart: "15/02/2023",
      locationStart: "Hà Tĩnh",
      plant: "Máy bay",
      maxGuest: 20,
      oldGuest: 10,
      childGuest: 10,
      locationEnd: "Cà Mau",
      des: "dsjfhjsahasjhlkd",
      childrenPrice: 100000,
      oldPrice: 1000000,
      imgDetail: [
        "https://cdn2.ivivu.com/2018/05/11/17/ivivu-cuu-trai-cau-750x390.jpg",
      ],
      detailLocation: ["Khánh Hoà, Phú Yên, Đà Nẵng"],
      category: "654e0b0fc00fb16bbcf3ae7a",
      status: "pending",
      createdAt: "2023-11-17T00:18:23.239Z",
      updatedAt: "2023-11-17T00:18:23.239Z",
      __v: 0,
    },
    {
      listCustomer: [],
      _id: "6556b18007b48bd6661d2344",
      name: "Tour Châu Âu 9N8Đ: Hà Nội - Đức - Hà Lan - Bỉ - Pháp",
      time: "2 ngày 1 đêm",
      dateStart: "15/02/2023",
      locationStart: "Hà Tĩnh",
      plant: "Máy bay",
      maxGuest: 20,
      oldGuest: 10,
      childGuest: 10,
      locationEnd: "Cà Mau",
      des: "dsjfhjsahasjhlkd",
      childrenPrice: 100000,
      oldPrice: 1000000,
      imgDetail: [
        "https://cdn2.ivivu.com/2018/05/11/17/ivivu-cuu-trai-cau-750x390.jpg",
      ],
      detailLocation: ["Khánh Hoà, Phú Yên, Đà Nẵng"],
      category: "654e0b0fc00fb16bbcf3ae7a",
      status: "pending",
      createdAt: "2023-11-17T00:19:12.911Z",
      updatedAt: "2023-11-17T00:19:12.911Z",
      __v: 0,
    },
    {
      listCustomer: [],
      _id: "6556b19f07b48bd6661d2346",
      name: "Tour Nhật Bản 6N5Đ: Hà Nội - Osaka - Kobe - Kyoto - Phú Sĩ - Tokyo - Mùa Thu Nhật Bản",
      time: "2 ngày 1 đêm",
      dateStart: "15/02/2023",
      locationStart: "Hà Tĩnh",
      plant: "Máy bay",
      maxGuest: 20,
      oldGuest: 10,
      childGuest: 10,
      locationEnd: "Cà Mau",
      des: "dsjfhjsahasjhlkd",
      childrenPrice: 100000,
      oldPrice: 1000000,
      imgDetail: [
        "https://cdn2.ivivu.com/2018/05/11/17/ivivu-cuu-trai-cau-750x390.jpg",
      ],
      detailLocation: ["Khánh Hoà, Phú Yên, Đà Nẵng"],
      category: "654e0b0fc00fb16bbcf3ae7a",
      status: "pending",
      createdAt: "2023-11-17T00:19:43.439Z",
      updatedAt: "2023-11-18T03:12:05.913Z",
      __v: 0,
      idGuide: "65581e47833b7272a7d95477",
    },
    {
      listCustomer: [],
      _id: "6556b1c807b48bd6661d2349",
      name: "Tour Nhật Bản 6N5Đ: Hà Nội - Tokyo - Phú Sĩ - Nagoya - Kyoto - Osaka - Thung Lũng Korankei",
      time: "2 ngày 1 đêm",
      dateStart: "15/02/2023",
      locationStart: "Hà Tĩnh",
      plant: "Máy bay",
      maxGuest: 20,
      oldGuest: 10,
      childGuest: 10,
      locationEnd: "Cà Mau",
      des: "dsjfhjsahasjhlkd",
      childrenPrice: 100000,
      oldPrice: 1000000,
      imgDetail: [
        "https://cdn2.ivivu.com/2018/05/11/17/ivivu-cuu-trai-cau-750x390.jpg",
      ],
      detailLocation: ["Khánh Hoà, Phú Yên, Đà Nẵng"],
      category: "654e0b0fc00fb16bbcf3ae7a",
      status: "pending",
      createdAt: "2023-11-17T00:20:24.143Z",
      updatedAt: "2023-11-18T05:17:50.751Z",
      __v: 3,
    },
    {
      _id: "65586150deb73feb2346b18c",
      name: "Du Lịch Mùa Thu Lá Đỏ Nhật Bản 6 Ngày 5 Đêm",
      time: "3 ngày 2 đêm",
      dateStart: "11/12/2023",
      locationStart: "Hà Tĩnh",
      plant: "Máy bay",
      maxGuest: 20,
      oldGuest: 10,
      childGuest: 10,
      des: "Một trong những mùa lễ hội được mong chờ nhất tại nước Nhật chính là mùa thu với lá vàng lá đỏ cùng vô vàn các hoạt động trải nghiệm hấp dẫn đang chờ quý khách trong hành trình du lịch Nhật Bản 6 ngày 5 đêm. Khám phá cung đường vàng tuyệt đẹp kết nối 3 thành phố Osaka - Kyoto - Tokyo, chiêm ngưỡng biểu tượng núi Phú Sĩ hùng vĩ, Tham quan khu rừng trúc Sagano thanh tịnh,.... Cùng nhiều vật phẩm ý nghĩa mà BestPrice dành tặng riêng quý khách.",
      childrenPrice: 123213,
      oldPrice: 1000000,
      imgDetail: [
        "https://owa.bestprice.vn/images/tours/large/du-lich-mua-thu-la-do-nhat-ban-6-ngay-5-dem-6538d18160036-848x477.jpg",
      ],
      detailLocation: ["Khánh Hoà, Phú Yên, Đà Nẵng"],
      listCustomer: [],
      category: "654e3c8615c08f49d6f442c9",
      status: "pending",
      createdAt: "2023-11-18T07:01:36.748Z",
      updatedAt: "2023-11-18T07:01:36.748Z",
      __v: 0,
    },
    {
      _id: "65586161deb73feb2346b192",
      name: "Du Lịch Mùa Thu Lá Đỏ Nhật Bản 6 Ngày 5 Đêm 2323",
      time: "3 ngày 2 đêm",
      dateStart: "11/12/2023",
      locationStart: "Hà Tĩnh",
      plant: "Máy bay",
      maxGuest: 20,
      oldGuest: 10,
      childGuest: 10,
      des: "Một trong những mùa lễ hội được mong chờ nhất tại nước Nhật chính là mùa thu với lá vàng lá đỏ cùng vô vàn các hoạt động trải nghiệm hấp dẫn đang chờ quý khách trong hành trình du lịch Nhật Bản 6 ngày 5 đêm. Khám phá cung đường vàng tuyệt đẹp kết nối 3 thành phố Osaka - Kyoto - Tokyo, chiêm ngưỡng biểu tượng núi Phú Sĩ hùng vĩ, Tham quan khu rừng trúc Sagano thanh tịnh,.... Cùng nhiều vật phẩm ý nghĩa mà BestPrice dành tặng riêng quý khách.",
      childrenPrice: 123213,
      oldPrice: 1000000,
      imgDetail: [
        "https://owa.bestprice.vn/images/tours/large/du-lich-mua-thu-la-do-nhat-ban-6-ngay-5-dem-6538d18160036-848x477.jpg",
      ],
      detailLocation: ["Khánh Hoà, Phú Yên, Đà Nẵng"],
      listCustomer: [],
      category: "654e3c8615c08f49d6f442c9",
      status: "pending",
      createdAt: "2023-11-18T07:01:53.233Z",
      updatedAt: "2023-11-18T07:01:53.233Z",
      __v: 0,
    },
    {
      _id: "655861f46686354ba1f9869f",
      name: "Tour Hàn Quốc 4N4Đ: Seoul - Trượt Tuyết Elysian - Show Painter",
      time: "3 ngày 2 đêm",
      dateStart: "11/12/2023",
      locationStart: "Hà Tĩnh",
      plant: "Máy bay",
      maxGuest: 20,
      oldGuest: 10,
      childGuest: 10,
      des: "Một trong những mùa lễ hội được mong chờ nhất tại nước Nhật chính là mùa thu với lá vàng lá đỏ cùng vô vàn các hoạt động trải nghiệm hấp dẫn đang chờ quý khách trong hành trình du lịch Nhật Bản 6 ngày 5 đêm. Khám phá cung đường vàng tuyệt đẹp kết nối 3 thành phố Osaka - Kyoto - Tokyo, chiêm ngưỡng biểu tượng núi Phú Sĩ hùng vĩ, Tham quan khu rừng trúc Sagano thanh tịnh,.... Cùng nhiều vật phẩm ý nghĩa mà BestPrice dành tặng riêng quý khách.",
      childrenPrice: 123213,
      oldPrice: 1000000,
      imgDetail: [
        "https://owa.bestprice.vn/images/tours/large/du-lich-mua-thu-la-do-nhat-ban-6-ngay-5-dem-6538d18160036-848x477.jpg",
      ],
      detailLocation: ["Khánh Hoà, Phú Yên, Đà Nẵng"],
      listCustomer: [],
      category: "654e3c8615c08f49d6f442c9",
      status: "pending",
      createdAt: "2023-11-18T07:04:20.862Z",
      updatedAt: "2023-11-18T07:04:20.862Z",
      __v: 0,
    },
    {
      _id: "6558625a5a963cf5bdce4ba0",
      name: "Tour Tết Âm Lịch Thái Lan 4N3Đ: Hà Nội - Chiang Mai - Chiang Rai - Tam Giác Vàng - Chùa Xanh",
      time: "3 ngày 2 đêm",
      dateStart: "11/12/2023",
      locationStart: "Hà Tĩnh",
      plant: "Máy bay",
      maxGuest: 20,
      oldGuest: 10,
      childGuest: 10,
      des: "Một trong những mùa lễ hội được mong chờ nhất tại nước Nhật chính là mùa thu với lá vàng lá đỏ cùng vô vàn các hoạt động trải nghiệm hấp dẫn đang chờ quý khách trong hành trình du lịch Nhật Bản 6 ngày 5 đêm. Khám phá cung đường vàng tuyệt đẹp kết nối 3 thành phố Osaka - Kyoto - Tokyo, chiêm ngưỡng biểu tượng núi Phú Sĩ hùng vĩ, Tham quan khu rừng trúc Sagano thanh tịnh,.... Cùng nhiều vật phẩm ý nghĩa mà BestPrice dành tặng riêng quý khách.",
      childrenPrice: 123213,
      oldPrice: 1000000,
      imgDetail: [
        "https://owa.bestprice.vn/images/tours/large/du-lich-mua-thu-la-do-nhat-ban-6-ngay-5-dem-6538d18160036-848x477.jpg",
      ],
      detailLocation: ["Khánh Hoà, Phú Yên, Đà Nẵng"],
      listCustomer: [],
      category: "654e3c8615c08f49d6f442c9",
      status: "pending",
      createdAt: "2023-11-18T07:06:02.205Z",
      updatedAt: "2023-11-18T07:06:02.205Z",
      __v: 0,
    },
    {
      _id: "65586567afc1c050bec36f08",
      name: "sadsadasdasdasd",
      time: "2 ngày 1 đêm",
      dateStart: "15/02/2023",
      locationStart: "Quảng Bình",
      plant: "Máy bay",
      maxGuest: 12,
      oldGuest: 10,
      childGuest: 2,
      des: "nét đẹp của biển",
      childrenPrice: 100000,
      oldPrice: 1000000,
      imgDetail: [
        "https://cdn2.ivivu.com/2022/11/14/18/cong-vien-singha-ivivu-14-750x390.gif",
      ],
      detailLocation: ["Khánh Hoà, Phú Yên, Đà Nẵng"],
      listCustomer: [],
      category: "654e0b37c00fb16bbcf3ae7c",
      status: "pending",
      createdAt: "2023-11-18T07:19:03.688Z",
      updatedAt: "2023-11-18T07:19:03.688Z",
      __v: 0,
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      {data.map((value) => {
        return (
          <>
          {/* ?????? */}
            {/* <Card className="col-span-3 "> */}
            <Card className="col-span-12 md:col-span-4  ">
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {value.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </>
        );
      })}
    </div>
  );
}
