//検索ページ中身
import { useState, useMemo, useEffect } from 'react';
import styles from './page.module.css';
import ImageDataListItem from './imageDataListItem';
import TypeName from './data/typeName';
import ThemeName from './data/themeName';


export default function IllustSearch({ data }) {
    // 定数
    const sortArr = ["更新日付（新しい順）", "更新日付（古い順）", "50音順"];
    const itemsPerPageOptions = [30, 50, data.length];
    // State
    const [name, setName] = useState("");
    const [sort, setSort] = useState("更新日付（新しい順）");
    const [categoryFilter, setCategoryFilter] = useState('all'); // 'all', '設定画', '全体イラスト'
    const [filterMode, setFilterMode] = useState('type'); // 'type' or 'theme'
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedThemes, setSelectedThemes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);

    // フィルターとソートを適用したデータ
    const filteredData = useMemo(() => {
        let result = [...data];

        // 1. イラスト種類でフィルター
        if (categoryFilter !== 'all') {
            result = result.filter(item => item.category === categoryFilter);
        }

        // 2. 名前でフィルター
        if (name) {
            const reg = new RegExp(name, 'i');
            result = result.filter(item => item.ruby.match(reg) || item.name.match(reg));
        }

        // 3. 種族またはテーマでフィルター
        if (filterMode === 'type' && selectedTypes.length > 0) {
            result = result.filter(item => selectedTypes.includes(item.type));
        } else if (filterMode === 'theme' && selectedThemes.length > 0) {
            result = result.filter(item => selectedThemes.includes(item.theme) || selectedThemes.includes(item.theme2));
        }

        // 4. ソート
        if (sort === "更新日付（古い順）") {
            result.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (sort === "更新日付（新しい順）") {
            result.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sort === "50音順") {
            result.sort((a, b) => a.ruby.localeCompare(b.ruby, 'ja'));
        }
        return result;
    }, [data, name, categoryFilter, filterMode, selectedTypes, selectedThemes, sort]);

    // フィルター条件が変更されたら、1ページ目に戻す
    useEffect(() => {
        setCurrentPage(1);
    }, [name, categoryFilter, filterMode, selectedTypes, selectedThemes, itemsPerPage]);

    // ページネーション適用後のデータ
    const paginatedData = useMemo(() => {
        if (itemsPerPage >= filteredData.length) { // "全件"表示の場合
            return filteredData;
        }
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredData.slice(startIndex, endIndex);
    }, [filteredData, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

////////// イベントハンドラ //////////
    // カード名入力ボックスのvalueをリアルタイムで取得
    const handleNameChange = (event) => setName(event.target.value);

    // カード名入力ボックスのクリアボタン
    const handleNameClear = () => setName("");

    // 種族・テーマの切り替え
    const handleFilterModeChange = (mode) => {
        setFilterMode(mode);
        setSelectedTypes([]);
        setSelectedThemes([]);
    };

    // 種族絞り込み
    const handleTypeChange = (event) => {
        const { value, checked } = event.target;
        setSelectedTypes(prev => checked ? [...prev, value] : prev.filter(t => t !== value));
    };
    // テーマ絞り込み
    const handleThemeChange = (event) => {
        const { value, checked } = event.target;
        setSelectedThemes(prev => checked ? [...prev, value] : prev.filter(t => t !== value));
    };

    // 更新日付によるソート
    const handleSortChange = (event) => setSort(event.target.value);
    
    // 表示件数の変更
    const handleItemsPerPageChange = (event) => setItemsPerPage(Number(event.target.value));
    
    // ページネーションのページ遷移
    // 表示件数の変更や絞り込みに伴い総ページが変わるためstate処理が必要
    const goToPage = (pageNumber) => setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)));

    return (
        <div className={styles.wrapper}>
            {/* 名前検索エリア */}
            <div className={styles.searchAreaWrapper}>
                <div>
                    <input
                        type="text"
                        placeholder="カード名を入力"
                        value={name}
                        onChange={handleNameChange}
                        className={styles.onChangeName}
                    />
                    <button type="button" onClick={handleNameClear} className={styles.onClickClear}> × </button>
                </div>
                {/* イラスト種類 絞り込み */}
                <div className={styles.categoryFilter}>
                   <label>
                        <input 
                        type="radio" 
                        name="category" 
                        value="all" 
                        checked={categoryFilter === 'all'} 
                        onChange={(e) => setCategoryFilter(e.target.value)} 
                        className={styles.visuallyHidden} />
                        <span className={`${styles.filterButton} ${categoryFilter === 'all' ? styles.activeFilter : ''}`}>すべて表示</span>
                    </label>
                    <label>
                        <input 
                        type="radio" 
                        name="category" 
                        value="設定画" 
                        checked={categoryFilter === '設定画'} 
                        onChange={(e) => setCategoryFilter(e.target.value)} 
                        className={styles.visuallyHidden} />
                        <span className={`${styles.filterButton} ${categoryFilter === '設定画' ? styles.activeFilter : ''}`}>設定画のみ</span>
                    </label>
                    <label>
                        <input 
                        type="radio" 
                        name="category" 
                        value="全体イラスト" 
                        checked={categoryFilter === '全体イラスト'} 
                        onChange={(e) => setCategoryFilter(e.target.value)} 
                        className={styles.visuallyHidden} />
                        <span className={`${styles.filterButton} ${categoryFilter === '全体イラスト' ? styles.activeFilter : ''}`}>全体イラストのみ</span>
                    </label>
                </div>
            </div>

            {/* 種族/テーマ タブUI */}
            <div className={styles.tabContainer}>
                <div className={styles.tabButtons}>
                    <button 
                    onClick={() => handleFilterModeChange('type')} 
                    className={filterMode === 'type' ? styles.activeTab : ''}>
                        種族で絞り込む
                    </button>
                    <button 
                    onClick={() => handleFilterModeChange('theme')} 
                    className={filterMode === 'theme' ? styles.activeTab : ''}>
                        テーマで絞り込む
                    </button>
                </div>
                <div className={styles.tabContent}>
                    {filterMode === 'type' && (
                        <ul className={styles.ulSort}>
                            {TypeName.map((type) => (
                                <li key={type}>
                                    <label className={styles.labelSort}>
                                        <input type="checkbox" 
                                        value={type} 
                                        onChange={handleTypeChange} 
                                        checked={selectedTypes.includes(type)} />
                                        <span className={styles.spanSort}>
                                            {type === "魔法"||type === "罠" ? type : `${type}族`}
                                        </span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    )}
                    {filterMode === 'theme' && (
                         <ul className={styles.ulSort}>
                            {ThemeName.map((theme) => (
                                <li key={theme}>
                                    <label className={styles.labelSort}>
                                        <input type="checkbox" value={theme} onChange={handleThemeChange} checked={selectedThemes.includes(theme)} />
                                        <span className={styles.spanSort}>{theme}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* 検索結果数とソート */}
            <div className={styles.sortWrapper}>
                <p className={styles.resultNumber}>
                    検索結果&nbsp;{filteredData.length}&nbsp;件
                </p>
                <div className={styles.itemsPerPageSelector}>
                    <label htmlFor="items-per-page">表示件数:</label>
                    <select 
                    id="items-per-page" 
                    onChange={handleItemsPerPageChange} 
                    value={itemsPerPage}>
                        {itemsPerPageOptions.map(option => (
                            <option key={option} value={option}>{option === data.length ? '全件' : `${option}件`}</option>
                        ))}
                    </select>
                    <select 
                    id="sortOption" 
                    onChange={handleSortChange} 
                    value={sort} 
                    className={styles.onChangeSort}>
                        {sortArr.map((sortOption) => ( <option key={sortOption} value={sortOption}>{sortOption}</option> ))}
                    </select>
                </div>
            </div>

            {/* ページネーション */}
            {totalPages > 1 && (
                <div className={styles.paginationControls}>
                    <div className={styles.pagination}>
                        <button onClick={() => goToPage(1)} disabled={currentPage === 1}> &lt;&lt; </button>
                        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}> &lt; 前へ </button>
                        <span>{currentPage} / {totalPages}</span>
                        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}> 次へ &gt; </button>
                        <button onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages}> &gt;&gt; </button>
                    </div>
                </div>
            )}

            {/* データリスト表示 */}
            <ImageDataListItem data={paginatedData} />
        </div>
    );
}