export const getFilteredFaq = (faqList = [], filter) => {
  const result = faqList.filter((item) =>
    filter.every(
      (el) =>
        item.title
          .toLowerCase()
          .replace(/<\/?[^>]+(>|$)/g, "")
          .replace(/\&nbsp;/g, "")
          .replace(/[|&;$%@"<>()+,]/g, "")
          .includes(el) ||
        item.content
          .toLowerCase()
          .replace(/<\/?[^>]+(>|$)/g, "")
          .replace(/\&nbsp;/g, "")
          .replace(/[|&;$%@"<>()+,]/g, "")
          .includes(el)
    )
  );
  return result;
};
