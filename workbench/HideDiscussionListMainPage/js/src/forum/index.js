import app from "flarum/app";
import { extend } from "flarum/extend";
import HeaderPrimary from "flarum/components/HeaderPrimary";

app.initializers.add("always-show-suggestion", function () {
  extend(HeaderPrimary.prototype, "config", function (isInitialized, context) {
    if (isInitialized) return;
    const contentContainer = document.getElementsByClassName("App-content")[0];

    // NOTE: All path put in here must have both slash at the start and end.
    const possibleDevRoute = ["/", "/public/", "/flarum/public/"];
    const currentPath = window.location.pathname;
    if (possibleDevRoute.some((route) => currentPath === route)) {
      contentContainer.classList.add("mr-0");
    } else {
      contentContainer.classList.remove("mr-0");
    }
    if (!app.cache.discussionList) {
      contentContainer.classList.add("mr-0");
    }
  });
});
