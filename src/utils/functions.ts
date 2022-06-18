export const calcPageCount = async (
  maxNumPerPage: number,
  allCount: number
): Promise<number> => {
  return allCount % maxNumPerPage === 0
    ? allCount / maxNumPerPage
    : Math.floor(allCount / maxNumPerPage) + 1
}
