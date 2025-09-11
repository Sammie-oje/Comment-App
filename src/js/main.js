import { data } from "./data.js";
import { addComment } from "./user-input.js";
import { commentForm } from "./form-template.js";

import { template } from "./template.js";

window.commentForm = commentForm;

let comments = [...data.comments];

//Populate comments
const populateComments = (data) => {
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

window.addEventListener("DOMContentLoaded", populateComments(comments));

//Show users comment/reply in the UI
const submitBtn = document.querySelector("form button");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const userInput = document.querySelector("form textarea");

  const userComment = addComment(userInput.value);
  comments.push(userComment);

  populateComments(comments);
  userInput.value = "";
});
