export const transformTableData = (data: any[] | any) => {
  if (Array.isArray(data)) {
    return {
      data,
      total: data.length,
    };
  }
  return data;
};

export default {};
