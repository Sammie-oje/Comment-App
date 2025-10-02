import { comments } from "./main.js";

export const deleteInput = (id) => {
  modalOnClick(id);
};

const modalOnClick = (id) => {
  const modal = `
  <dialog id="modal-${id}" class="py-4 px-6 mx-auto mt-[50vh] -translate-y-1/2 rounded-lg w-full max-w-90">
    <h3 class="font-myfont text-grey-800 font-bold text-xl mb-2">Delete comment</h3>
    <p class="font-myfont text-grey-500 font-medium text-base">
      Are you sure you want to delete this comment? This will remove the comment and can't be undone.
    </p>
    <div class="mt-2 flex flex-row justify-between">
      <button 
        class="bg-grey-500 text-white font-myfont font-medium px-4 py-2 mt-2 rounded-md cursor-pointer hover:bg-grey-100"
        id="cancel-btn-${id}"
      >
        NO, CANCEL
      </button>
      <button 
        class="bg-pink-400 text-white font-myfont font-medium px-4 py-2 mt-2 rounded-md cursor-pointer hover:bg-pink-200"
        id="delete-btn-${id}"
      >
        YES, DELETE
      </button>
    </div>
  </dialog>
  `;

  const mainEl = document.querySelector("main");
  mainEl.insertAdjacentHTML("beforeend", modal);
  //Show modal on render
  const modalEl = document.getElementById(`modal-${id}`);
  modalEl.showModal();

  const cancelBtn = document.getElementById(`cancel-btn-${id}`);
  cancelBtn.addEventListener("click", () => {
    modalEl.close();
  });

  const deleteBtn = document.getElementById(`delete-btn-${id}`);
  deleteBtn.addEventListener("click", () => {
    modalEl.close();
    const deleteEl = document.getElementById(id);
    deleteEl.remove();
    deleteRecursive(comments, id);
  });
};

const deleteRecursive = (arr, id) => {
  const deleteIndex = arr.findIndex((item) => item.id === Number(id));

  if (deleteIndex !== -1) {
    arr.splice(deleteIndex, 1);
    return true;
  }

  for (const item of arr) {
    if (item.replies && deleteRecursive(item.replies, id)) {
      return true;
    }
  }
  return false;
};
