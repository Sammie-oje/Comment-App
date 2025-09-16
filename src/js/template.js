import { increaseCount } from "./counter.js";
import { decreaseCount } from "./counter.js";
import { data } from "./data.js";
import { reply } from "./form-template.js";

window.increaseCount = increaseCount;
window.decreaseCount = decreaseCount;
window.reply = reply;

export function template({
  id,
  content,
  createdAt,
  score,
  replyingTo,
  user: { image, username },
}) {
  const isReply = Boolean(replyingTo);
  const isCurrentUser = username === data.currentUser.username;

  const article = `
    <article id="comment-${id}" class="bg-white relative rounded-lg ${
    isReply ? "w-19/20 mt-2" : "w-full mb-4 mt-2"
  } p-4 grid grid-cols-2 md:grid-cols-[auto_1fr_auto] gap-6 items-start"
      >
      <div class="col-start-1 row-start-2 w-fit px-2.5 py-1.5 bg-grey-50 rounded-lg flex flex-row gap-3 items-center md:row-start-1 md:col-start-1 md:flex-col md:py-3.5 md:px-2.5">
        <button class="cursor-pointer" onclick="increaseCount(${id})">
          <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" 
              fill="#C5C6EF"
              class="active:fill-grey-500"
            />
          </svg>
        </button>
        <span class="font-[Rubik] font-bold text-purple-600 " id="score-count-${id}">${score}</span>
        <button class="cursor-pointer" onclick="decreaseCount(${id})">
          <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" 
              fill="#C5C6EF"
              class="active:fill-grey-500"
            />
          </svg>
        </button>
      </div>

      <div class="col-span-2 md:col-span-1 md:col-start-2">
        <span class="flex gap-2 items-center">
          <img
            src="${image.webp}"
            alt="avatar"
            class="size-6"
          />
          <b class="font-[Rubik] text-sm">${username}</b>
          ${
            isCurrentUser
              ? `<span class="bg-purple-600 text-white px-2 text-sm font-medium rounded-sm">you</span>`
              : ""
          }
          <time datetime="2025-07-12" class="font-[Rubik] text-grey-500 text-sm">${createdAt}</time>
        </span>
        <p class="font-[Rubik] text-grey-500 mt-3 text-base/6">
          ${
            isReply
              ? `<strong class="text-purple-600">@${replyingTo}</strong>`
              : ""
          } ${content}
        </p>
      </div>

        ${
          isCurrentUser
            ? `<div class="flex items-center gap-4 self-center justify-self-end col-start-2 row-start-2 md:absolute md:row-start-1 md:top-0 md:right-8">

                <button class="text-pink-400 group font-medium flex items-center gap-2 cursor-pointer">
                  <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368" class="group-hover:fill-pink-200"/>
                  </svg>
                  <span class="font-[Rubik] text-sm group-hover:text-pink-200">Delete</span>
                </button>

                <button class="text-purple-600 group font-medium flex items-center gap-2 cursor-pointer">
                  <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6" class="group-hover:fill-purple-200" />
                  </svg>
                  <span class="font-[Rubik] text-sm group-hover:text-purple-200">Edit</span>
                </button>
              </div>`
            : `<button onclick="reply('${
                isReply ? `reply-wrapper-${id}` : `comment-${id}`
              }', ${isReply}, '${username}')" class="text-purple-600 self-center group font-medium flex items-center gap-2 justify-self-end cursor-pointer col-start-2 row-start-2 md:absolute md:row-start-1 md:top-0 md:right-8" >
          <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
            fill="#5357B6" class="group-hover:fill-purple-200"/>
          </svg>
          <span class="font-[Rubik] text-sm group-hover:text-purple-200">Reply</span>
        </button>`
        }
    </article>
`;

  return isReply
    ? `<div id="reply-wrapper-${id}" class="flex justify-end border-l-2 pb-2 border-grey-100">${article}</div>`
    : article;
}
