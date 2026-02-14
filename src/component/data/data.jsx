//全体イラスト 更新日付順
const data = [
{id:'w000',name:'暗黒騎士ガイア',ruby:'あんこくきしがいあ',date:'2024-10-04',imageUrl:'https://pbs.twimg.com/media/GZAY_YqbAAAL3mW.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/1842157725566042540',type:'戦士',theme:'ガイア',theme2:''},
{id:'w001',name:'セブンスロード・アルテマウィッチ',ruby:'せぶんすろーど・あるてまうぃっち',date:'2024-10-05',imageUrl:'https://pbs.twimg.com/media/GZAwpgJa0AAE9yU.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/1842520114161221683',type:'魔法使い',theme:'セブンスロード',theme2:''},
{id:'w002',name:'超銀河王ロード・オブ・ギャラクティカ',ruby:'ちょうぎんがおうろーど・おぶ・ぎゃらくてぃか',date:'2024-10-06',imageUrl:'https://pbs.twimg.com/media/GZAxobHakAAmRis.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/1842882493994647981',type:'ギャラクシー',theme:'',theme2:''},
{id:'w003',name:'焔魔神ルシュレス',ruby:'えんまじんるしゅれす',date:'2024-10-07',imageUrl:'https://pbs.twimg.com/media/GZCH2UPaMAAjH6w.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/1843244887137005991',type:'悪魔',theme:'焔魔',theme2:''},
{id:'w004',name:'レジェンド・プリースト',ruby:'れじぇんど・ぷりーすと',date:'2024-10-08',imageUrl:'https://pbs.twimg.com/media/GZCIGI7bUAAZYZo.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/1843599721094623682',type:'天使',theme:'レジェンド',theme2:''},
{id:'w005',name:'連撃竜騎士－セブンスナイト',ruby:'れんげきりゅうきし－せぶんすないと',date:'2025-04-11',imageUrl:'https://pbs.twimg.com/media/Gnl6qyRaMAAA_G7.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/1910641477765541959',type:'魔導騎士',theme:'セブンスロード',theme2:'ドラギアス'},
{id:'w006',name:'コスモス姫のお戯れ',ruby:'こすもすひめのおたわむれ',date:'2025-04-12',imageUrl:'https://pbs.twimg.com/media/Gnl7ZT7awAENGkS.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/1910890621675745680',type:'魔法',theme:'コスモス姫',theme2:''},
{id:'w007',name:'アビスカイト・アルティアンジュ',ruby:'あびすかいと・あるてぃあんじゅ',date:'2025-04-12',imageUrl:'https://pbs.twimg.com/media/Gnl7lFzbEAElUah.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/1910905716581519399',type:'海竜',theme:'アビスカイト',theme2:''},
{id:'w008',name:'メガジョインテック・フォートレックス',ruby:'めがじょいんてっく・ふぉーとれっくす',date:'2025-04-12',imageUrl:'https://pbs.twimg.com/media/Gnl7w4dbEAAfmOB.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/1910966120724697537',type:'機械',theme:'ジョインテック',theme2:''},
{id:'w009',name:'エクスキューティー・プラウティ・F',ruby:'えくすきゅーてぃー・ぷらうてぃ・ふろんてぃあ',date:'2025-04-12',imageUrl:'https://pbs.twimg.com/media/Gnl7-R5aMAEO00C.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/1910996320187457671',type:'植物',theme:'エクスキューティー',theme2:''},
{id:'w010',name:'風奏調苛のバンディーヴァ・D',ruby:'ふうそうちょうかのばんでぃーヴぁ・でゅお',date:'2025-04-13',imageUrl:'https://pbs.twimg.com/media/Gnl8UDdaMAAc_M5.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/1911253010988367926',type:'サイキック',theme:'',theme2:''},
{id:'w011',name:'トラディショナル・タックス',ruby:'とらでぃしょなる・たっくす',date:'2025-04-13',imageUrl:'https://pbs.twimg.com/media/GoSuTMnXUAA8Cgv.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/1911260554817118322',type:'罠',theme:'',theme2:''},
{id:'w012',name:'七宝神－毘華',ruby:'しちほうじん－びか',date:'2025-04-13',imageUrl:'https://pbs.twimg.com/media/Gnl8tRHaMAMbs5F.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/1911358706484129843',type:'天使',theme:'七宝神',theme2:''},
{id:'w013',name:'永劫の神導龍',ruby:'えたにてぃ・えーてる・どらごん',date:'2025-09-05',imageUrl:'https://pbs.twimg.com/media/G0DwoPxaYAA0tND.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/1963904941753606167',type:'ドラゴン',theme:'',theme2:''},
{id:'w014',name:'天導聖の見継ぎ人',ruby:'てんどうせいのみつぎびと',date:'2025-09-07',imageUrl:'https://pbs.twimg.com/media/G0DwzxnasAADQ3t.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/1964629719178965196',type:'魔法使い',theme:'',theme2:''},
{id:'w015',name:'闇獄皇アバド',ruby:'あんごくおうあばど',date:'2025-09-08',imageUrl:'https://pbs.twimg.com/media/G0DwKJUacAA8bLu.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/1964992117866205356',type:'悪魔',theme:'',theme2:''},
{id:'w016',name:'叛骨装典スフレルーダ',ruby:'',date:'2026-01-05',imageUrl:'https://pbs.twimg.com/media/G9FgjctbsAAPCGJ.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/2008127585503346903',type:'アンデット',theme:'叛骨',theme2:''},
{id:'w017',name:'叛骨装剣ガイガスベルグ',ruby:'',date:'2026-01-05',imageUrl:'https://pbs.twimg.com/media/G9FgVQHboAAcSHA.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/2008123811850534981',type:'アンデット',theme:'叛骨',theme2:''},
{id:'w018',name:'スパークハーツ・パッションガール',ruby:'',date:'2026-01-06',imageUrl:'https://pbs.twimg.com/media/G9FhQgmboAAovlW.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/2008478649885118600',type:'魔法使い',theme:'スパークハーツ',theme2:''},
{id:'w019',name:'究極完全態・グレート・モス',ruby:'',date:'2026-01-07',imageUrl:'https://pbs.twimg.com/media/G9FheiRasAED6xx.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/2008841164192195059',type:'昆虫',theme:'',theme2:''},
{id:'w020',name:'癒しの聖風ラーナ',ruby:'',date:'2026-01-08',imageUrl:'https://pbs.twimg.com/media/G9Fhso5aUAA-BDt.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/2009203431110828163',type:'サイキック',theme:'',theme2:''},
{id:'w021',name:'エテルナム・ヴォイドヴェルグ・レクイエム',ruby:'',date:'2026-02-13',imageUrl:'https://pbs.twimg.com/media/HAshy1CaMAAG4_8.jpg:large',url:'https://x.com/YuGiOh_RUSHDUEL/status/2022249392573710810',type:'',theme:'ヴォイドヴェルグ',theme2:''}
]
export default data;

// 光属性 light",炎属性 Fire",水属性 Water",地属性 Earth",風属性 Wind",闇属性 Dark",神属性 Divine
//雷族(thunder)",ドラゴン族(dragon)",昆虫族(insect)",岩石族(rock)",炎族(pyro)",植物族(plant)",サイキック族(psychic)",幻神獣族(divine-beast)",アンデット族(zombie)", 天使族(fairy) ",恐竜族(dinosaur) ",爬虫類族(reptile) ",魚族(fish)",海竜族(sea serpent)",水族(aqua)",戦士族(warrior)",魔法使い族(spellcaster)",機械族(machine)",悪魔族(fiend)",ギャラクシー(galaxy)

