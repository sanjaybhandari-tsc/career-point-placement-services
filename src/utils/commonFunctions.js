export const timeAgo = (dateString) => {
  const posted = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now - posted) / 1000);

  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)} days ago`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)} months ago`;

  return `${Math.floor(diff / 31536000)} years ago`;
};