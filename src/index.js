import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得、初期化
  //getElementByIdでidを取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  //removechildで子要素の中から指定の要素を削除できる
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  //class名を付与
  div.className = "list-row";

  const li = document.createElement("li");
  //listタグの中身に要素を格納していく
  li.innerText = text;

  //buttonタグ(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const addTarget = completeButton.parentNode;
    deleteFromIncompleteList(addTarget);

    // 完了リストに追加する要素
    //div要素の中の最初の要素(li要素)を取得する
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const backTarget = backButton.parentNode;
      //削除
      document.getElementById("complete-list").removeChild(backTarget);

      //テキスト取得、liタグ生成
      const text = backTarget.firstElementChild.innerText;
      //未完了リストへの追加なので共通化した処理を用いることができる
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  //buttonタグ(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除ボタンが押された時に親タグ(div)を未完了リストから削除する
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  //divタグの子要素に各要素を設定していく
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  //idを取得する
  .getElementById("add-button")
  //idを目印にしてイベントを付与する
  //クリックイベントが発生した時にonClickAddを実行する
  .addEventListener("click", () => onClickAdd());
>>>>>>> 15661f94b8495349a26dad1c26f39a151782187e
