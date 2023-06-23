export const getCookie = (name) => {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : "";
};

export const saveCookie = (name, value) => {
  document.cookie = `${name}=${accessToken}; path=/`;
};

export const deleteTokens = (name) => {
  document.cookie = `${name}=; path=/`;
};
