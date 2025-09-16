import { renderReply } from "./main.js";

export function reply(targetId, isReply, replyingTo) {
  const targetEl = document.getElementById(targetId);
  targetEl.insertAdjacentHTML(
    "afterend",
    `
     <article
        class="bg-white rounded-md p-3 ${
          isReply ? "w-19/20 mt-1 mb-1" : "w-full mb-2 mt-2"
        } grid grid-cols-2 md:grid-cols-[auto_1fr_auto] gap-4 items-start"
      >
        <img
          src="/images/avatars/image-juliusomo.webp"
          alt="user-avatar"
          class="size-8 col-start-1 row-start-2 md:row-start-1 md:col-start-1"
        />

        <form action="#" class="contents">
          <textarea
            placeholder="Add a comment..."
            aria-label="user-comment"
            class="border border-gray-100 font-myfont text-grey-800 resize-none w-full rounded-md h-20 px-4 py-2 placeholder:text-gray-500 cursor-pointer focus:border-purple-600 focus:outline-none col-span-2 md:col-span-1 md:col-start-2"
            required
          > </textarea>
          <button
            type="submit"
            class="bg-purple-600 text-white font-myfont font-medium px-6 py-2 rounded-md justify-self-end cursor-pointer hover:bg-purple-200 col-start-2 row-start-2 md:col-start-3 md:row-start-1"
          >
            REPLY
          </button>
        </form>
    </article>
`
  );

  renderReply(targetId, replyingTo);
}
