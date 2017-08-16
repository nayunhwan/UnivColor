// For University Theme Color
function getColorByUnivName(univ) {
  // Foregin Universities
  if (univ == "AU" || univ.includes("Adelphi")) return "#FDB813";
  if (univ == "Harvard" || univ.includes("하버드")) return "#C90016";
  if (univ == "UCB" || univ.toLowerCase().replace(/\s+/g, '').includes("berkeley") || univ.toLowerCase().replace(/\s+/g, '').includes("버클리대")) return "#FDB515";
  if (univ == "Stanford" || univ.includes("스탠포드") || univ.includes("스탠퍼드")) return "#A8003B";
  if (univ == "UR" || (univ.toLowerCase().replace(/\s+/g, '').includes("rochester") && univ.toLowerCase().replace(/\s+/g, '').includes("university")) || univ.toLowerCase().replace(/\s+/g, '').includes("로체스터대")) return "#FFD100";
  if (univ == "UTRGV" || univ.includes("UT Rio Grande Valley") || univ.includes("University of Texas Rio Grande Valley")) return "#F05023";
  if (univ.includes("Washington") || univ.toLowerCase().replace(/\s+/g, '').includes("워싱턴대")) return "#4B2E83";
  if (univ.includes("Waterloo") || univ.toLowerCase().replace(/\s+/g, '').includes("워털루대")) return "#FFD54F";
  if (univ == "WM" || univ.toLowerCase().replace(/\s+/g, '').includes("william&mary")) return "#006633";
  if (univ == "CMU" || univ.toLowerCase().replace(/\s+/g, '').includes("carnegiemellon") || univ.toLowerCase().replace(/\s+/g, '').includes("카네기멜론")) return "#CC002B";

  // Korean Universities
  if (univ == "KYU" || univ.includes("가야대")) return "#114fa1";
  if (univ == "GCHU" || univ.includes("가천대")) return "#00458c";
  if (univ == "CUK" || univ.includes("가톨릭대")) return "#003594";
  if (univ == "CKU" || univ.includes("가톨릭관동대")) return "#006276";
  if (univ == "MTU" || univ.includes("감리교신학대")) return "#800080";
  if (univ == "KANGNAM" || univ.includes("강남대")) return "#0091FF";
  if (univ == "GWNU" || univ.includes("강릉원주대")) return "#a90056";
  if (univ == "KNU" || univ.includes("강원대")) return "#1851a5";
  if (univ == "KU" || univ.includes("건국대") || univ == "건대") return "#036b3f";
  if (univ == "KONYANG" || univ.includes("건양대")) return "#006940";
  if (univ == "KGU" || univ.includes("경기대")) return "#004889";
  if (univ == "GNTECH" || univ.includes("경남과학기술대")) return "#2956a6";
  if (univ == "KYUNGNAM" || univ.includes("경남대")) return "#003A56";
  if (univ == "KDU" || univ.includes("경동대")) return "#0C4DA2";
  if (univ == "KPNU" || univ.includes("경북대")) return "#da2127";
  if (univ == "GNU" || univ.includes("경상대")) return "#242b90";
  if (univ == "KS" || univ.includes("경성대")) return "#0057b8";
  if (univ == "IKW" || univ.includes("경운대")) return "#23438e";
  if (univ == "KIU" || univ.includes("경일대")) return "#98012e";
  if (univ == "GJU" || univ.includes("경주대")) return "#df0013";
  if (univ == "KHU" || univ.includes("경희대")) return "#9d2235";
  if (univ == "KEIMYUNG" || univ.includes("계명대")) return "#024da0";
  if (univ == "KMCU" || univ.includes("계명문화대")) return "#eb2d2f";
  if (univ == "KRU" || univ.includes("고려대") || univ == "고대") return "#862633";
  if (univ == "KOSIN" || univ.includes("고신대")) return "#003f91";
  if (univ == "KJNU" || univ.includes("공주대")) return "#01499a";
  if (univ == "KSU" || univ.includes("광신대")) return "#1d2881";
  if (univ == "KWU" || univ.includes("광운대")) return "#8a1601";
  if (univ == "GWJCU" || univ.includes("광주가톨릭대")) return "#ed1c24";
  if (univ == "GWJU" || univ.includes("광주대")) return "#144112";
  if (univ == "GWJWU" || univ.includes("광주여자대")) return "#008b9c";
  if (univ == "KMU" || univ.includes("국민대")) return "#2864ae";
  if (univ == "KSNU" || univ.includes("군산대")) return "#437fc1";
  if (univ == "FEU" || univ.includes("극동대")) return "#221f1f";
  if (univ == "GGU" || univ.includes("금강대")) return "#005aab";
  if (univ == "KIT" || univ.includes("금오공과대") || univ == "금오공대") return "#1e90ff";
  if (univ == "GCU" || univ.includes("김천대")) return "#57444e";
  if (univ == "KKOT" || univ.includes("꽃동네대")) return "#cf171f";

  if (univ == "NAZARENE" || univ.includes("나사렛대")) return "#b32f20";
  if (univ == "NBU" || univ.includes("남부대")) return "#13007d";
  if (univ == "NSU" || univ.includes("남서울대")) return "#1f519b";

  if (univ == "DKU" || univ.includes("단국대")) return "#245ca1";
  if (univ == "CU" || univ.includes("대구가톨릭대")) return "#0742a4";
  if (univ == "DAEGU" || univ.includes("대구대")) return "#00806e";
  if (univ == "DGAU" || univ.includes("대구예술대")) return "#df569e";
  if (univ == "DHU" || univ.includes("대구한의대")) return "#50ad95";
  if (univ == "DSU" || univ.includes("대신대")) return "#3680bd";
  if (univ == "DCU" || univ.includes("대전가톨릭대")) return "#7a42a0";
  if (univ == "DJU" || univ.includes("대전대")) return "#347c4d";
  if (univ == "DTU" || univ.includes("대전신학대")) return "#2d70b5";
  if (univ == "DJNU" || univ.includes("대진대")) return "#184490";
  if (univ == "DSWU" || univ.includes("덕성여자대") || univ.includes("덕성여대")) return "#ac145a";
  if (univ == "DGU" || univ.includes("동국대")) return "#cb6015";
  if (univ == "DDWU" || univ.includes("동덕여자대") || univ.includes("동덕여대")) return "#8b2842";
  if (univ == "TU" || univ.includes("동명대")) return "#53aa48";
  if (univ == "DSU" || univ.includes("동서대")) return "#d43645";
  if (univ == "DSNU" || univ.includes("동신대")) return "#255ea9";
  if (univ == "DAU" || univ.includes("동아대")) return "#29166f";
  if (univ == "DYU" || univ.includes("동양대")) return "#143b82";
  if (univ == "DEU" || univ.includes("동의대")) return "#0b3d91";

  if (univ == "LTU" || univ.includes("루터대")) return "#2457a6";

  if (univ == "MJU" || univ.includes("명지대")) return "#10336c";
  if (univ == "MWU" || univ.includes("목원대")) return "#8b0000";
  if (univ == "MCU" || univ.includes("목포가톨릭대")) return "#353a97";
  if (univ == "MPNU" || univ.includes("목포대")) return "#20b2aa";
  if (univ == "MPNMU" || univ.includes("목포해양대")) return "#1f5a92";

  if (univ == "PCU" || univ.includes("배재대")) return "#071d8e";
  if (univ == "BU" || univ.includes("백석대")) return "#12319b";
  if (univ == "PKNU" || univ.includes("부경대")) return "#13007c";
  if (univ == "CUP" || univ.includes("부산가톨릭대")) return "#9a2183";
  if (univ == "PNU" || univ.includes("부산대") || univ == "부대") return "#005baa";
  if (univ == "BUFS" || univ.includes("부산외국어대") || univ == "부산외대") return "#ffd000";
  if (univ == "BPU" || univ.includes("부산장신대")) return "#2d6fa8";

  if (univ == "SYU" || univ.includes("삼육대")) return "#5389c6";
  if (univ == "SMU" || univ.includes("상명대")) return "#1f519b";
  if (univ == "SGU" || univ.includes("서강대")) return "#B0232A";
  if (univ == "SKU" || univ.includes("서경대")) return "#71bf44";
  if (univ == "SNU" || univ.includes("서울대")) return "#20408e";
  if (univ == "SeoulTech" || univ.includes("서울과학기술대") || univ == "서울과기대") return "#00205b";
  if (univ == "UOS" || univ.includes("서울시립대")) return "#151f6d";
  if (univ == "SMU" || univ.includes("선문대")) return "#006a74";
  if (univ == "SKHU" || univ.includes("성공회대")) return "#006BB1";
  if (univ == "SKKU" || univ.includes("성균관대")) return "#8DC63F";
  if (univ == "SEMYUNG" || univ.includes("세명대")) return "#005DAA";
  if (univ == "SJU" || univ.includes("세종대")) return "#ba0c2f";
    if (univ == "SCH" || univ.includes("순천향대")) return "#A6CE39";
  if (univ == "SSU" || univ.includes("숭실대")) return "#4badcd";
  if (univ == "SWC" || univ.includes("숭의여대")) return "#062d8f";

  if (univ == "AJU" || univ.includes("아주대")) return "#0072ce";
  if (univ == "YSU" || univ.includes("연세대")) return "#16407d";
  if (univ == "YU" || univ.includes("영남대")) return "#003e7d";
  if (univ == "INU" || univ.includes("인천대")) return "#0030f2";
  if (univ == "INHA" || univ.includes("인하대")) return "#0267b9";

  if (univ == "JNU" || univ.includes("전남대")) return "#00913F";
  if (univ == "JBNU" || univ.includes("전북대")) return "#56296f";
  if (univ == "JJU" || univ.includes("전주대")) return "#006ba6";
  if (univ == "CAU" || univ.includes("중앙대")) return "#004c97";

  if (univ == "CNU" || univ.includes("충남대")) return "#003f98";
  if (univ == "CBNU" ||univ.includes("충북대")) return "#9B1F4E";

  if (univ == "KAIST" || univ.includes("카이스트")) return "#004191";

  if (univ == "PTU" || univ.includes("평택대")) return "#003e15";

  if (univ == "HUFS" || univ.includes("한국외국어대")) return "#00677F";
  if (univ == "KAU" || univ.includes("한국항공대")) return "#302475";
  if (univ == "HGU" || univ.includes("한동대")) return "#13eac9";
  if (univ == "HBNU" || univ.includes("한밭대")) return "#6774D9";
  if (univ == "HSU" || univ.includes("한성대")) return "#62b5e5";
  if (univ == "HYU" || univ.includes("한양대")) return "#003c71";
  if (univ == "HOSEO" || univ.includes("호서대")) return "#08449a";
  if (univ == "HIU" || univ.includes("홍익대")) return "#002c62";

  return "Not Found";
}
