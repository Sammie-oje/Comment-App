import { comments } from "./main.js";

export const editInput = (id, editBtn) => {
  const el = document.getElementById(id);
  const para = el.querySelector("p");

  para.contentEditable = true;
  para.focus();

  const updateBtn = `
    <button
      class="bg-purple-600 text-white font-myfont font-medium px-6 py-2 mt-2 rounded-md ml-auto cursor-pointer hover:bg-purple-200"
      id="update-btn-${id}"
    >
      UPDATE
    </button>
  `;

  para.insertAdjacentHTML("afterend", updateBtn);

  editBtn.disabled = true;
  editBtn.style.cursor = "not-allowed";

  const btn = document.getElementById(`update-btn-${id}`);
  btn.addEventListener("click", () => {
    updateInput(para.textContent, id, para, editBtn);
  });
};

const updateInput = (content, id, editPara, editBtn) => {
  const editedData = findRecursive(comments, id);
  //Update the Dataement content in the data structure / DOM
  if (editedData) {
    editedData.content = content;
    editPara.textContent = content;
    editPara.contentEditable = false;
  }

  const btn = document.getElementById(`update-btn-${id}`);
  btn.remove();

  editBtn.disabled = false;
  editBtn.style.cursor = "pointer";
};

const findRecursive = (arr, id) => {
  for (const item of arr) {
    if (item.id === Number(id)) return item;

    //Dig deep into nested replies
    if (item.replies && item.replies.length > 0) {
      const foundReply = findRecursive(item.replies, id);
      if (foundReply) return foundReply;
    }
  }
  return null;
};
