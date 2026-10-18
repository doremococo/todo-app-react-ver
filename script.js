const title = document.getElementById("app-title");
const todoAddBtn = document.getElementById("todo-add-button");
const inputTodo = document.getElementById("todo-add-input");

// todoの親要素
const todoList = document.getElementById("todo-list");

// title.innerText = "javascript反映のテスト";
todoAddBtn.addEventListener("click", (event) => {
    event.preventDefault(); // page遷移の防止　等
    console.log(`todoAddBtn_onclicked, inputTodo: ${inputTodo.value}`); // inputはvalueによって値を取り出す
    
    // inputで入力された値を入れるための箱を作成
    const addTodo = document.createElement("li");
    // その箱に、inputの値を格納
    addTodo.textContent = inputTodo.value; // 単純に値を入れたい時は textContent。値の中にHTMLtagも含むならinnerHTML
    console.log(`addTodo: ${addTodo.textContent}`);
    // todoを、Todo一覧に追加
    todoList.appendChild(addTodo);

    // todo入力欄の文字を初期化
    inputTodo.value = "";

})
