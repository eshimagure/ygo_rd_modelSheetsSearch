// 設定画ごとの表示コンポーネント
import styles from './page.module.css'
export default function imageDataListItem({ data }) {
return (
    <ul>
    {data.map((val) => (
        <li key={val.id} >
            <span className={val.category === '設定画' ? styles.categoryBadgeConcept : styles.categoryBadgeFull}>
                {val.category}
            </span>
            <div className={styles.modelSheetsWrapper}>
                <div className={styles.modelSheetsText}>
                    <div>
                        カード名：<span style={{fontWeight:"bold"}}>{val.name}</span>
                        ／
                        { val.type==="魔法"||val.type=== "罠" ? val.type : `${val.type}族` }
                    </div>
                    <div className={styles.contentsWrapper}>
                        <div>
                            テーマ：{val.theme}&emsp;{val.theme2}
                        </div>
                        <div className={styles.contentsWrapper}>
                            <div>
                                更新日：{val.date}&emsp;
                            </div>
                            <div>
                                引用元post：<a href={val.url} target="blank">【公式】遊戯王ラッシュデュエル X</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                {val.category !== '全体イラスト' && (
                    <div className={styles.imageWrapper}>
                        <a href={val.imageUrl} target="blank" >
                            <img src={val.imageUrl} alt={val.name} className={styles.imageSize}/>
                        </a>
                    </div>
                )}
            </div>
        </li>
    ))}
</ul>
);
  }