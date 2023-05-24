import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  //htmlのdomを作成
  const div = document.createElement("div");
  //class名を付与
  div.className = "list-row";

  const li = document.createElement("li");
  //listタグの中身に要素を格納していく
  li.innerText = inputText;

  //divタグの子要素に各要素を設定していく
  div.appendChild(li);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  //idを取得する
  .getElementById("add-button")
  //イベントを付与する
  .addEventListener("click", () => onClickAdd());
