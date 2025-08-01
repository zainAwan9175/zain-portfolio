


export const loadData = () => async (dispatch:any) => {
  try {
    dispatch({
      type: "LoadDataRequest",
    });

  const response:any=await fetch("/api/portfolio");
      const jsonresponse=await response.json();


    dispatch({
      type: "LoadUserSuccess",
      payload: jsonresponse.data,
    });

  } catch (error:any) {

    dispatch({
      type: "LoadDataFail",
      payload: error.response?.data?.message || "Something went wrong",
    });
  }
};