const ATTRIBUTION = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';// 著作権表記
const ACCESS_TOKEN = "xxxxxx";//自分のアクセストークンを入れる


window.onload = (event)=>{
  console.log("onload!!");

  // 緯度経度データ
  const Fukuoka = [33.590130104230596, 130.42041778564456];
  // マップのズーム度合い
  const ZoomLevel = 16;
  // マップを作る
  let map = L.map("map").setView(Fukuoka, ZoomLevel);

  // マップの設定
  L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution: ATTRIBUTION,
    accessToken: ACCESS_TOKEN,
    id: "mapbox/streets-v11",// マップの種類
  }).addTo(map);

  // マーカーを出す
  L.marker(Fukuoka).addTo(map)
  .bindPopup("welcome to fukuoka!!").openPopup();

  // 円を描く
  let circle = L.circle(Fukuoka, {
    color: "red", fillColor: "#f03",
    fillOpacity: 0.2, radius: 100
  }).addTo(map);

  //四角で囲む
  let polygon = L.polygon([
    [33.59263474565555, 130.41760683059695],
    [33.587147229432986, 130.41769266128543],
    [33.58721873026, 130.42412996292117],
    [33.592116395859996, 130.4240441322327]
  ]).addTo(map);

  // クリックイベント
  let popup = L.popup();
  map.on("click", (e)=>{
    console.log(e.latlng);
    let str = e.latlng.lat + ", " + e.latlng.lng;
    popup.setLatLng(e.latlng).setContent(str).openOn(map);
  });
}