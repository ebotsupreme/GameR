/**
 *
 */
const handleSearchResultFeedPlaceholder = (number = 10) => [
  ...Array(number)
    .fill()
    .map((_, i) => i),
];

export { handleSearchResultFeedPlaceholder };
