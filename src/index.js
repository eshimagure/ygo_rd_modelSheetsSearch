import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import imageData from './component/data/imageData'; // 設定画イラストデータ
import data from './component/data/data'; // 全体イラストデータ
import styles from './component/page.module.css'
import IllustSearch from './component/IllustSearch';

// imageDataに「設定画」カテゴリーを追加
const categorizedImageData = imageData.map(item => ({
    ...item,
    category: '設定画'
}));
// dataに「全身イラスト」カテゴリーを追加
const categorizedData = data.map(item => ({
    ...item,
    category: '全体イラスト'
}));
// 2つの配列を結合
const allData = [...categorizedImageData, ...categorizedData];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className={styles.outer} id={"top"}>
        {/* ////////// ヘッダー部分 ////////// */}
        <h1>遊戯王ラッシュデュエルモンスター設定画・全身イラスト検索</h1>
        <p style={{fontSize:"0.8em"}}>
            ※画像クリックで別窓表示されます。<br/>
            ※公式Xのpostからデータを引用しているため、元postが削除された場合こちらのデータも消えます。<br/>
            ※全体イラストは「無断転載禁止」の記載があるため、画像非掲載です。<br/>
            ※posfieにてまとめも作成しています（<a href='https://posfie.com/@eshimagure/p/BqYZAKb' target='blank' className={styles.link}>遊戯王ラッシュデュエルモンスター設定画・全体イラストまとめ</a>）
        </p>

        {/* ////////// メイン部分 ////////// */}
        {/* 統合したデータをコンポーネントに渡す */}
        <IllustSearch data={allData}/>
        
        {/* ////////// フッター部分 ////////// */}
        <footer className={styles.footer}>
            <p>since 2025.02.10<br/>
            ※非公式ファンサイト（管理人：エシマ&nbsp;<a href='https://youmagure.wew.jp/profile.html' target='blank' className={styles.link}>Profile Page</a>）</p>
            <a href='#top' className={styles.topPage}>
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 15.385h1.02v-4.912l2.1 2.1l.688-.688l-3.289-3.289l-3.308 3.289l.689.688l2.1-2.1zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"></path></svg></div>
            </a>
        </footer>
    </div>
);
reportWebVitals();