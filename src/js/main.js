import { data } from "./data.js";
import { addComment } from "./user-input.js";
import { addReply } from "./user-input.js";
import { template } from "./template.js";

export const comments = data.comments;

//Populate comments
export const populateUI = (data) => {
  const commentsEl = document.querySelector("#comments");

  commentsEl.innerHTML = "";

  data.forEach(
    ({ id, content, createdAt, score, user: { image, username }, replies }) => {
      commentsEl.innerHTML += commentTemplate({
        id,
        content,
        createdAt,
        score,
        user: { image, username },
      });
      //Populate replies
      replies.forEach(
        ({
          id,
          content,
          createdAt,
          score,
          replyingTo,
          user: { image, username },
        }) => {
          commentsEl.innerHTML += replyTemplate({
            id,
            content,
            createdAt,
            score,
            replyingTo,
            user: { image, username },
          });
        }
      );
    }
  );
};

//Reusable function for the comment HTML template
const commentTemplate = ({
  id,
  content,
  createdAt,
  score,
  user: { image, username },
}) => {
  return template({
    id,
    content,
    createdAt,
    score,
    user: { image, username },
  });
};

//Reusable function for the reply HTML template
const replyTemplate = ({
  id,
  content,
  createdAt,
  score,
  replyingTo,
  user: { image, username },
}) => {
  return template({
    id,
    content,
    createdAt,
    score,
    replyingTo,
    user: { image, username },
  });
};

window.addEventListener("DOMContentLoaded", populateUI(comments));

//Show users comment/reply in the UI
const form = document.querySelector("#comment-form");

form.addEventListener("submit", (e) => {
  const userInput = document.querySelector("#comment-form textarea");
  if (userInput.value.trim()) {
    e.preventDefault();

    const userComment = addComment(userInput.value);
    comments.push(userComment);

    populateUI(comments);
  } else {
    alert("Please type in a valid text");
  }
  userInput.value = "";
});

export const renderReply = (targetId, replyingTo) => {
  const targetEl = document.getElementById(targetId);
  const replyForm = targetEl.nextElementSibling.querySelector("form");

  const input = replyForm.querySelector("textarea");

  replyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userReply = addReply(replyingTo, input.value);

    const comment = comments.find((c) => c.user.username === replyingTo);
    if (comment) {
      comment.replies.push(userReply);
    }
    populateUI(comments);
  });
};


